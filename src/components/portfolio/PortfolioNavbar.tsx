import React, { useState } from 'react';
import { PORTFOLIO_CONFIG } from '../../config/portfolioConfig';
import { Menu, X, ArrowUpRight, Sparkles, Mail, Eye } from 'lucide-react';

interface PortfolioNavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
  onOpenClearFlowLive: () => void;
}

export const PortfolioNavbar: React.FC<PortfolioNavbarProps> = ({
  onNavigate,
  activeSection,
  onOpenClearFlowLive,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const navItems = [
    { id: 'projects', label: 'Selected Work' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/85 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand identity */}
        <button
          onClick={() => handleNavClick('hero')}
          className="text-left group cursor-pointer focus-visible:outline-2 focus-visible:outline-blue-600 rounded-lg p-1"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-xs font-mono tracking-tight group-hover:bg-blue-600 transition">
              AS
            </div>
            <div>
              <span className="font-bold text-slate-900 tracking-tight text-sm sm:text-base block group-hover:text-blue-600 transition">
                {PORTFOLIO_CONFIG.name}
              </span>
              <span className="text-[11px] text-slate-500 font-medium block">
                UI/UX Designer & Front-End Dev
              </span>
            </div>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-full border border-slate-200/80 text-xs font-medium">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-1.5 rounded-full transition cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-600 ${
                  isActive
                    ? 'bg-white text-slate-950 font-bold shadow-xs'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-white/50'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action: Availability pill & Contact CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-200/80 rounded-full text-[11px] text-emerald-800 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Available for Roles</span>
          </div>

          <button
            onClick={() => handleNavClick('contact')}
            className="bg-slate-900 hover:bg-blue-600 text-white font-semibold text-xs px-4 py-2 rounded-xl transition flex items-center gap-1.5 shadow-xs cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-600"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </button>
        </div>

        {/* Mobile menu toggle button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white/95 backdrop-blur-md px-4 py-5 space-y-3">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full text-xs text-emerald-800 font-medium w-fit mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Available for UI/UX & Dev Roles</span>
          </div>

          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-left px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-slate-100 transition"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="pt-2 border-t border-slate-100 flex gap-2">
            <button
              onClick={() => handleNavClick('contact')}
              className="flex-1 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold py-2.5 rounded-xl text-center"
            >
              Contact Me
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenClearFlowLive();
              }}
              className="flex-1 bg-blue-50 text-blue-700 border border-blue-200 text-xs font-bold py-2.5 rounded-xl text-center flex items-center justify-center gap-1"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Live App</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
