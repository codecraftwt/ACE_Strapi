'use strict';

const path = require('path');
const { strings } = require('@strapi/utils');

const getCloudinaryMethodOptions = (strapi, methodName) =>
  strapi.config.get('plugin::upload', {}).actionOptions?.[methodName] || {};

const toPublicId = (file) => {
  const name = file?.name || file?.originalFilename || 'untitled';
  const ext = path.extname(name);
  const basename = ext ? name.slice(0, -ext.length) : name;
  const slug = strings.nameToSlug(basename, { separator: '_', lowercase: false });
  return slug || 'untitled';
};

const extendCloudinaryProvider = (strapi) => {
  const provider = strapi.plugin('upload').provider;

  const baseUpload = provider.upload;
  const baseUploadStream = provider.uploadStream;
  const baseDelete = provider.delete;

  const uploadWithPublicId = async (file, options = {}) => {
    const upload = baseUploadStream || baseUpload;
    return upload(file, {
      public_id: toPublicId(file),
      overwrite: true,
      invalidate: true,
      unique_filename: false,
      use_filename: true,
      ...getCloudinaryMethodOptions(strapi, 'uploadStream'),
      ...options,
    });
  };

  const replaceWithPublicId = async (newFile, oldFile, options = {}) => {
    const oldPublicId = oldFile?.provider_metadata?.public_id;
    const newPublicId = toPublicId(newFile);
    const oldBasename = oldPublicId ? oldPublicId.split('/').pop() : null;

    if (oldPublicId && oldBasename === newPublicId) {
      return uploadWithPublicId(newFile, options);
    }

    await uploadWithPublicId(newFile, options);
    if (oldPublicId) {
      try {
        await baseDelete(oldFile);
      } catch (error) {
        strapi.log.warn?.('Could not delete replaced asset on Cloudinary', { error });
      }
    }
  };

  provider.extend({
    uploadStream: (file, options = {}) => uploadWithPublicId(file, options),
    upload: (file, options = {}) => uploadWithPublicId(file, options),
    replaceStream: (newFile, oldFile, options = {}) => replaceWithPublicId(newFile, oldFile, options),
    replace: (newFile, oldFile, options = {}) => replaceWithPublicId(newFile, oldFile, options),
  });
};

module.exports = (plugin) => {
  // Upload only the original image: no thumbnail and no responsive formats.
  const baseImageManipulation = plugin.services['image-manipulation'];
  plugin.services['image-manipulation'] = {
    ...baseImageManipulation,
    generateThumbnail: async () => null,
    generateResponsiveFormats: async () => [],
  };

  // Re-uploading a filename updates the existing media record instead of
  // creating a duplicate row in the upload_file table.
  const baseUploadFactory = plugin.services.upload;
  plugin.services.upload = ({ strapi }) => {
    const base = baseUploadFactory({ strapi });
    return {
      ...base,
      async upload({ data, files }, opts) {
        const provider = strapi.config.get('plugin::upload').provider;
        const { fileInfo } = data || {};
        const fileInfoArray = Array.isArray(fileInfo) ? fileInfo : [fileInfo];
        const fileArray = Array.isArray(files) ? files : [files];
        const results = [];

        for (let i = 0; i < fileArray.length; i += 1) {
          const file = fileArray[i];
          const info = fileInfoArray[i] || {};
          const targetName = (info.name || file.originalFilename || 'unamed').normalize();

          const existing = await strapi.db.query('plugin::upload.file').findOne({
            where: { name: targetName, provider },
          });

          if (existing) {
            results.push(await base.replace(existing.id, { data: { fileInfo: info }, file }, opts));
          } else {
            results.push(...(await base.upload({ data: { fileInfo: info }, files: [file] }, opts)));
          }
        }

        return results;
      },
    };
  };

  // Use the original filename as the Cloudinary public_id for every upload.
  const originalBootstrap = plugin.bootstrap;
  plugin.bootstrap = async (ctx) => {
    if (typeof originalBootstrap === 'function') {
      await originalBootstrap(ctx);
    }
    extendCloudinaryProvider(ctx.strapi);
  };

  return plugin;
};
