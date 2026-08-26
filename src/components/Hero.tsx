import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Terminal, 
  Zap, 
  ShieldCheck, 
  Cpu, 
  Globe2, 
  Sparkles,
  ChevronRight,
  Layers,
  Code2
} from 'lucide-react';

interface HeroProps {
  onViewWork: () => void;
  onContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewWork, onContact }) => {
  const [terminalTextIndex, setTerminalTextIndex] = useState(0);
  const [cursorBlink, setCursorBlink] = useState(true);

  const commandLogs = [
    'kyotech --deploy --cluster=karachi-primary --global-cdn',
    'status: all systems operational [latency: 14ms]',
    'routing: high-frequency web applications initialized',
    'security: zero-trust multi-party cryptography verified'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTerminalTextIndex(prev => (prev + 1) % commandLogs.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const blink = setInterval(() => setCursorBlink(b => !b), 500);
    return () => clearInterval(blink);
  }, []);

  return (
    <section 
      id="hero-section" 
      className="relative min-h-[90vh] flex flex-col justify-center items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Cyber Grid Flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[600px] cyber-grid-bg opacity-30 pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full text-center relative z-10 flex flex-col items-center">
        
        {/* Sleek Interface Status Tag */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs uppercase tracking-widest mb-8 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span>Karachi, Pakistan</span>
          <div className="w-px h-3.5 bg-white/20" />
          <span className="text-cyan-400 font-semibold">Worldwide Delivery</span>
        </div>

        {/* 1. Bold glowing neon gradient headline: "Building the Digital Future." */}
        <h1 
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tight uppercase mb-6"
          id="hero-headline"
        >
          <span className="block text-white">Building the</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]">
            Digital Future.
          </span>
        </h1>

        {/* 2. Subheadline */}
        <p 
          className="max-w-2xl mx-auto text-base sm:text-lg text-white/60 leading-relaxed mb-10 text-balance"
          id="hero-subheadline"
        >
          Kyotech is a premier web development agency based in Karachi, delivering 
          high-performance digital solutions worldwide.
        </p>

        {/* 3. Two Call-to-Action (CTA) buttons: "View Our Work" and "Let's Talk" */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md mb-16">
          
          {/* Solid neon gradient button */}
          <button
            onClick={onViewWork}
            className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold rounded-md shadow-lg shadow-purple-500/20 hover:shadow-cyan-400/40 transition-all uppercase text-xs tracking-widest flex items-center justify-center gap-2 group cursor-pointer"
            id="hero-cta-view-work"
          >
            <span>View Our Work</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Ghost button with neon border */}
          <button
            onClick={onContact}
            className="w-full sm:w-auto px-6 py-3.5 border border-cyan-500/50 text-cyan-400 font-bold rounded-md hover:bg-cyan-500/10 transition-all uppercase text-xs tracking-widest flex items-center justify-center gap-2 cursor-pointer"
            id="hero-cta-lets-talk"
          >
            <span>Let's Talk</span>
            <span className="text-pink-400 font-bold">//</span>
          </button>

        </div>

        {/* Interactive Cyber Telemetry Terminal Bar */}
        <div className="w-full max-w-3xl bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4 text-left font-mono text-xs text-white/80">
          <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2.5">
            <div className="flex items-center gap-2 text-white/50 text-[11px]">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-pink-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400/80 inline-block" />
              </div>
              <span className="text-cyan-400 font-semibold ml-2">SYSTEM // KYOTECH CORE ENGINE</span>
            </div>
            <div className="text-[10px] text-pink-400 bg-pink-500/10 px-2 py-0.5 rounded border border-pink-500/30">
              SSH 256-BIT SECURE
            </div>
          </div>
          
          <div className="flex items-center gap-2 py-1 text-white/90">
            <span className="text-purple-400 font-bold">root@kyotech-khi:~$</span>
            <span className="text-cyan-300">{commandLogs[terminalTextIndex]}</span>
            <span className={`w-2 h-4 bg-cyan-400 inline-block ${cursorBlink ? 'opacity-100' : 'opacity-0'}`} />
          </div>
        </div>

        {/* Live Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 w-full max-w-4xl mt-12">
          <div className="p-4 bg-white/5 border border-white/10 rounded-lg backdrop-blur-md text-center hover:border-cyan-500/50 transition-all">
            <div className="text-2xl sm:text-3xl font-black text-cyan-400 font-mono">10+</div>
            <div className="text-[10px] text-white/50 uppercase tracking-widest mt-1">High-Impact Projects</div>
          </div>
          <div className="p-4 bg-white/5 border border-white/10 rounded-lg backdrop-blur-md text-center hover:border-purple-500/50 transition-all">
            <div className="text-2xl sm:text-3xl font-black text-purple-400 font-mono">&lt; 40ms</div>
            <div className="text-[10px] text-white/50 uppercase tracking-widest mt-1">Global Edge Latency</div>
          </div>
          <div className="p-4 bg-white/5 border border-white/10 rounded-lg backdrop-blur-md text-center hover:border-pink-500/50 transition-all">
            <div className="text-2xl sm:text-3xl font-black text-pink-400 font-mono">99.99%</div>
            <div className="text-[10px] text-white/50 uppercase tracking-widest mt-1">Enterprise SLA Uptime</div>
          </div>
          <div className="p-4 bg-white/5 border border-white/10 rounded-lg backdrop-blur-md text-center hover:border-orange-500/50 transition-all">
            <div className="text-2xl sm:text-3xl font-black text-orange-400 font-mono">100%</div>
            <div className="text-[10px] text-white/50 uppercase tracking-widest mt-1">On-Time Global Delivery</div>
          </div>
        </div>

      </div>
    </section>
  );
};
