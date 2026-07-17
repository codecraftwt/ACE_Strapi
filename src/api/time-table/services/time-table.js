'use strict';

/**
 * time-table service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::time-table.time-table');
