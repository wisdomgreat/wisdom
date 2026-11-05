import React, { useState } from 'react';
import {
  ChevronRight,
  ShieldCheck,
  Terminal
} from 'lucide-react';
import { HOMELAB_NODES } from '../data/portfolioData';

export default function Homelab() {
  const [selectedLabNode, setSelectedLabNode] = useState(HOMELAB_NODES[0]);
  const [pingStatus, setPingStatus] = useState(null);
  const [pinging, setPinging] = useState(false);

  const handlePing = (node) => {
    setPinging(true);
    setPingStatus('Transmitting ICMP echo requests...');
    setTimeout(() => {
      setPinging(false);
      setPingStatus(
        `SUCCESS: 4 packets transmitted, 4 received, 0% loss, RTT avg = ${node.latency || '0.8ms'}`
      );
    }, 450);
  };

  return (
    <section id="homelab" className="scroll-mt-24 space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[var(--color-rule)] pb-4">
        <div>
          <div className="font-mono text-[11px] text-[var(--color-muted)] mb-1">
            05 // HYBRID LAB & CLOUD ARCHITECTURE
          </div>
          <h2 className="text-[clamp(1.75rem,2.8vw,2.5rem)] leading-[1.15] font-medium tracking-[-0.03em] text-[var(--color-ink)]">
            Hybrid lab and cloud architecture
          </h2>
          <p className="text-sm text-[var(--color-muted)] mt-1 max-w-xl">
            Proxmox VE virtualization, Windows Server SCCM, Docker automation and Cloudflare Zero Trust.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left: Interactive Topology Nodes */}
        <div className="lg:col-span-5 space-y-2.5">
          {HOMELAB_NODES.map((node, index) => {
            const isSelected = selectedLabNode.id === node.id;
            return (
              <button
                key={node.id}
                onClick={() => {
                  setSelectedLabNode(node);
                  setPingStatus(null);
                }}
                className={`w-full text-left p-3.5 rounded-[var(--radius-card)] border transition-colors duration-150 flex items-center justify-between gap-3 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] ${
                  isSelected
                    ? 'bg-[var(--color-paper-3)] border-[var(--color-accent)]'
                    : 'bg-[var(--color-paper-2)] border-[var(--color-rule)] hover:border-[var(--color-rule-2)]'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={`w-8 h-8 rounded-[var(--radius-pill)] font-mono text-xs font-semibold flex items-center justify-center shrink-0 border ${
                      isSelected
                        ? 'bg-[var(--color-accent)] text-[var(--color-accent-ink)] border-[var(--color-accent)]'
                        : 'bg-[var(--color-paper)] text-[var(--color-muted)] border-[var(--color-rule)]'
                    }`}
                  >
                    0{index + 1}
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] text-[var(--color-cool)]">{node.zone}</div>
                    <div className="font-semibold text-sm truncate text-[var(--color-ink)]">{node.name}</div>
                    <div className="text-xs truncate text-[var(--color-muted)]">{node.role}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="hidden sm:inline text-xs font-mono px-2 py-0.5 rounded-[var(--radius-pill)] border border-[var(--color-rule)] bg-[var(--color-paper)] text-[var(--color-muted)]">
                    {node.latency}
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 text-[var(--color-muted)] ${isSelected ? 'text-[var(--color-accent)]' : ''}`}
                    aria-hidden="true"
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Right: Node Telemetry Inspector */}
        <div className="lg:col-span-7">
          <div className="h-full rounded-[var(--radius-card)] border border-[var(--color-rule-2)] bg-[var(--color-paper-2)] p-6 sm:p-7 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--color-rule)] pb-4">
                <div>
                  <span className="text-xs text-[var(--color-cool)]">
                    {selectedLabNode.zone}
                  </span>
                  <h3 className="text-xl font-bold text-[var(--color-ink)] mt-0.5">{selectedLabNode.name}</h3>
                </div>
                <span className="px-2.5 py-1 rounded-[var(--radius-pill)] text-xs text-[var(--color-accent)] bg-[var(--color-accent-soft)] border border-[var(--color-rule)] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                  {selectedLabNode.status}
                </span>
              </div>

              {/* Hardware / Network Metadata */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-[var(--radius-card)] bg-[var(--color-paper)] border border-[var(--color-rule)]">
                  <div className="text-[11px] text-[var(--color-muted)] font-medium">Network identifier</div>
                  <div className="text-[var(--color-ink)] font-mono font-medium mt-1">{selectedLabNode.ip}</div>
                </div>
                <div className="p-3 rounded-[var(--radius-card)] bg-[var(--color-paper)] border border-[var(--color-rule)]">
                  <div className="text-[11px] text-[var(--color-muted)] font-medium">Role and latency</div>
                  <div className="text-[var(--color-ink)] font-medium mt-1 flex items-center justify-between">
                    <span className="truncate">{selectedLabNode.role}</span>
                    <span className="font-mono text-xs text-[var(--color-cool)]">~{selectedLabNode.latency}</span>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-[var(--radius-card)] bg-[var(--color-paper-deep)] border border-[var(--color-rule)] text-xs text-[var(--color-ink-2)] font-mono">
                <span className="text-[var(--color-muted)]">Profile: </span>
                {selectedLabNode.specs}
              </div>

              <p className="text-sm text-[var(--color-muted)] leading-relaxed">{selectedLabNode.description}</p>

              {/* Active Services */}
              <div className="space-y-2">
                <div className="text-xs text-[var(--color-muted)] font-medium flex items-center justify-between">
                  <span>Active daemons and workloads</span>
                  <button
                    onClick={() => handlePing(selectedLabNode)}
                    disabled={pinging}
                    className="text-xs text-[var(--color-cool)] hover:underline flex items-center gap-1 font-mono focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
                  >
                    <Terminal className="w-3 h-3" aria-hidden="true" />
                    <span>{pinging ? 'Pinging...' : 'Send ping'}</span>
                  </button>
                </div>

                {pingStatus && (
                  <div className="p-2.5 rounded-[var(--radius-card)] bg-[var(--color-paper-deep)] border border-[var(--color-rule)] text-[var(--color-accent)] text-xs font-mono">
                    {pingStatus}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedLabNode.services.map((srv) => (
                    <div
                      key={srv}
                      className="p-2.5 rounded-[var(--radius-pill)] bg-[var(--color-paper)] border border-[var(--color-rule)] flex items-center gap-2 text-xs text-[var(--color-ink-2)]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] shrink-0" />
                      <span className="truncate">{srv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual Data Flow Bar */}
            <div className="mt-6 pt-4 border-t border-[var(--color-rule)] flex flex-wrap items-center justify-between gap-2 text-xs text-[var(--color-muted)]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[var(--color-accent)] shrink-0" aria-hidden="true" />
                <span>Data path: Public client to Cloudflare Edge to encrypted tunnel</span>
              </div>
              <span className="text-[var(--color-accent)] font-medium">
                0 exposed inbound ports
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
