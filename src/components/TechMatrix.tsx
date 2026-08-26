import React, { useState } from 'react';
import { 
  Terminal, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  Globe, 
  MapPin, 
  Activity, 
  Layers,
  Sparkles,
  Server,
  Code2
} from 'lucide-react';

export const TechMatrix: React.FC = () => {
  const [activeTerminalTab, setActiveTerminalTab] = useState<'stack' | 'sla' | 'ping'>('stack');
  const [customInput, setCustomInput] = useState('');
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    'KYOTECH_OS v4.19 [Karachi Master Node]',
    'Connected to global edge network: 34 points of presence.',
    'Type a command or choose a preset below to inspect telemetry.'
  ]);

  const runCommand = (cmd: string) => {
    let response = '';
    const cleanCmd = cmd.toLowerCase().trim();

    if (cleanCmd.includes('ping') || cleanCmd.includes('karachi')) {
      response = 'PING karachi-primary (24.8607° N, 67.0011° E): 64 bytes, time=12.4ms, jitter=0.2ms. STATUS: NOMINAL';
    } else if (cleanCmd.includes('stack') || cleanCmd.includes('tech')) {
      response = 'CORE RUNTIME: React 19 / Next.js 15, TypeScript 5.8, Node.js v22, AWS Serverless, Docker/K8s, Tailwind CSS v4.';
    } else if (cleanCmd.includes('sla') || cleanCmd.includes('security')) {
      response = 'SECURITY AUDIT: Multi-factor zero-trust, 256-bit AES encryption at rest, SOC-2 readiness, 99.99% uptime guarantee.';
    } else if (cleanCmd.includes('help')) {
      response = 'AVAILABLE COMMANDS: ping, stack, sla, status, clear, contact';
    } else if (cleanCmd.includes('clear')) {
      setTerminalLogs(['Terminal buffer cleared. Ready for input.']);
      return;
    } else {
      response = `Command executed: "${cmd}" -> Status 200 OK. Processed by Kyotech edge routing engine.`;
    }

    setTerminalLogs(prev => [...prev.slice(-6), `> ${cmd}`, response]);
  };

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;
    runCommand(customInput);
    setCustomInput('');
  };

  const techDomains = [
    {
      title: 'Modern Frontend & UI',
      icon: <Code2 className="w-5 h-5 text-cyan-400" />,
      items: ['React.js 19', 'Next.js 15 (App Router)', 'TypeScript', 'Tailwind CSS', 'WebGL / Canvas', 'Framer Motion'],
      accent: 'cyan'
    },
    {
      title: 'Backend & High-Throughput APIs',
      icon: <Cpu className="w-5 h-5 text-purple-400" />,
      items: ['Node.js / Express', 'Python / FastAPI', 'GraphQL APIs', 'WebSockets / Socket.io', 'gRPC Services', 'Prisma ORM'],
      accent: 'purple'
    },
    {
      title: 'Cloud Infrastructure & DevOps',
      icon: <Server className="w-5 h-5 text-pink-400" />,
      items: ['AWS Lambda & DynamoDB', 'Docker Containers', 'Terraform (IaC)', 'Cloudflare Edge CDN', 'PostgreSQL / Redis', 'Firebase Engine'],
      accent: 'pink'
    },
    {
      title: 'Security & Optimization',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      items: ['Multi-Sig Cryptography', 'Zero-Trust Gateways', 'Lighthouse 98+ Tuning', 'SOC-2 Compliance', 'Automated CI/CD', 'GDPR/Data Privacy'],
      accent: 'emerald'
    }
  ];

  return (
    <section id="tech-matrix" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold mb-3 flex items-center justify-center gap-2">
            <Cpu className="w-3.5 h-3.5 text-purple-400" />
            <span>Infrastructure // Tech Matrix</span>
          </p>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase mb-4">
            Forged in Code. <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400">Battle-Tested.</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base font-sans max-w-2xl mx-auto">
            We don't rely on fragile templates. Every system is custom-architected with enterprise-grade TypeScript, 
            resilient microservices, and edge-distributed infrastructure.
          </p>
        </div>

        {/* 4 Tech Matrix Domain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {techDomains.map((domain, idx) => (
            <div 
              key={idx} 
              className="bg-white/5 backdrop-blur-md p-5 rounded-lg border border-white/10 hover:border-purple-500/50 transition-all duration-300 relative group overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded bg-white/5 border border-white/10">
                  {domain.icon}
                </div>
                <h3 className="text-sm font-bold text-white leading-tight">
                  {domain.title}
                </h3>
              </div>

              <ul className="space-y-1.5">
                {domain.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs font-mono text-white/70">
                    <span className="w-1 h-1 rounded-full bg-cyan-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Karachi HQ Hub & Interactive Terminal Simulator */}
        <div id="about-karachi" className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left: Karachi Pakistan Agency Hub Info (5 cols) */}
          <div className="lg:col-span-5 bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-lg border border-white/10 flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="flex items-center gap-2 text-[10px] font-mono text-pink-400 uppercase tracking-widest mb-3">
                <MapPin className="w-3.5 h-3.5 text-pink-400" />
                <span>Base of Operations // Karachi HQ</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight mb-4">
                Karachi to the World.
              </h3>

              <p className="text-white/70 text-sm leading-relaxed mb-6 font-sans">
                Headquartered in the bustling tech epicenter of Karachi, Pakistan, Kyotech leverages 
                world-class engineering talent to build software solutions for clients across North America, 
                Europe, the Middle East, and Asia-Pacific.
              </p>

              <div className="space-y-2.5 font-mono text-xs">
                <div className="flex justify-between items-center bg-white/5 p-3 rounded border border-white/10">
                  <span className="text-white/50 uppercase text-[10px]">Coordinates:</span>
                  <span className="text-cyan-400 font-bold">24.8607° N, 67.0011° E</span>
                </div>
                <div className="flex justify-between items-center bg-white/5 p-3 rounded border border-white/10">
                  <span className="text-white/50 uppercase text-[10px]">Timezone Advantage:</span>
                  <span className="text-purple-300 font-bold">PKT (UTC+5) // 24/7 Coverage</span>
                </div>
                <div className="flex justify-between items-center bg-white/5 p-3 rounded border border-white/10">
                  <span className="text-white/50 uppercase text-[10px]">Response SLA:</span>
                  <span className="text-emerald-400 font-bold">&lt; 4 Hours Guaranteed</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/50">
              <span className="flex items-center gap-1.5 text-cyan-400 uppercase text-[10px] tracking-wider font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                Accepting New Projects
              </span>
              <span className="text-[10px] uppercase tracking-wider">Est. 2024</span>
            </div>
          </div>

          {/* Right: Interactive Cyber Terminal (7 cols) */}
          <div className="lg:col-span-7 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 p-5 sm:p-6 font-mono text-xs flex flex-col justify-between">
            
            {/* Terminal Top Window Controls */}
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-pink-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400/80 inline-block" />
                  </div>
                  <span className="text-cyan-400 font-semibold ml-2 text-[11px]">bash - kyotech@karachi-edge</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => runCommand('ping karachi-node')}
                    className="px-2 py-1 bg-white/5 hover:bg-white/10 text-cyan-300 rounded border border-white/10 text-[10px] uppercase font-bold"
                  >
                    ping
                  </button>
                  <button
                    onClick={() => runCommand('inspect stack')}
                    className="px-2 py-1 bg-white/5 hover:bg-white/10 text-purple-300 rounded border border-white/10 text-[10px] uppercase font-bold"
                  >
                    stack
                  </button>
                  <button
                    onClick={() => runCommand('inspect security-sla')}
                    className="px-2 py-1 bg-white/5 hover:bg-white/10 text-pink-300 rounded border border-white/10 text-[10px] uppercase font-bold"
                  >
                    security
                  </button>
                </div>
              </div>

              {/* Logs Screen */}
              <div className="space-y-2 py-2 min-h-[160px] text-white/80 font-mono text-xs">
                {terminalLogs.map((log, idx) => (
                  <div 
                    key={idx} 
                    className={`${
                      log.startsWith('>') 
                        ? 'text-pink-400 font-bold' 
                        : log.includes('PING') || log.includes('CORE') || log.includes('SECURITY') 
                        ? 'text-cyan-300 bg-cyan-500/10 p-2 rounded border border-cyan-500/30' 
                        : 'text-white/60'
                    }`}
                  >
                    {log}
                  </div>
                ))}
              </div>
            </div>

            {/* Terminal Input Bar */}
            <form onSubmit={handleCommandSubmit} className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2">
              <span className="text-purple-400 font-bold">root@kyotech:~#</span>
              <input
                type="text"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                placeholder="Type 'help', 'ping', 'stack', 'sla' or any command..."
                className="flex-1 bg-transparent text-cyan-300 focus:outline-none placeholder:text-white/30 font-mono text-xs"
                id="terminal-interactive-input"
              />
              <button
                type="submit"
                className="px-3.5 py-1.5 bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold rounded text-[10px] uppercase tracking-wider hover:opacity-90 transition-opacity cursor-pointer"
              >
                Execute
              </button>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
};
