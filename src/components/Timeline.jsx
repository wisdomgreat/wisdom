import React from 'react';
import { Printer, CheckCircle2, MapPin } from 'lucide-react';
import { EXPERIENCE_TIMELINE } from '../data/portfolioData';

export default function Timeline({ onOpenResume }) {
  return (
    <section id="experience" className="scroll-mt-24 space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[var(--color-rule)] pb-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-ink)]">
            Professional Trajectory and Fellowships
          </h2>
          <p className="text-sm text-[var(--color-muted)] mt-1">
            Executive consulting, educational leadership, startup acceleration and risk operations.
          </p>
        </div>
        <button
          onClick={onOpenResume}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-[var(--radius-pill)] text-xs font-semibold bg-[var(--color-paper-2)] text-[var(--color-ink-2)] border border-[var(--color-rule-2)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
        >
          <Printer className="w-4 h-4 text-[var(--color-accent)]" aria-hidden="true" />
          <span>Capability statement</span>
        </button>
      </div>

      <div className="relative pl-6 sm:pl-8 border-l border-[var(--color-rule-2)] space-y-6">
        {EXPERIENCE_TIMELINE.map((exp, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Dot */}
            <div className="w-3 h-3 rounded-full border border-[var(--color-accent)] bg-[var(--color-paper)] absolute -left-[31px] sm:-left-[39px] top-2" />

            <div className="rounded-[var(--radius-card)] border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-6 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="px-2.5 py-0.5 rounded-[var(--radius-pill)] text-xs font-medium text-[var(--color-accent)] bg-[var(--color-accent-soft)] border border-[var(--color-rule)]">
                  {exp.period}
                </span>
                <span className="text-xs text-[var(--color-cool)]">{exp.type}</span>
              </div>

              <h3 className="text-lg font-bold text-[var(--color-ink)]">
                {exp.role}
              </h3>
              <div className="text-sm text-[var(--color-muted)] flex flex-wrap items-center gap-2">
                <span className="font-semibold text-[var(--color-ink-2)]">{exp.organization}</span>
                <span>/</span>
                <span className="text-xs flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[var(--color-cool)]" aria-hidden="true" />
                  {exp.location}
                </span>
              </div>

              <ul className="mt-3 space-y-2 text-sm text-[var(--color-muted)]">
                {exp.highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
