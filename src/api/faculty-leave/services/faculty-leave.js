'use strict';

/**
 * faculty-leave service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::faculty-leave.faculty-leave');
