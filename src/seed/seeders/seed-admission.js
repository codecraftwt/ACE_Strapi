//@ts-nocheck

'use strict';

const UID = 'api::admission.admission';
const { seedLog } = require('../seed-utils');

const LINK = '#';

const ACADEMIC_YEARS = [
  {
    year: '2026-2027',
    tabs: [
      {
        tabName: 'First Year B. Tech',
        documents: [
          { title: 'Cutoff 2025-26 [General]', documentLink: LINK },
          { title: 'Cutoff 2025-26 [Ladies]', documentLink: LINK },
          { title: 'Programmes and Choice Code of KIT', documentLink: LINK },
          { title: 'List of Required Documents', documentLink: LINK },
          { title: 'Information Brochure - KIT', documentLink: LINK },
          { title: 'FY KIT Merit Scholarship', documentLink: LINK },
          { title: 'Information Brochure Academic Year CET Cell', documentLink: LINK },
          { title: 'Fee Structure AY: 2026-27', documentLink: LINK },
          { title: 'Bus Facility', documentLink: LINK },
        ],
      },
      {
        tabName: 'Direct Second Year',
        documents: [
          { title: 'Cutoff 2025-26 [General]', documentLink: LINK },
          { title: 'Cutoff 2025-26 [Ladies]', documentLink: LINK },
          { title: 'Programmes and Choice Code of KIT', documentLink: LINK },
          { title: 'List of Required Documents', documentLink: LINK },
          { title: 'Information Brochure - KIT', documentLink: LINK },
          { title: 'Fee Structure AY:2026-27', documentLink: LINK },
          { title: 'Bus Facility', documentLink: LINK },
        ],
      },
    ],
  },
  {
    year: '2025-2026',
    tabs: [
      {
        tabName: 'First Year B. Tech',
        documents: [
          { title: 'Cutoff 2024-25 [General]', documentLink: LINK },
          { title: 'Cutoff 2024-25 [Ladies]', documentLink: LINK },
          { title: 'Programmes and Choice Code of KIT', documentLink: LINK },
          { title: 'List of Required Documents', documentLink: LINK },
          { title: 'Information Brochure - KIT', documentLink: LINK },
          { title: 'Information Brochure Academic Year 2025-26', documentLink: LINK },
          { title: 'Re. Fee Structure AY: 2025-26', documentLink: LINK },
          { title: 'Re. Fee Structure AY: 2025-26 [MQ IL ACAP]', documentLink: LINK },
          { title: 'Hostel Fee Structure AY: 2025-26', documentLink: LINK },
          { title: 'KIT Merit Scholarship', documentLink: LINK },
          { title: 'Notification for FY B.Tech. IL, ACAP Seats for AY 2025-26', documentLink: LINK },
          { title: 'Application Form for FY BTech IL, ACAP Seats for AY 2025-26', documentLink: LINK },
          { title: 'Revised Notification for F.Y. B. Tech. IL Seats fo AY 2025-26 Dtd. 05/09/2025', documentLink: LINK },
          { title: 'Provisional Merit List for FY BTech IL Admissions 2025-26 Dtd. 09/09/2025', documentLink: LINK },
          { title: 'Final Merit List for FY BTech IL Admissions 2025-26 Dtd. 09/09/2025', documentLink: LINK },
          { title: 'Revised Notification for First Year B. Tech. for A.Y. 2025-26 For ACAP Seats Dtd. 09/09/2025', documentLink: LINK },
          { title: 'First Year B.Tech. Provisional Merit List For ACAP Seats A.Y. 2025-2026. Date-10.09.2025 Time-10.00AM', documentLink: LINK },
          { title: 'First Year B.Tech. Final Merit List For ACAP Seats A.Y. 2025-2026. Date-10.09.2025 Time-04.30 PM', documentLink: LINK },
          { title: 'Revised Notification for First Year B. Tech. for A.Y. 2025-26 For IL_ACAP Seats Dtd. 11.09.2025', documentLink: LINK },
        ],
      },
      {
        tabName: 'Direct Second Year',
        documents: [
          { title: 'Cutoff 2024-25 [General]', documentLink: LINK },
          { title: 'Cutoff 2024-25 [Ladies]', documentLink: LINK },
          { title: 'Programmes and Choice Code of KIT', documentLink: LINK },
          { title: 'List of Required Documents', documentLink: LINK },
          { title: 'Information Brochure - KIT', documentLink: LINK },
          { title: 'Information Brochure Academic Year 2025-26', documentLink: LINK },
          { title: 'Re. Fee Structure AY:2025-26', documentLink: LINK },
          { title: 'Hostel Fee Structure AY: 2025-26', documentLink: LINK },
          { title: 'Notification for DSY B.Tech. ACAP Seats for AY 2025-26', documentLink: LINK },
          { title: 'Application Form for DSY BTech ACAP Seats for AY 2025-26', documentLink: LINK },
          { title: 'DSY Year B.Tech. Provisional Merit List For ACAP Seats A.Y. 2025-2026. Dtd. 10.09.2025 TIME 11.30AM', documentLink: LINK },
          { title: 'Revised Admission Notification for Direct Second Year B. Tech. for A.Y. 2025-26 (For ACAP Seats) 09.09.2025', documentLink: LINK },
          { title: 'DSY Year B.Tech. Final Merit List For ACAP Seats A.Y. 2025-2026. Dtd. 10.09.2025 TIME 04.30PM', documentLink: LINK },
          { title: 'Revised Admission Notification for Direct Second Year B. Tech. for A.Y. 2025-26 (For ACAP Seats, if any) 12.09.2025', documentLink: LINK },
        ],
      },
    ],
  },
  {
    year: '2024-2025',
    tabs: [
      {
        tabName: 'First Year B. Tech',
        documents: [
          { title: 'Fee Structure-AY:2024-25', documentLink: LINK },
          { title: 'Last Year Cutoff [General] AY:2023-24', documentLink: LINK },
          { title: 'Last Year Cutoff [Ladies] AY:2023-24', documentLink: LINK },
          { title: 'List of Required Documents for Admission', documentLink: LINK },
        ],
      },
      {
        tabName: 'Direct Second Year',
        documents: [
          { title: 'Fee Structure-AY:2024-25', documentLink: LINK },
          { title: 'Last Year Cutoff [General] AY:2023-24', documentLink: LINK },
          { title: 'Last Year Cutoff [Ladies] AY:2023-24', documentLink: LINK },
          { title: 'List of Required Documents for Admission', documentLink: LINK },
        ],
      },
    ],
  },
];

