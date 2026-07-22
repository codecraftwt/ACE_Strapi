//@ts-nocheck

'use strict';

const UID = 'api::about.about';
const { seedLog } = require('../seed-utils');

/**
 * Founder Trustees data.
 */
const FOUNDERS_TRUSTEES = [
  { PersonName: 'Late Shri. Shivajirao D. Desai', Designation: 'Founder Chairman' },
  { PersonName: 'Late Shri. Mohammedhussein M. Hudli', Designation: 'Founder Vice Chairman' },
  { PersonName: 'Late Shri. Sudhakar(Bhausaheb) S. Kulkarni', Designation: 'Founder Secretary' },
  { PersonName: 'Late Shri. Ram Menon', Designation: 'Trustee' },
  { PersonName: 'Late Shri. Laxman Bhausaheb Chougule', Designation: 'Trustee' },
  { PersonName: 'Late Shri. Devgouda Sidgouda Patil', Designation: 'Trustee' },
  { PersonName: 'Late.Shri. M.R. Pungavkar', Designation: 'Trustee' },
  { PersonName: 'Late.Shri. C.D.Joshi', Designation: 'Trustee' },
  { PersonName: 'Late.Shri. A.P. Rane', Designation: 'Trustee' },
  { PersonName: 'Late Shri. Rajaram S. Beri', Designation: 'Trustee' },
];

/**
 * Chairman Message data.
 */
const CHAIRMAN_MESSAGE = {
  personName: 'Mr. Sajid Hudli',
  designation: 'Chairman',
  message: [
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          text: 'KIT has established a prominent presence at both State and National levels, renowned for producing adept engineers ready to confront emerging challenges. The institute consistently directs efforts towards refining teaching and learning systems, with a keen emphasis on incorporating creativity and critical thinking into the curriculum.',
        },
      ],
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          text: 'Recognizing the imperative for skill development, our focus is on empowering students to showcase heightened expertise. In line with this commitment, endeavors include the addition of qualified PhDs to our esteemed faculty, further fortifying research initiatives across all academic levels.',
        },
      ],
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          text: 'A commendable mention is owed to the proactive engagement of both students and faculty in organizing impactful State and National level workshops. These endeavors serve as invaluable platforms, aiding the institute in staying abreast of prevailing market trends.',
        },
      ],
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          text: 'My sincere best wishes to everyone characterized by continued triumphs, academic excellence, and collective growth.',
        },
      ],
    },
  ],
};

/**
 * Board of Directors data.
 */
const BOARD_OF_DIRECTORS = [
  { personName: 'Mr. Sajid Hudli', designation: 'Chairman' },
  { personName: 'Shri. Sachin Menon', designation: 'Vice Chairman' },
  { personName: 'Shri. Dipak Chougule', designation: 'Secretary' },
  { personName: 'Shri. Sunil Kulkarni', designation: 'Trustee Director, IMER' },
  { personName: 'Shri. Bharat Patil', designation: 'Trustee' },
  { personName: 'Shri. Dilip Joshi', designation: 'Trustee' },
  { personName: 'Mrs. Shilpaja P. Kangutkar-Pungaonkar', designation: 'Trustee' },
  { personName: 'Col. Pratapsinh Raorane (Rtd.)', designation: 'Trustee' },
];

/**
 * Governing Council data.
 */
