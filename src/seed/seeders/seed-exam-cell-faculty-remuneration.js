//@ts-nocheck

'use strict';

const UID = 'api::exam-cell.exam-cell';
const { seedLog } = require('../seed-utils');

const FACULTY_REMUNERATION_ENTRIES = [
  {
    title: 'Exam Coordinator Remuneration Form',
    fileUrl: 'https://www.kitcoek.in/documents/examCell/remunerationFormat/exam-coordinator-remuneration-form.pdf'
  },
  {
    title: 'FORM No E-35 (Remuneration bill form of Assistant & Helper – OE Exam)',
    fileUrl: 'https://www.kitcoek.in/documents/examCell/remunerationFormat/form-no-e-35-remuneration-bill-form-of-assistant-helper-oe-exam-a4.pdf'
  },
  {
    title: 'FORM No. E-07 (Remuneration bill – Paper Setter, Assessment & POE)',
    fileUrl: 'https://www.kitcoek.in/documents/examCell/remunerationFormat/form-no-e-07-remuneration-bill-paper-setter-assessment-poe.pdf'
  },
  {
    title: 'Local Conveyance Allowance Bill Form (Paper Setter, Examiner, Moderator, Sr. Supervisor)',
    fileUrl: 'https://www.kitcoek.in/documents/examCell/remunerationFormat/local-convenyance-allowance-bill-form.pdf'
  },
  {
    title: 'POE.OE.SCHEDULE Format',
    fileUrl: 'https://www.kitcoek.in/documents/examCell/remunerationFormat/poe-oe-schedule-form.xls'
  },
  {
    title: 'T.A & H.A Bill Form (Paper Setter, Examiner, Moderator, Sr. Supervisor, Internal & External Examiner)',
    fileUrl: 'https://www.kitcoek.in/documents/examCell/remunerationFormat/ta-ha-bill-form.pdf'
  }
];

async function seed(strapi) {
  seedLog(strapi, 'Seeding ExamCell Faculty Remuneration...');

  const examCell = await strapi.documents(UID).findFirst();

  if (!examCell) {
    seedLog(strapi, '  ExamCell record not found. Creating with Faculty Remuneration data...');
    await strapi.documents(UID).create({
      data: {
        facultyRemuneration: FACULTY_REMUNERATION_ENTRIES,
      },
    });
    seedLog(strapi, '  Faculty Remuneration seeded (new ExamCell record).');
    return;
  }

  if (examCell.facultyRemuneration && examCell.facultyRemuneration.length > 0) {
    seedLog(strapi, '  Faculty Remuneration already present. Skipping.');
    return;
  }

  await strapi.documents(UID).update({
    documentId: examCell.documentId,
    data: {
      facultyRemuneration: FACULTY_REMUNERATION_ENTRIES,
    },
  });

  seedLog(strapi, '  Faculty Remuneration seeded successfully.');
}

module.exports = { seed, FACULTY_REMUNERATION_ENTRIES };
