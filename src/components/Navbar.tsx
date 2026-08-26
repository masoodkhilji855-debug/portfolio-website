import React, { useState, useEffect } from 'react';
import { Terminal, Shield, Menu, X, ArrowUpRight, Sparkles, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [karachiTime, setKarachiTime] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update Karachi local time (PKT: UTC+5)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Karachi',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setKarachiTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#050507]/90 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.8)]' 
          : 'bg-[#050507]/40 backdrop-blur-sm border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Identity */}
          <a 
            href="#" 
            className="flex items-center gap-3 group focus:outline-none"
            id="brand-logo-link"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-cyan-400 rounded-lg shadow-[0_0_15px_rgba(168,85,247,0.5)] flex items-center justify-center">
              <Terminal className="w-4 h-4 text-white" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold tracking-tighter text-white uppercase">
                Kyotech
              </span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            </div>
          </a>

          {/* Center Nav Links - Desktop */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-xs uppercase tracking-widest text-white/60" id="desktop-nav-links">
            <button 
              onClick={() => scrollToSection('services')}
              className="px-3.5 py-2 hover:text-purple-400 transition-colors rounded hover:bg-white/5"
              id="nav-link-services"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="px-3.5 py-2 hover:text-cyan-400 transition-colors rounded hover:bg-white/5"
              id="nav-link-portfolio"
            >
              Portfolio [10]
            </button>
            <button 
              onClick={() => scrollToSection('tech-matrix')}
              className="px-3.5 py-2 hover:text-pink-400 transition-colors rounded hover:bg-white/5"
              id="nav-link-tech"
            >
              Tech Matrix
            </button>
            <button 
              onClick={() => scrollToSection('about-karachi')}
              className="px-3.5 py-2 hover:text-white transition-colors rounded hover:bg-white/5"
              id="nav-link-about"
            >
              Karachi HQ
            </button>
          </nav>

          {/* Right Action & Karachi Telemetry */}
          <div className="hidden lg:flex items-center gap-5 text-xs uppercase tracking-widest text-white/50">
            {/* Telemetry info */}
            <div className="flex items-center gap-3">
              <span>Karachi, Pakistan</span>
              <div className="w-px h-4 bg-white/20" />
              <span className="text-cyan-400 font-semibold">{karachiTime || 'System Active // 2024'}</span>
            </div>

            {/* Let's Talk CTA */}
            <button
              onClick={() => scrollToSection('contact')}
              className="px-5 py-2.5 border border-cyan-500/50 text-cyan-400 font-bold rounded-md hover:bg-cyan-500/10 transition-all uppercase text-xs tracking-widest flex items-center gap-1.5"
              id="header-cta-talk"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-3 py-1.5 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold text-xs uppercase tracking-widest rounded-md"
            >
              Talk
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white/70 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#050507]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 space-y-4 text-xs uppercase tracking-widest">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 text-white/50">
            <span>Karachi, Pakistan</span>
            <span className="text-cyan-400 font-semibold">{karachiTime}</span>
          </div>

          <div className="flex flex-col space-y-3">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-left py-2 text-white/70 hover:text-purple-400 border-b border-white/5"
            >
              01. Services
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-left py-2 text-white/70 hover:text-cyan-400 border-b border-white/5"
            >
              02. Portfolio (10 Projects)
            </button>
            <button 
              onClick={() => scrollToSection('tech-matrix')}
              className="text-left py-2 text-white/70 hover:text-pink-400 border-b border-white/5"
            >
              03. Tech Matrix
            </button>
            <button 
              onClick={() => scrollToSection('about-karachi')}
              className="text-left py-2 text-white/70 hover:text-white border-b border-white/5"
            >
              04. Karachi HQ
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-left py-2 text-cyan-400 font-bold"
            >
              05. Contact Us & Brief
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
