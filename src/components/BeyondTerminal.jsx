import React, { useState } from 'react';
import { CheckCircle2, Terminal, ChevronRight } from 'lucide-react';
import { BEYOND_TERMINAL_ITEMS } from '../data/portfolioData';

export default function BeyondTerminal({ onOpenTerminal }) {
  const [activeHobby, setActiveHobby] = useState(BEYOND_TERMINAL_ITEMS[0]);

  return (
    <section id="personal" className="scroll-mt-24 space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[var(--color-rule)] pb-4">
        <div>
          <div className="font-mono text-[11px] text-[var(--color-muted)] mb-1">
            08 // BEYOND THE TERMINAL
          </div>
          <h2 className="text-[clamp(1.75rem,2.8vw,2.5rem)] leading-[1.15] font-medium tracking-[-0.03em] text-[var(--color-ink)]">
            Beyond the terminal
          </h2>
          <p className="text-sm text-[var(--color-muted)] mt-1 max-w-xl">
            Backyard agronomy, Kratky hydroponics, audio storytelling, 4K video and automotive diagnostics.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Hobby Selector Cards */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
          {BEYOND_TERMINAL_ITEMS.map((item) => {
            const HobbyIcon = item.icon;
            const active = activeHobby.id === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveHobby(item)}
                className={`p-3.5 rounded-[var(--radius-card)] border text-left transition-colors duration-150 flex items-center justify-between gap-3 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] motion-reduce:transition-none ${
                  active
                    ? 'bg-[var(--color-paper-3)] border-[var(--color-accent)]'
                    : 'bg-[var(--color-paper-2)] border-[var(--color-rule)] hover:border-[var(--color-rule-2)]'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={`w-10 h-10 rounded-[var(--radius-pill)] flex items-center justify-center shrink-0 border ${
                      active
                        ? 'bg-[var(--color-accent)] text-[var(--color-accent-ink)] border-[var(--color-accent)]'
                        : 'bg-[var(--color-paper)] text-[var(--color-muted)] border-[var(--color-rule)]'
                    }`}
                  >
                    <HobbyIcon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] text-[var(--color-cool)]">{item.badge}</div>
                    <div className="font-semibold text-sm truncate text-[var(--color-ink)]">{item.title}</div>
                  </div>
                </div>
                <ChevronRight
                  className={`w-4 h-4 text-[var(--color-muted)] ${active ? 'text-[var(--color-accent)]' : ''}`}
                  aria-hidden="true"
                />
              </button>
            );
          })}
        </div>

        {/* Active Hobby Spotlight Card */}
        <div className="lg:col-span-7">
          <div className="h-full rounded-[var(--radius-card)] border border-[var(--color-rule-2)] bg-[var(--color-paper-2)] p-6 sm:p-7 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[var(--radius-pill)] text-xs text-[var(--color-accent)] bg-[var(--color-accent-soft)] border border-[var(--color-rule)]">
                <span>{activeHobby.badge}</span>
              </div>

              <h3 className="text-xl font-bold text-[var(--color-ink)]">{activeHobby.title}</h3>

              <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                {activeHobby.summary}
              </p>

              <div className="space-y-2 pt-1">
                {activeHobby.details.map((detail, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-[var(--radius-card)] border border-[var(--color-rule)] bg-[var(--color-paper)] text-sm text-[var(--color-ink-2)] flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="leading-relaxed">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--color-rule)] flex flex-wrap items-center justify-between gap-2 text-xs text-[var(--color-muted)]">
              <span>Ontario, Canada</span>
              <button
                onClick={onOpenTerminal}
                className="text-[var(--color-cool)] hover:underline flex items-center gap-1 font-mono whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] active:opacity-80 disabled:opacity-50"
              >
                <Terminal className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Run garden command</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
