//@ts-nocheck

'use strict';

const UID = 'api::department.department';
const { createIfMissing, seedLog } = require('../seed-utils');

/**
 * Department seed data.
 * Add your departments here.
 */
const DEPARTMENTS = [
  // Example:
  // {
  //   deptName: 'Computer Science & Engineering',
  //   description: [],
  //   location: 'Block A',
  //   HeadName: '',
  // },
];

async function seed(strapi) {
  seedLog(strapi, 'Seeding Departments...');

  for (const dept of DEPARTMENTS) {
    const result = await createIfMissing(strapi, UID, 'deptName', dept);
    if (result.action === 'created') {
      seedLog(strapi, `  Created: ${dept.deptName}`);
    } else {
      seedLog(strapi, `  Skipped (exists): ${dept.deptName}`);
    }
  }

  seedLog(strapi, 'Departments seeding complete.');
}

module.exports = { seed, DEPARTMENTS };
