//@ts-nocheck

'use strict';

const UID = 'api::academic.academic';
const { seedLog } = require('../seed-utils');

const ABOUT_DESCRIPTION = `Looking to join a club in college? Read on to learn about the different types and benefits of clubs in college.

Want to amplify your college experience? Consider joining a student club!

Joining different clubs in college can be the most rewarding experience in your undergraduate journey. It allows you to meet like-minded people, pursue various interests, build long-lasting connections with mentors and peers, and develop a strong skill set that can help you in your post-college career.

Curious to learn more about what kinds of student clubs you can join while in college? Read on to learn all about them and how they can benefit you during your college experience and beyond.`;

const CLUBS_2023_24 = [
  { serialNo: 1, clubName: 'Indian Society for Technical Education (ISTE) student chapter', documentPath: '/documents/studentClubs/ISTE/ISTE club events in AY 2023-24.pdf' },
  { serialNo: 2, clubName: 'Entrepreneurship Cell (E-Cell KITCoEK)', documentPath: '/documents/studentClubs/E-Cell KITCoEK/E-Cell.pdf' },
  { serialNo: 3, clubName: 'Team Mavericks', documentPath: '/documents/studentClubs/Mavericks_/Mavericks.pdf' },
  { serialNo: 4, clubName: 'Student Developers Club (SDC)', documentPath: '/documents/studentClubs/Students Developers Club (SDC)/StudentDeveloperClub_Report.pdf' },
  { serialNo: 5, clubName: 'Amateur Writers Club', documentPath: '/documents/studentClubs/Amateur Writers club/Amateur Writers Club.pdf' },
  { serialNo: 6, clubName: 'Ek Bharat Shreshtha Bharat', documentPath: '/documents/studentClubs/Ek Bharat Shreshtha Bharat/Report on Dandiya Garaba.pdf' },
  { serialNo: 7, clubName: 'AICTE STUDENT LEARNING ASSESSMENT (SLA-PARAKH)', documentPath: '/documents/studentClubs/AICTE SLA _ PARAKH/SLA -PARAKH AY 2023-24 Report.pdf' },
  { serialNo: 8, clubName: "The art club 'AURA'", documentPath: '/documents/studentClubs/AURA/Aura.pdf' },
  { serialNo: 9, clubName: 'Shourya', documentPath: '/documents/studentClubs/Shourya_/shourya web site.pdf' },
  { serialNo: 10, clubName: 'Women Development and Gender Equality cell', documentPath: '/documents/studentClubs/Women Development and Gender Equality Cell/About Women development club.pdf' },
  { serialNo: 11, clubName: 'Rotaract Club Of KIT SUNSHINE', documentPath: '/documents/studentClubs/Rotract Club KIT Sunshine_/Rotaract Club REPORT 23-24.pdf' },
  { serialNo: 12, clubName: 'Society Of Women Engineers', documentPath: '/documents/studentClubs/Society Of Women Engineers/SWE News_Even Semester.pdf' },
  { serialNo: 13, clubName: 'Walk With World', documentPath: '/documents/studentClubs/Walk With World (WWW)/Walk With World.pdf' },
  { serialNo: 14, clubName: 'National Cadet Corps (NCC)', documentPath: '/kit-ncc-activities' },
  { serialNo: 15, clubName: 'National Service Scheme (NSS)', documentPath: '/kit-nss-activities' },
];

const CLUBS_2024_25 = [
  { serialNo: 1, clubName: 'Indian Society for Technical Education (ISTE) student chapter', documentPath: '/documents/studentClubs/ISTE/ISTE club events in AY 2024-25.pdf' },
  { serialNo: 2, clubName: 'Entrepreneurship Cell (E-Cell KITCoEK)', documentPath: '/documents/studentClubs/E-Cell KITCoEK/E-Cell.pdf' },
  { serialNo: 3, clubName: 'Team Mavericks', documentPath: '/documents/studentClubs/Mavericks_/Mavericks.pdf' },
  { serialNo: 4, clubName: 'Student Developers Club (SDC)', documentPath: '/documents/studentClubs/Students Developers Club (SDC)/StudentDeveloperClub_Report.pdf' },
  { serialNo: 5, clubName: 'Amateur Writers Club', documentPath: '/documents/studentClubs/Amateur Writers club/Amateur Writers Club.pdf' },
  { serialNo: 6, clubName: 'Ek Bharat Shreshtha Bharat', documentPath: '/documents/studentClubs/Ek Bharat Shreshtha Bharat/Report on Dandiya Garaba.pdf' },
  { serialNo: 7, clubName: 'AICTE STUDENT LEARNING ASSESSMENT (SLA-PARAKH)', documentPath: '/documents/studentClubs/AICTE SLA _ PARAKH/SLA -PARAKH AY 2024-25 Report.pdf' },
  { serialNo: 8, clubName: "The art club 'AURA'", documentPath: '/documents/studentClubs/AURA/Aura.pdf' },
  { serialNo: 9, clubName: 'Shourya', documentPath: '/documents/studentClubs/Shourya_/shourya web site.pdf' },
  { serialNo: 10, clubName: 'Women Development and Gender Equality cell', documentPath: '/documents/studentClubs/Women Development and Gender Equality Cell/About Women development club.pdf' },
  { serialNo: 11, clubName: 'Rotaract Club Of KIT SUNSHINE', documentPath: '/documents/studentClubs/Rotract Club KIT Sunshine_/Rotaract Club REPORT 24-25.pdf' },
  { serialNo: 12, clubName: 'Society Of Women Engineers', documentPath: '/documents/studentClubs/Society Of Women Engineers/SWE News_Even Semester.pdf' },
  { serialNo: 13, clubName: 'Walk With World', documentPath: '/documents/studentClubs/Walk With World (WWW)/Walk With World.pdf' },
  { serialNo: 14, clubName: 'National Cadet Corps (NCC)', documentPath: '/kit-ncc-activities' },
  { serialNo: 15, clubName: 'National Service Scheme (NSS)', documentPath: '/kit-nss-activities' },
];

