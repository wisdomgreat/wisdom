import React, { useState } from 'react';
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
  const [viewMode, setViewMode] = useState('canvas');

  return (
    <section id="projects" className="band band-sheet scroll-mt-20">
      <div className="container space-y-10">
        <div className="max-w-[34rem] space-y-3">
          <h2 className="text-[clamp(2rem,3.2vw,2.75rem)] leading-[1.1] text-[var(--color-ink)]">Selected work</h2>
          <p className="text-[1.0625rem] leading-relaxed text-[var(--color-muted)]">
            Fourteen systems, laid out the way I work on them. Drag to look around, and click a frame to open it.
          </p>
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

        <button
          type="button"
          onClick={() => setViewMode(viewMode === 'canvas' ? 'list' : 'canvas')}
          className="h-11 px-5 rounded-[var(--radius-pill)] text-[0.9375rem] font-medium border border-[var(--color-rule)] bg-[var(--color-paper-2)] text-[var(--color-ink)] shadow-[var(--shadow-card)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
        >
          {viewMode === 'canvas' ? 'See all work' : 'Back to the canvas'}
        </button>

        <div className="pt-10 space-y-4">
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
