//@ts-nocheck

'use strict';

/**
 * Check if the logged-in admin is Super Admin
 */
function isSuperAdmin(adminUser) {
  const roles = adminUser?.roles || [];

  return roles.some((role) => {
    const roleName = String(role?.name || '').trim().toLowerCase();
    const roleCode = String(role?.code || '').trim().toLowerCase();

    return (
      roleName === 'super admin' ||
      roleCode === 'strapi-super-admin'
    );
  });
}

/**
 * Check if the logged-in admin is HOD
 */
function isHod(adminUser) {
  const roles = adminUser?.roles || [];

  return roles.some((role) => {
    const roleName = String(role?.name || '').trim().toLowerCase();
    const roleCode = String(role?.code || '').trim().toLowerCase();

    return (
      roleName === 'hod' ||
      roleCode.startsWith('hod-')
    );
  });
}

/**
 * Check if the logged-in admin is Faculty
 */
function isFaculty(adminUser) {
  const roles = adminUser?.roles || [];

  return roles.some((role) => {
    const roleName = String(role?.name || '').trim().toLowerCase();
    const roleCode = String(role?.code || '').trim().toLowerCase();

    return (
      roleName === 'faculty' ||
      roleCode.startsWith('faculty-')
    );
  });
}

module.exports = {
  isSuperAdmin,
  isHod,
  isFaculty,
};