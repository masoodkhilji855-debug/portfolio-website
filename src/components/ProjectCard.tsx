import React, { useState } from 'react';
import { Project } from '../types';
import { ProjectPreviewWidget } from './ProjectPreviews';
import { 
  ArrowUpRight, 
  Layers, 
  Clock, 
  ShieldCheck, 
  ExternalLink,
  Code2,
  Sparkles
} from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Dynamic glow classes based on accent color
  const getGlowStyles = () => {
    switch (project.accentColor) {
      case 'cyan':
        return {
          border: isHovered ? 'border-cyan-400' : 'border-white/10',
          shadow: isHovered ? 'shadow-[0_0_25px_rgba(6,182,212,0.25)]' : 'shadow-none',
          badgeBg: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
          accentText: 'text-cyan-400',
          gradientBg: 'from-cyan-500/10 via-transparent to-transparent'
        };
      case 'purple':
        return {
          border: isHovered ? 'border-purple-400' : 'border-white/10',
          shadow: isHovered ? 'shadow-[0_0_25px_rgba(168,85,247,0.25)]' : 'shadow-none',
          badgeBg: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
          accentText: 'text-purple-400',
          gradientBg: 'from-purple-500/10 via-transparent to-transparent'
        };
      case 'pink':
        return {
          border: isHovered ? 'border-pink-400' : 'border-white/10',
          shadow: isHovered ? 'shadow-[0_0_25px_rgba(236,72,153,0.25)]' : 'shadow-none',
          badgeBg: 'bg-pink-500/10 text-pink-300 border-pink-500/30',
          accentText: 'text-pink-400',
          gradientBg: 'from-pink-500/10 via-transparent to-transparent'
        };
      case 'emerald':
      default:
        return {
          border: isHovered ? 'border-emerald-400' : 'border-white/10',
          shadow: isHovered ? 'shadow-[0_0_25px_rgba(16,185,129,0.25)]' : 'shadow-none',
          badgeBg: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
          accentText: 'text-emerald-400',
          gradientBg: 'from-emerald-500/10 via-transparent to-transparent'
        };
    }
  };

  const styles = getGlowStyles();

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onOpenModal(project)}
      className={`group relative rounded-lg bg-white/5 backdrop-blur-md border transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer p-5 sm:p-6 ${styles.border} ${styles.shadow}`}
      id={`project-card-${project.id}`}
    >
      {/* Background glow gradient */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${styles.gradientBg} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} 
      />

      <div>
        {/* Header Badges */}
        <div className="flex items-center justify-between mb-4 relative z-10">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold tracking-widest text-white/50 group-hover:text-white transition-colors">
              {project.codeName}
            </span>
            <span className={`px-2 py-0.5 rounded text-[9px] font-mono uppercase border ${styles.badgeBg}`}>
              {project.badge}
            </span>
          </div>

          <div className="p-1.5 rounded bg-white/5 border border-white/10 group-hover:border-cyan-400 text-white/50 group-hover:text-cyan-300 transition-all">
            <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>

        {/* Project Title */}
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors leading-snug">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-5 line-clamp-3">
          {project.shortDescription}
        </p>

        {/* Live Interactive Simulated Preview Widget */}
        <div className="mb-5 relative z-10 transition-transform duration-300 group-hover:scale-[1.01]">
          <ProjectPreviewWidget type={project.simulatedPreviewType} isHovered={isHovered} />
        </div>
      </div>

      {/* Footer Area: Tech Stack on Hover + Metrics */}
      <div className="relative z-10 pt-4 border-t border-white/10 space-y-3">
        
        {/* Revealed Tech Stack Pills */}
        <div>
          <div className="flex items-center justify-between text-[9px] font-mono text-white/40 uppercase mb-1.5">
            <span className="flex items-center gap-1">
              <Code2 className="w-3 h-3 text-cyan-400" /> TECH STACK
            </span>
            <span className="text-white/50 group-hover:text-pink-400 transition-colors">
              {project.categoryLabel}
            </span>
          </div>
          
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className={`px-2 py-0.5 rounded text-[9px] font-mono transition-all duration-300 ${
                  isHovered
                    ? 'bg-white/15 text-cyan-300 border border-cyan-500/40 font-bold'
                    : 'bg-white/5 text-white/50 border border-white/10'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-3 gap-1.5 pt-2 border-t border-white/10 font-mono text-center">
          {project.metrics.map((metric, i) => (
            <div key={i} className="bg-white/5 p-1.5 rounded border border-white/10">
              <div className={`text-xs font-bold ${styles.accentText}`}>{metric.value}</div>
              <div className="text-[9px] text-white/50 uppercase tracking-tighter truncate">{metric.label}</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
