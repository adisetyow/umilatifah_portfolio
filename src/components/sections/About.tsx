import { Check } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Section } from '@/components/Section';
import type { TranslationKey } from '@/data/translations';

const interestKeys: TranslationKey[] = [
  'about.interest1',
  'about.interest2',
  'about.interest3',
  'about.interest4',
  'about.interest5',
];

export function About() {
  const { t } = useLanguage();
  const paragraphs: TranslationKey[] = ['about.p1', 'about.p2', 'about.p3'];

  return (
    <Section id="about" label={t('about.label')} heading={t('about.heading')}>
      <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
        {/* Text */}
        <div className="lg:col-span-2 space-y-6">
          {paragraphs.map((pKey) => (
            <p key={pKey} className="text-base text-secondary leading-relaxed sm:text-lg">
              {t(pKey)}
            </p>
          ))}
        </div>

        {/* Interests sidebar */}
        <div className="lg:col-span-1">
          <div className="border border-base rounded-sm p-6 bg-secondary/50">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-muted mb-6">
              {t('about.interestsTitle')}
            </h3>
            <ul className="space-y-4">
              {interestKeys.map((key) => (
                <li key={key} className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0 w-5 h-5 border border-strong rounded-sm flex items-center justify-center">
                    <Check className="h-3 w-3" />
                  </div>
                  <span className="text-sm text-secondary">{t(key)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
