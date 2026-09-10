import React from 'react';
import { PORTFOLIO_CONFIG } from '../../config/portfolioConfig';
import { Wrench, Check, Sparkles, Layers, Code2, GitBranch } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-wider mb-2">
            <Wrench className="w-4 h-4" /> Technical & Design Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Skills Grounded in Practice
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            I don’t display generic proficiency percentages. Instead, here is a practical overview of how I use each tool to design, prototype, and build responsive, accessible web products.
          </p>
        </div>

        {/* 3 Main Skill Groupings */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PORTFOLIO_CONFIG.skills.map((group, groupIdx) => (
            <div
              key={groupIdx}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                  <div className="flex items-center gap-2.5">
                    {groupIdx === 0 && <Layers className="w-5 h-5 text-blue-600" />}
                    {groupIdx === 1 && <Code2 className="w-5 h-5 text-emerald-600" />}
                    {groupIdx === 2 && <GitBranch className="w-5 h-5 text-purple-600" />}
                    <h3 className="text-lg font-bold text-slate-900">{group.category}</h3>
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    {group.items.length} tools
                  </span>
                </div>

                <div className="space-y-4">
                  {group.items.map((skill, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-slate-50/70 border border-slate-200/60 hover:border-slate-300 hover:bg-slate-50 transition"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-900 text-sm">{skill.name}</span>
                        <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-white border border-slate-200 text-slate-600">
                          {skill.tag}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1 leading-normal">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-400 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span>Verified in active production projects</span>
              </div>
            </div>
          ))}
        </div>

        {/* Highlighted Tool Banner (Figma + React + Tailwind) */}
        <div className="mt-10 p-6 rounded-3xl bg-blue-50/80 border border-blue-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black font-mono">
              F→R
            </div>
            <div>
              <span className="font-bold text-slate-900 text-sm block">
                Primary Daily Stack: Figma, React, TypeScript & Tailwind CSS
              </span>
              <p className="text-xs text-slate-600 mt-0.5">
                Rapid translation from high-fidelity wireframes into accessible, production-grade web interfaces.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="text-xs font-bold text-blue-700 hover:text-blue-900 bg-white px-4 py-2 rounded-xl border border-blue-200 transition shrink-0"
          >
            Inquire for Work →
          </a>
        </div>
      </div>
    </section>
  );
};
