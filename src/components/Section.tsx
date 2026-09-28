import { useReveal } from '@/hooks/useReveal';
import type { ReactNode } from 'react';

type SectionProps = {
  id: string;
  label: string;
  heading: string;
  description?: string;
  children: ReactNode;
};

export function Section({ id, label, heading, description, children }: SectionProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id={id} className="py-20 sm:py-28 lg:py-32">
      <div ref={ref} className={`mx-auto max-w-6xl px-6 lg:px-8 reveal ${visible ? 'is-visible' : ''}`}>
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-current opacity-30" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              {label}
            </span>
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {heading}
          </h2>
          {description && (
            <p className="mt-4 max-w-2xl text-base text-secondary sm:text-lg leading-relaxed">
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
