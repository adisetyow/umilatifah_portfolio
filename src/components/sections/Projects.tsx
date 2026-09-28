import { useState } from 'react';
import { X, ArrowUpRight, Target } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Section } from '@/components/Section';
import { projects } from '@/data/projects';
import { localized } from '@/data/types';
import { useReveal } from '@/hooks/useReveal';

export function Projects() {
  const { t, lang } = useLanguage();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selected = projects.find((p) => p.id === selectedId);

  return (
    <Section
      id="projects"
      label={t('projects.label')}
      heading={t('projects.heading')}
      description={t('projects.description')}
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            lang={lang}
            index={index}
            onView={() => setSelectedId(project.id)}
            viewLabel={t('projects.viewDetails')}
          />
        ))}
      </div>

      {selected && (
        <ProjectModal
          project={selected}
          lang={lang}
          onClose={() => setSelectedId(null)}
          closeLabel={t('projects.closeDetails')}
          outcomeLabel={t('projects.outcome')}
          skillsLabel={t('projects.skills')}
        />
      )}
    </Section>
  );
}

function ProjectCard({
  project,
  lang,
  index,
  onView,
  viewLabel,
}: {
  project: (typeof projects)[number];
  lang: 'en' | 'id';
  index: number;
  onView: () => void;
  viewLabel: string;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`group relative border border-base rounded-sm p-6 hover:border-strong transition-all duration-300 hover:translate-y-[-2px] reveal ${
        visible ? 'is-visible' : ''
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <span className="text-xs text-muted uppercase tracking-wider">
            {localized(project.category, lang)}
          </span>
        </div>
        <span className="text-xs font-medium text-muted tabular-nums">{project.year}</span>
      </div>

      <h3 className="font-display text-lg font-semibold leading-snug mb-3">
        {localized(project.title, lang)}
      </h3>

      <p className="text-sm text-secondary leading-relaxed mb-5 line-clamp-3">
        {localized(project.description, lang)}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.skills.slice(0, 3).map((skill) => (
          <span
            key={skill}
            className="text-xs px-2.5 py-1 border border-base rounded-full text-muted"
          >
            {skill}
          </span>
        ))}
      </div>

      <button
        onClick={onView}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-base hover:opacity-70 transition-opacity"
      >
        {viewLabel}
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </button>
    </div>
  );
}

function ProjectModal({
  project,
  lang,
  onClose,
  closeLabel,
  outcomeLabel,
  skillsLabel,
}: {
  project: (typeof projects)[number];
  lang: 'en' | 'id';
  onClose: () => void;
  closeLabel: string;
  outcomeLabel: string;
  skillsLabel: string;
}) {
  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-base border border-strong rounded-sm max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8 animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between mb-6">
          <div>
            <span className="text-xs text-muted uppercase tracking-wider">
              {localized(project.category, lang)} · {project.year}
            </span>
            <h3 className="font-display text-2xl font-bold leading-snug mt-2">
              {localized(project.title, lang)}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full border border-base text-muted hover:text-base hover:border-strong transition-colors flex-shrink-0"
            aria-label={closeLabel}
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-base text-secondary leading-relaxed">
              {localized(project.details, lang)}
            </p>
          </div>

          <div className="border-l-2 border-strong pl-4">
            <div className="flex items-center gap-2 mb-2">
              <Target className="h-4 w-4 text-muted" />
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted">
                {outcomeLabel}
              </h4>
            </div>
            <p className="text-sm text-base leading-relaxed font-medium">
              {localized(project.outcome, lang)}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">
              {skillsLabel}
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-3 py-1.5 border border-base rounded-full text-secondary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-8 w-full py-3 border border-strong rounded-full text-sm font-semibold hover:bg-secondary transition-colors"
        >
          {closeLabel}
        </button>
      </div>
    </div>
  );
}
