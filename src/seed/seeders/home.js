//@ts-nocheck

'use strict';

const UID = 'api::home.home';
const { upsertSingleton, seedLog } = require('../seed-utils');

/**
 * Home page content.
 */
const HOME_DATA = {
  heroTitle: '',
  heroSubtitle: [],
  herobutton: '',
  Introduction: [],
  Vision: [],
  Mission: [],
};

async function seed(strapi) {
  seedLog(strapi, 'Seeding Home...');

  if (!HOME_DATA.heroTitle) {
    seedLog(strapi, '  Skipped (no data provided).');
    return;
  }

  const result = await upsertSingleton(strapi, UID, HOME_DATA);
  seedLog(strapi, `  ${result.action}: Home page`);
}

module.exports = { seed, HOME_DATA };
