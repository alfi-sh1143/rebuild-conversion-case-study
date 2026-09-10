/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ViewMode, DeviceViewport } from './types';
import { FictionalDisclaimer } from './components/common/FictionalDisclaimer';
import { NavigationHeader } from './components/common/NavigationHeader';
import { CaseStudyPage } from './components/case-study/CaseStudyPage';
import { ModernHeader } from './components/redesign/ModernHeader';
import { ModernHero } from './components/redesign/ModernHero';
import { ServiceCards } from './components/redesign/ServiceCards';
import { BeforeAfterJobSlider } from './components/redesign/BeforeAfterJobSlider';
import { CoverageAreaChecker } from './components/redesign/CoverageAreaChecker';
import { TrustAndReviews } from './components/redesign/TrustAndReviews';
import { ModernFooter } from './components/redesign/ModernFooter';
import { StickyMobileBar } from './components/redesign/StickyMobileBar';
import { InstantQuoteModal } from './components/redesign/InstantQuoteModal';
import { LegacyWebsite } from './components/before-site/LegacyWebsite';
import { ComparisonView } from './components/comparison/ComparisonView';

export default function App() {
  const [currentMode, setCurrentMode] = useState<ViewMode>('case-study');
  const [viewport, setViewport] = useState<DeviceViewport>('desktop');
  const [isQuoteOpen, setIsQuoteOpen] = useState<boolean>(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string>('Emergency Leak & Burst Pipe Repair');
  const [highlightedIssueId, setHighlightedIssueId] = useState<string | undefined>(undefined);

  const handleOpenQuoteWithService = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForQuote(serviceName);
    }
    setIsQuoteOpen(true);
  };

  const handleInspectIssue = (issueId: string) => {
    setHighlightedIssueId(issueId);
    setCurrentMode('before');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderViewportWrappedContent = (content: React.ReactNode) => {
    if (viewport === 'desktop') {
      return <div className="w-full">{content}</div>;
    }

    const widthClass = viewport === 'mobile' ? 'max-w-[390px]' : 'max-w-[768px]';

    return (
      <div className="bg-slate-900 py-10 px-4 min-h-[calc(100vh-64px)] flex flex-col items-center">
        {/* Device frame header indicator */}
        <div className="text-slate-400 text-xs mb-3 font-mono flex items-center gap-2">
          <span>Viewport Simulator:</span>
          <span className="text-amber-400 font-bold">
            {viewport === 'mobile' ? '390px (Mobile Touch Viewport)' : '768px (Tablet Viewport)'}
          </span>
          <button
            onClick={() => setViewport('desktop')}
            className="text-blue-400 underline hover:text-blue-300 ml-2"
          >
            Reset to 100% Desktop
          </button>
        </div>

        {/* Device Frame */}
        <div
          className={`w-full ${widthClass} bg-white shadow-2xl rounded-3xl overflow-hidden border-8 border-slate-800 relative transition-all duration-300`}
        >
          {content}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Disclaimer Banner stating ClearFlow is fictional */}
      <FictionalDisclaimer />

      {/* Master Navigation Switcher (Case Study vs Redesign vs Before vs Comparison) */}
      <NavigationHeader
        currentMode={currentMode}
        onModeChange={(mode) => {
          setCurrentMode(mode);
          setHighlightedIssueId(undefined);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        viewport={viewport}
        onViewportChange={setViewport}
        onOpenQuoteModal={() => handleOpenQuoteWithService()}
      />

      {/* Active View Mode Content */}
      <main className="flex-1">
        {currentMode === 'case-study' && (
          <CaseStudyPage
            onViewLive={() => {
              setCurrentMode('redesign');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onViewBefore={() => {
              setCurrentMode('before');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onInspectIssue={handleInspectIssue}
          />
        )}

        {currentMode === 'redesign' &&
          renderViewportWrappedContent(
            <div className="relative">
              <ModernHeader onOpenQuote={() => handleOpenQuoteWithService()} />
              <ModernHero onOpenQuote={() => handleOpenQuoteWithService()} />
              <ServiceCards onSelectService={(s) => handleOpenQuoteWithService(s)} />
              <BeforeAfterJobSlider />
              <CoverageAreaChecker />
              <TrustAndReviews />
              <ModernFooter onOpenQuote={() => handleOpenQuoteWithService()} />
              <StickyMobileBar onOpenQuote={() => handleOpenQuoteWithService()} />
            </div>
          )}

        {currentMode === 'before' &&
          renderViewportWrappedContent(
            <LegacyWebsite
              onSwitchToRedesign={() => {
                setCurrentMode('redesign');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              highlightedIssueId={highlightedIssueId}
            />
          )}

        {currentMode === 'comparison' && (
          <ComparisonView
            onOpenLiveRedesign={() => {
              setCurrentMode('redesign');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenLegacySite={() => {
              setCurrentMode('before');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}
      </main>

      {/* Interactive Instant Quote / Booking Modal */}
      <InstantQuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        preselectedService={selectedServiceForQuote}
      />
    </div>
  );
}
