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
      <div className="relative z-10 h-full flex flex-col justify-center px-16 max-w-7xl mx-auto py-12">
        {/* Header with icon - Compact */}
        <div className="mb-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[#0EA5E9] to-[#00B7FF] rounded-2xl flex items-center justify-center shadow-2xl">
              <Target className="w-8 h-8 text-white" strokeWidth={2} />
            </div>
          </div>
          <h2 className="text-5xl font-black text-white mb-3 tracking-tight">
            {slide.title}
          </h2>
          <div className="flex justify-center mb-4">
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#0EA5E9] to-[#00B7FF] rounded-full"></div>
          </div>
          <p className="text-xl text-white/90 font-light max-w-4xl mx-auto leading-relaxed">
            {slide.subline}
          </p>
        </div>

        {/* Challenge Points - Optimized spacing */}
        <div className="grid grid-cols-1 gap-4 mb-8 max-w-6xl mx-auto">
          {slide.bullets.map((bullet, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-8 py-4 hover:bg-white/15 transition-all duration-300 shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#0EA5E9] to-[#00B7FF] rounded-full flex items-center justify-center shadow-md mt-0.5">
                  <span className="text-white font-bold text-base">{index + 1}</span>
                </div>
                <p className="text-lg text-white/95 leading-relaxed font-light">
                  {bullet}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Solution Callout - Compact with icon */}
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-gradient-to-r from-[#0EA5E9] via-[#00B7FF] to-[#0EA5E9] rounded-2xl px-10 py-7 shadow-2xl border-2 border-white/20">
            {/* Icon badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Lightbulb className="w-5 h-5 text-[#0EA5E9]" strokeWidth={2.5} />
              </div>
            </div>

            <p className="text-xl font-bold text-white leading-relaxed text-center pt-2">
              {slide.callout}
            </p>
          </div>
        </div>

        {/* Slide number */}
        <div className="absolute bottom-8 right-20">
          <span className="text-white/40 text-sm font-light">03 / 06</span>
        </div>
      </div>
    </div>
  );
};

export default ADGMChallenge;