const GOVERNING_COUNCIL = [
  { serialNo: 1, personName: 'Mr.Sajid Hudli', designation: 'Chairman, Kolhapur Institute of Technology, Kolhapur', position: 'Chairman, Nominee, KIT Trust' },
  { serialNo: 2, personName: 'Mr.Sachin Menon', designation: 'Vice Chairman, Kolhapur Institute of Technology, Kolhapur', position: 'Member, Nominee, KIT Trust' },
  { serialNo: 3, personName: 'Mr.Dipak Chougule', designation: 'Secretary, Kolhapur Institute of Technology, Kolhapur', position: 'Member, Nominee, KIT Trust' },
  { serialNo: 4, personName: 'Mr.Bharat D.Patil', designation: 'Trustee, Kolhapur Institute of Technology, Kolhapur', position: 'Member, Nominee, KIT Trust' },
  { serialNo: 5, personName: 'Mr.Sunil Kulkarni', designation: 'Trustee, Kolhapur Institute of Technology, Kolhapur', position: 'Trustee, Nominee, KIT Trust' },
  { serialNo: 6, personName: 'Col.Pratapsinh Raorane (Rtd.)', designation: 'Trustee, Kolhapur Institute of Technology, Kolhapur', position: 'Member Invitee, Trustee, KIT' },
  { serialNo: 7, personName: 'Mr. Sanjay Kotha', designation: 'Joint President & Chief Digital & Business Transformation Officer Adani Airports, Adani Ports & Logistics', position: 'Member, Representative, Industry' },
  { serialNo: 8, personName: 'Prof. (Dr) Ganapati D. Yadav', designation: 'National Science Chair (SERB/DST/GOI) & Emeritus Professor of Eminence, Former Vice-Chancellor and R.T. Mody Distinguished Professor, former TATA Chemicals Darbari Seth Distinguished Professor of leadership and Innovation, Padmashri Awardee by the President of India (2016)', position: 'Member, Representative, Industry' },
  { serialNo: 9, personName: 'Mr.Nikhil J. Padate', designation: 'Founder, JANGS TECHNOLOGIES, Ichalkaranji', position: 'Member, Representative Industry' },
  { serialNo: 10, personName: 'Dr.S.K.Mahajan', designation: 'Former Director,Technical Education, Mumbai, Email ID : director@dte.org.in, skmahajan@dte.org, skmatdte@gmail.com', position: 'Member Representative Academia' },
  { serialNo: 11, personName: 'Dr. Anand Mohan', designation: 'Professor, Dept. Electronics Engg., Indian Institute of Technology, Banaras Hindu University, Varanasi', position: 'Member, UGC, Nominee' },
  { serialNo: 12, personName: 'Member- Ex-officio', designation: 'Regional Officer & Assistant Director (WRO) AICTE, NITIE Campus, Vihar Lake, Mumbai.', position: 'Member, AICTE, Nominee' },
  { serialNo: 13, personName: 'Member- Ex-officio', designation: 'Joint Director, Technical Education, Regional Office, Pune', position: 'Member, DTE, Nominee' },
  { serialNo: 14, personName: 'Prof. (Dr) S. N. Sapali', designation: 'Director,Department of Technology Shivaji University,Kolhapur. director.tech@unishivaji.ac.in', position: 'Member,Shivaji University, Nominee' },
  { serialNo: 15, personName: 'Dr.Y.M.Patil', designation: 'Professor & Dean, Examination & Evaluation, Kolhapur Institute of Technology\'s College of Engg. (Autonomous), Kolhapur', position: 'Member - Faculty' },
  { serialNo: 16, personName: 'Dr. U.S. Bhapkar', designation: 'Professor & Head, Dept.of Mechanical Engineering Kolhapur Institute of Technology\'s College of Engineering (Autonomous), Kolhapur Email : bhapkar.udaysinh@kitcoek.in Mob. No. : 9422045934', position: 'Member - Faculty' },
  { serialNo: 17, personName: 'Dr. Dattatray J. Sathe', designation: 'Registrar, Kolhapur Institute of Technology\'s College of Engg. (Autonomous), Kolhapur', position: 'Member - Invitee' },
  { serialNo: 18, personName: 'Dr.Mohan B.Vanarotti', designation: 'Director, Kolhapur Institute of Technology\'s College of Engg. (Autonomous), Kolhapur', position: 'Member - Secretary' },
];

/**
 * Director Message data.
 */
