import React from 'react';
import { Project } from '../types';
import { ProjectPreviewWidget } from './ProjectPreviews';
import { 
  X, 
  Terminal, 
  CheckCircle2, 
  Clock, 
  Users, 
  Cpu, 
  Code2, 
  ArrowRight,
  Shield,
  Layers,
  Sparkles
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProjectForQuote: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ 
  project, 
  onClose,
  onSelectProjectForQuote
}) => {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto backdrop-blur-2xl bg-black/85 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-[#0a0a0f] border border-white/15 rounded-lg shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
        id="project-blueprint-modal"
      >
        {/* Top Accent Bar */}
        <div className="h-1 w-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400" />

        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b border-white/10 flex items-start justify-between relative bg-white/[0.02]">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="font-mono text-xs font-bold text-cyan-400">
                Blueprint // {project.codeName}
              </span>
              <span className="text-white/20">|</span>
              <span className="px-2 py-0.5 rounded text-[9px] font-mono uppercase bg-white/5 text-cyan-300 border border-white/10 font-bold">
                {project.categoryLabel}
              </span>
              <span className="px-2 py-0.5 rounded text-[9px] font-mono uppercase bg-purple-500/10 text-pink-300 border border-purple-500/20 font-bold">
                {project.badge}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-md bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-white/20 transition-all focus:outline-none cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          
          {/* Top Overview & Live Widget Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7 space-y-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold flex items-center gap-1.5 font-mono">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" /> Executive Summary
              </p>
              <p className="text-white/80 text-sm leading-relaxed">
                {project.fullDescription}
              </p>
              
              <div className="grid grid-cols-2 gap-3 pt-2 font-mono text-xs">
                <div className="bg-white/5 p-3 rounded border border-white/10">
                  <span className="text-white/40 block text-[9px] uppercase tracking-wider">Client Industry</span>
                  <span className="text-cyan-300 font-semibold text-xs">{project.clientSector}</span>
                </div>
                <div className="bg-white/5 p-3 rounded border border-white/10">
                  <span className="text-white/40 block text-[9px] uppercase tracking-wider">Sprint Duration</span>
                  <span className="text-purple-300 font-semibold text-xs">{project.deliveryTimeline}</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 bg-white/5 p-4 rounded-lg border border-white/10">
              <span className="font-mono text-[9px] text-white/40 block mb-2 uppercase tracking-wider">
                // Live Module Telemetry
              </span>
              <ProjectPreviewWidget type={project.simulatedPreviewType} isHovered={true} />
            </div>
          </div>

          {/* Key Impact Metrics */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold mb-3 flex items-center gap-1.5 font-mono">
              <Cpu className="w-3.5 h-3.5 text-purple-400" /> Verified Performance Metrics
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="bg-white/5 p-4 rounded border border-white/10 text-center">
                  <div className="text-xl font-black text-cyan-300 font-mono">{m.value}</div>
                  <div className="text-xs font-semibold text-white mt-1 uppercase tracking-wide">{m.label}</div>
                  {m.sub && <div className="text-[9px] text-white/40 font-mono mt-0.5">{m.sub}</div>}
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack & Architecture Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold flex items-center gap-1.5 font-mono">
                <Code2 className="w-3.5 h-3.5 text-pink-400" /> Complete Stack
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded text-xs font-mono bg-white/5 text-cyan-300 border border-white/10 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold flex items-center gap-1.5 font-mono">
                <Layers className="w-3.5 h-3.5 text-emerald-400" /> Key Architectural Features
              </p>
              <ul className="space-y-2">
                {project.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-white/70">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Modal Footer / Action */}
        <div className="p-5 sm:p-6 bg-white/[0.02] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-mono text-xs text-white/50 text-center sm:text-left">
            <span>Want a similar architecture for your venture?</span>
            <span className="block text-cyan-400 font-semibold">Estimated delivery: {project.deliveryTimeline}</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2 rounded-md font-mono text-xs text-white/70 hover:text-white bg-white/5 border border-white/10 uppercase tracking-wider cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onSelectProjectForQuote(`${project.codeName}: ${project.title}`);
              }}
              className="w-1/2 sm:w-auto px-5 py-2 rounded-md font-bold text-xs text-white bg-gradient-to-r from-purple-600 to-cyan-500 shadow-md shadow-purple-500/20 hover:opacity-90 flex items-center justify-center gap-1.5 uppercase tracking-wider cursor-pointer"
            >
              <span>Inquire About This</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
