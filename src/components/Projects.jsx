import React, { useState, useMemo } from 'react';
import {
  Code2,
  Search,
  Globe,
  ExternalLink,
  Eye,
  X
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';

export default function Projects({ darkMode, onSelectProject }) {
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
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 flex items-center gap-2">
            <Code2 className="w-4 h-4" />
            <span>Live Ventures, SaaS Platforms & Engineering Builds</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-2">
            Production Ecosystem & Technical Showcase
          </h2>
        </div>

        {/* Search Input */}
        <div className="relative w-full lg:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by stack, domain, or title..."
            className={`w-full pl-10 pr-10 py-2.5 rounded-xl text-sm border outline-none transition-colors ${
              darkMode
                ? 'bg-slate-900/90 border-slate-800 text-slate-100 placeholder:text-slate-500 focus:border-cyan-400'
                : 'bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-cyan-500'
            }`}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-200"
              aria-label="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Interactive Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => {
            const active = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono transition-all border active:scale-95 ${
                  active
                    ? 'bg-emerald-500 text-slate-950 font-bold border-emerald-400 shadow-lg shadow-emerald-500/20'
                    : darkMode
                    ? 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-800'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <span className="text-xs font-mono text-slate-400">
          Showing <strong>{filteredProjects.length}</strong> of {PROJECTS_DATA.length} systems
        </span>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div
          className={`p-12 text-center rounded-2xl border font-mono text-sm ${
            darkMode ? 'bg-slate-900/40 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'
          }`}
        >
          No matching architectures or platforms found for &quot;{searchQuery}&quot;.
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveCategory('All');
            }}
            className="block mx-auto mt-3 text-xs text-emerald-400 underline underline-offset-4"
          >
            Reset all filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group p-1.5 rounded-[1.5rem] border transition-all duration-300 ${
                darkMode
                  ? 'bg-slate-900/40 border-slate-800/80 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-950/20'
                  : 'bg-slate-100/60 border-slate-200 hover:border-cyan-500 shadow-sm'
              }`}
            >
              <div
                className={`h-full rounded-[1.25rem] p-6 flex flex-col justify-between transition-colors ${
                  darkMode ? 'bg-[#0D1320]' : 'bg-white'
                }`}
              >
                <div className="space-y-4">
                  {/* Top Metadata Row */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {project.badge}
                    </span>
                    <span
                      className={`text-[11px] font-mono ${
                        darkMode ? 'text-slate-400' : 'text-slate-500'
                      }`}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Domain */}
                  <div>
                    <h3 className="text-xl font-bold tracking-tight group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="text-xs font-mono text-emerald-400 mt-1 flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{project.domain}</span>
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-emerald-300 ml-1 text-slate-400 hover:text-slate-200"
                          title="Visit live site"
                        >
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    className={`text-sm leading-relaxed line-clamp-3 ${
                      darkMode ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {project.description}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-1.5 pt-1">
                    {project.highlights.map((hl, idx) => (
                      <li
                        key={idx}
                        className={`text-xs flex items-start gap-2 ${
                          darkMode ? 'text-slate-400' : 'text-slate-600'
                        }`}
                      >
                        <span className="text-emerald-400 mt-0.5 shrink-0">▹</span>
                        <span className="line-clamp-2">{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Architecture Stack & Inspect Trigger */}
                <div className="pt-5 mt-5 border-t border-slate-800/50 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.architecture.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2 py-0.5 rounded text-[10px] font-mono ${
                          darkMode
                            ? 'bg-slate-950 text-slate-300 border border-slate-800'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="truncate">{project.status}</span>
                    </span>

                    <button
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 hover:underline underline-offset-4"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
