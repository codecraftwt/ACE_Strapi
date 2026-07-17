'use strict';

const { createCoreRouter } = require('@strapi/strapi').factories;

const customRoutes = [
  {
    method: 'POST',
    path: '/faculties/register',
    handler: 'faculty.register',
    config: {
      auth: false,
      policies: [],
      middlewares: [],
    },
  },
  {
    method: 'PUT',
    path: '/faculties/:id/approve',
    handler: 'faculty.approve',
    config: {
      policies: [],
      middlewares: [],
    },
  },
];

module.exports = ({ strapi }) => {
  const defaultRouter = createCoreRouter('api::faculty.faculty');
  const { routes } = defaultRouter;
  return {
    routes: [...routes, ...customRoutes],
  };
};
