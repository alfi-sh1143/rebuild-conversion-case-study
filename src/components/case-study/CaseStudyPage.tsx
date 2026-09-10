import React from 'react';
import { CaseStudyHero } from './CaseStudyHero';
import { ProblemSection } from './ProblemSection';
import { ResearchSection } from './ResearchSection';
import { UXIssuesSection } from './UXIssuesSection';
import { GoalsSection } from './GoalsSection';
import { WireframeSection } from './WireframeSection';
import { DesignSystemSection } from './DesignSystemSection';
import { ResponsiveSection } from './ResponsiveSection';
import { DecisionsSection } from './DecisionsSection';
import { Sparkles, ArrowRight, ShieldCheck, Heart } from 'lucide-react';

interface CaseStudyPageProps {
  onViewLive: () => void;
  onViewBefore: () => void;
  onInspectIssue: (issueId: string) => void;
}

export const CaseStudyPage: React.FC<CaseStudyPageProps> = ({
  onViewLive,
  onViewBefore,
  onInspectIssue,
}) => {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero Overview */}
      <CaseStudyHero onViewLive={onViewLive} onViewBefore={onViewBefore} />

      {/* 2. Problem Statement */}
      <ProblemSection />

      {/* 3. Research & Mental Models */}
      <ResearchSection />

      {/* 4. UX Heuristic Evaluation (The 8 Problems) */}
      <UXIssuesSection onInspectOnBeforeSite={onInspectIssue} />

      {/* 5. Strategic Redesign Goals */}
      <GoalsSection />

      {/* 6. Wireframing & Information Architecture */}
      <WireframeSection />

      {/* 7. Design System & Accessibility */}
      <DesignSystemSection />

      {/* 8. Final Design Showcase Banner */}
      <section id="final-design" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 to-slate-950 text-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider block mb-2">
              Deliverable Demonstration
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Experience the Fully Functional, High-Conversion ClearFlow Website
            </h2>
            <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              Don't just read about UI theory—interact with the live responsive implementation. Test the 60-second quote calculator, live technician dispatch simulation, transparent pricing matrix, and emergency thumb-zone mobile bar.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <button
                onClick={onViewLive}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3.5 rounded-xl shadow-lg flex items-center gap-2 transition cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                Launch Live Website Prototype
              </button>
              <button
                onClick={onViewBefore}
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold px-5 py-3.5 rounded-xl flex items-center gap-2 transition cursor-pointer"
              >
                Compare with Outdated Version
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Mini Interactive Preview Card */}
          <div className="w-full max-w-md bg-slate-800/90 border border-slate-700 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-700">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
              </div>
              <span className="text-xs font-mono text-slate-400">clearflow-plumbing.local</span>
            </div>

            <div className="mt-4 space-y-3 text-xs">
              <div className="p-3 bg-blue-900/40 rounded-xl border border-blue-700 flex items-center justify-between">
                <div>
                  <div className="font-bold text-white">Emergency Hotline</div>
                  <div className="text-[11px] text-cyan-300">Live Tech on Duty (ETA 35m)</div>
                </div>
                <div className="bg-amber-500 text-slate-950 font-bold px-3 py-1.5 rounded-lg text-xs">
                  CALL
                </div>
              </div>

              <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
                <div className="text-slate-400">Interactive Features Included:</div>
                <ul className="mt-2 space-y-1 text-slate-300 text-[11px]">
                  <li>✓ 60-Sec Step-by-Step Quote Calculator</li>
                  <li>✓ Real-Time Zip Code ETA Dispatch Checker</li>
                  <li>✓ Before & After Pipe Work Slider</li>
                  <li>✓ Verified Customer Reviews Grid</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Responsive Ergonomics */}
      <ResponsiveSection />

      {/* 10. Key Design Decisions Deep-Dive */}
      <DecisionsSection />

      {/* Case Study Footer / Conclusion */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-950 text-slate-400 text-xs border-t border-slate-900">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-bold text-white text-sm">ClearFlow Plumbing UX Redesign Case Study</div>
            <p className="mt-1 text-slate-500">
              ClearFlow Plumbing is a fictional company created for portfolio demonstration of conversion rate optimization, heuristic audits, and frontend execution.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={onViewLive}
              className="text-cyan-400 hover:text-cyan-300 font-semibold"
            >
              Open Live Site →
            </button>
            <button
              onClick={onViewBefore}
              className="text-amber-400 hover:text-amber-300 font-semibold"
            >
              Inspect Before Site →
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};
