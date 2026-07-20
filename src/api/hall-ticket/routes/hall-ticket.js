'use strict';

const { createCoreRouter } = require('@strapi/strapi').factories;

const defaultRouter = createCoreRouter('api::hall-ticket.hall-ticket');

const customRoutes = [
  {
    method: 'POST',
    path: '/hall-tickets/bulk',
    handler: 'hall-ticket.bulkCreate',
    config: { policies: [], middlewares: [] },
  },
  {
    method: 'PUT',
    path: '/hall-tickets/bulk-update',
    handler: 'hall-ticket.bulkUpdate',
    config: { policies: [], middlewares: [] },
  },
  {
    method: 'POST',
    path: '/hall-tickets/bulk-delete',
    handler: 'hall-ticket.bulkDelete',
    config: { policies: [], middlewares: [] },
  },
];

module.exports = {
  get routes() {
    return [...defaultRouter.routes, ...customRoutes];
  },
};
