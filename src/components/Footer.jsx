import React from 'react';
import { ArrowUp, Terminal, FileText } from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer({ onOpenTerminal, onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-[var(--color-rule)] bg-[var(--color-paper-deep)] py-12 text-[var(--color-muted)]">
      <div className="container space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[var(--color-ink)] font-bold text-base">
              <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
              <span>Wisdom Ikhuoria Salami / TDWAS Technologies</span>
            </div>
            <p className="text-xs text-[var(--color-muted)] max-w-xl leading-relaxed">
              Principal Cybersecurity and GRC Consultant, Hybrid Cloud Systems Architect, and Full-Stack AI Builder.
              Headquartered in Bradford West Gwillimbury, Simcoe County, Ontario.
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[var(--color-cool)] pt-1 font-mono">
              {['tdwas.com', 'bwglife.ca', 'simcoeconnect.ca', 'ileoja.ca', 'mytechrodeo.com'].map((domain) => (
                <a
                  key={domain}
                  href={`https://${domain}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline underline-offset-4"
                >
                  {domain}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={onOpenTerminal}
              className="px-3.5 py-2 rounded-[var(--radius-pill)] text-xs font-mono bg-[var(--color-paper-2)] text-[var(--color-cool)] border border-[var(--color-rule)] hover:border-[var(--color-cool)] transition-colors duration-150 flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
            >
              <Terminal className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Shell (Ctrl+K)</span>
            </button>
            <button
              onClick={onOpenResume}
              className="px-3.5 py-2 rounded-[var(--radius-pill)] text-xs bg-[var(--color-accent-soft)] text-[var(--color-accent)] border border-[var(--color-rule)] hover:border-[var(--color-accent)] transition-colors duration-150 flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
            >
              <FileText className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Capability brief</span>
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-[var(--radius-pill)] text-[var(--color-muted)] hover:text-[var(--color-ink)] bg-[var(--color-paper-2)] border border-[var(--color-rule)] hover:border-[var(--color-rule-2)] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
              title="Scroll to top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="pt-6 border-t border-[var(--color-rule)] flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--color-muted)] gap-2">
          <div>
            © {CURRENT_YEAR} TDWAS Technologies. Engineered with React, Vite and Tailwind CSS.
          </div>
          <div>
            Bradford West Gwillimbury, Simcoe County, Ontario
          </div>
        </div>
      </div>
    </footer>
  );
}
