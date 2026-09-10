import React, { useState } from 'react';
import { UX_ISSUES } from '../../data/caseStudyData';
import { UXIssue } from '../../types';
import { Layers, CheckCircle, AlertTriangle, ArrowUpRight, Search } from 'lucide-react';

interface UXIssuesSectionProps {
  onInspectOnBeforeSite: (issueId: string) => void;
}

export const UXIssuesSection: React.FC<UXIssuesSectionProps> = ({ onInspectOnBeforeSite }) => {
  const [selectedIssue, setSelectedIssue] = useState<UXIssue>(UX_ISSUES[0]);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Hierarchy', 'Navigation', 'CTA', 'Mobile', 'Typography', 'Content', 'Spacing'];

  const filteredIssues = filter === 'All'
    ? UX_ISSUES
    : UX_ISSUES.filter(issue => issue.category === filter);

  return (
    <section id="ux-issues" className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-rose-600 text-xs font-bold uppercase tracking-wider mb-2">
            <AlertTriangle className="w-4 h-4" /> 03 • In-Depth UX Problem Breakdown
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
            Heuristic Evaluation: Why the Legacy Website Failed
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            We conducted an exhaustive usability audit across mobile and desktop breakpoints against Jakob Nielsen's 10 Usability Heuristics. Here are the 8 fundamental flaws identified.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                filter === cat
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Interactive Problem Explorer Grid */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Issue List (Left side) */}
          <div className="lg:col-span-5 space-y-3">
            {filteredIssues.map((issue) => {
              const isSelected = selectedIssue.id === issue.id;
              return (
                <div
                  key={issue.id}
                  onClick={() => setSelectedIssue(issue)}
                  className={`p-4 rounded-xl border text-left transition cursor-pointer ${
                    isSelected
                      ? 'bg-blue-50/80 border-blue-500 shadow-xs'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold font-mono text-slate-500">{issue.id.toUpperCase()}</span>
                    <span
                      className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
                        issue.severity === 'Critical'
                          ? 'bg-rose-100 text-rose-700'
                          : 'bg-amber-100 text-amber-700'
                      }`}
                    >
                      {issue.severity}
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mt-1">{issue.title}</h4>
                  <p className="text-xs text-slate-500 line-clamp-2 mt-1">{issue.description}</p>
                </div>
              );
            })}
          </div>

          {/* Issue Deep-Dive Detail Panel (Right side) */}
          <div className="lg:col-span-7 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 sticky top-24">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="bg-blue-600 text-white text-xs font-mono font-bold px-2.5 py-1 rounded">
                  {selectedIssue.category}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  Severity: <span className="text-rose-400 font-bold">{selectedIssue.severity}</span>
                </span>
              </div>
              <button
                onClick={() => onInspectOnBeforeSite(selectedIssue.id)}
                className="text-xs font-semibold text-amber-300 hover:text-amber-200 flex items-center gap-1 bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-lg border border-slate-700 transition cursor-pointer"
              >
                Inspect on Outdated Site
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="mt-6">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">Heuristic Violated</span>
              <div className="text-amber-400 font-semibold text-sm mt-0.5">
                {selectedIssue.heuristic}
              </div>

              <h3 className="text-2xl font-bold text-white mt-4">{selectedIssue.title}</h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-2">
                {selectedIssue.description}
              </p>

              <div className="mt-6 p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                <span className="text-xs font-bold text-rose-400 uppercase tracking-wider block">Impact on Panicked User</span>
                <p className="text-slate-300 text-sm mt-1 leading-relaxed">
                  "{selectedIssue.impactOnUser}"
                </p>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-blue-950/60 border border-blue-800/60">
                <div className="flex items-center gap-2 text-blue-300 font-bold text-xs uppercase tracking-wider">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  Redesign Solution
                </div>
                <p className="text-slate-200 text-sm mt-1 leading-relaxed">
                  {selectedIssue.redesignSolution}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
