'use strict';

/**
 * hall-ticket service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hall-ticket.hall-ticket');
