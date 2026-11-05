import React from 'react';
import { Briefcase, Printer, CheckCircle2, MapPin } from 'lucide-react';
import { EXPERIENCE_TIMELINE } from '../data/portfolioData';

export default function Timeline({ darkMode, onOpenResume }) {
  return (
    <section id="experience" className="scroll-mt-24 space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 flex items-center gap-2">
            <Briefcase className="w-4 h-4" />
            <span>Career Trajectory & Fellowships</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-2">
            Executive Leadership, Risk Ops & Instruction
          </h2>
        </div>
        <button
          onClick={onOpenResume}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 transition-all self-start sm:self-auto active:scale-95"
        >
          <Printer className="w-4 h-4" />
          <span>View Printable Capability Statement</span>
        </button>
      </div>

      <div className="relative pl-6 sm:pl-8 border-l-2 border-emerald-500/30 space-y-8">
        {EXPERIENCE_TIMELINE.map((exp, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Dot */}
            <div
              className={`w-4 h-4 rounded-full border-2 border-emerald-400 absolute -left-[31px] sm:-left-[39px] top-2 transition-transform group-hover:scale-125 shadow-lg shadow-emerald-500/30 ${
                darkMode ? 'bg-[#090D16]' : 'bg-white'
              }`}
            />

            <div
              className={`p-1.5 rounded-[1.5rem] border transition-all ${
                darkMode
                  ? 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700'
                  : 'bg-slate-100/60 border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              <div
                className={`rounded-[1.25rem] p-6 sm:p-7 ${
                  darkMode ? 'bg-[#0D1320]' : 'bg-white'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {exp.period}
                  </span>
                  <span className="text-xs font-mono text-cyan-400">{exp.type}</span>
                </div>

                <h3 className="text-xl font-bold mt-3 text-slate-100 dark:text-slate-100 group-hover:text-emerald-400 transition-colors">
                  {exp.role}
                </h3>
                <div
                  className={`text-sm font-medium mt-1 flex flex-wrap items-center gap-2 ${
                    darkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}
                >
                  <span className="font-semibold text-emerald-400">{exp.organization}</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-cyan-400" />
                    {exp.location}
                  </span>
                </div>

                <ul className="mt-4 space-y-2.5">
                  {exp.highlights.map((item, i) => (
                    <li
                      key={i}
                      className={`text-sm flex items-start gap-2.5 leading-relaxed ${
                        darkMode ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
