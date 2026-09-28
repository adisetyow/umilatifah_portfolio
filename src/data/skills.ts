import type { SkillCategory } from './types';

export const skillCategories: SkillCategory[] = [
  {
    titleKey: 'skills.core',
    skills: [
      { name: { en: 'Industrial Process Optimization', id: 'Optimalisasi Proses Industri' }, level: 90 },
      { name: { en: 'Lean Manufacturing', id: 'Manufaktur Rampimg' }, level: 85 },
      { name: { en: 'Quality Control & Assurance', id: 'Pengendalian & Jaminan Mutu' }, level: 88 },
      { name: { en: 'Supply Chain Management', id: 'Manajemen Rantai Pasok' }, level: 82 },
      { name: { en: 'Production Planning & Inventory Control', id: 'Perencanaan Produksi & Pengendalian Persediaan' }, level: 85 },
      { name: { en: 'Data Analysis', id: 'Analisis Data' }, level: 87 },
      { name: { en: 'Operations Research', id: 'Riset Operasi' }, level: 80 },
      { name: { en: 'Project Management', id: 'Manajemen Proyek' }, level: 84 },
    ],
  },
  {
    titleKey: 'skills.tools',
    skills: [
      { name: { en: 'Microsoft Excel (Advanced)', id: 'Microsoft Excel (Mahir)' }, level: 92 },
      { name: { en: 'Microsoft Project', id: 'Microsoft Project' }, level: 78 },
      { name: { en: 'Minitab', id: 'Minitab' }, level: 82 },
      { name: { en: 'AutoCAD', id: 'AutoCAD' }, level: 75 },
      { name: { en: 'Python (Data Analysis)', id: 'Python (Analisis Data)' }, level: 73 },
      { name: { en: 'SAP (Basic)', id: 'SAP (Dasar)' }, level: 65 },
      { name: { en: 'Power BI', id: 'Power BI' }, level: 70 },
      { name: { en: 'Visio & Flowcharting', id: 'Visio & Diagram Alur' }, level: 85 },
    ],
  },
];
