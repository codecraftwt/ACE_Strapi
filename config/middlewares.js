module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',

  {
    name: 'global::department-rbac',
    config: {},
  },

  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];