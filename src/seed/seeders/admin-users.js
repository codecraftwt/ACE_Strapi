//@ts-nocheck

'use strict';

const bcrypt = require('bcryptjs');
const { seedLog } = require('../seed-utils');

/**
 * Admin user seed data.
 * These are HOD accounts that map to departments.
 * Each user gets the 'strapi-dept-admin' role.
 */
const ADMIN_USERS = [
  // Example:
  // {
  //   email: 'cse.hod@ritindia.edu',
  //   firstname: 'CSE',
  //   lastname: 'HOD',
  //   username: 'cse.hod',
  //   password: 'Admin@123',
  // },
];

async function seed(strapi) {
  seedLog(strapi, 'Seeding Admin Users...');

  const role = await strapi.db.query('admin::role').findOne({
    where: { code: 'strapi-dept-admin' },
  });

  if (!role) {
    seedLog(strapi, '  Skipped: Dept Admin role not found. Seed admin-roles first.');
    return;
  }

  for (const user of ADMIN_USERS) {
    const exists = await strapi.db.query('admin::user').findOne({
      where: { email: user.email },
    });

    if (!exists) {
      const passwordHash = await bcrypt.hash(user.password, 10);
      await strapi.db.query('admin::user').create({
        data: {
          email: user.email,
          firstname: user.firstname,
          lastname: user.lastname,
          username: user.username,
          password: passwordHash,
          isActive: true,
          roles: [role.id],
        },
      });
      seedLog(strapi, `  Created: ${user.email}`);
    } else {
      // Ensure they have the dept admin role
      await strapi.db.query('admin::user').update({
        where: { id: exists.id },
        data: { roles: [role.id] },
      });
      seedLog(strapi, `  Exists (role synced): ${user.email}`);
    }
  }

  seedLog(strapi, 'Admin Users seeding complete.');
}

module.exports = { seed, ADMIN_USERS };
