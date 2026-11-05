import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Pillars from './components/Pillars';
import Projects from './components/Projects';
import Homelab from './components/Homelab';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import BeyondTerminal from './components/BeyondTerminal';
import ConsultationBuilder from './components/ConsultationBuilder';
import Footer from './components/Footer';
import TerminalModal from './components/TerminalModal';
import ProjectModal from './components/ProjectModal';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [selectedProjectModal, setSelectedProjectModal] = useState(null);

  // Global Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ctrl+K or Cmd+K toggles Terminal Shell
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
      // Escape closes any open modal
      if (e.key === 'Escape') {
        setTerminalOpen(false);
        setResumeOpen(false);
        setSelectedProjectModal(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-paper)] text-[var(--color-ink)] selection:bg-[var(--color-accent)] selection:text-[var(--color-accent-ink)]">
      {/* Structural subtle sheet grid */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--color-rule) 1px, transparent 1px), linear-gradient(to bottom, var(--color-rule) 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}
      />

      {/* Header with status bar */}
      <Header
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
        onScrollTo={scrollToSection}
      />

      {/* Main Content Container */}
      <main className="relative z-10 container pt-6 pb-24 space-y-24">
        {/* 1. Hero Section */}
        <Hero
          onOpenResume={() => setResumeOpen(true)}
          onOpenTerminal={() => setTerminalOpen(true)}
          onScrollTo={scrollToSection}
        />

        {/* 2. Core Pillars */}
        <Pillars />

        {/* 3. Featured Ecosystem & Projects */}
        <Projects
          onSelectProject={(project) => setSelectedProjectModal(project)}
        />

        {/* 4. Interactive Home Lab */}
        <Homelab />

        {/* 5. Toolchain Matrix */}
        <Skills />

        {/* 6. Professional Timeline */}
        <Timeline
          onOpenResume={() => setResumeOpen(true)}
        />

        {/* 7. Beyond the Terminal */}
        <BeyondTerminal
          onOpenTerminal={() => setTerminalOpen(true)}
        />

        {/* 8. Consultation Builder */}
        <ConsultationBuilder />
      </main>

      {/* Footer */}
      <Footer
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Interactive Command Palette Shell (CLI) */}
      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Project Architecture Inspector */}
      <ProjectModal
        project={selectedProjectModal}
        onClose={() => setSelectedProjectModal(null)}
        onInquire={() => scrollToSection('contact')}
      />

      {/* Executive Resume & Capability Statement */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
