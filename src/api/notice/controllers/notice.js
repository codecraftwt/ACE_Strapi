//@ts-nocheck

'use strict';

const { createCoreController } = require('@strapi/strapi').factories;
module.exports = createCoreController('api::notice.notice', ({ strapi }) => ({

  async find(ctx) {
    const hodFaculty = await this.getHODFaculty(ctx);

    if (hodFaculty) {
      ctx.query = {
        ...ctx.query,
        filters: {
          ...ctx.query.filters,
          department: {
            documentId: hodFaculty.department.documentId,
          },
        },
      };
    }

    return super.find(ctx);
  },

  async findOne(ctx) {
    const hodFaculty = await this.getHODFaculty(ctx);

    if (hodFaculty) {
      ctx.query = {
        ...ctx.query,
        filters: {
          ...ctx.query.filters,
          department: {
            documentId: hodFaculty.department.documentId,
          },
        },
      };
    }

    return super.findOne(ctx);
  },

  async create(ctx) {
    const hodFaculty = await this.getHODFaculty(ctx);

    if (hodFaculty) {
      ctx.request.body.data = {
        ...ctx.request.body.data,
        department: hodFaculty.department.documentId,
      };
    }

    return super.create(ctx);
  },

  async update(ctx) {
    const hodFaculty = await this.getHODFaculty(ctx);

    if (hodFaculty) {
      const noticeId = ctx.params.id;
      const existingNotice = await strapi.entityService.findOne(
        'api::notice.notice',
        noticeId,
        { populate: ['department'] }
      );

      if (
        existingNotice &&
        existingNotice.department &&
        existingNotice.department.documentId !== hodFaculty.department.documentId
      ) {
        return ctx.forbidden('You cannot update notice from another department');
      }

      ctx.request.body.data = {
        ...ctx.request.body.data,
        department: hodFaculty.department.documentId,
      };
    }

    return super.update(ctx);
  },

  async getHODFaculty(ctx) {
    const user = ctx.state.user;
    if (!user) return null;

    let faculties = await strapi.entityService.findMany('api::faculty.faculty', {
      filters: { users_permissions_user: { id: user.id }, designation: { $eq: 'HOD' } },
      populate: ['department'],
      limit: 1,
    });

    if (!faculties.length && user.email) {
      faculties = await strapi.entityService.findMany('api::faculty.faculty', {
        filters: { Email: { $eq: user.email }, designation: { $eq: 'HOD' } },
        populate: ['department'],
        limit: 1,
      });
    }

    const faculty = faculties[0];
    if (!faculty || !faculty.department) return null;
    return faculty;
  },

}));
