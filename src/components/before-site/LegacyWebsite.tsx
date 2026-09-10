import React, { useState } from 'react';
import { UX_ISSUES } from '../../data/caseStudyData';
import { UXIssue } from '../../types';
import { AlertCircle, HelpCircle, Eye, EyeOff, Sparkles, X } from 'lucide-react';

interface LegacyWebsiteProps {
  onSwitchToRedesign: () => void;
  highlightedIssueId?: string;
}

export const LegacyWebsite: React.FC<LegacyWebsiteProps> = ({
  onSwitchToRedesign,
  highlightedIssueId,
}) => {
  const [showInspectorPins, setShowInspectorPins] = useState<boolean>(true);
  const [activeIssue, setActiveIssue] = useState<UXIssue | null>(
    highlightedIssueId ? UX_ISSUES.find((i) => i.id === highlightedIssueId) || null : null
  );

  return (
    <div className="bg-slate-300 min-h-screen font-serif text-slate-800 relative select-text pb-20">
      {/* Top Inspector Bar */}
      <div className="sticky top-16 z-30 bg-slate-950 text-white px-4 py-2.5 border-b border-amber-500/50 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="bg-rose-500 text-white font-bold font-mono px-2 py-0.5 rounded text-[11px]">
              OUTDATED "BEFORE" ARCHIVE
            </span>
            <span className="text-slate-300 font-sans hidden sm:inline">
              Simulated 2008-Era Website with 8 Critical UX Flaws
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowInspectorPins(!showInspectorPins)}
              className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-amber-300 px-3 py-1.5 rounded-lg border border-slate-700 transition cursor-pointer font-sans text-xs"
            >
              {showInspectorPins ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              <span>{showInspectorPins ? 'Hide UX Flaw Pins' : 'Show 8 UX Flaw Pins'}</span>
            </button>

            <button
              onClick={onSwitchToRedesign}
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-3 py-1.5 rounded-lg transition font-sans text-xs flex items-center gap-1 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>See Modern Redesign</span>
            </button>
          </div>
        </div>
      </div>

      {/* Marquee Banner of the 2000s */}
      <div className="bg-amber-200 text-slate-900 text-xs py-1 px-2 border-b border-amber-300 font-mono overflow-hidden whitespace-nowrap">
        <div className="animate-marquee inline-block">
          *** WELCOME TO THE OFFICIAL HOMEPAGE OF CLEARFLOW PLUMBING SERVICES LLC - SERVING AUSTIN SINCE 1994 - PLEASE CALL DURING BUSINESS HOURS 9:00AM - 4:00PM ONLY - FAX REQUESTS ACCEPTED 24/7 ***
        </div>
      </div>

      {/* Outdated Container (Rigid 960px fixed width simulating old web) */}
      <div className="max-w-4xl mx-auto my-6 bg-white border-2 border-slate-500 shadow-2xl relative font-[Times_New_Roman]">
        {/* OUTDATED HEADER */}
        <header className="bg-gradient-to-b from-blue-900 via-blue-800 to-blue-950 text-white p-4 border-b-4 border-amber-500 relative">
          {/* PIN 1: Weak Visual Hierarchy */}
          {showInspectorPins && (
            <button
              onClick={() => setActiveIssue(UX_ISSUES[0])}
              className="absolute top-2 right-2 bg-rose-600 hover:bg-rose-500 text-white text-[11px] font-sans font-bold px-2 py-1 rounded-full shadow-lg border border-white animate-bounce flex items-center gap-1 cursor-pointer z-20"
            >
              <AlertCircle className="w-3 h-3" /> Pin #1: Weak Hierarchy
            </button>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold tracking-widest text-amber-300 font-serif drop-shadow-md">
                CLEARFLOW PLUMBING CO.
              </h1>
              <p className="text-xs text-slate-300 italic">"Pipe Perfection For Central Texas"</p>
            </div>
            <div className="text-center sm:text-right text-xs text-slate-300 border border-blue-700 p-2 bg-blue-950/60">
              <div>Office Phone: 512-555-3569</div>
              <div>Fax: 512-555-3570</div>
              <div className="text-[10px] text-amber-300 mt-0.5">Closed on Weekends and Federal Holidays</div>
            </div>
          </div>

          {/* PIN 2: Confusing Navigation with 11 links */}
          <div className="relative mt-4 pt-2 border-t border-blue-700/80">
            {showInspectorPins && (
              <button
                onClick={() => setActiveIssue(UX_ISSUES[1])}
                className="absolute -top-3 left-4 bg-rose-600 hover:bg-rose-500 text-white text-[11px] font-sans font-bold px-2 py-1 rounded-full shadow-lg border border-white animate-pulse flex items-center gap-1 cursor-pointer z-20"
              >
                <AlertCircle className="w-3 h-3" /> Pin #2: Confusing Nav
              </button>
            )}

            <nav className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-amber-200 font-sans underline justify-center sm:justify-start">
              <a href="#" className="hover:text-white">Home</a>
              <span>|</span>
              <a href="#" className="hover:text-white">Founder Bob's Bio</a>
              <span>|</span>
              <a href="#" className="hover:text-white">Our 1994 History</a>
              <span>|</span>
              <a href="#" className="hover:text-white">Equipment Photos</a>
              <span>|</span>
              <a href="#" className="hover:text-white">Pipe Work</a>
              <span>|</span>
              <a href="#" className="hover:text-white">Commercial Portal</a>
              <span>|</span>
              <a href="#" className="hover:text-white">Employee Login</a>
              <span>|</span>
              <a href="#" className="hover:text-white">Inclement Weather Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-white">Inquiry Form</a>
              <span>|</span>
              <a href="#" className="hover:text-white">Site Map</a>
            </nav>
          </div>
        </header>

        {/* 2-COLUMN CLUTTERED BODY */}
        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Left Column: Dense, Wall of Text */}
          <div className="md:col-span-8 p-6 space-y-6 relative border-r border-slate-300">
            {/* PIN 7: Too much text */}
            {showInspectorPins && (
              <button
                onClick={() => setActiveIssue(UX_ISSUES[6])}
                className="absolute top-4 right-4 bg-rose-600 hover:bg-rose-500 text-white text-[11px] font-sans font-bold px-2 py-1 rounded-full shadow-lg border border-white animate-pulse flex items-center gap-1 cursor-pointer z-20"
              >
                <AlertCircle className="w-3 h-3" /> Pin #7: 1,200 Words of Text
              </button>
            )}

            {/* PIN 6: Weak typography */}
            {showInspectorPins && (
              <button
                onClick={() => setActiveIssue(UX_ISSUES[5])}
                className="absolute top-28 left-4 bg-rose-600 hover:bg-rose-500 text-white text-[11px] font-sans font-bold px-2 py-1 rounded-full shadow-lg border border-white animate-pulse flex items-center gap-1 cursor-pointer z-20"
              >
                <AlertCircle className="w-3 h-3" /> Pin #6: Weak Typography
              </button>
            )}

            <div>
              <h2 className="text-xl font-bold text-slate-900 border-b pb-1 font-serif">
                Welcome to Our Plumbing Company Internet Site
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-normal text-justify">
                ClearFlow Plumbing was originally established back in July of 1994 by Robert "Bob" Vance after completing fourteen years of municipal pipeline engineering apprenticeship under his uncle's firm in Ohio. When Bob first moved down to Austin in an old Ford Econoline van equipped with only three pipe wrenches, a manual copper tube cutter, and an unwavering commitment to traditional honest customer satisfaction, the landscape of residential plumbing looked vastly different than what modern computer systems offer today...
              </p>
              <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-normal text-justify">
                Over the decades, we have watched technology evolve, but we remain firm in our belief that quality pipe craftsmanship speaks for itself without the need for flashy marketing gimmicks. Whether you are dealing with cast iron deterioration in historical homes or newer PVC lines installed during the construction booms, our crew strives to deliver satisfactory service within reasonable operating schedules.
              </p>
            </div>

            {/* PIN 8: Unclear service information */}
            <div className="relative p-4 bg-slate-100 border border-slate-300">
              {showInspectorPins && (
                <button
                  onClick={() => setActiveIssue(UX_ISSUES[7])}
                  className="absolute -top-3 right-4 bg-rose-600 hover:bg-rose-500 text-white text-[11px] font-sans font-bold px-2 py-1 rounded-full shadow-lg border border-white animate-pulse flex items-center gap-1 cursor-pointer z-20"
                >
                  <AlertCircle className="w-3 h-3" /> Pin #8: Unclear Services
                </button>
              )}

              <h3 className="text-sm font-bold text-slate-800 font-sans uppercase">
                Services Rendered by Our Specialists:
              </h3>
              <ul className="mt-2 text-xs text-slate-700 space-y-1 list-disc list-inside">
                <li>General plumbing repair activities</li>
                <li>Pipe maintenance and fitting checks</li>
                <li>Water system assessments (appointment required)</li>
                <li>Drain issues (may incur equipment surcharge depending on blockage severity)</li>
                <li>Commercial contract bidding</li>
              </ul>
              <div className="mt-3 text-[11px] text-slate-500 italic">
                * Rates are not published on the internet due to fluctuating municipal material costs and seasonal supply changes. Please request a quote via postal correspondence or phone during operating hours.
              </div>
            </div>

            {/* PIN 3: Unclear CTA */}
            <div className="relative p-4 bg-yellow-50 border border-yellow-200 text-xs">
              {showInspectorPins && (
                <button
                  onClick={() => setActiveIssue(UX_ISSUES[2])}
                  className="absolute -top-3 left-4 bg-rose-600 hover:bg-rose-500 text-white text-[11px] font-sans font-bold px-2 py-1 rounded-full shadow-lg border border-white animate-bounce flex items-center gap-1 cursor-pointer z-20"
                >
                  <AlertCircle className="w-3 h-3" /> Pin #3: Unclear CTA
                </button>
              )}

              <p className="text-slate-800">
                To initiate customer contact regarding upcoming residential repair scheduling,{' '}
                <a href="#inquiry-form" className="text-blue-700 underline font-bold hover:text-blue-900">
                  click here to fill out inquiry form
                </a>{' '}
                or leave a telephone message with our dispatch secretary during normal working hours.
              </p>
            </div>
          </div>

          {/* Right Column: Terrible 22-Field Inquiry Form & Inconsistent Spacing */}
          <div className="md:col-span-4 p-4 bg-slate-50 relative space-y-4 text-xs font-sans">
            {/* PIN 5: Inconsistent spacing */}
            {showInspectorPins && (
              <button
                onClick={() => setActiveIssue(UX_ISSUES[4])}
                className="absolute top-2 right-2 bg-rose-600 hover:bg-rose-500 text-white text-[11px] font-sans font-bold px-2 py-1 rounded-full shadow-lg border border-white animate-pulse flex items-center gap-1 cursor-pointer z-20"
              >
                <AlertCircle className="w-3 h-3" /> Pin #5: Bad Spacing
              </button>
            )}

            {/* PIN 4: Poor mobile layout */}
            {showInspectorPins && (
              <button
                onClick={() => setActiveIssue(UX_ISSUES[3])}
                className="absolute top-24 left-2 bg-rose-600 hover:bg-rose-500 text-white text-[11px] font-sans font-bold px-2 py-1 rounded-full shadow-lg border border-white animate-bounce flex items-center gap-1 cursor-pointer z-20"
              >
                <AlertCircle className="w-3 h-3" /> Pin #4: Broken on Mobile
              </button>
            )}

            <div id="inquiry-form" className="bg-white p-3 border-2 border-slate-400 rounded">
              <h4 className="font-bold text-slate-900 border-b pb-1 text-xs uppercase text-center bg-slate-200 py-1">
                Official Estimate Inquiry Form (22 Fields)
              </h4>

              <form className="mt-3 space-y-2 text-[11px]">
                <div>
                  <label className="block text-slate-600">Full Legal Name *</label>
                  <input type="text" className="w-full border p-1 bg-slate-50 text-xs" />
                </div>
                <div>
                  <label className="block text-slate-600">Tax Identification / SSN (For Commercial)</label>
                  <input type="text" className="w-full border p-1 bg-slate-50 text-xs" />
                </div>
                <div>
                  <label className="block text-slate-600">Daytime Landline Phone *</label>
                  <input type="text" className="w-full border p-1 bg-slate-50 text-xs" />
                </div>
                <div>
                  <label className="block text-slate-600">Fax Machine Number</label>
                  <input type="text" className="w-full border p-1 bg-slate-50 text-xs" />
                </div>
                <div>
                  <label className="block text-slate-600">Full Street Address with County *</label>
                  <input type="text" className="w-full border p-1 bg-slate-50 text-xs" />
                </div>
                <div>
                  <label className="block text-slate-600">Approximate Pipe Diameter (in mm or inches)</label>
                  <input type="text" className="w-full border p-1 bg-slate-50 text-xs" />
                </div>
                <div>
                  <label className="block text-slate-600">Year Municipal Water Main Installed</label>
                  <input type="text" className="w-full border p-1 bg-slate-50 text-xs" />
                </div>
                <div>
                  <label className="block text-slate-600">Architectural Blueprints (.TIFF only)</label>
                  <input type="file" className="w-full border p-1 bg-slate-50 text-[10px]" />
                </div>
                <div>
                  <label className="block text-slate-600">Preferred Payment (Check or Cash Only)</label>
                  <select className="w-full border p-1 bg-slate-50 text-xs">
                    <option>Paper Check upon arrival</option>
                    <option>Cash in envelope</option>
                    <option>Cashier's check</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => alert("Simulation: In 2008, submitting this form took 4 days to receive a return phone call!")}
                    className="w-full bg-slate-300 hover:bg-slate-400 border border-slate-600 text-slate-900 py-1.5 font-bold text-xs"
                  >
                    Submit Form For Review
                  </button>
                  <span className="text-[10px] text-slate-400 text-center block mt-1">
                    * Response time: 3 to 5 business days
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* OUTDATED FOOTER */}
        <footer className="bg-slate-200 p-4 border-t border-slate-400 text-center text-xs text-slate-600 font-sans space-y-1">
          <div>ClearFlow Plumbing Services LLC • 1400 S Congress, Austin TX 78704</div>
          <div className="text-[10px] text-slate-500">
            Best viewed in Microsoft Internet Explorer 6.0 or Netscape Navigator at 1024x768 resolution.
          </div>
          <div className="text-[10px] text-slate-400">
            © 1994-2008 ClearFlow Plumbing. All rights reserved.
          </div>
        </footer>
      </div>

      {/* Floating UX Issue Inspector Drawer Modal */}
      {activeIssue && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs font-sans">
          <div className="bg-slate-900 border border-slate-700 text-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setActiveIssue(null)}
              className="absolute top-4 right-4 p-1 rounded-full text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="bg-rose-600 text-white text-xs font-mono font-bold px-2 py-0.5 rounded">
                {activeIssue.category} Flaw
              </span>
              <span className="text-xs text-rose-400 font-mono">
                Severity: <strong>{activeIssue.severity}</strong>
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mt-1">{activeIssue.title}</h3>

            <div className="mt-3 p-3 bg-slate-800 rounded-xl border border-slate-700 text-xs">
              <span className="text-slate-400 block font-mono">Heuristic Violation:</span>
              <span className="text-amber-300 font-semibold">{activeIssue.heuristic}</span>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {activeIssue.description}
            </p>

            <div className="mt-4 p-3 bg-rose-950/60 border border-rose-800/80 rounded-xl text-xs text-rose-200">
              <strong>User Frustration:</strong> {activeIssue.impactOnUser}
            </div>

            <div className="mt-4 p-3 bg-blue-950/60 border border-blue-800/80 rounded-xl text-xs text-blue-200">
              <strong>Redesign Solution:</strong> {activeIssue.redesignSolution}
            </div>

            <div className="mt-6 flex items-center justify-between gap-3">
              <button
                onClick={() => setActiveIssue(null)}
                className="text-xs text-slate-400 hover:text-white px-3 py-2"
              >
                Close Inspector
              </button>

              <button
                onClick={onSwitchToRedesign}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 transition shadow"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>See How Redesign Fixes This</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
