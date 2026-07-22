//@ts-nocheck

'use strict';

const UID = 'api::global.global';
const { upsertSingleton, seedLog } = require('../seed-utils');

/**
 * Global site configuration.
 */
const GLOBAL_DATA = {
  siteName: '',
  siteDescription: '',
  defaultSeo: {
    metaTitle: '',
    metaDescription: '',
  },
};

async function seed(strapi) {
  seedLog(strapi, 'Seeding Global...');

  if (!GLOBAL_DATA.siteName) {
    seedLog(strapi, '  Skipped (no data provided).');
    return;
  }

  const result = await upsertSingleton(strapi, UID, GLOBAL_DATA);
  seedLog(strapi, `  ${result.action}: Global config`);
}

module.exports = { seed, GLOBAL_DATA };
