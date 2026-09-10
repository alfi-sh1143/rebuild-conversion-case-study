import React from 'react';
import { REDESIGN_GOALS } from '../../data/caseStudyData';
import { Target, CheckCircle2, ArrowRight } from 'lucide-react';

export const GoalsSection: React.FC = () => {
  return (
    <section id="goals" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-emerald-600 text-xs font-bold uppercase tracking-wider mb-2">
            <Target className="w-4 h-4" /> 04 • Strategic Redesign Goals
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
            From Heuristic Defects to Measurable Conversion Targets
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Every visual and spatial choice was tied directly to a business or UX metric. We established seven non-negotiable redesign objectives.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REDESIGN_GOALS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between hover:border-slate-300 transition"
            >
              <div>
                <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-100">
                  <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                    0{idx + 1}
                  </span>
                  <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                    {item.metric}
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 text-base mt-3 leading-snug">
                  {item.goal}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.strategy}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-emerald-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Implemented in Redesign</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
