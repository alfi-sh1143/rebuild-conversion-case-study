import React from 'react';
import { CASE_STUDY_META } from '../../data/caseStudyData';
import { ArrowRight, Sparkles, TrendingUp, Clock, CheckCircle2, PhoneCall, ShieldCheck } from 'lucide-react';

interface CaseStudyHeroProps {
  onViewLive: () => void;
  onViewBefore: () => void;
}

export const CaseStudyHero: React.FC<CaseStudyHeroProps> = ({ onViewLive, onViewBefore }) => {
  return (
    <section className="bg-slate-900 text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle background plumbing / grid motif */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="bg-blue-600/30 text-blue-300 border border-blue-400/30 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            UI/UX Redesign & CRO Case Study
          </span>
          <span className="bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-semibold px-3 py-1 rounded-full">
            Local Home Services
          </span>
          <span className="text-slate-400 text-xs flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> 10 min read
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white max-w-4xl leading-tight">
          ClearFlow Plumbing: Rebuilding an Outdated Local Trade Site into a High-Trust, Mobile-First Booking Machine
        </h1>

        <p className="mt-4 text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed">
          How restructuring weak visual hierarchy, erratic typography, and a 22-field contact form slashed mobile bounce rates from <span className="text-rose-400 font-semibold">76.4%</span> to <span className="text-emerald-400 font-semibold">29.1%</span> while driving a <span className="text-amber-400 font-semibold">+442%</span> increase in quote completions.
        </p>

        {/* Project Meta Chips */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-slate-800 text-xs sm:text-sm">
          <div>
            <span className="text-slate-400 block text-xs uppercase tracking-wider">Subject</span>
            <span className="font-semibold text-slate-200">ClearFlow Plumbing (Fictional)</span>
          </div>
          <div>
            <span className="text-slate-400 block text-xs uppercase tracking-wider">Role</span>
            <span className="font-semibold text-slate-200">Lead Product & UX Designer</span>
          </div>
          <div>
            <span className="text-slate-400 block text-xs uppercase tracking-wider">Core Focus</span>
            <span className="font-semibold text-slate-200">CRO, Heuristics, Thumb Ergonomics</span>
          </div>
          <div>
            <span className="text-slate-400 block text-xs uppercase tracking-wider">Deliverables</span>
            <span className="font-semibold text-slate-200">Research, Design System, Live Code</span>
          </div>
        </div>

        {/* Impact KPI Summary Bar */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {CASE_STUDY_META.kpis.map((kpi, index) => (
            <div key={index} className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-4 relative">
              <div className="text-xs text-slate-400 font-medium">{kpi.label}</div>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl font-bold text-white">{kpi.after}</span>
                <span className="text-xs line-through text-rose-400/80">{kpi.before}</span>
              </div>
              <div className="text-[11px] text-emerald-400 font-medium mt-1 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> Target: {kpi.target}
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap gap-4 items-center">
          <button
            onClick={onViewLive}
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-blue-600/20 flex items-center gap-2 transition cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            Launch Interactive Redesign
          </button>
          <button
            onClick={onViewBefore}
            className="bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/30 font-semibold px-5 py-3 rounded-xl transition cursor-pointer flex items-center gap-2"
          >
            Inspect Outdated "Before" Site
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Jump Navigation */}
        <div className="mt-8 pt-4 flex flex-wrap items-center gap-2 text-xs text-slate-400">
          <span className="font-semibold text-slate-300">Jump to section:</span>
          {[
            { label: 'Problem', id: 'problem' },
            { label: 'Research', id: 'research' },
            { label: 'UX Issues', id: 'ux-issues' },
            { label: 'Design Goals', id: 'goals' },
            { label: 'Wireframes', id: 'wireframes' },
            { label: 'Design System', id: 'design-system' },
            { label: 'Final Redesign', id: 'final-design' },
            { label: 'Responsive UX', id: 'responsive' },
            { label: 'Key Decisions', id: 'decisions' },
          ].map((sec) => (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              className="bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white px-2.5 py-1 rounded-md transition"
            >
              {sec.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
