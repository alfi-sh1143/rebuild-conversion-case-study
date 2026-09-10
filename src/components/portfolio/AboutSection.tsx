import React from 'react';
import { PORTFOLIO_CONFIG } from '../../config/portfolioConfig';
import { User, CheckCircle2, Compass, Cpu, Palette, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onContactClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto">
        {/* Category Lead */}
        <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-wider mb-2">
          <User className="w-4 h-4" /> About My Background
        </div>

        {/* Section Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
          {PORTFOLIO_CONFIG.about.headline}
        </h2>

        {/* Biography Narrative */}
        <div className="mt-8 space-y-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          {PORTFOLIO_CONFIG.about.paragraphs.map((para, idx) => (
            <p key={idx} className="text-balance">
              {para}
            </p>
          ))}
        </div>

        {/* The Designer-Developer Bridge Card */}
        <div className="mt-12 bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-cyan-400 font-mono text-xs uppercase font-bold tracking-wider block mb-2">
                Why This Blend Matters to Your Team
              </span>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                No "Hand-Off" Friction Between Design & Engineering
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                When I build a Figma component, I’m already structuring it with CSS Flexbox logic, modular variants, and design tokens that mirror React component props. Design agencies and software teams get zero miscommunication, zero impossible layouts, and rapid prototype turnarounds.
              </p>

              <button
                onClick={onContactClick}
                className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition cursor-pointer"
              >
                <span>Let's talk about your next project or open role</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80">
                <Palette className="w-5 h-5 text-amber-400 mb-2" />
                <span className="font-bold text-white block">Design Sensibility</span>
                <p className="text-[11px] text-slate-400 mt-1">
                  Mathematical typographic scales, generous whitespace, visual hierarchy & heuristic audits.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80">
                <Cpu className="w-5 h-5 text-cyan-400 mb-2" />
                <span className="font-bold text-white block">Technical Fluency</span>
                <p className="text-[11px] text-slate-400 mt-1">
                  TypeScript, React, Next.js, semantic HTML, CSS Grid, and Git branch workflows.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80">
                <Compass className="w-5 h-5 text-emerald-400 mb-2" />
                <span className="font-bold text-white block">Cognitive Empathy</span>
                <p className="text-[11px] text-slate-400 mt-1">
                  Mental models, anxiety triggers, F-pattern eye scanning & conversion optimization.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80">
                <CheckCircle2 className="w-5 h-5 text-purple-400 mb-2" />
                <span className="font-bold text-white block">Accessibility First</span>
                <p className="text-[11px] text-slate-400 mt-1">
                  WCAG 2.1 AA/AAA contrast ratios, keyboard navigation, and touch-target ergonomics.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Values Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO_CONFIG.about.coreValues.map((val, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
              <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-mono font-bold flex items-center justify-center mb-3">
                0{idx + 1}
              </span>
              <h4 className="font-bold text-slate-900 text-base">{val.title}</h4>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
