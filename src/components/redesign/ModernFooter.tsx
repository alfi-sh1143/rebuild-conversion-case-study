import React from 'react';
import { Droplet, Phone, Mail, MapPin, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

interface ModernFooterProps {
  onOpenQuote: () => void;
}

export const ModernFooter: React.FC<ModernFooterProps> = ({ onOpenQuote }) => {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-24 md:pb-16 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                <Droplet className="w-5 h-5 fill-white/30" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                ClearFlow <span className="text-blue-500">Plumbing</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Certified Master Plumbers providing 24/7 rapid emergency repairs, tankless water heater upgrades, and trenchless sewer clearing across the metropolitan area.
            </p>
            <div className="space-y-1.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Texas Master Plumber License #MPL-84920</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span>$2,000,000 Commercial General Liability Insured</span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Plumbing Services</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#services" className="hover:text-white transition">Emergency Leak Repair</a></li>
              <li><a href="#services" className="hover:text-white transition">Water Heater Replacement</a></li>
              <li><a href="#services" className="hover:text-white transition">Hydro-Jetting & Drain Clear</a></li>
              <li><a href="#services" className="hover:text-white transition">Sewer Camera Video Inspection</a></li>
              <li><a href="#services" className="hover:text-white transition">Whole-Home PEX Repiping</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Company & Trust</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#coverage" className="hover:text-white transition">Live Truck Coverage Map</a></li>
              <li><a href="#before-after" className="hover:text-white transition">Before & After Work Gallery</a></li>
              <li><a href="#reviews" className="hover:text-white transition">1,240+ Verified Reviews</a></li>
              <li><a href="#reviews" className="hover:text-white transition">100% Satisfaction Guarantee</a></li>
              <li>
                <button
                  onClick={onOpenQuote}
                  className="text-amber-400 hover:text-amber-300 font-bold transition cursor-pointer"
                >
                  Get 60-Sec Price Quote →
                </button>
              </li>
            </ul>
          </div>

          {/* Direct 24/7 Contact Card */}
          <div className="bg-slate-900 p-5 rounded-2xl border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
              <Clock className="w-4 h-4" /> 24/7 Live Dispatch
            </div>
            <a
              href="tel:5125553569"
              className="block text-lg font-black text-white hover:text-amber-300 transition"
            >
              (512) 555-FLOW
            </a>
            <div className="text-[11px] text-slate-400 space-y-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>Central Hub: 1400 S Congress Ave, Austin, TX</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                <span>dispatch@clearflow-example.local</span>
              </div>
            </div>
          </div>
        </div>

        {/* Fictional Disclaimer & Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            <p>
              © {new Date().getFullYear()} ClearFlow Plumbing Case Study. All rights reserved.
            </p>
            <p className="text-slate-400 mt-1">
              <strong>Notice:</strong> ClearFlow Plumbing is a fictional trade entity designed strictly as a portfolio case study demonstrating UX problem diagnosis, conversion rate optimization, and responsive web design.
            </p>
          </div>
          <div className="text-slate-400 text-right shrink-0">
            <span>Built with React, TypeScript & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
