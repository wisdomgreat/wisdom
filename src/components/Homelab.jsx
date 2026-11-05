import React, { useState } from 'react';
import {
  Network,
  ChevronRight,
  Activity,
  ShieldCheck,
  Terminal
} from 'lucide-react';
import { HOMELAB_NODES } from '../data/portfolioData';

export default function Homelab({ darkMode }) {
  const [selectedLabNode, setSelectedLabNode] = useState(HOMELAB_NODES[0]);
  const [pingStatus, setPingStatus] = useState(null);
  const [pinging, setPinging] = useState(false);

  const handlePing = (node) => {
    setPinging(true);
    setPingStatus('Transmitting ICMP echo requests...');
    setTimeout(() => {
      setPinging(false);
      setPingStatus(
        `SUCCESS: 4 packets transmitted, 4 received, 0% packet loss, RTT avg = ${node.latency || '0.8ms'}`
      );
    }, 450);
  };

  return (
    <section id="homelab" className="scroll-mt-24 space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 flex items-center gap-2">
            <Network className="w-4 h-4" />
            <span>Interactive Hybrid Topology Explorer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-2">
            Home Lab & Enterprise Cloud Architecture
          </h2>
        </div>
        <p className={`max-w-md text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          Click any infrastructure node below to inspect how Proxmox VE, Windows Server SCCM, Ubuntu Docker hosts,
          and Cloudflare Zero Trust tunnels interconnect.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left: Interactive Topology Nodes */}
        <div className="lg:col-span-5 space-y-3">
          {HOMELAB_NODES.map((node, index) => {
            const isSelected = selectedLabNode.id === node.id;
            return (
              <button
                key={node.id}
                onClick={() => {
                  setSelectedLabNode(node);
                  setPingStatus(null);
                }}
                className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between gap-4 active:scale-99 ${
                  isSelected
                    ? 'bg-gradient-to-r from-emerald-500/15 to-cyan-500/10 border-emerald-500 shadow-lg shadow-emerald-950/20'
                    : darkMode
                    ? 'bg-[#0D1320]/80 border-slate-800/90 hover:border-slate-700 hover:bg-slate-900/60'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div
                    className={`w-10 h-10 rounded-xl font-mono text-xs font-bold flex items-center justify-center shrink-0 border ${
                      isSelected
                        ? 'bg-emerald-500 text-slate-950 border-emerald-400'
                        : darkMode
                        ? 'bg-slate-900 text-slate-400 border-slate-800'
                        : 'bg-slate-100 text-slate-700 border-slate-200'
                    }`}
                  >
                    0{index + 1}
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-mono text-emerald-400">{node.zone}</div>
                    <div className="font-bold text-sm sm:text-base truncate">{node.name}</div>
                    <div
                      className={`text-xs truncate ${
                        darkMode ? 'text-slate-400' : 'text-slate-500'
                      }`}
                    >
                      {node.role}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span
                    className={`hidden sm:inline text-[10px] font-mono px-2 py-0.5 rounded border ${
                      isSelected
                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                        : darkMode
                        ? 'bg-slate-950 text-slate-400 border-slate-800'
                        : 'bg-slate-100 text-slate-600 border-slate-200'
                    }`}
                  >
                    {node.latency}
                  </span>
                  <ChevronRight
                    className={`w-5 h-5 transition-transform ${
                      isSelected ? 'text-emerald-400 translate-x-1' : 'text-slate-500'
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Right: Node Telemetry Inspector */}
        <div className="lg:col-span-7">
          <div
            className={`h-full rounded-2xl border p-6 sm:p-8 flex flex-col justify-between ${
              darkMode
                ? 'bg-[#0C121E] border-slate-800 text-slate-100'
                : 'bg-slate-900 text-slate-100 border-slate-800 shadow-xl'
            }`}
          >
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                    {selectedLabNode.zone}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">{selectedLabNode.name}</h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {selectedLabNode.status}
                  </span>
                </div>
              </div>

              {/* Hardware / Network Metadata */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="text-slate-400 text-[10px] uppercase tracking-wider font-semibold">
                    NETWORK / SUBNET IDENTIFIER
                  </div>
                  <div className="text-emerald-400 font-semibold mt-1">{selectedLabNode.ip}</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="text-slate-400 text-[10px] uppercase tracking-wider font-semibold">
                    PRIMARY ROLE & LATENCY
                  </div>
                  <div className="text-cyan-400 font-semibold mt-1 flex items-center justify-between">
                    <span>{selectedLabNode.role}</span>
                    <span className="text-xs text-slate-400">~{selectedLabNode.latency}</span>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 font-mono text-xs text-slate-300">
                <span className="text-slate-400 font-semibold">STACK PROFILE: </span>
                {selectedLabNode.specs}
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">{selectedLabNode.description}</p>

              {/* Running Daemons / Services */}
              <div className="space-y-2.5">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center justify-between">
                  <span>Active Daemons, Controls & Workloads</span>
                  <button
                    onClick={() => handlePing(selectedLabNode)}
                    disabled={pinging}
                    className="text-xs text-emerald-400 hover:text-emerald-300 underline font-mono flex items-center gap-1"
                  >
                    <Terminal className="w-3 h-3" />
                    <span>{pinging ? 'Pinging...' : 'Send ICMP Ping'}</span>
                  </button>
                </div>

                {pingStatus && (
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
                    {pingStatus}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedLabNode.services.map((srv) => (
                    <div
                      key={srv}
                      className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/90 flex items-center gap-2.5 text-xs text-slate-200 font-mono"
                    >
                      <Activity className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="truncate">{srv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual Data Flow Bar */}
            <div className="mt-8 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  DATA PATH: Public Client → Cloudflare Edge → Encrypted Tunnel → Proxmox/Ubuntu
                </span>
              </div>
              <span className="text-emerald-400 font-semibold">
                0 Inbound Firewall Ports Exposed
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
