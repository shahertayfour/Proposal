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
      <div className="relative z-10 h-full flex flex-col justify-center px-20 max-w-7xl mx-auto py-12 pb-32">
        {/* Header with icon */}
        <div className="mb-6">
          <div className="flex items-center gap-4 mb-4">
            <Zap className="w-12 h-12 text-[#0EA5E9]" strokeWidth={2} />
            <h2 className="text-5xl font-black text-[#1B365D] leading-tight tracking-tight">
              {slide.title}
            </h2>
          </div>
          <div className="w-28 h-2 bg-gradient-to-r from-[#0EA5E9] to-[#00B7FF] rounded-full ml-16 mb-4"></div>
          <p className="text-lg text-[#4B5563] font-light max-w-4xl ml-16 leading-relaxed">
            {slide.subline}
          </p>
        </div>

        {/* Bullets */}
        <div className="space-y-4 mb-6 max-w-6xl">
          {slide.bullets.map((bullet, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0EA5E9] to-[#00B7FF] flex items-center justify-center flex-shrink-0 mt-1">
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
          <div className="bg-gradient-to-r from-[#1B365D] via-[#2D4A7C] to-[#1B365D] p-6 rounded-2xl shadow-lg">
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
                className="inline-block px-4 py-2 bg-white rounded-full border-2 border-[#0EA5E9]/20 hover:border-[#0EA5E9] hover:bg-[#0EA5E9]/5 transition-all duration-300 shadow-sm"
              >
                <span className="text-sm font-semibold text-[#1B365D]">
                  {deliverable}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Slide number */}
        <div className="absolute bottom-16 right-20">
          <span className="text-[#4B5563]/40 text-sm font-light">04 / 06</span>
        </div>
      </div>
    </div>
  );
};

export default ADGMPlan;
