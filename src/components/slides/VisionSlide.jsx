import React from 'react';
import { Rocket, TrendingUp, Award } from 'lucide-react';
import { typography, spacing } from '../../styles/colors';

/**
 * Vision Slide - Slide 11
 * Enhanced Stage 2 vision with aspirational design
 */
const VisionSlide = ({ slide }) => {
  const sectionConfig = {
    blue: {
      icon: Rocket,
      gradient: 'from-primary-blue1 to-primary-blue2',
      bg: 'from-blue-50 to-blue-100/60',
      text: 'text-primary-blue1',
      border: 'border-primary-blue1'
    },
    green: {
      icon: TrendingUp,
      gradient: 'from-green-500 to-green-600',
      bg: 'from-green-50 to-green-100/60',
      text: 'text-green-700',
      border: 'border-green-500'
    },
    purple: {
      icon: Award,
      gradient: 'from-accent-purple1 to-accent-purple2',
      bg: 'from-purple-50 to-purple-100/60',
      text: 'text-accent-purple1',
      border: 'border-accent-purple1'
    }
  };

  return (
    <div className={`w-full h-full ${spacing.slide} flex flex-col bg-gradient-to-br from-white via-purple-50/20 to-blue-50/30`}>
      {/* Header with enhanced subtitle */}
      <div className="mb-12">
        <div className="inline-block">
          <h2 className={`${typography.h2} text-neutral-dark1 relative`}>
            {slide.title}
            <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-primary-blue1 to-accent-purple1 rounded-full" />
          </h2>
        </div>
        <div className="mt-6 inline-block px-6 py-3 bg-gradient-to-r from-primary-blue1 to-accent-purple1 rounded-full">
          <p className={`text-2xl text-white font-semibold`}>
            {slide.subtitle}
          </p>
        </div>
      </div>

      <div className="space-y-6 flex-1">
        {slide.sections.map((section, index) => {
          const config = sectionConfig[section.color];
          const Icon = config.icon;

          return (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${config.bg} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-l-8 ${config.border} animate-slide-in opacity-0`}
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${config.gradient} rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300`}>
                  <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className={`${typography.h3} ${config.text} mb-4 font-bold`}>
                    {section.title}
                  </h3>
                  <p className="text-xl text-neutral-slate leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Decorative elements - more vibrant for future vision */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-accent-purple1/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-primary-blue1/10 to-transparent rounded-full blur-3xl pointer-events-none" />
    </div>
  );
};

export default VisionSlide;
