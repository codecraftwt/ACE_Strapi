//@ts-nocheck

'use strict';

const { seedLog } = require('../seed-utils');

/**
 * Public permissions seed data.
 * Define which content type actions should be publicly accessible.
 *
 * Format: { controllerName: ['action1', 'action2'] }
 * This translates to: api::controllerName.controllerName.action
 */
const PUBLIC_PERMISSIONS = {
  // Example:
  // department: ['find', 'findOne'],
  // notice: ['find', 'findOne'],
};

async function seed(strapi) {
  seedLog(strapi, 'Seeding Public Permissions...');

  const publicRole = await strapi.db.query('plugin::users-permissions.role').findOne({
    where: { type: 'public' },
  });

  if (!publicRole) {
    seedLog(strapi, '  Skipped: Public role not found.');
    return;
  }

  const controllers = Object.keys(PUBLIC_PERMISSIONS);
  if (controllers.length === 0) {
    seedLog(strapi, '  Skipped (no permissions defined).');
    return;
  }

  for (const controller of controllers) {
    const actions = PUBLIC_PERMISSIONS[controller];

    for (const action of actions) {
      const actionString = `api::${controller}.${controller}.${action}`;

      const exists = await strapi.db.query('plugin::users-permissions.permission').findOne({
        where: { action: actionString, role: publicRole.id },
      });

      if (!exists) {
        await strapi.db.query('plugin::users-permissions.permission').create({
          data: { action: actionString, role: publicRole.id },
        });
        seedLog(strapi, `  Granted: ${actionString}`);
      }
    }
  }

  seedLog(strapi, 'Public Permissions seeding complete.');
}

module.exports = { seed, PUBLIC_PERMISSIONS };
