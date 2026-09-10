import React from 'react';
import { Phone, Calendar, Shield, Star, CheckCircle, Clock, ArrowRight, Zap, MapPin } from 'lucide-react';

interface ModernHeroProps {
  onOpenQuote: () => void;
}

export const ModernHero: React.FC<ModernHeroProps> = ({ onOpenQuote }) => {
  return (
    <section className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-12 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background glow & subtle blueprint grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7">
            {/* Urgency Pill */}
            <div className="inline-flex items-center gap-2 bg-slate-800/90 border border-slate-700/80 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-slate-300">Fast Local Response:</span>
              <span className="text-emerald-400 font-bold">45-Minute Emergency Arrival Guarantee</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Fast, Honest Plumbing When Every Second Counts.
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Burst pipes, failing water heaters, or stubborn sewer backups—our licensed Master Plumbers arrive equipped to fix the issue in one visit. Zero hidden trip fees, upfront pricing, and a 100% satisfaction guarantee.
            </p>

            {/* DUAL CTA ARCHITECTURE */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* Emergency Call CTA */}
              <a
                href="tel:5125553569"
                className="flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-6 py-4 rounded-xl text-base shadow-xl shadow-amber-500/20 transition group"
              >
                <Phone className="w-5 h-5 fill-slate-950 group-hover:rotate-12 transition-transform" />
                <div className="text-left">
                  <span className="text-[10px] uppercase font-bold tracking-wider opacity-80 block">Active Leak? Call 24/7</span>
                  <span>(512) 555-FLOW</span>
                </div>
              </a>

              {/* Digital 60s Quote CTA */}
              <button
                onClick={onOpenQuote}
                className="flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-4 rounded-xl text-base shadow-lg shadow-blue-600/20 transition cursor-pointer border border-blue-400/30"
              >
                <Calendar className="w-5 h-5" />
                <span>Calculate 60-Sec Upfront Quote</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>

            {/* Fast Value Reassurances */}
            <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>$49 Diagnostic Fee Waived with Repair</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero After-Hours Surge Pricing</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Licensed Master Plumbers Only</span>
              </span>
            </div>

            {/* TRUST SIGNAL STACKING (Directly Above the Fold) */}
            <div className="mt-10 pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/60">
                <div className="flex items-center gap-1 text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span className="font-extrabold text-sm text-white">4.9 / 5.0</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">1,240+ Verified Reviews</div>
              </div>

              <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/60">
                <div className="text-emerald-400 font-extrabold text-sm flex items-center gap-1">
                  <Shield className="w-4 h-4" />
                  <span>#MPL-84920</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">State Master License</div>
              </div>

              <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/60">
                <div className="text-blue-400 font-extrabold text-sm flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" />
                  <span>$2,000,000</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">General Liability Insured</div>
              </div>

              <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/60">
                <div className="text-cyan-400 font-extrabold text-sm flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>1-Yr Warranty</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">100% Workmanship Guarantee</div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Dispatcher & Quick Diagnostic Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-800/90 border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 border-b border-slate-700">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <span className="font-bold text-white text-sm">Live Dispatch Status</span>
                </div>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-full border border-cyan-800">
                  Ready to Roll
                </span>
              </div>

              {/* Active Technician Teaser */}
              <div className="mt-4 p-4 bg-slate-900/90 rounded-2xl border border-slate-700/80 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/30 border border-blue-500/40 flex items-center justify-center font-bold text-blue-300 text-base">
                  DM
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-sm">Dave Miller</span>
                    <span className="text-[11px] text-emerald-400 font-semibold">Truck #4 On-Call</span>
                  </div>
                  <div className="text-xs text-slate-400">Master Plumber • 14 Yrs Exp. • Background Checked</div>
                  <div className="text-[11px] text-amber-300 mt-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> In Area: Downtown & South Congress
                  </div>
                </div>
              </div>

              {/* Quick Issue Picker */}
              <div className="mt-5">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
                  What issue are you facing right now?
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    { name: 'Water Pipe Burst', price: 'from $149' },
                    { name: 'No Hot Water', price: 'from $189' },
                    { name: 'Clogged Drain', price: 'from $99' },
                    { name: 'Toilet / Faucet Leak', price: 'from $119' },
                  ].map((issue, idx) => (
                    <button
                      key={idx}
                      onClick={onOpenQuote}
                      className="p-3 bg-slate-900/60 hover:bg-slate-700 border border-slate-700/80 hover:border-blue-500 rounded-xl text-left transition cursor-pointer flex flex-col justify-between"
                    >
                      <span className="font-semibold text-slate-200">{issue.name}</span>
                      <span className="text-cyan-400 font-mono text-[11px] mt-1 font-bold">{issue.price}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* CTA inside Dispatcher Card */}
              <button
                onClick={onOpenQuote}
                className="mt-5 w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold py-3.5 rounded-xl text-sm transition cursor-pointer shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2"
              >
                <span>Check Available Dispatch Windows</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="mt-3 text-center text-[11px] text-slate-400">
                🔒 No commitment • Instant estimated pricing upfront
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
