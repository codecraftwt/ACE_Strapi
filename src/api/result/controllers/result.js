// @ts-nocheck
'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

const RESULT_UID = 'api::result.result';
const STUDENT_UID = 'api::students-admission.students-admission';
const COURSE_UID = 'api::course.course';
const DEPARTMENT_UID = 'api::department.department';
const EXAM_UID = 'api::exam.exam';
const SUBJECT_UID = 'api::subject.subject';
const FACULTY_UID = 'api::faculty.faculty';

const VALID_SEMESTERS = [
  'Semester 1',
  'Semester 2',
  'Semester 3',
  'Semester 4',
  'Semester 5',
  'Semester 6',
  'Semester 7',
  'Semester 8',
];

const UNIT_TEST_TYPES = ['Unit Test', 'Internal'];

function uniqueValues(values) {
  return [...new Set(values)];
}

function validateString(value, fieldName) {
  if (typeof value !== 'string' || !value.trim()) {
    return false;
  }
  return true;
}

async function findOneOrPublished(strapi, uid, documentId) {
  let entry = await strapi.documents(uid).findOne({ documentId });
  if (!entry) {
    entry = await strapi.documents(uid).findOne({ documentId, status: 'published' });
  }
  return entry;
}

module.exports = createCoreController(
  RESULT_UID,
  ({ strapi }) => ({
    async bulkCreate(ctx) {
      const records = ctx.request.body?.data;

      if (!Array.isArray(records) || records.length === 0) {
        return ctx.badRequest('data must be a non-empty array.');
      }

      const currentUser = ctx.state.user;
      if (!currentUser) {
        return ctx.unauthorized('You must be logged in.');
      }

      strapi.log.info(
        `[results.bulkCreate] user=${currentUser.id} (${currentUser.username}), records=${records.length}`
      );

      const createdRecords = [];

      try {
        await strapi.db.transaction(async () => {
          for (let index = 0; index < records.length; index += 1) {
            const record = records[index];

            if (!record || typeof record !== 'object') {
              throw new Error(`Record must be an object at index ${index}`);
            }

            // --- Validate studentDocumentId ---
            if (!validateString(record.studentDocumentId, 'studentDocumentId')) {
              throw new Error(
                `Valid studentDocumentId (non-empty string) is required at index ${index}. ` +
                `Received: ${JSON.stringify(record.studentDocumentId)}`
              );
            }

            strapi.log.info(
              `[results.bulkCreate] index=${index}, ` +
              `studentDocumentId=${record.studentDocumentId}, ` +
              `studentUID=${STUDENT_UID}`
            );

            // --- Validate courseDocumentId ---
            if (!validateString(record.courseDocumentId, 'courseDocumentId')) {
              throw new Error(
                `Valid courseDocumentId (non-empty string) is required at index ${index}. ` +
                `Received: ${JSON.stringify(record.courseDocumentId)}`
              );
            }

            strapi.log.info(
              `[results.bulkCreate] index=${index}, ` +
              `courseDocumentId=${record.courseDocumentId}, ` +
              `courseUID=${COURSE_UID}`
            );

            // --- Validate departmentDocumentId ---
            if (!validateString(record.departmentDocumentId, 'departmentDocumentId')) {
              throw new Error(
                `Valid departmentDocumentId (non-empty string) is required at index ${index}. ` +
                `Received: ${JSON.stringify(record.departmentDocumentId)}`
              );
            }

            strapi.log.info(
              `[results.bulkCreate] index=${index}, ` +
              `departmentDocumentId=${record.departmentDocumentId}, ` +
              `departmentUID=${DEPARTMENT_UID}`
            );

            // --- Validate Semester ---
            if (!record.Semester) {
              throw new Error(`Semester is required at index ${index}`);
            }

            if (!VALID_SEMESTERS.includes(record.Semester)) {
              throw new Error(
                `Semester must be one of: ${VALID_SEMESTERS.join(', ')} at index ${index}`
              );
            }

            // --- Look up and validate student ---
            const student = await findOneOrPublished(strapi, STUDENT_UID, record.studentDocumentId);

            if (!student) {
              throw new Error(
                `Student not found at index ${index}. ` +
                `Received studentDocumentId: ${record.studentDocumentId}. ` +
                `Searched content type: ${STUDENT_UID}`
              );
            }

            // --- Look up and validate course ---
            const course = await findOneOrPublished(strapi, COURSE_UID, record.courseDocumentId);

            if (!course) {
              throw new Error(
                `Course not found at index ${index}. ` +
                `Received courseDocumentId: ${record.courseDocumentId}. ` +
                `Searched content type: ${COURSE_UID}`
              );
            }

            // --- Look up and validate department ---
            const department = await findOneOrPublished(strapi, DEPARTMENT_UID, record.departmentDocumentId);

            if (!department) {
              throw new Error(
                `Department not found at index ${index}. ` +
                `Received departmentDocumentId: ${record.departmentDocumentId}. ` +
                `Searched content type: ${DEPARTMENT_UID}`
              );
            }

            // --- Look up and validate exam (if provided) ---
            let exam = null;
            if (record.examDocumentId) {
              if (!validateString(record.examDocumentId, 'examDocumentId')) {
                throw new Error(
                  `Valid examDocumentId (non-empty string) is required at index ${index}. ` +
                  `Received: ${JSON.stringify(record.examDocumentId)}`
                );
              }

              strapi.log.info(
                `[results.bulkCreate] index=${index}, ` +
                `examDocumentId=${record.examDocumentId}, ` +
                `examUID=${EXAM_UID}`
              );

              exam = await strapi
                .documents(EXAM_UID)
                .findOne({
                  documentId: record.examDocumentId,
                  populate: {
                    users_permissions_user: true,
                    subjects: true,
                  },
                });

              if (!exam) {
                exam = await strapi
                  .documents(EXAM_UID)
                  .findOne({
                    documentId: record.examDocumentId,
                    status: 'published',
                    populate: {
                      users_permissions_user: true,
                      subjects: true,
                    },
                  });
              }

              if (!exam) {
                throw new Error(
                  `Exam not found at index ${index}. ` +
                  `Received examDocumentId: ${record.examDocumentId}. ` +
                  `Searched content type: ${EXAM_UID}`
                );
              }

              // --- Unit Test / Internal: only exam creator can enter marks ---
              if (UNIT_TEST_TYPES.includes(exam.examTiype)) {
                if (!exam.users_permissions_user) {
                  throw new Error(
                    `Exam has no creator assigned at index ${index}. Cannot verify permissions.`
                  );
                }

                if (exam.users_permissions_user.id !== currentUser.id) {
                  const creatorFaculty = await strapi
                    .documents(FACULTY_UID)
                    .findMany({
                      filters: {
                        users_permissions_user: { id: { $eq: currentUser.id } },
                      },
                      limit: 1,
                    });

                  const creatorName = creatorFaculty.length > 0
                    ? creatorFaculty[0].Name
                    : exam.users_permissions_user.username;

                  throw new Error(
                    `You are not authorized to enter marks for this exam at index ${index}. ` +
                    `This is a ${exam.examTiype} exam created by "${creatorName}". ` +
                    `Only the faculty who created the exam can enter marks.`
                  );
                }
              }

              // --- Semester Exam: check faculty-subject allocation ---
              if (exam.examTiype === 'Semester Exam' && Array.isArray(record.SubjectResult)) {
                for (let si = 0; si < record.SubjectResult.length; si += 1) {
                  const sub = record.SubjectResult[si];

                  if (!validateString(sub.facultyDocumentId, 'facultyDocumentId')) {
                    throw new Error(
                      `facultyDocumentId is required in SubjectResult for Semester Exam ` +
                      `at record ${index}, subject index ${si}. ` +
                      `Received: ${JSON.stringify(sub.facultyDocumentId)}`
                    );
                  }

                  if (!validateString(sub.subjectDocumentId, 'subjectDocumentId')) {
                    throw new Error(
                      `subjectDocumentId is required in SubjectResult for Semester Exam ` +
                      `at record ${index}, subject index ${si}`
                    );
                  }

                  let subjectWithFaculty = await strapi
                    .documents(SUBJECT_UID)
                    .findOne({
                      documentId: sub.subjectDocumentId,
                      populate: { faculty: true },
                    });

                  if (!subjectWithFaculty) {
                    subjectWithFaculty = await strapi
                      .documents(SUBJECT_UID)
                      .findOne({
                        documentId: sub.subjectDocumentId,
                        status: 'published',
                        populate: { faculty: true },
                      });
                  }

                  if (!subjectWithFaculty) {
                    throw new Error(
                      `Subject not found at record ${index}, subject index ${si}. ` +
                      `Received subjectDocumentId: ${sub.subjectDocumentId}. ` +
                      `Searched content type: ${SUBJECT_UID}`
                    );
                  }

                  if (!subjectWithFaculty.faculty) {
                    throw new Error(
                      `Subject "${subjectWithFaculty.subjectName || sub.subjectDocumentId}" ` +
                      `has no faculty allocated at record ${index}, subject index ${si}. ` +
                      `Cannot enter marks for this subject.`
                    );
                  }

                  if (subjectWithFaculty.faculty.documentId !== sub.facultyDocumentId) {
                    const allocatedFaculty = await findOneOrPublished(
                      strapi, FACULTY_UID, subjectWithFaculty.faculty.documentId
                    );

                    throw new Error(
                      `Faculty "${sub.facultyDocumentId}" is not allocated to subject ` +
                      `"${subjectWithFaculty.subjectName || sub.subjectDocumentId}" ` +
                      `at record ${index}, subject index ${si}. ` +
                      `Allocated faculty: "${allocatedFaculty ? allocatedFaculty.Name : subjectWithFaculty.faculty.documentId}". ` +
                      `Only the allocated faculty can enter marks for this subject.`
                    );
                  }
                }
              }
            }

            // --- Build SubjectResult component data ---
            let subjectResultData = undefined;
            if (Array.isArray(record.SubjectResult)) {
              subjectResultData = [];

              for (let si = 0; si < record.SubjectResult.length; si += 1) {
                const sub = record.SubjectResult[si];

                if (!validateString(sub.subjectDocumentId, 'subjectDocumentId')) {
                  throw new Error(
                    `Valid subjectDocumentId (non-empty string) is required in SubjectResult ` +
                    `at record ${index}, subject index ${si}. ` +
                    `Received: ${JSON.stringify(sub.subjectDocumentId)}`
                  );
                }

                strapi.log.info(
                  `[results.bulkCreate] record ${index}, subject ${si}, ` +
                  `subjectDocumentId=${sub.subjectDocumentId}, ` +
                  `subjectUID=${SUBJECT_UID}`
                );

                const subject = await findOneOrPublished(strapi, SUBJECT_UID, sub.subjectDocumentId);

                if (!subject) {
                  throw new Error(
                    `Subject not found at record ${index}, subject index ${si}. ` +
                    `Received subjectDocumentId: ${sub.subjectDocumentId}. ` +
                    `Searched content type: ${SUBJECT_UID}`
                  );
                }

                if (sub.facultyDocumentId) {
                  if (!validateString(sub.facultyDocumentId, 'facultyDocumentId')) {
                    throw new Error(
                      `Valid facultyDocumentId (non-empty string) is required in SubjectResult ` +
                      `at record ${index}, subject index ${si}. ` +
                      `Received: ${JSON.stringify(sub.facultyDocumentId)}`
                    );
                  }

                  strapi.log.info(
                    `[results.bulkCreate] record ${index}, subject ${si}, ` +
                    `facultyDocumentId=${sub.facultyDocumentId}, ` +
                    `facultyUID=${FACULTY_UID}`
                  );

                  const faculty = await findOneOrPublished(strapi, FACULTY_UID, sub.facultyDocumentId);

                  if (!faculty) {
                    throw new Error(
                      `Faculty not found at record ${index}, subject index ${si}. ` +
                      `Received facultyDocumentId: ${sub.facultyDocumentId}. ` +
                      `Searched content type: ${FACULTY_UID}`
                    );
                  }
                }

                if (sub.totalMarks !== undefined && (typeof sub.totalMarks !== 'number' || sub.totalMarks < 0)) {
                  throw new Error(
                    `totalMarks must be a non-negative number at record ${index}, subject index ${si}`
                  );
                }

                if (sub.passingmarks !== undefined && (typeof sub.passingmarks !== 'number' || sub.passingmarks < 0)) {
                  throw new Error(
                    `passingmarks must be a non-negative number at record ${index}, subject index ${si}`
                  );
                }

                if (sub.obtainedmarks !== undefined && (typeof sub.obtainedmarks !== 'number' || sub.obtainedmarks < 0)) {
                  throw new Error(
                    `obtainedmarks must be a non-negative number at record ${index}, subject index ${si}`
                  );
                }

                if (sub.percentage !== undefined && (typeof sub.percentage !== 'number' || sub.percentage < 0)) {
                  throw new Error(
                    `percentage must be a non-negative number at record ${index}, subject index ${si}`
                  );
                }

                const entry = {};

                entry.subject = {
                  connect: [sub.subjectDocumentId],
                };

                if (sub.facultyDocumentId) {
                  entry.faculty = {
                    connect: [sub.facultyDocumentId],
                  };
                }

                if (sub.totalMarks !== undefined) entry.totalMarks = sub.totalMarks;
                if (sub.passingmarks !== undefined) entry.passingmarks = sub.passingmarks;
                if (sub.obtainedmarks !== undefined) entry.obtainedmarks = sub.obtainedmarks;
                if (sub.percentage !== undefined) entry.percentage = sub.percentage;
                if (sub.grade) entry.grade = sub.grade;
                if (sub.resultResult) entry.resultResult = sub.resultResult;

                subjectResultData.push(entry);
              }
            }

            // --- Build the result data ---
            const createData = {
              student: { connect: [record.studentDocumentId] },
              course: { connect: [record.courseDocumentId] },
              department: { connect: [record.departmentDocumentId] },
              Semester: record.Semester,
            };

            if (record.examDocumentId) {
              createData.exam = { connect: [record.examDocumentId] };
            }

            if (record.isReleased !== undefined) createData.isReleased = record.isReleased;
            if (record.approvedBy !== undefined) createData.approvedBy = record.approvedBy;
            if (subjectResultData) createData.SubjectResult = subjectResultData;

            // --- Semester Exam: append to existing record if same student+exam+semester ---
            let resultRecord = null;
            if (exam && exam.examTiype === 'Semester Exam' && subjectResultData && subjectResultData.length > 0) {
              const existingResults = await strapi.documents(RESULT_UID).findMany({
                filters: {
                  student: { documentId: { $eq: record.studentDocumentId } },
                  exam: { documentId: { $eq: record.examDocumentId } },
                  Semester: { $eq: record.Semester },
                },
                populate: {
                  student: true,
                  course: true,
                  department: true,
                  exam: true,
                  SubjectResult: {
                    populate: {
                      subject: true,
                      faculty: true,
                    },
                  },
                },
                limit: 1,
              });

              if (existingResults.length > 0) {
                const existing = existingResults[0];
                const existingSubjectResults = existing.SubjectResult || [];

                const mergedSubjectResults = [
                  ...existingSubjectResults.map((sr) => {
                    const entry = {};
                    if (sr.subject) entry.subject = { connect: [sr.subject.documentId] };
                    if (sr.faculty) entry.faculty = { connect: [sr.faculty.documentId] };
                    if (sr.totalMarks !== null && sr.totalMarks !== undefined) entry.totalMarks = sr.totalMarks;
                    if (sr.passingmarks !== null && sr.passingmarks !== undefined) entry.passingmarks = sr.passingmarks;
                    if (sr.obtainedmarks !== null && sr.obtainedmarks !== undefined) entry.obtainedmarks = sr.obtainedmarks;
                    if (sr.percentage !== null && sr.percentage !== undefined) entry.percentage = sr.percentage;
                    if (sr.grade) entry.grade = sr.grade;
                    if (sr.resultResult) entry.resultResult = sr.resultResult;
                    return entry;
                  }),
                  ...subjectResultData,
                ];

                const updateData = {
                  SubjectResult: mergedSubjectResults,
                };
                if (record.isReleased !== undefined) updateData.isReleased = record.isReleased;
                if (record.approvedBy !== undefined) updateData.approvedBy = record.approvedBy;

                resultRecord = await strapi
                  .documents(RESULT_UID)
                  .update({
                    documentId: existing.documentId,
                    data: updateData,
                    populate: {
                      student: true,
                      course: true,
                      department: true,
                      exam: true,
                    },
                  });

                await strapi
                  .documents(RESULT_UID)
                  .publish({ documentId: existing.documentId });

                strapi.log.info(
                  `[results.bulkCreate] index=${index}, appended SubjectResult to existing result documentId=${existing.documentId}`
                );
              }
            }

            // --- No existing record found (or not Semester Exam): create new ---
            if (!resultRecord) {
              resultRecord = await strapi
                .documents(RESULT_UID)
                .create({
                  data: createData,
                  status: 'published',
                  populate: {
                    student: true,
                    course: true,
                    department: true,
                    exam: true,
                  },
                });

              strapi.log.info(
                `[results.bulkCreate] index=${index}, created result documentId=${resultRecord.documentId}`
              );
            }

            createdRecords.push(resultRecord);
          }
        });

        ctx.status = 201;
        ctx.body = {
          data: createdRecords,
          meta: { created: createdRecords.length },
        };
      } catch (error) {
        strapi.log.error('Result bulkCreate failed:', error);
        return ctx.badRequest(error.message || 'Unable to create result records.');
      }
    },

    async bulkUpdate(ctx) {
      const records = ctx.request.body?.data;

      if (!Array.isArray(records) || records.length === 0) {
        return ctx.badRequest('data must be a non-empty array.');
      }

      const currentUser = ctx.state.user;
      if (!currentUser) {
        return ctx.unauthorized('You must be logged in.');
      }

      strapi.log.info(
        `[results.bulkUpdate] user=${currentUser.id} (${currentUser.username}), records=${records.length}`
      );

      const updatedRecords = [];

      try {
        await strapi.db.transaction(async () => {
          for (let index = 0; index < records.length; index += 1) {
            const record = records[index];

            if (!record || typeof record !== 'object') {
              throw new Error(`Record must be an object at index ${index}`);
            }

            if (!validateString(record.documentId, 'documentId')) {
              throw new Error(
                `Valid documentId (non-empty string) is required at index ${index}. ` +
                `Received: ${JSON.stringify(record.documentId)}`
              );
            }

            strapi.log.info(
              `[results.bulkUpdate] index=${index}, documentId=${record.documentId}`
            );

            const existingResult = await strapi
              .documents(RESULT_UID)
              .findOne({
                documentId: record.documentId,
                populate: {
                  student: true,
                  course: true,
                  department: true,
                  exam: true,
                },
              });

            if (!existingResult) {
              throw new Error(
                `Result not found at index ${index}. ` +
                `Received documentId: ${record.documentId}. ` +
                `Searched content type: ${RESULT_UID}`
              );
            }

            const updateData = {};

            if (record.Semester !== undefined) {
              if (!record.Semester) {
                throw new Error(`Semester cannot be empty at index ${index}`);
              }
              if (!VALID_SEMESTERS.includes(record.Semester)) {
                throw new Error(
                  `Semester must be one of: ${VALID_SEMESTERS.join(', ')} at index ${index}`
                );
              }
              updateData.Semester = record.Semester;
            }

            if (record.studentDocumentId !== undefined) {
              if (!validateString(record.studentDocumentId, 'studentDocumentId')) {
                throw new Error(
                  `Valid studentDocumentId (non-empty string) is required at index ${index}. ` +
                  `Received: ${JSON.stringify(record.studentDocumentId)}`
                );
              }

              strapi.log.info(
                `[results.bulkUpdate] index=${index}, ` +
                `studentDocumentId=${record.studentDocumentId}, ` +
                `studentUID=${STUDENT_UID}`
              );

              const student = await findOneOrPublished(strapi, STUDENT_UID, record.studentDocumentId);

              if (!student) {
                throw new Error(
                  `Student not found at index ${index}. ` +
                  `Received studentDocumentId: ${record.studentDocumentId}. ` +
                  `Searched content type: ${STUDENT_UID}`
                );
              }

              updateData.student = { set: [record.studentDocumentId] };
            }

            if (record.courseDocumentId !== undefined) {
              if (!validateString(record.courseDocumentId, 'courseDocumentId')) {
                throw new Error(
                  `Valid courseDocumentId (non-empty string) is required at index ${index}. ` +
                  `Received: ${JSON.stringify(record.courseDocumentId)}`
                );
              }

              const course = await findOneOrPublished(strapi, COURSE_UID, record.courseDocumentId);

              if (!course) {
                throw new Error(
                  `Course not found at index ${index}. ` +
                  `Received courseDocumentId: ${record.courseDocumentId}. ` +
                  `Searched content type: ${COURSE_UID}`
                );
              }

              updateData.course = { set: [record.courseDocumentId] };
            }

            if (record.departmentDocumentId !== undefined) {
              if (!validateString(record.departmentDocumentId, 'departmentDocumentId')) {
                throw new Error(
                  `Valid departmentDocumentId (non-empty string) is required at index ${index}. ` +
                  `Received: ${JSON.stringify(record.departmentDocumentId)}`
                );
              }

              const department = await findOneOrPublished(strapi, DEPARTMENT_UID, record.departmentDocumentId);

              if (!department) {
                throw new Error(
                  `Department not found at index ${index}. ` +
                  `Received departmentDocumentId: ${record.departmentDocumentId}. ` +
                  `Searched content type: ${DEPARTMENT_UID}`
                );
              }

              updateData.department = { set: [record.departmentDocumentId] };
            }

            let exam = null;
            if (record.examDocumentId !== undefined) {
              if (!validateString(record.examDocumentId, 'examDocumentId')) {
                throw new Error(
                  `Valid examDocumentId (non-empty string) is required at index ${index}. ` +
                  `Received: ${JSON.stringify(record.examDocumentId)}`
                );
              }

              exam = await strapi
                .documents(EXAM_UID)
                .findOne({
                  documentId: record.examDocumentId,
                  populate: {
                    users_permissions_user: true,
                    subjects: true,
                  },
                });

              if (!exam) {
                exam = await strapi
                  .documents(EXAM_UID)
                  .findOne({
                    documentId: record.examDocumentId,
                    status: 'published',
                    populate: {
                      users_permissions_user: true,
                      subjects: true,
                    },
                  });
              }

              if (!exam) {
                throw new Error(
                  `Exam not found at index ${index}. ` +
                  `Received examDocumentId: ${record.examDocumentId}. ` +
                  `Searched content type: ${EXAM_UID}`
                );
              }

              updateData.exam = { set: [record.examDocumentId] };
            } else if (existingResult.exam) {
              exam = await strapi
                .documents(EXAM_UID)
                .findOne({
                  documentId: existingResult.exam.documentId,
                  populate: {
                    users_permissions_user: true,
                    subjects: true,
                  },
                });

              if (!exam) {
                exam = await strapi
                  .documents(EXAM_UID)
                  .findOne({
                    documentId: existingResult.exam.documentId,
                    status: 'published',
                    populate: {
                      users_permissions_user: true,
                      subjects: true,
                    },
                  });
              }
            }

            // --- Unit Test / Internal: only exam creator can enter marks ---
            if (exam && UNIT_TEST_TYPES.includes(exam.examTiype)) {
              if (!exam.users_permissions_user) {
                throw new Error(
                  `Exam has no creator assigned at index ${index}. Cannot verify permissions.`
                );
              }

              if (exam.users_permissions_user.id !== currentUser.id) {
                const creatorFaculty = await strapi
                  .documents(FACULTY_UID)
                  .findMany({
                    filters: {
                      users_permissions_user: { id: { $eq: currentUser.id } },
                    },
                    limit: 1,
                  });

                const creatorName = creatorFaculty.length > 0
                  ? creatorFaculty[0].Name
                  : exam.users_permissions_user.username;

                throw new Error(
                  `You are not authorized to enter marks for this exam at index ${index}. ` +
                  `This is a ${exam.examTiype} exam created by "${creatorName}". ` +
                  `Only the faculty who created the exam can enter marks.`
                );
              }
            }

            if (record.isReleased !== undefined) {
              updateData.isReleased = record.isReleased;
            }

            if (record.approvedBy !== undefined) {
              updateData.approvedBy = record.approvedBy;
            }

            if (Array.isArray(record.SubjectResult)) {
              // --- Semester Exam: check faculty-subject allocation ---
              if (exam && exam.examTiype === 'Semester Exam') {
                for (let si = 0; si < record.SubjectResult.length; si += 1) {
                  const sub = record.SubjectResult[si];

                  if (!validateString(sub.facultyDocumentId, 'facultyDocumentId')) {
                    throw new Error(
                      `facultyDocumentId is required in SubjectResult for Semester Exam ` +
                      `at record ${index}, subject index ${si}. ` +
                      `Received: ${JSON.stringify(sub.facultyDocumentId)}`
                    );
                  }

                  if (!validateString(sub.subjectDocumentId, 'subjectDocumentId')) {
                    throw new Error(
                      `subjectDocumentId is required in SubjectResult for Semester Exam ` +
                      `at record ${index}, subject index ${si}`
                    );
                  }

                  let subjectWithFaculty = await strapi
                    .documents(SUBJECT_UID)
                    .findOne({
                      documentId: sub.subjectDocumentId,
                      populate: { faculty: true },
                    });

                  if (!subjectWithFaculty) {
                    subjectWithFaculty = await strapi
                      .documents(SUBJECT_UID)
                      .findOne({
                        documentId: sub.subjectDocumentId,
                        status: 'published',
                        populate: { faculty: true },
                      });
                  }

                  if (!subjectWithFaculty) {
                    throw new Error(
                      `Subject not found at record ${index}, subject index ${si}. ` +
                      `Received subjectDocumentId: ${sub.subjectDocumentId}. ` +
                      `Searched content type: ${SUBJECT_UID}`
                    );
                  }

                  if (!subjectWithFaculty.faculty) {
                    throw new Error(
                      `Subject "${subjectWithFaculty.subjectName || sub.subjectDocumentId}" ` +
                      `has no faculty allocated at record ${index}, subject index ${si}. ` +
                      `Cannot enter marks for this subject.`
                    );
                  }

                  if (subjectWithFaculty.faculty.documentId !== sub.facultyDocumentId) {
                    const allocatedFaculty = await findOneOrPublished(
                      strapi, FACULTY_UID, subjectWithFaculty.faculty.documentId
                    );

                    throw new Error(
                      `Faculty "${sub.facultyDocumentId}" is not allocated to subject ` +
                      `"${subjectWithFaculty.subjectName || sub.subjectDocumentId}" ` +
                      `at record ${index}, subject index ${si}. ` +
                      `Allocated faculty: "${allocatedFaculty ? allocatedFaculty.Name : subjectWithFaculty.faculty.documentId}". ` +
                      `Only the allocated faculty can enter marks for this subject.`
                    );
                  }
                }
              }

              const subjectResultData = [];

              for (let si = 0; si < record.SubjectResult.length; si += 1) {
                const sub = record.SubjectResult[si];

                if (!validateString(sub.subjectDocumentId, 'subjectDocumentId')) {
                  throw new Error(
                    `Valid subjectDocumentId (non-empty string) is required in SubjectResult ` +
                    `at record ${index}, subject index ${si}. ` +
                    `Received: ${JSON.stringify(sub.subjectDocumentId)}`
                  );
                }

                const subject = await findOneOrPublished(strapi, SUBJECT_UID, sub.subjectDocumentId);

                if (!subject) {
                  throw new Error(
                    `Subject not found at record ${index}, subject index ${si}. ` +
                    `Received subjectDocumentId: ${sub.subjectDocumentId}. ` +
                    `Searched content type: ${SUBJECT_UID}`
                  );
                }

                if (sub.facultyDocumentId) {
                  if (!validateString(sub.facultyDocumentId, 'facultyDocumentId')) {
                    throw new Error(
                      `Valid facultyDocumentId (non-empty string) is required in SubjectResult ` +
                      `at record ${index}, subject index ${si}. ` +
                      `Received: ${JSON.stringify(sub.facultyDocumentId)}`
                    );
                  }

                  const faculty = await findOneOrPublished(strapi, FACULTY_UID, sub.facultyDocumentId);

                  if (!faculty) {
                    throw new Error(
                      `Faculty not found at record ${index}, subject index ${si}. ` +
                      `Received facultyDocumentId: ${sub.facultyDocumentId}. ` +
                      `Searched content type: ${FACULTY_UID}`
                    );
                  }
                }

                if (sub.totalMarks !== undefined && (typeof sub.totalMarks !== 'number' || sub.totalMarks < 0)) {
                  throw new Error(
                    `totalMarks must be a non-negative number at record ${index}, subject index ${si}`
                  );
                }

                if (sub.passingmarks !== undefined && (typeof sub.passingmarks !== 'number' || sub.passingmarks < 0)) {
                  throw new Error(
                    `passingmarks must be a non-negative number at record ${index}, subject index ${si}`
                  );
                }

                if (sub.obtainedmarks !== undefined && (typeof sub.obtainedmarks !== 'number' || sub.obtainedmarks < 0)) {
                  throw new Error(
                    `obtainedmarks must be a non-negative number at record ${index}, subject index ${si}`
                  );
                }

                if (sub.percentage !== undefined && (typeof sub.percentage !== 'number' || sub.percentage < 0)) {
                  throw new Error(
                    `percentage must be a non-negative number at record ${index}, subject index ${si}`
                  );
                }

                const entry = {};

                entry.subject = {
                  connect: [sub.subjectDocumentId],
                };

                if (sub.facultyDocumentId) {
                  entry.faculty = {
                    connect: [sub.facultyDocumentId],
                  };
                }

                if (sub.totalMarks !== undefined) entry.totalMarks = sub.totalMarks;
                if (sub.passingmarks !== undefined) entry.passingmarks = sub.passingmarks;
                if (sub.obtainedmarks !== undefined) entry.obtainedmarks = sub.obtainedmarks;
                if (sub.percentage !== undefined) entry.percentage = sub.percentage;
                if (sub.grade) entry.grade = sub.grade;
                if (sub.resultResult) entry.resultResult = sub.resultResult;

                subjectResultData.push(entry);
              }

              // --- Semester Exam: append SubjectResult instead of replacing ---
              if (exam && exam.examTiype === 'Semester Exam') {
                const freshExisting = await strapi.documents(RESULT_UID).findOne({
                  documentId: record.documentId,
                  populate: {
                    SubjectResult: {
                      populate: {
                        subject: true,
                        faculty: true,
                      },
                    },
                  },
                });

                const existingSubjectResults = (freshExisting && freshExisting.SubjectResult) || [];

                const mergedSubjectResults = [
                  ...existingSubjectResults.map((sr) => {
                    const entry = {};
                    if (sr.subject) entry.subject = { connect: [sr.subject.documentId] };
                    if (sr.faculty) entry.faculty = { connect: [sr.faculty.documentId] };
                    if (sr.totalMarks !== null && sr.totalMarks !== undefined) entry.totalMarks = sr.totalMarks;
                    if (sr.passingmarks !== null && sr.passingmarks !== undefined) entry.passingmarks = sr.passingmarks;
                    if (sr.obtainedmarks !== null && sr.obtainedmarks !== undefined) entry.obtainedmarks = sr.obtainedmarks;
                    if (sr.percentage !== null && sr.percentage !== undefined) entry.percentage = sr.percentage;
                    if (sr.grade) entry.grade = sr.grade;
                    if (sr.resultResult) entry.resultResult = sr.resultResult;
                    return entry;
                  }),
                  ...subjectResultData,
                ];

                updateData.SubjectResult = mergedSubjectResults;
              } else {
                updateData.SubjectResult = subjectResultData;
              }
            }

            if (Object.keys(updateData).length === 0) {
              throw new Error(`No update fields provided at index ${index}`);
            }

            const updated = await strapi
              .documents(RESULT_UID)
              .update({
                documentId: record.documentId,
                data: updateData,
                populate: {
                  student: true,
                  course: true,
                  department: true,
                  exam: true,
                },
              });

            await strapi
              .documents(RESULT_UID)
              .publish({ documentId: record.documentId });

            strapi.log.info(
              `[results.bulkUpdate] index=${index}, updated result documentId=${record.documentId}`
            );

            updatedRecords.push(updated);
          }
        });

        ctx.body = {
          data: updatedRecords,
          meta: { updated: updatedRecords.length },
        };
      } catch (error) {
        strapi.log.error('Result bulkUpdate failed:', error);
        return ctx.badRequest(error.message || 'Unable to update result records.');
      }
    },

    async bulkRelease(ctx) {
      const records = ctx.request.body?.data;

      if (!Array.isArray(records) || records.length === 0) {
        return ctx.badRequest('data must be a non-empty array of documentIds.');
      }

      const currentUser = ctx.state.user;
      if (!currentUser) {
        return ctx.unauthorized('You must be logged in.');
      }

      strapi.log.info(
        `[results.bulkRelease] user=${currentUser.id} (${currentUser.username}), records=${records.length}`
      );

      const documentIds = uniqueValues(records);
      const releasedRecords = [];

      try {
        await strapi.db.transaction(async () => {
          for (let index = 0; index < documentIds.length; index += 1) {
            const documentId = documentIds[index];

            if (!validateString(documentId, 'documentId')) {
              throw new Error(
                `Valid documentId (non-empty string) is required at index ${index}. ` +
                `Received: ${JSON.stringify(documentId)}`
              );
            }

            const result = await findOneOrPublished(strapi, RESULT_UID, documentId);

            if (!result) {
              throw new Error(
                `Result not found for documentId: ${documentId} at index ${index}. ` +
                `Searched content type: ${RESULT_UID}`
              );
            }

            if (result.isReleased) {
              strapi.log.info(
                `[results.bulkRelease] index=${index}, documentId=${documentId} already released, skipping`
              );
              releasedRecords.push(result);
              continue;
            }

            await strapi
              .documents(RESULT_UID)
              .update({
                documentId,
                data: { isReleased: true },
              });

            await strapi
              .documents(RESULT_UID)
              .publish({ documentId });

            const updated = await findOneOrPublished(strapi, RESULT_UID, documentId);

            strapi.log.info(
              `[results.bulkRelease] index=${index}, released result documentId=${documentId}`
            );

            releasedRecords.push(updated);
          }
        });

        ctx.body = {
          data: releasedRecords,
          meta: { released: releasedRecords.length },
        };
      } catch (error) {
        strapi.log.error('Result bulkRelease failed:', error);
        return ctx.badRequest(error.message || 'Unable to release result records.');
      }
    },

    async bulkDelete(ctx) {
      const requestedDocumentIds = ctx.request.body?.data;

      if (!Array.isArray(requestedDocumentIds) || requestedDocumentIds.length === 0) {
        return ctx.badRequest('data must be a non-empty array of documentIds.');
      }

      strapi.log.info(
        `[results.bulkDelete] documentIds=${requestedDocumentIds.length}`
      );

      const documentIds = uniqueValues(requestedDocumentIds);

      try {
        await strapi.db.transaction(async () => {
          for (let index = 0; index < documentIds.length; index += 1) {
            const documentId = documentIds[index];

            if (!validateString(documentId, 'documentId')) {
              throw new Error(
                `Valid documentId (non-empty string) is required at index ${index}. ` +
                `Received: ${JSON.stringify(documentId)}`
              );
            }

            const result = await findOneOrPublished(strapi, RESULT_UID, documentId);

            if (!result) {
              throw new Error(
                `Result not found for documentId: ${documentId} at index ${index}. ` +
                `Searched content type: ${RESULT_UID}`
              );
            }

            await strapi.documents(RESULT_UID).delete({ documentId });

            strapi.log.info(
              `[results.bulkDelete] index=${index}, deleted result documentId=${documentId}`
            );
          }
        });

        ctx.body = {
          data: { deleted: documentIds.length },
        };
      } catch (error) {
        strapi.log.error('Result bulkDelete failed:', error);
        return ctx.badRequest(error.message || 'Unable to delete result records.');
      }
    },
  })
);
