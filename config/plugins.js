module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST'),
        port: env.int('SMTP_PORT'),
        auth: {
          user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD'),
        },
      },
      settings: {
        defaultFrom: 'no-reply@college.com',
        defaultReplyTo: 'admin@college.com',
      },
    },
  },
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {
          upload_preset: env('CLOUDINARY_UPLOAD_PRESET', 'KIT_strapi_media'),
          folder: env('CLOUDINARY_FOLDER', 'KIT-Website'),
        },
        uploadStream: {
          upload_preset: env('CLOUDINARY_UPLOAD_PRESET', 'KIT_strapi_media'),
          folder: env('CLOUDINARY_FOLDER', 'KIT-Website'),
        },
        delete: {},
      },
    },
  },
});
