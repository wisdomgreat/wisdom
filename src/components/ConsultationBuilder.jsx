import React, { useState, useMemo } from 'react';
import {
  Sliders,
  Send,
  Check,
  Copy,
  CheckCircle2
} from 'lucide-react';

export default function ConsultationBuilder({ darkMode }) {
  const [serviceType, setServiceType] = useState('Cybersecurity & GRC Advisory');
  const [scopeScale, setScopeScale] = useState('SMB / Regional Organization');
  const [timelineUrgency, setTimelineUrgency] = useState('Standard (2-4 Weeks)');
  const [selectedAddons, setSelectedAddons] = useState(['Zero Trust / Cloudflare Audit']);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedScope, setCopiedScope] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [contactForm, setContactForm] = useState({
    name: '',
    organization: '',
    email: '',
    location: 'Bradford / Simcoe County / GTA',
    notes: ''
  });

  const consultationEstimate = useMemo(() => {
    const baseMap = {
      'Cybersecurity & GRC Advisory': {
        deliverable: 'KYC/AML Risk Matrix, Sanctions Audit & Security Governance Roadmap',
        effort: 'Advisory Retainer or Fixed Audit',
        hours: '25 – 60 hrs'
      },
      'Cloud, Proxmox & Managed IT': {
        deliverable: 'Hybrid Cloud / Virtualization Architecture, SCCM & Cloudflare Zero Trust Deployment',
        effort: 'Systems Architecture & Managed Rollout',
        hours: '30 – 80 hrs'
      },
      'Full-Stack AI & SaaS Build': {
        deliverable: 'Production React/Supabase Web Platform + Autonomous n8n / AI Agent Pipelines',
        effort: 'Full-Stack Sprint Delivery',
        hours: '40 – 120 hrs'
      },
      'Technical Training & Executive Workshop': {
        deliverable: 'Custom Programming, AI Automation, or Cyber Hygiene Curriculum & Live Instruction',
        effort: 'Cohort / Team Workshop',
        hours: '10 – 35 hrs'
      }
    };
    return baseMap[serviceType] || baseMap['Cybersecurity & GRC Advisory'];
  }, [serviceType]);

  const toggleAddon = (addon) => {
    setSelectedAddons((prev) =>
      prev.includes(addon) ? prev.filter((item) => item !== addon) : [...prev, addon]
    );
  };

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText('consult@tdwas.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyScope = () => {
    const brief = `TDWAS TECHNOLOGIES CONSULTATION SCOPE
Pillar: ${serviceType}
Organization: ${scopeScale}
Horizon: ${timelineUrgency}
Deliverable: ${consultationEstimate.deliverable}
Estimated Effort: ${consultationEstimate.hours} (${consultationEstimate.effort})
Selected Addons: ${selectedAddons.join(', ') || 'None'}
Contact: ${contactForm.name || 'Anonymous'} (${contactForm.email || 'Pending email'})`;

    navigator.clipboard?.writeText(brief);
    setCopiedScope(true);
    setTimeout(() => setCopiedScope(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="scroll-mt-24 space-y-8">
      <div>
        <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 flex items-center gap-2">
          <Sliders className="w-4 h-4" />
          <span>TDWAS Technologies • Engagement & Inquiry Builder</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-2">
          Scope a Consultation or Technical Engagement
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Interactive Service Configurator */}
        <div
          className={`lg:col-span-6 rounded-2xl border p-6 sm:p-8 space-y-6 ${
            darkMode ? 'bg-[#0D1320]/95 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}
        >
          <div className="flex items-center justify-between border-b border-slate-800/60 pb-4">
            <div>
              <h3 className="text-lg font-bold">1. Configure Engagement Parameters</h3>
              <p className={`text-xs mt-0.5 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Select your primary pillar to generate an instant capability scope.
              </p>
            </div>
            <span className="px-2.5 py-1 rounded text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              Instant Brief
            </span>
          </div>

          {/* Pillar Selector */}
          <div className="space-y-2">
            <label className="text-xs font-mono uppercase text-slate-400">Primary Advisory Pillar</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                'Cybersecurity & GRC Advisory',
                'Cloud, Proxmox & Managed IT',
                'Full-Stack AI & SaaS Build',
                'Technical Training & Executive Workshop'
              ].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setServiceType(option)}
                  className={`p-3 rounded-xl border text-left text-xs font-semibold transition-all active:scale-98 ${
                    serviceType === option
                      ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-md font-bold'
                      : darkMode
                      ? 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Organization Scale & Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase text-slate-400">Organization Profile</label>
              <select
                value={scopeScale}
                onChange={(e) => setScopeScale(e.target.value)}
                className={`w-full p-2.5 rounded-xl border text-xs font-medium outline-none ${
                  darkMode
                    ? 'bg-slate-950 border-slate-800 text-slate-200 focus:border-emerald-500'
                    : 'bg-slate-50 border-slate-300 text-slate-800 focus:border-emerald-600'
                }`}
              >
                <option>SMB / Regional Organization</option>
                <option>Enterprise / Financial Institution</option>
                <option>Startup / Venture MVP</option>
                <option>Agricultural / Civic Organization</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase text-slate-400">Target Delivery Horizon</label>
              <select
                value={timelineUrgency}
                onChange={(e) => setTimelineUrgency(e.target.value)}
                className={`w-full p-2.5 rounded-xl border text-xs font-medium outline-none ${
                  darkMode
                    ? 'bg-slate-950 border-slate-800 text-slate-200 focus:border-emerald-500'
                    : 'bg-slate-50 border-slate-300 text-slate-800 focus:border-emerald-600'
                }`}
              >
                <option>Standard (2-4 Weeks)</option>
                <option>Accelerated Sprint (1-2 Weeks)</option>
                <option>Ongoing Managed Retainer</option>
              </select>
            </div>
          </div>

          {/* Optional Technical Add-ons */}
          <div className="space-y-2">
            <label className="text-xs font-mono uppercase text-slate-400">
              Include Specialized Modules
            </label>
            <div className="flex flex-wrap gap-2">
              {[
                'Zero Trust / Cloudflare Audit',
                'KYC / AML & Sanctions Workflow',
                'n8n + AI Agent Automation',
                'Supabase / Cloud DB Architecture',
                'Proxmox / Hybrid Server Setup'
              ].map((addon) => {
                const active = selectedAddons.includes(addon);
                return (
                  <button
                    key={addon}
                    type="button"
                    onClick={() => toggleAddon(addon)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition-all active:scale-95 ${
                      active
                        ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 font-semibold'
                        : darkMode
                        ? 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                        : 'bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {active ? '✓ ' : '+ '}
                    {addon}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Live Generated Scope Summary Box */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 font-mono text-xs text-slate-300 relative">
            <div className="text-emerald-400 font-bold flex items-center justify-between">
              <span>ESTIMATED ARCHITECTURE BRIEF</span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                {consultationEstimate.hours}
              </span>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed">
              <strong>Primary Deliverable:</strong> {consultationEstimate.deliverable}
            </p>
            <div className="text-[11px] text-slate-400 pt-1 flex flex-wrap items-center justify-between gap-2">
              <span>Model: {consultationEstimate.effort} • Region: Simcoe County / GTA / Remote</span>
              <button
                type="button"
                onClick={handleCopyScope}
                className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 underline underline-offset-2"
              >
                {copiedScope ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedScope ? 'Copied Brief' : 'Copy Brief'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right: Direct Dispatch Contact Form */}
        <div
          className={`lg:col-span-6 rounded-2xl border p-6 sm:p-8 flex flex-col justify-between ${
            darkMode ? 'bg-[#0D1320]/95 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}
        >
          {formSubmitted ? (
            <div className="my-auto py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="text-2xl font-bold">Consultation Scope Formatted</h3>
              <p
                className={`text-sm max-w-md mx-auto ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                Thank you, <strong>{contactForm.name || 'Partner'}</strong>. Your scope for{' '}
                <span className="text-emerald-400 font-mono">{serviceType}</span> ({scopeScale}) has been formatted
                for Wisdom Ikhuoria Salami at TDWAS Technologies.
              </p>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 max-w-md mx-auto text-left font-mono text-xs text-slate-300 space-y-1">
                <div>STATUS: READY FOR DISPATCH</div>
                <div>PILLAR: {serviceType}</div>
                <div>TIMELINE: {timelineUrgency}</div>
                <div>MODULES: {selectedAddons.join(', ') || 'Standard Core'}</div>
                <div>EMAIL: {contactForm.email || 'consult@tdwas.com'}</div>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-5 py-2.5 rounded-xl text-xs font-mono font-semibold bg-emerald-500 text-slate-950 hover:bg-emerald-400 active:scale-95"
                >
                  Modify Scope or Send Another Inquiry
                </button>
                <a
                  href={`mailto:consult@tdwas.com?subject=TDWAS Inquiry: ${encodeURIComponent(
                    serviceType
                  )}&body=${encodeURIComponent(
                    `Hi Wisdom,\n\nI am contacting you regarding ${serviceType} for ${
                      contactForm.organization || 'my organization'
                    }.\n\nScope: ${scopeScale} (${timelineUrgency})\nModules: ${selectedAddons.join(
                      ', '
                    )}\n\nNotes:\n${contactForm.notes}\n\nBest regards,\n${contactForm.name}`
                  )}`}
                  className="px-5 py-2.5 rounded-xl text-xs font-mono font-semibold bg-cyan-500 text-slate-950 hover:bg-cyan-400 active:scale-95"
                >
                  Send via Email Client
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800/60 pb-4">
                <div>
                  <h3 className="text-lg font-bold">2. Dispatch Inquiry to TDWAS Technologies</h3>
                  <p className={`text-xs mt-0.5 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    Direct executive consultation for Bradford, Barrie, Newmarket, Mississauga & Toronto.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 rounded text-xs font-mono bg-slate-900 text-slate-300 border border-slate-700 hover:border-emerald-400 flex items-center gap-1 active:scale-95"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                  <span>{copiedEmail ? 'Copied!' : 'consult@tdwas.com'}</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    placeholder="Alex Mercer"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm outline-none ${
                      darkMode
                        ? 'bg-slate-950 border-slate-800 text-slate-100 focus:border-emerald-500'
                        : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-emerald-600'
                    }`}
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                    Company / Municipality
                  </label>
                  <input
                    type="text"
                    value={contactForm.organization}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, organization: e.target.value })
                    }
                    placeholder="Simcoe Enterprise Corp."
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm outline-none ${
                      darkMode
                        ? 'bg-slate-950 border-slate-800 text-slate-100 focus:border-emerald-500'
                        : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-emerald-600'
                    }`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    placeholder="alex@organization.ca"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm outline-none ${
                      darkMode
                        ? 'bg-slate-950 border-slate-800 text-slate-100 focus:border-emerald-500'
                        : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-emerald-600'
                    }`}
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                    Region
                  </label>
                  <input
                    type="text"
                    value={contactForm.location}
                    onChange={(e) => setContactForm({ ...contactForm, location: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm outline-none ${
                      darkMode
                        ? 'bg-slate-950 border-slate-800 text-slate-100 focus:border-emerald-500'
                        : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-emerald-600'
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                  Project Context, GRC Objectives or Technical Requirements
                </label>
                <textarea
                  rows={3}
                  value={contactForm.notes}
                  onChange={(e) => setContactForm({ ...contactForm, notes: e.target.value })}
                  placeholder="Describe your compliance goals, infrastructure bottlenecks, or custom AI platform needs..."
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm outline-none resize-none ${
                    darkMode
                      ? 'bg-slate-950 border-slate-800 text-slate-100 focus:border-emerald-500'
                      : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-emerald-600'
                  }`}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 hover:brightness-110 active:scale-98 transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Generate & Transmit Consultation Request</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
