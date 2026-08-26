import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  ShieldCheck, 
  MapPin, 
  ShoppingBag, 
  Award, 
  Radio, 
  Volume2, 
  Cpu, 
  Compass, 
  Search,
  CheckCircle2,
  Lock,
  Activity,
  Play,
  Pause
} from 'lucide-react';

interface PreviewProps {
  type: string;
  isHovered?: boolean;
}

export const ProjectPreviewWidget: React.FC<PreviewProps> = ({ type, isHovered }) => {
  // Common states for live animations
  const [tick, setTick] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTick(prev => (prev + 1) % 100);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  switch (type) {
    case 'crypto-ticker':
      return (
        <div className="w-full h-36 bg-slate-950/80 rounded-lg p-3 border border-cyan-500/20 relative overflow-hidden font-mono text-xs">
          <div className="flex items-center justify-between border-b border-cyan-500/20 pb-2 mb-2">
            <div className="flex items-center gap-1.5 text-cyan-400 font-bold">
              <TrendingUp className="w-3.5 h-3.5 animate-pulse" />
              <span>BTC/USDT PERP</span>
            </div>
            <div className="text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded text-[10px] border border-emerald-500/30">
              +$94,820.50 (+4.12%)
            </div>
          </div>
          
          {/* Simulated chart bars */}
          <div className="flex items-end justify-between h-14 gap-1 px-1">
            {[45, 52, 48, 65, 59, 72, 85, 78, 92, 88, 96, 91, 100, 94, 98].map((h, i) => {
              const dynamicHeight = Math.min(100, Math.max(20, h + ((tick + i) % 5) * 2 - 4));
              const isUp = i % 2 === 0 || i > 10;
              return (
                <div key={i} className="flex-1 flex flex-col items-center justify-end h-full">
                  <div 
                    className={`w-full rounded-t-xs transition-all duration-500 ${
                      isUp ? 'bg-gradient-to-t from-emerald-500/40 to-emerald-400' : 'bg-gradient-to-t from-pink-500/40 to-pink-400'
                    }`}
                    style={{ height: `${dynamicHeight}%` }}
                  />
                </div>
              );
            })}
          </div>

          <div className="flex justify-between items-center mt-2 text-[10px] text-slate-400 border-t border-slate-800/80 pt-1">
            <span className="text-cyan-400/80">LATENCY: 12ms</span>
            <span className="text-slate-300">ORDERBOOK: 4,820 TX/S</span>
          </div>
        </div>
      );

    case 'escrow-flow':
      return (
        <div className="w-full h-36 bg-slate-950/80 rounded-lg p-3 border border-purple-500/20 relative overflow-hidden font-mono text-xs">
          <div className="flex items-center justify-between border-b border-purple-500/20 pb-2 mb-2">
            <div className="flex items-center gap-1.5 text-purple-400 font-bold">
              <Lock className="w-3.5 h-3.5" />
              <span>ESCROW #9482-TX</span>
            </div>
            <span className="text-purple-300 bg-purple-950/60 px-1.5 py-0.5 rounded text-[10px] border border-purple-500/30">
              $250,000 HELD
            </span>
          </div>

          <div className="space-y-1.5 text-[11px] my-1">
            <div className="flex items-center justify-between bg-slate-900/90 px-2 py-1 rounded border border-emerald-500/30">
              <span className="text-slate-300 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Buyer Deposit
              </span>
              <span className="text-emerald-400 font-semibold">VERIFIED</span>
            </div>
            <div className="flex items-center justify-between bg-slate-900/90 px-2 py-1 rounded border border-purple-500/30">
              <span className="text-slate-300 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-purple-400" /> Multi-Sig Auth (3/3)
              </span>
              <span className="text-purple-300 font-semibold animate-pulse">LOCKED</span>
            </div>
          </div>

          <div className="text-[10px] text-slate-400 flex justify-between pt-1">
            <span>PROOF: SHA-256</span>
            <span className="text-purple-400">SOC2 COMPLIANT</span>
          </div>
        </div>
      );

    case 'data-scraper':
      return (
        <div className="w-full h-36 bg-slate-950/80 rounded-lg p-3 border border-pink-500/20 relative overflow-hidden font-mono text-xs">
          <div className="flex items-center justify-between border-b border-pink-500/20 pb-2 mb-2">
            <div className="flex items-center gap-1.5 text-pink-400 font-bold">
              <MapPin className="w-3.5 h-3.5 animate-bounce" />
              <span>GEO-SCRAPER ENGINE</span>
            </div>
            <span className="text-pink-300 bg-pink-950/60 px-1.5 py-0.5 rounded text-[10px] border border-pink-500/30">
              ACTIVE NODE
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 my-1 text-[10px]">
            <div className="bg-slate-900/90 p-1.5 rounded border border-slate-800">
              <span className="text-slate-400 block">PARSED VENUES</span>
              <span className="text-pink-400 font-bold text-sm">1,428,920</span>
            </div>
            <div className="bg-slate-900/90 p-1.5 rounded border border-slate-800">
              <span className="text-slate-400 block">CLUSTER RADIUS</span>
              <span className="text-cyan-400 font-bold text-sm">25.0 KM</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
            <span className="text-pink-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-ping"></span> Python Worker [04]
            </span>
            <span className="text-slate-300">GeoJSON Export</span>
          </div>
        </div>
      );

    case 'ecommerce-checkout':
      return (
        <div className="w-full h-36 bg-slate-950/80 rounded-lg p-3 border border-emerald-500/20 relative overflow-hidden font-mono text-xs">
          <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2 mb-2">
            <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>HEADLESS STORE</span>
            </div>
            <span className="text-emerald-300 bg-emerald-950/60 px-1.5 py-0.5 rounded text-[10px] border border-emerald-500/30">
              410ms SPEED
            </span>
          </div>

          <div className="space-y-1.5 text-[10px]">
            <div className="flex justify-between items-center bg-slate-900/80 p-1.5 rounded border border-slate-800">
              <span className="text-slate-300">Merch Customizer (3D WebGL)</span>
              <span className="text-emerald-400 font-semibold">READY</span>
            </div>
            <div className="flex justify-between items-center bg-slate-900/80 p-1.5 rounded border border-slate-800">
              <span className="text-slate-300">Supplier Print Dispatch</span>
              <span className="text-cyan-400 font-semibold">AUTO-SYNC</span>
            </div>
          </div>

          <div className="flex justify-between items-center pt-1.5 text-[10px] text-slate-400">
            <span className="text-emerald-400">LIGHTHOUSE: 99/100</span>
            <span>STRIPE + APPLE PAY</span>
          </div>
        </div>
      );

    case 'academic-chart':
      return (
        <div className="w-full h-36 bg-slate-950/80 rounded-lg p-3 border border-cyan-500/20 relative overflow-hidden font-mono text-xs">
          <div className="flex items-center justify-between border-b border-cyan-500/20 pb-2 mb-2">
            <div className="flex items-center gap-1.5 text-cyan-400 font-bold">
              <Award className="w-3.5 h-3.5" />
              <span>DISTRICT LEADERBOARD</span>
            </div>
            <span className="text-cyan-300 bg-cyan-950/60 px-1.5 py-0.5 rounded text-[10px] border border-cyan-500/30">
              LIVE BROADCAST
            </span>
          </div>

          <div className="space-y-1 my-1">
            {[
              { rank: '#1', school: 'Karachi STEM Academy', score: '984 pts', color: 'text-amber-400' },
              { rank: '#2', school: 'Beaconhouse High Tier', score: '962 pts', color: 'text-slate-200' },
              { rank: '#3', school: 'Habib University Prep', score: '945 pts', color: 'text-amber-600' }
            ].map((item, idx) => (
              <div key={idx} className="flex justify-between items-center bg-slate-900/80 px-2 py-0.5 rounded text-[10px]">
                <span className={`font-bold ${item.color}`}>{item.rank} {item.school}</span>
                <span className="text-cyan-300 font-mono font-semibold">{item.score}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-between text-[10px] text-slate-400 pt-1">
            <span>50,000 Spectators</span>
            <span className="text-cyan-400">Realtime Socket.io</span>
          </div>
        </div>
      );

    case 'logistics-radar':
      return (
        <div className="w-full h-36 bg-slate-950/80 rounded-lg p-3 border border-purple-500/20 relative overflow-hidden font-mono text-xs">
          <div className="flex items-center justify-between border-b border-purple-500/20 pb-2 mb-2">
            <div className="flex items-center gap-1.5 text-purple-400 font-bold">
              <Radio className="w-3.5 h-3.5 animate-pulse" />
              <span>SUPPLY CHAIN RADAR</span>
            </div>
            <span className="text-purple-300 bg-purple-950/60 px-1.5 py-0.5 rounded text-[10px] border border-purple-500/30">
              120K CONSIGNMENTS
            </span>
          </div>

          <div className="grid grid-cols-2 gap-1.5 my-1 text-[10px]">
            <div className="bg-slate-900/90 p-1.5 rounded border border-slate-800">
              <span className="text-slate-400 block">COLD STORAGE</span>
              <span className="text-cyan-400 font-bold">-18.4°C STABLE</span>
            </div>
            <div className="bg-slate-900/90 p-1.5 rounded border border-slate-800">
              <span className="text-slate-400 block">PORT TRANSIT</span>
              <span className="text-purple-400 font-bold">ETA ON SCHEDULE</span>
            </div>
          </div>

          <div className="flex justify-between items-center text-[10px] text-slate-400 pt-1">
            <span className="text-purple-400">GPS TELEMETRY ON</span>
            <span className="text-slate-300">Firebase Cloud Sync</span>
          </div>
        </div>
      );

    case 'ai-audio-wave':
      return (
        <div className="w-full h-36 bg-slate-950/80 rounded-lg p-3 border border-pink-500/20 relative overflow-hidden font-mono text-xs">
          <div className="flex items-center justify-between border-b border-pink-500/20 pb-2 mb-2">
            <div className="flex items-center gap-1.5 text-pink-400 font-bold">
              <Volume2 className="w-3.5 h-3.5" />
              <span>AI SYNTHESIS ENGINE</span>
            </div>
            <button 
              onClick={(e) => { e.stopPropagation(); setIsPlayingAudio(!isPlayingAudio); }}
              className="flex items-center gap-1 text-pink-300 bg-pink-950/60 px-1.5 py-0.5 rounded text-[10px] border border-pink-500/30 hover:bg-pink-900/60"
            >
              {isPlayingAudio ? <Pause className="w-2.5 h-2.5" /> : <Play className="w-2.5 h-2.5" />}
              <span>{isPlayingAudio ? 'STREAMING' : 'PAUSED'}</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-1 h-12 my-1">
            {[30, 60, 90, 45, 80, 100, 75, 95, 60, 40, 85, 95, 70, 50, 80, 60, 90, 40, 70].map((h, idx) => (
              <div
                key={idx}
                className="w-1 bg-gradient-to-t from-pink-500 to-purple-400 rounded-full transition-all duration-300"
                style={{
                  height: isPlayingAudio ? `${Math.max(15, (h + (tick * (idx + 1))) % 100)}%` : '20%'
                }}
              />
            ))}
          </div>

          <div className="flex justify-between text-[10px] text-slate-400 pt-1">
            <span className="text-pink-400">VOICE: NEURAL-CYBER-09</span>
            <span>45ms LATENCY</span>
          </div>
        </div>
      );

    case 'aws-serverless':
      return (
        <div className="w-full h-36 bg-slate-950/80 rounded-lg p-3 border border-cyan-500/20 relative overflow-hidden font-mono text-xs">
          <div className="flex items-center justify-between border-b border-cyan-500/20 pb-2 mb-2">
            <div className="flex items-center gap-1.5 text-cyan-400 font-bold">
              <Cpu className="w-3.5 h-3.5" />
              <span>AWS SERVERLESS CLUSTER</span>
            </div>
            <span className="text-cyan-300 bg-cyan-950/60 px-1.5 py-0.5 rounded text-[10px] border border-cyan-500/30">
              ZERO IDLE
            </span>
          </div>

          <div className="grid grid-cols-2 gap-1.5 my-1 text-[10px]">
            <div className="bg-slate-900/90 p-1.5 rounded border border-slate-800">
              <span className="text-slate-400 block">LAMBDA RUNTIME</span>
              <span className="text-emerald-400 font-bold">14ms AVG</span>
            </div>
            <div className="bg-slate-900/90 p-1.5 rounded border border-slate-800">
              <span className="text-slate-400 block">DYNAMODB P99</span>
              <span className="text-cyan-400 font-bold">3.2ms READ</span>
            </div>
          </div>

          <div className="flex justify-between text-[10px] text-slate-400 pt-1">
            <span className="text-emerald-400">68% COST REDUCED</span>
            <span>14,000 SEATS</span>
          </div>
        </div>
      );

    case 'property-map':
      return (
        <div className="w-full h-36 bg-slate-950/80 rounded-lg p-3 border border-emerald-500/20 relative overflow-hidden font-mono text-xs">
          <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2 mb-2">
            <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
              <Compass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '15s' }} />
              <span>MAPBOX VECTOR RADAR</span>
            </div>
            <span className="text-emerald-300 bg-emerald-950/60 px-1.5 py-0.5 rounded text-[10px] border border-emerald-500/30">
              60 FPS RENDER
            </span>
          </div>

          <div className="relative h-14 bg-slate-900/90 rounded border border-slate-800 flex items-center justify-center overflow-hidden">
            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d415_1px,transparent_1px),linear-gradient(to_bottom,#06b6d415_1px,transparent_1px)] bg-[size:12px_12px]" />
            
            {/* Radar markers */}
            <div className="absolute top-2 left-6 flex items-center gap-1 bg-emerald-950/90 px-1.5 py-0.5 rounded border border-emerald-500/40 text-[9px] text-emerald-300 shadow">
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
              <span>$1.8M Clifton Penthouse</span>
            </div>
            
            <div className="absolute bottom-2 right-6 flex items-center gap-1 bg-cyan-950/90 px-1.5 py-0.5 rounded border border-cyan-500/40 text-[9px] text-cyan-300 shadow">
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
              <span>$3.4M Marina Heights</span>
            </div>
          </div>

          <div className="flex justify-between text-[10px] text-slate-400 pt-1">
            <span className="text-emerald-400">POLYGON LASSO</span>
            <span>COMMUTE FILTER ACTIVE</span>
          </div>
        </div>
      );

    case 'keyword-analyzer':
    default:
      return (
        <div className="w-full h-36 bg-slate-950/80 rounded-lg p-3 border border-purple-500/20 relative overflow-hidden font-mono text-xs">
          <div className="flex items-center justify-between border-b border-purple-500/20 pb-2 mb-2">
            <div className="flex items-center gap-1.5 text-purple-400 font-bold">
              <Search className="w-3.5 h-3.5" />
              <span>KEYWORD VELOCITY</span>
            </div>
            <span className="text-purple-300 bg-purple-950/60 px-1.5 py-0.5 rounded text-[10px] border border-purple-500/30">
              85M+ TRACKED
            </span>
          </div>

          <div className="space-y-1 my-1">
            <div className="flex justify-between items-center bg-slate-900/80 px-2 py-1 rounded text-[10px]">
              <span className="text-slate-200 font-semibold">"cyberpunk tech wear"</span>
              <span className="text-emerald-400 font-mono">Vol: 180K/mo (+88%)</span>
            </div>
            <div className="flex justify-between items-center bg-slate-900/80 px-2 py-1 rounded text-[10px]">
              <span className="text-slate-200 font-semibold">"smart ambient lighting"</span>
              <span className="text-cyan-400 font-mono">Vol: 92K/mo (+42%)</span>
            </div>
          </div>

          <div className="flex justify-between text-[10px] text-slate-400 pt-1">
            <span className="text-purple-400">REDIS HIT: 94.2%</span>
            <span>$160M MANAGED GMV</span>
          </div>
        </div>
      );
  }
};
