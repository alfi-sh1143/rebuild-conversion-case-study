import React, { useState } from 'react';
import { BEFORE_AFTER_JOBS } from '../../data/plumbingData';
import { CheckCircle2, AlertOctagon, Sliders, ArrowLeftRight } from 'lucide-react';

export const BeforeAfterJobSlider: React.FC = () => {
  const [activeJobIndex, setActiveJobIndex] = useState<number>(0);
  const [sliderPosition, setSliderPosition] = useState<number>(50);

  const job = BEFORE_AFTER_JOBS[activeJobIndex];

  return (
    <section id="before-after" className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <span className="text-blue-600 text-xs font-bold uppercase tracking-wider block mb-2">
            Proof of Craftsmanship
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            See the ClearFlow Difference (Before & After)
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Plumbing is hidden behind walls until it fails. Drag the interactive comparison slider to inspect how our licensed masters eliminate dangerous pipe oxidation and code violations.
          </p>
        </div>

        {/* Job selector tabs */}
        <div className="mt-8 flex gap-3">
          {BEFORE_AFTER_JOBS.map((j, idx) => (
            <button
              key={j.id}
              onClick={() => {
                setActiveJobIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition cursor-pointer border ${
                activeJobIndex === idx
                  ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                  : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
              }`}
            >
              {j.title.split(' vs.')[0]}
            </button>
          ))}
        </div>

        {/* Interactive Slider Card */}
        <div className="mt-6 bg-slate-900 rounded-3xl p-6 sm:p-8 text-white border border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Interactive Image Split Slider */}
            <div className="lg:col-span-7">
              <div className="relative h-[340px] sm:h-[400px] rounded-2xl overflow-hidden select-none border border-slate-700 shadow-inner">
                {/* AFTER image (Full background) */}
                <img
                  src={job.afterImage}
                  alt="ClearFlow After"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* BEFORE image (Clipped with polygon) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={job.beforeImage}
                    alt="Before Repair"
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover max-w-none"
                    style={{ width: '100%', minWidth: '700px' }}
                  />
                </div>

                {/* Visual Badges */}
                <div className="absolute top-4 left-4 bg-rose-600/90 text-white font-bold text-[11px] px-3 py-1 rounded-full uppercase tracking-wider shadow">
                  BEFORE: Failing Hazard
                </div>
                <div className="absolute top-4 right-4 bg-emerald-600/90 text-white font-bold text-[11px] px-3 py-1 rounded-full uppercase tracking-wider shadow">
                  AFTER: ClearFlow Standard
                </div>

                {/* The Slider Divider Line & Thumb */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center shadow-2xl"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="w-9 h-9 bg-white text-slate-900 rounded-full shadow-2xl flex items-center justify-center -ml-0.5 border-2 border-slate-900">
                    <ArrowLeftRight className="w-4 h-4 text-slate-900" />
                  </div>
                </div>

                {/* Native Range input layered for touch/mouse drag */}
                <input
                  type="range"
                  min="5"
                  max="95"
                  value={sliderPosition}
                  onChange={(e) => setSliderPosition(Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                />
              </div>

              {/* Slider instruction helper */}
              <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <Sliders className="w-3.5 h-3.5 text-cyan-400" /> Drag slider left or right to compare
                </span>
                <span className="font-mono text-cyan-400">{sliderPosition}% / {100 - sliderPosition}%</span>
              </div>
            </div>

            {/* Technical Detail Breakdown */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white">{job.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  {job.description}
                </p>
              </div>

              {/* Before vs After Issues Checklist */}
              <div className="space-y-4 text-xs">
                <div className="p-4 bg-rose-950/40 border border-rose-800/60 rounded-xl space-y-1.5">
                  <span className="font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                    <AlertOctagon className="w-4 h-4" /> Before: Existing Problems
                  </span>
                  {job.beforeIssues.map((issue, idx) => (
                    <div key={idx} className="text-slate-300 flex items-center gap-2">
                      <span className="text-rose-400 font-bold">•</span>
                      <span>{issue}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-emerald-950/40 border border-emerald-800/60 rounded-xl space-y-1.5">
                  <span className="font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" /> After: ClearFlow Certified Result
                  </span>
                  {job.afterBenefits.map((benefit, idx) => (
                    <div key={idx} className="text-slate-300 flex items-center gap-2">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
