import React from 'react';
import { 
  Terminal, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter, 
  Send, 
  ArrowUp
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050507] border-t border-white/10 pt-16 pb-12 px-4 sm:px-6 lg:px-8 relative z-10 font-mono text-xs text-white/50">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1 & 2: Brand Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-cyan-400 flex items-center justify-center p-0.5 shadow-md shadow-purple-500/30">
                <div className="w-full h-full bg-[#050507] rounded-md flex items-center justify-center">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <span className="font-heading font-black text-xl tracking-wider text-white">
                KYO<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">TECH</span>
              </span>
            </div>

            <p className="text-white/60 text-xs leading-relaxed max-w-sm font-sans">
              Kyotech is a premier web development agency based in Karachi, Pakistan, 
              delivering high-performance digital solutions worldwide.
            </p>

            <div className="flex items-center gap-2 text-cyan-400 text-[11px] pt-1">
              <MapPin className="w-3.5 h-3.5 text-pink-400" />
              <span>Karachi, Sindh, Pakistan // 24.8607° N, 67.0011° E</span>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-3">
            <span className="text-white font-bold tracking-wider uppercase block text-[11px] border-b border-white/10 pb-1">
              Navigation
            </span>
            <ul className="space-y-2 text-white/50 text-xs">
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">01. Services</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-pink-400 transition-colors">02. 10 Flagship Projects</a>
              </li>
              <li>
                <a href="#tech-matrix" className="hover:text-purple-400 transition-colors">03. Technology Matrix</a>
              </li>
              <li>
                <a href="#about-karachi" className="hover:text-emerald-400 transition-colors">04. Karachi HQ</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">05. Contact Brief</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Capabilities */}
          <div className="space-y-3">
            <span className="text-white font-bold tracking-wider uppercase block text-[11px] border-b border-white/10 pb-1">
              Capabilities
            </span>
            <ul className="space-y-2 text-white/50 text-xs">
              <li>Full-Stack Web Dev</li>
              <li>High-Frequency Web3 UIs</li>
              <li>Custom API Gateways</li>
              <li>AWS & Serverless Clouds</li>
              <li>Headless E-Commerce</li>
              <li>Data Scrapers & Dashboards</li>
            </ul>
          </div>

          {/* Col 5: Social Channels & Global Uplink */}
          <div className="space-y-4">
            <span className="text-white font-bold tracking-wider uppercase block text-[11px] border-b border-white/10 pb-1">
              Connect & Uplink
            </span>

            {/* Social Icons */}
            <div className="flex items-center gap-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded bg-white/5 border border-white/10 hover:border-cyan-400 hover:text-cyan-300 transition-all text-white/60"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded bg-white/5 border border-white/10 hover:border-pink-400 hover:text-pink-300 transition-all text-white/60"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded bg-white/5 border border-white/10 hover:border-purple-400 hover:text-purple-300 transition-all text-white/60"
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded bg-white/5 border border-white/10 hover:border-cyan-400 hover:text-cyan-300 transition-all text-white/60"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>

            <div className="p-2.5 bg-white/5 rounded border border-white/10 text-[10px]">
              <span className="text-white/40 block uppercase">System Status:</span>
              <span className="text-emerald-400 font-bold flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                All Systems 100% Operational
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/40 text-[10px]">
          <div>
            © {new Date().getFullYear()} <span className="text-white/80 font-bold">KYOTECH</span>. Engineered in Karachi, Pakistan. All Rights Reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-cyan-400 hover:text-purple-300 transition-colors p-1 uppercase tracking-wider font-bold"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
