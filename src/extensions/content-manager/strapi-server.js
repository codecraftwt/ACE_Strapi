'use strict';

async function findHODFaculty(email, strapi) {
  const faculty = await strapi.db.query('api::faculty.faculty').findOne({
    where: { Email: { $eqi: email }, designation: 'HOD' },
    populate: ['department'],
  });

  if (faculty && faculty.department) return faculty;

  const apiUser = await strapi.db.query('plugin::users-permissions.user').findOne({
    where: { email },
  });

  if (apiUser) {
    const faculty2 = await strapi.db.query('api::faculty.faculty').findOne({
      where: { users_permissions_user: apiUser.id, designation: 'HOD' },
      populate: ['department'],
    });

    if (faculty2 && faculty2.department) return faculty2;
  }

  return null;
}

module.exports = (plugin) => {
  const ctrl = plugin.controllers['collection-types'];

  const originalFind = ctrl.find;
  const originalFindOne = ctrl.findOne;
  const originalFindContentTypeConfiguration = ctrl.findContentTypeConfiguration;

  ctrl.find = async (ctx) => {
    if (ctx.params.model === 'api::student.student') {
      const user = ctx.state.user;
      if (user && user.email) {
        const faculty = await findHODFaculty(user.email, strapi);
        if (faculty) {
          ctx.query = {
            ...ctx.query,
            filters: {
              ...ctx.query.filters,
              department: { documentId: faculty.department.documentId },
            },
          };
        }
      }
    }
    return originalFind(ctx);
  };

  ctrl.findOne = async (ctx) => {
    if (ctx.params.model === 'api::student.student') {
      const user = ctx.state.user;
      if (user && user.email) {
        const faculty = await findHODFaculty(user.email, strapi);
        if (faculty) {
          ctx.query = {
            ...ctx.query,
            filters: {
              ...ctx.query.filters,
              department: { documentId: faculty.department.documentId },
            },
          };
        }
      }
    }
    return originalFindOne(ctx);
  };

  ctrl.findContentTypeConfiguration = async (ctx) => {
    const result = await originalFindContentTypeConfiguration(ctx);

    if (ctx.params.model === 'api::notice.notice') {
      const user = ctx.state && ctx.state.user;
      if (user && user.email) {
        const faculty = await findHODFaculty(user.email, strapi);
        if (faculty && faculty.department) {
          const metadatas = result.data?.contentType?.metadatas;
          if (metadatas && metadatas.department) {
            metadatas.department.edit.editable = false;
          }
        }
      }
    }

    return result;
  };

  return plugin;
};
