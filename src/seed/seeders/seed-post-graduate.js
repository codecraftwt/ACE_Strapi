//@ts-nocheck

'use strict';

const UID = 'api::admission.admission';
const { seedLog } = require('../seed-utils');

const LINK = '#';

const PG_ACADEMIC_YEARS = [
  {
    year: '2025-2026',
    tabs: [
      {
        tabName: 'First Year M. Tech',
        documents: [
          { title: 'Information Brochure AY 2025-26', documentLink: 'documents/admission/2025_26/MTechInformation Brochure.pdf' },
          { title: 'KIT Information Brochure', documentLink: 'documents/home/KIT College -Brochure2025.pdf' },
          { title: 'Fee Structure AY: 2025-26', documentLink: 'documents/admission/2025_26/Fees Structure 2025-26 - MTech-I.pdf' },
          { title: 'Notification for FY M.Tech. IL and ACAP Seats for A.Y. 2025-26', documentLink: 'documents/admission/2025_26/Notification for FY M.Tech. IL and ACAP Seats for A.Y. 2025-26.pdf' },
          { title: 'Application Form for FY MTech IL, ACAP Seats for AY 2025-26', documentLink: 'documents/admission/2025_26/Application Form for FY MTech IL, ACAP Seats for AY 2025-26.pdf' },
          { title: 'Revised Admission Notification for First Year M. Tech. for A.Y. 2025-26 (For ACAP Seats) 03.09.2025', documentLink: 'documents/admission/2025_26/re/Revised Admission Notification for First Year M. Tech. for A.Y. 2025-26 (For ACAP Seats) 03.09.2025.pdf' },
          { title: 'First Year M.Tech. Provisional Merit List For IL and ACAP Seats A.Y. 2025-2026.', documentLink: 'documents/admission/2025_26/First Year M.Tech. Provisional Merit List  For IL and ACAP Seats  A.Y. 2025-2026.pdf' },
          { title: 'First Year M.Tech. Final Merit List For ACAP Seats A.Y. 2025-2026. NON-SPONSORED CANDIDATE', documentLink: 'documents/admission/2025_26/re/First Year M.Tech. Final Merit List  For ACAP Seats  A.Y. 2025-2026. NON-SPONSORED CANDIDATE.pdf' },
          { title: 'First Year M.Tech. Final Merit List For ACAP Seats A.Y. 2025-2026. SPONSORED CANDIDATE', documentLink: 'documents/admission/2025_26/re/First Year M.Tech. Final Merit List  For ACAP Seats  A.Y. 2025-2026. SPONSORED CANDIDATE.pdf' },
          { title: 'First Year M.Tech. Final Merit List For IL Seats A.Y. 2025-2026. NON-SPONSORED CANDIDATE', documentLink: 'documents/admission/2025_26/re/First Year M.Tech. Final Merit List  For IL Seats  A.Y. 2025-2026. NON-SPONSORED CANDIDATE.pdf' },
          { title: 'First Year M.Tech. Final Merit List For IL Seats A.Y. 2025-2026. SPONSORED CANDIDATE', documentLink: 'documents/admission/2025_26/re/First Year M.Tech. Final Merit List  For IL Seats  A.Y. 2025-2026. SPONSORED CANDIDATE.pdf' },
          { title: 'Revised Admission Notification for First Year M. Tech. for A.Y. 2025-26 (For IL_ACAP Seats, if any) 11.09.2025', documentLink: 'documents/admission/2025_26/re/Revised Admission Notification for First Year M. Tech. for A.Y. 2025-26 (For IL_ACAP Seats, if any)11.09.2025.pdf' },
        ],
      },
    ],
  },
];

const PG_COURSES = [
  { courseName: 'Electronics and Telecommunication Engineering', intake: 6, code: '0626737210' },
  { courseName: 'Mechanical Engineering Design', intake: 6, code: '0626790410' },
  { courseName: 'Biochemical Engineering and Biotechnology', intake: 6, code: '0626708110' },
  { courseName: 'Environmental Engineering', intake: 6, code: '0626720110' },
  { courseName: 'Civil and Structural Engineering', intake: 6, code: '0626794810' },
  { courseName: 'Computer Science and Engineering (Data Science)', intake: 6, code: '0626794710' },
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
  seedLog(strapi, 'Seeding Admission (Post Graduate)...');

  const existing = await strapi.db.query(UID).findOne({});

  if (existing) {
    seedLog(strapi, '  Updating existing Admission record with Post Graduate data...');
    await strapi.documents(UID).update({
      documentId: existing.documentId,
      data: {
        ...preserveExisting(existing),
        postGraduate: {
          academicYears: PG_ACADEMIC_YEARS,
          instituteCode: {
            code: '6267',
            courses: PG_COURSES,
          },
        },
      },
    });
    seedLog(strapi, '  Post Graduate data seeded successfully (updated).');
  } else {
    seedLog(strapi, '  No existing Admission record found. Creating new one...');
    await strapi.documents(UID).create({
      data: {
        title: 'Post Graduate Admissions',
        postGraduate: {
          academicYears: PG_ACADEMIC_YEARS,
          instituteCode: {
            code: '6267',
            courses: PG_COURSES,
          },
        },
      },
    });
    seedLog(strapi, '  Post Graduate data seeded successfully (created).');
  }
}

module.exports = { seed };
