'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::student.student', ({ strapi }) => ({
  async find(ctx) {
    await this.applyHODFilter(ctx);
    return super.find(ctx);
  },

  async findOne(ctx) {
    await this.applyHODFilter(ctx);
    return super.findOne(ctx);
  },

  async applyHODFilter(ctx) {
    const user = ctx.state.user;
    if (!user) return;

    let faculties = await strapi.entityService.findMany('api::faculty.faculty', {
      filters: { users_permissions_user: { id: user.id } },
      populate: ['department'],
      limit: 1,
    });

    if (!faculties.length && user.email) {
      faculties = await strapi.entityService.findMany('api::faculty.faculty', {
        filters: { Email: { $eq: user.email } },
        populate: ['department'],
        limit: 1,
      });
    }

    const faculty = faculties[0];
    if (faculty && faculty.designation === 'HOD' && faculty.department) {
      ctx.query = {
        ...ctx.query,
        filters: {
          ...ctx.query.filters,
          department: {
            documentId: faculty.department.documentId,
          },
        },
      };
    }
  },
}));
