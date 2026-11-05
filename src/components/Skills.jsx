import React from 'react';
import { Cpu } from 'lucide-react';
import { SKILL_MATRIX } from '../data/portfolioData';

export default function Skills({ darkMode }) {
  return (
    <section id="skills" className="scroll-mt-24 space-y-8">
      <div>
        <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 flex items-center gap-2">
          <Cpu className="w-4 h-4" />
          <span>Verified Technical Capabilities</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-2">
          Toolchain, Security & Engineering Matrix
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {SKILL_MATRIX.map((group) => {
          const GroupIcon = group.icon;
          return (
            <div
              key={group.category}
              className={`p-1.5 rounded-[1.5rem] border transition-all ${
                darkMode
                  ? 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700'
                  : 'bg-slate-100/60 border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              <div
                className={`h-full rounded-[1.25rem] p-6 space-y-6 ${
                  darkMode ? 'bg-[#0D1320]' : 'bg-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
                    <GroupIcon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-lg leading-snug">{group.category}</h3>
                </div>

                <div className="space-y-4">
                  {group.items.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium">{skill.name}</span>
                        <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                          {skill.tag}
                        </span>
                      </div>
                      <div
                        className={`w-full h-2 rounded-full overflow-hidden ${
                          darkMode ? 'bg-slate-900' : 'bg-slate-100'
                        }`}
                      >
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400 transition-all duration-700"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
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
