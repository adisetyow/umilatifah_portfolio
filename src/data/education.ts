import type { EducationItem, Certification } from './types';

export const education: EducationItem[] = [
  {
    institution: {
      en: 'Institut Teknologi Bandung',
      id: 'Institut Teknologi Bandung',
    },
    degree: {
      en: 'Bachelor of Science in Industrial Engineering',
      id: 'Sarjana Teknik Industri',
    },
    field: {
      en: 'Industrial & Systems Engineering',
      id: 'Teknik Industri & Sistem',
    },
    period: '2019 — 2024',
    gpa: '3.78 / 4.00',
    achievements: [
      {
        en: 'Cum Laude graduate, top 10% of the cohort',
        id: 'Lulus Cum Laude, 10% terbaik angkatan',
      },
      {
        en: 'Best Final Project Award — Department of Industrial Engineering',
        id: 'Penghargaan Proyek Akhir Terbaik — Departemen Teknik Industri',
      },
      {
        en: 'Coursework: Production Systems, Operations Research, Quality Engineering, Supply Chain Management, Ergonomics, Project Management, Statistics',
        id: 'Mata Kuliah: Sistem Produksi, Riset Operasi, Teknik Mutu, Manajemen Rantai Pasok, Ergonomi, Manajemen Proyek, Statistika',
      },
    ],
  },
  {
    institution: {
      en: 'SMA Negeri 8 Jakarta',
      id: 'SMA Negeri 8 Jakarta',
    },
    degree: {
      en: 'High School Diploma — Natural Sciences Track',
      id: 'IJazah SMA — Jurusan IPA',
    },
    field: {
      en: 'Science & Mathematics',
      id: 'Sains & Matematika',
    },
    period: '2016 — 2019',
    gpa: '93.5 / 100',
    achievements: [
      {
        en: 'Ranked 3rd in the Science program graduating class',
        id: 'Peringkat 3 jurusan IPA angkatan lulus',
      },
      {
        en: 'National Science Olympiad participant — Mathematics',
        id: 'Peserta Olimpiade Sains Nasional — Matematika',
      },
    ],
  },
];

export const certifications: Certification[] = [
  {
    title: {
      en: 'Lean Six Sigma — Yellow Belt',
      id: 'Lean Six Sigma — Yellow Belt',
    },
    issuer: 'International Association for Six Sigma Certification',
    date: '2024',
  },
  {
    title: {
      en: 'Certified Supply Chain Professional (CSCP) — Candidate',
      id: 'Profesional Rantai Pasok Bersertifikat (CSCP) — Kandidat',
    },
    issuer: 'APICS / ASCM',
    date: '2024',
  },
  {
    title: {
      en: 'Google Data Analytics Professional Certificate',
      id: 'Sertifikat Profesional Analisis Data Google',
    },
    issuer: 'Google / Coursera',
    date: '2023',
  },
  {
    title: {
      en: 'Project Management Foundations',
      id: 'Fondasi Manajemen Proyek',
    },
    issuer: 'LinkedIn Learning',
    date: '2023',
  },
  {
    title: {
      en: 'Occupational Safety & Health (K3) Certification',
      id: 'Sertifikasi Keselamatan & Kesehatan Kerja (K3)',
    },
    issuer: 'Kemnaker RI',
    date: '2023',
  },
  {
    title: {
      en: 'Best Final Project Award',
      id: 'Penghargaan Proyek Akhir Terbaik',
    },
    issuer: 'ITB — Department of Industrial Engineering',
    date: '2024',
  },
];
