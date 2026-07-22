//@ts-nocheck

'use strict';

const UID = 'api::contact.contact';
const { upsertSingleton, seedLog } = require('../seed-utils');

/**
 * Contact information.
 */
const CONTACT_DATA = {
  collegeName: '',
  address: '',
  phone: '',
  email: '',
  officeHours: '',
  socialLinks: [],
};

async function seed(strapi) {
  seedLog(strapi, 'Seeding Contact...');

  if (!CONTACT_DATA.collegeName) {
    seedLog(strapi, '  Skipped (no data provided).');
    return;
  }

  const result = await upsertSingleton(strapi, UID, CONTACT_DATA);
  seedLog(strapi, `  ${result.action}: Contact info`);
}

module.exports = { seed, CONTACT_DATA };
