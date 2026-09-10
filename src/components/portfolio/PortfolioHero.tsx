import React from 'react';
import { PORTFOLIO_CONFIG } from '../../config/portfolioConfig';
import { ArrowDown, ArrowUpRight, Sparkles, Layers, Code, Smartphone, CheckCircle2 } from 'lucide-react';

interface PortfolioHeroProps {
  onViewWork: () => void;
  onContactMe: () => void;
}

export const PortfolioHero: React.FC<PortfolioHeroProps> = ({ onViewWork, onContactMe }) => {
  return (
    <section id="hero" className="pt-16 pb-20 sm:pt-24 sm:pb-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-slate-50/50 to-white border-b border-slate-200/70">
      <div className="max-w-5xl mx-auto">
        {/* Availability / Position Focus Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-medium mb-6 animate-fadeIn">
          <span className="w-2 h-2 rounded-full bg-blue-600"></span>
          <span>Open for Junior / Associate UI/UX & Front-End Opportunities</span>
        </div>

        {/* Primary Hero Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.08] text-balance">
          {PORTFOLIO_CONFIG.heroHeadline}
        </h1>

        {/* Supporting Editorial Paragraph */}
        <p className="mt-6 text-lg sm:text-2xl text-slate-600 font-normal leading-relaxed max-w-3xl text-balance">
          {PORTFOLIO_CONFIG.heroSupportingText}
        </p>

        {/* Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
          <button
            onClick={onViewWork}
            className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm px-7 py-3.5 rounded-xl transition shadow-sm hover:shadow-md flex items-center gap-2 cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-600"
          >
            <span>View My Work</span>
            <ArrowDown className="w-4 h-4" />
          </button>

          <button
            onClick={onContactMe}
            className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold text-sm px-6 py-3.5 rounded-xl transition hover:border-slate-400 flex items-center gap-2 cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-600"
          >
            <span>Contact Me</span>
            <ArrowUpRight className="w-4 h-4 text-slate-500" />
          </button>
        </div>

        {/* Three Core Disciplines Strip */}
        <div className="mt-14 pt-10 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-600">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-slate-900 block text-sm">Figma & Design Systems</span>
              <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                Component tokens, auto-layout variants, interactive micro-states & atomic UI architecture.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
              <Smartphone className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-slate-900 block text-sm">Human-Centered UX</span>
              <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                Heuristic evaluations, cognitive friction reduction, thumb ergonomics & conversion optimization.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 mt-0.5">
              <Code className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-slate-900 block text-sm">Production-Ready Code</span>
              <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                Clean React, Next.js, TypeScript & Tailwind CSS adhering to WCAG accessibility standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
