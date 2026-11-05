import React from 'react';
import { Layers, CheckCircle2 } from 'lucide-react';
import { CORE_PILLARS } from '../data/portfolioData';

export default function Pillars({ darkMode }) {
  return (
    <section id="pillars" className="scroll-mt-24 space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 flex items-center gap-2">
            <Layers className="w-4 h-4" />
            <span>TDWAS Technologies • Practice Areas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-2">
            Four Pillars of Executive & Technical Delivery
          </h2>
        </div>
        <p className={`max-w-md text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          Combining enterprise risk governance with bare-metal systems engineering and modern full-stack AI
          execution.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {CORE_PILLARS.map((pillar) => {
          const IconComponent = pillar.icon;
          const isEmerald = pillar.accent === 'emerald';

          return (
            <div
              key={pillar.id}
              className={`group p-1.5 rounded-[1.5rem] border transition-all duration-300 ${
                darkMode
                  ? 'bg-slate-900/40 border-slate-800/80 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-950/20'
                  : 'bg-slate-100/60 border-slate-200/80 hover:border-emerald-500 shadow-sm'
              }`}
            >
              <div
                className={`h-full rounded-[1.25rem] p-6 sm:p-7 flex flex-col justify-between transition-colors ${
                  darkMode ? 'bg-[#0D1320]' : 'bg-white'
                }`}
              >
                <div className="space-y-4">
                  {/* Header Row */}
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center border shadow-inner ${
                        isEmerald
                          ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                          : 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400'
                      }`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span
                      className={`text-xs font-mono px-3 py-1 rounded-full border ${
                        darkMode
                          ? 'bg-slate-900 border-slate-800 text-slate-300'
                          : 'bg-slate-100 border-slate-200 text-slate-700'
                      }`}
                    >
                      {pillar.subtitle}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-xl font-bold tracking-tight group-hover:text-emerald-400 transition-colors">
                      {pillar.title}
                    </h3>
                    <p
                      className={`mt-2.5 text-sm leading-relaxed ${
                        darkMode ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      {pillar.description}
                    </p>
                  </div>

                  {/* Key Metrics Callouts */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2">
                    {pillar.metrics.map((m) => (
                      <div
                        key={m}
                        className={`px-3 py-2 rounded-xl text-xs font-mono border flex items-center gap-1.5 ${
                          darkMode
                            ? 'bg-slate-950/60 border-slate-800/90 text-slate-300'
                            : 'bg-slate-50 border-slate-200 text-slate-700'
                        }`}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="truncate">{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-6 mt-6 border-t border-slate-800/40">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2.5 py-0.5 rounded-md text-[11px] font-mono ${
                        darkMode
                          ? 'bg-slate-950 text-slate-400 border border-slate-800/80'
                          : 'bg-slate-100 text-slate-600 border border-slate-200'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
