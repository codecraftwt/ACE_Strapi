//@ts-nocheck

'use strict';

const UID = 'api::news-event.news-event';
const { upsertSingleton, seedLog } = require('../seed-utils');

const EVENTS = [
  {
    date: '2026-07-03',
    title: '5 Days FDP on AI Conclave',
    description: 'AI Conclave: Generative & Agentic AI, Future Trends',
  },
  {
    date: '2026-07-01',
    title: 'Alumni Talk Series',
    description: '15th Meeting of the Monthly Alumni Talk Series',
  },
  {
    date: '2026-06-07',
    title: 'अभियांत्रिकी प्रवेशाबाबत केआयटीचा रविवारी मोफत मार्गदर्शन कार्यक्रम',
    description: 'अभियांत्रिकी प्रवेशाबाबत केआयटीचा रविवारी मोफत मार्गदर्शन कार्यक्रम',
  },
  {
    date: '2026-06-03',
    title: 'Monthly Alumni Talk Series',
    description: '14th session of the KITAA CONNECT – Monthly Alumni Talk Series',
  },
  {
    date: '2026-05-09',
    title: 'KIT Alumni Meet 2026 @Delhi',
    description: 'KIT Alumni Meet 2026 On Saturday, 09th May, 2026 Time :- 05:00 pm onwards Venue:- Delhi',
  },
  {
    date: '2026-05-02',
    title: '2-Day Interdisciplinary Education Summit',
    description: '2-Day Interdisciplinary Education Summit',
  },
];

async function seed(strapi) {
  seedLog(strapi, 'Seeding Events...');

  const result = await upsertSingleton(strapi, UID, { events: EVENTS });
  seedLog(strapi, `  ${result.action}: ${EVENTS.length} events`);

  seedLog(strapi, 'Events seeding complete.');
}

module.exports = { seed, EVENTS };
