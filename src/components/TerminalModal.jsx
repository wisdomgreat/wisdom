import React, { useState, useEffect, useRef } from 'react';
import { Terminal, X, CornerDownLeft } from 'lucide-react';

export default function TerminalModal({ isOpen, onClose, onOpenResume }) {
  const [terminalInput, setTerminalInput] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyPointer, setHistoryPointer] = useState(-1);

  const [terminalHistory, setTerminalHistory] = useState([
    {
      type: 'system',
      text: 'TDWAS OS v4.2.0 — Wisdom Ikhuoria Salami Executive Shell initialized.'
    },
    {
      type: 'system',
      text: 'Location: Bradford West Gwillimbury, Simcoe County, ON | Type "help" or click a command chip below.'
    }
  ]);

  const terminalEndRef = useRef(null);
  const terminalInputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        terminalInputRef.current?.focus();
        terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  }, [isOpen, terminalHistory]);

  if (!isOpen) return null;

  const executeCommand = (rawCmd) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    // Track command history for Up/Down arrows
    setCommandHistory((prev) => [...prev, rawCmd]);
    setHistoryPointer(-1);

    const newEntries = [{ type: 'input', text: `wisdom@tdwas-core:~$ ${rawCmd}` }];

    switch (cmd) {
      case 'help':
        newEntries.push({
          type: 'output',
          text: `Available Executive Shell Commands:
  whoami     → Executive profile, credentials & regional footprint
  skills     → Core GRC, Cloud Infrastructure & Full-Stack AI toolchain
  projects   → List live production platforms & validated builds
  homelab    → Inspect Proxmox VE, SCCM & Cloudflare Zero Trust topology
  garden     → [Easter Egg] Bradford agronomy & Kratky hydroponics status
  contact    → Display direct TDWAS Technologies dispatch channels
  resume     → Open printable Executive Capability Statement & Resume
  ping       → Ping the Cloudflare Zero Trust gateway & Proxmox cluster
  clear      → Clear terminal output buffer`
        });
        break;

      case 'whoami':
        newEntries.push({
          type: 'output',
          text: `WISDOM IKHUORIA SALAMI
Role: Principal Consultant @ TDWAS Technologies (tdwas.com)
Specializations: Cybersecurity & GRC | Hybrid Cloud & Proxmox Systems | Full-Stack AI Builder
Track Record: 7+ Years in Risk Operations (KYC/AML/Sanctions) • Former Lead Programming Instructor @ Correlation One • Handshake AI Fellow • Half Baked START Founder.
Base of Operations: Bradford West Gwillimbury, Simcoe County, ON (Serving GTA, Barrie, Newmarket, Mississauga & Etobicoke).`
        });
        break;

      case 'skills':
        newEntries.push({
          type: 'output',
          text: `[SECURITY & GRC]  KYC/AML Due Diligence, Sanctions Screening, GRC Frameworks, IAM, Zero Trust
[INFRASTRUCTURE] AWS, Microsoft Azure, Proxmox VE, VMware, Windows Server/SCCM, Ubuntu CLI, Docker, Cloudflare Tunnels
[AI & FULL-STACK] Python, React, Vite, Tailwind CSS, Node.js, Supabase, n8n, Browserbase, Google AI Studio, Cline/Roo`
        });
        break;

      case 'projects':
        newEntries.push({
          type: 'output',
          text: `LIVE PLATFORMS & TECHNICAL BUILDS:
  • TDWAS Technologies (tdwas.com) — IT, Cloud & GRC Consultancy
  • BWG Life (bwglife.ca) & Simcoe Connect (simcoeconnect.ca) — Hyperlocal Directories
  • BradfordFarmer — Simcoe County AgTech, Grants & CRA T2042 Tax Suite
  • IleOja (ileoja.ca) & MyTechRodeo (mytechrodeo.com) — Marketplace & Tech Insights
  • Neon Breach — Validated Handshake AI Cybersecurity Telemetry Project
  • KiddoChecker — Azure Cloud Child Security & SMS Attendance System
  • Web Audio & Canvas Studio Recorder — Dual-Channel VU & Screen Capture
  • Bybit Algorithmic Crypto Bot — Python + Telegram Telemetry Engine
  • Interest-Only Loan Generator — LegalTech Amortization & PDF Contract Suite
  • JobAutomation & Lead Engine — Autonomous n8n + Browserbase Agentic Graphs`
        });
        break;

      case 'homelab':
        newEntries.push({
          type: 'output',
          text: `BRADFORD HYBRID HOME LAB TELEMETRY:
  [EDGE]    Cloudflare Zero Trust Tunnels -> TLS 1.3 Strict (No Exposed Inbound Ports)
  [NODE 01] Proxmox VE Bare-Metal Cluster -> KVM + LXC Containers (ZFS Healthy)
  [NODE 02] Windows Server + SCCM Lab     -> Active Directory & Endpoint Compliance
  [NODE 03] Ubuntu LTS Docker Host        -> n8n Webhooks, Python Bots & AI Agents
  [CLOUD]   AWS + Azure + Supabase        -> Production Multi-Tenant SaaS Backends`
        });
        break;

      case 'garden':
        newEntries.push({
          type: 'highlight',
          text: `🌱 BRADFORD BACKYARD AGRONOMY & KRATKY HYDROPONICS TELEMETRY:
  Location: Bradford West Gwillimbury, ON (Zone 5b)
  Soil & Container Crops: Sweet Corn, Heirloom Tomatoes, Yams, Peppers & Potted Apples
  Hydroponic Rig: DIY Passive Kratky Method (Zero-pump nutrient reservoirs, optimal EC/pH)
  Creative Audio/Video: Official Creator on Pocket FM | 4K Production on Panasonic HC-X1500`
        });
        break;

      case 'ping':
        newEntries.push({
          type: 'output',
          text: `PING edge.tdwas.com (Cloudflare Edge Anycast):
  64 bytes from edge.tdwas.com: icmp_seq=1 ttl=58 time=7.82 ms
  64 bytes from edge.tdwas.com: icmp_seq=2 ttl=58 time=8.14 ms
  64 bytes from edge.tdwas.com: icmp_seq=3 ttl=58 time=7.95 ms
--- edge.tdwas.com ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, rtt avg = 7.97ms`
        });
        break;

      case 'contact':
        newEntries.push({
          type: 'output',
          text: `TDWAS TECHNOLOGIES DISPATCH:
  Web Portal  : https://tdwas.com
  Email       : consult@tdwas.com
  Ecosystem   : bwglife.ca | simcoeconnect.ca | ileoja.ca | mytechrodeo.com
  Service Area: Bradford West Gwillimbury, Simcoe County, Barrie, Newmarket, Mississauga, Etobicoke & Toronto
  Action      : Scroll down to the Consultation Builder to dispatch a formatted project brief.`
        });
        break;

      case 'resume':
        newEntries.push({
          type: 'output',
          text: `Opening Executive Resume & Capability Statement modal...`
        });
        setTimeout(() => {
          onClose();
          onOpenResume();
        }, 350);
        break;

      case 'clear':
        setTerminalHistory([
          {
            type: 'system',
            text: 'Terminal buffer cleared. Type "help" for available commands.'
          }
        ]);
        setTerminalInput('');
        return;

      default:
        newEntries.push({
          type: 'error',
          text: `Command not recognized: "${rawCmd}". Type "help" to view available executive commands.`
        });
    }

    setTerminalHistory((prev) => [...prev, ...newEntries]);
    setTerminalInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextPointer = historyPointer === -1 ? commandHistory.length - 1 : Math.max(0, historyPointer - 1);
      setHistoryPointer(nextPointer);
      setTerminalInput(commandHistory[nextPointer] || '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyPointer === -1) return;
      const nextPointer = historyPointer + 1;
      if (nextPointer >= commandHistory.length) {
        setHistoryPointer(-1);
        setTerminalInput('');
      } else {
        setHistoryPointer(nextPointer);
        setTerminalInput(commandHistory[nextPointer] || '');
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
      <div className="w-full max-w-3xl rounded-2xl bg-[#070B12] border border-slate-700 shadow-2xl overflow-hidden flex flex-col max-h-[85vh] animate-in fade-in zoom-in-95 duration-150">
        {/* Terminal Title Bar */}
        <div className="px-4 py-3 bg-[#0D1322] border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span className="font-mono text-xs text-slate-200 font-semibold truncate">
              wisdom@tdwas.com — Interactive Executive Command Shell
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close terminal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Clickable Command Chips */}
        <div className="px-4 py-2 bg-slate-950 border-b border-slate-800/80 flex flex-wrap items-center gap-1.5">
          <span className="text-[11px] font-mono text-slate-400 mr-1">Quick Run:</span>
          {['whoami', 'skills', 'projects', 'homelab', 'garden', 'ping', 'contact', 'resume', 'clear'].map(
            (cmd) => (
              <button
                key={cmd}
                onClick={() => executeCommand(cmd)}
                className="px-2.5 py-1 rounded text-xs font-mono bg-slate-900 hover:bg-emerald-500/20 text-emerald-400 border border-slate-800 hover:border-emerald-500/40 transition-colors"
              >
                {cmd}
              </button>
            )
          )}
        </div>

        {/* Terminal Output History */}
        <div className="p-4 sm:p-5 overflow-y-auto font-mono text-xs space-y-3 flex-1">
          {terminalHistory.map((item, idx) => (
            <div
              key={idx}
              className={`whitespace-pre-wrap leading-relaxed ${
                item.type === 'input'
                  ? 'text-cyan-400 font-bold'
                  : item.type === 'error'
                  ? 'text-rose-400'
                  : item.type === 'highlight'
                  ? 'p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300'
                  : item.type === 'system'
                  ? 'text-slate-400'
                  : 'text-slate-200'
              }`}
            >
              {item.text}
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Terminal Input Line */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            executeCommand(terminalInput);
          }}
          className="px-4 py-3 bg-[#0B101B] border-t border-slate-800 flex items-center gap-2 font-mono text-xs"
        >
          <span className="text-emerald-400 font-bold shrink-0">wisdom@tdwas-core:~$</span>
          <input
            ref={terminalInputRef}
            type="text"
            value={terminalInput}
            onChange={(e) => setTerminalInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a command (whoami, skills, projects, homelab, garden, contact)..."
            className="w-full bg-transparent text-slate-100 outline-none placeholder:text-slate-600"
          />
          <button
            type="submit"
            className="px-3 py-1 rounded bg-emerald-500 text-slate-950 font-semibold hover:bg-emerald-400 active:scale-95 transition-all flex items-center gap-1"
          >
            <span>Run</span>
            <CornerDownLeft className="w-3 h-3" />
          </button>
        </form>
      </div>
    </div>
  );
}
