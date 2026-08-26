import React, { useState } from 'react';
import { CyberBackground } from './components/CyberBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { TechMatrix } from './components/TechMatrix';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [prefilledContactTopic, setPrefilledContactTopic] = useState<string>('');

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForQuote = (serviceTitle: string) => {
    setPrefilledContactTopic(`Service: ${serviceTitle}`);
    handleScrollToSection('contact');
  };

  const handleSelectProjectForQuote = (projectName: string) => {
    setPrefilledContactTopic(`Project Architecture: ${projectName}`);
    handleScrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#050507] text-[#e0e0e0] font-sans relative overflow-x-hidden selection:bg-fuchsia-500/30 selection:text-white">
      {/* 1. Sleek Ambient Lighting & Background Canvas */}
      <CyberBackground />

      {/* 2. Top Glassmorphic Navigation Bar */}
      <Navbar onOpenContact={() => handleScrollToSection('contact')} />

      {/* 3. Main Content Container */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Hero 
          onViewWork={() => handleScrollToSection('portfolio')} 
          onContact={() => handleScrollToSection('contact')} 
        />

        {/* Core Services Section */}
        <Services onSelectServiceForQuote={handleSelectServiceForQuote} />

        {/* Portfolio Section (The Core Focus - 10 High Impact Projects) */}
        <Portfolio onOpenProjectModal={(project) => setSelectedProject(project)} />

        {/* Tech Stack Matrix & Karachi HQ Spotlight */}
        <TechMatrix />

        {/* Contact Form Section */}
        <ContactSection prefilledTopic={prefilledContactTopic} />
      </main>

      {/* 4. Footer */}
      <Footer />

      {/* 5. Project Blueprint Inspection Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
        onSelectProjectForQuote={handleSelectProjectForQuote}
      />
    </div>
  );
}
