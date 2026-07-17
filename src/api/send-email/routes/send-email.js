'use strict';

const { createCoreRouter } = require('@strapi/strapi').factories;

const baseRouter = createCoreRouter('api::send-email.send-email');

let cachedRoutes;

module.exports = {
  type: baseRouter.type,
  prefix: baseRouter.prefix,
  get routes() {
    if (cachedRoutes) return cachedRoutes;
    const baseRoutes = baseRouter.routes;
    cachedRoutes = [
      ...baseRoutes,
      {
        method: 'POST',
        path: '/send-email/student',
        handler: 'send-email.sendStudentEmail',
      },
    ];
    return cachedRoutes;
  },
};
