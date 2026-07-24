//@ts-nocheck

'use strict';

const UID = 'api::admission.admission';
const { seedLog } = require('../seed-utils');

const VOCATIONAL_DATA = {
  bimTechnology: {
    title: 'BIM Technology Admission 2025-26',
    subtitle: 'Admission Open 2025-26',
    badge: '4th batch',
    tagline: 'UGC-NSQF Approved Vocational Courses in BIM Technology',
    duration: 'August - Sept 2025',
    capacity: 'Limited capacity of 30 students/ Professionals',
    description:
      'Department of Civil Engineering, KITs College of Engineering (Autonomous), Kolhapur has started admissions for Vocational Courses in BIM technology for Academic Year 2024-25. Courses are affiliated to Shivaji University, Kolhapur and approved under UGC - National Skill Qualification Framework. Program is supported by BIM Technologies, Australia. Courses are designed to meet the ever demanding challenges of AEC Industry and improving Digital Project competencies of Civil Engineering graduates and Professionals. Sessions are Delivered by Industry Experts',
    about:
      'Department of Civil Engineering Kolhapur, KIT\'s College of Engineering (Autonomous) has recently surveyed potential employability requirements of Service industry during COVID 19 scenario, It was noticed that remote handling of Construction and Engineering project and work from home (WFH) will be a preferred choice of most of the service industries serving public and private domain of design, construction and operation phases of the project. Similar organizations were contacted and consulted for their opinion for launching a Skill development program that suits this scenario.\n\nBIM Technologies, Australia is one of organization accepted KIT\'s proposal to start educational programs to cater industry need in domain of BIM technology. For the last three years, the Department of Civil Engineering began to introduce departmental students with modeling phases of BIM with short term courses. Now with Association of BIM Technologies, Australia, Department of Civil Engineering is introducing the first time in the Western part of India\n\nA Diploma Program in BIM technology for a period of one year. This course is divided into two certificate programs.',
    enrollmentProcedure: {
      steps: [
        {
          stepNumber: 1,
          instruction:
            'Visit https://www.kitcoek.in/vocational-courses-at-kit-college-kolhapur.php Enroll your Interest at https://forms.gle/UEpiTnFJcK6iziCe7',
        },
        {
          stepNumber: 2,
          instruction:
            'You will Receive a Communication from Course Coordinator',
        },
        {
          stepNumber: 3,
          instruction:
            'Process admission form and eligibility documents for verification to Course Coordinator',
        },
        {
          stepNumber: 4,
          instruction:
            'Process your Fees for the Course and Take confirmation of admissions from Institute',
        },
      ],
    },
    courses: [
      { courseName: 'Diploma in BIM Technology' },
      { courseName: 'Certificate Course in BIM Fundamentals' },
      { courseName: 'Certificate Course in BIM Advanced' },
    ],
    eligibility:
      'Diploma OR Degree in Civil Engineering and Mechanical Engineering, Last year students of Engineering also can apply.',
    seats: 'Single batch is of 30 students.',
    courseSchedule:
      'Sunday and Monday of each week for course duration (3-4 Hours of a day)',
    whyChooseBim: {
      skillGaps: [
        {
          trade: 'Civil Engineering',
          description:
            'Feedback from various recruiters is received by the department from time to time. The majority of industry stakeholders stress the demand that students are not able to visualize engineering situations efficiently and professionally. Visualization and preparing necessary documentation, Drawing is required through the latest adopted technology by industries like BIM. CAD needs to be transformed into BIM models.',
        },
        {
          trade: 'Construction Industry',
          description:
            'In a situation like COVID 19 remote working is possible through adopting BIM technology instead of physical availability on site.\n\nCoordination and Clash detection between various Engineering services during Construction is a major challenge for timely completion of construction tasks and activities. Scope definition and contract management are key in contractual disputes. BIM is a single-window solution. Skilled Human resource is not available for adoption of BIM.\n\nMajority of AEC industries are working on BIM projects by developing BIM expertise based on their experience. BIM technology is also an important skill to develop entrepreneurship skills amongst the students by rendering their services to Medium and small scale consultants.',
        },
      ],
      marketReport:
        'Building Information Modeling (BIM) is one of the major development that has been seen in Architectural, Engineering, Construction, and Operation (AECO) industry over the last two decades. Many countries have taken a shift towards BIM adoption. Government organizations have made BIM implementation mandatory for contractors while delivering their projects. Many countries like the United States, the United Kingdom, Singapore, China, the Scandinavian countries (Norway, Denmark, Finland, and Sweden, etc.), France, South Korea, etc. as adopted BIM technology at public level projects. Government bodies played an important role in encouraging the adoption and in spreading awareness of BIM by setting law, developing BIM standards, creating BIM guidelines that can be taken up by the private sector, and can be implemented. Cheng and Lu (2015) have conducted an extensive review of how several countries had invested their efforts in BIM technology and workflow diffusion in their projects.\n\nIndia having a multi-billion dollar AECO industry and is the second-largest growing industry has tremendous potential and scope for growth of BIM. Although the nation has shown a significantly slow growth in BIM adoption due to many barriers in the current system as a whole it\'s changing rapidly. However, we witnessed inclination towards real estate, particularly residential real estate projects. According to sources, usage of BIM in the infrastructure and industrial development domains is gaining pace. AECO industry players\' states BIM usage, about sixty-eight percent on residential projects and highest usage was recorded in infrastructure sectors as per a study by RICS India (Sawhney et al. 2014).',
      ariiaFramework:
        'Mechanism of Placement of Students\nStudents will be Identified by Company based on projects executed at 1st Semester and Internship Performance in 2nd semester\nAutodesk the certification exam will be conducted and students will be Globally certified as Autodesk Certified User.',
      placementMechanism:
        'Students will be Identified by Company based on projects executed at 1st Semester and Internship Performance in 2nd semester\nAutodesk the certification exam will be conducted and students will be Globally certified as Autodesk Certified User.',
    },
  },
};

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
  seedLog(strapi, 'Seeding Admission (Vocational Courses)...');

  const existing = await strapi.db.query(UID).findOne({});

  if (existing) {
    seedLog(strapi, '  Updating existing Admission record with Vocational Courses data...');
    await strapi.documents(UID).update({
      documentId: existing.documentId,
      data: {
        ...preserveExisting(existing),
        vocationalCourses: VOCATIONAL_DATA,
      },
    });
    seedLog(strapi, '  Vocational Courses data seeded successfully (updated).');
  } else {
    seedLog(strapi, '  No existing Admission record found. Creating new one...');
    await strapi.documents(UID).create({
      data: {
        title: 'Vocational Courses Admissions',
        vocationalCourses: VOCATIONAL_DATA,
      },
    });
    seedLog(strapi, '  Vocational Courses data seeded successfully (created).');
  }
}

module.exports = { seed };
