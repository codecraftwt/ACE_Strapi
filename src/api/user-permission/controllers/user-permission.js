'use strict';

module.exports = {
  async getMyPermissions(ctx) {
    try {
      const loggedInUser = ctx.state.user;

      if (!loggedInUser) {
        return ctx.unauthorized('You must be logged in');
      }

      const user = await strapi.db
        .query('plugin::users-permissions.user')
        .findOne({
          where: {
            id: loggedInUser.id,
          },
          populate: {
            role: true,
          },
        });

      if (!user?.role) {
        return ctx.send({
          role: null,
          permissions: [],
        });
      }

      const rolePermissions = await strapi.db
        .query('plugin::users-permissions.permission')
        .findMany({
          where: {
            role: {
              id: user.role.id,
            },
          },
          select: ['action'],
        });

      return ctx.send({
        role: {
          id: user.role.id,
          name: user.role.name,
          type: user.role.type,
        },
        permissions: rolePermissions.map(
          (permission) => permission.action
        ),
      });
    } catch (error) {
      strapi.log.error(
        'Get logged-in user permissions error:',
        error
      );

      return ctx.internalServerError(
        'Unable to fetch permissions'
      );
    }
  },
};
