import React from 'react';
import { X, CheckCircle2, Globe, ExternalLink, ArrowRight } from 'lucide-react';

export default function ProjectModal({ project, onClose, onInquire }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-3 sm:p-4">
      <div className="w-full max-w-2xl rounded-[var(--radius-card)] bg-[var(--color-paper-2)] border border-[var(--color-rule-2)] text-[var(--color-ink)] overflow-hidden">
        <div className="px-6 py-4 bg-[var(--color-paper)] border-b border-[var(--color-rule)] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-[var(--radius-pill)] text-xs text-[var(--color-accent)] bg-[var(--color-accent-soft)] border border-[var(--color-rule)]">
              {project.badge}
            </span>
            <span className="text-xs text-[var(--color-muted)]">{project.category}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-[var(--color-muted)] hover:text-[var(--color-ink)] hover:bg-[var(--color-paper-2)] transition-colors duration-150"
            aria-label="Close inspector"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
          <div>
            <h3 className="text-xl font-bold text-[var(--color-ink)]">{project.title}</h3>
            <div className="text-xs text-[var(--color-cool)] mt-1 flex items-center gap-2 font-mono">
              <Globe className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{project.domain}</span>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[var(--color-muted)] hover:text-[var(--color-ink)]"
                >
                  <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  <span>Open URL</span>
                </a>
              )}
            </div>
          </div>

          <p className="text-sm text-[var(--color-muted)] leading-relaxed">{project.description}</p>

          <div className="space-y-2">
            <div className="text-xs font-semibold text-[var(--color-muted)]">
              Key architectural and operational capabilities
            </div>
            <div className="space-y-1.5">
              {project.highlights.map((h, i) => (
                <div
                  key={i}
                  className="p-2.5 rounded-[var(--radius-card)] bg-[var(--color-paper)] border border-[var(--color-rule)] text-xs text-[var(--color-ink-2)] flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-semibold text-[var(--color-muted)]">
              Technology and security stack
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.architecture.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-0.5 rounded-[var(--radius-pill)] text-xs border border-[var(--color-rule)] bg-[var(--color-paper)] text-[var(--color-muted)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="px-6 py-4 bg-[var(--color-paper)] border-t border-[var(--color-rule)] flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-[var(--color-accent)] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
            {project.status}
          </span>
          <button
            onClick={() => {
              onClose();
              onInquire();
            }}
            className="px-4 py-2 rounded-[var(--radius-pill)] text-xs font-semibold bg-[var(--color-accent)] text-[var(--color-accent-ink)] hover:bg-[var(--color-ink)] transition-colors duration-150 flex items-center gap-1.5 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
          >
            <span>Inquire on architecture</span>
            <ArrowRight className="w-3.5 h-3.5 text-[var(--color-accent-ink)]" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
