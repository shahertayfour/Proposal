import React from 'react';
import { ArrowRight, CheckCircle, Calendar, Settings, Rocket, Users, TrendingUp } from 'lucide-react';

/**
 * Next Steps Slide - Unified design with consistent colors
 */
const ADGMNextSteps = ({ slide }) => {
  const iconMap = {
    'check': CheckCircle,
    'settings': Settings,
    'rocket': Rocket,
    'users': Users,
    'trend': TrendingUp
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-[#0EA5E9] rounded-full blur-3xl"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-20 max-w-7xl mx-auto py-12 pb-28">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-14 h-14 bg-gradient-to-br from-[#0EA5E9] to-[#00B7FF] rounded-xl flex items-center justify-center shadow-lg">
              <ArrowRight className="w-7 h-7 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <h2 className="text-5xl font-black text-[#1B365D] leading-tight tracking-tight">
                {slide.title}
              </h2>
              <p className="text-lg text-[#4B5563] font-light mt-1">
                {slide.subline}
              </p>
            </div>
          </div>
        </div>

        {/* Timeline Grid - 5 steps in horizontal flow */}
        <div className="mb-10">
          <div className="grid grid-cols-5 gap-4">
            {slide.steps.map((step, index) => {
              const Icon = iconMap[step.icon];

              return (
                <div key={index} className="relative">
                  {/* Connecting arrow (not for last item) */}
                  {index < slide.steps.length - 1 && (
                    <div className="absolute top-8 left-full w-4 flex items-center justify-center z-0">
                      <ArrowRight className="w-5 h-5 text-[#0EA5E9]/40" strokeWidth={2.5} />
                    </div>
                  )}

                  {/* Step Card */}
                  <div className="relative bg-white rounded-xl shadow-lg border-2 border-gray-200 p-5 hover:shadow-xl hover:border-[#0EA5E9]/50 transition-all duration-300 h-full flex flex-col">
                    {/* Step Number Badge */}
                    <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-[#0EA5E9] to-[#00B7FF] rounded-full flex items-center justify-center shadow-md">
                      <span className="text-white font-bold text-sm">{step.number}</span>
                    </div>

                    {/* Icon */}
                    <div className="mb-4 flex justify-center">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#0EA5E9]/10 to-[#00B7FF]/10 rounded-xl flex items-center justify-center">
                        <Icon className="w-7 h-7 text-[#0EA5E9]" strokeWidth={2} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-sm font-bold text-[#1B365D] mb-2 leading-tight text-center min-h-[2.5rem]">
                      {step.title}
                    </h3>

                    {/* Description - grows to fill space */}
                    <p className="text-xs text-[#4B5563] leading-relaxed mb-3 text-center flex-1">
                      {step.description}
                    </p>

                    {/* Timeline badge - always at bottom */}
                    <div className="flex items-center justify-center gap-1.5 bg-blue-50 border border-blue-200 px-2 py-1 rounded-full mt-auto">
                      <Calendar className="w-3 h-3 text-[#0EA5E9]" />
                      <span className="text-xs font-bold text-[#0EA5E9]">{step.timeline}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-full">
          <div className="bg-gradient-to-r from-[#1B365D] via-[#2D4A7C] to-[#1B365D] p-8 rounded-2xl shadow-2xl">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-2xl font-bold text-white leading-relaxed">
                  {slide.cta}
                </p>
              </div>
              <div className="flex-shrink-0 ml-6">
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-300 cursor-pointer">
                  <ArrowRight className="w-8 h-8 text-white" strokeWidth={3} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide number */}
        <div className="absolute bottom-8 right-20">
          <span className="text-[#4B5563]/40 text-sm font-light">06 / 06</span>
        </div>
      </div>
    </div>
  );
};

export default ADGMNextSteps;
