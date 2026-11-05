import React, { useState, useMemo } from 'react';
import {
  Send,
  Check,
  Copy,
  CheckCircle2
} from 'lucide-react';

export default function ConsultationBuilder({ preselectedService }) {
  const [userSelectedService, setUserSelectedService] = useState(null);

  const serviceType = useMemo(() => {
    if (userSelectedService) return userSelectedService;
    if (preselectedService) {
      if (preselectedService.includes('Cybersecurity') || preselectedService.includes('GRC')) {
        return 'Cybersecurity & GRC Advisory';
      }
      if (preselectedService.includes('Cloud') || preselectedService.includes('Infrastructure') || preselectedService.includes('Proxmox')) {
        return 'Cloud, Proxmox & Managed IT';
      }
      if (preselectedService.includes('AI') || preselectedService.includes('Workflows') || preselectedService.includes('Platforms')) {
        return 'Full-Stack AI & SaaS Build';
      }
    }
    return 'Cybersecurity & GRC Advisory';
  }, [userSelectedService, preselectedService]);

  const setServiceType = (val) => setUserSelectedService(val);
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
    location: 'Bradford, Simcoe County or GTA',
    notes: ''
  });

  const consultationEstimate = useMemo(() => {
    const baseMap = {
      'Cybersecurity & GRC Advisory': {
        deliverable: 'KYC/AML risk matrix, sanctions audit and security governance roadmap',
        effort: 'Advisory retainer or fixed audit',
        hours: '25 – 60 hrs'
      },
      'Cloud, Proxmox & Managed IT': {
        deliverable: 'Hybrid cloud virtualization architecture, SCCM and Cloudflare Zero Trust deployment',
        effort: 'Systems architecture and rollout',
        hours: '30 – 80 hrs'
      },
      'Full-Stack AI & SaaS Build': {
        deliverable: 'Production React/Supabase web platform with autonomous n8n and AI agent pipelines',
        effort: 'Full-stack delivery sprint',
        hours: '40 – 120 hrs'
      },
      'Technical Training & Executive Workshop': {
        deliverable: 'Custom programming, AI automation, or cyber hygiene curriculum and live instruction',
        effort: 'Cohort or team workshop',
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
Selected Modules: ${selectedAddons.join(', ') || 'None'}
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
      <div className="border-b border-[var(--color-rule)] pb-4">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-ink)]">
          Scope a Consultation or Engagement
        </h2>
        <p className="text-sm text-[var(--color-muted)] mt-1">
          Configure engagement parameters to generate an instant architectural scope.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Interactive Service Configurator */}
        <div className="lg:col-span-6 rounded-[var(--radius-card)] border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-6 space-y-5">
          <div className="flex items-center justify-between border-b border-[var(--color-rule)] pb-3">
            <div>
              <h3 className="text-base font-bold text-[var(--color-ink)]">1. Parameters and scope</h3>
              <p className="text-xs text-[var(--color-muted)] mt-0.5">
                Select your advisory pillar to calculate estimated effort.
              </p>
            </div>
            <span className="px-2.5 py-0.5 rounded-[var(--radius-pill)] text-xs text-[var(--color-cool)] bg-[var(--color-cool-soft)] border border-[var(--color-rule)]">
              Instant brief
            </span>
          </div>

          {/* Pillar Selector */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-[var(--color-muted)]">Primary advisory pillar</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
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
                  className={`p-2.5 rounded-[var(--radius-card)] border text-left text-xs transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] ${
                    serviceType === option
                      ? 'bg-[var(--color-accent)] text-[var(--color-accent-ink)] border-[var(--color-accent)] font-semibold'
                      : 'bg-[var(--color-paper)] border-[var(--color-rule)] text-[var(--color-ink-2)] hover:border-[var(--color-rule-2)]'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Organization Scale & Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-[var(--color-muted)]">Organization profile</label>
              <select
                value={scopeScale}
                onChange={(e) => setScopeScale(e.target.value)}
                className="w-full p-2.5 rounded-[var(--radius-pill)] border border-[var(--color-rule)] bg-[var(--color-paper)] text-xs text-[var(--color-ink)] focus:border-[var(--color-cool)] outline-none"
              >
                <option>SMB / Regional Organization</option>
                <option>Enterprise / Financial Institution</option>
                <option>Startup / Venture MVP</option>
                <option>Agricultural / Civic Organization</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-[var(--color-muted)]">Target delivery horizon</label>
              <select
                value={timelineUrgency}
                onChange={(e) => setTimelineUrgency(e.target.value)}
                className="w-full p-2.5 rounded-[var(--radius-pill)] border border-[var(--color-rule)] bg-[var(--color-paper)] text-xs text-[var(--color-ink)] focus:border-[var(--color-cool)] outline-none"
              >
                <option>Standard (2-4 Weeks)</option>
                <option>Accelerated Sprint (1-2 Weeks)</option>
                <option>Ongoing Managed Retainer</option>
              </select>
            </div>
          </div>

          {/* Optional Technical Add-ons */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-[var(--color-muted)]">
              Include specialized modules
            </label>
            <div className="flex flex-wrap gap-1.5">
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
                    className={`px-2.5 py-1 rounded-[var(--radius-pill)] text-xs border transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] ${
                      active
                        ? 'bg-[var(--color-cool-soft)] border-[var(--color-cool)] text-[var(--color-cool)] font-medium'
                        : 'bg-[var(--color-paper)] border-[var(--color-rule)] text-[var(--color-muted)] hover:text-[var(--color-ink)]'
                    }`}
                  >
                    {active ? '✓ ' : '+ '}
                    {addon}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Generated Scope Summary Box */}
          <div className="p-3.5 rounded-[var(--radius-card)] bg-[var(--color-paper-deep)] border border-[var(--color-rule)] space-y-1.5 text-xs text-[var(--color-ink-2)]">
            <div className="text-[var(--color-accent)] font-semibold flex items-center justify-between">
              <span>Estimated architecture brief</span>
              <span className="font-mono text-xs px-2 py-0.5 rounded bg-[var(--color-accent-soft)]">
                {consultationEstimate.hours}
              </span>
            </div>
            <p className="text-xs leading-relaxed text-[var(--color-muted)]">
              <strong className="text-[var(--color-ink-2)]">Deliverable:</strong> {consultationEstimate.deliverable}
            </p>
            <div className="text-[11px] text-[var(--color-muted)] pt-1 flex flex-wrap items-center justify-between gap-2 border-t border-[var(--color-rule)]">
              <span>Model: {consultationEstimate.effort}</span>
              <button
                type="button"
                onClick={handleCopyScope}
                className="text-[var(--color-cool)] hover:underline flex items-center gap-1 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
              >
                {copiedScope ? <Check className="w-3 h-3 text-[var(--color-accent)]" aria-hidden="true" /> : <Copy className="w-3 h-3" aria-hidden="true" />}
                <span>{copiedScope ? 'Copied brief' : 'Copy brief'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right: Direct Dispatch Contact Form */}
        <div className="lg:col-span-6 rounded-[var(--radius-card)] border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-6 flex flex-col justify-between">
          {formSubmitted ? (
            <div className="my-auto py-8 text-center space-y-3">
              <div className="w-12 h-12 rounded-[var(--radius-pill)] bg-[var(--color-accent-soft)] border border-[var(--color-rule)] text-[var(--color-accent)] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-[var(--color-ink)]">Consultation brief logged</h3>
              <p className="text-xs text-[var(--color-muted)] max-w-sm mx-auto">
                Your scope for <span className="text-[var(--color-accent)]">{serviceType}</span> ({scopeScale}) has been prepared for Wisdom Ikhuoria Salami at TDWAS Technologies.
              </p>
              <div className="p-3 rounded-[var(--radius-card)] bg-[var(--color-paper-deep)] border border-[var(--color-rule)] max-w-sm mx-auto text-left text-xs font-mono text-[var(--color-ink-2)] space-y-1">
                <div>STATUS: READY FOR DISPATCH</div>
                <div>PILLAR: {serviceType}</div>
                <div>TIMELINE: {timelineUrgency}</div>
                <div>EMAIL: {contactForm.email || 'consult@tdwas.com'}</div>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-4 py-2 rounded-[var(--radius-pill)] text-xs font-semibold bg-[var(--color-accent)] text-[var(--color-accent-ink)] hover:bg-[var(--color-ink)] transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
                >
                  Modify scope
                </button>
                <a
                  href={`mailto:consult@tdwas.com?subject=TDWAS Inquiry: ${encodeURIComponent(
                    serviceType
                  )}&body=${encodeURIComponent(
                    `Hi Wisdom,\n\nInquiry regarding ${serviceType} for ${
                      contactForm.organization || 'my organization'
                    }.\n\nScope: ${scopeScale} (${timelineUrgency})\nModules: ${selectedAddons.join(
                      ', '
                    )}\n\nNotes:\n${contactForm.notes}\n\nBest regards,\n${contactForm.name}`
                  )}`}
                  className="px-4 py-2 rounded-[var(--radius-pill)] text-xs font-semibold bg-[var(--color-paper)] text-[var(--color-ink)] border border-[var(--color-rule-2)] hover:border-[var(--color-cool)] transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
                >
                  Send via email
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center justify-between border-b border-[var(--color-rule)] pb-3">
                <div>
                  <h3 className="text-base font-bold text-[var(--color-ink)]">2. Dispatch inquiry</h3>
                  <p className="text-xs text-[var(--color-muted)] mt-0.5">
                    Direct consultation dispatch to TDWAS Technologies.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 rounded-[var(--radius-pill)] text-xs font-mono bg-[var(--color-paper)] text-[var(--color-ink-2)] border border-[var(--color-rule)] hover:border-[var(--color-accent)] flex items-center gap-1 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <Check className="w-3.5 h-3.5 text-[var(--color-accent)]" aria-hidden="true" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-[var(--color-muted)]" aria-hidden="true" />
                  )}
                  <span>{copiedEmail ? 'Copied' : 'consult@tdwas.com'}</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-[var(--color-muted)] mb-1">
                    Your name *
                  </label>
                  <input
                    type="text"
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    placeholder="Alex Mercer"
                    className="w-full px-3 py-2 rounded-[var(--radius-pill)] border border-[var(--color-rule)] bg-[var(--color-paper)] text-sm text-[var(--color-ink)] focus:border-[var(--color-cool)] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[var(--color-muted)] mb-1">
                    Company or municipality
                  </label>
                  <input
                    type="text"
                    value={contactForm.organization}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, organization: e.target.value })
                    }
                    placeholder="Simcoe Enterprise Corp."
                    className="w-full px-3 py-2 rounded-[var(--radius-pill)] border border-[var(--color-rule)] bg-[var(--color-paper)] text-sm text-[var(--color-ink)] focus:border-[var(--color-cool)] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-[var(--color-muted)] mb-1">
                    Work email *
                  </label>
                  <input
                    type="email"
                    required
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    placeholder="alex@organization.ca"
                    className="w-full px-3 py-2 rounded-[var(--radius-pill)] border border-[var(--color-rule)] bg-[var(--color-paper)] text-sm text-[var(--color-ink)] focus:border-[var(--color-cool)] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[var(--color-muted)] mb-1">
                    Region
                  </label>
                  <input
                    type="text"
                    value={contactForm.location}
                    onChange={(e) => setContactForm({ ...contactForm, location: e.target.value })}
                    className="w-full px-3 py-2 rounded-[var(--radius-pill)] border border-[var(--color-rule)] bg-[var(--color-paper)] text-sm text-[var(--color-ink)] focus:border-[var(--color-cool)] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[var(--color-muted)] mb-1">
                  Project context or compliance objectives
                </label>
                <textarea
                  rows={3}
                  value={contactForm.notes}
                  onChange={(e) => setContactForm({ ...contactForm, notes: e.target.value })}
                  placeholder="Describe your compliance goals, infrastructure bottlenecks, or custom automation requirements..."
                  className="w-full px-3 py-2 rounded-[var(--radius-card)] border border-[var(--color-rule)] bg-[var(--color-paper)] text-sm text-[var(--color-ink)] focus:border-[var(--color-cool)] outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-[var(--radius-pill)] font-semibold text-xs sm:text-sm bg-[var(--color-accent)] text-[var(--color-accent-ink)] hover:bg-[var(--color-ink)] transition-colors duration-150 flex items-center justify-center gap-2 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] active:opacity-90 disabled:opacity-50"
              >
                <Send className="w-4 h-4 text-[var(--color-accent-ink)]" aria-hidden="true" />
                <span>Transmit request</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
