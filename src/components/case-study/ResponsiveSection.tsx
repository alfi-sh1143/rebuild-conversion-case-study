import React from 'react';
import { Smartphone, CheckCircle2, ShieldAlert, Sparkles, Navigation } from 'lucide-react';

export const ResponsiveSection: React.FC = () => {
  return (
    <section id="responsive" className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-wider mb-2">
            <Smartphone className="w-4 h-4" /> 07 • Mobile Usability & Ergonomics
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
            Designing for One-Handed Smartphone Thumb Zones
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            In household plumbing emergencies, 68% of users hold their phone in one hand while using their other hand to manage water damage or hold a flashlight. Usability is an ergonomic imperative.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Visual Thumb Zone Diagram */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-72 bg-slate-900 p-4 rounded-[40px] border-4 border-slate-700 shadow-2xl relative">
              {/* Phone notch */}
              <div className="w-28 h-4 bg-slate-800 rounded-full mx-auto mb-3"></div>

              {/* Screen Content Simulation */}
              <div className="bg-slate-50 rounded-2xl p-3 h-[460px] flex flex-col justify-between overflow-hidden relative text-slate-800 text-xs">
                {/* Simulated Screen Header */}
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                    <span className="font-extrabold text-blue-600">ClearFlow</span>
                    <span className="bg-emerald-100 text-emerald-800 text-[9px] font-bold px-1.5 py-0.5 rounded">24/7 OPEN</span>
                  </div>

                  <div className="mt-3 p-2.5 bg-blue-50 rounded-xl border border-blue-100">
                    <span className="text-[10px] text-blue-700 font-bold block">🚨 Emergency Dispatch</span>
                    <span className="text-[11px] font-bold text-slate-900">45-Min Arrival Guarantee</span>
                  </div>

                  <div className="mt-2 space-y-1">
                    <div className="h-2 bg-slate-200 rounded w-3/4"></div>
                    <div className="h-2 bg-slate-200 rounded w-1/2"></div>
                  </div>
                </div>

                {/* Thumb Zone Ergonomic Overlay Highlight */}
                <div className="my-auto p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-center">
                  <span className="text-[10px] font-bold text-amber-900 uppercase block">Natural Thumb Sweep Zone</span>
                  <span className="text-[9px] text-slate-600">Zero stretching required for primary actions</span>
                </div>

                {/* Fixed Bottom Action Bar */}
                <div className="p-2 bg-white rounded-xl shadow-lg border border-slate-200 flex items-center gap-1.5">
                  <div className="flex-1 bg-amber-500 text-slate-950 font-bold text-center py-2 rounded-lg text-[10px] flex items-center justify-center gap-1">
                    <span>📞 Tap to Call 24/7</span>
                  </div>
                  <div className="bg-blue-600 text-white font-bold text-center py-2 px-2.5 rounded-lg text-[10px]">
                    Quote
                  </div>
                </div>
              </div>

              <div className="w-24 h-1 bg-slate-700 rounded-full mx-auto mt-3"></div>
            </div>
          </div>

          {/* Explanation & Technical Principles */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                Steven Hoober's Mobile Thumb Zone Principles
              </div>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                49% of smartphone users interact with their device one-handed. By pinning the primary conversion buttons to a bottom fixed bar, users can initiate a phone call with zero upward hand-repositioning or accidental drops into standing water.
              </p>
            </div>

            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                Minimum 48px Touch Target Standard (WCAG 2.5.5)
              </div>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Replaced the legacy site's microscopic 10px hyperlinks with 52px high action buttons with generous 16px horizontal spacing, eliminating touch target misses and frustration.
              </p>
            </div>

            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                Adaptive Viewport Layouts (Mobile vs Desktop)
              </div>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                On mobile, the site consolidates into a single-column, tap-friendly card stack. On desktop, it unfolds into a multi-column command center with interactive diagnostic calculators and verified review carousels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
