import React from 'react';
import { ArrowUp, Terminal, FileText } from 'lucide-react';
import Selection from './Selection';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer({ onOpenTerminal, onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="band-night border-t border-[var(--color-night-2)] py-16 text-[var(--color-night-muted)]">
      <div className="container space-y-12">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
          {/* Brand & Contact */}
          <div className="space-y-4 max-w-md">
            <Selection className="inline-block px-2 py-0.5">
              <span className="text-[1.25rem] font-medium tracking-[-0.04em] text-[var(--color-night-ink)]">
                wisdom salami
              </span>
            </Selection>

            <p className="flex items-center gap-2.5 text-xs text-[var(--color-night-muted)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
              <span>Available for enterprise advisory across Greater Toronto Area & remote</span>
            </p>

            <div className="space-y-1">
              <a
                href="mailto:hello@tdwas.com"
                className="block text-sm text-[var(--color-night-ink)] hover:text-[var(--color-accent)] no-underline transition-colors duration-150"
              >
                hello@tdwas.com
              </a>
              <a
                href="mailto:wisdom.salami@tdwas.com"
                className="block text-xs text-[var(--color-night-muted)] hover:text-[var(--color-accent)] no-underline transition-colors duration-150"
              >
                wisdom.salami@tdwas.com
              </a>
            </div>
          </div>

          {/* Navigation & Elsewhere Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs">
            <div className="space-y-3">
              <span className="text-[var(--color-night-muted)] text-xs font-medium">
                Navigation
              </span>
              <ul className="space-y-2">
                <li>
                  <a href="#projects" className="text-[var(--color-night-ink)] hover:text-[var(--color-accent)] no-underline transition-colors duration-150">
                    Work
                  </a>
                </li>
                <li>
                  <a href="#advisory" className="text-[var(--color-night-ink)] hover:text-[var(--color-accent)] no-underline transition-colors duration-150">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#homelab" className="text-[var(--color-night-ink)] hover:text-[var(--color-accent)] no-underline transition-colors duration-150">
                    Hybrid Lab
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-[var(--color-night-ink)] hover:text-[var(--color-accent)] no-underline transition-colors duration-150">
                    Say hello
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-[var(--color-night-muted)] text-xs font-medium">
                Platforms
              </span>
              <ul className="space-y-2 font-mono text-[11px]">
                {['tdwas.com', 'kindredchms.com', 'sterrawealth.com', 'kids.gvachurch.com', 'nysaconnect.ca', 'bwglife.ca', 'ileoja.ca'].map((domain) => (
                  <li key={domain}>
                    <a
                      href={`https://${domain}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--color-night-muted)] hover:text-[var(--color-night-ink)] no-underline transition-colors duration-150"
                    >
                      {domain}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 col-span-2 sm:col-span-1">
              <span className="text-[var(--color-night-muted)] text-xs font-medium">
                Tools
              </span>
              <div className="flex flex-col gap-2">
                <button
                  type="button"
                  onClick={onOpenTerminal}
                  className="inline-flex items-center gap-1.5 text-xs text-[var(--color-night-ink)] hover:text-[var(--color-accent)] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
                >
                  <Terminal className="w-3.5 h-3.5 text-[var(--color-accent)]" aria-hidden="true" />
                  <span>Shell (Ctrl+K)</span>
                </button>
                <button
                  type="button"
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-1.5 text-xs text-[var(--color-night-ink)] hover:text-[var(--color-accent)] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
                >
                  <FileText className="w-3.5 h-3.5 text-[var(--color-accent)]" aria-hidden="true" />
                  <span>Capability statement</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[var(--color-night-2)] flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--color-night-muted)] gap-4">
          <div>
            © {CURRENT_YEAR} Wisdom Ikhuoria Salami / TDWAS Technologies. Greater Toronto Area, Ontario.
          </div>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[var(--color-night-muted)] hover:text-[var(--color-night-ink)] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
