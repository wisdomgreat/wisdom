import React from 'react';
import {
  Shield,
  FileText,
  Terminal,
  Globe,
  ChevronRight,
  Lock
} from 'lucide-react';

export default function Hero({
  darkMode,
  onOpenResume,
  onOpenTerminal,
  onScrollTo
}) {
  return (
    <section className="relative pt-4 sm:pt-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Executive Pitch */}
        <div className="lg:col-span-7 space-y-6">
          {/* Eyebrow Badge */}
          <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono border bg-emerald-500/10 border-emerald-500/30 text-emerald-400 shadow-sm">
            <Shield className="w-3.5 h-3.5" />
            <span className="font-semibold tracking-wider">
              PRINCIPAL CONSULTANT @ TDWAS TECHNOLOGIES (TDWAS.COM)
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
            Architecting{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Resilient Governance,
            </span>{' '}
            Hybrid Cloud & Autonomous AI Systems.
          </h1>

          <p
            className={`text-base sm:text-lg leading-relaxed max-w-2xl ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            I’m <strong>Wisdom Ikhuoria Salami</strong> — a Technology Executive, Cybersecurity & GRC Specialist,
            Systems Architect, and Full-Stack AI Builder based in{' '}
            <span className="underline decoration-emerald-500/60 decoration-2 underline-offset-4 font-semibold text-emerald-400">
              Bradford West Gwillimbury, Ontario
            </span>
            . I bridge 7+ years of enterprise KYC/AML risk operations and hybrid infrastructure engineering with
            rapid, production-grade AI software delivery.
          </p>

          {/* Role Pill Badges */}
          <div className="flex flex-wrap gap-2 pt-1">
            {[
              'Cybersecurity, GRC & KYC/AML Specialist',
              'Proxmox VE & Hybrid Cloud Architect',
              'Full-Stack React / Supabase / Python Builder',
              'Former Lead Programming Instructor (Correlation One)',
              'Handshake AI Fellow'
            ].map((badge) => (
              <span
                key={badge}
                className={`px-3 py-1 rounded-lg text-xs font-mono border transition-all ${
                  darkMode
                    ? 'bg-slate-900/90 border-slate-800 text-slate-300 hover:border-slate-700'
                    : 'bg-white border-slate-200 text-slate-700 shadow-sm hover:border-slate-300'
                }`}
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Primary CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <button
              onClick={() => onScrollTo('projects')}
              className="group px-6 py-3.5 rounded-xl font-semibold text-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all shadow-lg shadow-emerald-500/20 active:scale-98 flex items-center gap-2"
            >
              <span>Explore 10+ Live Platforms & Builds</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onOpenResume}
              className={`px-5 py-3.5 rounded-xl font-semibold text-sm border transition-all flex items-center gap-2 active:scale-98 ${
                darkMode
                  ? 'bg-slate-900/90 border-slate-700 hover:border-cyan-400 text-slate-100 hover:bg-slate-800'
                  : 'bg-white border-slate-300 hover:border-slate-900 text-slate-900 shadow-sm'
              }`}
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Capability Brief & Resume</span>
            </button>

            <button
              onClick={onOpenTerminal}
              className={`px-4 py-3.5 rounded-xl font-mono text-xs border transition-all flex items-center gap-2 active:scale-98 ${
                darkMode
                  ? 'bg-[#0D1322] border-slate-800 text-cyan-400 hover:border-cyan-500/50 hover:bg-slate-900'
                  : 'bg-slate-900 border-slate-800 text-cyan-400 hover:bg-slate-800'
              }`}
            >
              <Terminal className="w-4 h-4" />
              <span>$&gt; Interactive CLI</span>
            </button>
          </div>

          {/* Service Footprint Bar */}
          <div
            className={`p-3.5 rounded-xl border text-xs flex flex-wrap items-center gap-x-3.5 gap-y-1.5 ${
              darkMode
                ? 'bg-slate-900/50 border-slate-800/90 text-slate-400'
                : 'bg-slate-100/80 border-slate-200 text-slate-600'
            }`}
          >
            <span className="font-mono font-semibold text-emerald-400 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5" /> REGIONAL ADVISORY FOOTPRINT:
            </span>
            <span>Bradford West Gwillimbury</span>
            <span className="text-slate-600">•</span>
            <span>Simcoe County & Barrie</span>
            <span className="text-slate-600">•</span>
            <span>Newmarket</span>
            <span className="text-slate-600">•</span>
            <span>Mississauga & Etobicoke</span>
            <span className="text-slate-600">•</span>
            <span>Greater Toronto Area</span>
          </div>
        </div>

        {/* Right Column: Interactive Executive Telemetry Console */}
        <div className="lg:col-span-5">
          {/* Doppelrand outer chassis */}
          <div className="p-1.5 rounded-[1.75rem] bg-gradient-to-br from-emerald-500/20 via-slate-800 to-cyan-500/20 border border-slate-700/60 shadow-2xl">
            <div
              className={`rounded-[1.4rem] border overflow-hidden shadow-2xl transition-all ${
                darkMode
                  ? 'bg-[#0B101C] border-slate-800 text-slate-100 shadow-emerald-950/20'
                  : 'bg-slate-900 border-slate-800 text-slate-100 shadow-xl'
              }`}
            >
              {/* Console Window Bar */}
              <div className="px-4 py-3 bg-[#060911] border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-slate-400">
                    wisdom@tdwas-core:~/telemetry
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-semibold">
                    PROD NOMINAL
                  </span>
                </div>
              </div>

              {/* Console Body */}
              <div className="p-5 sm:p-6 space-y-5 font-mono text-xs">
                {/* 2-col Metrics */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/90 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-12 h-12 bg-emerald-500/5 rounded-full blur-xl pointer-events-none" />
                    <div className="text-slate-400 text-[10px] uppercase tracking-wider font-semibold">
                      RISK OPS & ENTERPRISE IT
                    </div>
                    <div className="text-2xl font-extrabold text-emerald-400 mt-1">7+ Years</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">KYC/AML • Sanctions • GRC</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/90 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-12 h-12 bg-cyan-500/5 rounded-full blur-xl pointer-events-none" />
                    <div className="text-slate-400 text-[10px] uppercase tracking-wider font-semibold">
                      PRODUCTION ECOSYSTEM
                    </div>
                    <div className="text-2xl font-extrabold text-cyan-400 mt-1">10+ Live</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">SaaS, Civic & AI Platforms</div>
                  </div>
                </div>

                {/* Zero Trust Ingress Status */}
                <div className="p-3 rounded-xl bg-slate-950/60 border border-emerald-500/20 flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Lock className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Inbound Ports Exposed:</span>
                  </div>
                  <span className="font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    0 Ports (Encrypted Tunnels Only)
                  </span>
                </div>

                {/* Active Ventures Status Matrix */}
                <div className="space-y-2">
                  <div className="text-[11px] uppercase tracking-wider text-slate-400 flex items-center justify-between font-semibold">
                    <span>Active Production Clusters</span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      SYNCHRONIZED
                    </span>
                  </div>

                  <div className="space-y-2">
                    {[
                      {
                        name: 'tdwas.com',
                        desc: 'TDWAS Technologies (IT, Cloud & GRC Advisory)',
                        state: 'PRODUCTION',
                        accent: 'emerald'
                      },
                      {
                        name: 'bwglife.ca & simcoeconnect.ca',
                        desc: 'Bradford & Simcoe County Civic Platforms',
                        state: 'GSC INDEXED',
                        accent: 'cyan'
                      },
                      {
                        name: 'BradfordFarmer Suite',
                        desc: 'Simcoe AgTech & CRA T2042 Tax Compliance',
                        state: 'ACTIVE',
                        accent: 'emerald'
                      },
                      {
                        name: 'ileoja.ca & mytechrodeo.com',
                        desc: 'Digital Marketplace & Tech Publication',
                        state: 'LIVE',
                        accent: 'cyan'
                      },
                      {
                        name: 'Proxmox VE + SCCM Hybrid Lab',
                        desc: 'Cloudflare Zero Trust • Docker • n8n Daemons',
                        state: 'TUNNELED',
                        accent: 'emerald'
                      }
                    ].map((node) => (
                      <div
                        key={node.name}
                        className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800/80 flex items-center justify-between gap-2 hover:border-slate-700 transition-colors"
                      >
                        <div className="min-w-0">
                          <div className="text-slate-200 font-semibold truncate text-[11px] sm:text-xs">
                            {node.name}
                          </div>
                          <div className="text-[10px] sm:text-[11px] text-slate-400 truncate">
                            {node.desc}
                          </div>
                        </div>
                        <span
                          className={`shrink-0 px-2 py-0.5 rounded text-[10px] font-mono border ${
                            node.accent === 'emerald'
                              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                              : 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
                          }`}
                        >
                          {node.state}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Interactive Terminal Trigger inside Card */}
                <div className="pt-2 flex items-center justify-between border-t border-slate-800 text-[11px] text-slate-400">
                  <span>Try: whoami, homelab, garden</span>
                  <button
                    onClick={onOpenTerminal}
                    className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold group"
                  >
                    <span>Launch Shell</span>
                    <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
