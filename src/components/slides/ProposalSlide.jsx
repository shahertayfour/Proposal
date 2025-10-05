import React from 'react';
import { Check, Layers, Shield, Wrench, Settings, BookOpen } from 'lucide-react';

/**
 * Proposal Slide - Slide 4
 * Premium professional proposal with enhanced visual design
 */
const ProposalSlide = ({ slide }) => {
  const includeIcons = [Settings, Shield, Wrench, Layers, BookOpen];

  return (
    <div className="relative w-full h-screen p-16 flex flex-col bg-gradient-to-br from-slate-50 via-gray-50/40 to-slate-50">
      {/* Content wrapper */}
      <div className="h-full flex flex-col max-w-7xl mx-auto w-full">
        {/* Header with enhanced styling */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-3 tracking-tight">
            {slide.title}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-blue1 to-primary-blue2 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 flex-1">
          {/* Main proposal - 2/3 width with enhanced design */}
          <div className="md:col-span-2 bg-white rounded-2xl p-10 border-2 border-slate-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="text-xl font-semibold text-slate-900 mb-8 leading-relaxed">
              {slide.intro}
            </p>

            <div className="space-y-5">
              {slide.bullets.map((bullet, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-green-50/50 to-transparent hover:from-green-50 transition-colors duration-200 animate-slide-in opacity-0"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: 'forwards'
                  }}
                >
                  <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={3} />
                  <span className="text-base text-slate-700 leading-relaxed font-medium">
                    {bullet}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables - 1/3 width with premium styling */}
          <div className="bg-gradient-to-br from-primary-blue1 to-primary-blue2 rounded-2xl p-8 text-white shadow-lg">
            <h3 className="text-xl font-bold mb-8 pb-4 border-b-2 border-white/30">
              {slide.includesTitle}
            </h3>

            <div className="space-y-4">
              {slide.includes.map((item, index) => {
                const Icon = includeIcons[index % includeIcons.length];
                return (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors duration-200 animate-fade-in opacity-0"
                    style={{
                      animationDelay: `${(index + 3) * 100}ms`,
                      animationFillMode: 'forwards'
                    }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                    </div>
                    <span className="text-sm text-white/95 leading-relaxed font-medium pt-2">
                      {item}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProposalSlide;
