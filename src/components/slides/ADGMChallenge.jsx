import React from 'react';
import { Target, Lightbulb } from 'lucide-react';

/**
 * Challenge Slide - Optimized for readability and information density
 */
const ADGMChallenge = ({ slide }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-[#1B365D] via-[#2D4A7C] to-[#1B365D]">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0EA5E9] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto py-8 sm:py-10 md:py-12">
        {/* Header with icon - Compact */}
        <div className="mb-6 sm:mb-7 md:mb-8 text-center">
          <div className="flex justify-center mb-3 sm:mb-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#0EA5E9] to-[#00B7FF] rounded-xl sm:rounded-2xl flex items-center justify-center shadow-2xl">
              <Target className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" strokeWidth={2} />
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2 sm:mb-3 tracking-tight px-2">
            {slide.title}
          </h2>
          <div className="flex justify-center mb-3 sm:mb-4">
            <div className="w-16 sm:w-18 md:w-20 h-1 sm:h-1.5 bg-gradient-to-r from-[#0EA5E9] to-[#00B7FF] rounded-full"></div>
          </div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 font-light max-w-4xl mx-auto leading-relaxed px-2">
            {slide.subline}
          </p>
        </div>

        {/* Challenge Points - Optimized spacing */}
        <div className="grid grid-cols-1 gap-3 sm:gap-4 mb-6 sm:mb-7 md:mb-8 max-w-6xl mx-auto">
          {slide.bullets.map((bullet, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg sm:rounded-xl px-4 py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-4 hover:bg-white/15 transition-all duration-300 shadow-lg"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gradient-to-br from-[#0EA5E9] to-[#00B7FF] rounded-full flex items-center justify-center shadow-md mt-0.5">
                  <span className="text-white font-bold text-xs sm:text-sm md:text-base">{index + 1}</span>
                </div>
                <p className="text-sm sm:text-base md:text-lg text-white/95 leading-relaxed font-light">
                  {bullet}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Solution Callout - Compact with icon */}
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-gradient-to-r from-[#0EA5E9] via-[#00B7FF] to-[#0EA5E9] rounded-xl sm:rounded-2xl px-6 py-5 sm:px-8 sm:py-6 md:px-10 md:py-7 shadow-2xl border-2 border-white/20">
            {/* Icon badge */}
            <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-[#0EA5E9]" strokeWidth={2.5} />
              </div>
            </div>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white leading-relaxed text-center pt-1 sm:pt-2">
              {slide.callout}
            </p>
          </div>
        </div>

        {/* Slide number */}
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-8 md:bottom-8 md:right-12 lg:right-16 xl:right-20">
          <span className="text-white/40 text-xs sm:text-sm font-light">03 / 06</span>
        </div>
      </div>
    </div>
  );
};

export default ADGMChallenge;
