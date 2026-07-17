'use strict';

/**
 * cutoff router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::cutoff.cutoff');
