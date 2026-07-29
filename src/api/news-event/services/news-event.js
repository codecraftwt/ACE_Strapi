'use strict';

/**
 * news-event service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::news-event.news-event');
