import React, { useState } from 'react';
import { Layout, Eye, Layers, Compass, ArrowRight } from 'lucide-react';

export const WireframeSection: React.FC = () => {
  const [wireframeMode, setWireframeMode] = useState<'architecture' | 'wireframe'>('wireframe');

  return (
    <section id="wireframes" className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-wider mb-2">
            <Layout className="w-4 h-4" /> 05 • Wireframing & Information Architecture
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
            Structuring the F-Pattern Eye Scan for High Conversion
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Before jumping into high-fidelity pixels, we re-architected the page to match natural eye scanning behavior. We replaced an unfocused maze with a sequential, anxiety-reducing narrative flow.
          </p>
        </div>

        {/* Mode Switcher */}
        <div className="mt-8 flex items-center gap-3">
          <button
            onClick={() => setWireframeMode('wireframe')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-2 ${
              wireframeMode === 'wireframe'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Layout className="w-4 h-4" />
            Lo-Fi Wireframe Blueprint
          </button>
          <button
            onClick={() => setWireframeMode('architecture')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-2 ${
              wireframeMode === 'architecture'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Layers className="w-4 h-4" />
            Information Architecture (IA) Map
          </button>
        </div>

        {/* Content View */}
        {wireframeMode === 'wireframe' ? (
          <div className="mt-8 bg-slate-900 rounded-2xl p-6 sm:p-8 text-white border border-slate-800">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div>
                <span className="text-xs font-mono text-cyan-400 font-semibold uppercase">Structural Schematic</span>
                <h3 className="text-lg font-bold text-white mt-0.5">High-Conversion Single-Page Wireframe Flow</h3>
              </div>
              <span className="text-xs text-slate-400 font-mono">Designed for rapid scanning & mobile thumb zones</span>
            </div>

            {/* Visual Wireframe Diagram */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              {/* Wireframe Skeleton Preview */}
              <div className="md:col-span-6 bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-4 font-mono text-xs">
                {/* Wireframe Zone 1: Sticky Top Bar */}
                <div className="p-3 bg-slate-900 border border-dashed border-cyan-500/50 rounded-lg flex items-center justify-between text-cyan-300">
                  <span>[ZONE 1] Sticky Emergency Dispatch Bar</span>
                  <span className="text-[10px] bg-cyan-950 px-2 py-0.5 rounded border border-cyan-700">1-Tap Dial</span>
                </div>

                {/* Wireframe Zone 2: Hero */}
                <div className="p-4 bg-slate-900 border border-dashed border-amber-500/50 rounded-lg space-y-2">
                  <div className="text-amber-300 font-semibold">[ZONE 2] Hero: Anxiety De-escalation</div>
                  <div className="h-4 bg-slate-800 rounded w-3/4"></div>
                  <div className="h-3 bg-slate-800/60 rounded w-full"></div>
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <div className="p-2 bg-amber-500/20 border border-amber-500/40 rounded text-center text-amber-300 text-[11px]">
                      CTA A: Call 24/7 (Emergency)
                    </div>
                    <div className="p-2 bg-blue-500/20 border border-blue-500/40 rounded text-center text-blue-300 text-[11px]">
                      CTA B: 60-Sec Online Quote
                    </div>
                  </div>
                  <div className="pt-2 text-[10px] text-slate-400 flex justify-between border-t border-slate-800">
                    <span>★ 4.9 (1,240+ Reviews)</span>
                    <span>License #MPL-84920</span>
                  </div>
                </div>

                {/* Wireframe Zone 3: Services */}
                <div className="p-4 bg-slate-900 border border-dashed border-slate-700 rounded-lg space-y-2">
                  <div className="text-slate-300 font-semibold">[ZONE 3] 6 Modular Service Cards</div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-16 bg-slate-800 rounded p-1 text-[10px] text-slate-400">Leak Repair ($149)</div>
                    <div className="h-16 bg-slate-800 rounded p-1 text-[10px] text-slate-400">Heater ($189)</div>
                    <div className="h-16 bg-slate-800 rounded p-1 text-[10px] text-slate-400">Drain ($99)</div>
                  </div>
                </div>

                {/* Wireframe Zone 4: Trust Proof & Before/After */}
                <div className="p-3 bg-slate-900 border border-dashed border-emerald-500/50 rounded-lg text-emerald-300 flex justify-between">
                  <span>[ZONE 4] Visual Before/After Slider + Verified Proof</span>
                  <span className="text-[10px] text-emerald-400">Interactive</span>
                </div>

                {/* Wireframe Zone 5: Sticky Mobile Bar */}
                <div className="p-2.5 bg-blue-900/60 border border-blue-500 rounded-lg text-center text-blue-200 text-[11px] font-bold">
                  [ZONE 5] Mobile Bottom Fixed Action Bar (Call + Book)
                </div>
              </div>

              {/* Wireframe Design Rationale List */}
              <div className="md:col-span-6 space-y-4">
                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                  <h4 className="font-bold text-white text-sm">1. Zone Placement Strategy</h4>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    By placing the emergency call banner above the navigation, users in distress see immediate contact within 150 milliseconds of load, eliminating 45+ seconds of hunting.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                  <h4 className="font-bold text-white text-sm">2. Dual Action Pathways</h4>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Rather than forcing all traffic through a single generic "Submit" form, the wireframe segments urgency right away. Emergency users tap to call; scheduled renovators click for an instant quote calculation.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                  <h4 className="font-bold text-white text-sm">3. Progressive Scannability</h4>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Service cards provide immediate price anchors ("Starting at $99") so visitors don't bounce out of fear of unknown hourly contractor bills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-8 bg-slate-900 rounded-2xl p-6 sm:p-8 text-white border border-slate-800">
            <h3 className="text-lg font-bold text-white mb-4">Streamlined Customer-Centric Information Architecture</h3>
            <p className="text-sm text-slate-300 mb-6">
              Replaced an 11-link legacy top menu with a focused, hierarchical 4-tier structure:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-mono">
              <div className="p-4 bg-slate-800 rounded-xl border border-slate-700">
                <span className="text-amber-400 font-bold block mb-2">01. SERVICES</span>
                <ul className="space-y-1 text-slate-300">
                  <li>• Emergency Burst Pipe</li>
                  <li>• Water Heater Repair</li>
                  <li>• Hydro-Jetting & Drains</li>
                  <li>• Sewer Camera Inspection</li>
                  <li>• Whole-Home Repiping</li>
                </ul>
              </div>

              <div className="p-4 bg-slate-800 rounded-xl border border-slate-700">
                <span className="text-blue-400 font-bold block mb-2">02. PRICING & TRUST</span>
                <ul className="space-y-1 text-slate-300">
                  <li>• Upfront Price Guarantees</li>
                  <li>• Waived Diagnostic Fee</li>
                  <li>• 100% Satisfaction Warranty</li>
                  <li>• Master License #MPL-84920</li>
                  <li>• $2M Liability Coverage</li>
                </ul>
              </div>

              <div className="p-4 bg-slate-800 rounded-xl border border-slate-700">
                <span className="text-emerald-400 font-bold block mb-2">03. SERVICE AREA</span>
                <ul className="space-y-1 text-slate-300">
                  <li>• Real-Time ETA Checker</li>
                  <li>• Active Truck Fleet Map</li>
                  <li>• Central & Greater Metro</li>
                  <li>• 45-Min Emergency Radius</li>
                </ul>
              </div>

              <div className="p-4 bg-slate-800 rounded-xl border border-slate-700">
                <span className="text-purple-400 font-bold block mb-2">04. CONVERSIONS</span>
                <ul className="space-y-1 text-slate-300">
                  <li>• 24/7 Direct Dispatch Call</li>
                  <li>• 60-Second Instant Quote</li>
                  <li>• Schedule Visit Online</li>
                  <li>• Live Technician Status</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