const DIRECTOR_MESSAGE = {
  personName: 'Prof. (Dr.) Mohan B. Vanarotti',
  designation: 'Director',
  message: [
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          text: 'In the heart of the cultural tapestry of western Maharashtra, a beacon of academic distinction shines brightly\u2014The Kolhapur Institute of Technology\'s College of Engineering (Autonomous), Kolhapur known as KIT.',
        },
      ],
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          text: 'Gracefully nestled on an expansive 11-hectare canvas, meticulously cultivated for both the present and the promise of the future, our institution proudly welcomes over 4500 students. It has burgeoned into an eminent bastion of education, offering a spectrum of 10 undergraduate, 06 graduate programs, and fostering intellectual exploration through 04 distinguished research centers for Ph.D. programs.',
        },
      ],
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          text: 'At the helm of our academic voyage are over 200+ highly qualified teaching professionals, serving as the stalwart foundation of KIT. Their erudition has garnered commendation, attracting sponsored projects from venerable institutions such as AICTE, NABARD, SERB-DST, among others. The global contours of our academic pursuits are enhanced through collaborations with prestigious institutions like the Bhabha Atomic Research Centre, Mumbai, Mae Fah Luang University, Thailand, Knor Bremse, Germany, and the illustrious Tata Consultancy Services.',
        },
      ],
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          text: 'In recent chapters of our narrative, KIT has unfurled its entrepreneurial wings, securing substantial financial backing for visionary initiatives from the Department of Science and Technology and AICTE. The Mayura-AICTE Idea Lab, NIDHI i-TBI, Centralized Digital Library, E-Content Development Studio, Incubation Centre (KITE), Language Labs, and the Apple Training Centre stand testament to our unwavering commitment to innovation.',
        },
      ],
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          text: 'Hence, with great honor, I extend a prestigious invitation to students hailing from diverse corners of the state and beyond, urging them to become torchbearers of excellence at KIT. Adorned with accolades like NBA and NAAC with an A+ grade, our institution beckons you to dedicate four years to the pursuit of cutting-edge technological knowledge, transforming into an erudite, future-ready engineer. In conclusion, I take this moment to convey my heartfelt wishes for the resounding success of all our students and graduates. Be proud, be a KITan.',
        },
      ],
    },
    {
      type: 'paragraph',
      children: [
        {
          type: 'text',
          text: '\u0928 \u091a\u094c\u0930\u0939\u093e\u0930\u094d\u092f\u0902 \u0928 \u091a \u0930\u093e\u091c\u0939\u093e\u0930\u094d\u092f\u0902 \u0928 \u091a \u092d\u094d\u0930\u093e\u0924\u0943\u092d\u093e\u091c\u094d\u092f\u0902 \u0928 \u091a \u092d\u093e\u0930\u0915\u093e\u0930\u093f \u0935\u094d\u092f\u092f\u0947 \u0915\u0943\u0924\u0947 \u0935\u0930\u094d\u0927\u0924 \u090f\u0935 \u0928\u093f\u0924\u094d\u092f\u0902 \u0935\u093f\u0926\u094d\u092f\u093e\u0927\u0928\u0902 \u0938\u0930\u094d\u0935\u0927\u0928\u092a\u094d\u0930\u0927\u093e\u0928\u092e\u0947\u0902\u0962',
        },
      ],
    },
  ],
};

/**
 * College Administration data.
 * First entry is the Director (displayed prominently).
 * Remaining entries are Deans/Administrators.
 */
const COLLEGE_ADMINISTRATION = [
  { personName: 'Prof. (Dr.) Mohan B. Vanarotti', designation: 'Director' },
  { personName: 'Dr. Dattatray J. Sathe', designation: 'Registrar' },
  { personName: 'Dr. Akshay R. Thorvat', designation: 'Dean - Academics' },
  { personName: 'Dr. Prashant P. Powar', designation: 'Dean - Quality Assurance' },
  { personName: 'Dr. Manoj M. Yadav', designation: 'Dean - Examination & Evaluation' },
  { personName: 'Dr. Amit R. Sarkar', designation: 'Dean \u2013 Corporate Relations' },
  { personName: 'Dr. Mahesh B. Shinde', designation: 'Dean Admissions' },
  { personName: 'Dr. Karidkar Sunil Sureshrao', designation: 'Dean \u2013 Alumni' },
  { personName: 'Dr. Rohan Nalawade', designation: 'Dean International Relationship' },
  { personName: 'Dr. Jitendra Bhat', designation: 'Dean \u2013 Student Activity' },
  { personName: 'Dr. Sachin. S. Shinde', designation: 'Dean Innovation and Incubation Linkages(IIL)' },
];

/**
 * Office Administration data.
 */
