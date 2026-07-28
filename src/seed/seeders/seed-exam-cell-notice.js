//@ts-nocheck

'use strict';

const UID = 'api::exam-cell.exam-cell';
const { seedLog } = require('../seed-utils');

const EXAM_NOTICE_ENTRIES = [
  {
    title: 'REVISED FINAL TIME TABLE OF ESE EXAMINATION (A.Y-2023-24) - DECEMBER - 2023',
    description: 'REVISED FINAL TIME TABLE OF ESE EXAMINATION (A.Y-2023-24) - DECEMBER - 2023',
    date: '2023-11-24',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2023-11-25T11%3A52%3A06.267Z-FINAL%20TIME%20TABLE%20ESE%20EXAM%20DECEMBER%20%202023%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2024-11-2023.pdf'
  },
  {
    title: 'FINAL TIME TABLE OF ESE EXAMINATION (A.Y-2023-24) - DECEMBER - 2023',
    description: 'FINAL TIME TABLE OF ESE EXAMINATION (A.Y-2023-24) - DECEMBER - 2023',
    date: '2023-11-12',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2023-11-25T11%3A52%3A55.393Z-FINAL%20TIME%20TABLE%20ESE%20EXAM%20DECEMBER%20%202023%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2021-11-2023.pdf'
  },
  {
    title: 'DRAFT TIME TABLE OF ESE EXAMINATION - DECEMBER - 2023',
    description: 'DRAFT TIME TABLE OF ESE EXAMINATION - DECEMBER - 2023',
    date: '2023-11-07',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2023-11-25T11%3A53%3A36.162Z-ESE%20EXAM%20DRAFT%20TIME%20TABLE%20DECEMBER%20%202023_05-11-2023%20%281%29.pdf'
  },
  {
    title: 'FINAL TIME TABLE OF MAKEUP EXAMINATION (A.Y-2022-23) - OCTOBER - 2023',
    description: 'FINAL TIME TABLE OF MAKEUP EXAMINATION (A.Y-2022-23) - OCTOBER - 2023',
    date: '2023-10-21',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2023-11-25T11%3A54%3A50.200Z-Final%20Time%20Table%20Makeup%20Exam%20%20October%202023%20F-Y-%20B-Tech%20And%20F-Y-%20M-%20Tech%20Semi%20I%20_SEM%20II%20A-Y-%202022-23%20%20%20%20%20%20Dt-22-10-2023.pdf'
  },
  {
    title: 'DRAFT TIME TABLE OF MAKEUP EXAMINATION (A.Y-2022-23) - OCTOBER - 2023',
    description: 'DRAFT TIME TABLE OF MAKEUP EXAMINATION (A.Y-2022-23) - OCTOBER - 2023',
    date: '2023-10-19',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2023-11-25T11%3A55%3A38.467Z-Draft%20Time%20Table%20Makeup%20Exam%20October%202023%20F-Y-%20B-Tech%20And%20F-Y-%20M-%20Tech%20Semi%20I%20and%20II%20A-Y-%202022-23%20Dt-19-10-2023.pdf'
  },
  {
    title: 'MAKEUP EXAMINATION OCTOBER 2023 EVEN SEMESTER ACADAMIC YEAR 2022-23',
    description: 'MAKEUP EXAMINATION OCTOBER 2023 EVEN SEMESTER ACADAMIC YEAR 2022-23',
    date: '2023-10-12',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2023-11-25T11%3A56%3A25.330Z-Notice%20Makeup%20registration%20Exam%20FY%20UG%20PG%20OCT%202023.pdf'
  },
  {
    title: 'FINAL TIME TABLE OF MSE EXAMINATION T.Y. B. Tech Environmental (OFFLINE MODE) -OCTOBER- 2023',
    description: 'FINAL TIME TABLE OF MSE EXAMINATION T.Y. B. Tech Environmental (OFFLINE MODE) -OCTOBER- 2023',
    date: '2023-10-12',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2023-11-25T11%3A57%3A18.877Z-MSE%20EXAM%20TIME%20TABLE%202023-24ODD%20SEM%20-V%20ENVIORNMENT%20ENGG.pdf'
  },
  {
    title: 'FINAL TIME TABLE OF MID SEMESTER EXAMINATION F.Y. B. Tech and M. Tech (OFFLINE MODE) ODD SEM - OCTOBER 2023',
    description: 'FINAL TIME TABLE OF MID SEMESTER EXAMINATION F.Y. B. Tech and M. Tech (OFFLINE MODE) ODD SEM - OCTOBER 2023',
    date: '2023-10-11',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2023-11-25T11%3A58%3A05.446Z-Final%20Time%20Table%20of%20MSE%20OCTOBER%202023%20F-Y-B-Tech%20and%20%20F-Y-%20M-Tech%20ODD%20Sem%20A-Y%20%20%20%20%20%20%20%20Dt-%2011-10-2023.pdf'
  },
  {
    title: 'DRAFT TIME TABLE OF MID SEMESTER EXAMINATION F.Y. B. Tech and M. Tech (OFFLINE MODE) ODD SEM - OCTOBER 2023',
    description: 'DRAFT TIME TABLE OF MID SEMESTER EXAMINATION F.Y. B. Tech and M. Tech (OFFLINE MODE) ODD SEM - OCTOBER 2023',
    date: '2023-09-27',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2023-11-25T11%3A59%3A47.314Z-Draft%20Time%20Table%20of%20MSE%20OCTOBER%202023%20F-Y-B-Tech%20and%20%20F-Y-%20M-Tech%20ODD%20Sem%20A-Y-%202023-24%20as%20on%2026-09.pdf'
  },
  {
    title: 'FINAL TIME TABLE OF MID SEMESTER EXAMINATION (OFFLINE MODE) ODD SEM - OCTOBER 2023',
    description: 'FINAL TIME TABLE OF MID SEMESTER EXAMINATION (OFFLINE MODE) ODD SEM - OCTOBER 2023',
    date: '2023-09-26',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2023-11-25T12%3A00%3A26.373Z-Final%20TIME%20TABLE%20of%20MID%20SEM-%20%20EXAM--%20October%202023%20%20%20%20%2026-09.pdf'
  },
  {
    title: 'ACAP  ADMITTED LIST DSY 2023-24',
    description: 'ACAP  ADMITTED LIST DSY 2023-24',
    date: '2023-09-25',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2023-11-25T12%3A01%3A02.253Z-6_25%20SEPT-ACAP%20%20ADMITTED%20LIST%20DSY%202023-24.pdf'
  },
  {
    title: 'ACAP LIST OF SEAT TYPEWISE ADMITTED DSY 2023-24',
    description: 'ACAP LIST OF SEAT TYPEWISE ADMITTED DSY 2023-24',
    date: '2023-09-24',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2023-11-25T12%3A02%3A39.628Z-5_%2024SEPT-ACAP%20LIST%20OF%20SEAT%20TYPEWISE%20ADMITTED%20DSY%202023-24.pdf'
  },
  {
    title: ' ACAP FINAL MERIT LIST DSY 203-24',
    description: ' ACAP FINAL MERIT LIST DSY 203-24',
    date: '2023-09-23',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2023-11-25T12%3A05%3A16.423Z-4_%2023SEPT%20-%20ACAP%20FINAL%20MERIT%20LIST%20DSY%20203-24.pdf'
  },
  {
    title: 'ACAP PROVISIONAL MERIT LIST DSY 2023-24',
    description: 'ACAP PROVISIONAL MERIT LIST DSY 2023-24',
    date: '2023-09-23',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2023-11-25T12%3A06%3A06.747Z-3_23SEPT%20-ACAP%20PROVISIONAL%20MERIT%20LIST%20DSY%202023-24.pdf'
  },
  {
    title: 'ACAP  APPLICABLE LIST DSY 2023-24',
    description: 'ACAP  APPLICABLE LIST DSY 2023-24',
    date: '2023-09-22',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2023-11-25T12%3A06%3A53.848Z-2_22SEPT-ACAP%20%20APPLICABLE%20LIST%20DSY%202023-24.pdf'
  },
  {
    title: 'DRAFT TIME TABLE OF MID SEMESTER EXAMINATION (OFFLINE MODE) - OCTOBER 2023',
    description: 'DRAFT TIME TABLE OF MID SEMESTER EXAMINATION (OFFLINE MODE) - OCTOBER 2023',
    date: '2023-09-17',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2023-11-25T12%3A07%3A19.565Z-Draft%20TIME%20TABLE%20of%20MID%20SEM-%20%20EXAM--%20OCTOBER%20-2023%20%281%29.pdf'
  },
  {
    title: 'DRAFT TIME TABLE OF MID SEMESTER EXAMINATION (OFFLINE MODE) - OCTOBER 2023',
    description: 'DRAFT TIME TABLE OF MID SEMESTER EXAMINATION (OFFLINE MODE) - OCTOBER 2023',
    date: '2023-09-03',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2023-11-25T12%3A09%3A42.793Z-Draft%20TIME%20TABLE%20of%20MID%20SEM.%20%20EXAM.-%20OCTOBER%20-2023.pdf'
  },
  {
    title: 'KIT College Women Helpline',
    description: 'KIT College Women Helpline available on all week day for 24*7\n\nKIT College Helpline No.:- 8975415728\n\nWomen Helpline No.: 1090/1091 ',
    date: '2023-12-23',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2023-12-29T17%3A07%3A19.272Z-Nirbhaya%20women%20helpline.pdf'
  },
  {
    title: 'AICTE Feedback. Students · Faculty-Online Feedback Facility available for Student and Faculty on AICTE portal',
    description: 'AICTE Feedback. Students · Faculty.\nOnline Feedback Facility available for Student and Faculty on AICTE portal\n\nLINK: https://www.aicte-india.org/feedback/index.php',
    date: '2023-12-27',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2023-12-29T17%3A11%3A02.693Z-feedback%20facility.pdf'
  },
  {
    title: 'Makeup February 2024 Registration Notice A.Y. 2023-24) F.Y UG & PG',
    description: 'Makeup February 2024 Registration Notice A.Y. 2023-24) F.Y UG & PG',
    date: '2024-01-25',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2024-01-30T04%3A26%3A36.284Z-NOITCE%20For%20Makeup%20Exam%20February%202024%20%28A.Y.%202023-24%29.pdf'
  },
  {
    title: 'FYBTech_courses_and_list_of_documents',
    description: 'FYBTech_courses_and_list_of_documents',
    date: '2023-08-13',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2024-02-13T09%3A30%3A35.172Z-FYBTech_courses_and_list_of_documents.jpg'
  },
  {
    title: 'FYBTech_Seat_Type_Wise_Cut_Off_2023-_Ladies',
    description: 'FYBTech_Seat_Type_Wise_Cut_Off_2023-_Ladies',
    date: '2023-08-13',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2024-02-13T09%3A31%3A46.383Z-FYBTech_Seat_Type_Wise_Cut_Off_2023-_Ladies.jpg'
  },
  {
    title: 'FYBTech_Seat_Type_Wise_Cut_Off_2023-24_General',
    description: 'FYBTech_Seat_Type_Wise_Cut_Off_2023-24_General',
    date: '2023-08-13',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2024-02-13T09%3A32%3A14.551Z-FYBTech_Seat_Type_Wise_Cut_Off_2023-24_General.jpg'
  },
  {
    title: 'FYBTech_Seat_Type_Wise_Cut_Off_2023-24_General',
    description: 'FYBTech_Seat_Type_Wise_Cut_Off_2023-24_General',
    date: '2023-08-13',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2024-02-13T09%3A32%3A40.161Z-FYBTech_Seat_Type_Wise_Cut_Off_2023-24_General.jpg'
  },
  {
    title: 'Fees_Structure_2023-24_DSE_BTech',
    description: 'Fees_Structure_2023-24_DSE_BTech',
    date: '2023-08-13',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2024-02-13T09%3A33%3A06.232Z-Fees_Structure_2023-24_DSE_BTech.pdf'
  },
  {
    title: 'Fees_Structure_2023-24_FY_BTech',
    description: 'Fees_Structure_2023-24_FY_BTech',
    date: '2023-08-13',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2024-02-13T09%3A33%3A28.044Z-Fees_Structure_2023-24_FY_BTech.pdf'
  },
  {
    title: 'RESULT- MAKEUP EXAM FEB-2024',
    description: ' ',
    date: '2024-04-04',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2024-04-04T08%3A16%3A47.230Z-result%20notice%20makup.pdf'
  },
  {
    title: 'MAKEUP EXAMINATION JULY 2024 EVEN SEMESTER ACADAMIC YEAR 2023-24',
    description: 'MAKEUP EXAMINATION JULY 2024 EVEN SEMESTER ACADEMIC YEAR 2023-24',
    date: '2024-07-09',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2024-07-09T10%3A19%3A14.068Z-Notice%20Makeup%20registration%20Exam%20FY%20UG%20PG%20July%202024.pdf'
  },
  {
    title: 'DRAFT TIME TABLE OF MAKEUP EXAMINATION (OFFLINE MODE) - JULY- 2024',
    description: 'DRAFT TIME TABLE OF MAKEUP EXAMINATION (OFFLINE MODE) - JULY- 2024',
    date: '2024-07-09',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2024-07-09T10%3A24%3A52.107Z-Draft%20Time%20Table_Makeup%20Exam%20F.Y.%20to%20Final%20Year%20B.Tech%2CM.Tech%20%2C%20July%20%202024%20%20%20%20%20%20%20%20%20%20%20%20New%20%2009-07-2024.pdf'
  },
  {
    title: 'MAKEUP EXAMINATION JULY 2024 EVEN SEMESTER ACADEMIC YEAR 2023-24',
    description: 'MAKEUP EXAMINATION JULY 2024 EVEN SEMESTER ACADEMIC YEAR 2023-24',
    date: '2024-07-20',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2024-07-20T11%3A10%3A45.441Z-NOITCE%20%20%20%20%20%2020.07.pdf'
  },
  {
    title: 'Change of Branch Notice 2024-25',
    description: 'Change of Branch Notice 2024-25',
    date: '2024-07-23',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2024-07-23T08%3A39%3A40.512Z-CHANGE%20OF%20BRANCH%20NOTICE%202024_25.pdf'
  },
  {
    title: 'PAPER SEEING & GRIEVANCES__ESE-MAY-2024',
    description: 'PAPER SEEING & GRIEVANCES__ESE-MAY-2024',
    date: '2024-08-10',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2024-08-10T08%3A01%3A38.405Z-Paper%20Seeing%20%26%20Grievence.pdf'
  },
  {
    title: 'Re-Evaluation Notice For ESE-MAY-2024',
    description: 'Re-Evaluation Notice For ESE-MAY-2024',
    date: '2024-08-13',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2024-08-13T11%3A39%3A07.296Z-Revaluation%20Notice%20ESE-MAY-2024.pdf'
  },
  {
    title: 'MAKEUP Registration Notice for AUG-2024 (Even Sem)',
    description: 'MAKEUP Registration Notice for AUG-2024 (Even Sem)',
    date: '2024-08-14',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2024-08-14T06%3A20%3A37.538Z-Makeup%20registration%20Notice.pdf'
  },
  {
    title: 'First Year PG : Applications are invited for the following First Year PG Course admissions in Engineering at Institute Level (20 % of sanctioned intake) and /or likely CAP Vacancies for the year 2024-2025 & Schedule',
    description: 'First Year PG : Applications are invited for the following First Year PG Course admissions in Engineering at Institute Level (20 % of sanctioned intake) and /or likely CAP Vacancies for the year 2024-2025 & Schedule',
    date: '2024-09-03',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2024-09-03T10%3A51%3A27.086Z-samaj.pdf'
  },
  {
    title: 'RESULT_MAKEUP_AUG-2024 EVEN SEM',
    description: 'RESULT_MAKEUP_AUG-2024 EVEN SEM',
    date: '2024-10-03',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2024-10-03T11%3A21%3A16.582Z-RESULT_MAKEUP_AUG-2024%20EVEN%20SEM.pdf'
  },
  {
    title: 'PAPER SEEING AND REVALUATION_MAKEUP-AUG-2024',
    description: 'PAPER SEEING AND REVALUATION_MAKEUP-AUG-2024',
    date: '2024-10-03',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2024-10-03T11%3A21%3A55.790Z-PAPER%20SEEING%20AND%20REVALUATION_MAKEUP-AUG-2024.pdf'
  },
  {
    title: 'Revised Eligibility Criteria for Readmission in Academic Year 2024_25',
    description: 'Revised Eligibility Criteria for Readmission in Academic Year 2024_25',
    date: '2024-10-15',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2024-10-15T04%3A13%3A44.332Z-Revised%20Eligibility%20Criteria%20for%20Readmission%20in%20Academic%20Year%202024_25.jpeg'
  },
  {
    title: 'Erasmus+ Staff mobility 2024-25: Call for application for a mobility Project under key Actions 171 of the Erasmus+ Programme.',
    description: 'Erasmus+ Staff mobility 2024-25: Call for application for a mobility Project under key Actions 171 of the Erasmus+ Programme.',
    date: '2024-10-22',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2024-10-27T06%3A38%3A52.948Z-ERASMUS%20%2B%20STAFF%20mobility%202425.pdf'
  },
  {
    title: 'Erasmus+ Student mobility 2024-25: Call for application for a mobility Project under key Actions 171 of the Transfront EU Erasmus+ Consortium.',
    description: 'Erasmus+ Student mobility 2024-25: Call for application for a mobility Project under key Actions 171 of the Transfront EU Erasmus+ Consortium.',
    date: '2024-10-22',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2024-10-27T06%3A39%3A44.495Z-ERASMUS%20%2B%20Student%20mobility%202425.pdf'
  },
  {
    title: 'UCA-KIT 2023 Student mobility',
    description: 'Click Here; https://s3.ap-south-1.amazonaws.com/kitcoek.in/FileManagement/Admission2023/UCA-KIT 2023 Student mobility.pdf',
    date: '2024-10-22',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2024-10-27T06%3A47%3A42.497Z-UCA-KIT%202023%20Student%20mobility-1.pdf'
  },
  {
    title: 'UMA-KIT 2023 Student mobility',
    description: 'UMA-KIT 2023 Student mobility',
    date: '2024-10-22',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2024-10-27T06%3A49%3A31.628Z-UMA-KIT%202023%20Student%20mobility-1.pdf'
  },
  {
    title: 'RESULT_MSE_SEPT-2024_(ODD SEM)_S.Y To Final Year B.Tech',
    description: 'RESULT_MSE_SEPT-2024_(ODD SEM)_S.Y To Final Year B.Tech',
    date: '2024-10-31',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2024-11-05T05%3A08%3A53.917Z-RESULT_MSE_SEPT-2024%20ODD%20SEM.pdf'
  },
  {
    title: 'Paper Seeing & Grievence_MSE_ODD_SEPT_2024 S.Y. B.Tech To Final Year B.Tech',
    description: 'Paper Seeing & Grievence_MSE_ODD_SEPT_2024 S.Y. B.Tech To Final Year B.Tech',
    date: '2024-11-05',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2024-11-05T05%3A10%3A04.698Z-Paper%20Seeing%20%26%20Grievence_MSE_ODD_SEPT_2024.pdf'
  },
  {
    title: 'Notice for E-Admit Card- Hall Ticket Download',
    description: 'Notice for E-Admit Card- Hall Ticket Download F.Y.B.Tech & F.M.Tech MSE,Nov-2024',
    date: '2024-11-07',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2024-11-07T03%3A56%3A41.587Z-Notice%20for%20E-Admit%20Card-%20Hall%20Ticket%20Download.pdf'
  },
  {
    title: 'STUDENT GRIEVANCE REDRESSAL COMMITTEE',
    description: 'STUDENT GRIEVANCE READDRESS COMMITTEE',
    date: '2024-11-27',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2024-11-27T08%3A16%3A53.167Z-Student%20Grievacne%20Redressal%20Cell.pdf'
  },
  {
    title: 'Paper Seeing & Grievence_MSE_ODD_NOV_2024',
    description: 'Paper Seeing & Grievence_MSE_ODD_NOV_2024',
    date: '2024-12-04',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2024-12-04T05%3A21%3A02.070Z-Paper%20Seeing%20%26%20Grievence_MSE_ODD_NOV_2024.pdf'
  },
  {
    title: 'Fee Proposal: AY 2025-26',
    description: 'Fee Proposal: AY 2025-26',
    date: '2024-12-13',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2024-12-18T05%3A19%3A30.713Z-6267%20FEE%20REGULATORY%20AUTHORITY%20PRPOSALAY-%202025-26_compressed.pdf'
  },
  {
    title: 'NOTICE  Schedule of DSY B.Tech. Against CAP Admissions 2024-2025.',
    description: 'NOTICE  Schedule of DSY B.Tech. Against CAP Admissions 2024-2025.',
    date: '2024-09-10',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2024-12-19T10%3A57%3A33.824Z-NOTICE%20%20Schedule%20of%20DSY%20B.Tech.%20Against%20CAP%20Admissions%202024-2025..pdf'
  },
  {
    title: 'LIST OF APPLICABLE  STUDENT  LIST AT AGAINST CAP DSY 11.09.2024',
    description: 'LIST OF APPLICABLE  STUDENT  LIST AT AGAINST CAP DSY 11.09.2024',
    date: '2024-09-11',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2024-12-19T10%3A58%3A56.763Z-LIST%20OF%20APPLICABLE%20%20STUDENT%20%20LIST%20AT%20AGAINST%20CAP%20DSY%2011.09.2024.pdf'
  },
  {
    title: 'FINAL MERIT LIST DSY 12.09.2024',
    description: 'FINAL MERIT LIST DSY 12.09.2024',
    date: '2024-09-12',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2024-12-19T11%3A00%3A08.897Z-FINAL%20MERIT%20LIST%20DSY%2012.09.2024.pdf'
  },
  {
    title: 'LIST OF ADMITTED LIST DSY 14.09.2024',
    description: 'LIST OF ADMITTED LIST DSY 14.09.2024',
    date: '2024-09-14',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2024-12-19T11%3A00%3A32.197Z-LIST%20OF%20ADMITTED%20LIST%20DSY%2014.09.2024.pdf'
  },
  {
    title: 'LIST OF ALLOTMENT SEAT TYPEWISE STUDENT LIST DSY 12.09.2024',
    description: 'LIST OF ALLOTMENT SEAT TYPEWISE STUDENT LIST DSY 12.09.2024',
    date: '2024-09-12',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2024-12-19T11%3A01%3A06.533Z-LIST%20OF%20ALLOTMENT%20SEAT%20TYPEWISE%20STUDENT%20LIST%20DSY%2012.09.2024.pdf'
  },
  {
    title: 'LIST OF APPLICABLE  STUDENT  LIST AT AGAINST CAP DSY 11.09.2024',
    description: 'LIST OF APPLICABLE  STUDENT  LIST AT AGAINST CAP DSY 11.09.2024',
    date: '2024-09-11',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2024-12-19T11%3A01%3A34.628Z-LIST%20OF%20APPLICABLE%20%20STUDENT%20%20LIST%20AT%20AGAINST%20CAP%20DSY%2011.09.2024.pdf'
  },
  {
    title: 'PROVISIONAL MERIT LIST DSY 12.09.2024',
    description: 'PROVISIONAL MERIT LIST DSY 12.09.2024',
    date: '2024-09-12',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2024-12-19T11%3A02%3A02.288Z-PROVISIONAL%20MERIT%20LIST%20DSY%2012.09.2024.pdf'
  },
  {
    title: 'REVISED LIST OF APPLICABLE  STUDENT  LIST   DSY AGAINST CAP LEVEL',
    description: 'REVISED LIST OF APPLICABLE  STUDENT  LIST   DSY AGAINST CAP LEVEL',
    date: '2024-10-20',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2024-12-19T11%3A06%3A05.047Z-REVISED%20LIST%20OF%20APPLICABLE%20%20STUDENT%20%20LIST%20%20%20DSY%20AGAINST%20CAP%20LEVEL.pdf'
  },
  {
    title: 'REVISED PROVISIONAL MERIT LIST DSY',
    description: 'REVISED PROVISIONAL MERIT LIST DSY',
    date: '2024-10-21',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2024-12-19T11%3A06%3A34.974Z-REVISED%20PROVISIONAL%20MERIT%20LIST%20DSY.pdf'
  },
  {
    title: 'REVISED FINAL MERIT LIST DSY',
    description: 'REVISED FINAL MERIT LIST DSY',
    date: '2024-10-21',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2024-12-19T11%3A06%3A57.146Z-REVISED%20FINAL%20MERIT%20LIST%20DSY.pdf'
  },
  {
    title: 'REVISED LIST OF ALLOTMENT SEAT TYPEWISE STUDENT LIST DSY',
    description: 'REVISED LIST OF ALLOTMENT SEAT TYPEWISE STUDENT LIST DSY',
    date: '2024-10-22',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2024-12-19T11%3A07%3A34.376Z-REVISED%20LIST%20OF%20ALLOTMENT%20SEAT%20TYPEWISE%20STUDENT%20LIST%20DSY.pdf'
  },
  {
    title: 'REVISED LIST OF ADMITTED LIST DSY',
    description: 'REVISED LIST OF ADMITTED LIST DSY',
    date: '2024-10-23',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2024-12-19T11%3A07%3A59.842Z-REVISED%20LIST%20OF%20ADMITTED%20LIST%20DSY.pdf'
  },
  {
    title: 'NOTICE  Schedule of First Year M.Tech. Institute Level & Against CAP Admissions 2024-2025.',
    description: 'NOTICE  Schedule of First Year M. Tech. Institute Level & Against CAP Admissions 2024-2025.',
    date: '2024-09-03',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2024-12-19T11%3A09%3A50.663Z-NOTICE%20%20Schedule%20of%20First%20Year%20M.Tech.%20Institute%20Level%20%26%20Against%20CAP%20Admissions%202024-2025..pdf'
  },
  {
    title: 'First Year M.Tech. ADMITTED IL A.Y. 2024.-24      09.09.2024',
    description: 'First Year M.Tech. ADMITTED IL A.Y. 2024.-24      09.09.2024',
    date: '2024-09-09',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2024-12-19T11%3A10%3A18.850Z-First%20Year%20M.Tech.%20ADMITTED%20IL%20A.Y.%202024.-24%20%20%20%20%20%2009.09.2024.pdf'
  },
  {
    title: 'First Year M.Tech. ADMITTED LIST ACAP  A.Y. 2024-2025.  09.09.24',
    description: 'First Year M.Tech. ADMITTED LIST ACAP  A.Y. 2024-2025.  09.09.24',
    date: '2024-09-09',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2024-12-19T11%3A10%3A43.721Z-First%20Year%20M.Tech.%20ADMITTED%20LIST%20ACAP%20%20A.Y.%202024-2025.%20%2009.09.24.pdf'
  },
  {
    title: 'First Year M.Tech. ALLOTMENT & SEAT TYPE WISE LIST ACAP A.Y. 2024-2025.    06.09.2024',
    description: 'First Year M.Tech. ALLOTMENT & SEAT TYPE WISE LIST ACAP A.Y. 2024-2025.    06.09.2024',
    date: '2024-09-09',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2024-12-19T11%3A11%3A03.942Z-First%20Year%20M.Tech.%20ALLOTMENT%20%26%20SEAT%20TYPE%20WISE%20LIST%20ACAP%20A.Y.%202024-2025.%20%20%20%2006.09.2024.pdf'
  },
  {
    title: 'First Year M.Tech. ALLOTMENT & SEAT TYPE WISE LIST ACAP A.Y. 2024-2025.    06.09.2024',
    description: 'First Year M.Tech. ALLOTMENT & SEAT TYPE WISE LIST ACAP A.Y. 2024-2025.    06.09.2024',
    date: '2024-09-06',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2024-12-19T11%3A11%3A53.853Z-First%20Year%20M.Tech.%20ALLOTMENT%20%26%20SEAT%20TYPE%20WISE%20LIST%20ACAP%20A.Y.%202024-2025.%20%20%20%2006.09.2024.pdf'
  },
  {
    title: 'First Year M.Tech. ALLOTMENT & SEAT TYPEWISE LIST IL  A.Y. 2024-2025.      06.09.2024',
    description: 'First Year M.Tech. ALLOTMENT & SEAT TYPEWISE LIST IL  A.Y. 2024-2025.      06.09.2024',
    date: '2024-09-06',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2024-12-19T11%3A12%3A15.450Z-First%20Year%20M.Tech.%20ALLOTMENT%20%26%20SEAT%20TYPEWISE%20LIST%20IL%20%20A.Y.%202024-2025.%20%20%20%20%20%2006.09.2024.pdf'
  },
  {
    title: 'First Year M.Tech. Appicable Student List  ACAP A.Y. 2024-2025.   04.09.2024',
    description: 'First Year M.Tech. Appicable Student List  ACAP A.Y. 2024-2025.   04.09.2024',
    date: '2024-09-04',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2024-12-19T11%3A12%3A43.254Z-First%20Year%20M.Tech.%20Appicable%20Student%20List%20%20ACAP%20A.Y.%202024-2025.%20%20%2004.09.2024.pdf'
  },
  {
    title: 'First Year M.Tech. Appicable Student List  IL A.Y. 2024-2025.    04.09.2024',
    description: 'First Year M.Tech. Appicable Student List  IL A.Y. 2024-2025.    04.09.2024',
    date: '2024-09-04',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2024-12-19T11%3A13%3A03.991Z-First%20Year%20M.Tech.%20Appicable%20Student%20List%20%20IL%20A.Y.%202024-2025.%20%20%20%2004.09.2024.pdf'
  },
  {
    title: 'First Year M.Tech. FINAL MERIT LIST ACAP  A.Y. 2024-2025.   06.09.2024',
    description: 'First Year M.Tech. FINAL MERIT LIST ACAP  A.Y. 2024-2025.   06.09.2024',
    date: '2024-09-06',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2024-12-19T11%3A13%3A25.201Z-First%20Year%20M.Tech.%20FINAL%20MERIT%20LIST%20ACAP%20%20A.Y.%202024-2025.%20%20%2006.09.2024.pdf'
  },
  {
    title: 'First Year M.Tech. FINAL MERIT LIST IL  A.Y. 2024-2025.      06.09.2024',
    description: 'First Year M.Tech. FINAL MERIT LIST IL  A.Y. 2024-2025.      06.09.2024',
    date: '2024-12-06',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2024-12-19T11%3A13%3A41.675Z-First%20Year%20M.Tech.%20FINAL%20MERIT%20LIST%20IL%20%20A.Y.%202024-2025.%20%20%20%20%20%2006.09.2024.pdf'
  },
  {
    title: 'First Year M.Tech. PROVISIONAL MERIT LIST  ACAP A.Y. 2024-2025.      05.09.2024',
    description: 'First Year M.Tech. PROVISIONAL MERIT LIST  ACAP A.Y. 2024-2025.      05.09.2024',
    date: '2024-09-05',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2024-12-19T11%3A14%3A04.334Z-First%20Year%20M.Tech.%20PROVISIONAL%20MERIT%20LIST%20%20ACAP%20A.Y.%202024-2025.%20%20%20%20%20%2005.09.2024.pdf'
  },
  {
    title: 'First Year M.Tech. PROVISIONAL MERIT LIST  IL A.Y. 2024-2025.      05.09.2024',
    description: 'First Year M.Tech. PROVISIONAL MERIT LIST  IL A.Y. 2024-2025.      05.09.2024',
    date: '2024-09-05',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2024-12-19T11%3A14%3A26.964Z-First%20Year%20M.Tech.%20PROVISIONAL%20MERIT%20LIST%20%20IL%20A.Y.%202024-2025.%20%20%20%20%20%2005.09.2024.pdf'
  },
  {
    title: 'First Year B.Tech.  ACAP Admitted Merit List  CAP Admisssion Merit List 2024-2025  13.09.2024',
    description: 'First Year B.Tech.  ACAP Admitted Merit List  CAP Admisssion Merit List 2024-2025  13.09.2024',
    date: '2024-09-13',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2024-12-19T11%3A20%3A24.836Z-First%20Year%20B.Tech.%20%20ACAP%20Admitted%20Merit%20List%20%20CAP%20Admisssion%20Merit%20List%202024-2025%20%2013.09.2024.pdf'
  },
  {
    title: 'First Year B.Tech.  Institute Level Admitted Merit List  CAP Admisssion Merit List 2024-2025  13.09.2024',
    description: 'First Year B.Tech.  Institute Level Admitted Merit List  CAP Admisssion Merit List 2024-2025  13.09.2024',
    date: '2024-09-13',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2024-12-19T11%3A20%3A58.445Z-First%20Year%20B.Tech.%20%20Institute%20Level%20Admitted%20Merit%20List%20%20CAP%20Admisssion%20Merit%20List%202024-2025%20%2013.09.2024.pdf'
  },
  {
    title: 'First Year B.Tech.  Institute Level Provisional Merit List  A.Y. 2024-2025   11.09.2024',
    description: 'First Year B.Tech.  Institute Level Provisional Merit List  A.Y. 2024-2025   11.09.2024',
    date: '2024-09-11',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2024-12-19T11%3A21%3A27.209Z-First%20Year%20B.Tech.%20%20Institute%20Level%20Provisional%20Merit%20List%20%20A.Y.%202024-2025%20%20%2011.09.2024.pdf'
  },
  {
    title: 'First Year B.Tech. ACAP Provisional Merit List 2024-2025. 11.09.2024',
    description: 'First Year B.Tech. ACAP Provisional Merit List 2024-2025. 11.09.2024',
    date: '2024-09-11',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2024-12-19T11%3A22%3A28.832Z-First%20Year%20B.Tech.%20ACAP%20Provisional%20Merit%20List%202024-2025.%2011.09.2024.pdf'
  },
  {
    title: 'First Year B.Tech. AGAINST CAP Admisssion Final Merit List 2024-2022.  11.09.2024',
    description: 'First Year B.Tech. AGAINST CAP Admisssion Final Merit List 2024-2022.  11.09.2024',
    date: '2024-09-11',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2024-12-19T11%3A23%3A32.678Z-First%20Year%20B.Tech.%20AGAINST%20CAP%20Admisssion%20Final%20Merit%20List%202024-2022.%20%2011.09.2024.pdf'
  },
  {
    title: 'First Year B.Tech. Appicable Student List  ACAP 2024-2025   10.09.2024',
    description: 'First Year B.Tech. Applicable Student List  ACAP 2024-2025   10.09.2024',
    date: '2024-09-10',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2024-12-19T11%3A24%3A53.741Z-First%20Year%20B.Tech.%20Appicable%20Student%20List%20%20ACAP%202024-2025%20%20%2010.09.2024.pdf'
  },
  {
    title: 'First Year B.Tech. Appicable Student List  IL A.Y. 2024-2025.   10.09.2024',
    description: 'First Year B.Tech. Applicable Student List  IL A.Y. 2024-2025.   10.09.2024',
    date: '2024-09-10',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2024-12-19T11%3A26%3A40.280Z-First%20Year%20B.Tech.%20Appicable%20Student%20List%20%20IL%20A.Y.%202024-2025.%20%20%2010.09.2024.pdf'
  },
  {
    title: 'First Year B.Tech. Institute Level Admisssion Final Merit List 2024-2025.    11.09.2024',
    description: 'First Year B.Tech. Institute Level Admission Final Merit List 2024-2025.    11.09.2024',
    date: '2024-09-11',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2024-12-19T11%3A27%3A15.918Z-First%20Year%20B.Tech.%20Institute%20Level%20Admisssion%20Final%20Merit%20List%202024-2025.%20%20%20%2011.09.2024.pdf'
  },
  {
    title: 'First Year B.Tech. SEAT TYPE WISE Allotmentsheet AGAINST CAP Admisssion Merit List 2024-2025         11.09.2024',
    description: 'First Year B.Tech. SEAT TYPE WISE Allotment sheet AGAINST CAP Admission Merit List 2024-2025         11.09.2024',
    date: '2024-09-11',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2024-12-19T11%3A27%3A55.694Z-First%20Year%20B.Tech.%20SEAT%20TYPE%20WISE%20Allotmentsheet%20AGAINST%20CAP%20Admisssion%20Merit%20List%202024-2025%20%20%20%20%20%20%20%20%2011.09.2024.pdf'
  },
  {
    title: 'NOTICE  Schedule of First Year B.Tech. Institute Level & Against CAP Admissions 2024-2025.     8.9.2024',
    description: 'NOTICE  Schedule of First Year B.Tech. Institute Level & Against CAP Admissions 2024-2025.     8.9.2024',
    date: '2024-09-08',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2024-12-19T11%3A28%3A54.274Z-NOTICE%20%20Schedule%20of%20First%20Year%20B.Tech.%20Institute%20Level%20%26%20Against%20CAP%20Admissions%202024-2025.%20%20%20%20%208.9.2024.pdf'
  },
  {
    title: 'Revised First Year B.Tech.  ADMITTED LIST IL Admisssion A.Y. 2024-2025.   23.10.2024',
    description: 'Revised First Year B.Tech.  ADMITTED LIST IL Admission A.Y. 2024-2025.   23.10.2024',
    date: '2024-09-23',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2024-12-19T11%3A29%3A57.040Z-Revised%20First%20Year%20B.Tech.%20%20ADMITTED%20LIST%20IL%20Admisssion%20A.Y.%202024-2025.%20%20%2023.10.2024.pdf'
  },
  {
    title: 'Revised First Year B.Tech.  ALLOTMENT SEAT TYPEWISE LIST ACAP A.Y. 2024-2025.  22.10.24',
    description: 'Revised First Year B.Tech.  ALLOTMENT SEAT TYPEWISE LIST ACAP A.Y. 2024-2025.  22.10.24',
    date: '2024-09-22',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2024-12-19T11%3A30%3A26.325Z-Revised%20First%20Year%20B.Tech.%20%20ALLOTMENT%20SEAT%20TYPEWISE%20LIST%20ACAP%20A.Y.%202024-2025.%20%2022.10.24.pdf'
  },
  {
    title: 'Revised First Year B.Tech.  ALLOTMENT SEAT TYPEWISE LIST IL A.Y. 2024-2025    22.10.2024',
    description: 'Revised First Year B.Tech.  ALLOTMENT SEAT TYPEWISE LIST IL A.Y. 2024-2025    22.10.2024',
    date: '2024-10-22',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2024-12-19T11%3A30%3A53.421Z-Revised%20First%20Year%20B.Tech.%20%20ALLOTMENT%20SEAT%20TYPEWISE%20LIST%20IL%20A.Y.%202024-2025%20%20%20%2022.10.2024.pdf'
  },
  {
    title: 'Revised First Year B.Tech. ACAP Admisssion Provisional Merit List 2024-2025.  21.10.2024',
    description: 'Revised First Year B.Tech. ACAP Admission Provisional Merit List 2024-2025.  21.10.2024',
    date: '2024-10-21',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2024-12-19T11%3A31%3A33.440Z-Revised%20First%20Year%20B.Tech.%20ACAP%20Admisssion%20Provisional%20Merit%20List%202024-2025.%20%2021.10.2024.pdf'
  },
  {
    title: 'Revised First Year B.Tech. Admitted List  ACAP Admisssion A.Y. 2024-2025.   23.10.2024',
    description: 'Revised First Year B.Tech. Admitted List  ACAP Admission A.Y. 2024-2025.   23.10.2024',
    date: '2024-10-23',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2024-12-19T11%3A33%3A00.502Z-Revised%20First%20Year%20B.Tech.%20Admitted%20List%20%20ACAP%20Admisssion%20A.Y.%202024-2025.%20%20%2023.10.2024.pdf'
  },
  {
    title: 'Revised First Year B.Tech. AGAINST CAP Admisssion Final Merit List 2024-2025.   22.10.2024',
    description: 'Revised First Year B.Tech. AGAINST CAP Admission Final Merit List 2024-2025.   22.10.2024',
    date: '2024-10-22',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2024-12-19T11%3A33%3A51.132Z-Revised%20First%20Year%20B.Tech.%20AGAINST%20CAP%20Admisssion%20Final%20Merit%20List%202024-2025.%20%20%20%2022.10.2024.pdf'
  },
  {
    title: 'Revised First Year B.Tech. Appicable Student List  ACAP List 2024-2025.     20.10.2024',
    description: 'Revised First Year B.Tech. Applicable Student List  ACAP List 2024-2025.     20.10.2024',
    date: '2024-10-20',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2024-12-19T11%3A34%3A39.780Z-Revised%20First%20Year%20B.Tech.%20Appicable%20Student%20List%20%20ACAP%20List%202024-2025.%20%20%20%20%2020.10.2024.pdf'
  },
  {
    title: 'Revised First Year B.Tech. Appicable Student List  IL List 2024-2025.    20.10.2024',
    description: 'Revised First Year B.Tech. Applicable Student List  IL List 2024-2025.    20.10.2024',
    date: '2024-10-20',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2024-12-19T11%3A35%3A23.741Z-Revised%20First%20Year%20B.Tech.%20Appicable%20Student%20List%20%20IL%20List%202024-2025.%20%20%20%2020.10.2024.pdf'
  },
  {
    title: 'Revised First Year B.Tech. IL Admisssion Provisional Merit List 2024-2025.    21.10.2024',
    description: 'Revised First Year B.Tech. IL Admission Provisional Merit List 2024-2025.    21.10.2024',
    date: '2024-10-21',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2024-12-19T11%3A36%3A28.768Z-Revised%20First%20Year%20B.Tech.%20IL%20Admisssion%20Provisional%20Merit%20List%202024-2025.%20%20%20%2021.10.2024.pdf'
  },
  {
    title: 'Revised First Year B.Tech. Institute Level Admisssion Final Merit List 2024-2025.  22.10.2024',
    description: 'Revised First Year B.Tech. Institute Level Admission Final Merit List 2024-2025.  22.10.2024',
    date: '2024-10-22',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2024-12-19T11%3A37%3A06.240Z-Revised%20First%20Year%20B.Tech.%20Institute%20Level%20Admisssion%20Final%20Merit%20List%202024-2025.%20%2022.10.2024.pdf'
  },
  {
    title: 'Backlog Course Registration for First year UG(NEP) & PG (OLD & NEP)',
    description: 'Backlog Course Registration for First year UG(NEP) & PG (OLD & NEP)',
    date: '2024-12-28',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2024-12-28T08%3A25%3A49.195Z-ESE-Exam%20Registration%20Notice-F.Y.B.Tech%20%26%20M.Tech.pdf'
  },
  {
    title: 'PAPER SEEING AND REVALUATION GRIEVANCES ESE,DEC-2024 & JAN-2025 ',
    description: 'F.Y.B.Tech To Final Year B.Tech, F.Y.M.Tech  & B. Tech Honors',
    date: '2025-02-27',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-02-27T04%3A15%3A41.672Z-PAPER%20SEEING%20AND%20REVALUATION_GRIEVANCES-2024-2025.pdf'
  },
  {
    title: 'TY B Tech Rescheduled MSE exam Notice',
    description: 'Important notice, \nThis is to inform you that due to the campus recruitment drive by ATLAS COPPO, the T.Y. B.Tech. Mid Semester Examinations originally scheduled on 11\' and 12" March 2025 have been rescheduled to 21 and 22 March 2025.  ',
    date: '2025-03-06',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-03-07T08%3A38%3A53.430Z-TY%20B%20Tech%20Rescheduled%20MSE%20exam.pdf'
  },
  {
    title: 'MSE, March-2024 Paper Seeing & Grievance-S.Y.B.Tech to Final Year B.Tech',
    description: 'MSE, March-2024 Paper Seeing & Grievance- S.Y.B.Tech to Final Year B.Tech Odd Sem-A.Y.-2024-2025',
    date: '2025-04-08',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-04-15T05%3A55%3A14.292Z-Paper%20Seeing%20%26%20Grievence-S.Y.B.Tech%20to%20Final%20Year%20B.Tech.pdf'
  },
  {
    title: 'MSE, March-2025 Paper Seeing & Grievance -F.Y.B.Tech & F.Y.M.Tech',
    description: 'MSE, March-2025 Paper Seeing & Grievance -F.Y.B.Tech & F.Y.M.Tech Odd Sem- A.Y.-2024-2025',
    date: '2025-04-15',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-04-15T05%3A56%3A11.408Z-Paper%20Seeing%20%26%20Grievence%20-F.Y.B.Tech%20%26%20F.Y.M.Tech.pdf'
  },
  {
    title: ' DRAFT TIME TABLE OF END SEMESTER EXAMINATION MAY-2025  First  Year B.Tech & First Year M.Tech – (Even Semester) Examination Schedule for Academic Year 2024-25',
    description: ' DRAFT TIME TABLE OF END SEMESTER EXAMINATION MAY-2025\n First  Year B.Tech & First Year M.Tech – (Even Semester) Examination Schedule for Academic Year 2024-25',
    date: '2025-04-17',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-04-22T09%3A20%3A21.839Z-TT%20ESE%20%20MAY%202025_FY%20B.TECH%2C%20M.TECH_15.04.25%20_1.pdf'
  },
  {
    title: '     DRAFT TIME TABLE OF END SEMESTER EXAMINATION MAY-2025  Programme of the Second Year to  Final Year B.Tech. SEM.-IV , VI, VIII End Semester Examination (ESE)',
    description: '     DRAFT TIME TABLE OF END SEMESTER EXAMINATION MAY-2025\n Programme of the Second Year to  Final Year B.Tech. SEM.-IV , VI, VIII End Semester Examination (ESE)',
    date: '2025-04-17',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2025-04-22T09%3A20%3A50.372Z-TT%20ESE%20MAY%202025.%20SY-FINAL%20YEAR_15.04.25.pdf'
  },
  {
    title: 'ESE-MAY-2025-Backlog Courses Registration Notice-A.Y.-2024-2025',
    description: 'ESE-MAY-2025-Backlog Courses Registration Notice-A.Y.-2024-2025 F.Y.B.Tech To Final Year B.Tech Regular and Year Down Students/',
    date: '2025-04-22',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-04-29T03%3A34%3A02.735Z-ESE-MAY-2025-Back%20log%20Registration%20Notice_MMY.pdf'
  },
  {
    title: 'Draft Time table of ESE Examination A. Y. 2024-25 EVEN Semester for NCC Students',
    description: 'Draft Time table of ESE Examination A. Y. 2024-25 EVEN Semester for NCC Students',
    date: '2025-06-04',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-06-04T08%3A03%3A15.850Z-MODIFIED%20NCC%20TT_ESE%20MAY%202025_03.06.25.pdf'
  },
  {
    title: 'Commencement of 2025-26 (Odd Semester)',
    description: 'This is to inform all students of S.Y. B. Tech, T.Y. B. Tech, Final Year B. Tech and S.Y. M. Tech. that the Odd Semester of Academic Year 2025-26 will officially commence on 8th July 2025',
    date: '2025-06-26',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-06-27T09%3A38%3A03.647Z-Notice_Commencement%20of%202025-26_Odd%20Sem.pdf'
  },
  {
    title: 'PAPER SEEING AND REVALUATION_GRIEVANCES-ESE-May-2025 (A.Y.-2024-2025)',
    description: 'PAPER SEEING AND REVALUATION_GRIEVANCES-ESE-May-2025 (A.Y.-2024-2025)',
    date: '2025-07-03',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-07-11T06%3A02%3A46.946Z-PAPER%20SEEING%20AND%20REVALUATION_GRIEVANCES-2024-2025-ESE-May-2025-05.07.2025.pdf'
  },
  {
    title: 'Branch Change Notice AY:2025-26',
    description: 'Branch Change Notice AY:2025-26',
    date: '2025-07-11',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-07-11T11%3A13%3A03.114Z-Branch%20Change%20Notice%202025-26.pdf'
  },
  {
    title: ' DRAFT TIME TABLE OF END MAKE-UP EXAMINATION ALONG WITH BACKLOG (OFFLINE MODE) - AUG- 2025',
    description: ' DRAFT TIME TABLE OF END MAKE-UP EXAMINATION ALONG WITH BACKLOG (OFFLINE MODE) - AUG- 2025',
    date: '2025-07-26',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-07-28T10%3A49%3A02.112Z-MAKEUP%20TT_AUG%202025_26.07.25.pdf'
  },
  {
    title: 'Backlog Course Registration for Makeup Examination, Aug-2025',
    description: 'Backlog Course Registration for Makeup Examination, Aug-2025 (A.Y.-2024-2025)',
    date: '2025-07-23',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-07-29T06%3A03%3A37.793Z-MKP-AUG-2025-Back%20log%20Registration%20Notice_MMY.pdf'
  },
  {
    title: 'REVISED TIME TABLE OF MAKEUP SEMESTER EXAMINATION AUG 2025',
    description: 'REVISED TIME TABLE OF MAKEUP SEMESTER EXAMINATION AUG 2025',
    date: '2025-07-31',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-07-31T06%3A30%3A06.282Z-Makeup%20TT_31.07.25.pdf'
  },
  {
    title: 'Notification for FY B.Tech. IL, ACAP Seats for AY 2025-26',
    description: 'Notification for FY B.Tech. IL, ACAP Seats for AY 2025-26',
    date: '2025-07-25',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-08-20T04%3A52%3A56.200Z-Notification%20for%20FY%20B.Tech.%20IL%2C%20ACAP%20Seats%20for%20AY%202025-26.pdf'
  },
  {
    title: 'Notification for DSY B.Tech. ACAP Seats for AY 2025-26',
    description: 'Notification for DSY B.Tech. ACAP Seats for AY 2025-26',
    date: '2025-07-31',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-08-20T04%3A59%3A42.891Z-Notification%20for%20DSY%20B.Tech.%20ACAP%20Seats%20for%20AY%202025-26.pdf'
  },
  {
    title: 'Notification for FY M.Tech. IL and ACAP Seats for A.Y. 2025-26',
    description: 'Notification for FY M.Tech. IL and ACAP Seats for A.Y. 2025-26',
    date: '2025-07-26',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2025-08-20T05%3A00%3A25.077Z-Notification%20for%20FY%20M.Tech.%20IL%20and%20ACAP%20Seats%20for%20A.Y.%202025-26.pdf'
  },
  {
    title: 'Application Form for FY B. Tech. IL, ACAP Seats for AY 2025-26',
    description: 'Application Form for FY B. Tech. IL, ACAP Seats for AY 2025-26',
    date: '2025-07-25',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-08-20T05%3A02%3A23.196Z-Application%20Form%20for%20FY%20BTech%20IL%2C%20ACAP%20Seats%20for%20AY%202025-26.pdf'
  },
  {
    title: 'Application Form for DSY B. Tech. ACAP Seats for AY 2025-26',
    description: 'Application Form for DSY B. Tech. ACAP Seats for AY 2025-26',
    date: '2025-07-31',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2025-08-20T05%3A03%3A46.591Z-Application%20Form%20for%20DSY%20BTech%20ACAP%20Seats%20for%20AY%202025-26.pdf'
  },
  {
    title: 'Application Form for FY M. Tech. IL, ACAP Seats for AY 2025-26',
    description: 'Application Form for FY M. Tech. IL, ACAP Seats for AY 2025-26',
    date: '2025-07-26',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2025-08-20T05%3A04%3A40.182Z-Application%20Form%20for%20FY%20MTech%20IL%2C%20ACAP%20Seats%20for%20AY%202025-26.pdf'
  },
  {
    title: 'Partition Horrors Remembrance Day',
    description: 'Partition Horrors Remembrance Day\nLink: www.aishe.gov.in ',
    date: '2025-08-14',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-08-23T06%3A03%3A20.406Z-14th%20AUGUST%20Notice.pdf'
  },
  {
    title: 'PAPER SEEING & REVALUATION_GRIEVANCES-A.Y-24-25-MKP-AUG-2025',
    description: 'PAPER SEEING & REVALUATION_GRIEVANCES-A.Y-24-25-MKP-AUG-2025',
    date: '2025-09-03',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-09-03T07%3A35%3A16.203Z-PAPER%20SEEING%20AND%20REVALUATION_GRIEVANCES-2024-2025-MKP-AUG-2025.pdf'
  },
  {
    title: 'Re-Makeup Exam-Sept-2025-Gloden Students-Registration Notice',
    description: 'Re-Makeup Exam-Sept-2025-Gloden Students-Registration Notice',
    date: '2025-09-20',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-09-20T09%3A35%3A48.879Z-Re-Makeup%20Exam-Sept-2025-Gloden%20Students-Registration%20Notice-Combine.pdf'
  },
  {
    title: 'Rescheduling of End Semester Examination (E.S.E)- Theory Courses for S.Y.,T.Y. and Final Year B.Tech Students (A.Y.-2025-2026)',
    description: 'Rescheduling of End Semester Examination (E.S.E)- Theory Courses for S.Y.,T.Y. and Final Year B.Tech Students (A.Y.-2025-2026)',
    date: '2025-09-23',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-09-26T07%3A01%3A32.937Z-ESE%20AY%202025-26%20odd%20sem%20rescheduled.pdf'
  },
  {
    title: '  FINAL TIME TABLE OF RE MAKEUP EXAMINATION (OFFLINE MODE) - OCTOBER- 2025',
    description: '  FINAL TIME TABLE OF RE MAKEUP EXAMINATION (OFFLINE MODE) - OCTOBER- 2025',
    date: '2025-10-01',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2025-10-01T07%3A59%3A35.250Z-RE%20MAKEUP%20TT_OCT%202025_FINAL%20TT%20_01.10.25.pdf'
  },
  {
    title: 'MSE-Rescheduling-Notice-F.Y.B.Tech & F.Y.M.Tech-A.Y.-2025-2026',
    description: 'MSE-Rescheduling-Notice-F.Y.B.Tech & F.Y.M.Tech-A.Y.-2025-2026',
    date: '2025-10-07',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-10-07T06%3A17%3A20.441Z-MSE-Rescheduling-F.Y.B.Tech%20%26%20F.Y.M.Tech-A.Y.-2025-2026.pdf'
  },
  {
    title: 'Notice for Result-Display-MSE-Sept-2025',
    description: 'Notice for Result-Display-MSE-Sept-2025',
    date: '2025-11-01',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-11-01T10%3A52%3A06.382Z-Notice%20for%20Result-Display-MSE-Sept-2025.pdf'
  },
  {
    title: 'MSE_OCT_2025_SY_To_Final Year_Grievance_Notice',
    description: 'MSE_OCT_2025_SY_To_Final Year_Grievance_Notice',
    date: '2025-11-06',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-11-06T04%3A27%3A07.810Z-MSE_OCT_2025_SY_To_Final%20Year_Grievance_Notice.pdf'
  },
  {
    title: 'ESE-Back log Registration ESE-DEC-2025-Odd Sem-A.Y.-2025-2026',
    description: '4.Notice-ESE-Back log Registration ESE-DEC-2025-Odd Sem-A.Y.-2025-2026',
    date: '2025-11-08',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-11-08T04%3A39%3A56.399Z-4.Notice-ESE-Back%20log%20Registration%20ESE-DEC-2025-Odd%20Sem-A.Y.-2025-2026.pdf'
  },
  {
    title: 'FINAL TIME TABLE OF RE-MSE EXAMINATION For T.Y.& Final Year B.TECH (OFFLINE MODE) - NOV 2025',
    description: 'FINAL TIME TABLE OF RE-MSE EXAMINATION For T.Y.& Final Year B.TECH (OFFLINE MODE) - NOV 2025',
    date: '2025-11-07',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-11-08T06%3A05%3A36.164Z-Final%20TT_Re-MSE%20Nov%202025%20TY%20%26%20Final%20yr_%2006.11.25.pdf'
  },
  {
    title: 'Super Late Backlog Registration Notice-ESE-Dec-2025',
    description: 'Super Late Backlog Registration Notice-ESE-Dec-2025 A.Y.-2025-206',
    date: '2025-11-28',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2025-11-28T06%3A31%3A21.590Z-Late%20Backlog%20Registration%20Notice-ESE-Dec-2025.pdf'
  },
  {
    title: 'Notice for Result-Display-MSE-Nov-2025-F.Y.B.Tech & F.Y.M.Tech',
    description: 'Notice for Result-Display-MSE-Nov-2025-F.Y.B.Tech & F.Y.M.Tech (After grievance resolution)',
    date: '2025-12-04',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-12-04T09%3A37%3A01.448Z-11.Notice%20for%20Result-Display-MSE-Nov-2025-F.Y.B.Tech%20%26%20F.Y.M.Tech.pdf'
  },
  {
    title: 'Notice for E-Admit Card- Hall Ticket Download-ESE-Dec-2025-Odd Sem',
    description: '12.Notice for E-Admit Card- Hall Ticket Download-ESE-Dec-2025-Odd Semester',
    date: '2025-12-12',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-12-12T06%3A26%3A44.566Z-12.Notice%20for%20E-Admit%20Card-%20Hall%20Ticket%20Download-ESE-Dec-2025-Odd%20Semester.pdf'
  },
  {
    title: 'PAPER SEEING AND REVALUATION_GRIEVANCES-ESE-Dec-2025-Odd Sem-A.Y-2025-26',
    description: 'PAPER SEEING AND REVALUATION_GRIEVANCES-ESE-Dec-2025-Odd Sem-A.Y-2025-26',
    date: '2026-01-21',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2026-01-21T11%3A25%3A32.798Z-14.PAPER%20SEEING%20AND%20REVALUATION_GRIEVANCES-ESE-Dec-2025-Odd%20Sem-A.Y-2025-26.pdf'
  },
  {
    title: 'Notice for Result-Display-ESE-Dec-2025-F.Y. B.Tech To Final Year B.Tech & M.Tech_Odd Sem',
    description: 'Notice for Result-Display-ESE-Dec-2025-F.Y. B.Tech To Final Year B.Tech & M.Tech_Odd Sem',
    date: '2026-02-14',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2026-02-17T06%3A15%3A45.514Z-16.Notice%20for%20Result-Display-ESE-Dec-2025-F.Y.%20B.Tech%20To%20Final%20Year%20B.Tech%20%26%20M.Tech_Odd%20Sem.pdf'
  },
  {
    title: 'Paper Seeing & Grievance- F.Y.B.Tech to Final Year B.Tech & F.Y.M.Tech-MSE-March-April-2026',
    description: '20.Paper Seeing & Grievance- F.Y.B.Tech to Final Year B.Tech & F.Y.M.Tech-MSE-March-April-2026',
    date: '2026-04-23',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2026-04-23T06%3A10%3A05.231Z-20.Paper%20Seeing%20%26%20Grievence-F.Y.B.Tech%20to%20Final%20Year%20B.Tech%20%26%20F.Y.M.Tech-MSE-March-April-2026.pdf'
  },
  {
    title: 'Notice for Result-Display-MSE-March-April-2026- Even Sem F.Y.B.Tech To Final Year B.Tech & F.Y.M.Tech',
    description: 'Notice for Result-Display-MSE-March-April-2026- Even Sem F.Y.B.Tech To Final Year B.Tech & F.Y.M.Tech',
    date: '2026-05-05',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2026-05-05T06%3A52%3A30.544Z-22.Notice%20for%20Result-Display-MSE-March-April-2026-F.Y.B.Tech%20To%20Final%20Year%20B.Tech%20%26%20F.Y.M.Tech.pdf'
  },
  {
    title: '23.Notice-ESE-Back log Registration ESE-June-2026-Even Sem-A.Y.-2025-2026',
    description: '23.Notice-ESE-Back log Registration ESE-June-2026-Even Sem-A.Y.-2025-2026',
    date: '2026-05-06',
    fileUrl: 'https://kitcoek.s3.ap-south-1.amazonaws.com/notices/2026-05-06T03%3A55%3A27.710Z-23.Notice-ESE-Back%20log%20Registration%20ESE-June-2026-Even%20Sem-A.Y.-2025-2026.pdf'
  },
  {
    title: '24.Update Regarding Backlog Course Reg. Notice-ESE-Back log Registration ESE-June-2026-Even Sem-A.Y.-2025-2026 - ',
    description: '24.Update Regarding Backlog Course Reg. Notice-ESE-Back log Registration ESE-June-2026-Even Sem-A.Y.-2025-2026 - ',
    date: '2026-05-12',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2026-05-12T07%3A20%3A18.433Z-24.Notice-ESE-Back%20log%20Registration%20ESE-June-2026-Even%20Sem-A.Y.-2025-2026%20-%20update%20Regarding%20Backlog%20Reg.%20Notice.pdf'
  },
  {
    title: '19.NOTICE-ISE Marks-Even Sem-A.Y.-2025-2026',
    description: '19.NOTICE-ISE Marks-Even Sem-A.Y.-2025-2026-updated',
    date: '2026-04-09',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2026-05-27T07%3A39%3A19.173Z-19.NOTICE-ISE%20Marks-Even%20Sem-A.Y.-2025-2026-updated.pdf'
  },
  {
    title: '25.PAPER SEEING AND REVALUATION_GRIEVANCES-ESE-June-2026-Even Sem-A.Y-2025-26-Final Year',
    description: '25.PAPER SEEING AND REVALUATION_GRIEVANCES-ESE-June-2026-Even Sem-A.Y-2025-26-New-Process-Final Year',
    date: '2026-06-16',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2026-06-16T06%3A14%3A51.384Z-25.PAPER%20SEEING%20AND%20REVALUATION_GRIEVANCES-ESE-June-2026-Even%20Sem-A.Y-2025-26-New-Process-Final%20Year.pdf'
  },
  {
    title: '27.Notice for Result-Display-ESE-June-2026-To Final Year B.Tech_Even-Sem-8',
    description: '27.Notice for Result-Display-ESE-June-2026-To Final Year B.Tech_Even-Sem-8',
    date: '2026-06-20',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2026-06-20T11%3A36%3A55.755Z-27.Notice%20for%20Result-Display-ESE-June-2026-To%20Final%20Year%20B.Tech_Even-Sem%20-.pdf'
  },
  {
    title: 'SHIVAJI UNIVERSITY 63rd CONVOVATION 2026 NOTICE',
    description: 'SHIVAJI UNIVERSITY 63rd CONVOVATION 2026 NOTICE',
    date: '2026-07-03',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2026-07-03T10%3A45%3A18.328Z-WhatsApp%20Image%202026-06-28%20at%208.51.39%20AM.jpeg'
  },
  {
    title: 'CHANGE OF BRANCH WITHIN THE INSTITUTE (2026-2027) ',
    description: 'CHANGE OF BRANCH WITHIN THE INSTITUTE (2026-2027) ',
    date: '2026-07-11',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2026-07-13T07%3A50%3A37.214Z-Branch%20Change%20Notice%20A.Y%20%202025-26.pdf'
  },
  {
    title: 'PAPER SEEING AND REVALUATION_GRIEVANCES-ESE-June-2026-Even Sem-A.Y-2025-26-F.Y.B.Tech',
    description: 'PAPER SEEING AND REVALUATION_GRIEVANCES-ESE-June-2026-Even Sem-A.Y-2025-26-New-Process-F.Y.B.Tech',
    date: '2026-07-15',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2026-07-15T06%3A50%3A45.328Z-28.PAPER%20SEEING%20AND%20REVALUATION_GRIEVANCES-ESE-June-2026-Even%20Sem-A.Y-2025-26-New-Process-F.Y.B.Tech.pdf'
  },
  {
    title: '28.PAPER SEEING AND REVALUATION_GRIEVANCES-ESE-June-2026-Even Sem-A.Y-2025-26-New-Process',
    description: 'PAPER SEEING AND REVALUATION_GRIEVANCES-ESE-June-2026-Even F.Y.B.Tech (CSBS Only), S.Y. B.Tech, T.Y.B.Tech , Final Year B.Tech (7 Sem Only) & F.Y.M.Tech students',
    date: '2026-07-22',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2026-07-22T11%3A38%3A52.125Z-28.PAPER%20SEEING%20AND%20REVALUATION_GRIEVANCES-ESE-June-2026-Even%20Sem-A.Y-2025-26-New-Process-S.Y.B.Tech%20to%20T.Y.B.Tech.pdf'
  }
];

async function seed(strapi) {
  seedLog(strapi, 'Seeding ExamCell Exam Notices...');

  const examCell = await strapi.documents(UID).findFirst();

  if (!examCell) {
    seedLog(strapi, '  ExamCell record not found. Creating with Exam Notices data...');
    await strapi.documents(UID).create({
      data: {
        examNotices: EXAM_NOTICE_ENTRIES,
      },
    });
    seedLog(strapi, '  Exam Notices seeded (new ExamCell record).');
    return;
  }

  if (examCell.examNotices && examCell.examNotices.length > 0) {
    seedLog(strapi, '  Exam Notices already present. Skipping.');
    return;
  }

  await strapi.documents(UID).update({
    documentId: examCell.documentId,
    data: {
      examNotices: EXAM_NOTICE_ENTRIES,
    },
  });

  seedLog(strapi, '  Exam Notices seeded successfully.');
}

module.exports = { seed, EXAM_NOTICE_ENTRIES };
