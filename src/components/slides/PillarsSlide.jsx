import React from 'react';
import { Brain, Code, Globe } from 'lucide-react';

/**
 * Pillars Slide - Slide 6
 * Premium professional design with enhanced visual hierarchy
 */
const PillarsSlide = ({ slide }) => {
  const pillarConfig = {
    purple: {
      icon: Brain,
      gradient: 'from-accent-purple1 to-accent-purple2',
      bgLight: 'bg-purple-50',
      iconColor: '#4B3095'
    },
    blue: {
      icon: Code,
      gradient: 'from-primary-blue1 to-primary-blue2',
      bgLight: 'bg-blue-50',
      iconColor: '#286EE1'
    },
    green: {
      icon: Globe,
      gradient: 'from-green-500 to-green-600',
      bgLight: 'bg-green-50',
      iconColor: '#10b981'
    }
  };

  return (
    <div className="relative w-full h-screen p-16 flex flex-col bg-gradient-to-br from-blue-50 via-slate-50/40 to-blue-50">
      {/* Content wrapper */}
      <div className="h-full flex flex-col max-w-6xl mx-auto w-full">
        {/* Header with enhanced styling */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-3 tracking-tight">
            {slide.title}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-blue1 to-primary-blue2 rounded-full" />
        </div>

        <div className="space-y-6 flex-1">
          {slide.pillars.map((pillar, index) => {
            const config = pillarConfig[pillar.color];
            const Icon = config.icon;

            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-10 border-2 border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 animate-slide-in opacity-0"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                <div className="flex items-start gap-8">
                  {/* Icon with gradient background */}
                  <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${config.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 pt-8 border-t-2 border-slate-200">
          <p className="text-base text-slate-600 italic text-center font-medium">
            {slide.footer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PillarsSlide;
