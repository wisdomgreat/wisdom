import React, { useState, useEffect, useRef } from 'react';
import { Terminal, X, CornerDownLeft } from 'lucide-react';

export default function TerminalModal({ isOpen, onClose, onOpenResume }) {
  const [terminalInput, setTerminalInput] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyPointer, setHistoryPointer] = useState(-1);

  const [terminalHistory, setTerminalHistory] = useState([
    {
      type: 'system',
      text: 'TDWAS OS v4.2.0: Wisdom Ikhuoria Salami Executive Shell initialized.'
    },
    {
      type: 'system',
      text: 'Location: Greater Toronto Area, Ontario. Type "help" or click a command below.'
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

    setCommandHistory((prev) => [...prev, rawCmd]);
    setHistoryPointer(-1);

    const newEntries = [{ type: 'input', text: `wisdom@tdwas-core:~$ ${rawCmd}` }];

    switch (cmd) {
      case 'help':
        newEntries.push({
          type: 'output',
          text: `Available Executive Shell Commands:
  whoami     -> Executive profile, credentials and regional footprint
  skills     -> Core GRC, Cloud Infrastructure and Full-Stack AI toolchain
  projects   -> List live production platforms and validated builds
  homelab    -> Inspect Proxmox VE, SCCM and Cloudflare Zero Trust topology
  garden     -> [Easter Egg] AgTech, Kratky hydroponics and soil science status
  contact    -> Display direct TDWAS Technologies dispatch channels
  resume     -> Open printable Executive Capability Statement and Resume
  ping       -> Ping the Cloudflare Zero Trust gateway and Proxmox cluster
  clear      -> Clear terminal output buffer`
        });
        break;

      case 'whoami':
        newEntries.push({
          type: 'output',
          text: `WISDOM IKHUORIA SALAMI
Role: Principal Consultant at TDWAS Technologies (tdwas.com)
Specializations: Cybersecurity & GRC, Hybrid Cloud & Proxmox Systems, Full-Stack AI Builder
Track Record: 7+ Years in Risk Operations (KYC/AML/Sanctions), Former Lead Programming Instructor at Correlation One, Handshake AI Fellow, Half Baked START Founder.
Base of Operations: Greater Toronto Area (GTA), Ontario, Canada (Available for on-site & remote engagements).`
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
  - TDWAS Technologies (tdwas.com): IT, Cloud and GRC Consultancy
  - BWG Life (bwglife.ca): Hyperlocal Community Briefing & Telemetry Hub
  - Simcoe Connect (simcoeconnect.ca): Regional Multi-Tenant Civic Platform
  - Kindred ChMS (kindredchms.com): Church Care Platform & WhatsApp Integration
  - Sterra Wealth (sterrawealth.com): Independent Wealth Advisory & FinTech Portal
  - KiddoChecker (kids.gvachurch.com): Azure Child Check-in Security Kiosk
  - NYSA Connect (nysaconnect.ca): Civic Tech & Member Welfare Portal
  - IleOja (ileoja.ca) and MyTechRodeo: Marketplace and Tech Insights
  - BradfordFarmer: Ontario AgTech, Grants and CRA T2042 Tax Suite
  - Neon Breach: Validated Handshake AI Cybersecurity Telemetry Project
  - Web Audio & Canvas Studio Recorder: Dual-Channel VU and Screen Capture
  - Bybit Algorithmic Crypto Bot: Python and Telegram Telemetry Engine
  - Interest-Only Loan Generator: LegalTech Amortization and PDF Contract Suite
  - JobAutomation & Lead Engine: Autonomous n8n and Browserbase Agentic Graphs`
        });
        break;

      case 'homelab':
        newEntries.push({
          type: 'output',
          text: `HYBRID LAB & CLUSTERING TELEMETRY:
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
          text: `AGTECH & SOIL SCIENCE TELEMETRY:
  Location: Southern Ontario (Zone 5b)
  Soil & Container Crops: Sweet Corn, Heirloom Tomatoes, Yams, Peppers, Potted Apples
  Hydroponic Rig: DIY Passive Kratky Method (Zero-pump nutrient reservoirs, optimal EC/pH)
  Creative Audio/Video: Official Creator on Pocket FM; 4K Production on Panasonic HC-X1500`
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
  Ecosystem   : bwglife.ca, simcoeconnect.ca, ileoja.ca, mytechrodeo.com
  Service Area: Greater Toronto Area, Ontario & Global Remote
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
        }, 300);
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
    <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-3 sm:p-4">
      <div className="w-full max-w-3xl rounded-[var(--radius-card)] bg-[var(--color-paper-deep)] border border-[var(--color-rule-2)] overflow-hidden flex flex-col max-h-[85vh]">
        {/* Terminal Title Bar */}
        <div className="px-4 py-2.5 bg-[var(--color-paper-2)] border-b border-[var(--color-rule)] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-[var(--color-accent)]" aria-hidden="true" />
            <span className="font-mono text-xs text-[var(--color-ink)] font-semibold truncate">
              wisdom@tdwas.com: interactive executive shell
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-[var(--color-muted)] hover:text-[var(--color-ink)] hover:bg-[var(--color-paper)] transition-colors duration-150"
            aria-label="Close terminal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Clickable Command Chips */}
        <div className="px-4 py-2 bg-[var(--color-paper-deep)] border-b border-[var(--color-rule)] flex flex-wrap items-center gap-1.5">
          <span className="text-[11px] text-[var(--color-muted)] mr-1">Quick run:</span>
          {['whoami', 'skills', 'projects', 'homelab', 'garden', 'ping', 'contact', 'resume', 'clear'].map(
            (cmd) => (
              <button
                key={cmd}
                onClick={() => executeCommand(cmd)}
                className="px-2 py-0.5 rounded-[var(--radius-pill)] text-xs font-mono bg-[var(--color-paper-2)] hover:bg-[var(--color-accent-soft)] text-[var(--color-cool)] hover:text-[var(--color-accent)] border border-[var(--color-rule)] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
              >
                {cmd}
              </button>
            )
          )}
        </div>

        {/* Terminal Output History */}
        <div className="p-4 sm:p-5 overflow-y-auto font-mono text-xs space-y-3 flex-1 bg-[var(--color-paper-deep)]">
          {terminalHistory.map((item, idx) => (
            <div
              key={idx}
              className={`whitespace-pre-wrap leading-relaxed ${
                item.type === 'input'
                  ? 'text-[var(--color-cool)] font-bold'
                  : item.type === 'error'
                  ? 'text-[var(--color-error)]'
                  : item.type === 'highlight'
                  ? 'p-3 rounded-[var(--radius-card)] bg-[var(--color-accent-soft)] border border-[var(--color-rule)] text-[var(--color-ink)]'
                  : item.type === 'system'
                  ? 'text-[var(--color-muted)]'
                  : 'text-[var(--color-ink-2)]'
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
          className="px-4 py-3 bg-[var(--color-paper-2)] border-t border-[var(--color-rule)] flex items-center gap-2 font-mono text-xs"
        >
          <span className="text-[var(--color-accent)] font-bold shrink-0">wisdom@tdwas-core:~$</span>
          <input
            ref={terminalInputRef}
            type="text"
            value={terminalInput}
            onChange={(e) => setTerminalInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a command (whoami, skills, projects, homelab, garden, contact)..."
            className="w-full bg-transparent text-[var(--color-ink)] outline-none placeholder:text-[var(--color-muted)]"
          />
          <button
            type="submit"
            className="px-2.5 py-1 rounded-[var(--radius-pill)] bg-[var(--color-accent)] text-[var(--color-accent-ink)] font-semibold hover:bg-[var(--color-ink)] transition-colors duration-150 flex items-center gap-1 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
          >
            <span>Run</span>
            <CornerDownLeft className="w-3 h-3 text-[var(--color-accent-ink)]" aria-hidden="true" />
          </button>
        </form>
      </div>
    </div>
  );
}