const CLUBS_2025_26 = [
  { serialNo: 1, clubName: 'Indian Society for Technical Education (ISTE) student chapter', documentPath: '/documents/studentClubs/ISTE/ISTE club events in AY 2025-26.pdf' },
  { serialNo: 2, clubName: 'Entrepreneurship Cell (E-Cell KITCoEK)', documentPath: '/documents/studentClubs/E-Cell KITCoEK/E-Cell.pdf' },
  { serialNo: 3, clubName: 'Team Mavericks', documentPath: '/documents/studentClubs/Mavericks_/Mavericks.pdf' },
  { serialNo: 4, clubName: 'Student Developers Club (SDC)', documentPath: '/documents/studentClubs/Students Developers Club (SDC)/StudentDeveloperClub_Report.pdf' },
  { serialNo: 5, clubName: 'Amateur Writers Club', documentPath: '/documents/studentClubs/Amateur Writers club/Amateur Writers Club.pdf' },
  { serialNo: 6, clubName: 'Ek Bharat Shreshtha Bharat', documentPath: '/documents/studentClubs/Ek Bharat Shreshtha Bharat/Report on Dandiya Garaba.pdf' },
  { serialNo: 7, clubName: 'AICTE STUDENT LEARNING ASSESSMENT (SLA-PARAKH)', documentPath: '/documents/studentClubs/AICTE SLA _ PARAKH/SLA -PARAKH AY 2025-26 Report.pdf' },
  { serialNo: 8, clubName: "The art club 'AURA'", documentPath: '/documents/studentClubs/AURA/Aura.pdf' },
  { serialNo: 9, clubName: 'Shourya', documentPath: '/documents/studentClubs/Shourya_/shourya web site.pdf' },
  { serialNo: 10, clubName: 'Women Development and Gender Equality cell', documentPath: '/documents/studentClubs/Women Development and Gender Equality Cell/About Women development club.pdf' },
  { serialNo: 11, clubName: 'Rotaract Club Of KIT SUNSHINE', documentPath: '/documents/studentClubs/Rotract Club KIT Sunshine_/Rotaract Club REPORT 25-26.pdf' },
  { serialNo: 12, clubName: 'Society Of Women Engineers', documentPath: '/documents/studentClubs/Society Of Women Engineers/SWE News_Even Semester.pdf' },
  { serialNo: 13, clubName: 'Walk With World', documentPath: '/documents/studentClubs/Walk With World (WWW)/Walk With World.pdf' },
  { serialNo: 14, clubName: 'National Cadet Corps (NCC)', documentPath: '/kit-ncc-activities' },
  { serialNo: 15, clubName: 'National Service Scheme (NSS)', documentPath: '/kit-nss-activities' },
];

const CLUB_YEAR_DATA = [
  { academicYear: '2023-24', clubs: CLUBS_2023_24 },
  { academicYear: '2024-25', clubs: CLUBS_2024_25 },
  { academicYear: '2025-26', clubs: CLUBS_2025_26 },
];

const STUDENT_CLUB_DATA = {
  aboutDescription: ABOUT_DESCRIPTION,
  yearGroups: CLUB_YEAR_DATA,
};

async function seed(strapi) {
  seedLog(strapi, 'Seeding Student Club (Academic)...');

  const academic = await strapi.db.query(UID).findOne({
    populate: {
      studentClub: {
        populate: {
          yearGroups: {
            populate: {
              clubs: true,
            },
          },
        },
      },
    },
  });

  if (!academic) {
    seedLog(strapi, '  Academic record not found. Creating with Student Club data...');
    await strapi.documents(UID).create({
      data: {
        studentClub: STUDENT_CLUB_DATA,
      },
    });
    seedLog(strapi, '  Student Club seeded (new Academic record).');
    return;
  }

  if (academic.studentClub && academic.studentClub.aboutDescription && academic.studentClub.yearGroups && academic.studentClub.yearGroups.length > 0) {
    seedLog(strapi, '  Student Club already present. Skipping.');
    return;
  }

  await strapi.documents(UID).update({
    documentId: academic.documentId,
    data: {
      studentClub: STUDENT_CLUB_DATA,
    },
  });

  seedLog(strapi, '  Student Club seeded successfully.');
}

module.exports = { seed, STUDENT_CLUB_DATA, CLUB_YEAR_DATA, CLUBS_2023_24, CLUBS_2024_25, CLUBS_2025_26 };
