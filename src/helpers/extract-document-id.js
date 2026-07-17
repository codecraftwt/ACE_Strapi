//@ts-nocheck

'use strict';

/**
 * Extract a department documentId from the different
 * relation payload formats that Strapi may send.
 */
function extractDepartmentDocumentId(departmentData) {
  if (!departmentData) {
    return null;
  }

  // Direct documentId string
  if (typeof departmentData === 'string') {
    return departmentData;
  }

  // Direct relation object
  if (departmentData.documentId) {
    return departmentData.documentId;
  }

  // Relation using connect
  if (
    Array.isArray(departmentData.connect) &&
    departmentData.connect.length > 0
  ) {
    const first = departmentData.connect[0];

    if (typeof first === 'string') {
      return first;
    }

    return first?.documentId || null;
  }

  // Relation using set
  if (
    Array.isArray(departmentData.set) &&
    departmentData.set.length > 0
  ) {
    const first = departmentData.set[0];

    if (typeof first === 'string') {
      return first;
    }

    return first?.documentId || null;
  }

  // Relation as an array
  if (
    Array.isArray(departmentData) &&
    departmentData.length > 0
  ) {
    const first = departmentData[0];

    if (typeof first === 'string') {
      return first;
    }

    return first?.documentId || null;
  }

  return null;
}

module.exports = {
  extractDepartmentDocumentId,
};