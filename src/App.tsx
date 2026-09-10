/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ViewMode, DeviceViewport } from './types';
import { PORTFOLIO_CONFIG, ProjectItem } from './config/portfolioConfig';

// Portfolio Components
import { PortfolioNavbar } from './components/portfolio/PortfolioNavbar';
import { PortfolioHero } from './components/portfolio/PortfolioHero';
import { ProjectsSection } from './components/portfolio/ProjectsSection';
import { AboutSection } from './components/portfolio/AboutSection';
import { SkillsSection } from './components/portfolio/SkillsSection';
import { ContactSection } from './components/portfolio/ContactSection';
import { PortfolioFooter } from './components/portfolio/PortfolioFooter';
import { CaseStudyModal } from './components/portfolio/CaseStudyModal';
import { InteractivePrototypeModal } from './components/portfolio/InteractivePrototypeModal';

// ClearFlow Plumbing Project Components (Live Case Study)
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

import { ArrowLeft, Sparkles, ExternalLink } from 'lucide-react';

export default function App() {
  // Main view: 'portfolio' (Alfi Shahriyar's portfolio) or 'clearflow' (ClearFlow interactive app)
  const [appView, setAppView] = useState<'portfolio' | 'clearflow'>('portfolio');

  // Active section for portfolio navigation
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Selected project for modals
  const [selectedCaseStudyProject, setSelectedCaseStudyProject] = useState<ProjectItem | null>(null);
  const [selectedPrototypeProject, setSelectedPrototypeProject] = useState<ProjectItem | null>(null);

  // ClearFlow internal state
  const [clearFlowMode, setClearFlowMode] = useState<ViewMode>('redesign');
  const [clearFlowViewport, setClearFlowViewport] = useState<DeviceViewport>('desktop');
  const [isQuoteOpen, setIsQuoteOpen] = useState<boolean>(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string>('Emergency Leak & Burst Pipe Repair');
  const [highlightedIssueId, setHighlightedIssueId] = useState<string | undefined>(undefined);

  // Track scroll position for active section highlight
  useEffect(() => {
    if (appView !== 'portfolio') return;

    const handleScroll = () => {
      const sections = ['hero', 'projects', 'about', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [appView]);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenClearFlow = (initialMode: ViewMode = 'redesign') => {
    setClearFlowMode(initialMode);
    setAppView('clearflow');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuoteWithService = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForQuote(serviceName);
    }
    setIsQuoteOpen(true);
  };

  const handleInspectIssue = (issueId: string) => {
    setHighlightedIssueId(issueId);
    setClearFlowMode('before');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderClearFlowViewportWrappedContent = (content: React.ReactNode) => {
    if (clearFlowViewport === 'desktop') {
      return <div className="w-full">{content}</div>;
    }

    const widthClass = clearFlowViewport === 'mobile' ? 'max-w-[390px]' : 'max-w-[768px]';

    return (
      <div className="bg-slate-900 py-10 px-4 min-h-[calc(100vh-64px)] flex flex-col items-center">
        <div className="text-slate-400 text-xs mb-3 font-mono flex items-center gap-2">
          <span>Viewport Simulator:</span>
          <span className="text-amber-400 font-bold">
            {clearFlowViewport === 'mobile' ? '390px (Mobile Touch Viewport)' : '768px (Tablet Viewport)'}
          </span>
          <button
            onClick={() => setClearFlowViewport('desktop')}
            className="text-blue-400 underline hover:text-blue-300 ml-2 cursor-pointer"
          >
            Reset to 100% Desktop
          </button>
        </div>

        <div
          className={`w-full ${widthClass} bg-white shadow-2xl rounded-3xl overflow-hidden border-8 border-slate-800 relative transition-all duration-300`}
        >
          {content}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* 1. PORTFOLIO VIEW: Alfi Shahriyar */}
      {appView === 'portfolio' && (
        <div className="flex flex-col min-h-screen">
          {/* Main Portfolio Navigation */}
          <PortfolioNavbar
            onNavigate={handleNavigate}
            activeSection={activeSection}
            onOpenClearFlowLive={() => handleOpenClearFlow('redesign')}
          />

          <main className="flex-1">
            {/* Hero */}
            <PortfolioHero
              onViewWork={() => handleNavigate('projects')}
              onContactMe={() => handleNavigate('contact')}
            />

            {/* Selected Work (4 Projects) */}
            <ProjectsSection
              onOpenCaseStudy={(proj) => setSelectedCaseStudyProject(proj)}
              onOpenLivePreview={(proj) => {
                if (proj.id === 'clearflow-plumbing') {
                  handleOpenClearFlow('redesign');
                } else {
                  setSelectedPrototypeProject(proj);
                }
              }}
            />

            {/* About (Computer Science student to UI/UX & Web Designer) */}
            <AboutSection onContactClick={() => handleNavigate('contact')} />

            {/* Skills (Figma, Framer, UI/UX, Responsive, React, Next.js, etc.) */}
            <SkillsSection />

            {/* Accessible Contact Form */}
            <ContactSection />
          </main>

          {/* Portfolio Footer */}
          <PortfolioFooter
            onNavigate={handleNavigate}
            onOpenClearFlowLive={() => handleOpenClearFlow('redesign')}
          />

          {/* Modals */}
          <CaseStudyModal
            project={selectedCaseStudyProject}
            onClose={() => setSelectedCaseStudyProject(null)}
            onOpenLivePrototype={(proj) => {
              setSelectedCaseStudyProject(null);
              if (proj.id === 'clearflow-plumbing') {
                handleOpenClearFlow('redesign');
              } else {
                setSelectedPrototypeProject(proj);
              }
            }}
            onOpenFullClearFlowApp={() => handleOpenClearFlow('redesign')}
          />

          <InteractivePrototypeModal
            project={selectedPrototypeProject}
            onClose={() => setSelectedPrototypeProject(null)}
            onOpenClearFlowFullApp={() => handleOpenClearFlow('redesign')}
          />
        </div>
      )}

      {/* 2. CLEARFLOW PLUMBING LIVE INTERACTIVE REDESIGN VIEW */}
      {appView === 'clearflow' && (
        <div className="flex flex-col min-h-screen bg-slate-50">
          {/* Sticky Return-to-Portfolio Top Bar */}
          <div className="sticky top-0 z-50 bg-slate-950 text-white px-4 py-2.5 border-b border-slate-800 flex items-center justify-between text-xs">
            <button
              onClick={() => {
                setAppView('portfolio');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white px-3 py-1.5 rounded-lg border border-slate-700 flex items-center gap-1.5 transition cursor-pointer font-medium"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to {PORTFOLIO_CONFIG.name} Portfolio</span>
            </button>

            <div className="flex items-center gap-2">
              <span className="text-slate-400 hidden sm:inline">Project Showcase:</span>
              <span className="font-bold text-amber-400">ClearFlow Plumbing Live Redesign</span>
            </div>
          </div>

          {/* Fictional Disclaimer */}
          <FictionalDisclaimer />

          {/* ClearFlow Navigation Bar */}
          <NavigationHeader
            currentMode={clearFlowMode}
            onModeChange={(mode) => {
              setClearFlowMode(mode);
              setHighlightedIssueId(undefined);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            viewport={clearFlowViewport}
            onViewportChange={setClearFlowViewport}
            onOpenQuoteModal={() => handleOpenQuoteWithService()}
          />

          {/* ClearFlow Modes */}
          <main className="flex-1">
            {clearFlowMode === 'case-study' && (
              <CaseStudyPage
                onViewLive={() => {
                  setClearFlowMode('redesign');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onViewBefore={() => {
                  setClearFlowMode('before');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onInspectIssue={handleInspectIssue}
              />
            )}

            {clearFlowMode === 'redesign' &&
              renderClearFlowViewportWrappedContent(
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

            {clearFlowMode === 'before' &&
              renderClearFlowViewportWrappedContent(
                <LegacyWebsite
                  onSwitchToRedesign={() => {
                    setClearFlowMode('redesign');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  highlightedIssueId={highlightedIssueId}
                />
              )}

            {clearFlowMode === 'comparison' && (
              <ComparisonView
                onOpenLiveRedesign={() => {
                  setClearFlowMode('redesign');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onOpenLegacySite={() => {
                  setClearFlowMode('before');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            )}
          </main>

          {/* ClearFlow Instant Quote Modal */}
          <InstantQuoteModal
            isOpen={isQuoteOpen}
            onClose={() => setIsQuoteOpen(false)}
            preselectedService={selectedServiceForQuote}
          />
        </div>
      )}
    </div>
  );
}
