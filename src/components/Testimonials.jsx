import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/portfolioData';

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[var(--color-rule)] pb-4">
        <div>
          <div className="font-mono text-[11px] text-[var(--color-muted)] mb-1">
            04 // COLLABORATOR ENDORSEMENTS
          </div>
          <h2 className="text-[clamp(1.75rem,2.8vw,2.5rem)] leading-[1.15] font-medium tracking-[-0.03em] text-[var(--color-ink)]">
            What collaborators say
          </h2>
          <p className="text-sm text-[var(--color-muted)] mt-1 max-w-xl">
            Notes from founders, risk executives, and engineering partners on architecture, reliability, and delivery.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {TESTIMONIALS_DATA.map((item) => (
          <article
            key={item.id}
            className="flex flex-col justify-between rounded-[var(--radius-card)] border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-6 sm:p-7 shadow-[var(--shadow-card)] hover:border-[var(--color-rule-2)] transition-colors duration-150"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-3">
                <Quote
                  className="w-5 h-5 text-[var(--color-accent)] shrink-0"
                  aria-hidden="true"
                />
                <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-[var(--radius-pill)] border border-[var(--color-rule)] bg-[var(--color-paper)] text-[var(--color-muted)]">
                  {item.scope}
                </span>
              </div>

              <blockquote className="text-[0.9375rem] leading-relaxed text-[var(--color-ink-2)] italic">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
            </div>

            <footer className="pt-5 mt-5 border-t border-[var(--color-rule)] flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <div>
                <cite className="not-italic font-medium text-[0.9375rem] text-[var(--color-ink)]">
                  {item.author}
                </cite>
                <div className="text-xs text-[var(--color-muted)]">
                  {item.role} &middot; {item.organization}
                </div>
              </div>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}

