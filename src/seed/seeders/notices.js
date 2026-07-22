//@ts-nocheck

'use strict';

const UID = 'api::notice.notice';
const { createIfMissing, findOne, seedLog } = require('../seed-utils');

/**
 * Notice seed data.
 * Each notice can reference a department by deptName.
 */
const NOTICES = [
  // Example:
  // {
  //   Title: 'Semester Exam Schedule Released',
  //   Description: [],
  //   Type: 'Exam',
  //   isActive: true,
  //   noticeDate: '2025-01-15',
  //   departmentName: 'Computer Science & Engineering',
  // },
];

async function seed(strapi) {
  seedLog(strapi, 'Seeding Notices...');

  for (const notice of NOTICES) {
    const { departmentName, ...noticeData } = notice;

    const result = await createIfMissing(strapi, UID, 'Title', noticeData);
    if (result.action === 'skipped') {
      seedLog(strapi, `  Skipped (exists): ${notice.Title}`);
      continue;
    }

    // Resolve department relation if provided
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

    seedLog(strapi, `  Created: ${notice.Title}`);
  }

  seedLog(strapi, 'Notices seeding complete.');
}

module.exports = { seed, NOTICES };