const COURSES = [
  { courseName: 'Bio Technology', courseDescription: 'B.Tech (Hons.) Biotechnology with specialization in Biosimilar Technology', generalIntake: 120, generalCode: '0626708210', tfwsIntake: 6, tfwsCode: '0626708211T' },
  { courseName: 'Civil Engineering', courseDescription: 'B.Tech (Hons.) Civil Engineering with specialization in Strategic Civil Infrastructure', generalIntake: 120, generalCode: '0626719110', tfwsIntake: 6, tfwsCode: '0626719111T' },
  { courseName: 'Computer Science and Engineering', courseDescription: 'B.Tech (Hons.) Computer Science Engineering with specialization in Artificial Intelligence & Data Science', generalIntake: 180, generalCode: '0626724210', tfwsIntake: 9, tfwsCode: '0626724211T' },
  { courseName: 'Electronics and Telecomm. Engineering', courseDescription: 'B.Tech (Hons.) Electronics & Telecom. Engineering with specialization in Internet of Things (IoT)', generalIntake: 120, generalCode: '0626737210', tfwsIntake: 6, tfwsCode: '0626737211T' },
  { courseName: 'Civil & Environmental Engineering', courseDescription: 'B.Tech (Hons.) Civil & Environmental Engineering with specialization in Green Technology & Sustainability Engineering', generalIntake: 60, generalCode: '0626792210', tfwsIntake: 3, tfwsCode: '0626792211T' },
  { courseName: 'Mechanical Engineering', courseDescription: 'B.Tech (Hons.) Mechanical Engineering with specialization in Robotics', generalIntake: 180, generalCode: '0626761210', tfwsIntake: 9, tfwsCode: '0626761211T' },
  { courseName: 'Electrical Engineering', courseDescription: 'B.Tech (Hons.) Electrical Engineering with specialization in Electric Vehicles', generalIntake: 120, generalCode: '0626729310', tfwsIntake: 6, tfwsCode: '0626729311T' },
  { courseName: 'Computer Science & Engineering (Artificial Intelligence & Machine Learning)', courseDescription: 'Computer Science & Engineering with specialization in Artificial Intelligence And Machine Learning', generalIntake: 180, generalCode: '0626791110', tfwsIntake: 9, tfwsCode: '0626791111T' },
  { courseName: 'Computer Science & Business Systems', courseDescription: 'B. Tech. (Hons.) in CSBS with Specialization in Block-Chain Technology', generalIntake: 180, generalCode: '0626726210', tfwsIntake: 9, tfwsCode: '0626726211T' },
];

