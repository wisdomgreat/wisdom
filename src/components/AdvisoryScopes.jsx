import React from 'react';
import {
  CheckCircle2,
  Clock,
  ArrowRight,
  Shield,
  Server,
  Bot
} from 'lucide-react';
import { ADVISORY_SCOPES } from '../data/portfolioData';

export default function AdvisoryScopes({ onSelectScope }) {
  const scopeIcons = {
    'grc-audit': Shield,
    'cloud-infra': Server,
    'ai-automation': Bot
  };

  return (
    <section id="advisory" className="scroll-mt-24 space-y-8">
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[var(--color-rule)] pb-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[var(--radius-pill)] text-xs text-[var(--color-accent)] bg-[var(--color-accent-soft)] border border-[var(--color-rule)] mb-3">
            <Clock className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Structured advisory & delivery scopes</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-ink)]">
            Advisory and Engineering Engagements
          </h2>
          <p className="text-sm text-[var(--color-muted)] mt-1.5 max-w-2xl">
            Defined deliverables, fixed turnaround horizons, and transparent scopes designed for enterprise teams and growing operators.
          </p>
        </div>

        <div className="text-xs text-[var(--color-muted)]">
          <span>Taking select engagements for Q1 and Q2</span>
        </div>
      </div>

      {/* 3-Card Scope Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ADVISORY_SCOPES.map((scope) => {
          const Icon = scopeIcons[scope.id] || Shield;
          return (
            <div
              key={scope.id}
              className="flex flex-col justify-between p-6 rounded-[var(--radius-card)] border border-[var(--color-rule)] bg-[var(--color-paper-2)] hover:border-[var(--color-accent)] transition-colors duration-150 space-y-6"
            >
              <div className="space-y-4">
                {/* Header with Duration Pill */}
                <div className="flex items-center justify-between gap-2">
                  <div className="p-2 rounded-[var(--radius-pill)] bg-[var(--color-paper)] border border-[var(--color-rule)] text-[var(--color-accent)]">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <span className="px-2.5 py-1 rounded-[var(--radius-pill)] text-xs font-mono text-[var(--color-cool)] bg-[var(--color-cool-soft)] border border-[var(--color-rule)]">
                    {scope.duration}
                  </span>
                </div>

                {/* Scope Title & Tagline */}
                <div>
                  <h3 className="text-lg font-bold text-[var(--color-ink)]">
                    {scope.title}
                  </h3>
                  <p className="text-xs text-[var(--color-muted)] mt-1.5 leading-relaxed">
                    {scope.tagline}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="space-y-2.5 pt-2 border-t border-[var(--color-rule)]">
                  <span className="text-xs font-semibold text-[var(--color-ink-2)]">
                    Core deliverables:
                  </span>
                  <ul className="space-y-2">
                    {scope.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-[var(--color-muted)] leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-accent)] mt-0.5 shrink-0" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer: Target Audience & CTA */}
              <div className="pt-4 border-t border-[var(--color-rule)] space-y-3">
                <div className="text-[11px] text-[var(--color-muted)]">
                  <span className="text-[var(--color-ink-2)] font-medium">Ideal for: </span>
                  <span>{scope.idealFor}</span>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectScope(scope)}
                  className="w-full py-2.5 px-3 rounded-[var(--radius-pill)] text-xs font-medium border border-[var(--color-rule)] bg-[var(--color-paper)] text-[var(--color-ink)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors duration-150 flex items-center justify-center gap-1.5 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
                >
                  <span>Scope this engagement</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
