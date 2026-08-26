import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/servicesData';
import { Service } from '../types';
import { 
  Code2, 
  Cpu, 
  Cloud, 
  ShoppingBag, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Terminal,
  Zap,
  Globe,
  Lock,
  ChevronRight
} from 'lucide-react';

interface ServicesProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForQuote }) => {
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES_DATA[0].id);
  const activeService = SERVICES_DATA.find(s => s.id === activeServiceId) || SERVICES_DATA[0];

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'full-stack-web':
        return <Code2 className="w-6 h-6 text-cyan-400" />;
      case 'api-integration':
        return <Zap className="w-6 h-6 text-purple-400" />;
      case 'cloud-infrastructure':
        return <Cloud className="w-6 h-6 text-pink-400" />;
      case 'ecommerce-solutions':
        return <ShoppingBag className="w-6 h-6 text-emerald-400" />;
      default:
        return <Cpu className="w-6 h-6 text-cyan-400" />;
    }
  };

  const getGlowClass = (accent: string) => {
    switch (accent) {
      case 'cyan': return 'hover:border-cyan-500/60 hover:shadow-[0_0_30px_rgba(6,182,212,0.25)]';
      case 'purple': return 'hover:border-purple-500/60 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]';
      case 'pink': return 'hover:border-pink-500/60 hover:shadow-[0_0_30px_rgba(236,72,153,0.25)]';
      case 'emerald': return 'hover:border-emerald-500/60 hover:shadow-[0_0_30px_rgba(16,185,129,0.25)]';
      default: return 'hover:border-cyan-500/60';
    }
  };

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold mb-3 flex items-center justify-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>Core Services & Architecture</span>
          </p>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase mb-4">
            Elite Engineering. <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400">Zero Compromise.</span>
          </h2>
          <p className="text-white/60 text-base sm:text-lg leading-relaxed font-sans max-w-2xl mx-auto">
            From our technology lab in Karachi, Pakistan, we partner with visionary founders and global enterprises 
            to architect, engineer, and deploy high-performance web systems.
          </p>
        </div>

        {/* 4 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {SERVICES_DATA.map((service) => {
            const isSelected = activeServiceId === service.id;
            return (
              <div
                key={service.id}
                onClick={() => setActiveServiceId(service.id)}
                className={`cursor-pointer rounded-lg p-5 transition-all duration-300 relative overflow-hidden backdrop-blur-md border ${
                  isSelected 
                    ? 'bg-white/10 border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.25)]' 
                    : 'bg-white/5 border-white/10 hover:border-purple-500/50'
                }`}
                id={`service-card-${service.id}`}
              >
                {/* Top Number & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] font-bold text-white/40 tracking-widest">
                    //{service.number}
                  </span>
                  <div className="p-2 rounded bg-white/5 border border-white/10">
                    {getServiceIcon(service.id)}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-purple-400">
                  {service.title}
                </h3>

                <p className="text-white/50 text-xs leading-relaxed mb-5">
                  {service.tagline}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {service.techStack.slice(0, 3).map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="text-[8px] px-1.5 py-0.5 bg-white/10 border border-white/20 text-white/60 rounded uppercase font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                  {service.techStack.length > 3 && (
                    <span className="text-[8px] px-1.5 py-0.5 bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 rounded uppercase font-mono">
                      +{service.techStack.length - 3}
                    </span>
                  )}
                </div>

                {/* Select / Active State */}
                <div className="flex items-center justify-between text-[11px] font-mono pt-3 border-t border-white/10">
                  <span className={isSelected ? 'text-cyan-400 font-bold' : 'text-white/40'}>
                    {isSelected ? 'ACTIVE VIEW' : 'INSPECT DETAILS'}
                  </span>
                  <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'rotate-90 text-cyan-400' : 'text-white/40'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Deep Dive Panel for the Selected Service */}
        <div className="bg-white/5 border border-white/10 rounded-lg p-6 sm:p-8 backdrop-blur-md relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info: 7 cols */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                  {getServiceIcon(activeService.id)}
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-cyan-400 font-bold">
                    SERVICE ARCHITECTURE // {activeService.number}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {activeService.title}
                  </h3>
                </div>
              </div>

              <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                {activeService.description}
              </p>

              {/* Key Deliverables & Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {activeService.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-white/80 bg-white/5 p-2.5 rounded border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3">
                <button
                  onClick={() => onSelectServiceForQuote(activeService.title)}
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold rounded-md shadow-lg shadow-purple-500/20 hover:shadow-cyan-400/40 transition-all uppercase text-xs tracking-widest flex items-center gap-2 cursor-pointer"
                  id="service-request-quote-btn"
                >
                  <span>Request Proposal for {activeService.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Architecture Blueprint Specs: 5 cols */}
            <div className="lg:col-span-5 bg-white/5 rounded-lg p-5 border border-white/10 font-mono text-xs space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-white/60 font-bold uppercase tracking-wider">Tech Stack Matrix</span>
                <span className="text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded text-[10px] border border-cyan-500/30">
                  ENTERPRISE READY
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {activeService.techStack.map((tech, i) => (
                  <span 
                    key={i} 
                    className="text-[9px] px-2 py-1 bg-white/10 border border-white/20 text-white/80 rounded uppercase font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="border-t border-white/10 pt-3">
                <span className="text-white/50 font-bold block mb-2 uppercase text-[10px] tracking-wider">Deliverables Included:</span>
                <ul className="space-y-1.5 text-white/70 text-[11px]">
                  {activeService.deliverables.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/5 p-3 rounded border border-white/10 text-[11px] text-white/60 flex items-center justify-between">
                <span>ESTIMATED SPRINT DURATION:</span>
                <span className="text-cyan-400 font-bold">3 - 8 WEEKS</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
