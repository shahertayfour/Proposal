import React from 'react';
import { ChevronLeft, ChevronRight, Keyboard } from 'lucide-react';

/**
 * Enhanced Navigation Bar Component
 * Premium bottom navigation with progress and controls
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
      {/* Top Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-primary-blue1 via-accent-purple1 to-primary-blue2 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Enhanced Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-40 pointer-events-none">
        {/* Background bar for better visibility */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/95 to-transparent backdrop-blur-sm" />

        <div className="relative max-w-7xl mx-auto px-8 pb-6 flex justify-between items-center">
          {/* Previous button - Enhanced */}
          <button
            onClick={onPrevious}
            disabled={currentSlide === 0}
            className={`pointer-events-auto group p-4 rounded-2xl bg-white border-2 shadow-lg transition-all duration-300 ${
              currentSlide === 0
                ? 'opacity-30 cursor-not-allowed border-slate-200'
                : 'hover:scale-110 hover:shadow-2xl border-slate-200 hover:border-primary-blue1'
            }`}
            aria-label="Previous slide"
          >
            <ChevronLeft className={`w-6 h-6 transition-colors ${
              currentSlide === 0 ? 'text-slate-400' : 'text-primary-blue1 group-hover:text-primary-blue2'
            }`} strokeWidth={3} />
          </button>

          {/* Center - Slide counter with dots */}
          <div className="pointer-events-auto flex items-center gap-4 px-8 py-4 rounded-2xl bg-white border-2 border-slate-200 shadow-xl">
            {/* Slide counter */}
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-primary-blue1">
                {currentSlide + 1}
              </span>
              <span className="text-slate-400 text-sm">/</span>
              <span className="text-lg font-medium text-slate-500">
                {totalSlides}
              </span>
            </div>

            {/* Separator */}
            <div className="w-px h-6 bg-slate-200" />

            {/* Progress dots */}
            <div className="flex items-center gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => {
                const isActive = index === currentSlide;
                const isPast = index < currentSlide;

                return (
                  <div
                    key={index}
                    className={`transition-all duration-300 rounded-full ${
                      isActive
                        ? 'w-8 h-2.5 bg-gradient-to-r from-primary-blue1 to-primary-blue2 shadow-md'
                        : isPast
                        ? 'w-2 h-2 bg-green-500 shadow-sm'
                        : 'w-2 h-2 bg-slate-300'
                    }`}
                  />
                );
              })}
            </div>
          </div>

          {/* Next button - Enhanced */}
          <button
            onClick={onNext}
            disabled={currentSlide === totalSlides - 1}
            className={`pointer-events-auto group p-4 rounded-2xl bg-white border-2 shadow-lg transition-all duration-300 ${
              currentSlide === totalSlides - 1
                ? 'opacity-30 cursor-not-allowed border-slate-200'
                : 'hover:scale-110 hover:shadow-2xl border-slate-200 hover:border-primary-blue1'
            }`}
            aria-label="Next slide"
          >
            <ChevronRight className={`w-6 h-6 transition-colors ${
              currentSlide === totalSlides - 1 ? 'text-slate-400' : 'text-primary-blue1 group-hover:text-primary-blue2'
            }`} strokeWidth={3} />
          </button>
        </div>

        {/* Keyboard shortcuts hint - Enhanced */}
        <div className="absolute bottom-6 right-8 pointer-events-auto">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 shadow-md opacity-40 hover:opacity-100 transition-all duration-300">
            <Keyboard className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-xs font-medium text-slate-600">
              ← → to navigate
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
