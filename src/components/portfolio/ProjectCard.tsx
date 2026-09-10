import React from 'react';
import { ProjectItem } from '../../config/portfolioConfig';
import { ArrowUpRight, BookOpen, Globe, Github, Sparkles } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectItem;
  onOpenCaseStudy: (project: ProjectItem) => void;
  onOpenLivePreview: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onOpenCaseStudy,
  onOpenLivePreview,
}) => {
  return (
    <article className="group bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between">
      {/* Visual Thumbnail Area */}
      <div className="relative aspect-16/10 overflow-hidden bg-slate-900">
        <img
          src={project.thumbnail}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 opacity-90 group-hover:opacity-100"
        />

        {/* Gradient overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>

        {/* Badges on Thumbnail */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
          <span className="bg-slate-900/90 backdrop-blur-md text-white text-[11px] font-mono px-3 py-1 rounded-full border border-white/20">
            {project.projectType.split('•')[0].trim()}
          </span>

          {project.isFictionalOrConcept && (
            <span className="bg-amber-400/90 text-slate-950 font-bold text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-xs">
              Concept Project
            </span>
          )}
        </div>

        {/* Title overlay in image lower third */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight drop-shadow-sm">
            {project.title}
          </h3>
          <p className="text-xs text-slate-200 mt-0.5 line-clamp-1">
            {project.tagline}
          </p>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
        <div>
          {/* Tool Stack Tags */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="bg-slate-100 text-slate-700 font-mono text-[11px] px-2.5 py-1 rounded-lg border border-slate-200/60"
              >
                {tool}
              </span>
            ))}
          </div>

          {/* Project Summary */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* Action Buttons Row */}
        <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
          {/* View Case Study Button */}
          <button
            onClick={() => onOpenCaseStudy(project)}
            className="bg-slate-900 hover:bg-blue-600 text-white font-bold px-4 py-2.5 rounded-xl transition flex items-center gap-1.5 cursor-pointer shadow-xs focus-visible:ring-2 focus-visible:ring-blue-600"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>View Case Study</span>
          </button>

          <div className="flex items-center gap-2">
            {/* Live Interactive Prototype */}
            <button
              onClick={() => onOpenLivePreview(project)}
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold px-3 py-2.5 rounded-xl transition flex items-center gap-1.5 cursor-pointer border border-slate-200"
              title="Open Interactive Live Demo"
            >
              <Globe className="w-3.5 h-3.5 text-blue-600" />
              <span>Live Prototype</span>
            </button>

            {/* GitHub Repo */}
            <a
              href={project.links.githubUrl || 'https://github.com'}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-950 border border-slate-200 transition"
              aria-label={`View ${project.title} on GitHub`}
              title="View Repository on GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};
