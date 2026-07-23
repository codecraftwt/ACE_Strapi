//@ts-nocheck

'use strict';

const UID = 'api::about.about';
const { seedLog } = require('../seed-utils');

const AICTE_DATA = [
  { serialNo: 1, academicYear: '1994-95', downloadDocument: 'documents/About/accreditation/1994-95.pdf' },
  { serialNo: 2, academicYear: '1995-96', downloadDocument: 'documents/About/accreditation/1995-96.pdf' },
  { serialNo: 3, academicYear: '1996-97', downloadDocument: 'documents/About/accreditation/1996-97.pdf' },
  { serialNo: 4, academicYear: '1997-98', downloadDocument: 'documents/About/accreditation/1997-98.pdf' },
  { serialNo: 5, academicYear: '1998-99', downloadDocument: 'documents/About/accreditation/1998-99.pdf' },
  { serialNo: 6, academicYear: '1999-2002', downloadDocument: 'documents/About/accreditation/1999-2002.pdf' },
  { serialNo: 7, academicYear: '2002-03', downloadDocument: 'documents/About/accreditation/2002-03.pdf' },
  { serialNo: 8, academicYear: '2003-04', downloadDocument: 'documents/About/accreditation/2003-04.pdf' },
  { serialNo: 9, academicYear: '2004-05', downloadDocument: 'documents/About/accreditation/2004-05.pdf' },
  { serialNo: 10, academicYear: '2005-06', downloadDocument: 'documents/About/accreditation/2005-06.pdf' },
  { serialNo: 11, academicYear: '2006-07', downloadDocument: 'documents/About/accreditation/2006-07.pdf' },
  { serialNo: 12, academicYear: '2007-08', downloadDocument: 'documents/About/accreditation/2007-08.pdf' },
  { serialNo: 13, academicYear: '2008-09', downloadDocument: 'documents/About/accreditation/2008-09.pdf' },
  { serialNo: 14, academicYear: '2009-10', downloadDocument: 'documents/About/accreditation/2009-10.pdf' },
  { serialNo: 15, academicYear: '2010-11', downloadDocument: 'documents/About/accreditation/2010-11.pdf' },
  { serialNo: 16, academicYear: '2011-12', downloadDocument: 'documents/About/accreditation/2011-12.pdf' },
  { serialNo: 17, academicYear: '2012-13', downloadDocument: 'documents/About/accreditation/2012-13.pdf' },
  { serialNo: 18, academicYear: '2013-14', downloadDocument: 'documents/About/accreditation/2013-14.pdf' },
  { serialNo: 19, academicYear: '2014-15', downloadDocument: 'documents/About/accreditation/2014-15.pdf' },
  { serialNo: 20, academicYear: '2015-16', downloadDocument: 'documents/About/accreditation/2015-16.pdf' },
  { serialNo: 21, academicYear: '2016-17', downloadDocument: 'documents/About/accreditation/2016-17.pdf' },
  { serialNo: 22, academicYear: '2017-18', downloadDocument: 'documents/About/accreditation/2017-18.pdf' },
  { serialNo: 23, academicYear: '2018-19', downloadDocument: 'documents/About/accreditation/2018-19.pdf' },
  { serialNo: 24, academicYear: '2019-20', downloadDocument: 'documents/About/accreditation/2019-20.pdf' },
  { serialNo: 25, academicYear: '2020-21', downloadDocument: 'documents/About/accreditation/2020-21.pdf' },
  { serialNo: 26, academicYear: '2021-22', downloadDocument: 'documents/About/accreditation/2021-22.pdf' },
  { serialNo: 27, academicYear: '2022-23', downloadDocument: 'documents/About/accreditation/EOA Report 22-23.PDF' },
  { serialNo: 28, academicYear: '2023-24', downloadDocument: 'documents/About/accreditation/EOA Report 2023-24.pdf' },
  { serialNo: 29, academicYear: '2024-25', downloadDocument: 'documents/About/accreditation/EOA Report 2024-2025.pdf' },
  { serialNo: 30, academicYear: '2025-26', downloadDocument: 'documents/About/accreditation/EOA Report 2025-2026.PDF' },
];

async function seed(strapi) {
  seedLog(strapi, 'Seeding About Accreditation...');

  const about = await strapi.db.query(UID).findOne({
    populate: {
      facultyList: true,
      accreditation: {
        populate: {
          aicteApproval: true,
          nbaNaac: true,
        },
      },
    },
  });

  if (!about) {
    seedLog(strapi, '  About record not found. Skipping.');
    return;
  }

  const updateData = {};

  if (!about.facultyList || about.facultyList.length === 0) {
    updateData.facultyList = [{ title: 'placeholder', link: '#' }];
  }

  if (!about.accreditation) {
    updateData.accreditation = {
      aicteApproval: AICTE_DATA,
      nbaNaac: [],
    };
  }

  if (Object.keys(updateData).length === 0) {
    seedLog(strapi, '  About Accreditation already present. Nothing to update.');
    return;
  }

  await strapi.documents(UID).update({
    documentId: about.documentId,
    data: updateData,
  });

  seedLog(strapi, '  About Accreditation seeded successfully.');
}

module.exports = { seed };
