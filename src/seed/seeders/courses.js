//@ts-nocheck

'use strict';

const UID = 'api::course.course';
const { createIfMissing, findOne, seedLog } = require('../seed-utils');

/**
 * Course seed data.
 * Each course should reference a department by deptName.
 * The seeder resolves the department relation automatically.
 */
const COURSES = [
  // Example:
  // {
  //   courseName: 'B.Tech Computer Science & Engineering',
  //   duration: '4 Years',
  //   intake: '120',
  //   eligibility: '10+2 with PCM',
  //   baseFeeAmount: 150000,
  //   departmentName: 'Computer Science & Engineering',
  // },
];

async function seed(strapi) {
  seedLog(strapi, 'Seeding Courses...');

  for (const course of COURSES) {
    const { departmentName, ...courseData } = course;

    const result = await createIfMissing(strapi, UID, 'courseName', courseData);
    if (result.action === 'skipped') {
      seedLog(strapi, `  Skipped (exists): ${course.courseName}`);
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

    seedLog(strapi, `  Created: ${course.courseName}`);
  }

  seedLog(strapi, 'Courses seeding complete.');
}

module.exports = { seed, COURSES };
