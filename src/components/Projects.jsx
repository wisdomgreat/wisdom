import React, { useState, useMemo } from 'react';
import {
  Search,
  Globe,
  ExternalLink,
  Eye,
  X
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';

export default function Projects({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'Platforms & SaaS',
    'AI & Automation',
    'FinTech & LegalTech',
    'Media & Web Apps'
  ];

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      const matchesCat = activeCategory === 'All' || project.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCat;

      const matchesQuery =
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.domain.toLowerCase().includes(q) ||
        project.architecture.some((tech) => tech.toLowerCase().includes(q)) ||
        project.highlights.some((h) => h.toLowerCase().includes(q));

      return matchesCat && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="projects" className="scroll-mt-24 space-y-8">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[var(--color-rule)] pb-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-ink)]">
            Production Platforms and Builds
          </h2>
          <p className="text-sm text-[var(--color-muted)] mt-1">
            Ten live SaaS portals, civic tech initiatives, and validated automated systems.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full lg:w-80">
          <Search className="w-4 h-4 text-[var(--color-muted)] absolute left-3.5 top-1/2 -translate-y-1/2" aria-hidden="true" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search stack, domain or title..."
            className="w-full pl-10 pr-10 py-2 rounded-[var(--radius-pill)] text-sm border border-[var(--color-rule)] bg-[var(--color-paper-2)] text-[var(--color-ink)] placeholder:text-[var(--color-muted)] focus:border-[var(--color-cool)] outline-none transition-colors duration-150"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[var(--color-muted)] hover:text-[var(--color-ink)]"
              aria-label="Clear search"
            >
              <X className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          )}
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => {
            const active = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-[var(--radius-pill)] text-xs transition-colors duration-150 border whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] ${
                  active
                    ? 'bg-[var(--color-accent)] text-[var(--color-accent-ink)] font-semibold border-[var(--color-accent)]'
                    : 'bg-[var(--color-paper-2)] border-[var(--color-rule)] text-[var(--color-ink-2)] hover:border-[var(--color-rule-2)]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <span className="text-xs text-[var(--color-muted)]">
          {filteredProjects.length} of {PROJECTS_DATA.length} systems
        </span>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="p-10 text-center rounded-[var(--radius-card)] border border-[var(--color-rule)] bg-[var(--color-paper-2)] text-sm text-[var(--color-muted)]">
          No matching architectures or platforms found for &quot;{searchQuery}&quot;.
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveCategory('All');
            }}
            className="block mx-auto mt-2 text-xs text-[var(--color-accent)] underline underline-offset-4"
          >
            Reset all filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-[var(--radius-card)] border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-6 flex flex-col justify-between hover:border-[var(--color-rule-2)] transition-colors duration-150"
            >
              <div className="space-y-4">
                {/* Top Metadata Row */}
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2 py-0.5 rounded-[var(--radius-pill)] text-xs font-medium text-[var(--color-accent)] bg-[var(--color-accent-soft)] border border-[var(--color-rule)]">
                    {project.badge}
                  </span>
                  <span className="text-xs text-[var(--color-muted)]">
                    {project.category}
                  </span>
                </div>

                {/* Title & Domain */}
                <div>
                  <h3 className="text-lg font-bold tracking-tight text-[var(--color-ink)]">
                    {project.title}
                  </h3>
                  <div className="text-xs text-[var(--color-cool)] mt-1 flex items-center gap-1.5 font-mono">
                    <Globe className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span className="truncate">{project.domain}</span>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--color-muted)] hover:text-[var(--color-ink)] ml-1"
                        title="Visit live site"
                      >
                        <ExternalLink className="w-3 h-3" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed text-[var(--color-muted)] line-clamp-3">
                  {project.description}
                </p>

                {/* Bullet Highlights */}
                <ul className="space-y-1.5 pt-1 text-xs text-[var(--color-ink-2)]">
                  {project.highlights.map((hl, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[var(--color-accent)] shrink-0">+</span>
                      <span className="line-clamp-2">{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Architecture Stack & Inspect Trigger */}
              <div className="pt-4 mt-5 border-t border-[var(--color-rule)] space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.architecture.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-[var(--radius-pill)] text-xs border border-[var(--color-rule)] bg-[var(--color-paper)] text-[var(--color-muted)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-1 text-xs">
                  <span className="inline-flex items-center gap-1.5 text-[var(--color-accent)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                    <span className="truncate">{project.status}</span>
                  </span>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-cool)] hover:text-[var(--color-ink)] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
                  >
                    <Eye className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Inspect</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