const OFFICE_ADMINISTRATION = [
  { serialNo: 1, personName: 'Dr. Dattatray J. Sathe', designation: 'Registrar', mobileNo: '7798985868' },
  { serialNo: 2, personName: 'Mrs. Priya Salokhe', designation: 'Office Superintendent', mobileNo: '9595899001' },
  { serialNo: 3, personName: 'Mr. Mangesh Babanrao Majagaonkar', designation: 'Accountant', mobileNo: '9763866899' },
  { serialNo: 4, personName: 'Miss. Sawant Poonam Kedar', designation: 'Jr. Accounts Officer', mobileNo: '9423043808' },
  { serialNo: 6, personName: 'Mr. Patole Vijay Jagdev', designation: 'Jr. Clerk', mobileNo: '8007808895' },
  { serialNo: 7, personName: 'Mr. Jadhav Mahesh Vilas', designation: 'Jr. Clerk', mobileNo: '9823732892' },
  { serialNo: 8, personName: 'Smt. Dinde Ashwini Vijay', designation: 'Jr. Clerk', mobileNo: '8411801177' },
  { serialNo: 9, personName: 'Mrs. Bage Vaishali Manoj', designation: 'Jr. Clerk', mobileNo: '9765151949' },
  { serialNo: 10, personName: 'Mr. Salokhe Ramesh Namdev', designation: 'Sr. Clerk', mobileNo: '7769814855' },
  { serialNo: 11, personName: 'Mrs. Narvekar Sankita Sanjay', designation: 'Sr. Clerk', mobileNo: '9763245998' },
  { serialNo: 12, personName: 'Smt. Kulkarni Smita Shrikant', designation: 'Sr. Clerk', mobileNo: '9766644017' },
  { serialNo: 13, personName: 'Mr. Patil Sanjay Bhagoji', designation: 'Jr. Clerk', mobileNo: '9850427227' },
  { serialNo: 14, personName: 'Mr. Patil Vishwas Parshram', designation: 'Jr. Clerk', mobileNo: '7588065014' },
  { serialNo: 15, personName: 'Mr. Patil Suraj Babu', designation: 'Jr. Clerk', mobileNo: '8308812526' },
  { serialNo: 16, personName: 'Mr. Patil Sangram Shankarrao', designation: 'Jr. Clerk', mobileNo: '9028819239' },
  { serialNo: 17, personName: 'Mr. Shinde Ravindra Tryamakrao', designation: 'Store Keeper', mobileNo: '9764469616' },
  { serialNo: 18, personName: 'Mr. Jondhalekar Dnyanadev Dattaram', designation: 'Clerk', mobileNo: '7744054491' },
  { serialNo: 19, personName: 'Mr. Chougule Shivaji Shamrao', designation: 'Driver', mobileNo: '9881434187' },
];

const MILESTONES = [
  { year: '1983', description: 'Established' },
  { year: '2005', description: '1st NBA Accrediation (Elx,Civil,Env,Prod)' },
  { year: '2008', description: '1st NBA Accrediation (Elx,Civil,Env,Prod,Mech,CSE,IT,Bio)' },
  { year: '2009', description: 'SUK Lead College' },
  { year: '2015', description: 'NAAC \'A\' Grade Accrediation' },
  { year: '2016', description: 'SUK Permanent Affiliation SUK Lead College' },
  { year: '2017', description: 'Autonomous Status Recognition Under 2 (f) and 12 (B)' },
  { year: '2018', description: 'NBA Accreditation' },
  { year: '2020', description: 'NBA Accreditation [ Civil ]' },
  { year: '2022', description: 'NBA Accreditation [ETC, Mechanicaal and Enviormental Engineering]' },
  { year: '2023a', description: 'NAAC \'A+\' Grade Accrediation' },
  { year: '2023b', description: 'NBA Accreditation [CSE, CIVIL and Biotechnology Engineering]' },
  { year: '2024', description: 'Empowered Autonomy Status to KIT, INR. 5 Crore From MSInS for TBI at KIT' },
];

