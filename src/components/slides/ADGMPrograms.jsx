import React from 'react';
import { GraduationCap, Layers, Info } from 'lucide-react';

/**
 * Programs Slide - 4-card layout with 3 pillars + info card
 */
const ADGMPrograms = ({ slide }) => {
  const pillarData = [
    {
      name: 'Artificial Intelligence',
      icon: '🧠',
      gradient: 'from-[#1B365D] to-[#2D4A7C]',
      bgColor: 'bg-slate-50/80'
    },
    {
      name: 'Coding & Development',
      icon: '💻',
      gradient: 'from-[#0EA5E9] to-[#00B7FF]',
      bgColor: 'bg-blue-50/80'
    },
    {
      name: 'Digital Transformation',
      icon: '🌐',
      gradient: 'from-[#1B365D] to-[#0EA5E9]',
      bgColor: 'bg-cyan-50/80'
    }
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-white via-gray-50 to-slate-100">
      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col px-4 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto py-6 sm:py-7 md:py-8 pb-12 sm:pb-16 md:pb-20">
        {/* Header - Compact */}
        <div className="mb-4 sm:mb-5 md:mb-6 text-center">
          <div className="flex justify-center mb-2 sm:mb-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#0EA5E9] to-[#00B7FF] rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" strokeWidth={2} />
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1B365D] mb-1.5 sm:mb-2 tracking-tight">
            Training Portfolio
          </h2>
          <div className="flex justify-center mb-2 sm:mb-3">
            <div className="w-12 sm:w-14 md:w-16 h-0.5 sm:h-1 bg-gradient-to-r from-[#0EA5E9] to-[#00B7FF] rounded-full"></div>
          </div>
          <p className="text-xs sm:text-sm text-[#4B5563] font-light max-w-4xl mx-auto px-2">
            {slide.subline}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 flex-1">
          {/* Three Pillar Cards */}
          {slide.pillars.map((pillar, pillarIndex) => {
            const pillarStyle = pillarData[pillarIndex];

            return (
              <div key={pillarIndex} className="flex flex-col">
                {/* Pillar Header */}
                <div className={`bg-gradient-to-br ${pillarStyle.gradient} rounded-t-lg sm:rounded-t-xl px-3 py-2 sm:px-4 sm:py-3 shadow-lg`}>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl mb-0.5 sm:mb-1">{pillarStyle.icon}</div>
                    <h3 className="text-xs sm:text-sm font-bold text-white leading-tight">
                      {pillarStyle.name}
                    </h3>
                  </div>
                </div>

                {/* Programs List */}
                <div className="bg-white rounded-b-lg sm:rounded-b-xl shadow-lg border-2 border-gray-200 flex-1 p-2 sm:p-3">
                  <div className="space-y-1.5 sm:space-y-2">
                    {pillar.programs.map((program, programIndex) => (
                      <div key={programIndex} className={`${pillarStyle.bgColor} rounded-md sm:rounded-lg p-2 sm:p-2.5 border border-gray-200`}>
                        {/* Level Badge */}
                        <div className="flex items-center justify-between mb-1 sm:mb-1.5">
                          <span className="text-[0.65rem] sm:text-xs font-bold text-gray-700 bg-white px-1.5 py-0.5 sm:px-2 rounded-full border border-gray-300">
                            {program.level}
                          </span>
                          <span className="text-[0.65rem] sm:text-xs text-gray-600 font-medium">{program.duration}</span>
                        </div>

                        {/* Title */}
                        <h4 className="text-[0.65rem] sm:text-xs font-bold text-[#1B365D] mb-0.5 sm:mb-1 leading-tight">
                          {program.title}
                        </h4>

                        {/* Price */}
                        <div className="text-[0.65rem] sm:text-xs font-bold text-[#0EA5E9]">
                          {program.price}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

          {/* 4th Card - Scalability & Variety Info */}
          <div className="flex flex-col">
            {/* Info Header */}
            <div className="bg-gradient-to-br from-[#1B365D] to-[#2D4A7C] rounded-t-lg sm:rounded-t-xl px-3 py-2 sm:px-4 sm:py-3 shadow-lg">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl mb-0.5 sm:mb-1">
                  <Layers className="w-6 h-6 sm:w-8 sm:h-8 text-white mx-auto" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-white leading-tight">
                  Our Capabilities
                </h3>
              </div>
            </div>

            {/* Info Content */}
            <div className="bg-white rounded-b-lg sm:rounded-b-xl shadow-lg border-2 border-gray-200 flex-1 p-2 sm:p-3 flex flex-col justify-between">
              <div>
                {/* Sample Note */}


                {/* Key Features */}
                <div className="space-y-2 sm:space-y-2.5 mb-2 sm:mb-3">
                  <div className="flex items-start gap-1.5 sm:gap-2">
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#0EA5E9] mt-1 sm:mt-1.5 flex-shrink-0"></div>
                    <div className="text-[0.65rem] sm:text-xs text-gray-700 leading-relaxed">
                      <span className="font-bold">Scalable:</span> Small teams to large cohorts
                    </div>
                  </div>
                  <div className="flex items-start gap-1.5 sm:gap-2">
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#0EA5E9] mt-1 sm:mt-1.5 flex-shrink-0"></div>
                    <div className="text-[0.65rem] sm:text-xs text-gray-700 leading-relaxed">
                      <span className="font-bold">Comprehensive:</span> Full spectrum of tech
                    </div>
                  </div>
                  <div className="flex items-start gap-1.5 sm:gap-2">
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#0EA5E9] mt-1 sm:mt-1.5 flex-shrink-0"></div>
                    <div className="text-[0.65rem] sm:text-xs text-gray-700 leading-relaxed">
                      <span className="font-bold">Progressive:</span> Beginner to expert
                    </div>
                  </div>
                  <div className="flex items-start gap-1.5 sm:gap-2">
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#0EA5E9] mt-1 sm:mt-1.5 flex-shrink-0"></div>
                    <div className="text-[0.65rem] sm:text-xs text-gray-700 leading-relaxed">
                      <span className="font-bold">Flexible:</span> Multiple delivery formats
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Box */}


            </div>
          </div>
        </div>

        {/* Pricing Note */}
        <div className="mt-3 sm:mt-4 bg-gradient-to-r from-[#1B365D] via-[#2D4A7C] to-[#1B365D] rounded-lg sm:rounded-xl px-4 py-2 sm:px-6 sm:py-3 shadow-xl">
          <div className="flex items-center gap-2 sm:gap-3">
            <Layers className="w-3 h-3 sm:w-4 sm:h-4 text-white flex-shrink-0" />
            <p className="text-[0.65rem] sm:text-xs text-white font-medium leading-relaxed">
              <span className="font-bold">Flexible Pricing:</span> {slide.pricingNote}
            </p>
          </div>
        </div>

        {/* Slide number */}
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-8 md:right-12 lg:right-16 xl:right-20">
          <span className="text-[#4B5563]/40 text-xs sm:text-sm font-light">05 / 06</span>
        </div>
      </div>
    </div>
  );
};

export default ADGMPrograms;
