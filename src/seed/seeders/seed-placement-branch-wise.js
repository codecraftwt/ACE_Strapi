//@ts-nocheck

'use strict';

const UID = 'api::placement-web-data.placement-web-data';
const { seedLog } = require('../seed-utils');

const BRANCH_WISE_PLACEMENT_ENTRIES = [
  {
    branch: 'Biotechnology Engineering',
    year_2023_24: '20',
    year_2024_25: '12',
    year_2025_26: '11'
  },
  {
    branch: 'Civil Engineering',
    year_2023_24: '67',
    year_2024_25: '42',
    year_2025_26: '46'
  },
  {
    branch: 'Computer Science & Engineering',
    year_2023_24: '164',
    year_2024_25: '154',
    year_2025_26: '122'
  },
  {
    branch: 'Electronics & Telecommunication',
    year_2023_24: '98',
    year_2024_25: '74',
    year_2025_26: '95'
  },
  {
    branch: 'Civil & Environmental Engineering',
    year_2023_24: '22',
    year_2024_25: '16',
    year_2025_26: '18'
  },
  {
    branch: 'Mechanical Engineering',
    year_2023_24: '142',
    year_2024_25: '105',
    year_2025_26: '115'
  },
  {
    branch: 'Electrical Engineering',
    year_2023_24: '58',
    year_2024_25: '58',
    year_2025_26: '44'
  },
  {
    branch: 'Computer Science & Engg. [AIML]',
    year_2023_24: '-',
    year_2024_25: '65',
    year_2025_26: '108'
  },
  {
    branch: 'Computer Science & Engg. [DS]',
    year_2023_24: '-',
    year_2024_25: '66',
    year_2025_26: '56'
  }
];

async function seed(strapi) {
  seedLog(strapi, 'Seeding Placement Branch Wise Data...');

  const placement = await strapi.documents(UID).findFirst();

  if (!placement) {
    seedLog(strapi, '  PlacementWebData record not found. Creating with Branch Wise Placement data...');
    await strapi.documents(UID).create({
      data: {
        branchWisePlacement: BRANCH_WISE_PLACEMENT_ENTRIES,
      },
    });
    seedLog(strapi, '  Branch Wise Placement seeded (new PlacementWebData record).');
    return;
  }

  if (placement.branchWisePlacement && placement.branchWisePlacement.length > 0) {
    seedLog(strapi, '  Branch Wise Placement already present. Skipping.');
    return;
  }

  await strapi.documents(UID).update({
    documentId: placement.documentId,
    data: {
      branchWisePlacement: BRANCH_WISE_PLACEMENT_ENTRIES,
    },
  });

  seedLog(strapi, '  Branch Wise Placement seeded successfully.');
}

module.exports = { seed, BRANCH_WISE_PLACEMENT_ENTRIES };
