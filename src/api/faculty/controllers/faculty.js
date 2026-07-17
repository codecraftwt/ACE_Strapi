'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::faculty.faculty', ({ strapi }) => ({

  async register(ctx) {
    const {
      username,
      email,
      password,
      Name,
      Address,
      Phone,
      qualification,
      designation,
      department,
      Exprience,
      Joining_date,
      Profile_photo,
    } = ctx.request.body;

    if (!username || !email || !password) {
      return ctx.badRequest('Username, email, and password are required');
    }

    const facultyRole = await strapi.db
      .query('plugin::users-permissions.role')
      .findOne({
        where: {
          type: 'faculty',
        },
      });

    if (!facultyRole) {
      return ctx.badRequest('Faculty role not found');
    }

    const userService = strapi.plugin('users-permissions').service('user');

    const newUser = await userService.add({
      username,
      email: email.toLowerCase(),
      password,
      provider: 'local',
      role: facultyRole.id,
      confirmed: false,
      blocked: true,
    });

    const sanitizedUser = await strapi.contentAPI.sanitize.output(
      newUser,
      strapi.getModel('plugin::users-permissions.user'),
      { auth: false }
    );

    const facultyProfile = await strapi.entityService.create('api::faculty.faculty', {
      data: {
        Name,
        Address,
        Phone,
        qualification,
        designation,
        Exprience,
        Joining_date,
        Profile_photo,
        department,
        Email: email.toLowerCase(),
        users_permissions_user: newUser.id,
        publishedAt: new Date(),
      },
      populate: {
        department: true,
        Profile_photo: true,
        users_permissions_user: true,
      },
    });

    return ctx.created({
      user: sanitizedUser,
      faculty: facultyProfile,
      facultyDocumentId: facultyProfile.documentId,
    });
  },

  async approve(ctx) {
    const { id } = ctx.params;

    const faculty = await strapi.entityService.findOne(
      'api::faculty.faculty',
      id,
      {
        populate: ['users_permissions_user'],
      }
    );

    if (!faculty) {
      return ctx.notFound('Faculty not found');
    }

    const userId = faculty.users_permissions_user?.id;

    if (!userId) {
      return ctx.badRequest('Faculty has no linked user');
    }

    await strapi.db.query('plugin::users-permissions.user').update({
      where: {
        id: userId,
      },
      data: {
        blocked: false,
        confirmed: true,
      },
    });

    return ctx.send({
      message: 'Faculty approved successfully',
    });
  },

}));