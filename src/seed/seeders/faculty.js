//@ts-nocheck

'use strict';

const UID = 'api::faculty.faculty';
const { createIfMissing, findOne, seedLog } = require('../seed-utils');

/**
 * Faculty seed data.
 * Each faculty should reference a department by deptName.
 * The seeder resolves the department relation automatically.
 */
const FACULTY = [
  // Example:
  // {
  //   Name: 'Dr. John Doe',
  //   Email: 'john.doe@ritindia.edu',
  //   Phone: 9876543210,
  //   qualification: 'Ph.D. Computer Science',
  //   designation: 'HOD',
  //   Exprience: 15,
  //   departmentName: 'Computer Science & Engineering',
  // },
];

async function seed(strapi) {
  seedLog(strapi, 'Seeding Faculty...');

  for (const fac of FACULTY) {
    const { departmentName, ...facultyData } = fac;

    const result = await createIfMissing(strapi, UID, 'Email', facultyData);
    if (result.action === 'skipped') {
      seedLog(strapi, `  Skipped (exists): ${fac.Name}`);
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

    seedLog(strapi, `  Created: ${fac.Name}`);
  }

  seedLog(strapi, 'Faculty seeding complete.');
}

module.exports = { seed, FACULTY };
