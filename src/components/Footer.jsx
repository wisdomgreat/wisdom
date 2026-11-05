import React from 'react';
import { Shield, Terminal, FileText, ArrowUp } from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer({ darkMode, onOpenTerminal, onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`relative z-10 border-t py-12 transition-colors ${
        darkMode
          ? 'bg-[#060911] border-slate-800/80 text-slate-400'
          : 'bg-slate-900 text-slate-300 border-slate-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5 text-white font-bold text-base sm:text-lg">
              <Shield className="w-5 h-5 text-emerald-400" />
              <span>Wisdom Ikhuoria Salami • TDWAS Technologies (tdwas.com)</span>
            </div>
            <p className="text-xs text-slate-400 max-w-xl leading-relaxed">
              Principal Cybersecurity & GRC Consultant, Hybrid Cloud Systems Architect, and Full-Stack AI Builder.
              Headquartered in Bradford West Gwillimbury, Simcoe County, Ontario. Serving Central Ontario, the GTA, and
              forward-thinking organizations globally.
            </p>
            <div className="flex flex-wrap gap-2.5 text-xs font-mono text-emerald-400 pt-1">
              {['tdwas.com', 'bwglife.ca', 'simcoeconnect.ca', 'ileoja.ca', 'mytechrodeo.com'].map((domain, i) => (
                <React.Fragment key={domain}>
                  <a
                    href={`https://${domain}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline underline-offset-4"
                  >
                    {domain}
                  </a>
                  {i < 4 && <span className="text-slate-600">•</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenTerminal}
              className="px-3.5 py-2 rounded-xl text-xs font-mono bg-slate-800 text-cyan-400 border border-slate-700 hover:border-cyan-400 transition-colors flex items-center gap-1.5 active:scale-95"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Launch CLI (Ctrl+K)</span>
            </button>
            <button
              onClick={onOpenResume}
              className="px-3.5 py-2 rounded-xl text-xs font-mono bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/25 transition-colors flex items-center gap-1.5 active:scale-95"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Capability Brief</span>
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800 border border-slate-700 hover:border-slate-600 transition-colors"
              title="Scroll to top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-2">
          <div>
            © {CURRENT_YEAR} TDWAS Technologies. Engineered with React, Vite & Tailwind CSS.
          </div>
          <div className="text-slate-400">
            Bradford West Gwillimbury • Simcoe County • GTA
          </div>
        </div>
      </div>
    </footer>
  );
}
