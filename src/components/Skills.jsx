import React from 'react';
import { SKILL_MATRIX } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 space-y-8">
      <div className="border-b border-[var(--color-rule)] pb-4">
        <div className="font-mono text-[11px] text-[var(--color-muted)] mb-1">
          06 // TOOLCHAIN & GOVERNANCE MATRIX
        </div>
        <h2 className="text-[clamp(1.75rem,2.8vw,2.5rem)] leading-[1.15] font-medium tracking-[-0.03em] text-[var(--color-ink)]">
          Toolchain and governance matrix
        </h2>
        <p className="text-sm text-[var(--color-muted)] mt-1 max-w-xl">
          Cybersecurity governance, hybrid cloud virtualization, and full-stack software competencies.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {SKILL_MATRIX.map((group) => {
          const GroupIcon = group.icon;
          return (
            <article
              key={group.category}
              className="rounded-[var(--radius-card)] border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-6 space-y-5 shadow-[var(--shadow-card)] flex flex-col justify-between hover:border-[var(--color-rule-2)] transition-colors duration-150"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-[var(--radius-card)] bg-[var(--color-paper)] border border-[var(--color-rule)] text-[var(--color-accent)] flex items-center justify-center shrink-0">
                    <GroupIcon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-medium text-[1.0625rem] leading-snug text-[var(--color-ink)]">{group.category}</h3>
                </div>

                <ul className="divide-y divide-[var(--color-rule)] border-t border-[var(--color-rule)]">
                  {group.items.map((skill) => (
                    <li key={skill.name} className="py-2.5 flex items-center justify-between gap-3 text-xs">
                      <span className="font-medium text-[var(--color-ink-2)] min-w-0 truncate">{skill.name}</span>
                      <span className="font-mono text-[11px] px-2 py-0.5 rounded-[var(--radius-pill)] bg-[var(--color-paper)] text-[var(--color-muted)] border border-[var(--color-rule)] shrink-0">
                        {skill.tag}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
