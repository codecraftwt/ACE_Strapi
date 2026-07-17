'use strict';

/**
 * cutoff service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cutoff.cutoff');
