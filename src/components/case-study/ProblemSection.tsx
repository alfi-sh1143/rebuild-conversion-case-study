import React from 'react';
import { AlertCircle, ArrowDown, DollarSign, Smartphone, HelpCircle, XCircle } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-rose-600 text-xs font-bold uppercase tracking-wider mb-2">
            <AlertCircle className="w-4 h-4" /> 01 • The Problem Statement
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
            A 20-Year Local Reputation Paralyzed by a 2008-Era Web Experience
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            ClearFlow Plumbing is a fictional multi-truck residential plumbing contractor. Despite employing master-licensed technicians and earning a 4.9-star word-of-mouth reputation, their digital presence was hemorrhaging prospective clients.
          </p>
        </div>

        {/* The Core Challenge Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-rose-50 border border-rose-200/80 rounded-2xl p-6">
            <div className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center font-bold mb-4">
              <Smartphone className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">76.4% Mobile Bounce Rate</h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              When a water heater bursts at 10 PM, 82% of searches happen on mobile devices. ClearFlow’s site lacked responsive viewport scaling, forcing users to pinch-and-zoom through illegible desktop text.
            </p>
            <div className="mt-4 pt-3 border-t border-rose-200 text-xs font-semibold text-rose-800">
              Avg. Time to Exit: 4.8 seconds
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200/80 rounded-2xl p-6">
            <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold mb-4">
              <HelpCircle className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">Hidden Phone & Unclear CTA</h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              The phone number was buried as unclickable 11px gray text in the bottom copyright. Panicked homeowners could not tap to call, abandoning the site to call competitors running Google Local Services Ads.
            </p>
            <div className="mt-4 pt-3 border-t border-amber-200 text-xs font-semibold text-amber-800">
              48 Seconds to find contact info
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <div className="w-10 h-10 rounded-xl bg-slate-800 text-white flex items-center justify-center font-bold mb-4">
              <DollarSign className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg">Wasted Ad Spend ($6,200/mo)</h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Paid Google Search clicks were driving high-intent homeowners directly to an intimidating 22-field contact form demanding blueprint uploads and pipe gauge specifications.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-200 text-xs font-semibold text-slate-700">
              Only 4.2% form completion rate
            </div>
          </div>
        </div>

        {/* 8 Before Website Problems Matrix */}
        <div className="mt-12 bg-slate-900 text-white rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-amber-400 text-xs font-mono uppercase tracking-wider font-semibold">Diagnostic Audit</span>
              <h3 className="text-xl font-bold mt-1 text-white">The 8 Fatal UX Pitfalls of the Legacy Website</h3>
            </div>
            <div className="text-xs text-slate-400 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
              Audited against Nielsen Norman Group Heuristics
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: '1. Weak Visual Hierarchy',
                desc: 'Header, banners, text blocks, and sidebars fought for visual priority with identical weight.',
                impact: 'Causes immediate cognitive paralysis upon landing.',
              },
              {
                title: '2. Confusing Navigation',
                desc: '11 links wrapping awkwardly across two rows, mixing employee login with emergency help.',
                impact: 'Homeowners could not tell if water heaters were serviced.',
              },
              {
                title: '3. Unclear CTA',
                desc: 'No primary button above the fold. Only a buried "Click here" link in low-contrast gray.',
                impact: 'No direction or reassurance for ready-to-book users.',
              },
              {
                title: '4. Poor Mobile Layout',
                desc: 'Non-responsive 960px fixed width layout rendering microscopic links on iOS & Android.',
                impact: 'Thumb tapping errors and rapid bounce to competitors.',
              },
              {
                title: '5. Inconsistent Spacing',
                desc: 'Arbitrary margins (3px to 80px) and colliding float containers with uneven gutter gaps.',
                impact: 'Subconsciously projects amateurish lack of attention to detail.',
              },
              {
                title: '6. Weak Typography',
                desc: 'Four competing typefaces with unreadable low-contrast light gray (#999) text.',
                impact: 'Violates WCAG 2.1 AA accessibility standards.',
              },
              {
                title: '7. Too Much Text',
                desc: '1,200-word historical essay before any mention of actual plumbing repairs or rates.',
                impact: 'Panicking users will not read essays during active leaks.',
              },
              {
                title: '8. Unclear Service Scope',
                desc: 'Vague bullets like "Plumbing repairs" with zero price baselines or warranty info.',
                impact: 'Fosters fear of bait-and-switch pricing surcharges.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm">
                    <XCircle className="w-4 h-4 shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-700/50 text-[11px] text-amber-300/90 italic">
                  Impact: {item.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
