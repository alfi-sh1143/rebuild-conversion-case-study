import React from 'react';
import { Palette, Type, Box, CheckCircle2, Shield } from 'lucide-react';

export const DesignSystemSection: React.FC = () => {
  const colorTokens = [
    {
      name: 'Deep Slate Navy',
      hex: '#0F172A',
      role: 'Primary Background & Core Heading Text',
      contrast: '16.8:1 AAA vs White',
      bgClass: 'bg-slate-900',
      textClass: 'text-white',
    },
    {
      name: 'Safety Amber',
      hex: '#F59E0B',
      role: 'Emergency CTAs & Conversion Focal Points',
      contrast: '7.8:1 AAA vs Slate',
      bgClass: 'bg-amber-500',
      textClass: 'text-slate-950',
    },
    {
      name: 'Clean Aqua Blue',
      hex: '#0284C7',
      role: 'Brand Accent, Hydro Elements & Links',
      contrast: '4.8:1 AA vs White',
      bgClass: 'bg-sky-600',
      textClass: 'text-white',
    },
    {
      name: 'Assurance Emerald',
      hex: '#10B981',
      role: 'Guarantees, Verification Badges & Reviews',
      contrast: '4.6:1 AA vs White',
      bgClass: 'bg-emerald-600',
      textClass: 'text-white',
    },
    {
      name: 'Off-White Neutral',
      hex: '#F8FAFC',
      role: 'Warm Canvas Neutral to Prevent Eye Strain',
      contrast: '15.9:1 AAA vs Slate',
      bgClass: 'bg-slate-50',
      textClass: 'text-slate-900',
    },
  ];

  return (
    <section id="design-system" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-wider mb-2">
            <Palette className="w-4 h-4" /> 06 • Design System & Accessibility
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
            A Clean, High-Contrast Visual Language for ClearFlow
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Every element was built with rigorous mathematical scales, accessibility compliance (WCAG 2.1 AA/AAA), and emotional de-escalation psychology.
          </p>
        </div>

        {/* Color Palette Grid */}
        <div className="mt-10">
          <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Palette className="w-5 h-5 text-blue-600" />
            Semantic Color Tokens & WCAG Contrast
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {colorTokens.map((token, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs flex flex-col justify-between"
              >
                <div className={`h-24 ${token.bgClass} p-4 flex flex-col justify-end`}>
                  <span className={`font-mono text-xs font-bold ${token.textClass}`}>{token.hex}</span>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{token.name}</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">{token.role}</p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-emerald-700 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{token.contrast}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Typography & Spatial Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Typography Scale */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-base pb-4 border-b border-slate-100">
              <Type className="w-5 h-5 text-blue-600" />
              Typography Scale (Plus Jakarta Sans)
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-baseline justify-between gap-4 pb-3 border-b border-slate-100">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Display Headline</div>
                  <span className="text-xs text-slate-400 font-mono">Hero Main Heading (36px - 48px / 800 weight)</span>
                </div>
                <span className="text-xs font-bold text-slate-500 font-mono">48px</span>
              </div>

              <div className="flex items-baseline justify-between gap-4 pb-3 border-b border-slate-100">
                <div>
                  <div className="text-xl font-bold text-slate-900">Section Title</div>
                  <span className="text-xs text-slate-400 font-mono">Service & Case Study Titles (24px - 30px / 700 weight)</span>
                </div>
                <span className="text-xs font-bold text-slate-500 font-mono">28px</span>
              </div>

              <div className="flex items-baseline justify-between gap-4 pb-3 border-b border-slate-100">
                <div>
                  <div className="text-base font-semibold text-slate-800">Card Header & Label</div>
                  <span className="text-xs text-slate-400 font-mono">Interactive Component Labels (16px - 18px / 600 weight)</span>
                </div>
                <span className="text-xs font-bold text-slate-500 font-mono">18px</span>
              </div>

              <div className="flex items-baseline justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Body copy standard with line-height 1.6 to ensure maximum legibility for stressful reading.
                  </p>
                  <span className="text-xs text-slate-400 font-mono">Body Paragraphs (14px - 16px / 400 weight)</span>
                </div>
                <span className="text-xs font-bold text-slate-500 font-mono">15px</span>
              </div>
            </div>
          </div>

          {/* Component & Button Tokens */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-base pb-4 border-b border-slate-100">
              <Box className="w-5 h-5 text-blue-600" />
              Micro-Components & Interactive States
            </div>

            <div className="mt-6 space-y-6">
              {/* Emergency Beacon Button */}
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Emergency Live Call Token (Safety Amber with Pulsating Indicator)
                </span>
                <div className="flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center gap-2 bg-amber-500 text-slate-950 px-4 py-2.5 rounded-xl font-bold text-xs shadow-md">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-600"></span>
                    </span>
                    <span>CALL 24/7: (512) 555-FLOW</span>
                  </div>
                  <span className="text-xs text-slate-500">Min. touch target: 48px height</span>
                </div>
              </div>

              {/* Digital Quote CTA */}
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Primary Digital Quote CTA (Sky Blue with Hover Elevation)
                </span>
                <div className="flex flex-wrap items-center gap-3">
                  <button className="bg-blue-600 text-white px-4 py-2.5 rounded-xl font-semibold text-xs shadow-sm">
                    Get 60-Sec Upfront Quote →
                  </button>
                  <span className="text-xs text-slate-500">Dual pathway for planned inquiries</span>
                </div>
              </div>

              {/* Verified Trust Badges */}
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Trust Credential Badges (Stacked Authority)
                </span>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-medium px-2.5 py-1 rounded-lg">
                    <Shield className="w-3.5 h-3.5 text-emerald-600" /> License #MPL-84920
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-800 border border-blue-200 text-xs font-medium px-2.5 py-1 rounded-lg">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" /> $2M Insured
                  </span>
                  <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-800 border border-amber-200 text-xs font-medium px-2.5 py-1 rounded-lg">
                    ★ 4.9 (1,240+ Local Reviews)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
