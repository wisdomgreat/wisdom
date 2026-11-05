import React, { useState } from 'react';
import { Sprout, Sparkles, Terminal, ChevronRight } from 'lucide-react';
import { BEYOND_TERMINAL_ITEMS } from '../data/portfolioData';

export default function BeyondTerminal({ darkMode, onOpenTerminal }) {
  const [activeHobby, setActiveHobby] = useState(BEYOND_TERMINAL_ITEMS[0]);

  return (
    <section id="personal" className="scroll-mt-24 space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 flex items-center gap-2">
            <Sprout className="w-4 h-4" />
            <span>Beyond the Terminal • Life in Bradford West Gwillimbury</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-2">
            Hydroponics, Audio Storytelling & Field Craft
          </h2>
        </div>
        <p className={`max-w-md text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          Great systems architects don’t only debug code—they cultivate biological systems, tell compelling stories,
          and build with their hands.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Hobby Selector Cards */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
          {BEYOND_TERMINAL_ITEMS.map((item) => {
            const HobbyIcon = item.icon;
            const active = activeHobby.id === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveHobby(item)}
                className={`p-4 rounded-2xl border text-left transition-all flex items-center justify-between gap-3.5 active:scale-99 ${
                  active
                    ? 'bg-emerald-500/15 border-emerald-500 shadow-md'
                    : darkMode
                    ? 'bg-[#0D1320]/80 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border ${
                      active
                        ? 'bg-emerald-500 text-slate-950 border-emerald-400'
                        : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                    }`}
                  >
                    <HobbyIcon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-mono text-cyan-400">{item.badge}</div>
                    <div className="font-bold text-sm truncate">{item.title}</div>
                  </div>
                </div>
                <ChevronRight
                  className={`w-4 h-4 shrink-0 transition-transform ${
                    active ? 'text-emerald-400 translate-x-0.5' : 'text-slate-500'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Active Hobby Spotlight Card */}
        <div className="lg:col-span-7">
          <div
            className={`h-full rounded-2xl border p-6 sm:p-8 flex flex-col justify-between ${
              darkMode
                ? 'bg-gradient-to-br from-[#0D1524] to-[#090D16] border-slate-800'
                : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span>{activeHobby.badge}</span>
              </div>

              <h3 className="text-2xl font-bold">{activeHobby.title}</h3>

              <p
                className={`text-base leading-relaxed ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                {activeHobby.summary}
              </p>

              <div className="space-y-3 pt-2">
                {activeHobby.details.map((detail, i) => (
                  <div
                    key={i}
                    className={`p-3.5 rounded-xl border text-sm flex items-start gap-3 ${
                      darkMode
                        ? 'bg-slate-950/60 border-slate-800/80 text-slate-300'
                        : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    <Sparkles className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800/50 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-400">
              <span>Bradford West Gwillimbury, Simcoe County, ON</span>
              <button
                onClick={onOpenTerminal}
                className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4 flex items-center gap-1"
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>Tip: Run &quot;garden&quot; in the Ctrl+K terminal</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
