//@ts-nocheck

'use strict';

const { hasRecords, seedLog } = require('../seed-utils');

const UID = 'api::students-admission.students-admission';
const { createIfMissing, findOne } = require('../seed-utils');

/**
 * Students Admission seed data.
 */
const STUDENTS = [
  // Example:
  // {
  //   applicationID: 'APP2025001',
  //   fullName: 'Rahul Sharma',
  //   dateOfBirth: '2003-05-15',
  //   Gender: 'Male',
  //   address: 'Pune, Maharashtra',
  //   email: 'rahul.sharma@student.ritindia.edu',
  //   phone: 9876543210,
  //   Semester: 'Semester 1',
  //   departmentName: 'Computer Science & Engineering',
  //   courseName: 'B.Tech Computer Science & Engineering',
  // },
];

async function seed(strapi) {
  seedLog(strapi, 'Seeding Students Admission...');

  for (const student of STUDENTS) {
    const { departmentName, courseName, ...studentData } = student;

    const result = await createIfMissing(strapi, UID, 'applicationID', studentData);
    if (result.action === 'skipped') {
      seedLog(strapi, `  Skipped (exists): ${student.fullName}`);
      continue;
    }

    // Resolve relations
    const updateData = {};
    if (departmentName) {
      const dept = await findOne(strapi, 'api::department.department', {
        deptName: departmentName,
      });
      if (dept) {
        updateData.department = {
          connect: [{ documentId: dept.documentId }],
        };
      }
    }
    if (courseName) {
      const course = await findOne(strapi, 'api::course.course', {
        courseName: courseName,
      });
      if (course) {
        updateData.course = {
          connect: [{ documentId: course.documentId }],
        };
      }
    }
    if (Object.keys(updateData).length > 0) {
      await strapi.documents(UID).update({
        documentId: result.created.documentId,
        data: updateData,
      });
    }

    seedLog(strapi, `  Created: ${student.fullName}`);
  }

  seedLog(strapi, 'Students Admission seeding complete.');
}

module.exports = { seed, STUDENTS };
