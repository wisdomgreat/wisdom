import React, { useState } from 'react';
import { Command, Menu, X } from 'lucide-react';
import Selection from './Selection';

export default function Header({ onOpenTerminal, onOpenResume, onScrollTo }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Work', id: 'projects' },
    { label: 'Services', id: 'advisory' },
    { label: 'Lab', id: 'homelab' },
    { label: 'Experience', id: 'experience' }
  ];

  const go = (id) => {
    onScrollTo(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-30 bg-[var(--color-paper)]/90 backdrop-blur-sm">
      <div className="container h-20 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
          aria-label="Wisdom Salami, back to top"
        >
          <Selection className="px-2 py-0.5">
            <span className="text-[1.375rem] font-medium tracking-[-0.04em] text-[var(--color-ink)]">
              wisdom salami
            </span>
          </Selection>
        </button>

        <nav className="hidden md:flex items-center gap-8 text-[0.9375rem]" aria-label="Primary">
          {navLinks.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => go(item.id)}
              className="text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
            >
              {item.label}
            </button>
          ))}
          <button
            type="button"
            onClick={onOpenResume}
            className="text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
          >
            Résumé
          </button>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenTerminal}
            title="Open the shell (Ctrl+K)"
            aria-label="Open the shell"
            className="hidden sm:flex w-11 h-11 items-center justify-center rounded-[var(--radius-pill)] border border-[var(--color-rule)] bg-[var(--color-paper-2)] text-[var(--color-ink-2)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
          >
            <Command className="w-4 h-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => go('contact')}
            className="hidden sm:inline-flex items-center h-11 px-6 rounded-[var(--radius-pill)] text-[0.9375rem] font-medium bg-[var(--color-ink)] text-[var(--color-paper)] hover:bg-[var(--color-accent)] hover:text-[var(--color-accent-ink)] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
          >
            Say hello
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex w-11 h-11 items-center justify-center rounded-[var(--radius-pill)] border border-[var(--color-rule)] bg-[var(--color-paper-2)] text-[var(--color-ink)] focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
            aria-label="Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[var(--color-rule)] bg-[var(--color-paper-2)]">
          <div className="container py-4 flex flex-col gap-1">
            {navLinks.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => go(item.id)}
                className="text-left py-2.5 text-base text-[var(--color-ink)] focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
              >
                {item.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => { onOpenResume(); setMobileMenuOpen(false); }}
              className="text-left py-2.5 text-base text-[var(--color-ink)] focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
            >
              Résumé
            </button>
            <button
              type="button"
              onClick={() => go('contact')}
              className="mt-2 h-11 rounded-[var(--radius-pill)] font-medium bg-[var(--color-ink)] text-[var(--color-paper)] focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
            >
              Say hello
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