const IQAC_DATA = {
  introductionText: 'In pursuance of the National Action Plan of the National Assessment and Accreditation Council (NAAC), Bangalore, for performance evaluation, assessment and accreditation and quality up gradation of institutions of higher education, the NAAC proposes that every accredited institution should establish an Internal Quality Assurance Cell (IQAC) as a post-accreditation quality sustenance measure. Since quality enhancement is a continuous process, the IQAC will become a part of an institution\'s system and work towards realizing the goals of quality enhancement and sustenance. The prime task of the IQAC is to develop a system for conscious, consistent and catalytic improvement in the performance of institutions. The IQAC will make a significant and meaningful contribution in the post-accreditation phase of institutions. During the post-accreditation period, the IQAC will channelise the efforts and measures of an institution towards academic excellence. The guidelines provided in the following pages will facilitate the institution in the creation and operation of the Internal Quality Assurance Cell (IQAC). The work of the IQAC is the first step towards the internalization and institutionalization of quality enhancement. Its success depends upon the sense of belongingness and participation it can inculcate in all the constituents of the institution. It will not be yet another hierarchical structure or recordkeeping exercise in the institution; it will be a facilitative and participative voluntary system/unit/organ of the institution. The IQAC has the potential to become a vehicle for ushering in quality by working out intervention strategies to remove deficiencies and enhance quality. Quality circles in industries operate on similar lines.\n\nObjective:\n\nThe Primary aim of the IQAC is to develop a system for conscious, consistent and catalytic action to improve the academic and administrative performance of the institution.',
  ssrDocumentHref: 'documents/About/iqac/nacc-record/kit-nacc-ssr-cycle.pdf',
  iqacLinks: [
    { title: 'Best Practices', href: 'best-practices' },
    { title: 'AQAR Records', href: 'iqar-records' },
    { title: 'Minutes of IQAC Meetings 2022-23', href: 'documents/About/IQAC/IQAC Meeting 2022-23.pdf' },
    { title: 'Internal Quality Assurance Cell (IQAC) Committee', href: 'committee-internal-quality-assurance' },
  ],
  naacRecords: [
    { title: 'NAAC Cycle-2 Certificate', href: 'documents/About/IQAC/nacc-record/NAAC Cycle 2 - Certificate.pdf' },
    { title: 'NAAC Assessment Outcome Document (AOD)', href: 'documents/About/IQAC/nacc-record/Assessment Outcome Document (AOD).pdf' },
    { title: 'NAAC SSR Cycle-2', href: 'documents/About/IQAC/nacc-record/KIT_MHCOGN20462_Final SSR.pdf' },
    { title: 'KIT NAAC Certificate', href: 'documents/About/IQAC/nacc-record/nacc-certificate-2021.pdf' },
    { title: 'KIT NAAC Quality Profile', href: 'documents/About/IQAC/nacc-record/kit-quality-profilenacc-certificate.JPG' },
    { title: 'NAAC IIQA Undertaking 2022', href: 'documents/About/iqac/nacc-record/KITCOEK Undertaking IIQA 2022.pdf' },
    { title: 'NAAC Peer team report', href: 'documents/About/IQAC/nacc-record/nacc-peer-report.pdf' },
    { title: 'NAAC Self Study Report Cycle-1 as on 15th Nov 2014', href: 'documents/About/IQAC/nacc-record/kit-nacc-ssr-cycle.pdf' },
    { title: 'NAAC: Central Committee', href: 'documents/About/IQAC/nacc-record/naac-central-commitee.pdf' },
    { title: 'Student Satisfaction Survey for year 2020-21', href: 'documents/About/iqac/nacc-record/student-satisfaction-survey-kit.pdf' },
    { title: 'Student Satisfaction Survey 2021-22', href: 'documents/About/iqac/nacc-record/SSS_21-22.pdf' },
    { title: 'Feedback analysis and action taken report', href: 'documents/About/iqac/nacc-record/Feedback analysis and action taken report.pdf' },
  ],
};

