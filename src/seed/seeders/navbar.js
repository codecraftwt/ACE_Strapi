//@ts-nocheck

'use strict';

const UID = 'api::navbar.navbar';
const { upsertSingleton, seedLog } = require('../seed-utils');

/**
 * Navbar data.
 * navitems: array of { title, link, subitems: [{ title, link }] }
 * navbuttons: array of { buttontext, action }
 */
const NAVBAR_DATA = {
  collegeName: '',
  navitems: [],
  navbuttons: [],
};

async function seed(strapi) {
  seedLog(strapi, 'Seeding Navbar...');

  if (!NAVBAR_DATA.collegeName && NAVBAR_DATA.navitems.length === 0) {
    seedLog(strapi, '  Skipped (no data provided).');
    return;
  }

  const result = await upsertSingleton(strapi, UID, NAVBAR_DATA);
  seedLog(strapi, `  ${result.action}: Navbar`);
}

module.exports = { seed, NAVBAR_DATA };
