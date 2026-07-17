//@ts-nocheck

'use strict';

async function loadAdminUser(strapi, userId) {
  if (!userId) {
    return null;
  }

  return await strapi.db
    .query('admin::user')
    .findOne({
      where: {
        id: userId,
      },
      populate: {
        roles: true,
      },
    });
}

module.exports = {
  loadAdminUser,
};