import React from 'react';
import { Zap, DollarSign } from 'lucide-react';

/**
 * Plan & Action Slide - Unified design with consistent colors
 */
const ADGMPlan = ({ slide }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Decorative accent */}
      <div className="absolute bottom-0 right-0 w-1/3 h-2/3 opacity-30">
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0EA5E9] rounded-full blur-3xl"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-20 max-w-7xl mx-auto py-8 sm:py-10 md:py-12 pb-16 sm:pb-20 md:pb-28 lg:pb-32">
        {/* Header with icon */}
        <div className="mb-4 sm:mb-5 md:mb-6">
          <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <Zap className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#0EA5E9]" strokeWidth={2} />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#1B365D] leading-tight tracking-tight">
              {slide.title}
            </h2>
          </div>
          <div className="w-20 sm:w-24 md:w-28 h-1.5 sm:h-2 bg-gradient-to-r from-[#0EA5E9] to-[#00B7FF] rounded-full ml-11 sm:ml-14 md:ml-16 mb-3 sm:mb-4"></div>
          <p className="text-sm sm:text-base md:text-lg text-[#4B5563] font-light max-w-4xl ml-11 sm:ml-14 md:ml-16 leading-relaxed">
            {slide.subline}
          </p>
        </div>

        {/* Bullets */}
        <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-5 md:mb-6 max-w-6xl">
          {slide.bullets.map((bullet, index) => (
            <div key={index} className="flex items-start gap-2 sm:gap-3">
              <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-[#0EA5E9] to-[#00B7FF] flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                <span className="text-white font-bold text-xs sm:text-sm">{index + 1}</span>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-[#4B5563] leading-relaxed font-light">
                {bullet}
              </p>
            </div>
          ))}
        </div>

        {/* Cost highlight */}
        <div className="mb-4 sm:mb-5 md:mb-6 max-w-4xl">
          <div className="bg-gradient-to-r from-[#1B365D] via-[#2D4A7C] to-[#1B365D] p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-lg">
            <div className="flex items-center gap-3 sm:gap-4">
              <DollarSign className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 text-white" strokeWidth={2.5} />
              <p className="text-base sm:text-lg md:text-xl font-bold text-white">
                {slide.cost}
              </p>
            </div>
          </div>
        </div>

        {/* Deliverables chips */}
        <div>
          <p className="text-xs sm:text-sm font-semibold text-[#1B365D] mb-2 sm:mb-3 uppercase tracking-wider">
            Deliverables
          </p>
          <div className="flex flex-wrap gap-2 max-w-6xl">
            {slide.deliverables.map((deliverable, index) => (
              <div
                key={index}
                className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-white rounded-full border-2 border-[#0EA5E9]/20 hover:border-[#0EA5E9] hover:bg-[#0EA5E9]/5 transition-all duration-300 shadow-sm"
              >
                <span className="text-xs sm:text-sm font-semibold text-[#1B365D]">
                  {deliverable}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Slide number */}
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-8 md:bottom-8 md:right-12 lg:bottom-12 lg:right-16 xl:bottom-16 xl:right-20">
          <span className="text-[#4B5563]/40 text-xs sm:text-sm font-light">04 / 06</span>
        </div>
      </div>
    </div>
  );
};

export default ADGMPlan;
