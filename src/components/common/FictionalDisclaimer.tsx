import React from 'react';
import { Info, Sparkles } from 'lucide-react';

export const FictionalDisclaimer: React.FC = () => {
  return (
    <div className="bg-slate-900 text-slate-200 text-xs sm:text-sm py-2 px-4 border-b border-slate-800 flex items-center justify-between">
      <div className="max-w-7xl mx-auto w-full flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded font-mono text-[11px] font-semibold border border-amber-500/30">
            <Info className="w-3 h-3" /> FICTIONAL CASE STUDY
          </span>
          <p className="text-slate-300">
            <span className="font-semibold text-white">ClearFlow Plumbing</span> is a fictional local home-service business created to showcase UI/UX design methodology, conversion rate optimization, and responsive architecture.
          </p>
        </div>
        <div className="hidden md:flex items-center gap-2 text-slate-400 text-xs">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Interactive Prototype • Switch between Case Study, Modern Site & Before Version</span>
        </div>
      </div>
    </div>
  );
};
