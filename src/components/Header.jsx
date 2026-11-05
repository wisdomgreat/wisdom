import React, { useState, useEffect } from 'react';
import {
  Terminal,
  MapPin,
  FileText,
  Command,
  Sun,
  Moon,
  ArrowUpRight,
  Menu,
  X,
  Activity,
  Layers,
  Code2,
  Server,
  Cpu,
  Briefcase,
  Sprout
} from 'lucide-react';

export default function Header({
  darkMode,
  setDarkMode,
  onOpenTerminal,
  onOpenResume,
  onScrollTo
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'America/Toronto',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        }) + ' EST'
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { label: 'Pillars', id: 'pillars', icon: Layers },
    { label: 'Projects & SaaS', id: 'projects', icon: Code2 },
    { label: 'Hybrid Lab', id: 'homelab', icon: Server },
    { label: 'Toolchain', id: 'skills', icon: Cpu },
    { label: 'Timeline', id: 'experience', icon: Briefcase },
    { label: 'Beyond Terminal', id: 'personal', icon: Sprout }
  ];

  const handleNavClick = (id) => {
    onScrollTo(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* TOP TELEMETRY STATUS BAR */}
      <div
        className={`relative z-40 border-b text-xs font-mono transition-colors ${
          darkMode
            ? 'bg-[#060911]/95 border-slate-800/80 text-slate-400'
            : 'bg-slate-900 text-slate-300 border-slate-800'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              TDWAS.COM CORE ONLINE
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-slate-400">
              <Activity className="w-3 h-3 text-cyan-400" />
              <span>{currentTime || 'EST'}</span>
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              Bradford West Gwillimbury, ON (Serving GTA & Simcoe)
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={onOpenTerminal}
              className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors"
              title="Interactive Terminal Shell"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Run Shell</span>
              <kbd className="px-1.5 py-0.5 text-[10px] rounded bg-slate-800 text-slate-300 border border-slate-700 font-sans">
                Ctrl+K
              </kbd>
            </button>
            <span className="text-slate-600">|</span>
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1 text-slate-300 hover:text-emerald-400 transition-colors"
              title="View Printable Capability Statement"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              <span>Capability Brief</span>
            </button>
          </div>
        </div>
      </div>

      {/* STICKY EXECUTIVE NAVIGATION */}
      <header
        className={`sticky top-0 z-30 backdrop-blur-xl border-b transition-colors ${
          darkMode
            ? 'bg-[#090D16]/90 border-slate-800/80 shadow-lg shadow-black/20'
            : 'bg-white/90 border-slate-200/90 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
          {/* Brand Identity */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-br from-emerald-500 via-teal-400 to-cyan-500 p-[1.5px] shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-all duration-300">
                <div
                  className={`w-full h-full rounded-[14px] flex items-center justify-center font-mono font-extrabold text-sm ${
                    darkMode ? 'bg-[#090D16] text-emerald-400' : 'bg-slate-950 text-emerald-400'
                  }`}
                >
                  WS
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#090D16] flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              </div>
            </div>

            <div>
              <div className="font-bold tracking-tight text-sm sm:text-base flex items-center gap-2">
                <span className="group-hover:text-emerald-400 transition-colors">
                  Wisdom Ikhuoria Salami
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  TDWAS.COM
                </span>
              </div>
              <p
                className={`text-xs font-mono truncate ${
                  darkMode ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                GRC & Risk • Hybrid Cloud • Full-Stack AI
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-200 hover:text-emerald-400 ${
                  darkMode
                    ? 'text-slate-300 hover:bg-slate-800/60'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Quick Actions */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <button
              onClick={onOpenTerminal}
              title="Open Command Shell (Ctrl+K)"
              className={`p-2 sm:p-2.5 rounded-xl border transition-all ${
                darkMode
                  ? 'bg-slate-900/90 border-slate-800 text-slate-300 hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-slate-800'
                  : 'bg-slate-100 border-slate-200 text-slate-700 hover:border-cyan-500 hover:bg-slate-200'
              }`}
            >
              <Command className="w-4 h-4" />
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className={`p-2 sm:p-2.5 rounded-xl border transition-all ${
                darkMode
                  ? 'bg-slate-900/90 border-slate-800 text-amber-400 hover:border-amber-500/40 hover:bg-slate-800'
                  : 'bg-slate-100 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-200'
              }`}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => onScrollTo('contact')}
              className="group hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 hover:brightness-110 active:scale-98 transition-all shadow-lg shadow-emerald-500/20"
            >
              <span>Book Consultation</span>
              <span className="w-5 h-5 rounded-full bg-slate-950/15 flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-950" />
              </span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-xl border transition-all ${
                darkMode
                  ? 'bg-slate-900/90 border-slate-800 text-slate-300'
                  : 'bg-slate-100 border-slate-200 text-slate-700'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            className={`lg:hidden border-b px-4 py-5 space-y-3 transition-colors ${
              darkMode ? 'bg-[#090D16]/98 border-slate-800' : 'bg-white border-slate-200'
            }`}
          >
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center gap-2 p-2.5 rounded-xl text-xs font-mono border text-left transition-colors ${
                      darkMode
                        ? 'bg-slate-900/80 border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:text-emerald-600'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  onScrollTo('contact');
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3 rounded-xl font-semibold text-xs bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 flex items-center justify-center gap-1.5"
              >
                <span>Book Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  onOpenResume();
                  setMobileMenuOpen(false);
                }}
                className={`w-full py-2.5 rounded-xl text-xs font-mono border flex items-center justify-center gap-2 ${
                  darkMode
                    ? 'bg-slate-900 border-slate-800 text-slate-300'
                    : 'bg-slate-100 border-slate-200 text-slate-700'
                }`}
              >
                <FileText className="w-3.5 h-3.5 text-emerald-400" />
                <span>Executive Capability Statement</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
