'use strict';

const { createCoreRouter } = require('@strapi/strapi').factories;

const baseRouter = createCoreRouter('api::notice.notice');

let cachedRoutes;

module.exports = {
  type: baseRouter.type,
  prefix: baseRouter.prefix,
  get routes() {
    if (cachedRoutes) return cachedRoutes;
    const baseRoutes = baseRouter.routes;
    cachedRoutes = [...baseRoutes];
    return cachedRoutes;
  },
};
