'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/users/me/permissions',
      handler: 'user-permission.getMyPermissions',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
