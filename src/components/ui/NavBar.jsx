import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Navigation Bar Component
 * Includes slide counter, navigation buttons, and progress indicator
 */
const NavBar = ({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
  isPrintMode = false
}) => {
  if (isPrintMode) return null;

  const progress = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-primary-blue1 to-accent-purple1 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Navigation controls */}
      <div className="fixed bottom-8 left-0 right-0 z-40 pointer-events-none">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          {/* Previous button */}
          <button
            onClick={onPrevious}
            disabled={currentSlide === 0}
            className={`pointer-events-auto p-3 rounded-full bg-white shadow-lg transition-all duration-300 ${
              currentSlide === 0
                ? 'opacity-30 cursor-not-allowed'
                : 'hover:scale-110 hover:shadow-xl'
            }`}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-primary-blue1" />
          </button>

          {/* Slide counter */}
          <div className="pointer-events-auto px-6 py-2 rounded-full bg-white shadow-lg">
            <span className="text-sm font-medium text-neutral-slate">
              {currentSlide + 1} / {totalSlides}
            </span>
          </div>

          {/* Next button */}
          <button
            onClick={onNext}
            disabled={currentSlide === totalSlides - 1}
            className={`pointer-events-auto p-3 rounded-full bg-white shadow-lg transition-all duration-300 ${
              currentSlide === totalSlides - 1
                ? 'opacity-30 cursor-not-allowed'
                : 'hover:scale-110 hover:shadow-xl'
            }`}
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-primary-blue1" />
          </button>
        </div>
      </div>

      {/* Keyboard shortcuts hint */}
      <div className="fixed bottom-8 right-8 z-30 opacity-30 hover:opacity-100 transition-opacity pointer-events-none">
        <div className="text-xs text-neutral-slateLight">
          ← → to navigate
        </div>
      </div>
    </>
  );
};

export default NavBar;
