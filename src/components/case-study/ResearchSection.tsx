import React from 'react';
import { USER_PERSONAS } from '../../data/caseStudyData';
import { Users, Zap, ShieldAlert, HeartHandshake, Compass, CheckCircle } from 'lucide-react';

export const ResearchSection: React.FC = () => {
  return (
    <section id="research" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-wider mb-2">
            <Users className="w-4 h-4" /> 02 • Research & Mental Models
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
            Designing for High Cortisol: The Psychology of Plumbing Emergencies
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Unlike browsing an e-commerce catalog or evaluating B2B software, a plumbing website visitor is often experiencing elevated stress, property damage, or impending financial dread. Good UX must serve as an emotional de-escalation tool.
          </p>
        </div>

        {/* Dual Emotional Funnel Comparison */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Persona 1: Emergency */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-lg">
                    SJ
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">{USER_PERSONAS[0].name}</h3>
                    <span className="text-xs font-semibold text-rose-600 uppercase tracking-wide">
                      {USER_PERSONAS[0].archetype}
                    </span>
                  </div>
                </div>
                <span className="bg-rose-50 text-rose-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-rose-200">
                  Urgency: Critical (Now)
                </span>
              </div>

              <div className="mt-4 space-y-3 text-sm">
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Context</span>
                  <p className="text-slate-700 mt-0.5">{USER_PERSONAS[0].situation}</p>
                </div>

                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Core Anxiety Triggers</span>
                  <ul className="mt-1 space-y-1.5">
                    {USER_PERSONAS[0].anxietyTriggers.map((trigger, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-600 text-xs sm:text-sm">
                        <ShieldAlert className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{trigger}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 bg-rose-50/70 rounded-xl border border-rose-100">
                  <span className="text-xs font-bold text-rose-900 uppercase tracking-wide block">Old Site Failure</span>
                  <p className="text-xs text-rose-800 mt-1">{USER_PERSONAS[0].keyFrustrationWithOldSite}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-medium text-slate-500">Design Requirement:</span>
              <span className="font-bold text-blue-700 bg-blue-50 px-2 py-1 rounded">1-Tap 24/7 Direct Dispatch Call</span>
            </div>
          </div>

          {/* Persona 2: Methodical */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-lg">
                    MC
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">{USER_PERSONAS[1].name}</h3>
                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                      {USER_PERSONAS[1].archetype}
                    </span>
                  </div>
                </div>
                <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-blue-200">
                  Urgency: Planned (1-2 Weeks)
                </span>
              </div>

              <div className="mt-4 space-y-3 text-sm">
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Context</span>
                  <p className="text-slate-700 mt-0.5">{USER_PERSONAS[1].situation}</p>
                </div>

                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Core Anxiety Triggers</span>
                  <ul className="mt-1 space-y-1.5">
                    {USER_PERSONAS[1].anxietyTriggers.map((trigger, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-600 text-xs sm:text-sm">
                        <ShieldAlert className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                        <span>{trigger}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 bg-blue-50/70 rounded-xl border border-blue-100">
                  <span className="text-xs font-bold text-blue-900 uppercase tracking-wide block">Old Site Failure</span>
                  <p className="text-xs text-blue-800 mt-1">{USER_PERSONAS[1].keyFrustrationWithOldSite}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-medium text-slate-500">Design Requirement:</span>
              <span className="font-bold text-blue-700 bg-blue-50 px-2 py-1 rounded">60-Sec Upfront Quote Calculator</span>
            </div>
          </div>
        </div>

        {/* 3 Core Research Assumptions */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Compass className="w-5 h-5 text-blue-600" />
            Key Research Assumptions & Design Principles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80">
              <span className="text-xs font-bold text-blue-700 uppercase">Assumption 1</span>
              <h4 className="font-bold text-slate-900 mt-1">The "3-Second Rule" Under Panic</h4>
              <p className="text-slate-600 mt-2 text-xs leading-relaxed">
                If a flooded homeowner cannot confirm your phone number, service area, and 24/7 availability within 3 seconds, they immediately press "Back" to Google.
              </p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80">
              <span className="text-xs font-bold text-blue-700 uppercase">Assumption 2</span>
              <h4 className="font-bold text-slate-900 mt-1">Price Ambiguity Breeds Distrust</h4>
              <p className="text-slate-600 mt-2 text-xs leading-relaxed">
                Hiding starting prices doesn't force people to call—it drives them away. Transparent starting baselines and a waived diagnostic fee build instant goodwill.
              </p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80">
              <span className="text-xs font-bold text-blue-700 uppercase">Assumption 3</span>
              <h4 className="font-bold text-slate-900 mt-1">Credentials Require Immediate Proof</h4>
              <p className="text-slate-600 mt-2 text-xs leading-relaxed">
                Customers are letting technicians into their basements and bathrooms. State license numbers and background check badges must be verified, not hidden in footers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
