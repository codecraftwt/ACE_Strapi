'use strict';

/**
 * students-admission service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::students-admission.students-admission');
