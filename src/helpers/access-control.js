//@ts-nocheck

'use strict';

const { errors } = require('@strapi/utils');

const { ForbiddenError, ValidationError } = errors;

const { getAdminDepartment } = require('./get-admin-department');
const { isSuperAdmin, isHod, isFaculty } = require('./role-check');
const { extractDepartmentDocumentId } = require('./extract-document-id');

async function validateDepartmentAccess({
  strapi,
  context,
  adminUser,
}) {
  console.log("================================");
  console.log("Department Access Check");
  console.log("Content Type :", context.uid);
  console.log("Action       :", context.action);
  console.log("Admin        :", adminUser?.email);
  console.log("================================");

  // No logged-in admin (API/Internal call)
  if (!adminUser) {
    return null;
  }

  // Super Admin has unrestricted access
  if (isSuperAdmin(adminUser)) {
    console.log("✅ Super Admin - Access Granted");
    return null;
  }

  // Apply restriction only to HOD & Faculty
  if (!isHod(adminUser) && !isFaculty(adminUser)) {
    console.log("Not HOD/Faculty - Skipping validation");
    return null;
  }

  // Get logged-in user's department
  const adminDepartment = await getAdminDepartment(strapi, adminUser);

  if (!adminDepartment?.documentId) {
    throw new ForbiddenError(
      "No department is assigned to this user."
    );
  }

  const data = context.params?.data;

  // Only validate create/update
  if (
    !data ||
    (
      context.action !== "create" &&
      context.action !== "update"
    )
  ) {
    return adminDepartment;
  }

  // Department selected by user (if any)
  const selectedDepartment =
    extractDepartmentDocumentId(data.department);

  // If user selected another department -> Block
  if (
    selectedDepartment &&
    selectedDepartment !== adminDepartment.documentId
  ) {
    throw new ForbiddenError(
      "You can only create or update records for your own department."
    );
  }

  // Automatically assign department if not supplied
  if (!selectedDepartment) {
    data.department = {
      connect: [
        {
          documentId: adminDepartment.documentId,
        },
      ],
    };
  }

  // Synchronize accessDepartmentKey (if field exists)
  if (
    Object.prototype.hasOwnProperty.call(
      data,
      'accessDepartmentKey'
    )
  ) {
    data.accessDepartmentKey =
      adminDepartment.documentId;
  }

  console.log("Department Verified:", {
    department: adminDepartment.deptName,
    documentId: adminDepartment.documentId,
  });

  return adminDepartment;
}

module.exports = {
  validateDepartmentAccess,
};