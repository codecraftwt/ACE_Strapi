//@ts-nocheck

'use strict';

const UID = 'api::institutional-document.institutional-document';
const { createIfMissing, seedLog } = require('../seed-utils');

/**
 * Institutional Document seed data.
 * Categories: NIRF, IPR, Paper Publication
 * Each entry: { title, category, year, sortOrder }
 */
const DOCUMENTS = [
  // ── NIRF 2026 ──
  {
    title: 'KIT NIRF Engineering 2026',
    category: 'NIRF',
    year: '2026',
    sortOrder: 1,
  },
  {
    title: 'KIT NIRF Innovation 2026',
    category: 'NIRF',
    year: '2026',
    sortOrder: 2,
  },
  {
    title: 'KIT NIRF Overall 2026',
    category: 'NIRF',
    year: '2026',
    sortOrder: 3,
  },

  // ── NIRF 2025 ──
  {
    title: 'NIRF 2025 Engineering',
    category: 'NIRF',
    year: '2025',
    sortOrder: 4,
  },
  {
    title: 'NIRF 2025 Innovation',
    category: 'NIRF',
    year: '2025',
    sortOrder: 5,
  },
  {
    title: 'NIRF 2025 Overall',
    category: 'NIRF',
    year: '2025',
    sortOrder: 6,
  },

  // ── NIRF 2024 ──
  {
    title: 'NIRF 2024 Engineering',
    category: 'NIRF',
    year: '2024',
    sortOrder: 7,
  },
  {
    title: 'NIRF 2024 Innovation',
    category: 'NIRF',
    year: '2024',
    sortOrder: 8,
  },
  {
    title: 'NIRF 2024 Overall',
    category: 'NIRF',
    year: '2024',
    sortOrder: 9,
  },

  // ── IPR 2025 ──
  {
    title: 'Intellectual Property Rights 2025',
    category: 'IPR',
    year: '2025',
    sortOrder: 10,
  },

  // ── Paper Publication ──
  {
    title: 'Paper Publications 2025-26',
    category: 'Paper Publication',
    year: '2025-26',
    sortOrder: 11,
  },
  {
    title: 'Paper Publications 2024-25',
    category: 'Paper Publication',
    year: '2024-25',
    sortOrder: 12,
  },
];

async function seed(strapi) {
  seedLog(strapi, 'Seeding Institutional Documents...');

  for (const doc of DOCUMENTS) {
    const result = await createIfMissing(strapi, UID, 'title', doc);
    if (result.action === 'created') {
      seedLog(strapi, `  Created: ${doc.title} (${doc.category} ${doc.year})`);
    } else {
      seedLog(strapi, `  Skipped (exists): ${doc.title}`);
    }
  }

  seedLog(strapi, 'Institutional Documents seeding complete.');
}

module.exports = { seed, DOCUMENTS };
