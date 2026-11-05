import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { CORE_PILLARS } from '../data/portfolioData';

export default function Pillars() {
  return (
    <section id="pillars" className="scroll-mt-24 space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[var(--color-rule)] pb-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-ink)]">
            Four Pillars of Delivery
          </h2>
          <p className="text-sm text-[var(--color-muted)] mt-1">
            Enterprise risk governance, bare-metal systems engineering, and modern full-stack AI execution.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {CORE_PILLARS.map((pillar) => {
          const IconComponent = pillar.icon;
          const isEmerald = pillar.accent === 'emerald';

          return (
            <div
              key={pillar.id}
              className="rounded-[var(--radius-card)] border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-6 sm:p-7 flex flex-col justify-between hover:border-[var(--color-rule-2)] transition-colors duration-150"
            >
              <div className="space-y-4">
                {/* Header Row */}
                <div className="flex items-start justify-between gap-4">
                  <div
                    className={`w-11 h-11 rounded-[var(--radius-card)] flex items-center justify-center border border-[var(--color-rule)] ${
                      isEmerald
                        ? 'bg-[var(--color-accent-soft)] text-[var(--color-accent)]'
                        : 'bg-[var(--color-cool-soft)] text-[var(--color-cool)]'
                    }`}
                  >
                    <IconComponent className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-[var(--radius-pill)] border border-[var(--color-rule)] bg-[var(--color-paper)] text-[var(--color-muted)]">
                    {pillar.subtitle}
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-[var(--color-ink)]">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                    {pillar.description}
                  </p>
                </div>

                {/* Key Metrics Callouts */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2">
                  {pillar.metrics.map((m) => (
                    <div
                      key={m}
                      className="px-3 py-2 rounded-[var(--radius-pill)] text-xs border border-[var(--color-rule)] bg-[var(--color-paper)] text-[var(--color-ink-2)] flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0" aria-hidden="true" />
                      <span className="truncate">{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-6 mt-6 border-t border-[var(--color-rule)]">
                {pillar.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-[var(--radius-pill)] text-xs border border-[var(--color-rule)] bg-[var(--color-paper)] text-[var(--color-muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
