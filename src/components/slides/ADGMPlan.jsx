import React from 'react';
import { Zap, DollarSign } from 'lucide-react';

/**
 * Plan & Action Slide - Stage 1 with bullets, cost, and deliverable chips
 */
const ADGMPlan = ({ slide }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#F3F4F6]">
      {/* Decorative accent */}
      <div className="absolute bottom-0 right-0 w-1/3 h-2/3 bg-gradient-to-tl from-[#009A44]/5 to-transparent rounded-tl-full"></div>

      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-20 max-w-7xl mx-auto py-12 pb-32">
        {/* Header with icon */}
        <div className="mb-6">
          <div className="flex items-center gap-4 mb-4">
            <Zap className="w-12 h-12 text-[#009A44]" strokeWidth={2} />
            <h2 className="text-5xl font-bold text-[#1B365D] leading-tight">
              {slide.title}
            </h2>
          </div>
          <div className="w-28 h-1.5 bg-[#009A44] ml-16 mb-4"></div>
          <p className="text-lg text-[#4B5563] font-light max-w-4xl ml-16">
            {slide.subline}
          </p>
        </div>

        {/* Bullets */}
        <div className="space-y-4 mb-6 max-w-6xl">
          {slide.bullets.map((bullet, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#009A44] flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold text-sm">{index + 1}</span>
              </div>
              <p className="text-lg text-[#4B5563] leading-relaxed font-light">
                {bullet}
              </p>
            </div>
          ))}
        </div>

        {/* Cost highlight */}
        <div className="mb-6 max-w-4xl">
          <div className="bg-gradient-to-r from-[#1B365D] to-[#0EA5E9] p-6 rounded-2xl shadow-lg">
            <div className="flex items-center gap-4">
              <DollarSign className="w-9 h-9 text-white" strokeWidth={2.5} />
              <p className="text-xl font-bold text-white">
                {slide.cost}
              </p>
            </div>
          </div>
        </div>

        {/* Deliverables chips */}
        <div>
          <p className="text-sm font-semibold text-[#1B365D] mb-3 uppercase tracking-wider">
            Deliverables
          </p>
          <div className="flex flex-wrap gap-2 max-w-6xl">
            {slide.deliverables.map((deliverable, index) => (
              <div
                key={index}
                className="inline-block px-4 py-2 bg-white rounded-full border-2 border-[#009A44]/20 hover:border-[#009A44] hover:bg-[#009A44]/5 transition-all duration-300"
              >
                <span className="text-sm font-medium text-[#1B365D]">
                  {deliverable}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Slide number */}
        <div className="absolute bottom-16 right-20">
          <span className="text-[#4B5563]/40 text-sm font-light">04 / 05</span>
        </div>
      </div>
    </div>
  );
};

export default ADGMPlan;
