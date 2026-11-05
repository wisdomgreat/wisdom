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
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('tdwas_theme');
      if (saved) return saved === 'dark';
    }
    return true;
  });

  const [terminalOpen, setTerminalOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [selectedProjectModal, setSelectedProjectModal] = useState(null);

  // Sync theme with HTML class and local storage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('tdwas_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('tdwas_theme', 'light');
    }
  }, [darkMode]);

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
    <div
      className={`min-h-screen transition-colors duration-300 font-sans selection:bg-emerald-500 selection:text-slate-950 ${
        darkMode ? 'bg-[#090D16] text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* SUBTLE CYBER-EXECUTIVE BACKGROUND GRID & GLOWS */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-40 transition-opacity"
        style={{
          backgroundImage: darkMode
            ? 'radial-gradient(circle at 15% 15%, rgba(16, 185, 129, 0.12), transparent 40%), radial-gradient(circle at 85% 75%, rgba(6, 182, 212, 0.10), transparent 45%), linear-gradient(to right, rgba(148, 163, 184, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.05) 1px, transparent 1px)'
            : 'radial-gradient(circle at 15% 15%, rgba(16, 185, 129, 0.08), transparent 40%), radial-gradient(circle at 85% 75%, rgba(6, 182, 212, 0.08), transparent 45%), linear-gradient(to right, rgba(15, 23, 42, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(15, 23, 42, 0.04) 1px, transparent 1px)',
          backgroundSize: '100% 100%, 100% 100%, 40px 40px, 40px 40px'
        }}
      />

      {/* HEADER WITH TOP STATUS BAR */}
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
        onScrollTo={scrollToSection}
      />

      {/* MAIN CONTENT CONTAINER */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-28 space-y-28">
        {/* 1. HERO SECTION */}
        <Hero
          darkMode={darkMode}
          onOpenResume={() => setResumeOpen(true)}
          onOpenTerminal={() => setTerminalOpen(true)}
          onScrollTo={scrollToSection}
        />

        {/* 2. CORE PILLARS / TDWAS TECHNOLOGIES */}
        <Pillars darkMode={darkMode} />

        {/* 3. FEATURED ECOSYSTEM & TECHNICAL PROJECTS */}
        <Projects
          darkMode={darkMode}
          onSelectProject={(project) => setSelectedProjectModal(project)}
        />

        {/* 4. INTERACTIVE HOME LAB & INFRASTRUCTURE */}
        <Homelab darkMode={darkMode} />

        {/* 5. INFRASTRUCTURE & TOOLCHAIN MATRIX */}
        <Skills darkMode={darkMode} />

        {/* 6. EXPERIENCE & LEADERSHIP TIMELINE */}
        <Timeline
          darkMode={darkMode}
          onOpenResume={() => setResumeOpen(true)}
        />

        {/* 7. BEYOND THE TERMINAL (BRADFORD LIFE) */}
        <BeyondTerminal
          darkMode={darkMode}
          onOpenTerminal={() => setTerminalOpen(true)}
        />

        {/* 8. CONSULTATION BUILDER & CONTACT */}
        <ConsultationBuilder darkMode={darkMode} />
      </main>

      {/* FOOTER */}
      <Footer
        darkMode={darkMode}
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* MODAL 1: INTERACTIVE COMMAND PALETTE (CLI) */}
      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* MODAL 2: PROJECT ARCHITECTURE INSPECTOR */}
      <ProjectModal
        project={selectedProjectModal}
        onClose={() => setSelectedProjectModal(null)}
        onInquire={() => scrollToSection('contact')}
      />

      {/* MODAL 3: EXECUTIVE RESUME & CAPABILITY DOC */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
