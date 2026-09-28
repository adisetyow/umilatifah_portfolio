import type { Project } from './types';

export const projects: Project[] = [
  {
    id: 'p1',
    title: {
      en: 'Lean Manufacturing Implementation in Assembly Line',
      id: 'Implementasi Lean Manufacturing pada Lini Perakitan',
    },
    category: { en: 'Final Year Project', id: 'Proyek Akhir' },
    year: '2024',
    description: {
      en: 'Applied value stream mapping and 5S methodology to reduce cycle time and eliminate seven wastes in a furniture assembly line.',
      id: 'Menerapkan value stream mapping dan metodologi 5S untuk mengurangi waktu siklus dan mengeliminasi tujuh pemborosan pada lini perakitan furnitur.',
    },
    details: {
      en: 'Conducted a comprehensive time study across 12 workstations, identified bottlenecks using value stream mapping, and redesigned the layout. Implemented 5S workplace organization and standardized work procedures. Created kanban system for material replenishment.',
      id: 'Melakukan studi waktu komprehensif di 12 stasiun kerja, mengidentifikasi hambatan menggunakan value stream mapping, dan mendesain ulang tata letak. Menerapkan organisasi tempat kerja 5S dan prosedur kerja standar. Membuat sistem kanban untuk pemenuhan material.',
    },
    outcome: {
      en: 'Reduced cycle time by 23%, increased throughput by 18%, and improved first-pass yield from 89% to 96%.',
      id: 'Mengurangi waktu siklus sebesar 23%, meningkatkan throughput sebesar 18%, dan meningkatkan first-pass yield dari 89% menjadi 96%.',
    },
    skills: ['Lean Manufacturing', 'VSM', '5S', 'Time Study', 'Kanban'],
  },
  {
    id: 'p2',
    title: {
      en: 'Supply Chain Network Optimization Study',
      id: 'Studi Optimasi Jaringan Rantai Pasok',
    },
    category: { en: 'Research Project', id: 'Proyek Penelitian' },
    year: '2023',
    description: {
      en: 'Developed a mixed-integer linear programming model to optimize distribution network design for a regional FMCG company.',
      id: 'Mengembangkan model pemrograman linear bilangan bulat campuran untuk mengoptimalkan desain jaringan distribusi perusahaan FMCG regional.',
    },
    details: {
      en: 'Formulated a MILP model to determine optimal warehouse locations and allocation of demand points. Used Python with PuLP solver. Analyzed sensitivity to transportation costs and demand variability. Compared results with current network configuration.',
      id: 'Merumuskan model MILP untuk menentukan lokasi gudang optimal dan alokasi titik permintaan. Menggunakan Python dengan solver PuLP. Menganalisis sensitivitas terhadap biaya transportasi dan variabilitas permintaan. Membandingkan hasil dengan konfigurasi jaringan saat ini.',
    },
    outcome: {
      en: 'Identified potential 15% reduction in total logistics cost and 22% improvement in delivery lead time.',
      id: 'Mengidentifikasi potensi pengurangan 15% total biaya logistik dan perbaikan 22% waktu pengiriman.',
    },
    skills: ['Operations Research', 'MILP', 'Python', 'Supply Chain', 'Logistics'],
  },
  {
    id: 'p3',
    title: {
      en: 'Quality Improvement with Six Sigma DMAIC',
      id: 'Perbaikan Mutu dengan Six Sigma DMAIC',
    },
    category: { en: 'Internship Project', id: 'Proyek Magang' },
    year: '2023',
    description: {
      en: 'Led a DMAIC project to reduce defect rate in a plastic injection molding process during industrial internship.',
      id: 'Memimpin proyek DMAIC untuk mengurangi tingkat cacat pada proses injeksi plastik selama magang industri.',
    },
    details: {
      en: 'Defined the problem scope, measured current defect rate (8.2%), analyzed root causes using fishbone diagram and Pareto analysis. Implemented corrective actions including machine parameter optimization and operator training. Established control charts for ongoing monitoring.',
      id: 'Menentukan ruang lingkup masalah, mengukur tingkat cacat saat ini (8,2%), menganalisis akar penyebab menggunakan diagram fishbone dan analisis Pareto. Menerapkan tindakan korektif termasuk optimasi parameter mesin dan pelatihan operator. Menetapkan control chart untuk pemantauan berkelanjutan.',
    },
    outcome: {
      en: 'Reduced defect rate from 8.2% to 2.1%, saving approximately Rp 45M per quarter in scrap costs.',
      id: 'Mengurangi tingkat cacat dari 8,2% menjadi 2,1%, menghemat sekitar Rp 45 juta per kuartal dalam biaya scrap.',
    },
    skills: ['Six Sigma', 'DMAIC', 'Minitab', 'SPC', 'Root Cause Analysis'],
  },
  {
    id: 'p4',
    title: {
      en: 'Production Planning and Inventory Control System',
      id: 'Sistem Perencanaan Produksi & Pengendalian Persediaan',
    },
    category: { en: 'Course Project', id: 'Proyek Mata Kuliah' },
    year: '2022',
    description: {
      en: 'Designed an MRP-based production planning system for a make-to-order manufacturing company using Excel and VBA.',
      id: 'Merancang sistem perencanaan produksi berbasis MRP untuk perusahaan manufaktur make-to-order menggunakan Excel dan VBA.',
    },
    details: {
      en: 'Developed a Material Requirements Planning (MRP) spreadsheet with automated BOM explosion, lot-sizing rules (EOQ, POQ), and safety stock calculations. Integrated demand forecasting using moving average and exponential smoothing. Created dashboard for production scheduling visualization.',
      id: 'Mengembangkan spreadsheet Material Requirements Planning (MRP) dengan ledakan BOM otomatis, aturan lot-sizing (EOQ, POQ), dan perhitungan safety stock. Mengintegrasikan peramalan permintaan menggunakan moving average dan exponential smoothing. Membuat dashboard untuk visualisasi penjadwalan produksi.',
    },
    outcome: {
      en: 'Reduced stockouts by 40% and lowered average inventory holding cost by 17% in simulation testing.',
      id: 'Mengurangi stockout sebesar 40% dan menurunkan rata-rata biaya penyimpanan persediaan sebesar 17% dalam pengujian simulasi.',
    },
    skills: ['MRP', 'PPIC', 'Excel/VBA', 'Forecasting', 'EOQ'],
  },
  {
    id: 'p5',
    title: {
      en: 'Ergonomic Workplace Assessment and Redesign',
      id: 'Penilaian & Redesain Tempat Kerja Ergonomis',
    },
    category: { en: 'Course Project', id: 'Proyek Mata Kuliah' },
    year: '2022',
    description: {
      en: 'Conducted ergonomic assessment of a packaging workstation using RULA and REBA methods, then proposed redesign recommendations.',
      id: 'Melakukan penilaian ergonomi stasiun kerja pengemasan menggunakan metode RULA dan REBA, kemudian mengusulkan rekomendasi redesain.',
    },
    details: {
      en: 'Performed physical assessment using Rapid Upper Limb Assessment (RULA) and Rapid Entire Body Assessment (REBA) scoring. Identified high-risk postures and proposed workstation modifications including adjustable table height, tool repositioning, and anti-fatigue matting.',
      id: 'Melakukan penilaian fisik menggunakan skor Rapid Upper Limb Assessment (RULA) dan Rapid Entire Body Assessment (REBA). Mengidentifikasi postur berisiko tinggi dan mengusulkan modifikasi stasiun kerja termasuk tinggi meja yang dapat disesuaikan, reposisi alat, dan anti-fatigue matting.',
    },
    outcome: {
      en: 'Reduced RULA score from 7 to 3 and REBA score from 9 to 4, significantly lowering musculoskeletal risk.',
      id: 'Mengurangi skor RULA dari 7 menjadi 3 dan skor REBA dari 9 menjadi 4, secara signifikan menurunkan risiko muskuloskeletal.',
    },
    skills: ['Ergonomics', 'RULA', 'REBA', 'Workplace Design'],
  },
  {
    id: 'p6',
    title: {
      en: 'Capacity Planning Simulation for Automotive Parts Plant',
      id: 'Simulasi Perencanaan Kapasitas Pabrik Komponen Otomotif',
    },
    category: { en: 'Research Project', id: 'Proyek Penelitian' },
    year: '2023',
    description: {
      en: 'Built a discrete-event simulation model to evaluate capacity expansion alternatives for an automotive parts manufacturing facility.',
      id: 'Membangun model simulasi discrete-event untuk mengevaluasi alternatif ekspansi kapasitas fasilitas manufaktur komponen otomotif.',
    },
    details: {
      en: 'Developed a discrete-event simulation using Arena software to model current production line. Tested three expansion scenarios: adding a parallel machine, overtime scheduling, and shift reconfiguration. Analyzed utilization rates, throughput, and bottleneck shifts under each scenario.',
      id: 'Mengembangkan simulasi discrete-event menggunakan perangkat lunak Arena untuk memodelkan lini produksi saat ini. Menguji tiga skenario ekspansi: penambahan mesin paralel, penjadwalan lembur, dan konfigurasi ulang shift. Menganalisis tingkat utilisasi, throughput, dan pergeseran bottleneck di setiap skenario.',
    },
    outcome: {
      en: 'Recommended overtime + shift reconfiguration as most cost-effective, achieving 28% capacity increase at 60% of capital cost.',
      id: 'Merekomendasikan lembur + konfigurasi ulang shift sebagai yang paling efektif, mencapai peningkatan kapasitas 28% dengan 60% biaya modal.',
    },
    skills: ['Simulation', 'Arena', 'Capacity Planning', 'Discrete-Event'],
  },
];
