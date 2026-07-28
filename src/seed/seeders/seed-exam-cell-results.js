//@ts-nocheck

'use strict';

const UID = 'api::exam-cell.exam-cell';
const { seedLog } = require('../seed-utils');

const EXAM_RESULTS_ENTRIES = [
  {
    title: 'FY B.Tech (NEP) Result ISE - Feb-2026',
    description: 'FY B.Tech (NEP) Result ISE - Feb-2026',
    date: '2026-02-18',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2026-02-18T09%3A44%3A22.409Z-FY%20B.Tech%20%28NEP%29%20Result%20ISE%20-%20Feb-2026.pdf'
  },
  {
    title: 'FY M.Tech (NEP) Result ISE - Feb-2026',
    description: 'FY M.Tech (NEP) Result ISE - Feb-2026',
    date: '2026-02-18',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2026-02-18T09%3A45%3A11.623Z-FY%20M.Tech%20%28NEP%29%20Result%20ISE%20-%20Feb-2026.pdf'
  },
  {
    title: 'SY B.Tech Result ISE - Feb-2026',
    description: 'SY B.Tech Result ISE - Feb-2026',
    date: '2026-02-18',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2026-02-18T09%3A45%3A41.899Z-SY%20B.Tech%20Result%20ISE%20-%20Feb-2026.pdf'
  },
  {
    title: 'TY B.Tech Result ISE - Feb-2026',
    description: 'TY B.Tech Result ISE - Feb-2026',
    date: '2026-02-18',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2026-02-18T09%3A46%3A07.800Z-TY%20B.Tech%20Result%20ISE%20-%20Feb-2026.pdf'
  },
  {
    title: 'FY B.Tech Result ESE - Dec-2025',
    description: 'FY B.Tech Result ESE - Dec-2025',
    date: '2026-02-12',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2026-02-12T11%3A40%3A21.898Z-FY%20B.Tech%20Result%20ESE%20-%20Dec-2025.pdf'
  },
  {
    title: 'SY B.Tech Result ESE - Dec-2025',
    description: 'SY B.Tech Result ESE - Dec-2025',
    date: '2026-02-12',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2026-02-12T11%3A41%3A08.288Z-SY%20B.Tech%20Result%20ESE%20-%20Dec-2025.pdf'
  },
  {
    title: 'TY B.Tech Result ESE - Dec-2025',
    description: 'TY B.Tech Result ESE - Dec-2025',
    date: '2026-02-12',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2026-02-12T11%3A41%3A34.605Z-TY%20B.Tech%20Result%20ESE%20-%20Dec-2025.pdf'
  },
  {
    title: 'Final Year B.Tech Result ESE - Dec-2025',
    description: 'Final Year B.Tech Result ESE - Dec-2025',
    date: '2026-02-12',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2026-02-12T11%3A41%3A58.134Z-Final%20Year%20B.Tech%20Result%20ESE%20-%20Dec-2025.pdf'
  },
  {
    title: 'FY M.Tech Result ESE - Dec-2025',
    description: 'FY M.Tech Result ESE - Dec-2025',
    date: '2026-02-12',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2026-02-12T11%3A42%3A20.600Z-FY%20M.Tech%20Result%20ESE%20-%20Dec-2025.pdf'
  },
  {
    title: 'SY M.Tech Result ESE - Dec-2025',
    description: 'SY M.Tech Result ESE - Dec-2025',
    date: '2026-02-12',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2026-02-12T11%3A42%3A43.560Z-SY%20M.Tech%20Result%20ESE%20-%20Dec-2025.pdf'
  },
  {
    title: 'FY B.Tech (NEP) Result MSE - Nov-2025',
    description: 'FY B.Tech (NEP) Result MSE - Nov-2025',
    date: '2025-11-24',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-11-24T10%3A19%3A32.557Z-Result-FY%20B.Tech%20%28NEP%29%20MSE-Nov-2025.pdf'
  },
  {
    title: 'FY M.Tech (NEP) Result MSE - Nov-2025',
    description: 'FY M.Tech (NEP) Result MSE - Nov-2025',
    date: '2025-11-24',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-11-24T10%3A20%3A12.623Z-Result-FY%20M.Tech%20%28NEP%29%20MSE-Nov-2025.pdf'
  },
  {
    title: 'SY B.Tech Result MSE - Nov-2025',
    description: 'SY B.Tech Result MSE - Nov-2025',
    date: '2025-11-24',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-11-24T10%3A20%3A46.922Z-Result-SY%20B.Tech%20MSE-Nov-2025.pdf'
  },
  {
    title: 'TY B.Tech Result MSE - Nov-2025',
    description: 'TY B.Tech Result MSE - Nov-2025',
    date: '2025-11-24',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-11-24T10%3A21%3A12.701Z-Result-TY%20B.Tech%20MSE-Nov-2025.pdf'
  },
  {
    title: 'Final Year B.Tech Result MSE - Nov-2025',
    description: 'Final Year B.Tech Result MSE - Nov-2025',
    date: '2025-11-24',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-11-24T10%3A21%3A40.545Z-Result-Final%20Year%20B.Tech%20MSE-Nov-2025.pdf'
  },
  {
    title: 'FY M.Tech Result MSE - Nov-2025',
    description: 'FY M.Tech Result MSE - Nov-2025',
    date: '2025-11-24',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-11-24T10%3A22%3A04.183Z-Result-FY%20M.Tech%20MSE-Nov-2025.pdf'
  },
  {
    title: 'SY M.Tech Result MSE - Nov-2025',
    description: 'SY M.Tech Result MSE - Nov-2025',
    date: '2025-11-24',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-11-24T10%3A22%3A26.817Z-Result-SY%20M.Tech%20MSE-Nov-2025.pdf'
  },
  {
    title: 'FY B.Tech (NEP) Result MSE - Sept-2025',
    description: 'FY B.Tech (NEP) Result MSE - Sept-2025',
    date: '2025-09-29',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-09-29T10%3A59%3A43.145Z-Result-FY%20B.Tech%20%28NEP%29%20MSE-Sept-2025.pdf'
  },
  {
    title: 'FY M.Tech (NEP) Result MSE - Sept-2025',
    description: 'FY M.Tech (NEP) Result MSE - Sept-2025',
    date: '2025-09-29',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-09-29T11%3A00%3A04.490Z-Result-FY%20M.Tech%20%28NEP%29%20MSE-Sept-2025.pdf'
  },
  {
    title: 'SY B.Tech Result MSE - Sept-2025',
    description: 'SY B.Tech Result MSE - Sept-2025',
    date: '2025-09-29',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-09-29T11%3A00%3A34.815Z-Result-SY%20B.Tech%20MSE-Sept-2025.pdf'
  },
  {
    title: 'TY B.Tech Result MSE - Sept-2025',
    description: 'TY B.Tech Result MSE - Sept-2025',
    date: '2025-09-29',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-09-29T11%3A00%3A56.405Z-Result-TY%20B.Tech%20MSE-Sept-2025.pdf'
  },
  {
    title: 'Final Year B.Tech Result MSE - Sept-2025',
    description: 'Final Year B.Tech Result MSE - Sept-2025',
    date: '2025-09-29',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-09-29T11%3A01%3A20.954Z-Result-Final%20Year%20B.Tech%20MSE-Sept-2025.pdf'
  },
  {
    title: 'FY M.Tech Result MSE - Sept-2025',
    description: 'FY M.Tech Result MSE - Sept-2025',
    date: '2025-09-29',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-09-29T11%3A01%3A44.506Z-Result-FY%20M.Tech%20MSE-Sept-2025.pdf'
  },
  {
    title: 'SY M.Tech Result MSE - Sept-2025',
    description: 'SY M.Tech Result MSE - Sept-2025',
    date: '2025-09-29',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-09-29T11%3A02%3A03.846Z-Result-SY%20M.Tech%20MSE-Sept-2025.pdf'
  },
  {
    title: 'FY B.Tech Result ESE - May-2025',
    description: 'FY B.Tech Result ESE - May-2025',
    date: '2025-07-29',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-07-29T09%3A14%3A37.835Z-Result-FY%20B.Tech%20ESE-May-2025.pdf'
  },
  {
    title: 'FY M.Tech Result ESE - May-2025',
    description: 'FY M.Tech Result ESE - May-2025',
    date: '2025-07-29',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-07-29T09%3A15%3A04.304Z-Result-FY%20M.Tech%20ESE-May-2025.pdf'
  },
  {
    title: 'SY B.Tech Result ESE - May-2025',
    description: 'SY B.Tech Result ESE - May-2025',
    date: '2025-07-29',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-07-29T09%3A15%3A34.479Z-Result-SY%20B.Tech%20ESE-May-2025.pdf'
  },
  {
    title: 'TY B.Tech Result ESE - May-2025',
    description: 'TY B.Tech Result ESE - May-2025',
    date: '2025-07-29',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-07-29T09%3A15%3A58.206Z-Result-TY%20B.Tech%20ESE-May-2025.pdf'
  },
  {
    title: 'Final Year B.Tech Result ESE - May-2025',
    description: 'Final Year B.Tech Result ESE - May-2025',
    date: '2025-07-29',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-07-29T09%3A16%3A21.434Z-Result-Final%20Year%20B.Tech%20ESE-May-2025.pdf'
  },
  {
    title: 'FY M.Tech Result ESE - May-2025',
    description: 'FY M.Tech Result ESE - May-2025',
    date: '2025-07-29',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-07-29T09%3A16%3A42.650Z-Result-FY%20M.Tech%20ESE-May-2025.pdf'
  },
  {
    title: 'SY M.Tech Result ESE - May-2025',
    description: 'SY M.Tech Result ESE - May-2025',
    date: '2025-07-29',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-07-29T09%3A17%3A04.281Z-Result-SY%20M.Tech%20ESE-May-2025.pdf'
  },
  {
    title: 'FY B.Tech Result ISE - April-2025',
    description: 'FY B.Tech Result ISE - April-2025',
    date: '2025-04-22',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-04-22T11%3A16%3A36.060Z-Result-FY%20B.Tech%20ISE-April-2025.pdf'
  },
  {
    title: 'FY M.Tech Result ISE - April-2025',
    description: 'FY M.Tech Result ISE - April-2025',
    date: '2025-04-22',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-04-22T11%3A16%3A58.785Z-Result-FY%20M.Tech%20ISE-April-2025.pdf'
  },
  {
    title: 'SY B.Tech Result ISE - April-2025',
    description: 'SY B.Tech Result ISE - April-2025',
    date: '2025-04-22',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-04-22T11%3A17%3A20.495Z-Result-SY%20B.Tech%20ISE-April-2025.pdf'
  },
  {
    title: 'TY B.Tech Result ISE - April-2025',
    description: 'TY B.Tech Result ISE - April-2025',
    date: '2025-04-22',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-04-22T11%3A17%3A43.692Z-Result-TY%20B.Tech%20ISE-April-2025.pdf'
  },
  {
    title: 'Final Year B.Tech Result ISE - April-2025',
    description: 'Final Year B.Tech Result ISE - April-2025',
    date: '2025-04-22',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-04-22T11%3A18%3A05.265Z-Result-Final%20Year%20B.Tech%20ISE-April-2025.pdf'
  },
  {
    title: 'FY M.Tech Result ISE - April-2025',
    description: 'FY M.Tech Result ISE - April-2025',
    date: '2025-04-22',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-04-22T11%3A18%3A27.513Z-Result-FY%20M.Tech%20ISE-April-2025.pdf'
  },
  {
    title: 'SY M.Tech Result ISE - April-2025',
    description: 'SY M.Tech Result ISE - April-2025',
    date: '2025-04-22',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-04-22T11%3A18%3A48.583Z-Result-SY%20M.Tech%20ISE-April-2025.pdf'
  },
  {
    title: 'FY B.Tech (NEP) Result MSE - March-2025',
    description: 'FY B.Tech (NEP) Result MSE - March-2025',
    date: '2025-03-27',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-03-27T11%3A11%3A14.907Z-Result-FY%20B.Tech%20%28NEP%29%20MSE-March-2025.pdf'
  },
  {
    title: 'FY M.Tech (NEP) Result MSE - March-2025',
    description: 'FY M.Tech (NEP) Result MSE - March-2025',
    date: '2025-03-27',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-03-27T11%3A11%3A38.053Z-Result-FY%20M.Tech%20%28NEP%29%20MSE-March-2025.pdf'
  },
  {
    title: 'SY B.Tech Result MSE - March-2025',
    description: 'SY B.Tech Result MSE - March-2025',
    date: '2025-03-27',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-03-27T11%3A11%3A58.956Z-Result-SY%20B.Tech%20MSE-March-2025.pdf'
  },
  {
    title: 'TY B.Tech Result MSE - March-2025',
    description: 'TY B.Tech Result MSE - March-2025',
    date: '2025-03-27',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-03-27T11%3A12%3A20.437Z-Result-TY%20B.Tech%20MSE-March-2025.pdf'
  },
  {
    title: 'Final Year B.Tech Result MSE - March-2025',
    description: 'Final Year B.Tech Result MSE - March-2025',
    date: '2025-03-27',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-03-27T11%3A12%3A43.533Z-Result-Final%20Year%20B.Tech%20MSE-March-2025.pdf'
  },
  {
    title: 'FY M.Tech Result MSE - March-2025',
    description: 'FY M.Tech Result MSE - March-2025',
    date: '2025-03-27',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-03-27T11%3A13%3A04.552Z-Result-FY%20M.Tech%20MSE-March-2025.pdf'
  },
  {
    title: 'SY M.Tech Result MSE - March-2025',
    description: 'SY M.Tech Result MSE - March-2025',
    date: '2025-03-27',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-03-27T11%3A13%3A24.413Z-Result-SY%20M.Tech%20MSE-March-2025.pdf'
  },
  {
    title: 'FY B.Tech (NEP) Result ISE - Feb-2025',
    description: 'FY B.Tech (NEP) Result ISE - Feb-2025',
    date: '2025-02-17',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-02-17T09%3A54%3A54.913Z-Result-FY%20B.Tech%20%28NEP%29%20ISE-Feb-2025.pdf'
  },
  {
    title: 'FY M.Tech (NEP) Result ISE - Feb-2025',
    description: 'FY M.Tech (NEP) Result ISE - Feb-2025',
    date: '2025-02-17',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-02-17T09%3A55%3A16.974Z-Result-FY%20M.Tech%20%28NEP%29%20ISE-Feb-2025.pdf'
  },
  {
    title: 'SY B.Tech Result ISE - Feb-2025',
    description: 'SY B.Tech Result ISE - Feb-2025',
    date: '2025-02-17',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-02-17T09%3A55%3A39.094Z-Result-SY%20B.Tech%20ISE-Feb-2025.pdf'
  },
  {
    title: 'TY B.Tech Result ISE - Feb-2025',
    description: 'TY B.Tech Result ISE - Feb-2025',
    date: '2025-02-17',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-02-17T09%3A55%3A59.595Z-Result-TY%20B.Tech%20ISE-Feb-2025.pdf'
  },
  {
    title: 'Final Year B.Tech Result ISE - Feb-2025',
    description: 'Final Year B.Tech Result ISE - Feb-2025',
    date: '2025-02-17',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-02-17T09%3A56%3A19.273Z-Result-Final%20Year%20B.Tech%20ISE-Feb-2025.pdf'
  },
  {
    title: 'FY M.Tech Result ISE - Feb-2025',
    description: 'FY M.Tech Result ISE - Feb-2025',
    date: '2025-02-17',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-02-17T09%3A56%3A38.034Z-Result-FY%20M.Tech%20ISE-Feb-2025.pdf'
  },
  {
    title: 'SY M.Tech Result ISE - Feb-2025',
    description: 'SY M.Tech Result ISE - Feb-2025',
    date: '2025-02-17',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-02-17T09%3A56%3A57.108Z-Result-SY%20M.Tech%20ISE-Feb-2025.pdf'
  },
  {
    title: 'FY B.Tech Result ESE - Dec-2024',
    description: 'FY B.Tech Result ESE - Dec-2024',
    date: '2025-02-10',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-02-10T09%3A36%3A33.289Z-Result-FY%20B.Tech%20ESE-Dec-2024.pdf'
  },
  {
    title: 'SY B.Tech Result ESE - Dec-2024',
    description: 'SY B.Tech Result ESE - Dec-2024',
    date: '2025-02-10',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-02-10T09%3A36%3A56.325Z-Result-SY%20B.Tech%20ESE-Dec-2024.pdf'
  },
  {
    title: 'TY B.Tech Result ESE - Dec-2024',
    description: 'TY B.Tech Result ESE - Dec-2024',
    date: '2025-02-10',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-02-10T09%3A37%3A17.132Z-Result-TY%20B.Tech%20ESE-Dec-2024.pdf'
  },
  {
    title: 'Final Year B.Tech Result ESE - Dec-2024',
    description: 'Final Year B.Tech Result ESE - Dec-2024',
    date: '2025-02-10',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-02-10T09%3A37%3A38.375Z-Result-Final%20Year%20B.Tech%20ESE-Dec-2024.pdf'
  },
  {
    title: 'FY M.Tech Result ESE - Dec-2024',
    description: 'FY M.Tech Result ESE - Dec-2024',
    date: '2025-02-10',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-02-10T09%3A37%3A58.955Z-Result-FY%20M.Tech%20ESE-Dec-2024.pdf'
  },
  {
    title: 'SY M.Tech Result ESE - Dec-2024',
    description: 'SY M.Tech Result ESE - Dec-2024',
    date: '2025-02-10',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2025-02-10T09%3A38%3A17.825Z-Result-SY%20M.Tech%20ESE-Dec-2024.pdf'
  },
  {
    title: 'FY B.Tech (NEP) Result MSE - Nov-2024',
    description: 'FY B.Tech (NEP) Result MSE - Nov-2024',
    date: '2024-11-22',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2024-11-22T11%3A02%3A37.811Z-Result-FY%20B.Tech%20%28NEP%29%20MSE-Nov-2024.pdf'
  },
  {
    title: 'FY M.Tech (NEP) Result MSE - Nov-2024',
    description: 'FY M.Tech (NEP) Result MSE - Nov-2024',
    date: '2024-11-22',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2024-11-22T11%3A02%3A59.076Z-Result-FY%20M.Tech%20%28NEP%29%20MSE-Nov-2024.pdf'
  },
  {
    title: 'SY B.Tech Result MSE - Nov-2024',
    description: 'SY B.Tech Result MSE - Nov-2024',
    date: '2024-11-22',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2024-11-22T11%3A03%3A18.640Z-Result-SY%20B.Tech%20MSE-Nov-2024.pdf'
  },
  {
    title: 'TY B.Tech Result MSE - Nov-2024',
    description: 'TY B.Tech Result MSE - Nov-2024',
    date: '2024-11-22',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2024-11-22T11%3A03%3A37.622Z-Result-TY%20B.Tech%20MSE-Nov-2024.pdf'
  },
  {
    title: 'Final Year B.Tech Result MSE - Nov-2024',
    description: 'Final Year B.Tech Result MSE - Nov-2024',
    date: '2024-11-22',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2024-11-22T11%3A03%3A58.296Z-Result-Final%20Year%20B.Tech%20MSE-Nov-2024.pdf'
  },
  {
    title: 'FY M.Tech Result MSE - Nov-2024',
    description: 'FY M.Tech Result MSE - Nov-2024',
    date: '2024-11-22',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2024-11-22T11%3A04%3A17.524Z-Result-FY%20M.Tech%20MSE-Nov-2024.pdf'
  },
  {
    title: 'SY M.Tech Result MSE - Nov-2024',
    description: 'SY M.Tech Result MSE - Nov-2024',
    date: '2024-11-22',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2024-11-22T11%3A04%3A37.887Z-Result-SY%20M.Tech%20MSE-Nov-2024.pdf'
  },
  {
    title: 'FY B.Tech Result ESE - May-2024',
    description: 'FY B.Tech Result ESE - May-2024',
    date: '2024-07-12',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2024-07-12T11%3A22%3A27.399Z-Result-FY%20B.Tech%20ESE-May-2024.pdf'
  },
  {
    title: 'FY M.Tech Result ESE - May-2024',
    description: 'FY M.Tech Result ESE - May-2024',
    date: '2024-07-12',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2024-07-12T11%3A22%3A46.783Z-Result-FY%20M.Tech%20ESE-May-2024.pdf'
  },
  {
    title: 'SY B.Tech Result ESE - May-2024',
    description: 'SY B.Tech Result ESE - May-2024',
    date: '2024-07-12',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2024-07-12T11%3A23%3A07.498Z-Result-SY%20B.Tech%20ESE-May-2024.pdf'
  },
  {
    title: 'TY B.Tech Result ESE - May-2024',
    description: 'TY B.Tech Result ESE - May-2024',
    date: '2024-07-12',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2024-07-12T11%3A23%3A27.430Z-Result-TY%20B.Tech%20ESE-May-2024.pdf'
  },
  {
    title: 'Final Year B.Tech Result ESE - May-2024',
    description: 'Final Year B.Tech Result ESE - May-2024',
    date: '2024-07-12',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2024-07-12T11%3A23%3A49.048Z-Result-Final%20Year%20B.Tech%20ESE-May-2024.pdf'
  },
  {
    title: 'FY M.Tech Result ESE - May-2024',
    description: 'FY M.Tech Result ESE - May-2024',
    date: '2024-07-12',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2024-07-12T11%3A24%3A09.322Z-Result-FY%20M.Tech%20ESE-May-2024.pdf'
  },
  {
    title: 'SY M.Tech Result ESE - May-2024',
    description: 'SY M.Tech Result ESE - May-2024',
    date: '2024-07-12',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2024-07-12T11%3A24%3A27.995Z-Result-SY%20M.Tech%20ESE-May-2024.pdf'
  },
  {
    title: 'FY B.Tech (NEP) Result MSE - April-2024',
    description: 'FY B.Tech (NEP) Result MSE - April-2024',
    date: '2024-04-15',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2024-04-15T10%3A39%3A03.058Z-Result-FY%20B.Tech%20%28NEP%29%20MSE-April-2024.pdf'
  },
  {
    title: 'FY M.Tech (NEP) Result MSE - April-2024',
    description: 'FY M.Tech (NEP) Result MSE - April-2024',
    date: '2024-04-15',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2024-04-15T10%3A39%3A22.334Z-Result-FY%20M.Tech%20%28NEP%29%20MSE-April-2024.pdf'
  },
  {
    title: 'SY B.Tech Result MSE - April-2024',
    description: 'SY B.Tech Result MSE - April-2024',
    date: '2024-04-15',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2024-04-15T10%3A39%3A41.369Z-Result-SY%20B.Tech%20MSE-April-2024.pdf'
  },
  {
    title: 'TY B.Tech Result MSE - April-2024',
    description: 'TY B.Tech Result MSE - April-2024',
    date: '2024-04-15',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2024-04-15T10%3A40%3A01.041Z-Result-TY%20B.Tech%20MSE-April-2024.pdf'
  },
  {
    title: 'Final Year B.Tech Result MSE - April-2024',
    description: 'Final Year B.Tech Result MSE - April-2024',
    date: '2024-04-15',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2024-04-15T10%3A40%3A21.241Z-Result-Final%20Year%20B.Tech%20MSE-April-2024.pdf'
  },
  {
    title: 'FY M.Tech Result MSE - April-2024',
    description: 'FY M.Tech Result MSE - April-2024',
    date: '2024-04-15',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2024-04-15T10%3A40%3A41.334Z-Result-FY%20M.Tech%20MSE-April-2024.pdf'
  },
  {
    title: 'SY M.Tech Result MSE - April-2024',
    description: 'SY M.Tech Result MSE - April-2024',
    date: '2024-04-15',
    fileUrl: 'https://kitcoek.s3.amazonaws.com/notices/2024-04-15T10%3A41%3A01.285Z-Result-SY%20M.Tech%20MSE-April-2024.pdf'
  }
];

async function seed(strapi) {
  seedLog(strapi, 'Seeding ExamCell Exam Results...');

  const examCell = await strapi.documents(UID).findFirst();

  if (!examCell) {
    seedLog(strapi, '  ExamCell record not found. Creating with Exam Results data...');
    await strapi.documents(UID).create({
      data: {
        examResults: EXAM_RESULTS_ENTRIES,
      },
    });
    seedLog(strapi, '  Exam Results seeded (new ExamCell record).');
    return;
  }

  if (examCell.examResults && examCell.examResults.length > 0) {
    seedLog(strapi, '  Exam Results already present. Skipping.');
    return;
  }

  await strapi.documents(UID).update({
    documentId: examCell.documentId,
    data: {
      examResults: EXAM_RESULTS_ENTRIES,
    },
  });

  seedLog(strapi, '  Exam Results seeded successfully.');
}

module.exports = { seed, EXAM_RESULTS_ENTRIES };
