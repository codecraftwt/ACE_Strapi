//@ts-nocheck

'use strict';

const bcrypt = require('bcryptjs');
const { seedLog } = require('../seed-utils');

const DEPT_ADMIN_ROLE_CODE = 'strapi-dept-admin';
const DEPT_ADMIN_ROLE_NAME = 'Dept Admin (HOD)';

/**
 * Admin role configuration.
 */
const ADMIN_ROLE = {
  code: DEPT_ADMIN_ROLE_CODE,
  name: DEPT_ADMIN_ROLE_NAME,
  description: 'Department Admin with restricted access to their department only.',
};

async function seed(strapi) {
  seedLog(strapi, 'Seeding Admin Roles...');

  let role = await strapi.db.query('admin::role').findOne({
    where: { code: ADMIN_ROLE.code },
  });

  if (!role) {
    role = await strapi.db.query('admin::role').create({
      data: {
        name: ADMIN_ROLE.name,
        code: ADMIN_ROLE.code,
        description: ADMIN_ROLE.description,
      },
    });
    seedLog(strapi, `  Created role: ${ADMIN_ROLE.name}`);
  } else {
    // Ensure name is up to date
    if (role.name !== ADMIN_ROLE.name) {
      await strapi.db.query('admin::role').update({
        where: { id: role.id },
        data: { name: ADMIN_ROLE.name },
      });
    }
    seedLog(strapi, `  Role exists: ${ADMIN_ROLE.name}`);
  }

  return role;
}

module.exports = { seed, ADMIN_ROLE };
