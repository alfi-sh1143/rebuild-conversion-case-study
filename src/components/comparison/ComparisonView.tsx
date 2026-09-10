import React, { useState } from 'react';
import { CASE_STUDY_META, UX_ISSUES } from '../../data/caseStudyData';
import { Columns, ArrowLeftRight, CheckCircle2, XCircle, Sparkles, TrendingUp } from 'lucide-react';

interface ComparisonViewProps {
  onOpenLiveRedesign: () => void;
  onOpenLegacySite: () => void;
}

export const ComparisonView: React.FC<ComparisonViewProps> = ({
  onOpenLiveRedesign,
  onOpenLegacySite,
}) => {
  const [activeTab, setActiveTab] = useState<'cards' | 'metrics'>('cards');

  const comparisonRows = [
    {
      dimension: 'Primary Call-to-Action (CTA)',
      before: 'Tiny 11px gray link buried inside footer text ("click here")',
      after: 'High-contrast dual CTA: 24/7 Emergency Call button (amber) + 60s Quote Calculator (blue)',
      uxImpact: 'Reduced time-to-contact from 48s to 3.2s (-93% reduction)',
    },
    {
      dimension: 'Mobile Usability & Viewport',
      before: 'Non-responsive 960px fixed width layout requiring pinch-to-zoom',
      after: '100% mobile-first layout with persistent bottom thumb-zone action bar and 48px+ touch targets',
      uxImpact: 'Slashed mobile bounce rate from 76.4% down to 29.1%',
    },
    {
      dimension: 'Visual Hierarchy & Content Density',
      before: '1,200 words of founder history before any mention of actual repair services',
      after: 'F-Pattern hierarchy: 45-min arrival guarantee → core services with starting rates → social proof',
      uxImpact: 'Eliminated cognitive overload; boosted immediate engagement',
    },
    {
      dimension: 'Service Scope & Pricing Transparency',
      before: 'Vague bullets ("General plumbing activities"); zero pricing or arrival estimates',
      after: '6 structured service cards with starting prices, waived diagnostic fee, and what\'s included',
      uxImpact: 'Overcame loss aversion; increased trust score by 88%',
    },
    {
      dimension: 'Inquiry & Booking Funnel',
      before: 'Intimidating 22-field contact form demanding blueprints, fax number, and pipe specs',
      after: 'Interactive 3-step micro-quote calculator with instant price estimate and technician assignment',
      uxImpact: 'Quote form completion surged from 4.2% to 22.8% (+442% increase)',
    },
    {
      dimension: 'Trust & Credibility Signals',
      before: 'No licenses, insurance proofs, or testimonials visible on the home screen',
      after: 'Master Plumber License #MPL-84920, $2M liability badge, and 4.9★ rating stacked above fold',
      uxImpact: 'Decreased hesitation time by 64% for first-time visitors',
    },
  ];

  return (
    <div className="bg-slate-100 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-slate-300">
          <div>
            <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-wider mb-1">
              <Columns className="w-4 h-4" /> Direct Transformation Analysis
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Before vs. After: ClearFlow UX Redesign
            </h1>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
              Side-by-side breakdown contrasting the legacy 2008 failure points against the conversion-focused solutions.
            </p>
          </div>

          {/* Quick Launch Buttons */}
          <div className="flex gap-2">
            <button
              onClick={onOpenLegacySite}
              className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 px-4 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer shadow-xs"
            >
              Open Outdated Site
            </button>
            <button
              onClick={onOpenLiveRedesign}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer shadow-xs flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Open Live Redesign</span>
            </button>
          </div>
        </div>

        {/* KPI Scorecard */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {CASE_STUDY_META.kpis.map((kpi, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
              <span className="text-xs font-bold text-slate-500 block mb-1">{kpi.label}</span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-black text-emerald-600 font-mono">
                  {kpi.after}
                </span>
                <span className="text-xs line-through text-rose-400 font-mono font-bold">
                  {kpi.before}
                </span>
              </div>
              <span className="text-[11px] text-slate-500 mt-1 block">
                Target: <strong>{kpi.target}</strong>
              </span>
            </div>
          ))}
        </div>

        {/* Transformation Comparison Table */}
        <div className="mt-10 space-y-4">
          {comparisonRows.map((row, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:border-slate-300 transition"
            >
              {/* Row Header */}
              <div className="bg-slate-900 text-white px-6 py-3 flex flex-wrap items-center justify-between gap-2">
                <div className="font-bold text-sm flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-slate-800 text-cyan-400 flex items-center justify-center font-mono text-xs">
                    0{idx + 1}
                  </span>
                  <span>{row.dimension}</span>
                </div>
                <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" /> {row.uxImpact}
                </span>
              </div>

              {/* Two Column Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 text-xs sm:text-sm">
                {/* Legacy Problem */}
                <div className="p-6 bg-rose-50/40">
                  <div className="flex items-center gap-1.5 text-rose-700 font-bold uppercase text-[11px] mb-2 tracking-wider">
                    <XCircle className="w-4 h-4 text-rose-600" />
                    Outdated "Before" Version
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    {row.before}
                  </p>
                </div>

                {/* Modern Solution */}
                <div className="p-6 bg-emerald-50/40">
                  <div className="flex items-center gap-1.5 text-emerald-700 font-bold uppercase text-[11px] mb-2 tracking-wider">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Conversion Redesign
                  </div>
                  <p className="text-slate-800 font-medium leading-relaxed">
                    {row.after}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
