//@ts-nocheck

'use strict';

const UID = 'api::statistic.statistic';
const { upsertSingleton, seedLog } = require('../seed-utils');

/**
 * Statistics data.
 */
const STATS_DATA = {
  Faculty: 0,
  departments: 0,
  students: 0,
  years: 0,
  placement: 0,
};

async function seed(strapi) {
  seedLog(strapi, 'Seeding Statistics...');

  if (!STATS_DATA.Faculty && !STATS_DATA.departments && !STATS_DATA.students) {
    seedLog(strapi, '  Skipped (no data provided).');
    return;
  }

  const result = await upsertSingleton(strapi, UID, STATS_DATA);
  seedLog(strapi, `  ${result.action}: Statistics`);
}

module.exports = { seed, STATS_DATA };
