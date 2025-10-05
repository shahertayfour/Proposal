import React from 'react';

/**
 * Premium Progress Indicator Component
 * Shows current position in presentation journey
 */
const ProgressIndicator = ({ currentSlide, totalSlides }) => {
  const percentage = (currentSlide / (totalSlides - 1)) * 100;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 pointer-events-none">
      {/* Progress Bar */}
      <div className="h-1 w-full bg-slate-200">
        <div
          className="h-full bg-gradient-to-r from-primary-blue1 via-accent-purple1 to-primary-blue2 transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-6 left-8 pointer-events-auto">
        <div className="bg-white rounded-full px-6 py-3 shadow-lg border-2 border-slate-100 hover:border-primary-blue1 transition-all duration-300">
          <span className="text-sm font-bold text-slate-700">
            {currentSlide + 1}
            <span className="text-slate-400 mx-1">/</span>
            {totalSlides}
          </span>
        </div>
      </div>

      {/* Journey Indicator - Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-auto">
        <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-full px-4 py-3 shadow-lg border border-slate-200">
          {Array.from({ length: totalSlides }).map((_, index) => {
            const isActive = index === currentSlide;
            const isPast = index < currentSlide;

            return (
              <div
                key={index}
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? 'w-8 h-2 bg-gradient-to-r from-primary-blue1 to-primary-blue2'
                    : isPast
                    ? 'w-2 h-2 bg-green-500'
                    : 'w-2 h-2 bg-slate-300'
                }`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicator;
