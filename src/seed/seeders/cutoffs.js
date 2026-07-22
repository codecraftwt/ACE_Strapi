//@ts-nocheck

'use strict';

const UID = 'api::cutoff.cutoff';
const { createIfMissing, findOne, seedLog } = require('../seed-utils');

/**
 * Cutoff seed data.
 */
const CUTOFFS = [
  // Example:
  // {
  //   Year: '2024',
  //   Cast: 'Open',
  //   Round_1: 95.5,
  //   Round_2: 93.2,
  //   Round_3: 91.0,
  //   departmentName: 'Computer Science & Engineering',
  // },
];

async function seed(strapi) {
  seedLog(strapi, 'Seeding Cutoffs...');

  for (const cutoff of CUTOFFS) {
    const { departmentName, ...cutoffData } = cutoff;

    const result = await createIfMissing(strapi, UID, 'Year', cutoffData);
    if (result.action === 'skipped') {
      seedLog(strapi, `  Skipped (exists): ${cutoff.Year} - ${cutoff.Cast}`);
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

    seedLog(strapi, `  Created: ${cutoff.Year} - ${cutoff.Cast}`);
  }

  seedLog(strapi, 'Cutoffs seeding complete.');
}

module.exports = { seed, CUTOFFS };
