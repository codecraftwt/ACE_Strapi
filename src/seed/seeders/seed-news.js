//@ts-nocheck

'use strict';

const UID = 'api::news-event.news-event';
const { upsertSingleton, seedLog } = require('../seed-utils');
const { EVENTS } = require('./seed-events');

const NEWS = [
  {
    date: '2026-07-13',
    title: 'केआयटीच्या ६५२ विद्यार्थ्यांची निवड',
    description: 'सर्वोच्च पॅकेज २७.५० लाखांचे; १५७ कंपन्यांकडून \'कॅम्पस\'',
  },
  {
    date: '2026-06-07',
    title: 'केआयटीतर्फे अभियांत्रिकी क्षेत्रातील अमर्याद संधी आणि प्रवेश प्रक्रियेबाबत तज्ज्ञांचे मार्गदर्शन',
    description: 'केआयटीतर्फे अभियांत्रिकी क्षेत्रातील अमर्याद संधी आणि प्रवेश प्रक्रियेबाबत तज्ज्ञांचे मार्गदर्शन',
  },
  {
    date: '2026-04-22',
    title: 'केआयटी\'मध्ये हवाई दलातर्फे मार्गदर्शन',
    description: 'केआयटी (KIT) अभियांत्रिकी महाविद्यालयात भारतीय हवाई दलातर्फे विशेष मार्गदर्शन कार्यक्रम व प्रदर्शनाचे आयोजन करण्यात आले होते.',
  },
  {
    date: '2026-04-10',
    title: 'केआयटीच्या आदित्य साळुंखेस २७ लाख ५० हजाराचे पॅकेज',
    description: 'केआयटीच्या आदित्य साळुंखेस २७ लाख ५० हजाराचे पॅकेज',
  },
  {
    date: '2026-03-26',
    title: 'कै.शिवाजीराव देसाई व्याख्यानमाला संपन्न',
    description: 'केआयटी मध्ये कै.शिवाजीराव देसाई व्याख्यानमाला संपन्न',
  },
  {
    date: '2026-03-12',
    title: 'राज्यस्तरीय प्रोजेक्ट स्पर्धेमध्ये केआयटी प्रथम',
    description: 'डिपेक्स या राज्यस्तरीय प्रोजेक्ट स्पर्धेमध्ये केआयटी प्रथम',
  },
];

async function seed(strapi) {
  seedLog(strapi, 'Seeding News...');

  const result = await upsertSingleton(strapi, UID, {
    events: EVENTS,
    news: NEWS,
  });
  seedLog(strapi, `  ${result.action}: ${EVENTS.length} events, ${NEWS.length} news`);

  seedLog(strapi, 'News seeding complete.');
}

module.exports = { seed, NEWS };
