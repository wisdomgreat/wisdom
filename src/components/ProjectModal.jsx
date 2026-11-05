import React from 'react';
import { X, CheckCircle2, Globe, ExternalLink, ArrowRight } from 'lucide-react';

export default function ProjectModal({ project, onClose, onInquire }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
      <div className="w-full max-w-2xl rounded-2xl bg-[#0B101C] border border-slate-700 text-slate-100 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        <div className="px-6 py-4 bg-[#070B12] border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
              {project.badge}
            </span>
            <span className="text-xs font-mono text-slate-400">{project.category}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close inspector"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
          <div>
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <div className="text-xs font-mono text-cyan-400 mt-1 flex items-center gap-2">
              <Globe className="w-3.5 h-3.5" />
              <span>{project.domain}</span>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-slate-400 hover:text-white"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>Open URL</span>
                </a>
              )}
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">{project.description}</p>

          <div className="space-y-2">
            <div className="text-xs font-mono uppercase text-slate-400 font-semibold">
              Key Architectural & Operational Capabilities
            </div>
            <div className="space-y-2">
              {project.highlights.map((h, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-200 flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-mono uppercase text-slate-400 font-semibold">
              Technology & Security Stack
            </div>
            <div className="flex flex-wrap gap-2">
              {project.architecture.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-900 border border-slate-800 text-emerald-400"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="px-6 py-4 bg-[#070B12] border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            {project.status}
          </span>
          <button
            onClick={() => {
              onClose();
              onInquire();
            }}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-all flex items-center gap-1.5 active:scale-95"
          >
            <span>Inquire About Similar Architecture</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