const CONTACTS = [
  {
    department: 'For general queries',
    faculties: [
      { name: 'Dr. Mahesh B. Shinde', designation: 'Dean Admissions', mobile: '7030861199, 9767873887' },
      { name: 'Mr. Amar H. Tikole', designation: 'Associate Dean Admissions', mobile: '9272319199' },
    ],
  },
  {
    department: 'Bio Technology',
    faculties: [
      { name: 'Dr. Rajesh M. Jorgewad', designation: 'Assistant Professor', mobile: '9923957189' },
    ],
  },
  {
    department: 'Civil and Environmental Engineering',
    faculties: [
      { name: 'Mr. Pramod K. Jadhav', designation: 'Assistant Professor', mobile: '9028800388' },
      { name: 'Mr. Bharat C. Ingavale', designation: 'Assistant Professor', mobile: '7020727370' },
    ],
  },
  {
    department: 'Civil Engineering',
    faculties: [
      { name: 'Mr. Omkar P. Suryawanshi', designation: 'Assistant Professor', mobile: '9423133773' },
      { name: 'Mr. Jagdish J. Gavade', designation: 'Assistant Professor', mobile: '9975462468' },
      { name: 'Mr. Swapnil Mohite', designation: 'Assistant Professor', mobile: '9326339545' },
    ],
  },
  {
    department: 'Mechanical Engineering',
    faculties: [
      { name: 'Dr. Rohit D. Ghulanwar', designation: 'Assistant Professor', mobile: '9028456507' },
      { name: 'Mr. Sourabh Patil', designation: 'Assistant Professor', mobile: '9860848345' },
      { name: 'Dr. Mohsin Sheikh', designation: 'Assistant Professor', mobile: '9579620940' },
    ],
  },
  {
    department: 'Computer Science and Engineering',
    faculties: [
      { name: 'Mr. Arun R. Desai', designation: 'Assistant Professor', mobile: '8275259450' },
      { name: 'Mr. Ajay B. Kapase', designation: 'Assistant Professor', mobile: '9226873047' },
      { name: 'Mr. Ajit Patil', designation: 'Assistant Professor', mobile: '8308941757' },
    ],
  },
  {
    department: 'Computer Science Engineering (AIML)',
    faculties: [
      { name: 'Mr. Digvijay Kadam', designation: 'Assistant Professor', mobile: '7218865031' },
      { name: 'Mr. Nitin Magdum', designation: 'Assistant Professor', mobile: '9766817161' },
    ],
  },
  {
    department: 'Computer Science & Business Systems',
    faculties: [
      { name: 'Mr. Kiran V. Patil', designation: 'Assistant Professor', mobile: '7350498282 / 7219605152' },
      { name: 'Mr. Onkar Tandulwadkar', designation: 'Assistant Professor', mobile: '9730045452' },
    ],
  },
  {
    department: 'Electronics and Tele-communication Engineering',
    faculties: [
      { name: 'Mr. Eknath C. Patil', designation: 'Assistant Professor', mobile: '9822281422' },
      { name: 'Mr. Vaibhav Khandare', designation: 'Assistant Professor', mobile: '9096713761' },
    ],
  },
  {
    department: 'Electrical Engineering',
    faculties: [
      { name: 'Mrs. Priyanka N. Mane', designation: 'Assistant Professor', mobile: '7776887811' },
    ],
  },
  {
    department: 'M.Tech. Admission',
    faculties: [
      { name: 'Mr. Jagdish J. Gavade', designation: 'Assistant Professor', mobile: '9975462468' },
    ],
  },
];

async function seed(strapi) {
  seedLog(strapi, 'Seeding Admission (Undergraduate)...');

  const existing = await strapi.db.query(UID).findOne({});

  if (existing) {
    seedLog(strapi, '  Deleting existing Admission record...');
    await strapi.documents(UID).delete({ documentId: existing.documentId });
    seedLog(strapi, '  Old record deleted.');
  }

  await strapi.documents(UID).create({
    data: {
      title: 'Undergraduate Admissions',
      undergraduate: {
        academicYears: ACADEMIC_YEARS,
      },
      instituteCode: {
        code: '06267',
        courses: COURSES,
      },
      contactInfo: {
        contacts: CONTACTS,
      },
    },
  });

  seedLog(strapi, '  Admission seeded successfully.');
}

module.exports = { seed };
