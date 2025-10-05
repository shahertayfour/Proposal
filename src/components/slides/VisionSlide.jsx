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
    <div className={`relative w-full h-screen ${spacing.slide} flex flex-col bg-gradient-to-br from-primary-blue2 via-accent-purple1 to-accent-purple2 overflow-hidden`}>
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-accent-purple2/10 rounded-full blur-3xl" />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Header with enhanced subtitle */}
        <div className="mb-12">
          <div className="inline-block">
            <h2 className={`${typography.h2} text-white relative`}>
              {slide.title}
              <div className="absolute -bottom-2 left-0 w-24 h-1 bg-white/50 rounded-full" />
            </h2>
          </div>
          <div className="mt-6 inline-block px-6 py-3 bg-white/20 backdrop-blur-md rounded-full border-2 border-white/30">
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
              className={`group relative bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-l-8 border-white/30 animate-slide-in opacity-0`}
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
                  <h3 className={`${typography.h3} text-white mb-4 font-bold`}>
                    {section.title}
                  </h3>
                  <p className="text-xl text-white/90 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
};

export default VisionSlide;
