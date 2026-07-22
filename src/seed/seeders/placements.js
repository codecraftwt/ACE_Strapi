//@ts-nocheck

'use strict';

const UID = 'api::placement.placement';
const { createIfMissing, findOne, seedLog } = require('../seed-utils');

/**
 * Placement seed data.
 */
const PLACEMENTS = [
  // Example:
  // {
  //   companyName: 'TCS',
  //   Package: 7.5,
  //   studentName: 'Priya Patil',
  //   Year: '2025',
  //   departmentName: 'Computer Science & Engineering',
  // },
];

async function seed(strapi) {
  seedLog(strapi, 'Seeding Placements...');

  for (const placement of PLACEMENTS) {
    const { departmentName, ...placementData } = placement;

    const result = await createIfMissing(strapi, UID, 'studentName', {
      ...placementData,
      studentName: placementData.studentName,
    });
    if (result.action === 'skipped') {
      seedLog(strapi, `  Skipped (exists): ${placement.studentName}`);
      continue;
    }

    if (departmentName) {
      const dept = await findOne(strapi, 'api::department.department', {
        deptName: departmentName,
      });
      if (dept) {
        await strapi.documents(UID).update({
          documentId: result.created.documentId,
          data: {
            department: {
              connect: [{ documentId: dept.documentId }],
            },
          },
        });
      }
    }

    seedLog(strapi, `  Created: ${placement.studentName} @ ${placement.companyName}`);
  }

  seedLog(strapi, 'Placements seeding complete.');
}

module.exports = { seed, PLACEMENTS };
