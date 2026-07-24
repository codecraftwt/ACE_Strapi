//@ts-nocheck

'use strict';

const UID = 'api::admission.admission';
const { seedLog } = require('../seed-utils');

const PhD_RESEARCH_CENTERS = [
  {
    centerName: 'Electronic Engineering - Ph.D. Research Center',
    guides: [
      { srNo: 1, name: 'Dr. Y. M. Patil' },
      { srNo: 2, name: 'Dr. M. S. Chavan' },
    ],
    documentLink: 'documents/admission/phdProgram/Final students enroll Laboratory Recognition Ph_ D_ - Electronics Dept_ web site.pdf',
  },
  {
    centerName: 'Mechanical Engineering - Ph.D. Research Center',
    guides: [
      { srNo: 1, name: 'Dr. U.S.Bhapkar' },
      { srNo: 2, name: 'Dr. G.R.Naik' },
      { srNo: 3, name: 'Dr. S.S.Shinde' },
    ],
    documentLink: null,
  },
  {
    centerName: 'Civil Engineering - Ph.D. Research Center',
    guides: [
      { srNo: 1, name: 'Dr. Mujumdar Manoj Mohan' },
      { srNo: 2, name: 'Dr. Akshay R. Thorvat' },
    ],
    documentLink: null,
  },
  {
    centerName: 'Electronics & Telecommunication - Ph.D. Research Center',
    guides: [
      { srNo: 1, name: 'Dr.M.S.Chavan' },
      { srNo: 2, name: 'Dr. Y. M. Patil' },
    ],
    documentLink: null,
  },
];

function preserveExisting(existing) {
  if (!existing) return {};
  const preserved = {};
  const fields = ['title', 'undergraduate', 'instituteCode', 'contactInfo', 'postGraduate', 'phdProgram', 'vocationalCourses'];
  for (const field of fields) {
    if (existing[field] !== undefined && existing[field] !== null) {
      preserved[field] = existing[field];
    }
  }
  return preserved;
}

async function seed(strapi) {
  seedLog(strapi, 'Seeding Admission (PhD Program)...');

  const existing = await strapi.db.query(UID).findOne({});

  if (existing) {
    seedLog(strapi, '  Updating existing Admission record with PhD Program data...');
    await strapi.documents(UID).update({
      documentId: existing.documentId,
      data: {
        ...preserveExisting(existing),
        phdProgram: {
          phdAdmission: {
            items: [],
          },
          rulesAndRegulation: {
            items: [],
          },
          researchCenters: PhD_RESEARCH_CENTERS,
        },
      },
    });
    seedLog(strapi, '  PhD Program data seeded successfully (updated).');
  } else {
    seedLog(strapi, '  No existing Admission record found. Creating new one...');
    await strapi.documents(UID).create({
      data: {
        title: 'PhD Admissions',
        phdProgram: {
          phdAdmission: {
            items: [],
          },
          rulesAndRegulation: {
            items: [],
          },
          researchCenters: PhD_RESEARCH_CENTERS,
        },
      },
    });
    seedLog(strapi, '  PhD Program data seeded successfully (created).');
  }
}

module.exports = { seed };
