//@ts-nocheck

'use strict';

const UID = 'api::admission.admission';
const { seedLog } = require('../seed-utils');

const SCHOLARSHIP_ENTRIES = [
  { srNo: 1, type: 'Scholarship', category: 'OBC Boys', incomeLimit: 'BELOW 1.50 LAC', amountSanction: 'Half Tuition Fee, Exam Fee & Maintenance Allowance' },
  { srNo: 2, type: 'Scholarship', category: 'OBC Girls', incomeLimit: 'BELOW 1.50 LAC', amountSanction: 'Full Tuition Fee, Exam Fee & Maintenance Allowance' },
  { srNo: 3, type: 'Scholarship', category: 'SBC VJNT Boys & Girls', incomeLimit: 'BELOW 1.50 LAC', amountSanction: 'Full Tuition Fee, Exam Fee & Maintenance Allowance' },
  { srNo: 4, type: 'Scholarship', category: 'SC Boys & Girls', incomeLimit: 'BELOW 2.50 LAC', amountSanction: 'Full Tuition Fee, Development Fee, Exam Fee & Maintenance Allowance' },
  { srNo: 5, type: 'Scholarship', category: 'ST Boys & Girls', incomeLimit: 'BELOW 2.50 LAC', amountSanction: 'Full Tuition Fee, Development Fee, Exam Fee & Maintenance Allowance' },
  { srNo: 6, type: 'Freeship', category: 'OBC Boys', incomeLimit: 'Income above 1.50 Lac But having Non Creamy Layer Certificate', amountSanction: 'Half Tuition Fee, Exam Fee' },
  { srNo: 7, type: 'Freeship', category: 'OBC Girls', incomeLimit: 'Income above 1.50 Lac But having Non Creamy Layer Certificate', amountSanction: 'Full Tuition Fee, Exam Fee' },
  { srNo: 8, type: 'Freeship', category: 'SBC VJNT Boys & Girls', incomeLimit: 'Income above 1.50 Lac But having Non Creamy Layer Certificate', amountSanction: 'Full Tuition Fee, Exam Fee' },
  { srNo: 9, type: 'Freeship', category: 'SC Boys & Girls', incomeLimit: 'No Limit', amountSanction: 'Full Tuition Fee, Development Fee, Exam Fee' },
  { srNo: 10, type: 'Freeship', category: 'ST Boys & Girls', incomeLimit: 'No Limit', amountSanction: 'Full Tuition Fee, Development Fee, Exam Fee' },
  { srNo: 11, type: 'EBC', category: 'OPEN - EWS Boys', incomeLimit: 'BELOW 8.00 LAC', amountSanction: 'Half Tuition Fee, Exam Fee' },
  { srNo: 12, type: 'EBC', category: 'OPEN - EWS Girls', incomeLimit: 'BELOW 8.00 LAC', amountSanction: 'Full Tuition Fee, Exam Fee' },
  { srNo: 13, type: 'EBC', category: 'SEBC Boys', incomeLimit: 'Having Non-Creamy Layer Certificate', amountSanction: 'Half Tuition Fee, Exam Fee' },
  { srNo: 14, type: 'EBC', category: 'SEBC Girls', incomeLimit: 'Having Non-Creamy Layer Certificate', amountSanction: 'Full Tuition Fee, Exam Fee' },
  { srNo: 15, type: 'Minority (central Govt)', category: 'Jain, Cristian, Muslim, Shikh, Parasi', incomeLimit: 'below 2.50 Lac', amountSanction: 'Twenty-Five Thousand as per Govt. Policy' },
  { srNo: 16, type: 'Minority (State Govt)', category: 'Jain, Cristian, Muslim, Shikh, Parasi', incomeLimit: 'below 8.00 Lac', amountSanction: 'Fifty Thousand as per Govt. Policy' },
  { srNo: 17, type: 'Handicap Scholarship', category: 'Handicap Student', incomeLimit: 'No income Limit', amountSanction: 'Full Tuition Fee, Development Fee.' },
  { srNo: 18, type: 'STC PTC', category: 'Student Who\'s parents are teacher/ Non teaching staff', incomeLimit: 'No income Limit', amountSanction: 'Rs. 4000/- Only' },
  { srNo: 19, type: 'Central Sector Scholarship', category: 'ALL STUDENT', incomeLimit: 'Income Limit Below 6.00 lac', amountSanction: 'FE to TE 10000/- & BE 20000/-' },
  { srNo: 20, type: 'J&K Scholarship', category: 'J & K Student Only', incomeLimit: 'As per Govt Policy', amountSanction: 'As per Govt Policy' },
];

function preserveExisting(existing) {
  if (!existing) return {};
  const preserved = {};
  const fields = ['title', 'undergraduate', 'instituteCode', 'contactInfo', 'postGraduate', 'phdProgram', 'vocationalCourses', 'scholarship'];
  for (const field of fields) {
    if (existing[field] !== undefined && existing[field] !== null) {
      preserved[field] = existing[field];
    }
  }
  return preserved;
}

async function seed(strapi) {
  seedLog(strapi, 'Seeding Admission (Scholarship)...');

  const existing = await strapi.db.query(UID).findOne({});

  if (existing) {
    seedLog(strapi, '  Updating existing Admission record with Scholarship data...');
    await strapi.documents(UID).update({
      documentId: existing.documentId,
      data: {
        ...preserveExisting(existing),
        scholarship: {
          title: 'Government Scholarships & Freeship Details',
          banner: null,
          entries: SCHOLARSHIP_ENTRIES,
        },
      },
    });
    seedLog(strapi, '  Scholarship data seeded successfully (updated).');
  } else {
    seedLog(strapi, '  No existing Admission record found. Creating new one...');
    await strapi.documents(UID).create({
      data: {
        title: 'Scholarship Admissions',
        scholarship: {
          title: 'Government Scholarships & Freeship Details',
          banner: null,
          entries: SCHOLARSHIP_ENTRIES,
        },
      },
    });
    seedLog(strapi, '  Scholarship data seeded successfully (created).');
  }
}

module.exports = { seed };
