'use strict';

/**
 * fee-receipt service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::fee-receipt.fee-receipt');
