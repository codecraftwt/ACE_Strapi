//@ts-nocheck

'use strict';

const { seedLog } = require('../seed-utils');

/**
 * Admin-to-Department mapping seed data.
 * Maps admin user emails to department slugs (by deptName).
 */
const ADMIN_DEPARTMENT_MAPPINGS = [
  // Example:
  // {
  //   email: 'cse.hod@ritindia.edu',
  //   deptName: 'Computer Science & Engineering',
  // },
];

async function seed(strapi) {
  seedLog(strapi, 'Seeding Admin-Department Mappings...');

  for (const mapping of ADMIN_DEPARTMENT_MAPPINGS) {
    const user = await strapi.db.query('admin::user').findOne({
      where: { email: mapping.email },
    });

    const dept = await strapi.db.query('api::department.department').findOne({
      where: { deptName: mapping.deptName },
    });

    if (!user) {
      seedLog(strapi, `  Skipped (user not found): ${mapping.email}`);
      continue;
    }
    if (!dept) {
      seedLog(strapi, `  Skipped (dept not found): ${mapping.deptName}`);
      continue;
    }

    const exists = await strapi.db.query('api::admin-department.admin-department').findOne({
      where: { admin_user_id: user.id },
    });

    if (!exists) {
      await strapi.documents('api::admin-department.admin-department').create({
        data: {
          admin_user_id: user.id,
          admin_email: user.email,
          department: dept.documentId,
        },
      });
      seedLog(strapi, `  Mapped: ${user.email} -> ${dept.deptName}`);
    } else {
      seedLog(strapi, `  Mapping exists: ${user.email}`);
    }
  }

  seedLog(strapi, 'Admin-Department Mappings seeding complete.');
}

module.exports = { seed, ADMIN_DEPARTMENT_MAPPINGS };
