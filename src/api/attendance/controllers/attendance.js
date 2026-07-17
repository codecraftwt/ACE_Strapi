// @ts-nocheck
'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

const ATTENDANCE_UID = 'api::attendance.attendance';
const STUDENT_UID =
  'api::students-admission.students-admission';
const SUBJECT_UID = 'api::subject.subject';

/**
 * Validate YYYY-MM-DD date format.
 */
function isValidDate(date) {
  if (typeof date !== 'string') {
    return false;
  }

  const datePattern = /^\d{4}-\d{2}-\d{2}$/;

  if (!datePattern.test(date)) {
    return false;
  }

  const parsedDate = new Date(`${date}T00:00:00.000Z`);

  return !Number.isNaN(parsedDate.getTime());
}

/**
 * Remove duplicate IDs from an array.
 */
function uniqueValues(values) {
  return [...new Set(values)];
}

module.exports = createCoreController(
  ATTENDANCE_UID,
  ({ strapi }) => ({
    /**
     * POST /api/attendances/bulk
     *
     * Create multiple attendance records at once.
     * Request:
     * {
     *   "data": [
     *     {
     *       "studentDocumentId": "...",
     *       "subjectDocumentId": "...",
     *       "date": "2026-07-01",
     *       "ispresent": true
     *     }
     *   ]
     * }
     */
    async bulkCreate(ctx) {
      const records = ctx.request.body?.data;

      if (!Array.isArray(records) || records.length === 0) {
        return ctx.badRequest(
          'data must be a non-empty array.'
        );
      }

      const createdRecords = [];

      try {
        await strapi.db.transaction(async () => {
          for (let index = 0; index < records.length; index += 1) {
            const record = records[index];

            if (!record || typeof record !== 'object') {
              throw new Error(
                `Record must be an object at index ${index}`
              );
            }

            if (!record.studentDocumentId) {
              throw new Error(
                `studentDocumentId is required at index ${index}`
              );
            }

            if (!record.subjectDocumentId) {
              throw new Error(
                `subjectDocumentId is required at index ${index}`
              );
            }

            if (!record.date) {
              throw new Error(
                `date is required at index ${index}`
              );
            }

            if (!isValidDate(record.date)) {
              throw new Error(
                `date must use YYYY-MM-DD format at index ${index}`
              );
            }

            if (typeof record.ispresent !== 'boolean') {
              throw new Error(
                `ispresent must be boolean at index ${index}`
              );
            }

            /*
             * Validate student.
             */
            const student = await strapi
              .documents(STUDENT_UID)
              .findOne({
                documentId: record.studentDocumentId,
              });

            if (!student) {
              throw new Error(
                `Student not found at index ${index}`
              );
            }

            /*
             * Validate subject.
             */
            const subject = await strapi
              .documents(SUBJECT_UID)
              .findOne({
                documentId: record.subjectDocumentId,
              });

            if (!subject) {
              throw new Error(
                `Subject not found at index ${index}`
              );
            }

            /*
             * Prevent duplicate attendance for the same:
             * student + subject + date.
             */
            const existingRecords = await strapi
              .documents(ATTENDANCE_UID)
              .findMany({
                filters: {
                  date: {
                    $eq: record.date,
                  },
                  students_admission: {
                    documentId: {
                      $eq: record.studentDocumentId,
                    },
                  },
                  subject: {
                    documentId: {
                      $eq: record.subjectDocumentId,
                    },
                  },
                },
                limit: 1,
              });

            if (existingRecords.length > 0) {
              throw new Error(
                `Attendance already exists for this student, subject and date at index ${index}`
              );
            }

            /*
             * Create and publish attendance.
             */
            const created = await strapi
              .documents(ATTENDANCE_UID)
              .create({
                data: {
                  date: record.date,
                  ispresent: record.ispresent,

                  students_admission: {
                    connect: [record.studentDocumentId],
                  },

                  subject: {
                    connect: [record.subjectDocumentId],
                  },
                },

                status: 'published',

                populate: {
                  students_admission: true,
                  subject: true,
                },
              });

            createdRecords.push(created);
          }
        });

        ctx.status = 201;

        ctx.body = {
          data: createdRecords,
          meta: {
            created: createdRecords.length,
          },
        };
      } catch (error) {
        strapi.log.error(
          'Attendance bulkCreate failed:',
          error
        );

        return ctx.badRequest(
          error.message || 'Unable to create attendance records.'
        );
      }
    },

    /**
     * PUT /api/attendances/bulk-update
     *
     * Request:
     * {
     *   "data": [
     *     {
     *       "documentId": "...",
     *       "ispresent": false
     *     }
     *   ]
     * }
     */
    async bulkUpdate(ctx) {
      const records = ctx.request.body?.data;

      if (!Array.isArray(records) || records.length === 0) {
        return ctx.badRequest(
          'data must be a non-empty array.'
        );
      }

      const updatedRecords = [];

      try {
        await strapi.db.transaction(async () => {
          for (let index = 0; index < records.length; index += 1) {
            const record = records[index];

            if (!record || typeof record !== 'object') {
              throw new Error(
                `Record must be an object at index ${index}`
              );
            }

            if (!record.documentId) {
              throw new Error(
                `documentId is required at index ${index}`
              );
            }

            /*
             * Confirm attendance exists.
             */
            const existingAttendance = await strapi
              .documents(ATTENDANCE_UID)
              .findOne({
                documentId: record.documentId,

                populate: {
                  students_admission: true,
                  subject: true,
                },
              });

            if (!existingAttendance) {
              throw new Error(
                `Attendance record not found at index ${index}`
              );
            }

            const updateData = {};

            /*
             * Update date.
             */
            if (record.date !== undefined) {
              if (!isValidDate(record.date)) {
                throw new Error(
                  `date must use YYYY-MM-DD format at index ${index}`
                );
              }

              updateData.date = record.date;
            }

            /*
             * Update attendance status.
             */
            if (record.ispresent !== undefined) {
              if (typeof record.ispresent !== 'boolean') {
                throw new Error(
                  `ispresent must be boolean at index ${index}`
                );
              }

              updateData.ispresent = record.ispresent;
            }

            /*
             * Update student relation.
             */
            if (record.studentDocumentId !== undefined) {
              if (!record.studentDocumentId) {
                throw new Error(
                  `studentDocumentId cannot be empty at index ${index}`
                );
              }

              const student = await strapi
                .documents(STUDENT_UID)
                .findOne({
                  documentId: record.studentDocumentId,
                });

              if (!student) {
                throw new Error(
                  `Student not found at index ${index}`
                );
              }

              updateData.students_admission = {
                set: [record.studentDocumentId],
              };
            }

            /*
             * Update subject relation.
             */
            if (record.subjectDocumentId !== undefined) {
              if (!record.subjectDocumentId) {
                throw new Error(
                  `subjectDocumentId cannot be empty at index ${index}`
                );
              }

              const subject = await strapi
                .documents(SUBJECT_UID)
                .findOne({
                  documentId: record.subjectDocumentId,
                });

              if (!subject) {
                throw new Error(
                  `Subject not found at index ${index}`
                );
              }

              updateData.subject = {
                set: [record.subjectDocumentId],
              };
            }

            if (Object.keys(updateData).length === 0) {
              throw new Error(
                `No update fields provided at index ${index}`
              );
            }

            /*
             * Resolve the final student, subject and date values.
             */
            const finalStudentDocumentId =
              record.studentDocumentId ||
              existingAttendance.students_admission?.documentId;

            const finalSubjectDocumentId =
              record.subjectDocumentId ||
              existingAttendance.subject?.documentId;

            const finalDate =
              record.date || existingAttendance.date;

            if (!finalStudentDocumentId) {
              throw new Error(
                `Attendance does not have a student at index ${index}`
              );
            }

            if (!finalSubjectDocumentId) {
              throw new Error(
                `Attendance does not have a subject at index ${index}`
              );
            }

            /*
             * Prevent changing this record into a duplicate.
             */
            const duplicateRecords = await strapi
              .documents(ATTENDANCE_UID)
              .findMany({
                filters: {
                  documentId: {
                    $ne: record.documentId,
                  },
                  date: {
                    $eq: finalDate,
                  },
                  students_admission: {
                    documentId: {
                      $eq: finalStudentDocumentId,
                    },
                  },
                  subject: {
                    documentId: {
                      $eq: finalSubjectDocumentId,
                    },
                  },
                },
                limit: 1,
              });

            if (duplicateRecords.length > 0) {
              throw new Error(
                `Another attendance record already exists for this student, subject and date at index ${index}`
              );
            }

            const updated = await strapi
              .documents(ATTENDANCE_UID)
              .update({
                documentId: record.documentId,
                data: updateData,

                populate: {
                  students_admission: true,
                  subject: true,
                },
              });

            await strapi
              .documents(ATTENDANCE_UID)
              .publish({
                documentId: record.documentId,
              });

            updatedRecords.push(updated);
          }
        });

        ctx.body = {
          data: updatedRecords,
          meta: {
            updated: updatedRecords.length,
          },
        };
      } catch (error) {
        strapi.log.error(
          'Attendance bulkUpdate failed:',
          error
        );

        return ctx.badRequest(
          error.message || 'Unable to update attendance records.'
        );
      }
    },

    /**
     * POST /api/attendances/bulk-delete
     *
     * Delete multiple attendance records by documentId.
     * Request:
     * {
     *   "data": [
     *     "attendance-document-id-1",
     *     "attendance-document-id-2"
     *   ]
     * }
     */
    async bulkDelete(ctx) {
      const requestedDocumentIds = ctx.request.body?.data;

      if (
        !Array.isArray(requestedDocumentIds) ||
        requestedDocumentIds.length === 0
      ) {
        return ctx.badRequest(
          'data must be a non-empty array of documentIds.'
        );
      }

      const documentIds = uniqueValues(
        requestedDocumentIds
      );

      try {
        await strapi.db.transaction(async () => {
          for (
            let index = 0;
            index < documentIds.length;
            index += 1
          ) {
            const documentId = documentIds[index];

            if (
              typeof documentId !== 'string' ||
              !documentId.trim()
            ) {
              throw new Error(
                `Valid documentId is required at index ${index}`
              );
            }

            const attendance = await strapi
              .documents(ATTENDANCE_UID)
              .findOne({
                documentId,
              });

            if (!attendance) {
              throw new Error(
                `Attendance record not found for documentId ${documentId}`
              );
            }

            await strapi
              .documents(ATTENDANCE_UID)
              .delete({
                documentId,
              });
          }
        });

        ctx.body = {
          data: {
            deleted: documentIds.length,
          },
        };
      } catch (error) {
        strapi.log.error(
          'Attendance bulkDelete failed:',
          error
        );

        return ctx.badRequest(
          error.message || 'Unable to delete attendance records.'
        );
      }
    },
  })
);