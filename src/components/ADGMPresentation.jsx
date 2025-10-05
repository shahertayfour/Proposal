import React, { useState, useEffect, useCallback } from 'react';
import { slideData, presentationMeta } from '../data/adgmContent';

// Import slide components
import ADGMCover from './slides/ADGMCover';
import ADGMAbout from './slides/ADGMAbout';
import ADGMChallenge from './slides/ADGMChallenge';
import ADGMPlan from './slides/ADGMPlan';
import ADGMPrograms from './slides/ADGMPrograms';
import ADGMNextSteps from './slides/ADGMNextSteps';
import PasswordProtection from './PasswordProtection';

/**
 * ADGM Academy × Maharat Presentation
 * Stage 1: School of Coders Lab Enablement
 */
const ADGMPresentation = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPrintMode, setIsPrintMode] = useState(false);
  const [slideDirection, setSlideDirection] = useState('forward');

  // Navigation functions
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
          goToSlide(0);
          break;
        case 'End':
          e.preventDefault();
          goToSlide(slideData.length - 1);
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
  }, [goToNext, goToPrevious, goToSlide]);

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

  // Render appropriate slide component
  const renderSlide = (slide) => {
    const slideComponents = {
      'cover': ADGMCover,
      'about': ADGMAbout,
      'challenge': ADGMChallenge,
      'plan': ADGMPlan,
      'programs': ADGMPrograms,
      'nextsteps': ADGMNextSteps,
    };

    const SlideComponent = slideComponents[slide.type];
    return SlideComponent ? <SlideComponent slide={slide} /> : null;
  };

  // Show password protection if not authenticated
  if (!isAuthenticated) {
    return <PasswordProtection onAuthenticate={setIsAuthenticated} />;
  }

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
          {/* Presentation mode with smooth transitions */}
          <div className="w-full h-screen overflow-hidden relative">
            <div
              className={`transition-all duration-500 ease-out ${
                slideDirection === 'forward'
                  ? 'animate-fade-in'
                  : 'animate-fade-in'
              }`}
              key={currentSlide}
            >
              {renderSlide(slideData[currentSlide])}
            </div>
          </div>

          {/* Side navigation - Left */}
          <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4">
            <button
              onClick={goToPrevious}
              disabled={currentSlide === 0}
              className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200 flex items-center justify-center text-[#1B365D] hover:bg-[#0EA5E9] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>

          {/* Side navigation - Right */}
          <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4">
            <button
              onClick={goToNext}
              disabled={currentSlide === slideData.length - 1}
              className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200 flex items-center justify-center text-[#1B365D] hover:bg-[#0EA5E9] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Bottom slide indicator */}
          <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
            <div className="bg-white/90 backdrop-blur-sm shadow-lg rounded-full px-6 py-3 flex items-center gap-4 border border-gray-200">
              {/* Slide dots */}
              <div className="flex items-center gap-2">
                {slideData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentSlide
                        ? 'w-8 h-3 bg-[#009A44]'
                        : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Slide counter */}
              <div className="text-[#1B365D] font-semibold text-sm">
                {currentSlide + 1} / {slideData.length}
              </div>
            </div>
          </div>

          {/* Keyboard shortcuts hint */}
          <div className="fixed top-6 right-6 z-40">
            <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md border border-gray-200">
              <p className="text-xs text-[#4B5563] font-medium">
                ← → Navigate • P Print
              </p>
            </div>
          </div>
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

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ADGMPresentation;
