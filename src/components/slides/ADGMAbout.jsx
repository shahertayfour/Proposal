import React from 'react';
import { CheckCircle2 } from 'lucide-react';

/**
 * About Slide - Unified design with brand colors
 */
const ADGMAbout = ({ slide }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-30">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#0EA5E9] rounded-full blur-3xl"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-20 max-w-7xl mx-auto py-8 sm:py-12 md:py-16 lg:py-20">
        {/* Header */}
        <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[#1B365D] mb-3 sm:mb-4 md:mb-5 lg:mb-6 tracking-tight">
            {slide.title}
          </h2>
          <div className="w-20 sm:w-24 md:w-28 lg:w-32 h-1.5 sm:h-2 bg-gradient-to-r from-[#0EA5E9] to-[#00B7FF] rounded-full mb-4 sm:mb-5 md:mb-6 lg:mb-8"></div>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#4B5563] font-light max-w-4xl leading-relaxed">
            {slide.subline}
          </p>
        </div>

        {/* Bullets */}
        <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 mb-8 sm:mb-10 md:mb-12 lg:mb-16 max-w-5xl">
          {slide.bullets.map((bullet, index) => (
            <div key={index} className="flex items-start gap-3 sm:gap-4 md:gap-5">
              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-[#0EA5E9] flex-shrink-0 mt-0.5 sm:mt-1" strokeWidth={2.5} />
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[#4B5563] leading-relaxed font-light">
                {bullet}
              </p>
            </div>
          ))}
        </div>

        {/* Chips row */}
        <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
          {slide.chips.map((chip, index) => (
            <div
              key={index}
              className="inline-block px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-3.5 lg:px-7 lg:py-4 bg-white rounded-full border-2 border-[#0EA5E9]/20 hover:border-[#0EA5E9] hover:shadow-lg transition-all duration-300 shadow-sm"
            >
              <span className="text-sm sm:text-base md:text-lg font-semibold text-[#1B365D]">
                {chip}
              </span>
            </div>
          ))}
        </div>

        {/* Slide number */}
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-8 md:bottom-8 md:right-12 lg:bottom-12 lg:right-16 xl:bottom-16 xl:right-20">
          <span className="text-[#4B5563]/40 text-xs sm:text-sm font-light">02 / 06</span>
        </div>
      </div>
    </div>
  );
};

export default ADGMAbout;
