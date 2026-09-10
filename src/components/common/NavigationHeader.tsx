import React from 'react';
import { ViewMode, DeviceViewport } from '../../types';
import { BookOpen, Sparkles, History, Columns, Monitor, Tablet, Smartphone, Droplet } from 'lucide-react';

interface NavigationHeaderProps {
  currentMode: ViewMode;
  onModeChange: (mode: ViewMode) => void;
  viewport: DeviceViewport;
  onViewportChange: (viewport: DeviceViewport) => void;
  onOpenQuoteModal: () => void;
}

export const NavigationHeader: React.FC<NavigationHeaderProps> = ({
  currentMode,
  onModeChange,
  viewport,
  onViewportChange,
  onOpenQuoteModal,
}) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3">
          {/* Logo / Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 to-blue-700 flex items-center justify-center text-white shadow-sm">
              <Droplet className="w-5 h-5 fill-white/20" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-slate-900 tracking-tight text-base sm:text-lg">ClearFlow</span>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded">Redesign UX</span>
              </div>
              <p className="text-xs text-slate-500 hidden sm:block">Plumbing Website UX Case Study & Functional Redesign</p>
            </div>
          </div>

          {/* Mode Navigation Tabs */}
          <nav className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium">
            <button
              onClick={() => onModeChange('case-study')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                currentMode === 'case-study'
                  ? 'bg-white text-blue-700 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span className="hidden md:inline">UX</span> Case Study
            </button>

            <button
              onClick={() => onModeChange('redesign')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                currentMode === 'redesign'
                  ? 'bg-blue-600 text-white shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span className="hidden sm:inline">Modern</span> Redesign
            </button>

            <button
              onClick={() => onModeChange('before')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                currentMode === 'before'
                  ? 'bg-amber-100 text-amber-900 shadow-xs font-semibold border border-amber-300'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              <History className="w-4 h-4" />
              <span className="hidden sm:inline">Outdated</span> "Before"
            </button>

            <button
              onClick={() => onModeChange('comparison')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                currentMode === 'comparison'
                  ? 'bg-slate-900 text-white shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              <Columns className="w-4 h-4" />
              <span className="hidden lg:inline">Side-by-Side</span> Compare
            </button>
          </nav>

          {/* Device Viewport Selector (for live sites) & Quick CTA */}
          <div className="flex items-center gap-2">
            {(currentMode === 'redesign' || currentMode === 'before') && (
              <div className="hidden sm:flex items-center bg-slate-100 p-1 rounded-lg border border-slate-200 text-slate-600">
                <button
                  onClick={() => onViewportChange('desktop')}
                  title="Desktop View (100% width)"
                  className={`p-1.5 rounded ${viewport === 'desktop' ? 'bg-white text-blue-600 shadow-xs' : 'hover:text-slate-900'}`}
                >
                  <Monitor className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onViewportChange('tablet')}
                  title="Tablet View (768px width)"
                  className={`p-1.5 rounded ${viewport === 'tablet' ? 'bg-white text-blue-600 shadow-xs' : 'hover:text-slate-900'}`}
                >
                  <Tablet className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onViewportChange('mobile')}
                  title="Mobile View (390px width)"
                  className={`p-1.5 rounded ${viewport === 'mobile' ? 'bg-white text-blue-600 shadow-xs' : 'hover:text-slate-900'}`}
                >
                  <Smartphone className="w-4 h-4" />
                </button>
              </div>
            )}

            {currentMode === 'case-study' ? (
              <button
                onClick={() => onModeChange('redesign')}
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white px-3.5 py-2 rounded-lg transition shadow-xs"
              >
                <Sparkles className="w-3.5 h-3.5" />
                View Live Redesign
              </button>
            ) : (
              <button
                onClick={onOpenQuoteModal}
                className="text-xs font-semibold bg-amber-500 hover:bg-amber-600 text-slate-950 px-3.5 py-2 rounded-lg transition shadow-xs flex items-center gap-1"
              >
                <span>Instant Quote</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
