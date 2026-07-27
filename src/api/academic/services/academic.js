'use strict';

/**
 * academic service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::academic.academic');
