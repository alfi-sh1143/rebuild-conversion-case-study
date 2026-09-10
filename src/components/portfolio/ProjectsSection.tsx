import React, { useState } from 'react';
import { PORTFOLIO_CONFIG, ProjectItem } from '../../config/portfolioConfig';
import { ProjectCard } from './ProjectCard';
import { Sparkles, Layers, Info } from 'lucide-react';

interface ProjectsSectionProps {
  onOpenCaseStudy: (project: ProjectItem) => void;
  onOpenLivePreview: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onOpenCaseStudy,
  onOpenLivePreview,
}) => {
  const [filter, setFilter] = useState<'all' | 'conversion' | 'product'>('all');

  const filteredProjects = PORTFOLIO_CONFIG.projects.filter((p) => {
    if (filter === 'conversion') return p.projectType.includes('Conversion') || p.projectType.includes('Trade');
    if (filter === 'product') return p.projectType.includes('Product') || p.projectType.includes('Healthcare');
    return true;
  });

  return (
    <section id="projects" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-wider mb-2">
              <Layers className="w-4 h-4" /> Portfolio Projects
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Selected UI/UX Case Studies
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
              Detailed interface designs, heuristic audits, and responsive front-end builds demonstrating user psychology, design systems, and conversion-focused thinking.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 bg-white p-1 rounded-2xl border border-slate-200 text-xs font-medium self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 rounded-xl transition cursor-pointer ${
                filter === 'all'
                  ? 'bg-slate-900 text-white font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All (4)
            </button>
            <button
              onClick={() => setFilter('conversion')}
              className={`px-3.5 py-1.5 rounded-xl transition cursor-pointer ${
                filter === 'conversion'
                  ? 'bg-slate-900 text-white font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Conversion & Trade
            </button>
            <button
              onClick={() => setFilter('product')}
              className={`px-3.5 py-1.5 rounded-xl transition cursor-pointer ${
                filter === 'product'
                  ? 'bg-slate-900 text-white font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Product & Health
            </button>
          </div>
        </div>

        {/* Concept Notice */}
        <div className="my-6 p-4 rounded-2xl bg-white border border-slate-200/80 text-xs text-slate-600 flex items-start gap-3">
          <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
          <p>
            <strong className="text-slate-900">Portfolio Authenticity Notice:</strong> All self-initiated projects are explicitly labeled as concept redesigns or architectural case studies. No fictitious commercial client relationships or fabricated employment histories are portrayed.
          </p>
        </div>

        {/* 2x2 Grid of 4 Projects */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenCaseStudy={onOpenCaseStudy}
              onOpenLivePreview={onOpenLivePreview}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
