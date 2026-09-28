import { GraduationCap, Award } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Section } from '@/components/Section';
import { education, certifications } from '@/data/education';
import { localized } from '@/data/types';
import { useReveal } from '@/hooks/useReveal';

export function Education() {
  const { t, lang } = useLanguage();

  return (
    <Section
      id="education"
      label={t('education.label')}
      heading={t('education.heading')}
      description={t('education.description')}
    >
      <div className="space-y-16">
        {/* Education timeline */}
        <div className="relative">
          <div className="absolute left-0 top-2 bottom-2 w-px" style={{ backgroundColor: 'rgb(var(--border))' }} />
          <div className="space-y-12">
            {education.map((item, index) => (
              <EducationItemBlock key={index} item={item} lang={lang} index={index} />
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Award className="h-5 w-5 text-muted" />
            <h3 className="font-display text-lg font-semibold">{t('certifications.heading')}</h3>
          </div>
          <p className="text-sm text-secondary mb-6 max-w-2xl">{t('certifications.description')}</p>

          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <CertificationCard key={index} cert={cert} lang={lang} index={index} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function EducationItemBlock({
  item,
  lang,
  index,
}: {
  item: (typeof education)[number];
  lang: 'en' | 'id';
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`relative pl-8 lg:pl-12 reveal ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-base border-2 border-strong" />

      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-4 w-4 text-muted" />
          <span className="text-sm font-medium text-muted">{item.period}</span>
        </div>
        <span className="text-sm font-semibold text-base lg:text-right">{item.gpa}</span>
      </div>

      <h3 className="font-display text-xl font-bold mb-1">{localized(item.institution, lang)}</h3>
      <p className="text-base font-medium text-secondary mb-1">{localized(item.degree, lang)}</p>
      <p className="text-sm text-muted mb-4">{localized(item.field, lang)}</p>

      <ul className="space-y-2">
        {item.achievements.map((ach, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-secondary">
            <span className="mt-1.5 w-1 h-1 rounded-full bg-current flex-shrink-0 opacity-50" />
            {localized(ach, lang)}
          </li>
        ))}
      </ul>
    </div>
  );
}

function CertificationCard({
  cert,
  lang,
  index,
}: {
  cert: (typeof certifications)[number];
  lang: 'en' | 'id';
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`flex items-start justify-between gap-4 border border-base rounded-sm p-5 hover:border-strong transition-colors reveal ${
        visible ? 'is-visible' : ''
      }`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="flex items-start gap-3">
        <div className="mt-0.5 w-10 h-10 border border-base rounded-sm flex items-center justify-center flex-shrink-0">
          <Award className="h-5 w-5 text-muted" />
        </div>
        <div>
          <h4 className="text-sm font-semibold text-base leading-snug">
            {localized(cert.title, lang)}
          </h4>
          <p className="text-xs text-muted mt-1">{cert.issuer}</p>
        </div>
      </div>
      <span className="text-xs text-muted tabular-nums flex-shrink-0 mt-1">{cert.date}</span>
    </div>
  );
}