async function seed(strapi) {
  seedLog(strapi, 'Seeding About (all sections)...');

  const about = await strapi.db.query(UID).findOne({
    populate: ['founderstrustees', 'chairmanMessage', 'directorMessage', 'boardOfDirectors', 'governingCouncil', 'collegeAdministration', 'officeAdministration', 'milestones', 'iqac'],
  });

  if (!about) {
    await strapi.documents(UID).create({
      data: {
        title: 'About',
        founderstrustees: FOUNDERS_TRUSTEES,
        chairmanMessage: CHAIRMAN_MESSAGE,
        directorMessage: DIRECTOR_MESSAGE,
        boardOfDirectors: BOARD_OF_DIRECTORS,
        governingCouncil: GOVERNING_COUNCIL,
        collegeAdministration: COLLEGE_ADMINISTRATION,
        officeAdministration: OFFICE_ADMINISTRATION,
        milestones: MILESTONES,
        iqac: IQAC_DATA,
      },
    });
    seedLog(strapi, '  Created About with all data.');
    return;
  }

  const updateData = {};

  if (!about.founderstrustees || about.founderstrustees.length === 0) {
    updateData.founderstrustees = FOUNDERS_TRUSTEES;
    seedLog(strapi, '  Adding Founder Trustees...');
  } else {
    seedLog(strapi, `  Skipped: Founder Trustees already exist (${about.founderstrustees.length} entries).`);
  }

  if (!about.chairmanMessage || !about.chairmanMessage.personName) {
    updateData.chairmanMessage = CHAIRMAN_MESSAGE;
    seedLog(strapi, '  Adding Chairman Message...');
  } else {
    seedLog(strapi, `  Skipped: Chairman Message already exists (${about.chairmanMessage.personName}).`);
  }

  if (!about.directorMessage || !about.directorMessage.personName) {
    updateData.directorMessage = DIRECTOR_MESSAGE;
    seedLog(strapi, '  Adding Director Message...');
  } else {
    seedLog(strapi, `  Skipped: Director Message already exists (${about.directorMessage.personName}).`);
  }

  if (!about.boardOfDirectors || about.boardOfDirectors.length === 0) {
    updateData.boardOfDirectors = BOARD_OF_DIRECTORS;
    seedLog(strapi, '  Adding Board of Directors...');
  } else {
    seedLog(strapi, `  Skipped: Board of Directors already exist (${about.boardOfDirectors.length} entries).`);
  }

  if (!about.governingCouncil || about.governingCouncil.length === 0) {
    updateData.governingCouncil = GOVERNING_COUNCIL;
    seedLog(strapi, '  Adding Governing Council...');
  } else {
    seedLog(strapi, `  Skipped: Governing Council already exist (${about.governingCouncil.length} entries).`);
  }

  if (!about.collegeAdministration || about.collegeAdministration.length === 0) {
    updateData.collegeAdministration = COLLEGE_ADMINISTRATION;
    seedLog(strapi, '  Adding College Administration...');
  } else {
    seedLog(strapi, `  Skipped: College Administration already exist (${about.collegeAdministration.length} entries).`);
  }

  if (!about.officeAdministration || about.officeAdministration.length === 0) {
    updateData.officeAdministration = OFFICE_ADMINISTRATION;
    seedLog(strapi, '  Adding Office Administration...');
  } else {
    seedLog(strapi, `  Skipped: Office Administration already exist (${about.officeAdministration.length} entries).`);
  }

  if (!about.milestones || about.milestones.length === 0) {
    updateData.milestones = MILESTONES;
    seedLog(strapi, '  Adding Milestones...');
  } else {
    seedLog(strapi, `  Skipped: Milestones already exist (${about.milestones.length} entries).`);
  }

  if (!about.iqac || !about.iqac.introductionText) {
    updateData.iqac = IQAC_DATA;
    seedLog(strapi, '  Adding IQAC...');
  } else {
    seedLog(strapi, '  Skipped: IQAC already exists.');
  }

  if (Object.keys(updateData).length === 0) {
    seedLog(strapi, '  All About data already present. Nothing to update.');
    return;
  }

  await strapi.documents(UID).update({
    documentId: about.documentId,
    data: updateData,
  });

  seedLog(strapi, '  About updated successfully.');
}

module.exports = { seed, FOUNDERS_TRUSTEES, CHAIRMAN_MESSAGE, DIRECTOR_MESSAGE, BOARD_OF_DIRECTORS, GOVERNING_COUNCIL, COLLEGE_ADMINISTRATION, OFFICE_ADMINISTRATION, MILESTONES, IQAC_DATA };
