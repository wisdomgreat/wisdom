import React, { useState, useEffect } from 'react';
import {
  Terminal,
  MapPin,
  FileText,
  Command,
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
    { label: 'Systems', id: 'projects', icon: Code2 },
    { label: 'Advisory', id: 'advisory', icon: Briefcase },
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
      {/* Top telemetry status bar */}
      <div className="relative z-40 border-b border-[var(--color-rule)] bg-[var(--color-paper-deep)] text-xs text-[var(--color-muted)]">
        <div className="container py-2 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 font-medium text-[var(--color-accent)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75 motion-reduce:hidden"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent)]"></span>
              </span>
              <span>Core online</span>
            </span>
            <span className="hidden sm:inline text-[var(--color-rule-2)]">/</span>
            <span className="hidden sm:inline-flex items-center gap-1 font-mono text-[11px] text-[var(--color-cool)]">
              <Activity className="w-3 h-3 text-[var(--color-cool)]" aria-hidden="true" />
              <span>{currentTime || 'EST'}</span>
            </span>
            <span className="hidden md:inline text-[var(--color-rule-2)]">/</span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-[var(--color-ink-2)]">
              <MapPin className="w-3 h-3 text-[var(--color-muted)]" aria-hidden="true" />
              <span>Bradford West Gwillimbury, Ontario</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenTerminal}
              className="inline-flex items-center gap-1.5 text-[var(--color-cool)] hover:text-[var(--color-ink)] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
              title="Interactive Terminal Shell"
            >
              <Terminal className="w-3.5 h-3.5" aria-hidden="true" />
              <span className="hidden xs:inline">Shell</span>
              <kbd className="px-1.5 py-0.5 text-[10px] rounded bg-[var(--color-paper-2)] text-[var(--color-muted)] border border-[var(--color-rule)] font-mono">
                Ctrl+K
              </kbd>
            </button>
            <span className="text-[var(--color-rule-2)]">/</span>
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 text-[var(--color-ink-2)] hover:text-[var(--color-accent)] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
              title="View Printable Capability Statement"
            >
              <FileText className="w-3.5 h-3.5 text-[var(--color-accent)]" aria-hidden="true" />
              <span>Capability brief</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sticky header navigation */}
      <header className="sticky top-0 z-30 border-b border-[var(--color-rule)] bg-[var(--color-paper)]">
        <div className="container h-16 sm:h-20 flex items-center justify-between gap-4">
          {/* Brand Identity */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-[var(--radius-card)] bg-[var(--color-paper-2)] border border-[var(--color-rule-2)] flex items-center justify-center font-bold text-sm text-[var(--color-accent)]">
              WS
            </div>

            <div>
              <div className="font-bold tracking-tight text-sm sm:text-base flex items-center gap-2">
                <span className="text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors duration-150">
                  Wisdom Ikhuoria Salami
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-[var(--radius-pill)] text-xs text-[var(--color-muted)] border border-[var(--color-rule)]">
                  TDWAS
                </span>
              </div>
              <p className="text-xs text-[var(--color-muted)] truncate">
                GRC, hybrid cloud and full-stack AI architecture
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="px-3 py-1.5 rounded-[var(--radius-pill)] text-xs text-[var(--color-ink-2)] hover:text-[var(--color-ink)] hover:bg-[var(--color-paper-2)] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Quick Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onOpenTerminal}
              title="Open Command Shell (Ctrl+K)"
              className="p-2 sm:p-2.5 rounded-[var(--radius-pill)] border border-[var(--color-rule)] text-[var(--color-ink-2)] hover:border-[var(--color-cool)] hover:text-[var(--color-cool)] bg-[var(--color-paper-2)] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
            >
              <Command className="w-4 h-4" aria-hidden="true" />
            </button>

            <button
              onClick={() => onScrollTo('contact')}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-[var(--radius-pill)] text-xs font-semibold bg-[var(--color-accent)] text-[var(--color-accent-ink)] hover:bg-[var(--color-ink)] transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
            >
              <span>Book consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[var(--color-accent-ink)]" aria-hidden="true" />
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-[var(--radius-pill)] border border-[var(--color-rule)] text-[var(--color-ink-2)] bg-[var(--color-paper-2)] transition-colors duration-150"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-[var(--color-rule)] bg-[var(--color-paper-2)] px-4 py-4 space-y-3">
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="flex items-center gap-2 p-2.5 rounded-[var(--radius-pill)] text-xs border border-[var(--color-rule)] text-left text-[var(--color-ink-2)] hover:text-[var(--color-accent)] bg-[var(--color-paper)] transition-colors duration-150"
                  >
                    <Icon className="w-3.5 h-3.5 text-[var(--color-accent)]" aria-hidden="true" />
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
                className="w-full py-2.5 rounded-[var(--radius-pill)] font-semibold text-xs bg-[var(--color-accent)] text-[var(--color-accent-ink)] flex items-center justify-center gap-1.5 whitespace-nowrap"
              >
                <span>Book consultation</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <button
                onClick={() => {
                  onOpenResume();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 rounded-[var(--radius-pill)] text-xs border border-[var(--color-rule)] text-[var(--color-ink-2)] bg-[var(--color-paper)] flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <FileText className="w-3.5 h-3.5 text-[var(--color-accent)]" aria-hidden="true" />
                <span>Capability statement</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
