import React, { useEffect } from 'react';
import { ProjectItem } from '../../config/portfolioConfig';
import {
  X,
  ArrowUpRight,
  Sparkles,
  Layers,
  Palette,
  Layout,
  Smartphone,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Lightbulb,
  ExternalLink,
  Github,
  Globe,
} from 'lucide-react';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenLivePrototype: (project: ProjectItem) => void;
  onOpenFullClearFlowApp?: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onOpenLivePrototype,
  onOpenFullClearFlowApp,
}) => {
  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex justify-center p-2 sm:p-4 md:p-6 animate-fadeIn"
    >
      <div className="bg-white rounded-3xl max-w-4xl w-full shadow-2xl border border-slate-200 overflow-hidden my-auto flex flex-col max-h-[92vh]">
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 overflow-hidden">
            <span className="bg-slate-900 text-white font-mono text-xs px-2.5 py-1 rounded-lg shrink-0">
              Case Study
            </span>
            <h2 id="case-study-title" className="text-base sm:text-lg font-bold text-slate-900 truncate">
              {project.title}
            </h2>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {project.id === 'clearflow-plumbing' && onOpenFullClearFlowApp && (
              <button
                onClick={() => {
                  onClose();
                  onOpenFullClearFlowApp();
                }}
                className="hidden sm:inline-flex bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-3.5 py-2 rounded-xl items-center gap-1.5 transition cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Open Interactive Redesign App</span>
              </button>
            )}

            <button
              onClick={() => onOpenLivePrototype(project)}
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs px-3 py-2 rounded-xl flex items-center gap-1.5 transition cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-blue-600" />
              <span className="hidden sm:inline">Live Prototype</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close Case Study Modal"
              className="p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Case Study Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-12 text-slate-800">
          {/* Hero Banner inside modal */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-xs font-mono font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                {project.projectType}
              </span>
              {project.isFictionalOrConcept && (
                <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                  Concept & Architectural Redesign
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {project.title}: {project.tagline}
            </h1>

            {/* Meta tags strip */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
              <div>
                <span className="text-slate-400 block font-mono">Role:</span>
                <span className="font-bold text-slate-800">{caseStudy.role}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-mono">Timeline:</span>
                <span className="font-bold text-slate-800">{caseStudy.timeline}</span>
              </div>
              <div className="col-span-2 sm:col-span-2">
                <span className="text-slate-400 block font-mono">Core Stack:</span>
                <span className="font-bold text-slate-800">{project.tools.slice(0, 4).join(', ')}</span>
              </div>
            </div>
          </div>

          {/* Section 1 & 2: Problem & Goal */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-rose-50/50 border border-rose-100">
              <div className="flex items-center gap-2 text-rose-700 font-bold text-xs uppercase tracking-wider mb-2">
                <AlertCircle className="w-4 h-4" /> 01. The Problem
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {caseStudy.problem}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-100">
              <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-wider mb-2">
                <CheckCircle2 className="w-4 h-4" /> 02. The Goal & Objectives
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {caseStudy.goal}
              </p>
            </div>
          </div>

          {/* Section 3: Design Process */}
          <div>
            <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-wider mb-2">
              <Layers className="w-4 h-4" /> 03. Design Process
            </div>
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-6">
              Methodology & Iterative Milestones
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {caseStudy.designProcess.map((step) => (
                <div key={step.stepNumber} className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-mono text-xs flex items-center justify-center font-bold">
                      {step.stepNumber}
                    </span>
                    <h4 className="font-bold text-slate-900 text-sm">{step.title}</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {step.description}
                  </p>
                  <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1">
                    {step.deliverables.map((del, dIdx) => (
                      <span key={dIdx} className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-mono">
                        {del}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Wireframes & IA */}
          <div>
            <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-wider mb-2">
              <Layout className="w-4 h-4" /> 04. Wireframe Approach & Information Architecture
            </div>
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-4">
              Layout Structure & Spatial Hierarchy
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
              {caseStudy.wireframeNotes}
            </p>

            <div className="space-y-3">
              {caseStudy.wireframeZones.map((z, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                  <div>
                    <span className="font-bold text-slate-900 block">{z.zone}</span>
                    <span className="text-slate-600 text-xs">{z.description}</span>
                  </div>
                  <span className="text-[11px] font-mono text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 shrink-0">
                    Rationale: {z.rationale}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 5: Design System */}
          <div>
            <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-wider mb-2">
              <Palette className="w-4 h-4" /> 05. Design System & Accessibility
            </div>
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-4">
              Atomic Tokens & Contrast Validation
            </h3>

            <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-6">
              <div>
                <span className="text-xs font-mono text-slate-400 block mb-1">Typography Scale:</span>
                <p className="text-xs sm:text-sm text-cyan-300 font-mono">
                  {caseStudy.designSystem.typography}
                </p>
              </div>

              <div>
                <span className="text-xs font-mono text-slate-400 block mb-3">Semantic Color Palette:</span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {caseStudy.designSystem.colors.map((c, cIdx) => (
                    <div key={cIdx} className="p-3 rounded-xl bg-slate-800 border border-slate-700 text-xs">
                      <div className="w-full h-8 rounded-lg mb-2 shadow-inner" style={{ backgroundColor: c.hex }}></div>
                      <span className="font-bold text-white block truncate">{c.name}</span>
                      <span className="font-mono text-[10px] text-slate-400 block">{c.hex}</span>
                      <span className="text-[10px] text-slate-300 block mt-1 leading-tight">{c.role}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <span className="text-xs font-mono text-slate-400 block mb-2">Accessibility & Core Rules:</span>
                <div className="space-y-1.5 text-xs text-slate-300">
                  {caseStudy.designSystem.principles.map((rule, rIdx) => (
                    <div key={rIdx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{rule}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section 6: Final Design Highlights */}
          <div>
            <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" /> 06. Final Design Highlights
            </div>
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-4">
              Key Interactive Solutions
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              {caseStudy.finalDesignHighlights.map((feat, fIdx) => (
                <div key={fIdx} className="p-4 rounded-xl bg-white border border-slate-200 flex items-start gap-3 shadow-xs">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="text-slate-700 font-medium leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 7: Responsive Design */}
          <div>
            <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-wider mb-2">
              <Smartphone className="w-4 h-4" /> 07. Responsive Design Strategy
            </div>
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-3">
              Mobile Thumb-Zone Ergonomics
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50 p-5 rounded-2xl border border-slate-200">
              {caseStudy.responsiveStrategy}
            </p>
          </div>

          {/* Section 8: Key Design Decisions Deep-Dive (At least 5) */}
          <div>
            <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-wider mb-2">
              <Lightbulb className="w-4 h-4" /> 08. Key Design Decisions & Why They Were Made
            </div>
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
              Critical Trade-Offs & Rationale
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Senior design work is evaluated not by arbitrary aesthetic preferences, but by intentional problem solving and understanding trade-offs.
            </p>

            <div className="space-y-4">
              {caseStudy.designDecisions.map((dec, dIdx) => (
                <div key={dIdx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-mono text-xs flex items-center justify-center font-bold">
                      0{dIdx + 1}
                    </span>
                    <h4 className="font-bold text-slate-900 text-base">{dec.title}</h4>
                  </div>

                  <div className="p-3 bg-blue-50/70 border border-blue-100 rounded-xl text-xs text-blue-950">
                    <strong>Why Made:</strong> {dec.whyMade}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="font-semibold text-slate-500 block mb-1">Alternative Considered:</span>
                      <span>{dec.alternativeConsidered}</span>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                      <span className="font-semibold text-slate-500 block mb-1">Trade-off & Mitigation:</span>
                      <span>{dec.tradeoff}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 9: Outcome */}
          <div className="p-6 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono uppercase text-emerald-400 font-bold block mb-1">
                09. Outcome & Impact
              </span>
              <h4 className="text-xl font-bold text-white">Measurable Results</h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-xl leading-relaxed">
                {caseStudy.outcome}
              </p>
            </div>

            <button
              onClick={() => onOpenLivePrototype(project)}
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-6 py-3.5 rounded-xl transition flex items-center gap-2 cursor-pointer shrink-0 shadow-lg"
            >
              <Globe className="w-4 h-4" />
              <span>Launch Live Prototype</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
