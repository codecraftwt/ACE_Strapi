//@ts-nocheck

'use strict';

/**
 * Check if any record exists for a given content type.
 */
async function hasRecords(strapi, uid) {
  const count = await strapi.db.query(uid).count();
  return count > 0;
}

/**
 * Find a single record by filters.
 */
async function findOne(strapi, uid, filters = {}) {
  return strapi.db.query(uid).findOne({ where: filters });
}

/**
 * Find many records by filters.
 */
async function findMany(strapi, uid, filters = {}, opts = {}) {
  return strapi.db.query(uid).findMany({
    where: filters,
    ...opts,
  });
}

/**
 * Create a record using the Document Service.
 * Returns the created document.
 */
async function createDoc(strapi, uid, data) {
  return strapi.documents(uid).create({ data });
}

/**
 * Update a record using the Document Service.
 */
async function updateDoc(strapi, uid, documentId, data) {
  return strapi.documents(uid).update({
    documentId,
    data,
  });
}

/**
 * Create or update a singleton (single type).
 * If a record exists, update it; otherwise create it.
 */
async function upsertSingleton(strapi, uid, data) {
  const existing = await strapi.db.query(uid).findOne({});
  if (existing) {
    await updateDoc(strapi, uid, existing.documentId, data);
    return { action: 'updated', existing };
  }
  const created = await createDoc(strapi, uid, data);
  return { action: 'created', created };
}

/**
 * Create a record only if no record exists for the given unique field.
 * Returns { action: 'created'|'skipped', record }.
 */
async function createIfMissing(strapi, uid, uniqueField, data) {
  const existing = await strapi.db.query(uid).findOne({
    where: { [uniqueField]: data[uniqueField] },
  });
  if (existing) {
    return { action: 'skipped', existing };
  }
  const created = await createDoc(strapi, uid, data);
  return { action: 'created', created };
}

/**
 * Publish a document by documentId.
 */
async function publish(strapi, uid, documentId) {
  return strapi.documents(uid).publish({ documentId });
}

/**
 * Create and publish a record in one step.
 */
async function createAndPublish(strapi, uid, data) {
  const created = await createDoc(strapi, uid, data);
  await publish(strapi, uid, created.documentId);
  return created;
}

/**
 * Log with a seed-specific prefix.
 */
function seedLog(strapi, message) {
  strapi.log.info(`[seed] ${message}`);
}

module.exports = {
  hasRecords,
  findOne,
  findMany,
  createDoc,
  updateDoc,
  upsertSingleton,
  createIfMissing,
  publish,
  createAndPublish,
  seedLog,
};
