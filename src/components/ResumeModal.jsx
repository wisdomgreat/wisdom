import React from 'react';
import { FileText, Printer, X, MapPin, Mail, Globe } from 'lucide-react';
import { EXPERIENCE_TIMELINE, PROJECTS_DATA } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="w-full max-w-4xl rounded-2xl bg-[#0B101C] border border-slate-700 text-slate-100 shadow-2xl overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-150">
        {/* Top Action Bar */}
        <div className="px-6 py-4 bg-[#070B12] border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 no-print">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-emerald-400" />
            <span className="font-mono text-xs font-semibold">
              EXECUTIVE RESUME & TDWAS TECHNOLOGIES CAPABILITY BRIEF
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold bg-emerald-500 text-slate-950 hover:bg-emerald-400 flex items-center gap-1.5 active:scale-95 transition-all shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close resume"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="p-6 sm:p-10 space-y-6 max-h-[82vh] overflow-y-auto print:max-h-none print:overflow-visible print:p-0 print:text-black">
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-extrabold text-white">Wisdom Ikhuoria Salami</h2>
              <p className="text-emerald-400 font-mono text-xs sm:text-sm mt-1">
                Principal Consultant @ TDWAS Technologies | Cybersecurity & GRC | Hybrid Cloud & Full-Stack AI Architect
              </p>
            </div>
            <div className="text-xs font-mono text-slate-400 space-y-1 md:text-right">
              <div className="flex items-center md:justify-end gap-1">
                <MapPin className="w-3 h-3 text-cyan-400" />
                <span>Bradford West Gwillimbury, Simcoe County, ON</span>
              </div>
              <div className="flex items-center md:justify-end gap-1">
                <Globe className="w-3 h-3 text-emerald-400" />
                <span>tdwas.com • bwglife.ca • simcoeconnect.ca</span>
              </div>
              <div className="flex items-center md:justify-end gap-1">
                <Mail className="w-3 h-3 text-cyan-400" />
                <span>consult@tdwas.com</span>
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
              Executive Summary
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Multidisciplinary Technology Professional and Systems Architect combining 7+ years of enterprise Risk
              Operations (KYC, AML, Enhanced Due Diligence, Global Sanctions Screening) with full-stack AI software
              engineering and hybrid cloud infrastructure administration. Founder of TDWAS Technologies, Former Lead
              Programming Instructor at Correlation One, and validated AI Builder with the Handshake AI Fellowship.
              Proven track record in deploying zero-trust hybrid cloud topologies (Proxmox VE, Windows SCCM, Cloudflare
              Tunnels) and delivering 10+ production web applications.
            </p>
          </div>

          {/* Core Competencies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800">
              <div className="text-xs font-mono text-emerald-400 font-bold mb-1">
                CYBERSECURITY & GRC
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Governance, Risk & Compliance, KYC/AML Due Diligence, Regulatory Sanction Screening, IAM/RBAC, Zero
                Trust Architecture, Audit Readiness.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800">
              <div className="text-xs font-mono text-cyan-400 font-bold mb-1">
                HYBRID INFRASTRUCTURE
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                AWS, Microsoft Azure, Proxmox VE, VMware, Windows Server & SCCM, Ubuntu Linux CLI, Docker,
                Cloudflare Zero Trust Tunnels.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800">
              <div className="text-xs font-mono text-emerald-400 font-bold mb-1">
                FULL-STACK AI & DEV
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Python, React, Vite, Tailwind CSS, Node.js, Supabase, n8n Webhooks, Browserbase, Google AI Studio,
                Algorithmic Telemetry Systems.
              </p>
            </div>
          </div>

          {/* Experience Summary */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
              Professional Experience & Fellowships
            </h3>
            <div className="space-y-3">
              {EXPERIENCE_TIMELINE.map((e, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-bold text-sm text-white">
                      {e.role} — <span className="text-emerald-400">{e.organization}</span>
                    </span>
                    <span className="text-xs font-mono text-slate-400">{e.period}</span>
                  </div>
                  <ul className="mt-2 space-y-1 text-xs text-slate-300 list-disc list-inside">
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
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
              Selected Production Ventures & Technical Systems
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              {PROJECTS_DATA.slice(0, 8).map((p) => (
                <div key={p.id} className="p-3 rounded-lg bg-slate-950/80 border border-slate-800">
                  <span className="font-bold text-emerald-400">{p.title}: </span>
                  <span className="text-slate-300">{p.description}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
