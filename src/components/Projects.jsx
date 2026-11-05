import React, { useState } from 'react';
import { LayoutGrid, List } from 'lucide-react';
import { PROJECTS_DATA, CANVAS_LAYOUT } from '../data/portfolioData';
import SystemsCanvas from './SystemsCanvas';

const WORDMARKS = [
  { name: 'tdwas', href: 'https://tdwas.com' },
  { name: 'Kindred ChMS', href: 'https://kindredchms.com' },
  { name: 'Sterra Wealth', href: 'https://sterrawealth.com' },
  { name: 'KiddoChecker', href: 'https://kids.gvachurch.com' },
  { name: 'NYSA Connect', href: 'https://nysaconnect.ca' },
  { name: 'BWG Life', href: 'https://bwglife.ca' },
  { name: 'Simcoe Connect', href: 'https://simcoeconnect.ca' },
  { name: 'iLeOja', href: 'https://ileoja.ca' },
  { name: 'BradfordFarmer' },
  { name: 'Neon Breach' }
];

export default function Projects({ onSelectProject }) {
  const [viewMode, setViewMode] = useState(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return 'list';
    }
    return 'canvas';
  });

  return (
    <section id="projects" className="band band-sheet scroll-mt-20">
      <div className="container space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="max-w-[34rem] space-y-2">
            <div className="font-mono text-[11px] text-[var(--color-muted)]">
              02 // SYSTEMS CANVAS & SELECTED WORK
            </div>
            <h2 className="text-[clamp(2rem,3.2vw,2.75rem)] leading-[1.1] text-[var(--color-ink)]">
              Selected work
            </h2>
            <p className="text-[1.0625rem] leading-relaxed text-[var(--color-muted)]">
              Fourteen live platforms and risk systems, laid out the way I architect them. Drag to explore, or view as a structured list.
            </p>
          </div>

          {/* View Mode Switcher Pill */}
          <div className="inline-flex items-center p-1 rounded-[var(--radius-pill)] border border-[var(--color-rule)] bg-[var(--color-paper-2)] shadow-[var(--shadow-card)] self-start sm:self-auto shrink-0">
            <button
              type="button"
              onClick={() => setViewMode('canvas')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[var(--radius-pill)] text-xs font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] ${
                viewMode === 'canvas'
                  ? 'bg-[var(--color-ink)] text-[var(--color-paper)]'
                  : 'text-[var(--color-muted)] hover:text-[var(--color-ink)]'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Canvas</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('list')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[var(--radius-pill)] text-xs font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] ${
                viewMode === 'list'
                  ? 'bg-[var(--color-ink)] text-[var(--color-paper)]'
                  : 'text-[var(--color-muted)] hover:text-[var(--color-ink)]'
              }`}
            >
              <List className="w-3.5 h-3.5" aria-hidden="true" />
              <span>List (14)</span>
            </button>
          </div>
        </div>

        {viewMode === 'canvas' ? (
          <SystemsCanvas
            projects={PROJECTS_DATA}
            onSelectProject={onSelectProject}
            onShowList={() => setViewMode('list')}
          />
        ) : (
          <ul className="border-t border-[var(--color-rule)]">
            {PROJECTS_DATA.map((project) => {
              const spot = CANVAS_LAYOUT[project.id] || {};
              return (
                <li key={project.id} className="border-b border-[var(--color-rule)]">
                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className="group w-full grid grid-cols-[96px_minmax(0,1fr)] sm:grid-cols-[136px_minmax(0,1fr)_auto] items-center gap-5 py-4 text-left whitespace-normal focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
                  >
                    <span className="block aspect-[16/10] overflow-hidden rounded-[2px] border border-[var(--color-rule)] bg-[var(--color-paper-3)] group-hover:border-[var(--color-accent)] transition-colors duration-150">
                      {spot.image && (
                        <img src={spot.image} alt="" width="1280" height="800" fetchPriority="high" className="w-full h-full object-cover object-top" />
                      )}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[1.125rem] font-medium tracking-[-0.02em] text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors duration-150">
                        {project.title}
                      </span>
                      <span className="block text-[0.9375rem] text-[var(--color-muted)] mt-0.5 line-clamp-2">{project.headline}</span>
                    </span>
                    <span className="hidden sm:block font-mono text-[0.8125rem] text-[var(--color-muted)]">{spot.kind}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        )}

        <div className="pt-8 space-y-4">
          <p className="text-[0.875rem] text-[var(--color-muted)]">Platforms I have designed and built</p>
          <div className="rounded-[var(--radius-card)] bg-[var(--color-paper)] border border-[var(--color-rule)] px-6 py-6 flex flex-wrap items-center justify-between gap-x-10 gap-y-4">
            {WORDMARKS.map((w) =>
              w.href ? (
                <a
                  key={w.name}
                  href={w.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[1.125rem] font-medium tracking-[-0.03em] text-[var(--color-muted)] no-underline hover:text-[var(--color-ink)] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
                >
                  {w.name}
                </a>
              ) : (
                <span key={w.name} className="text-[1.125rem] font-medium tracking-[-0.03em] text-[var(--color-muted)]">
                  {w.name}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
