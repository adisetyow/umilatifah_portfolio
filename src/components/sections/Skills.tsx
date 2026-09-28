import { useLanguage } from '@/context/LanguageContext';
import { Section } from '@/components/Section';
import { skillCategories } from '@/data/skills';
import { localized } from '@/data/types';
import { useReveal } from '@/hooks/useReveal';

export function Skills() {
  const { t, lang } = useLanguage();

  return (
    <Section
      id="skills"
      label={t('skills.label')}
      heading={t('skills.heading')}
      description={t('skills.description')}
    >
      <div className="space-y-12 lg:space-y-16">
        {skillCategories.map((category) => (
          <SkillCategoryBlock
            key={category.titleKey}
            title={t(category.titleKey)}
            skills={category.skills}
            lang={lang}
          />
        ))}
      </div>
    </Section>
  );
}

function SkillCategoryBlock({
  title,
  skills,
  lang,
}: {
  title: string;
  skills: typeof skillCategories[number]['skills'];
  lang: 'en' | 'id';
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
      <h3 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-muted mb-6">
        {title}
      </h3>
      <div className="grid sm:grid-cols-2 gap-x-12 gap-y-5">
        {skills.map((skill, index) => (
          <div key={localized(skill.name, lang)} className="group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-base">{localized(skill.name, lang)}</span>
              <span className="text-xs text-muted tabular-nums">{skill.level}%</span>
            </div>
            <div className="h-1 bg-tertiary rounded-full overflow-hidden">
              <div
                className="h-full bg-current rounded-full transition-all duration-1000 ease-out"
                style={{
                  width: visible ? `${skill.level}%` : '0%',
                  transitionDelay: `${index * 60}ms`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
