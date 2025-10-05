import React, { useState, useEffect, useCallback } from 'react';
import { slideData, presentationMeta } from '../data/slideContent';
import NavBar from './ui/NavBar';
import SlideNavigation from './ui/SlideNavigation';
import NarrativeBanner from './ui/NarrativeBanner';

// Import all slide components
import CoverSlide from './slides/CoverSlide';
import ExecutiveSummarySlide from './slides/ExecutiveSummarySlide';
import OutcomesSlide from './slides/OutcomesSlide';
import ProposalSlide from './slides/ProposalSlide';
import ScopeExclusionsSlide from './slides/ScopeExclusionsSlide';
import PillarsSlide from './slides/PillarsSlide';
import UserExperienceSlide from './slides/UserExperienceSlide';
import RoadmapSlide from './slides/RoadmapSlide';
import GovernanceSlide from './slides/GovernanceSlide';
import CommercialSlide from './slides/CommercialSlide';
import VisionSlide from './slides/VisionSlide';
import NextStepsSlide from './slides/NextStepsSlide';

/**
 * Main Presentation Component
 * Premium interactive presentation with story-driven navigation
 */
const MaharatProposal = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPrintMode, setIsPrintMode] = useState(false);
  const [slideDirection, setSlideDirection] = useState('forward');

  // Navigation functions with smooth transitions
  const goToNext = useCallback(() => {
    setSlideDirection('forward');
    setCurrentSlide((prev) =>
      prev < slideData.length - 1 ? prev + 1 : prev
    );
  }, []);

  const goToPrevious = useCallback(() => {
    setSlideDirection('backward');
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const goToFirst = useCallback(() => {
    setSlideDirection('backward');
    setCurrentSlide(0);
  }, []);

  const goToLast = useCallback(() => {
    setSlideDirection('forward');
    setCurrentSlide(slideData.length - 1);
  }, []);

  const goToSlide = useCallback((index) => {
    setSlideDirection(index > currentSlide ? 'forward' : 'backward');
    setCurrentSlide(index);
  }, [currentSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
          e.preventDefault();
          goToNext();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          goToPrevious();
          break;
        case 'Home':
          e.preventDefault();
          goToFirst();
          break;
        case 'End':
          e.preventDefault();
          goToLast();
          break;
        case 'p':
        case 'P':
          e.preventDefault();
          window.print();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrevious, goToFirst, goToLast]);

  // Detect print mode
  useEffect(() => {
    const handleBeforePrint = () => setIsPrintMode(true);
    const handleAfterPrint = () => setIsPrintMode(false);

    window.addEventListener('beforeprint', handleBeforePrint);
    window.addEventListener('afterprint', handleAfterPrint);

    return () => {
      window.removeEventListener('beforeprint', handleBeforePrint);
      window.removeEventListener('afterprint', handleAfterPrint);
    };
  }, []);

  // Render appropriate slide component based on type
  const renderSlide = (slide) => {
    const slideComponents = {
      'cover': CoverSlide,
      'executive-summary': ExecutiveSummarySlide,
      'outcomes': OutcomesSlide,
      'proposal': ProposalSlide,
      'scope-exclusions': ScopeExclusionsSlide,
      'pillars': PillarsSlide,
      'user-experience': UserExperienceSlide,
      'roadmap': RoadmapSlide,
      'governance': GovernanceSlide,
      'commercial': CommercialSlide,
      'vision': VisionSlide,
      'next-steps': NextStepsSlide,
    };

    const SlideComponent = slideComponents[slide.type];
    return SlideComponent ? <SlideComponent slide={slide} /> : null;
  };

  return (
    <div className="relative w-full min-h-screen bg-white">
      {/* Print mode: Show all slides */}
      {isPrintMode ? (
        <div className="print-slides">
          {slideData.map((slide) => (
            <div
              key={slide.id}
              className="slide-page w-full h-screen break-after-page"
            >
              {renderSlide(slide)}
            </div>
          ))}
        </div>
      ) : (
        <>
          {/* Presentation mode: Show current slide with smooth transitions */}
          <div className="w-full h-screen overflow-hidden relative">
            <div
              className={`transition-all duration-500 ease-out ${
                slideDirection === 'forward'
                  ? 'animate-slide-in-right'
                  : 'animate-slide-in-left'
              }`}
              key={currentSlide}
            >
              {renderSlide(slideData[currentSlide])}
            </div>
          </div>

          {/* Top Right Menu - Interactive navigation */}
          <SlideNavigation
            currentSlide={currentSlide}
            totalSlides={slideData.length}
            onNavigate={goToSlide}
            slideData={slideData}
          />

          {/* Narrative Banner - Contextual quotes */}
          <NarrativeBanner narrative={slideData[currentSlide].narrative} />

          {/* Enhanced Navigation - Progress, controls, and slide counter */}
          <NavBar
            currentSlide={currentSlide}
            totalSlides={slideData.length}
            onPrevious={goToPrevious}
            onNext={goToNext}
            isPrintMode={isPrintMode}
          />
        </>
      )}

      {/* Print styles */}
      <style jsx global>{`
        @media print {
          @page {
            size: landscape;
            margin: 0;
          }

          body {
            margin: 0;
            padding: 0;
          }

          .slide-page {
            page-break-after: always;
          }

          .slide-page:last-child {
            page-break-after: auto;
          }
        }
      `}</style>
    </div>
  );
};

export default MaharatProposal;
