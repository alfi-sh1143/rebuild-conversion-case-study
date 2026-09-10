import React, { useState } from 'react';
import { Phone, Droplet, Clock, ShieldCheck, Calendar, Menu, X } from 'lucide-react';

interface ModernHeaderProps {
  onOpenQuote: () => void;
}

export const ModernHeader: React.FC<ModernHeaderProps> = ({ onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-slate-200">
      {/* 24/7 Urgency Banner */}
      <div className="bg-slate-900 text-slate-100 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="font-semibold text-white">24/7 On-Call Emergency Dispatch:</span>
            <span className="text-emerald-400 font-mono font-medium">3 Master Plumbers Active (Avg. Arrival: 35 Mins)</span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-slate-300 text-xs">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" /> State Master Plumber License #MPL-84920
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-amber-400" /> Diagnostic Fee Waived with Any Repair
            </span>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
              <Droplet className="w-6 h-6 fill-white/30" />
            </div>
            <div>
              <span className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-1">
                ClearFlow <span className="text-blue-600">Plumbing</span>
              </span>
              <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                Emergency & Residential Masters
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-700">
            <a href="#services" className="hover:text-blue-600 transition">Services & Rates</a>
            <a href="#coverage" className="hover:text-blue-600 transition">Service Area (Live ETA)</a>
            <a href="#before-after" className="hover:text-blue-600 transition">Our Work</a>
            <a href="#reviews" className="hover:text-blue-600 transition">Reviews (4.9★)</a>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            {/* Phone Call Button (High Urgency) */}
            <a
              href="tel:5125553569"
              className="flex items-center gap-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl font-extrabold text-xs sm:text-sm shadow-md transition"
            >
              <Phone className="w-4 h-4 fill-slate-950 animate-bounce" />
              <div className="text-left leading-tight">
                <span className="text-[10px] uppercase font-bold tracking-wider opacity-80 block">Emergency 24/7</span>
                <span>(512) 555-FLOW</span>
              </div>
            </a>

            {/* Instant Online Quote Button */}
            <button
              onClick={onOpenQuote}
              className="hidden sm:inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md shadow-blue-600/20 transition cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Get 60s Quote</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 text-white px-4 pt-2 pb-6 space-y-3 border-t border-slate-800">
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-200 hover:text-white"
          >
            Services & Rates
          </a>
          <a
            href="#coverage"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-200 hover:text-white"
          >
            Service Area & Live Dispatch
          </a>
          <a
            href="#before-after"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-200 hover:text-white"
          >
            Our Work (Before & After)
          </a>
          <a
            href="#reviews"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-200 hover:text-white"
          >
            Customer Reviews (4.9★)
          </a>

          <div className="pt-3 border-t border-slate-800 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl text-center text-sm"
            >
              Calculate Instant Online Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
