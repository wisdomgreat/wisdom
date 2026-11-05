import React from 'react';
import { FileText, Printer, X, MapPin, Mail, Globe } from 'lucide-react';
import { EXPERIENCE_TIMELINE, PROJECTS_DATA } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="w-full max-w-4xl rounded-[var(--radius-card)] bg-[var(--color-paper-2)] border border-[var(--color-rule-2)] text-[var(--color-ink)] overflow-hidden my-6">
        {/* Top Action Bar */}
        <div className="px-6 py-3.5 bg-[var(--color-paper)] border-b border-[var(--color-rule)] flex flex-wrap items-center justify-between gap-3 no-print">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-[var(--color-accent)]" aria-hidden="true" />
            <span className="text-xs font-semibold text-[var(--color-ink)]">
              Executive resume and capability brief
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-[var(--radius-pill)] text-xs font-semibold bg-[var(--color-accent)] text-[var(--color-accent-ink)] hover:bg-[var(--color-ink)] flex items-center gap-1.5 transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
            >
              <Printer className="w-3.5 h-3.5 text-[var(--color-accent-ink)]" aria-hidden="true" />
              <span>Print or save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded text-[var(--color-muted)] hover:text-[var(--color-ink)] hover:bg-[var(--color-paper-2)] transition-colors duration-150"
              aria-label="Close resume"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[82vh] overflow-y-auto print:max-h-none print:overflow-visible print:p-0 print:text-black">
          {/* Header */}
          <div className="border-b border-[var(--color-rule)] pb-5 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--color-ink)]">Wisdom Ikhuoria Salami</h2>
              <p className="text-[var(--color-accent)] text-xs sm:text-sm mt-1">
                Principal Consultant at TDWAS Technologies: Cybersecurity, GRC, Hybrid Cloud and AI Architect
              </p>
            </div>
            <div className="text-xs text-[var(--color-muted)] space-y-1 md:text-right">
              <div className="flex items-center md:justify-end gap-1.5">
                <MapPin className="w-3 h-3 text-[var(--color-cool)]" aria-hidden="true" />
                <span>Greater Toronto Area, Ontario, Canada</span>
              </div>
              <div className="flex items-center md:justify-end gap-1.5 font-mono">
                <Globe className="w-3 h-3 text-[var(--color-accent)]" aria-hidden="true" />
                <span>tdwas.com, bwglife.ca, simcoeconnect.ca</span>
              </div>
              <div className="flex items-center md:justify-end gap-1.5 font-mono">
                <Mail className="w-3 h-3 text-[var(--color-cool)]" aria-hidden="true" />
                <span>consult@tdwas.com</span>
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="space-y-1.5">
            <h3 className="text-xs font-semibold text-[var(--color-cool)]">
              Executive summary
            </h3>
            <p className="text-sm text-[var(--color-muted)] leading-relaxed">
              Multidisciplinary Technology Professional and Systems Architect combining 7+ years of enterprise Risk
              Operations (KYC, AML, Enhanced Due Diligence, Global Sanctions Screening) with full-stack AI software
              engineering and hybrid cloud infrastructure administration. Founder of TDWAS Technologies, Former Lead
              Programming Instructor at Correlation One, and validated AI Builder with the Handshake AI Fellowship.
              Proven track record in deploying zero-trust hybrid cloud topologies (Proxmox VE, Windows SCCM, Cloudflare
              Tunnels) and delivering 10+ production web applications.
            </p>
          </div>

          {/* Core Competencies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-[var(--radius-card)] bg-[var(--color-paper)] border border-[var(--color-rule)]">
              <div className="text-xs font-semibold text-[var(--color-accent)] mb-1">
                Cybersecurity & GRC
              </div>
              <p className="text-xs text-[var(--color-muted)] leading-relaxed">
                Governance, Risk & Compliance, KYC/AML Due Diligence, Regulatory Sanction Screening, IAM/RBAC, Zero
                Trust Architecture, Audit Readiness.
              </p>
            </div>
            <div className="p-3.5 rounded-[var(--radius-card)] bg-[var(--color-paper)] border border-[var(--color-rule)]">
              <div className="text-xs font-semibold text-[var(--color-cool)] mb-1">
                Hybrid infrastructure
              </div>
              <p className="text-xs text-[var(--color-muted)] leading-relaxed">
                AWS, Microsoft Azure, Proxmox VE, VMware, Windows Server & SCCM, Ubuntu Linux CLI, Docker,
                Cloudflare Zero Trust Tunnels.
              </p>
            </div>
            <div className="p-3.5 rounded-[var(--radius-card)] bg-[var(--color-paper)] border border-[var(--color-rule)]">
              <div className="text-xs font-semibold text-[var(--color-accent)] mb-1">
                Full-stack AI & dev
              </div>
              <p className="text-xs text-[var(--color-muted)] leading-relaxed">
                Python, React, Vite, Tailwind CSS, Node.js, Supabase, n8n Webhooks, Browserbase, Google AI Studio,
                Algorithmic Telemetry Systems.
              </p>
            </div>
          </div>

          {/* Experience Summary */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-[var(--color-cool)]">
              Professional experience and fellowships
            </h3>
            <div className="space-y-3">
              {EXPERIENCE_TIMELINE.map((e, i) => (
                <div key={i} className="p-3.5 rounded-[var(--radius-card)] bg-[var(--color-paper)] border border-[var(--color-rule)]">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-bold text-sm text-[var(--color-ink)]">
                      {e.role} / <span className="text-[var(--color-accent)]">{e.organization}</span>
                    </span>
                    <span className="text-xs text-[var(--color-muted)]">{e.period}</span>
                  </div>
                  <ul className="mt-2 space-y-1 text-xs text-[var(--color-muted)] list-disc list-inside">
                    {e.highlights.map((h, j) => (
                      <li key={j}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Production Platforms */}
          <div className="space-y-2">
            <h3 className="text-xs font-semibold text-[var(--color-cool)]">
              Selected production ventures and technical systems
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {PROJECTS_DATA.slice(0, 8).map((p) => (
                <div key={p.id} className="p-2.5 rounded-[var(--radius-card)] bg-[var(--color-paper)] border border-[var(--color-rule)]">
                  <span className="font-semibold text-[var(--color-accent)]">{p.title}: </span>
                  <span className="text-[var(--color-muted)]">{p.description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
