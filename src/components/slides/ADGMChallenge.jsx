import React from 'react';
import { AlertTriangle } from 'lucide-react';

/**
 * Challenge Slide - The issue with callout box
 */
const ADGMChallenge = ({ slide }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-white">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#F3F4F6] to-transparent"></div>

      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-20 max-w-7xl mx-auto py-20">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-7xl font-bold text-[#1B365D] mb-6">
            {slide.title}
          </h2>
          <div className="w-32 h-1.5 bg-[#0EA5E9] mb-8"></div>
          <p className="text-2xl text-[#4B5563] font-light max-w-4xl">
            {slide.subline}
          </p>
        </div>

        {/* Bullets */}
        <div className="space-y-6 mb-16 max-w-5xl">
          {slide.bullets.map((bullet, index) => (
            <div key={index} className="flex items-start gap-5">
              <div className="w-4 h-4 rounded-full bg-[#4B5563] flex-shrink-0 mt-3"></div>
              <p className="text-2xl text-[#4B5563] leading-relaxed font-light">
                {bullet}
              </p>
            </div>
          ))}
        </div>

        {/* Callout box */}
        <div className="max-w-4xl">
          <div className="bg-gradient-to-br from-[#0EA5E9]/5 via-[#009A44]/5 to-[#0EA5E9]/5 border-l-4 border-[#009A44] p-10 rounded-2xl shadow-lg">
            <div className="flex items-start gap-6">
              <AlertTriangle className="w-10 h-10 text-[#009A44] flex-shrink-0 mt-1" strokeWidth={2} />
              <p className="text-2xl font-semibold text-[#1B365D] leading-relaxed">
                {slide.callout}
              </p>
            </div>
          </div>
        </div>

        {/* Slide number */}
        <div className="absolute bottom-16 right-20">
          <span className="text-[#4B5563]/40 text-sm font-light">03 / 05</span>
        </div>
      </div>
    </div>
  );
};

export default ADGMChallenge;
