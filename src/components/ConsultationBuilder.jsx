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
    location: 'Greater Toronto Area & remote',
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

  const field =
    'w-full h-11 px-3 rounded-[var(--radius-pill)] border border-[var(--color-rule)] bg-[var(--color-paper-2)] text-[0.9375rem] text-[var(--color-ink)] placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)] outline-none transition-colors duration-150';
  const label = 'block text-[0.8125rem] text-[var(--color-muted)] mb-1.5';

  return (
    <section id="contact" className="band band-bone dots scroll-mt-20">
      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left: say hello */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-3">
            <h2 className="text-[clamp(2rem,3.2vw,2.75rem)] leading-[1.1] text-[var(--color-ink)]">Say hello</h2>
            <p className="text-[1.0625rem] leading-relaxed text-[var(--color-muted)] max-w-[26rem]">
              Tell me a little about the engagement. The form writes a scope brief you can copy or send.
            </p>
          </div>

          <div className="inline-flex items-center gap-1 p-1 pl-4 rounded-[var(--radius-pill)] border border-[var(--color-rule)] bg-[var(--color-paper-2)] shadow-[var(--shadow-card)]">
            <a href="mailto:consult@tdwas.com" className="text-[0.9375rem] text-[var(--color-accent)] no-underline hover:underline pr-3">
              consult@tdwas.com
            </a>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="h-9 px-3 rounded-[4px] text-[0.8125rem] font-medium bg-[var(--color-paper)] text-[var(--color-ink)] hover:text-[var(--color-accent)] flex items-center gap-1.5 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5" aria-hidden="true" /> : <Copy className="w-3.5 h-3.5" aria-hidden="true" />}
              <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          <p className="flex items-center gap-3 text-[0.9375rem] text-[var(--color-ink-2)]">
            <span className="inline-flex w-3.5 h-3.5 items-center justify-center rounded-full bg-[var(--color-accent-soft)]" aria-hidden="true">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
            </span>
            Booking consultations across the Greater Toronto Area & remote
          </p>

          {/* The brief the form is writing */}
          <div className="rounded-[var(--radius-card)] border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-5 space-y-2 max-w-[28rem]">
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-[0.8125rem] text-[var(--color-accent)]">Your brief</span>
              <span className="num font-mono text-[0.8125rem] text-[var(--color-muted)]">{consultationEstimate.hours}</span>
            </div>
            <p className="text-[0.9375rem] leading-relaxed text-[var(--color-ink)]">{consultationEstimate.deliverable}</p>
            <div className="flex items-center justify-between gap-3 pt-2 border-t border-[var(--color-rule)] text-[0.8125rem] text-[var(--color-muted)]">
              <span>{consultationEstimate.effort}</span>
              <button
                type="button"
                onClick={handleCopyScope}
                className="flex items-center gap-1 text-[var(--color-ink)] hover:text-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
              >
                {copiedScope ? <Check className="w-3 h-3" aria-hidden="true" /> : <Copy className="w-3 h-3" aria-hidden="true" />}
                <span>{copiedScope ? 'Copied' : 'Copy brief'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right: the form card */}
        <div className="lg:col-span-7 rounded-[var(--radius-card)] border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-6 sm:p-8 shadow-[var(--shadow-card)]">
          {formSubmitted ? (
            <div className="py-10 text-center space-y-4">
              <CheckCircle2 className="w-8 h-8 mx-auto text-[var(--color-accent)]" aria-hidden="true" />
              <h3 className="text-[1.5rem] text-[var(--color-ink)]">Brief ready</h3>
              <p className="text-[0.9375rem] text-[var(--color-muted)] max-w-sm mx-auto">
                Your scope for {serviceType} ({scopeScale}) is ready to send to Wisdom at TDWAS Technologies.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
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
                  className="h-11 inline-flex items-center px-5 rounded-[var(--radius-pill)] text-[0.9375rem] font-medium no-underline bg-[var(--color-ink)] text-[var(--color-paper)] hover:bg-[var(--color-accent)] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
                >
                  Send via email
                </a>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="h-11 px-5 rounded-[var(--radius-pill)] text-[0.9375rem] font-medium border border-[var(--color-rule)] bg-[var(--color-paper)] text-[var(--color-ink)] hover:border-[var(--color-accent)] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
                >
                  Edit the brief
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="cf-name" className={label}>Name</label>
                  <input
                    id="cf-name"
                    type="text"
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    placeholder="Your name"
                    className={field}
                  />
                </div>
                <div>
                  <label htmlFor="cf-email" className={label}>Email</label>
                  <input
                    id="cf-email"
                    type="email"
                    required
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    placeholder="you@company.com"
                    className={field}
                  />
                </div>
                <div>
                  <label htmlFor="cf-org" className={label}>Company or municipality</label>
                  <input
                    id="cf-org"
                    type="text"
                    value={contactForm.organization}
                    onChange={(e) => setContactForm({ ...contactForm, organization: e.target.value })}
                    placeholder="Optional"
                    className={field}
                  />
                </div>
                <div>
                  <label htmlFor="cf-region" className={label}>Region</label>
                  <input
                    id="cf-region"
                    type="text"
                    value={contactForm.location}
                    onChange={(e) => setContactForm({ ...contactForm, location: e.target.value })}
                    className={field}
                  />
                </div>
              </div>

              <fieldset>
                <legend className={label}>What do you need?</legend>
                <div className="flex flex-wrap gap-2">
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
                      aria-pressed={serviceType === option}
                      className={`h-9 px-3 rounded-[var(--radius-pill)] border text-[0.875rem] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] ${
                        serviceType === option
                          ? 'bg-[var(--color-accent)] border-[var(--color-accent)] text-[var(--color-accent-ink)]'
                          : 'bg-[var(--color-paper-2)] border-[var(--color-rule)] text-[var(--color-ink-2)] hover:border-[var(--color-rule-2)]'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </fieldset>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="cf-scale" className={label}>Organization</label>
                  <select id="cf-scale" value={scopeScale} onChange={(e) => setScopeScale(e.target.value)} className={field}>
                    <option>SMB / Regional Organization</option>
                    <option>Enterprise / Financial Institution</option>
                    <option>Startup / Venture MVP</option>
                    <option>Agricultural / Civic Organization</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="cf-horizon" className={label}>Timeline</label>
                  <select id="cf-horizon" value={timelineUrgency} onChange={(e) => setTimelineUrgency(e.target.value)} className={field}>
                    <option>Standard (2-4 Weeks)</option>
                    <option>Accelerated Sprint (1-2 Weeks)</option>
                    <option>Ongoing Managed Retainer</option>
                  </select>
                </div>
              </div>

              <fieldset>
                <legend className={label}>Add modules</legend>
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
                        aria-pressed={active}
                        className={`h-8 px-2.5 rounded-[var(--radius-pill)] border text-[0.8125rem] flex items-center gap-1.5 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] ${
                          active
                            ? 'bg-[var(--color-accent-soft)] border-[var(--color-accent)] text-[var(--color-cool)]'
                            : 'bg-[var(--color-paper-2)] border-[var(--color-rule)] text-[var(--color-muted)] hover:text-[var(--color-ink)]'
                        }`}
                      >
                        {active && <Check className="w-3 h-3" aria-hidden="true" />}
                        {addon}
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              <div>
                <label htmlFor="cf-notes" className={label}>What are you working on?</label>
                <textarea
                  id="cf-notes"
                  rows={4}
                  value={contactForm.notes}
                  onChange={(e) => setContactForm({ ...contactForm, notes: e.target.value })}
                  placeholder="A few lines about the company and what you need"
                  className={`${field} h-auto py-2.5 rounded-[var(--radius-card)] resize-none`}
                />
              </div>

              <button
                type="submit"
                className="h-11 px-6 rounded-[var(--radius-pill)] text-[0.9375rem] font-medium bg-[var(--color-ink)] text-[var(--color-paper)] hover:bg-[var(--color-accent)] hover:text-[var(--color-accent-ink)] transition-colors duration-150 flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
              >
                <Send className="w-4 h-4" aria-hidden="true" />
                <span>Send</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
