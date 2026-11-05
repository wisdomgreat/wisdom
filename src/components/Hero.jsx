import React from 'react';
import {
  FileText,
  Terminal,
  Globe,
  ChevronRight,
  Lock
} from 'lucide-react';

export default function Hero({
  onOpenResume,
  onOpenTerminal,
  onScrollTo
}) {
  return (
    <section className="relative pt-6 sm:pt-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Executive Pitch */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[var(--radius-pill)] text-xs text-[var(--color-accent)] bg-[var(--color-accent-soft)] border border-[var(--color-rule)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
            <span>Principal consultant at TDWAS Technologies</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-ink)] leading-[1.12]">
            Resilient Governance, Hybrid Cloud and AI Systems
          </h1>

          <p className="text-base sm:text-lg leading-relaxed text-[var(--color-muted)] max-w-2xl">
            Enterprise risk operations, hybrid infrastructure and production AI architecture in Bradford, Ontario.
          </p>

          {/* Role Badges */}
          <div className="flex flex-wrap gap-2 pt-1">
            {[
              'Cybersecurity, GRC and KYC/AML',
              'Proxmox VE and hybrid cloud',
              'Full-stack React, Supabase and Python',
              'Former lead instructor (Correlation One)',
              'Handshake AI fellow'
            ].map((badge) => (
              <span
                key={badge}
                className="px-2.5 py-1 rounded-[var(--radius-pill)] text-xs text-[var(--color-ink-2)] bg-[var(--color-paper-2)] border border-[var(--color-rule)]"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Primary CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onScrollTo('projects')}
              className="px-5 py-3 rounded-[var(--radius-pill)] font-semibold text-xs sm:text-sm bg-[var(--color-accent)] text-[var(--color-accent-ink)] hover:bg-[var(--color-ink)] transition-colors duration-150 flex items-center gap-2 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
            >
              <span>Explore 10+ platforms</span>
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </button>

            <button
              onClick={onOpenResume}
              className="px-4 py-3 rounded-[var(--radius-pill)] font-medium text-xs sm:text-sm border border-[var(--color-rule-2)] bg-[var(--color-paper-2)] text-[var(--color-ink)] hover:border-[var(--color-accent)] transition-colors duration-150 flex items-center gap-2 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
            >
              <FileText className="w-4 h-4 text-[var(--color-cool)]" aria-hidden="true" />
              <span>Capability statement</span>
            </button>

            <button
              onClick={onOpenTerminal}
              className="px-4 py-3 rounded-[var(--radius-pill)] font-mono text-xs border border-[var(--color-rule)] bg-[var(--color-paper-deep)] text-[var(--color-cool)] hover:border-[var(--color-cool)] transition-colors duration-150 flex items-center gap-2 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
            >
              <Terminal className="w-4 h-4" aria-hidden="true" />
              <span>Interactive shell</span>
            </button>
          </div>

          {/* Service Footprint Bar */}
          <div className="p-3 rounded-[var(--radius-card)] border border-[var(--color-rule)] bg-[var(--color-paper-2)] text-xs text-[var(--color-muted)] flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="font-semibold text-[var(--color-accent)] flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5" aria-hidden="true" /> Regional advisory:
            </span>
            <span>Bradford West Gwillimbury,</span>
            <span>Simcoe County and Barrie,</span>
            <span>Newmarket,</span>
            <span>Mississauga and Etobicoke,</span>
            <span>Greater Toronto Area</span>
          </div>
        </div>

        {/* Right Column: Telemetry Console */}
        <div className="lg:col-span-5">
          <div className="rounded-[var(--radius-card)] border border-[var(--color-rule-2)] bg-[var(--color-paper-2)] overflow-hidden">
            {/* Console Window Bar */}
            <div className="px-4 py-2.5 bg-[var(--color-paper-deep)] border-b border-[var(--color-rule)] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-rule-2)]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-rule-2)]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-accent)]" />
                <span className="ml-2 font-mono text-xs text-[var(--color-muted)]">
                  wisdom@tdwas-core:~/telemetry
                </span>
              </div>
              <span className="px-2 py-0.5 rounded-[var(--radius-pill)] text-[10px] text-[var(--color-accent)] bg-[var(--color-accent-soft)] border border-[var(--color-rule)]">
                verified profile
              </span>
            </div>

            {/* Console Body */}
            <div className="p-5 space-y-4 text-xs">
              {/* Metrics Row */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-[var(--radius-card)] bg-[var(--color-paper)] border border-[var(--color-rule)]">
                  <div className="text-[11px] text-[var(--color-muted)] font-medium">Risk operations</div>
                  <div className="text-2xl font-bold text-[var(--color-accent)] mt-1">7+ years</div>
                  <div className="text-[11px] text-[var(--color-muted)] mt-0.5">KYC, AML and GRC</div>
                </div>

                <div className="p-3 rounded-[var(--radius-card)] bg-[var(--color-paper)] border border-[var(--color-rule)]">
                  <div className="text-[11px] text-[var(--color-muted)] font-medium">Production platforms</div>
                  <div className="text-2xl font-bold text-[var(--color-cool)] mt-1">10+ live</div>
                  <div className="text-[11px] text-[var(--color-muted)] mt-0.5">SaaS and civic platforms</div>
                </div>
              </div>

              {/* Inbound Ports Zero Trust Status */}
              <div className="p-2.5 rounded-[var(--radius-card)] bg-[var(--color-paper)] border border-[var(--color-rule)] flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-[var(--color-ink-2)]">
                  <Lock className="w-3.5 h-3.5 text-[var(--color-accent)]" aria-hidden="true" />
                  <span>Inbound firewall ports:</span>
                </div>
                <span className="font-mono text-xs text-[var(--color-accent)] px-2 py-0.5 rounded bg-[var(--color-accent-soft)]">
                  0 exposed (tunneled)
                </span>
              </div>

              {/* Active Clusters */}
              <div className="space-y-2">
                <div className="text-xs text-[var(--color-muted)] flex items-center justify-between font-medium">
                  <span>Active production clusters</span>
                  <span className="text-[var(--color-accent)]">Nominal</span>
                </div>

                <div className="space-y-1.5">
                  {[
                    { name: 'tdwas.com', desc: 'IT, cloud and GRC advisory', state: 'Production' },
                    { name: 'bwglife.ca and simcoeconnect.ca', desc: 'Bradford and Simcoe directories', state: 'Indexed' },
                    { name: 'BradfordFarmer AgTech', desc: 'Simcoe agritech and CRA T2042', state: 'Active' },
                    { name: 'Proxmox VE + SCCM lab', desc: 'Zero trust tunnels and Docker', state: 'Tunneled' }
                  ].map((node) => (
                    <div
                      key={node.name}
                      className="p-2.5 rounded-[var(--radius-card)] bg-[var(--color-paper)] border border-[var(--color-rule)] flex items-center justify-between gap-2"
                    >
                      <div className="min-w-0">
                        <div className="text-[var(--color-ink)] font-semibold truncate text-xs">{node.name}</div>
                        <div className="text-[11px] text-[var(--color-muted)] truncate">{node.desc}</div>
                      </div>
                      <span className="shrink-0 px-2 py-0.5 rounded-[var(--radius-pill)] text-[10px] text-[var(--color-cool)] bg-[var(--color-cool-soft)] border border-[var(--color-rule)]">
                        {node.state}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Terminal Hint */}
              <div className="pt-2 flex items-center justify-between border-t border-[var(--color-rule)] text-[11px] text-[var(--color-muted)]">
                <span>Commands: whoami, homelab, garden</span>
                <button
                  onClick={onOpenTerminal}
                  className="text-[var(--color-cool)] hover:underline flex items-center gap-1 font-medium"
                >
                  <span>Launch shell</span>
                  <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
