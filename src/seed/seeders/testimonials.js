//@ts-nocheck

'use strict';

const UID = 'api::testimonial.testimonial';
const { createIfMissing, findOne, seedLog } = require('../seed-utils');

/**
 * Testimonial seed data.
 */
const TESTIMONIALS = [
  // Example:
  // {
  //   studentName: 'Amit Kumar',
  //   placementCompany: 'Infosys',
  //   Stars: 5,
  //   departmentName: 'Information Technology',
  // },
];

async function seed(strapi) {
  seedLog(strapi, 'Seeding Testimonials...');

  for (const testimonial of TESTIMONIALS) {
    const { departmentName, ...testimonialData } = testimonial;

    const result = await createIfMissing(strapi, UID, 'studentName', testimonialData);
    if (result.action === 'skipped') {
      seedLog(strapi, `  Skipped (exists): ${testimonial.studentName}`);
      continue;
    }

    if (departmentName) {
      const dept = await findOne(strapi, 'api::department.department', {
        deptName: departmentName,
      });
      if (dept) {
        await strapi.documents(UID).update({
          documentId: result.created.documentId,
          data: {
            department: {
              connect: [{ documentId: dept.documentId }],
            },
          },
        });
      }
    }

    seedLog(strapi, `  Created: ${testimonial.studentName}`);
  }

  seedLog(strapi, 'Testimonials seeding complete.');
}

module.exports = { seed, TESTIMONIALS };
