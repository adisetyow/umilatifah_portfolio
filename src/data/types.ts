import type { Language } from '@/data/translations';

export type Skill = {
  name: { en: string; id: string };
  level: number;
};

export type SkillCategory = {
  titleKey: 'skills.core' | 'skills.tools';
  skills: Skill[];
};

export type Project = {
  id: string;
  title: { en: string; id: string };
  category: { en: string; id: string };
  year: string;
  description: { en: string; id: string };
  details: { en: string; id: string };
  outcome: { en: string; id: string };
  skills: string[];
};

export type EducationItem = {
  institution: { en: string; id: string };
  degree: { en: string; id: string };
  field: { en: string; id: string };
  period: string;
  gpa: string;
  achievements: { en: string; id: string }[];
};

export type Certification = {
  title: { en: string; id: string };
  issuer: string;
  date: string;
};

export function localized<T extends { en: string; id: string }>(obj: T, lang: Language) {
  return obj[lang];
}
