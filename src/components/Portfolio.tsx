import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/projectsData';
import { Project, ProjectCategory } from '../types';
import { ProjectCard } from './ProjectCard';
import { 
  FolderGit2, 
  Filter, 
  Search, 
  Terminal, 
  Sparkles, 
  CheckCircle2,
  Code2,
  Cpu
} from 'lucide-react';

interface PortfolioProps {
  onOpenProjectModal: (project: Project) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onOpenProjectModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filterCategories: { id: ProjectCategory; label: string; count: number }[] = [
    { id: 'all', label: 'All Projects', count: PROJECTS_DATA.length },
    { id: 'fintech', label: 'FinTech & Web3', count: PROJECTS_DATA.filter(p => p.category === 'fintech').length },
    { id: 'security', label: 'Security & Escrow', count: PROJECTS_DATA.filter(p => p.category === 'security').length },
    { id: 'data-ai', label: 'Data, AI & Analytics', count: PROJECTS_DATA.filter(p => p.category === 'data-ai').length },
    { id: 'ecommerce', label: 'Headless E-Commerce', count: PROJECTS_DATA.filter(p => p.category === 'ecommerce').length },
    { id: 'cloud-enterprise', label: 'Cloud & Infrastructure', count: PROJECTS_DATA.filter(p => p.category === 'cloud-enterprise').length },
  ];

  const filteredProjects = PROJECTS_DATA.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.codeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold mb-3 flex items-center gap-2">
              <FolderGit2 className="w-3.5 h-3.5 text-pink-400" />
              <span>The Portfolio // 10 Flagship Case Studies</span>
            </p>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400">Engineering Work</span>
            </h2>
            <p className="text-white/60 text-sm sm:text-base mt-2 max-w-2xl font-sans">
              Explore 10 production-grade applications engineered by Kyotech. Hover to inspect full architectural tech stacks, 
              live metrics, and interactive module simulations.
            </p>
          </div>

          {/* Quick Counter */}
          <div className="flex items-center gap-2 font-mono text-xs text-white/50 bg-white/5 px-4 py-2 rounded-lg border border-white/10 shrink-0">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-white font-bold">{filteredProjects.length} of 10</span>
            <span className="uppercase text-[10px] tracking-wider">Rendered</span>
          </div>
        </div>

        {/* Filter Pills and Search Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none text-xs uppercase tracking-wider">
            {filterCategories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-md whitespace-nowrap transition-all duration-300 flex items-center gap-2 border text-[11px] font-bold ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white border-white/20 shadow-md shadow-purple-500/20'
                      : 'bg-white/5 text-white/60 border-white/10 hover:border-white/20 hover:text-white'
                  }`}
                  id={`filter-btn-${cat.id}`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[9px] px-1.5 py-0.2 rounded ${
                    isActive ? 'bg-black/40 text-cyan-300 font-bold' : 'bg-white/10 text-white/50'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search by tech stack or keyword */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tech stack (e.g. Next.js, AWS, Python)..."
              className="w-full pl-9 pr-4 py-2 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-white placeholder:text-white/30 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50"
              id="portfolio-search-input"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-xs font-mono"
              >
                Clear
              </button>
            )}
          </div>

        </div>

        {/* 10 Projects Responsive Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenModal={onOpenProjectModal}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white/5 rounded-lg border border-white/10 font-mono text-sm">
            <Terminal className="w-8 h-8 text-cyan-400 mx-auto mb-3 animate-pulse" />
            <p className="text-white font-bold uppercase">No Matching Blueprints Found</p>
            <p className="text-white/50 text-xs mt-1">Try clearing your search query or switching category filter.</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 bg-white/10 hover:bg-white/15 text-cyan-300 rounded text-xs uppercase tracking-wider font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
