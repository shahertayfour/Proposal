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
      <div className="relative z-10 h-full flex flex-col justify-center px-20 max-w-7xl mx-auto py-20">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-7xl font-black text-[#1B365D] mb-6 tracking-tight">
            {slide.title}
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-[#0EA5E9] to-[#00B7FF] rounded-full mb-8"></div>
          <p className="text-2xl text-[#4B5563] font-light max-w-4xl leading-relaxed">
            {slide.subline}
          </p>
        </div>

        {/* Bullets */}
        <div className="space-y-6 mb-16 max-w-5xl">
          {slide.bullets.map((bullet, index) => (
            <div key={index} className="flex items-start gap-5">
              <CheckCircle2 className="w-8 h-8 text-[#0EA5E9] flex-shrink-0 mt-1" strokeWidth={2.5} />
              <p className="text-2xl text-[#4B5563] leading-relaxed font-light">
                {bullet}
              </p>
            </div>
          ))}
        </div>

        {/* Chips row */}
        <div className="flex flex-wrap gap-4">
          {slide.chips.map((chip, index) => (
            <div
              key={index}
              className="inline-block px-7 py-4 bg-white rounded-full border-2 border-[#0EA5E9]/20 hover:border-[#0EA5E9] hover:shadow-lg transition-all duration-300 shadow-sm"
            >
              <span className="text-lg font-semibold text-[#1B365D]">
                {chip}
              </span>
            </div>
          ))}
        </div>

        {/* Slide number */}
        <div className="absolute bottom-16 right-20">
          <span className="text-[#4B5563]/40 text-sm font-light">02 / 06</span>
        </div>
      </div>
    </div>
  );
};

export default ADGMAbout;
