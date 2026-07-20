'use strict';

const { createCoreRouter } = require('@strapi/strapi').factories;

const defaultRouter = createCoreRouter('api::result.result');

const customRoutes = [
  {
    method: 'POST',
    path: '/results/bulk',
    handler: 'result.bulkCreate',
    config: {},
  },
  {
    method: 'PUT',
    path: '/results/bulk-update',
    handler: 'result.bulkUpdate',
    config: {},
  },
  {
    method: 'POST',
    path: '/results/bulk-release',
    handler: 'result.bulkRelease',
    config: {},
  },
  {
    method: 'POST',
    path: '/results/bulk-delete',
    handler: 'result.bulkDelete',
    config: {},
  },
];

module.exports = {
  get routes() {
    return [...defaultRouter.routes, ...customRoutes];
  },
};
