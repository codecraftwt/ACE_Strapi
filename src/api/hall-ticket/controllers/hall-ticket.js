// @ts-nocheck
'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

const HALL_TICKET_UID = 'api::hall-ticket.hall-ticket';
const STUDENT_UID = 'api::students-admission.students-admission';
const EXAM_UID = 'api::exam.exam';
const SUBJECT_UID = 'api::subject.subject';

function isValidDate(date) {
  if (typeof date !== 'string') return false;
  const datePattern = /^\d{4}-\d{2}-\d{2}$/;
  if (!datePattern.test(date)) return false;
  const parsedDate = new Date(`${date}T00:00:00.000Z`);
  return !Number.isNaN(parsedDate.getTime());
}

function uniqueValues(values) {
  return [...new Set(values)];
}

module.exports = createCoreController(
  HALL_TICKET_UID,
  ({ strapi }) => ({
    /**
     * POST /api/hall-tickets/bulk
     *
     * {
     *   "data": [
     *     {
     *       "studentDocumentId": "...",
     *       "examDocumentId": "...",
     *       "hallTicketNo": "HT-001",
     *       "SeatNumber": "A1",
     *       "ExamCenter": "Room 101",
     *       "generatedDate": "2026-07-01",
     *       "HallticketStatus": "Draft",
     *       "HallticketSubjects": [
     *         {
     *           "subjectDocumentId": "...",
     *           "examDate": "2026-07-10",
     *           "ExamTime": "09:00",
     *           "ExamRoom": "101",
     *           "ExamDay": "Monday"
     *         }
     *       ]
     *     }
     *   ]
     * }
     */
    async bulkCreate(ctx) {
      const records = ctx.request.body?.data;

      if (!Array.isArray(records) || records.length === 0) {
        return ctx.badRequest('data must be a non-empty array.');
      }

      const createdRecords = [];

      try {
        await strapi.db.transaction(async () => {
          for (let index = 0; index < records.length; index += 1) {
            const record = records[index];

            if (!record || typeof record !== 'object') {
              throw new Error(`Record must be an object at index ${index}`);
            }

            if (!record.studentDocumentId) {
              throw new Error(`studentDocumentId is required at index ${index}`);
            }

            if (!record.examDocumentId) {
              throw new Error(`examDocumentId is required at index ${index}`);
            }

            if (!record.hallTicketNo) {
              throw new Error(`hallTicketNo is required at index ${index}`);
            }

            const student = await strapi
              .documents(STUDENT_UID)
              .findOne({ documentId: record.studentDocumentId });

            if (!student) {
              throw new Error(`Student not found at index ${index}`);
            }

            const exam = await strapi
              .documents(EXAM_UID)
              .findOne({ documentId: record.examDocumentId });

            if (!exam) {
              throw new Error(`Exam not found at index ${index}`);
            }

            if (record.generatedDate && !isValidDate(record.generatedDate)) {
              throw new Error(`generatedDate must use YYYY-MM-DD format at index ${index}`);
            }

            const validStatuses = ['Draft', 'published'];
            if (record.HallticketStatus && !validStatuses.includes(record.HallticketStatus)) {
              throw new Error(
                `HallticketStatus must be one of: ${validStatuses.join(', ')} at index ${index}`
              );
            }

            const existingRecords = await strapi
              .documents(HALL_TICKET_UID)
              .findMany({
                filters: {
                  students_admission: { documentId: { $eq: record.studentDocumentId } },
                  exam: { documentId: { $eq: record.examDocumentId } },
                },
                limit: 1,
              });

            if (existingRecords.length > 0) {
              throw new Error(
                `Hall ticket already exists for this student and exam at index ${index}`
              );
            }

            let hallticketSubjectsData = undefined;
            if (Array.isArray(record.HallticketSubjects)) {
              hallticketSubjectsData = [];

              for (let si = 0; si < record.HallticketSubjects.length; si += 1) {
                const sub = record.HallticketSubjects[si];

                if (!sub.subjectDocumentId) {
                  throw new Error(
                    `subjectDocumentId is required in HallticketSubjects at record ${index}, subject index ${si}`
                  );
                }

                const subject = await strapi
                  .documents(SUBJECT_UID)
                  .findOne({ documentId: sub.subjectDocumentId });

                if (!subject) {
                  throw new Error(
                    `Subject not found at record ${index}, subject index ${si}`
                  );
                }

                if (sub.examDate && !isValidDate(sub.examDate)) {
                  throw new Error(
                    `examDate must use YYYY-MM-DD format at record ${index}, subject index ${si}`
                  );
                }

                const entry = {};

                if (sub.examDate) entry.examDate = sub.examDate;
                if (sub.ExamTime) entry.ExamTime = sub.ExamTime;
                if (sub.ExamRoom) entry.ExamRoom = sub.ExamRoom;
                if (sub.ExamDay) entry.ExamDay = sub.ExamDay;

                entry.subject = {
                  connect: [sub.subjectDocumentId],
                };

                hallticketSubjectsData.push(entry);
              }
            }

            const createData = {
              hallTicketNo: record.hallTicketNo,
              students_admission: { connect: [record.studentDocumentId] },
              exam: { connect: [record.examDocumentId] },
            };

            if (record.SeatNumber) createData.SeatNumber = record.SeatNumber;
            if (record.ExamCenter) createData.ExamCenter = record.ExamCenter;
            if (record.generatedDate) createData.generatedDate = record.generatedDate;
            if (record.HallticketStatus) createData.HallticketStatus = record.HallticketStatus;
            if (hallticketSubjectsData) createData.HallticketSubjects = hallticketSubjectsData;

            const created = await strapi
              .documents(HALL_TICKET_UID)
              .create({
                data: createData,
                status: 'published',
                populate: {
                  students_admission: true,
                  exam: true,
                },
              });

            createdRecords.push(created);
          }
        });

        ctx.status = 201;
        ctx.body = {
          data: createdRecords,
          meta: { created: createdRecords.length },
        };
      } catch (error) {
        strapi.log.error('HallTicket bulkCreate failed:', error);
        return ctx.badRequest(error.message || 'Unable to create hall ticket records.');
      }
    },

    /**
     * PUT /api/hall-tickets/bulk-update
     *
     * {
     *   "data": [
     *     {
     *       "documentId": "...",
     *       "hallTicketNo": "HT-002",
     *       "SeatNumber": "B3",
     *       "HallticketStatus": "published"
     *     }
     *   ]
     * }
     */
    async bulkUpdate(ctx) {
      const records = ctx.request.body?.data;

      if (!Array.isArray(records) || records.length === 0) {
        return ctx.badRequest('data must be a non-empty array.');
      }

      const updatedRecords = [];

      try {
        await strapi.db.transaction(async () => {
          for (let index = 0; index < records.length; index += 1) {
            const record = records[index];

            if (!record || typeof record !== 'object') {
              throw new Error(`Record must be an object at index ${index}`);
            }

            if (!record.documentId) {
              throw new Error(`documentId is required at index ${index}`);
            }

            const existingTicket = await strapi
              .documents(HALL_TICKET_UID)
              .findOne({
                documentId: record.documentId,
                populate: {
                  students_admission: true,
                  exam: true,
                },
              });

            if (!existingTicket) {
              throw new Error(`Hall ticket not found at index ${index}`);
            }

            const updateData = {};

            if (record.hallTicketNo !== undefined) {
              if (!record.hallTicketNo) {
                throw new Error(`hallTicketNo cannot be empty at index ${index}`);
              }
              updateData.hallTicketNo = record.hallTicketNo;
            }

            if (record.SeatNumber !== undefined) {
              updateData.SeatNumber = record.SeatNumber;
            }

            if (record.ExamCenter !== undefined) {
              updateData.ExamCenter = record.ExamCenter;
            }

            if (record.generatedDate !== undefined) {
              if (record.generatedDate && !isValidDate(record.generatedDate)) {
                throw new Error(`generatedDate must use YYYY-MM-DD format at index ${index}`);
              }
              updateData.generatedDate = record.generatedDate;
            }

            if (record.HallticketStatus !== undefined) {
              const validStatuses = ['Draft', 'published'];
              if (record.HallticketStatus && !validStatuses.includes(record.HallticketStatus)) {
                throw new Error(
                  `HallticketStatus must be one of: ${validStatuses.join(', ')} at index ${index}`
                );
              }
              updateData.HallticketStatus = record.HallticketStatus;
            }

            if (record.examDocumentId !== undefined) {
              if (!record.examDocumentId) {
                throw new Error(`examDocumentId cannot be empty at index ${index}`);
              }

              const exam = await strapi
                .documents(EXAM_UID)
                .findOne({ documentId: record.examDocumentId });

              if (!exam) {
                throw new Error(`Exam not found at index ${index}`);
              }

              updateData.exam = { set: [record.examDocumentId] };
            }

            if (Array.isArray(record.HallticketSubjects)) {
              const hallticketSubjectsData = [];

              for (let si = 0; si < record.HallticketSubjects.length; si += 1) {
                const sub = record.HallticketSubjects[si];

                if (!sub.subjectDocumentId) {
                  throw new Error(
                    `subjectDocumentId is required in HallticketSubjects at record ${index}, subject index ${si}`
                  );
                }

                const subject = await strapi
                  .documents(SUBJECT_UID)
                  .findOne({ documentId: sub.subjectDocumentId });

                if (!subject) {
                  throw new Error(
                    `Subject not found at record ${index}, subject index ${si}`
                  );
                }

                if (sub.examDate && !isValidDate(sub.examDate)) {
                  throw new Error(
                    `examDate must use YYYY-MM-DD format at record ${index}, subject index ${si}`
                  );
                }

                const entry = {};

                if (sub.examDate) entry.examDate = sub.examDate;
                if (sub.ExamTime) entry.ExamTime = sub.ExamTime;
                if (sub.ExamRoom) entry.ExamRoom = sub.ExamRoom;
                if (sub.ExamDay) entry.ExamDay = sub.ExamDay;

                entry.subject = {
                  connect: [sub.subjectDocumentId],
                };

                hallticketSubjectsData.push(entry);
              }

              updateData.HallticketSubjects = hallticketSubjectsData;
            }

            if (Object.keys(updateData).length === 0) {
              throw new Error(`No update fields provided at index ${index}`);
            }

            const updated = await strapi
              .documents(HALL_TICKET_UID)
              .update({
                documentId: record.documentId,
                data: updateData,
                populate: {
                  students_admission: true,
                  exam: true,
                },
              });

            await strapi
              .documents(HALL_TICKET_UID)
              .publish({ documentId: record.documentId });

            updatedRecords.push(updated);
          }
        });

        ctx.body = {
          data: updatedRecords,
          meta: { updated: updatedRecords.length },
        };
      } catch (error) {
        strapi.log.error('HallTicket bulkUpdate failed:', error);
        return ctx.badRequest(error.message || 'Unable to update hall ticket records.');
      }
    },

    /**
     * POST /api/hall-tickets/bulk-delete
     *
     * {
     *   "data": [
     *     "hall-ticket-document-id-1",
     *     "hall-ticket-document-id-2"
     *   ]
     * }
     */
    async bulkDelete(ctx) {
      const requestedDocumentIds = ctx.request.body?.data;

      if (!Array.isArray(requestedDocumentIds) || requestedDocumentIds.length === 0) {
        return ctx.badRequest('data must be a non-empty array of documentIds.');
      }

      const documentIds = uniqueValues(requestedDocumentIds);

      try {
        await strapi.db.transaction(async () => {
          for (let index = 0; index < documentIds.length; index += 1) {
            const documentId = documentIds[index];

            if (typeof documentId !== 'string' || !documentId.trim()) {
              throw new Error(`Valid documentId is required at index ${index}`);
            }

            const ticket = await strapi
              .documents(HALL_TICKET_UID)
              .findOne({ documentId });

            if (!ticket) {
              throw new Error(`Hall ticket not found for documentId ${documentId}`);
            }

            await strapi.documents(HALL_TICKET_UID).delete({ documentId });
          }
        });

        ctx.body = {
          data: { deleted: documentIds.length },
        };
      } catch (error) {
        strapi.log.error('HallTicket bulkDelete failed:', error);
        return ctx.badRequest(error.message || 'Unable to delete hall ticket records.');
      }
    },
  })
);
