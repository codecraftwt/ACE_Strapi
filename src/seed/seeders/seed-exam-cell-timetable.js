//@ts-nocheck

'use strict';

const UID = 'api::exam-cell.exam-cell';
const { seedLog, findOne } = require('../seed-utils');

const TIMETABLE_ENTRIES = [
  {
    title: 'REVISED FINAL TIME TABLE OF ESE EXAMINATION (A.Y-2023-24) - DECEMBER - 2023',
    description: 'REVISED FINAL TIME TABLE OF ESE EXAMINATION (A.Y-2023-24) - DECEMBER - 2023',
    date: '2023-11-24',
    documentUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/exam/2023-11-25T12%3A18%3A29.924Z-FINAL%20TIME%20TABLE%20ESE%20EXAM%20DECEMBER%20%202023%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2024-11-2023.pdf'
  },
  {
    title: 'FINAL TIME TABLE OF ESE EXAMINATION (A.Y-2023-24) - DECEMBER - 2023',
    description: 'FINAL TIME TABLE OF ESE EXAMINATION (A.Y-2023-24) - DECEMBER - 2023',
    date: '2023-11-22',
    documentUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/exam/2023-11-25T12%3A19%3A04.365Z-FINAL%20TIME%20TABLE%20ESE%20EXAM%20DECEMBER%20%202023%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2021-11-2023.pdf'
  },
  {
    title: 'DRAFT TIME TABLE OF ESE EXAMINATION - DECEMBER - 2023',
    description: 'DRAFT TIME TABLE OF ESE EXAMINATION - DECEMBER - 2023',
    date: '2023-11-07',
    documentUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/exam/2023-11-25T12%3A19%3A22.800Z-ESE%20EXAM%20DRAFT%20TIME%20TABLE%20DECEMBER%20%202023_05-11-2023%20%281%29.pdf'
  },
  {
    title: 'FINAL TIME TABLE OF MAKEUP EXAMINATION (A.Y-2022-23) - OCTOBER - 2023',
    description: 'FINAL TIME TABLE OF MAKEUP EXAMINATION (A.Y-2022-23) - OCTOBER - 2023',
    date: '2023-10-21',
    documentUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/exam/2023-11-25T12%3A22%3A26.238Z-Final%20Time%20Table%20Makeup%20Exam%20%20October%202023%20F-Y-%20B-Tech%20And%20F-Y-%20M-%20Tech%20Semi%20I%20_SEM%20II%20A-Y-%202022-23%20%20%20%20%20%20Dt-22-10-2023.pdf'
  },
  {
    title: 'DRAFT TIME TABLE OF MAKEUP EXAMINATION (A.Y-2022-23) - OCTOBER - 2023',
    description: 'DRAFT TIME TABLE OF MAKEUP EXAMINATION (A.Y-2022-23) - OCTOBER - 2023',
    date: '2023-10-19',
    documentUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/exam/2023-11-25T12%3A22%3A48.295Z-Draft%20Time%20Table%20Makeup%20Exam%20October%202023%20F-Y-%20B-Tech%20And%20F-Y-%20M-%20Tech%20Semi%20I%20and%20II%20A-Y-%202022-23%20Dt-19-10-2023.pdf'
  },
  {
    title: 'FINAL TIME TABLE OF MSE EXAMINATION T.Y. B. Tech Environmental (OFFLINE MODE) -OCTOBER- 2023',
    description: 'FINAL TIME TABLE OF MSE EXAMINATION T.Y. B. Tech Environmental (OFFLINE MODE) -OCTOBER- 2023',
    date: '2023-10-12',
    documentUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/exam/2023-11-25T12%3A23%3A16.331Z-MSE%20EXAM%20TIME%20TABLE%202023-24ODD%20SEM%20-V%20ENVIORNMENT%20ENGG.pdf'
  },
  {
    title: 'FINAL TIME TABLE OF MID SEMESTER EXAMINATION F.Y. B. Tech and M. Tech (OFFLINE MODE) ODD SEM - OCTOBER 2023',
    description: 'FINAL TIME TABLE OF MID SEMESTER EXAMINATION F.Y. B. Tech and M. Tech (OFFLINE MODE) ODD SEM - OCTOBER 2023',
    date: '2023-10-11',
    documentUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/exam/2023-11-25T12%3A23%3A37.228Z-Final%20Time%20Table%20of%20MSE%20OCTOBER%202023%20F-Y-B-Tech%20and%20%20F-Y-%20M-Tech%20ODD%20Sem%20A-Y%20%20%20%20%20%20%20%20Dt-%2011-10-2023.pdf'
  },
  {
    title: 'DRAFT TIME TABLE OF MID SEMESTER EXAMINATION F.Y. B. Tech and M. Tech (OFFLINE MODE) ODD SEM - OCTOBER 2023',
    description: 'DRAFT TIME TABLE OF MID SEMESTER EXAMINATION F.Y. B. Tech and M. Tech (OFFLINE MODE) ODD SEM - OCTOBER 2023',
    date: '2023-09-27',
    documentUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/exam/2023-11-25T12%3A24%3A47.658Z-Draft%20Time%20Table%20of%20MSE%20OCTOBER%202023%20F-Y-B-Tech%20and%20%20F-Y-%20M-Tech%20ODD%20Sem%20A-Y-%202023-24%20as%20on%2026-09.pdf'
  },
  {
    title: 'FINAL TIME TABLE OF MID SEMESTER EXAMINATION (OFFLINE MODE) ODD SEM - OCTOBER 2023',
    description: 'FINAL TIME TABLE OF MID SEMESTER EXAMINATION (OFFLINE MODE) ODD SEM - OCTOBER 2023',
    date: '2023-09-26',
    documentUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/exam/2023-11-25T12%3A25%3A07.399Z-Final%20TIME%20TABLE%20of%20MID%20SEM-%20%20EXAM--%20October%202023%20%20%20%20%2026-09.pdf'
  },
  {
    title: 'DRAFT TIME TABLE OF MID SEMESTER EXAMINATION (OFFLINE MODE) - OCTOBER 2023',
    description: 'DRAFT TIME TABLE OF MID SEMESTER EXAMINATION (OFFLINE MODE) - OCTOBER 2023\n\n',
    date: '2023-09-17',
    documentUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/exam/2023-11-25T12%3A25%3A30.023Z-Draft%20TIME%20TABLE%20of%20MID%20SEM-%20%20EXAM--%20OCTOBER%20-2023%20%281%29.pdf'
  },
  {
    title: 'DRAFT TIME TABLE OF MID SEMESTER EXAMINATION (OFFLINE MODE) - OCTOBER 2023',
    description: 'DRAFT TIME TABLE OF MID SEMESTER EXAMINATION (OFFLINE MODE) - OCTOBER 2023',
    date: '2023-09-03',
    documentUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/exam/2023-11-25T12%3A26%3A26.767Z-Draft%20TIME%20TABLE%20of%20MID%20SEM.%20%20EXAM.-%20OCTOBER%20-2023.pdf'
  },
  {
    title: 'Hackathon Students: REVISED FINAL TIME TABLE OF ESE EXAMINATION (A.Y-2023-24) - DECEMBER - 2023 ',
    description: 'Hackathon Students: REVISED FINAL TIME TABLE OF ESE EXAMINATION (A.Y-2023-24) - DECEMBER - 2023 ',
    date: '2024-01-02',
    documentUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/exam/2024-01-03T03%3A36%3A25.582Z-HACKATHON%20STUDENTS%20FINAL%20TIME%20TABLE%20ESE%20EXAM%20JANUARY%20%202024%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2012.12.23.pdf'
  },
  {
    title: 'REVISED FINAL TIME TABLE OF ESE EXAMINATION (A.Y-2023-24) - DECEMBER - 2023 E',
    description: 'REVISED FINAL TIME TABLE OF ESE EXAMINATION (A.Y-2023-24) - DECEMBER - 2023 E',
    date: '2024-01-03',
    documentUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/exam/2024-01-03T03%3A37%3A32.472Z-FINAL%20TIME%20TABLE%20ESE%20EXAM%20DECEMBER%20%202023%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2007.12.2023%20%281%29.pdf'
  },
  {
    title: 'Final Time Table ESE Exam First Year B.TECH and S.Y. B. TECH A. Y. 2022-23 FOR SPORTS STUDENTS',
    description: 'Final Time Table ESE Exam First Year B.TECH and S.Y. B. TECH A. Y. 2022-23 FOR SPORTS STUDENTS',
    date: '2024-01-07',
    documentUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/exam/2024-01-09T05%3A36%3A46.714Z-FINAL%20TIME%20TABLE%20ESE%20EXAM%20DECEMBER%20%202023%20SPORTS%20STUDENT%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2007.01.2024.pdf'
  },
  {
    title: 'Revised Final Time Table ESE Exam First Year B.TECH and S.Y. B. TECH A. Y. 2022-23 FOR SPORTS STUDENTS',
    description: 'Revised Final Time Table ESE Exam First Year B.TECH and S.Y. B. TECH A. Y. 2022-23 FOR SPORTS STUDENTS',
    date: '2024-01-09',
    documentUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/exam/2024-01-11T04%3A38%3A14.749Z-REVISED%20FINAL%20TIME%20TABLE%20ESE%20EXAM%20DECEMBER%20%202023%20SPORTS%20STUDENT%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2009.01.pdf'
  },
  {
    title: 'FINAL TIME TABLE OF RE-END SEMISTER EXAMINATION (OFFLINE MODE) -FEBRUARY- 2024 FOR SPORTS AND NCC STUDENTS',
    description: 'FINAL TIME TABLE OF RE-END SEMESTER EXAMINATION (OFFLINE MODE) -FEBRUARY- 2024 FOR SPORTS AND NCC STUDENTS',
    date: '2024-02-06',
    documentUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/exam/2024-02-06T06%3A00%3A28.050Z-Final%20Time%20Table%20Feb%202024%20ESE%20SPORTS%20%26%20NCC%20%20Exam%20S.Y.%20B.%20Tech%20to%20Final%20Year%20A.Y.%202023-2024.pdf'
  },
  {
    title: 'DRAFT TIME TABLE OF MAKEUP EXAMINATION FEBRUARY 2024 A.Y. 2023-24 ODD SEM',
    description: 'DRAFT TIME TABLE OF MAKEUP EXAMINATION FEBRUARY 2024 A.Y. 2023-24 ODD SEM',
    date: '2024-02-04',
    documentUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/exam/2024-02-06T06%3A01%3A06.057Z-Draft%20Time%20Table_Makeup%20Exam%20F.Y.%20to%20Final%20Year%20B.Tech%2CM.Tech%20%2CFebruary%202024%20%2003.02.2024.pdf'
  },
  {
    title: 'FINAL TIME TABLE OF RE-ESE A. Y. 2023-24 FOR NCC STUDENTS SEM. (ODD SEMESTER)',
    description: 'FINAL TIME TABLE OF RE-ESE A. Y. 2023-24 FOR NCC STUDENTS SEM. (ODD SEMESTER)',
    date: '2024-02-09',
    documentUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/exam/2024-02-09T06%3A07%3A49.508Z-Final%20Time%20Table%20Feb%202024%20Re-%20ESE%20%20NCC%20%20Exam%20S.Y.%20B.%20Tech%20%20A.Y.%202023-2024%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%209.02.pdf'
  },
  {
    title: 'FINAL TIME TABLE OF MAKEUP EXAMINATION FEBRUARY 2024 A.Y. 2023-24 ODD SEM',
    description: 'FINAL TIME TABLE OF MAKEUP EXAMINATION FEBRUARY 2024 A.Y. 2023-24 ODD SEM',
    date: '2024-02-10',
    documentUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/exam/2024-02-13T10%3A00%3A22.851Z-Final%20Time%20Table_Makeup%20Exam%20F.Y.%20to%20Final%20Year%20B.Tech%2CM.Tech%20%2CFebruary%202024%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2009.02.2024.pdf'
  },
  {
    title: 'DRAFT TIME TABLE OF MSE EXAMINATION A.Y. 2023-24 EVEN SEM (OFFLINE MODE) -MARCH - 2024',
    description: 'DRAFT TIME TABLE OF MSE EXAMINATION',
    date: '2024-02-25',
    documentUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/exam/2024-02-25T11%3A24%3A22.136Z-Draft%20_TT_%20MSE%20Exam%20March%202024%20F.Y.%20to%20Final%20Year%20A.Y.%202023-2024%20Even%20Sem%20%20%20%20%20%20%20%20%20%20%20%2025.02.2024.pdf'
  },
  {
    title: 'Final Draft Time table of MID SEMESTER March -2024 for  F.Y. to Final Year B. Tech and F.Y. M.Tech.',
    description: ' ',
    date: '2024-03-03',
    documentUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/exam/2024-03-03T11%3A15%3A52.994Z-FINAL_Draft_TT_%20MSE%20Exam%20March%202024%20F.Y.%20to%20Final%20Year%20A.Y.%202023-2024%20Even%20Sem%20%20%20%20%20%20%20%20%20%20%20%2003.03.2024.pdf'
  },
  {
    title: 'FINAL TIME TABLE OF MSE EXAMINATION A.Y. 2023-24 EVEN SEMISTER (OFFLINE MODE) -MARCH - 2024',
    description: ' FINAL TIME TABLE OF MSE EXAMINATION A.Y. 2023-24 \n',
    date: '2024-03-07',
    documentUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/exam/2024-03-11T07%3A31%3A38.440Z-FINAL_TT_%20MSE%20Exam%20March%202024%20F.Y.%20to%20Final%20Year%20A.Y.%202023-2024%20Even%20Sem%20%20%20%20%20%20%20%20%20%20%20%2007.03.2024.pdf'
  },
  {
    title: 'FINAL TIME TABLE OF RE-MSE EXAMINATION A.Y. 2023-24 EVEN SEMISTER (OFFLINE MODE) -MARCH - 2024 FOR (HACKATHON STUDENTS)',
    description: 'FINAL TIME TABLE OF RE-MSE EXAMINATION A.Y. 2023-24 EVEN SEMISTER (OFFLINE MODE) -MARCH - 2024 FOR (HACKATHON STUDENTS)\n',
    date: '2024-04-18',
    documentUrl: 'https://kitcoek.s3.amazonaws.com/exam/2024-04-19T05%3A10%3A27.579Z-FINAL_TT_%20MSE%20Exam%20April%202024%20F.Y.%20to%20Final%20Year%20A.Y.%202023-2024%20Even%20Sem%20%20%20%20%20%20%20%20%20%2018.04.2024%20%20%28Hackthon%20Students%29.pdf'
  },
  {
    title: 'FINAL TIME TABLE OF RE-MSE EXAMINATION A.Y. 2023-24 EVEN SEMISTER (OFFLINE MODE) -MAY - 2024 FOR (CLOUD 4C COMPANY INTERNSHIP STUDENTS)',
    description: 'FINAL TIME TABLE OF RE-MSE EXAMINATION A.Y. 2023-24 EVEN SEMISTER (OFFLINE MODE) -MAY - 2024 FOR (CLOUD 4C COMPANY INTERNSHIP STUDENTS)',
    date: '2024-04-20',
    documentUrl: 'https://kitcoek.s3.amazonaws.com/exam/2024-04-20T07%3A08%3A28.679Z-FINAL_TT_%20Re-MSE%20Exam%20May%202024%20Final%20Year%20B.%20Tech%20%20A.Y.%202023-2024%20Even%20Sem%20%20%20%20%20%20%20%20%20%2019.04.2024%20%20%28CLOUD%204C%20COMPANY%20INTERNSHIP%20STUDENTS%29.pdf'
  },
  {
    title: 'DRAFT TIME TABLE OF ESE EXAMINATION A.Y. 2023-24 EVEN SEMISTER (OFFLINE MODE) -MAY- 2024',
    description: 'DRAFT TIME TABLE OF ESE EXAMINATION A.Y. 2023-24 EVEN SEMISTER (OFFLINE MODE) -MAY- 2024',
    date: '2024-04-24',
    documentUrl: 'https://kitcoek.s3.amazonaws.com/exam/2024-04-30T05%3A12%3A04.051Z-ESE%20EXAM%20TIME%20TABLE%202022-23%20Even%20SEM%202023%20%20%20%20%20%20%20%20%20%20%20%20%20%2012.04.2024.pdf'
  },
  {
    title: 'FINAL TIME TABLE OF ESE EXAMINATION A.Y. 2023-24 EVEN SEMISTER (OFFLINE MODE) -MAY- 2024',
    description: ' ',
    date: '2024-05-16',
    documentUrl: 'https://kitcoek.s3.amazonaws.com/exam/2024-05-18T16%3A53%3A50.168Z-ESE%20EXAM%20TIME%20TABLE%202022-23%20Even%20SEM%202023%20%20%20%20%20%20%20%20%20%20%20%20%20%2017.05.2024.pdf'
  },
  {
    title: 'FINAL TIME TABLE OF ESE EXAMINATION A.Y. 2023-24 EVEN SEMISTER (OFFLINE MODE) -MAY- 2024 SPORTS STUDENTS',
    description: ' ',
    date: '2024-05-24',
    documentUrl: 'https://kitcoek.s3.amazonaws.com/exam/2024-05-24T09%3A05%3A51.947Z-ESE%20EXAM%20TIME%20TABLE%202022-23%20Even%20SEM%202023%20SPORTS%20STUDENT%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2024.05.2024.pdf'
  },
  {
    title: 'DRAFT TIME TABLE OF MAKEUP EXAMINATION (OFFLINE MODE) - AUGUST- 2024',
    description: 'DRAFT TIME TABLE OF MAKEUP EXAMINATION (OFFLINE MODE) - AUGUST- 2024',
    date: '2024-08-10',
    documentUrl: 'https://kitcoek.s3.amazonaws.com/exam/2024-08-13T04%3A11%3A44.286Z-Revised%20Draft%20Time%20Table_Makeup%20Exam%20F.Y.%20to%20Final%20Year%20B.Tech%2CM.Tech%20%2C%20July%20%202024%20%20%20%20%20%20%20%20%20%20%20%20New%20%2010.08.2024%20%20%20%20%20%201.pdf'
  },
  {
    title: 'Final Time Table- Makeup Examination, Aug-2024 (Even Sem)',
    description: 'Final Time Table- Makeup Examination, Aug-2024 (Even Sem) F.Y.B.Tech To Final Year B.Tech (Even Semester)',
    date: '2024-08-19',
    documentUrl: 'https://kitcoek.s3.amazonaws.com/exam/2024-08-19T08%3A05%3A43.251Z-Final%20Time%20Table_Makeup%20Exam%20F.Y.%20to%20Final%20Year%20B.Tech%2CM.Tech%20%2C%20August%202024%20%20%20%20%20%20%20%20%20%20Dt.%2019.08.2024.pdf'
  },
  {
    title: 'DRAFT TIME TABLE OF MID SEMESTER EXAMINATION (OFFLINE MODE) - SEPTEMBER- 2024',
    description: 'DRAFT TIME TABLE OF MID SEMESTER EXAMINATION (OFFLINE MODE) - SEPTEMBER- 2024',
    date: '2024-09-11',
    documentUrl: 'https://kitcoek.s3.amazonaws.com/exam/2024-09-11T08%3A58%3A47.876Z-Draft_TT_MSE_ODD%20SEM%20EXAM_%20S.Y.%20To%20Final%20Year%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Dt.11.09.2024.pdf'
  },
  {
    title: 'FINAL TIME TABLE OF MID SEMESTER EXAMINATION (OFFLINE MODE) - SEPTEMBER- 2024',
    description: 'FINAL TIME TABLE OF MID SEMESTER EXAMINATION (OFFLINE MODE) - SEPTEMBER- 2024',
    date: '2024-09-15',
    documentUrl: 'https://kitcoek.s3.amazonaws.com/exam/2024-09-15T11%3A09%3A09.911Z-FINAL_TT_MSE_ODD%20SEM%20EXAM_%20S.Y.%20To%20Final%20Year%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Dt.15.09.2024.pdf'
  },
  {
    title: 'FINAL TIME TABLE OF MAKEUP EXAMINATION (OFFLINE MODE) - AUGUST- 2024 (FOR NCC STUDENTS)',
    description: 'FINAL TIME TABLE OF MAKEUP EXAMINATION (OFFLINE MODE) - AUGUST- 2024 (FOR NCC STUDENTS)',
    date: '2024-09-20',
    documentUrl: 'https://kitcoek.s3.amazonaws.com/exam/2024-09-21T05%3A25%3A05.606Z-Final%20Time%20Table_Makeup%20Exam%20F.Y.%20to%20Second%20Year%20B.Tech%2C%20September%202024%20%20FOR%20NCC%20STUDENT%20%20%20%20%20%20%20%20%20Dt.%2020.09.2024.pdf'
  },
  {
    title: 'REVISED FINAL TIME TABLE OF MID SEMESTER EXAMINATION (OFFLINE MODE) - SEPTEMBER- 2024',
    description: 'REVISED FINAL TIME TABLE OF MID SEMESTER EXAMINATION (OFFLINE MODE) - SEPTEMBER- 2024',
    date: '2024-09-24',
    documentUrl: 'https://kitcoek.s3.amazonaws.com/exam/2024-09-24T08%3A40%3A26.499Z-REVISED%20FINAL_TT_MSE_ODD%20SEM%20EXAM_%20S.Y.%20To%20Final%20Year%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Dt.20.09.2024.pdf'
  },
  {
    title: 'FINAL TIME TABLE OF MSE EXAMINATION (OFFLINE MODE) -SEPTEMBER- 2024',
    description: 'FINAL TIME TABLE OF MSE EXAMINATION (OFFLINE MODE) -SEPTEMBER- 2024',
    date: '2024-09-26',
    documentUrl: 'https://kitcoek.s3.amazonaws.com/exam/2024-09-27T04%3A18%3A33.035Z-FINAL_TT_MSE_ODD%20SEM%20EXAM_%20S.Y.%20To%20Final%20Year%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Dt.26.09.2024.pdf'
  },
  {
    title: 'DRAFT TIME TABLE OF MID SEMESTER EXAMINATION (OFFLINE MODE) - NOVEMBER- 2024',
    description: 'DRAFT TIME TABLE OF MID SEMESTER EXAMINATION (OFFLINE MODE) - NOVEMBER- 2024',
    date: '2024-10-04',
    documentUrl: 'https://kitcoek.s3.amazonaws.com/exam/2024-10-04T10%3A48%3A50.794Z-Draft_TT_MSE_ODD%20SEM%20EXAM_%20F.Y.%20B.%20Tech%20%26%20F.%20Y.%20M.%20Tech.%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Dt.04.10.2024.pdf'
  },
  {
    title: 'REVISED DRAFT TIME TABLE OF MID SEMESTER EXAMINATION (OFFLINE MODE) - NOVEMBER- 2024 Draft Time table of MSE Examination A. Y. 2024-25 ODD Semester for  F.Y. B. Tech. and F.Y. M. Tec',
    description: 'REVISED DRAFT TIME TABLE OF MID SEMESTER EXAMINATION (OFFLINE MODE) - NOVEMBER- 2024\nDraft Time table of MSE Examination A. Y. 2024-25 ODD Semester for  F.Y. B. Tech. and F.Y. M. Tech.',
    date: '2024-10-15',
    documentUrl: 'https://kitcoek.s3.amazonaws.com/exam/2024-10-15T05%3A55%3A32.549Z-Revised%20Draft_TT_MSE_ODD%20SEM%20EXAM_%20F.Y.%20B.%20Tech%20%26%20F.%20Y.%20M.%20Tech.%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Dt.15.10.2024.pdf'
  },
  {
    title: 'FinalTime table of MSE Examination A. Y. 2024-25 ODD Semester for  F.Y. B. Tech. and F.Y. M. Tech.',
    description: 'FinalTime table of MSE Examination A. Y. 2024-25 ODD Semester for  F.Y. B. Tech. and F.Y. M. Tech.',
    date: '2024-10-26',
    documentUrl: 'https://kitcoek.s3.amazonaws.com/exam/2024-10-26T08%3A36%3A04.168Z-FINAL_TT_MSE_ODD%20SEM%20EXAM_%20F.Y.%20B.%20Tech%20%26%20F.%20Y.%20M.%20Tech.%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20Dt.25.10.2024.pdf'
  },
  {
    title: 'FINAL TIME TABLE OF SUPPLEMENTARY EXAMINATION (OFFLINE MODE) - NOVEMBER- 2024',
    description: 'FINAL TIME TABLE OF SUPPLEMENTARY EXAMINATION (OFFLINE MODE) - NOVEMBER- 2024',
    date: '2024-11-05',
    documentUrl: 'https://kitcoek.s3.amazonaws.com/exam/2024-11-06T10%3A30%3A36.041Z-Final%20Time%20Table_Supplimentary%20Exam%20for%20T.Y.%20B.Tech%20and%20Final%20Year%20B.%20Tech%20November%202024%20%20%20%20%20%20%20Dt.%2005.11.2024.pdf'
  },
  {
    title: 'DRAFT TIME TABLE OF END SEMESTER EXAMINATION (OFFLINE MODE) - DECEMBER- 2024',
    description: 'DRAFT TIME TABLE OF END SEMESTER EXAMINATION (OFFLINE MODE) - DECEMBER- 2024',
    date: '2024-11-23',
    documentUrl: 'https://kitcoek.s3.amazonaws.com/exam/2024-11-26T03%3A44%3A50.271Z-Draft_TT_ESE_ODD%20SEM%20EXAM_%20S.Y.%20To%20Final%20Year%20%202024-25%20%20%20%20%20%20%20%20%20%20%20%20%20Dt.22.11.2024.pdf'
  },
  {
    title: 'REVISED COMBINED TIME TABLE ESE DEC 2024 ODD EVEN SEM. Draft Time table of ESE Examination A. Y. 2024-25 ODD Semester for S.Y. B. Tech. and  FINAL YEAR B.TECH',
    description: 'REVISED COMBINED TIME TABLE ESE DEC 2024 ODD EVEN SEM.\nDraft Time table of ESE Examination A. Y. 2024-25 ODD Semester for S.Y. B. Tech. and  FINAL YEAR B.TECH',
    date: '2024-12-07',
    documentUrl: 'https://kitcoek.s3.amazonaws.com/exam/2024-12-07T10%3A25%3A49.650Z-REVISED%20COMBINED%20TT%20ESE%20DEC%202024%20ODD-EVEN.pdf'
  },
  {
    title: 'REVISED FINAL TIME TABLE ESE DEC 2024',
    description: 'REVISED FINAL TIME TABLE ESE DEC 2024',
    date: '2024-12-18',
    documentUrl: 'https://kitcoek.s3.amazonaws.com/exam/2024-12-18T11%3A39%3A14.763Z-REVISED%20FINAL%20TT%20ESE%20DEC%202024_17.12.24.pdf'
  },
  {
    title: 'DRAFT TIME TABLE OF END SEMESTER EXAMINATION (OFFLINE MODE) FOR F.Y.B.TECH & F.Y.M.TECH- JANUARY 2025',
    description: 'DRAFT TIME TABLE OF END SEMESTER EXAMINATION (OFFLINE MODE) FOR F.Y.B.TECH & F.Y.M.TECH- JANUARY 2025',
    date: '2024-12-28',
    documentUrl: 'https://kitcoek.s3.amazonaws.com/exam/2024-12-28T10%3A48%3A29.329Z-TT%20ESE%20JAN%202025%20F.Y.%20B.TECH%20%26%20F.Y.%20M.TECH_28.12.24.pdf'
  },
  {
    title: 'Sports Students: FINAL TIME TABLE OF REGULAR S.Y. B.TECH. TO FINAL YEAR B.TECH END SEMESTER EXAMINATION - DECEMBER- 2024',
    description: 'Sports Students: FINAL TIME TABLE OF REGULAR S.Y. B.TECH. TO FINAL YEAR B.TECH END SEMESTER EXAMINATION - DECEMBER- 2024',
    date: '2025-01-01',
    documentUrl: 'https://kitcoek.s3.amazonaws.com/exam/2025-01-04T04%3A48%3A16.433Z-SPORTS%20STUDENTS%20TT%20ESE%20DEC%202024_01.01.25.pdf'
  },
  {
    title: 'FINAL TIME TABLE OF END SEMESTER EXAMINATION (OFFLINE MODE) FOR F.Y.B.TECH & F.Y. M.TECH- JANUARY 2025',
    description: 'FINAL TIME TABLE OF END SEMESTER EXAMINATION (OFFLINE MODE) FOR F.Y.B.TECH & F.Y. M.TECH- JANUARY 2025',
    date: '2025-01-03',
    documentUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/exam/2025-01-04T04%3A49%3A37.314Z-FINAL%20TT%20ESE%20JAN%202025%20F.Y.%20B.TECH%20%26%20F.Y.%20M.TECH_03.01.25.pdf'
  },
  {
    title: 'For Sports Students: FINAL TIME TABLE OF REGULAR S.Y. B.TECH. TO FINAL YEAR B.TECH END SEMESTER EXAMINATION - DECEMBER- 2024',
    description: 'For Sports Students: FINAL TIME TABLE OF REGULAR S.Y. B.TECH. TO FINAL YEAR B.TECH END SEMESTER EXAMINATION - DECEMBER- 2024',
    date: '2025-01-10',
    documentUrl: 'https://kitcoek.s3.amazonaws.com/exam/2025-01-11T04%3A28%3A20.077Z-SPORTS%20STUDENTS%20UPDATED%20%20TT%20ESE%20DEC%202024_07.01.25.pdf'
  },
  {
    title: 'First Year BIM TECH (Civil Engineering) SEM-I Examination Schedule for Academic Year 2024-2025',
    description: 'First Year BIM TECH (Civil Engineering) SEM-I Examination Schedule for Academic Year 2024-2025',
    date: '2025-01-10',
    documentUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/exam/2025-01-11T04%3A29%3A04.092Z-BIM%20TECH%20TT%20ESE%20JAN%202025.pdf'
  },
  {
    title: 'FINAL TIME TABLE OF MID SEMESTER EXAMINATION(OFFLINE MODE) MARCH 2025 Second Year To Final Year B.Tech – (Even Semester) Examination Schedule for Academic Year 2024-25',
    description: 'FINAL TIME TABLE OF MID SEMESTER EXAMINATION(OFFLINE MODE) MARCH 2025 Second Year To Final Year B.Tech – (Even Semester) Examination Schedule for Academic Year 2024-25',
    date: '2025-03-05',
    documentUrl: 'https://kitcoek.s3.amazonaws.com/exam/2025-03-05T03%3A47%3A56.852Z-UPDATED%20FINAL%20TT%20MSE%20MARCH%202025%20EVEN%20SEM%20SY%20-FINAL%20YR.%2027.2.25.pdf'
  },
  {
    title: 'FINAL TIME TABLE OF MSE EXAMINATION - MARCH 2025 First Year B.Tech & First Year M.Tech (Sem. II) Mid Semester Examination (MSE)',
    description: 'FINAL TIME TABLE OF MSE EXAMINATION - MARCH 2025 First Year B.Tech & First Year M.Tech (Sem. II) Mid Semester Examination (MSE)',
    date: '2025-03-06',
    documentUrl: 'https://kitcoek.s3.amazonaws.com/exam/2025-03-07T08%3A27%3A57.267Z-FINAL%20%20TT%20MSE%20MARCH%202025%20EVEN%20SEM%20FY%20B.TECH%2C%20FY%20M.TECH_6.3.2025%20%281%29.pdf'
  },
  {
    title: 'TY B Tech Rescheduled MSE exam',
    description: 'Important notice, \nThis is to inform you that due to the campus recruitment drive by ATLAS COPPO, the T.Y. B.Tech. Mid Semester Examinations originally scheduled on 11\' and 12" March 2025 have been rescheduled to 21 and 22 March 2025.  ',
    date: '2025-03-06',
    documentUrl: 'https://kitcoek.s3.amazonaws.com/exam/2025-03-07T10%3A01%3A40.291Z-TY%20B%20Tech%20Rescheduled%20MSE%20exam.pdf'
  },
  {
    title: ' DRAFT TIME TABLE OF END SEMESTER EXAMINATION MAY-2025  First  Year B.Tech & First Year M.Tech – (Even Semester) Examination Schedule for Academic Year 2024-25',
    description: ' DRAFT TIME TABLE OF END SEMESTER EXAMINATION MAY-2025\n First  Year B.Tech & First Year M.Tech – (Even Semester) Examination Schedule for Academic Year 2024-25',
    date: '2025-04-17',
    documentUrl: 'https://kitcoek.s3.amazonaws.com/exam/2025-04-22T09%3A18%3A58.551Z-TT%20ESE%20%20MAY%202025_FY%20B.TECH%2C%20M.TECH_15.04.25%20_1.pdf'
  },
  {
    title: ' DRAFT TIME TABLE OF END SEMESTER EXAMINATION MAY-2025  Programme of the Second Year to  Final Year B.Tech. SEM.-IV , VI, VIII End Semester Examination (ESE)',
    description: ' DRAFT TIME TABLE OF END SEMESTER EXAMINATION MAY-2025\n Programme of the Second Year to  Final Year B.Tech. SEM.-IV , VI, VIII End Semester Examination (ESE)',
    date: '2025-04-17',
    documentUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/exam/2025-04-22T09%3A19%3A24.224Z-TT%20ESE%20MAY%202025.%20SY-FINAL%20YEAR_15.04.25.pdf'
  },
  {
    title: ' Draft Time table of ESE Examination A. Y. 2024-25 EVEN Semester for S.Y. B. Tech. and  FINAL YEAR B.TECH and FY B.TECH/ M.TECH',
    description: ' Draft Time table of ESE Examination A. Y. 2024-25 EVEN Semester for S.Y. B. Tech. and  FINAL YEAR B.TECH and FY B.TECH/ M.TECH',
    date: '2025-05-17',
    documentUrl: 'https://kitcoek.s3.amazonaws.com/exam/2025-05-18T07%3A39%3A13.121Z-FINAL%20TT%20ESE%20MAY%202025.%20SY-FINAL%20YEAR_17.05.25.pdf'
  },
  {
    title: 'Draft Time table of ESE Examination A. Y. 2024-25 EVEN Semester for F.Y. B. Tech. and  F.Y. M.TECH',
    description: 'Draft Time table of ESE Examination A. Y. 2024-25 EVEN Semester for F.Y. B. Tech. and  F.Y. M.TECH',
    date: '2025-05-17',
    documentUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/exam/2025-05-18T07%3A39%3A58.009Z-TT%20ESE%20MAY%202025%20FY%20B.TECH.M.TECH%20_17.05.25.pdf'
  },
  {
    title: 'Draft Time table of ESE Examination A. Y. 2024-25 EVEN Semester for NCC Students',
    description: 'Draft Time table of ESE Examination A. Y. 2024-25 EVEN Semester for NCC Students',
    date: '2025-06-04',
    documentUrl: 'https://kitcoek.s3.amazonaws.com/exam/2025-06-04T08%3A03%3A36.375Z-MODIFIED%20NCC%20TT_ESE%20MAY%202025_03.06.25.pdf'
  },
  {
    title: ' DRAFT TIME TABLE OF END MAKE-UP EXAMINATION ALONG WITH BACKLOG (OFFLINE MODE) - AUG- 2025',
    description: ' DRAFT TIME TABLE OF END MAKE-UP EXAMINATION ALONG WITH BACKLOG (OFFLINE MODE) - AUG- 2025',
    date: '2025-07-26',
    documentUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/exam/2025-07-28T10%3A49%3A23.001Z-MAKEUP%20TT_AUG%202025_26.07.25.pdf'
  },
  {
    title: 'REVISED TIME TABLE OF MAKEUP SEMESTER EXAMINATION AUG 2025',
    description: 'REVISED TIME TABLE OF MAKEUP SEMESTER EXAMINATION AUG 2025',
    date: '2025-07-31',
    documentUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/exam/2025-07-31T06%3A30%3A36.662Z-Makeup%20TT_31.07.25.pdf'
  },
  {
    title: 'DRAFT TIME TABLE OF MID SEMESTER EXAMINATION (OFFLINE MODE) - SEPTEMBER- 2025 PROGRAMME OF SECOND YEAR TO FINAL YEAR B.TECH. (SEM.- III,V & VII ) MID SEMESTER EXAMINATION SEPTEMBER - 2025',
    description: 'DRAFT TIME TABLE OF MID SEMESTER EXAMINATION (OFFLINE MODE) - SEPTEMBER- 2025\nPROGRAMME OF SECOND YEAR TO FINAL YEAR B.TECH. (SEM.- III,V & VII ) MID SEMESTER EXAMINATION SEPTEMBER - 2025\n',
    date: '2025-09-17',
    documentUrl: 'https://kitcoek.s3.amazonaws.com/exam/2025-09-17T10%3A15%3A43.405Z-MSE%20TT_SEPT%202025_UPDATED_16.09.25.pdf'
  },
  {
    title: 'FINAL TIME TABLE OF MID SEMESTER EXAMINATION (OFFLINE MODE) - SEPTEMBER- 2025 PROGRAMME OF SECOND YEAR TO FINAL YEAR B.TECH. (SEM.- III,V & VII ) MID SEMESTER EXAMINATION SEPTEMBER - 2025',
    description: 'FINAL TIME TABLE OF MID SEMESTER EXAMINATION (OFFLINE MODE) - SEPTEMBER- 2025\nPROGRAMME OF SECOND YEAR TO FINAL YEAR B.TECH. (SEM.- III,V & VII ) MID SEMESTER EXAMINATION SEPTEMBER - 2025',
    date: '2025-09-20',
    documentUrl: 'https://kitcoek.s3.amazonaws.com/exam/2025-09-23T03%3A31%3A17.750Z-MSE%20TT_SEPT%202025_FINAL%20TT%20_20.09.25.pdf'
  },
  {
    title: '  FINAL TIME TABLE OF RE MAKEUP EXAMINATION (OFFLINE MODE) - OCTOBER- 2025',
    description: '  FINAL TIME TABLE OF RE MAKEUP EXAMINATION (OFFLINE MODE) - OCTOBER- 2025',
    date: '2025-10-01',
    documentUrl: 'https://kitcoek.s3.amazonaws.com/exam/2025-10-01T07%3A59%3A00.921Z-RE%20MAKEUP%20TT_OCT%202025_FINAL%20TT%20_01.10.25.pdf'
  },
  {
    title: 'FINAL TIME TABLE OF MSE EXAMINATION - NOVEMBER 2025 First Year B.Tech & First Year M.Tech (Sem. I)  Examination Schedule for Academic Year 2025-26 Odd Semester',
    description: 'FINAL TIME TABLE OF MSE EXAMINATION - NOVEMBER 2025\nFirst Year B.Tech & First Year M.Tech (Sem. I) \nExamination Schedule for Academic Year 2025-26 Odd Semester',
    date: '2025-10-16',
    documentUrl: 'https://kitcoek.s3.amazonaws.com/exam/2025-10-16T09%3A23%3A51.423Z-MSE%20FINAL%20TT_FY%20B.TECH%20%26%20M.TECH_NOV%202025_16.10.25.pdf'
  },
  {
    title: 'FINAL TIME TABLE OF RE-MSE EXAMINATION For T.Y.& Final Year B.TECH (OFFLINE MODE) - NOV 2025',
    description: 'FINAL TIME TABLE OF RE-MSE EXAMINATION For T.Y.& Final Year B.TECH (OFFLINE MODE) - NOV 2025',
    date: '2025-11-07',
    documentUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/exam/2025-11-08T06%3A06%3A01.589Z-Final%20TT_Re-MSE%20Nov%202025%20TY%20%26%20Final%20yr_%2006.11.25.pdf'
  },
  {
    title: 'Update ESE, DEC- 2025 Final Time Table',
    description: 'Updated End Semester Examination, DEC- 2025 FinalTime Table',
    date: '2025-12-09',
    documentUrl: 'https://kitcoek.s3.amazonaws.com/exam/2025-12-09T09%3A54%3A46.456Z-UPDATED%20ESE%20DEC%202025%20FINAL%20TT_08.12.2025%20.pdf'
  },
  {
    title: 'NCC, SPORTS Time Table ESE DEC 2025-ODD Sem',
    description: 'NCC, SPORTS TT ESE DEC 2025_Odd Sem-A.Y.-2025-2026',
    date: '2026-01-10',
    documentUrl: 'https://kitcoek.s3.amazonaws.com/exam/2026-01-10T10%3A10%3A25.288Z-NCC%2C%20SPORTS%20TT%20ESE%20DEC%202025_10.01.26.pdf'
  },
  {
    title: 'MSE Even Sem Time Table S.Y.B.Tech To Final Year B.Tech March-2026',
    description: 'MSE Even Sem Time Table S.Y.B.Tech To Final Year B.Tech March-2026 A.Y.-2025-2026',
    date: '2026-03-10',
    documentUrl: 'https://kitcoek.s3.amazonaws.com/exam/2026-03-13T11%3A09%3A03.781Z-MSE_EvenTime%20Table%20S.Y.B.Tech%20To%20Final%20Year%20B.Tech_March-2026%20_10.03.2026-Final-R.pdf'
  },
  {
    title: 'M.S.E Even Sem Time Table F.Y B.TECH, M.TECH-April-2026-A.Y-2025-26',
    description: 'M.S.E Even Sem Time Table F.Y B.TECH, M.TECH_April-2026-A.Y-2025-26-17.03.2026',
    date: '2026-03-17',
    documentUrl: 'https://kitcoek.s3.amazonaws.com/exam/2026-04-04T05%3A40%3A37.054Z-M.S.E%20Even%20Sem%20Time%20Table%20F.Y%20B.TECH%2C%20M.TECH_April-2026-A.Y-2025-26-17.03.2026.pdf'
  },
  {
    title: 'Final Year Time Table ESE June 2026 Even Sem-A.Y.-2025-2026',
    description: 'Final Year Time Table ESE June 2026_Even Sem-A.Y.-2025-2026',
    date: '2026-05-19',
    documentUrl: 'https://kitcoek.s3.amazonaws.com/exam/2026-05-20T09%3A23%3A12.222Z-Final%20Year%20TT%20ESE%20June%202026_Even%20Sem_19.05.26-1.pdf'
  },
  {
    title: 'Final Time Table F.Y B.Tech.-Final Year B. Tech (Sem-7) ESE June 2026- Even Sem',
    description: 'Final Time Table F.Y B.Tech.-Final Year B. Tech (Sem-7) ESE June  Even Sem A.Y.-2025-2026- (30.05.26)',
    date: '2026-05-30',
    documentUrl: 'https://kitcoek.s3.amazonaws.com/exam/2026-05-30T07%3A31%3A13.314Z-Final%20TT%20F.Y-Final%20yr_ESE%20June%202026_30.05.26-vb.pdf'
  },
  {
    title: 'NCC Student Time Table ESE June 2026-Even-Sem-A.Y.-2025-26',
    description: 'NCC Student Time Table ESE June 2026-Even-Sem-A.Y.-2025-26',
    date: '2026-06-20',
    documentUrl: 'https://kitcoek.s3.amazonaws.com/exam/2026-06-20T05%3A07%3A14.793Z-NCC%20Student%20TT_ESE%20June%202026-Even-Sem-A.Y.-2025-26.pdf'
  }
];

async function seed(strapi) {
  seedLog(strapi, 'Seeding ExamCell Timetable...');

  const examCell = await strapi.documents(UID).findFirst();

  if (!examCell) {
    seedLog(strapi, '  ExamCell record not found. Creating with Timetable data...');
    await strapi.documents(UID).create({
      data: {
        timetable: TIMETABLE_ENTRIES,
      },
    });
    seedLog(strapi, '  Timetable seeded (new ExamCell record).');
    return;
  }

  if (examCell.timetable && examCell.timetable.length > 0) {
    seedLog(strapi, '  Timetable already present. Skipping.');
    return;
  }

  await strapi.documents(UID).update({
    documentId: examCell.documentId,
    data: {
      timetable: TIMETABLE_ENTRIES,
    },
  });

  seedLog(strapi, '  Timetable seeded successfully.');
}

module.exports = { seed, TIMETABLE_ENTRIES };