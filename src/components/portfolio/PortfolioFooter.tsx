import React from 'react';
import { PORTFOLIO_CONFIG } from '../../config/portfolioConfig';
import { ArrowUp, Github, Sparkles, Heart } from 'lucide-react';

interface PortfolioFooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenClearFlowLive: () => void;
}

export const PortfolioFooter: React.FC<PortfolioFooterProps> = ({
  onNavigate,
  onOpenClearFlowLive,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800 text-xs">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-mono font-bold">
                AS
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                {PORTFOLIO_CONFIG.name}
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              UI/UX Designer & Front-End Developer crafting human-centered web experiences through systematic design tokens, heuristic analysis, and clean React code.
            </p>
            <div className="pt-2 text-slate-500 text-[11px]">
              Available for Junior/Associate Design & Development Roles worldwide.
            </div>
          </div>

          {/* Quick Sitemap */}
          <div className="space-y-2.5">
            <h4 className="font-mono text-[11px] uppercase tracking-wider text-slate-400 font-bold">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('projects')}
                  className="hover:text-white transition cursor-pointer"
                >
                  Selected Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition cursor-pointer"
                >
                  About My Background
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('skills')}
                  className="hover:text-white transition cursor-pointer"
                >
                  Skills & Tools
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition cursor-pointer"
                >
                  Contact & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Featured Case Studies */}
          <div className="space-y-2.5">
            <h4 className="font-mono text-[11px] uppercase tracking-wider text-slate-400 font-bold">
              Case Studies
            </h4>
            <ul className="space-y-1.5 text-slate-400">
              <li>
                <button
                  onClick={onOpenClearFlowLive}
                  className="hover:text-cyan-400 transition cursor-pointer flex items-center gap-1"
                >
                  <span>ClearFlow Plumbing App</span>
                  <Sparkles className="w-3 h-3 text-amber-400" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('projects')}
                  className="hover:text-white transition cursor-pointer"
                >
                  Apex Roofing Estimator
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('projects')}
                  className="hover:text-white transition cursor-pointer"
                >
                  FlowDesk AI Workspace
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('projects')}
                  className="hover:text-white transition cursor-pointer"
                >
                  NovaCare Patient Portal
                </button>
              </li>
            </ul>
          </div>

          {/* Connect & Top */}
          <div className="space-y-3 flex flex-col justify-between">
            <div>
              <h4 className="font-mono text-[11px] uppercase tracking-wider text-slate-400 font-bold mb-2">
                Connect
              </h4>
              <div className="space-y-1.5 text-slate-400">
                <a
                  href={PORTFOLIO_CONFIG.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition block"
                >
                  GitHub
                </a>
                <a
                  href={PORTFOLIO_CONFIG.contact.figma}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition block"
                >
                  Figma
                </a>
                <a
                  href={PORTFOLIO_CONFIG.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition block"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white text-xs transition cursor-pointer pt-2"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>
            © {new Date().getFullYear()} {PORTFOLIO_CONFIG.name}. Built with React, TypeScript & Tailwind CSS.
          </p>
          <p className="text-slate-600 text-center sm:text-right">
            Self-initiated concept projects are designed for UI/UX demonstration and evaluation purposes.
          </p>
        </div>
      </div>
    </footer>
  );
};
