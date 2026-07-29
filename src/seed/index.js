//@ts-nocheck

'use strict';

const { seedLog } = require('./seed-utils');

/*
 * Import all seeders.
 * Order matters — seeders that depend on
 * other content types must come after them.
 */
// const departments = require('./seeders/departments');
// const courses = require('./seeders/courses');
// const faculty = require('./seeders/faculty');
// const globalConfig = require('./seeders/global');
// const contact = require('./seeders/contact');
// const statistics = require('./seeders/statistics');
// const navbar = require('./seeders/navbar');
// const home = require('./seeders/home');
// const notices = require('./seeders/notices');
// const placements = require('./seeders/placements');
// const testimonials = require('./seeders/testimonials');
// const cutoffs = require('./seeders/cutoffs');
// const studentsAdmission = require('./seeders/students-admission');
// const adminRoles = require('./seeders/admin-roles');
// const adminUsers = require('./seeders/admin-users');
// const adminMappings = require('./seeders/admin-mappings');
// const permissions = require('./seeders/permissions');
// const about = require('./seeders/about');
// const seedAboutAccreditation = require('./seeders/seed-about-accreditation');
// const seedAdmission = require('./seeders/seed-admission');
// const seedPostGraduate = require('./seeders/seed-post-graduate');
// const seedPhdProgram = require('./seeders/seed-phd-program');
// const seedVocationalCourses = require('./seeders/seed-vocational-courses');
// const seedScholarship = require('./seeders/seed-scholarship');
// const seedStudentClub = require('./seeders/seed-student-club');
// const seedExamCellTimetable = require('./seeders/seed-exam-cell-timetable');
// const seedExamCellNotice = require('./seeders/seed-exam-cell-notice');
// const seedExamCellResults = require('./seeders/seed-exam-cell-results');
// const seedExamCellPaperSetting = require('./seeders/seed-exam-cell-paper-setting');
// const seedExamCellFacultyRemuneration = require('./seeders/seed-exam-cell-faculty-remuneration');
// const seedPlacementBranchWise = require('./seeders/seed-placement-branch-wise');
const seedEvents = require('./seeders/seed-events');
const seedNews = require('./seeders/seed-news');


/**
 * Run all seeders in dependency order.
 *
 * Execution order:
 *   1. Departments          (no deps)
 *   2. Courses              (depends on Departments)
 *   3. Faculty              (depends on Departments)
 *   4. Global               (singleton, no deps)
 *   5. Contact              (singleton, no deps)
 *   6. Statistics           (singleton, no deps)
 *   7. Navbar               (singleton, no deps)
 *   8. Home                 (singleton, no deps)
 *   9. Notices              (depends on Departments)
 *  10. Placements           (depends on Departments)
 *  11. Testimonials         (depends on Departments)
 *  12. Cutoffs              (depends on Departments)
 *  13. Students Admission   (depends on Departments, Courses)
 *  14. Admin Roles          (no deps)
 *  15. Admin Users          (depends on Admin Roles)
 *  16. Admin-Dept Mappings  (depends on Admin Users, Departments)
 *  17. Public Permissions   (no deps)
 *  18. About                (no deps)
 */
async function runSeeders(strapi) {
  const start = Date.now();

  seedLog(strapi, '========== SEEDING STARTED ==========');

  // await departments.seed(strapi);
  // await courses.seed(strapi);
  // await faculty.seed(strapi);
  // await globalConfig.seed(strapi);
  // await contact.seed(strapi);
  // await statistics.seed(strapi);
  // await navbar.seed(strapi);
  // await home.seed(strapi);
  // await notices.seed(strapi);
  // await placements.seed(strapi);
  // await testimonials.seed(strapi);
  // await cutoffs.seed(strapi);
  // await studentsAdmission.seed(strapi);
  // await adminRoles.seed(strapi);
  // await adminUsers.seed(strapi);
  // await adminMappings.seed(strapi);
  // await permissions.seed(strapi);
  // await about.seed(strapi);
  // await seedAboutAccreditation.seed(strapi);
  // await seedAdmission.seed(strapi);
  // await seedPostGraduate.seed(strapi);
  // await seedPhdProgram.seed(strapi);
  // await seedVocationalCourses.seed(strapi);
  // await seedScholarship.seed(strapi);
  // await seedStudentClub.seed(strapi);
  // await seedExamCellTimetable.seed(strapi);
  // await seedExamCellNotice.seed(strapi);
  // await seedExamCellResults.seed(strapi);
  // await seedExamCellPaperSetting.seed(strapi);
  // await seedExamCellFacultyRemuneration.seed(strapi);
  // await seedPlacementBranchWise.seed(strapi);
  await seedEvents.seed(strapi);
  await seedNews.seed(strapi);

  const elapsed = ((Date.now() - start) / 1000).toFixed(2);
  seedLog(strapi, `========== SEEDING COMPLETE (${elapsed}s) ==========`);
}

module.exports = { runSeeders };
