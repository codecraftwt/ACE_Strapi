//@ts-nocheck

'use strict';

const FACULTY_UID = 'api::faculty.faculty';

async function getAdminDepartment(strapi, adminUser) {
  if (!adminUser?.email) {
    return null;
  }

  const faculties = await strapi.documents(FACULTY_UID).findMany({
    filters: {
      Email: {
        $eqi: adminUser.email,
      },
    },
    populate: {
      department: true,
    },
    limit: 1,
  });

  return faculties?.[0]?.department || null;
}

module.exports = {
  getAdminDepartment,
};