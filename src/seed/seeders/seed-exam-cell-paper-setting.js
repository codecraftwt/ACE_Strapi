//@ts-nocheck

'use strict';

const UID = 'api::exam-cell.exam-cell';
const { seedLog } = require('../seed-utils');

const PAPER_SETTING_ENTRIES = [
  {
    title: 'Mid Semester Examination',
    description: 'Mid Semester Examination paper setting documents',
    date: '2021-01-01',
    fileUrl: 'https://www.kitcoek.in/documents/examCell/paper-setting/paper-setting-documents-2021.zip'
  },
  {
    title: 'End Semester Examination',
    description: 'End Semester Examination paper setting documents',
    date: '2021-12-01',
    fileUrl: 'https://www.kitcoek.in/documents/examCell/paper-setting/ese1221-paper-setting-doc.zip'
  },
  {
    title: 'Makeup Examination',
    description: 'Makeup Examination paper setting documents',
    date: '2021-01-01',
    fileUrl: 'https://www.kitcoek.in/documents/examCell/paper-setting/kit-web-makeup-examination.zip'
  },
  {
    title: 'Summer Term',
    description: 'Summer Term paper setting documents',
    date: '2021-06-01',
    fileUrl: 'https://www.kitcoek.in/documents/examCell/paper-setting/summer-term-document.zip'
  }
];

async function seed(strapi) {
  seedLog(strapi, 'Seeding ExamCell Paper Setting...');

  const examCell = await strapi.documents(UID).findFirst();

  if (!examCell) {
    seedLog(strapi, '  ExamCell record not found. Creating with Paper Setting data...');
    await strapi.documents(UID).create({
      data: {
        paperSetting: PAPER_SETTING_ENTRIES,
      },
    });
    seedLog(strapi, '  Paper Setting seeded (new ExamCell record).');
    return;
  }

  if (examCell.paperSetting && examCell.paperSetting.length > 0) {
    seedLog(strapi, '  Paper Setting already present. Skipping.');
    return;
  }

  await strapi.documents(UID).update({
    documentId: examCell.documentId,
    data: {
      paperSetting: PAPER_SETTING_ENTRIES,
    },
  });

  seedLog(strapi, '  Paper Setting seeded successfully.');
}

module.exports = { seed, PAPER_SETTING_ENTRIES };
