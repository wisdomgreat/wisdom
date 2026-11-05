import React from 'react';
import { SKILL_MATRIX } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 space-y-8">
      <div className="border-b border-[var(--color-rule)] pb-4">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-ink)]">
          Toolchain and Governance Matrix
        </h2>
        <p className="text-sm text-[var(--color-muted)] mt-1">
          Cybersecurity governance, hybrid cloud virtualization, and full-stack software competencies.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {SKILL_MATRIX.map((group) => {
          const GroupIcon = group.icon;
          return (
            <div
              key={group.category}
              className="rounded-[var(--radius-card)] border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-6 space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-[var(--radius-card)] bg-[var(--color-paper)] border border-[var(--color-rule)] text-[var(--color-accent)] flex items-center justify-center">
                  <GroupIcon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-base leading-snug text-[var(--color-ink)]">{group.category}</h3>
              </div>

              <div className="space-y-4">
                {group.items.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-[var(--color-ink-2)]">{skill.name}</span>
                      <span className="text-[11px] px-2 py-0.5 rounded-[var(--radius-pill)] bg-[var(--color-paper)] text-[var(--color-cool)] border border-[var(--color-rule)]">
                        {skill.tag}
                      </span>
                    </div>
                    <div className="w-full h-1.5 rounded-full overflow-hidden bg-[var(--color-paper)]">
                      <div
                        className="h-full w-full rounded-full bg-[var(--color-accent)] origin-left transition-transform duration-300 motion-reduce:transition-none"
                        style={{ transform: `scaleX(${skill.level / 100})` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
