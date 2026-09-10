import React, { useState } from 'react';
import { DESIGN_DECISIONS } from '../../data/caseStudyData';
import { Lightbulb, CheckCircle2, TrendingUp, Brain, HelpCircle, ArrowRight } from 'lucide-react';

export const DecisionsSection: React.FC = () => {
  const [activeDecisionId, setActiveDecisionId] = useState<string>(DESIGN_DECISIONS[0].id);

  const activeDecision = DESIGN_DECISIONS.find(d => d.id === activeDecisionId) || DESIGN_DECISIONS[0];

  return (
    <section id="decisions" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Lightbulb className="w-4 h-4" /> 08 • Strategic Design Decisions
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
            6 Intentional Design Choices & The Behavioral Psychology Behind Them
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Every pixel, micro-copy string, and layout decision was crafted to address specific user fears and friction points. Here is the exact rationale behind the six most critical decisions.
          </p>
        </div>

        {/* Decision Navigation Tabs */}
        <div className="mt-10 flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
          {DESIGN_DECISIONS.map((decision) => {
            const isActive = decision.id === activeDecision.id;
            return (
              <button
                key={decision.id}
                onClick={() => setActiveDecisionId(decision.id)}
                className={`px-4 py-3 rounded-xl text-left transition shrink-0 cursor-pointer border ${
                  isActive
                    ? 'bg-blue-600 text-white border-blue-500 shadow-md font-semibold'
                    : 'bg-slate-800/80 text-slate-300 border-slate-700/80 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <div className="text-[10px] uppercase font-mono tracking-wider opacity-80">
                  Decision #{decision.number}
                </div>
                <div className="text-xs sm:text-sm font-bold mt-0.5 truncate max-w-[200px]">
                  {decision.title.split(':')[0]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Decision Card Deep-Dive */}
        <div className="mt-6 bg-slate-800/90 rounded-2xl p-6 sm:p-8 border border-slate-700 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-700">
            <div>
              <div className="flex items-center gap-2">
                <span className="bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-mono font-bold px-2.5 py-1 rounded">
                  DECISION #{activeDecision.number}
                </span>
                <div className="flex gap-1.5">
                  {activeDecision.tags.map((tag, i) => (
                    <span key={i} className="text-[11px] bg-slate-700 text-slate-300 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-2">
                {activeDecision.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                {activeDecision.subtitle}
              </p>
            </div>

            {/* Impact Metric Badge */}
            <div className="bg-emerald-950/70 border border-emerald-500/40 rounded-xl p-4 text-right">
              <span className="text-[10px] uppercase font-mono font-bold text-emerald-400 block">
                Measured Impact
              </span>
              <span className="text-base font-bold text-emerald-300">
                {activeDecision.conversionImpact}
              </span>
            </div>
          </div>

          {/* 3 Pillars Breakdown */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 1. Problem Solved */}
            <div className="bg-slate-900/90 rounded-xl p-5 border border-slate-800">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-wider mb-2">
                <HelpCircle className="w-4 h-4" /> The Problem Solved
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeDecision.problemSolved}
              </p>
            </div>

            {/* 2. Psychological Rationale */}
            <div className="bg-slate-900/90 rounded-xl p-5 border border-slate-800">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-2">
                <Brain className="w-4 h-4" /> Psychological Trigger
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeDecision.psychologicalTrigger}
              </p>
            </div>

            {/* 3. UI Implementation */}
            <div className="bg-slate-900/90 rounded-xl p-5 border border-slate-800">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">
                <CheckCircle2 className="w-4 h-4" /> UI Implementation
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeDecision.uiImplementation}
              </p>
            </div>
          </div>
        </div>

        {/* Quick Summary of All 6 Decisions */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {DESIGN_DECISIONS.map((d) => (
            <div
              key={d.id}
              onClick={() => setActiveDecisionId(d.id)}
              className={`p-4 rounded-xl border text-left transition cursor-pointer ${
                d.id === activeDecision.id
                  ? 'bg-blue-900/40 border-blue-500'
                  : 'bg-slate-800/40 border-slate-700/60 hover:border-slate-600'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1">
                <span>0{d.number}</span>
                <span className="text-emerald-400 font-bold">{d.conversionImpact.split(';')[0]}</span>
              </div>
              <h4 className="font-bold text-white text-xs sm:text-sm">{d.title.split(':')[0]}</h4>
              <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">{d.psychologicalTrigger}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
