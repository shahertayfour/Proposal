import React from 'react';
import { Brain, Code, Globe } from 'lucide-react';
import { typography, spacing } from '../../styles/colors';

/**
 * Pillars Slide - Slide 6
 * Enhanced with icons and modern card design
 */
const PillarsSlide = ({ slide }) => {
  const pillarConfig = {
    purple: {
      icon: Brain,
      gradient: 'from-accent-purple1 to-accent-purple2',
      bg: 'from-purple-50 to-purple-100/50',
      border: 'border-accent-purple1'
    },
    blue: {
      icon: Code,
      gradient: 'from-primary-blue1 to-primary-blue2',
      bg: 'from-blue-50 to-blue-100/50',
      border: 'border-primary-blue1'
    },
    green: {
      icon: Globe,
      gradient: 'from-green-500 to-green-600',
      bg: 'from-green-50 to-green-100/50',
      border: 'border-green-500'
    }
  };

  return (
    <div className={`relative w-full h-screen ${spacing.slide} flex flex-col bg-gradient-to-br from-primary-blue2 via-primary-blue3 to-accent-purple1 overflow-hidden`}>
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-accent-purple2/10 rounded-full blur-3xl" />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block">
            <h2 className={`${typography.h2} text-white relative`}>
              {slide.title}
              <div className="absolute -bottom-2 left-0 w-24 h-1 bg-white/50 rounded-full" />
            </h2>
          </div>
        </div>

      <div className="space-y-8 flex-1">
        {slide.pillars.map((pillar, index) => {
          const config = pillarConfig[pillar.color];
          const Icon = config.icon;

          return (
            <div
              key={index}
              className={`group relative bg-white/12 backdrop-blur-lg rounded-3xl p-10 shadow-premium hover:shadow-premium-lg transition-all duration-700 border-2 border-white/25 hover:border-white/50 hover:scale-[1.02] animate-slide-in opacity-0`}
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <div className="flex items-start gap-8">
                {/* Icon */}
                <div className={`flex-shrink-0 w-20 h-20 bg-gradient-to-br ${config.gradient} rounded-2xl flex items-center justify-center shadow-premium transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <Icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className={`${typography.h3} text-white mb-3 group-hover:translate-x-2 transition-transform duration-300`} style={{ textShadow: '0 2px 12px rgba(0,0,0,0.15)', letterSpacing: '0.01em' }}>
                    {pillar.title}
                  </h3>
                  <p className="text-2xl text-white/90 leading-relaxed" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.15)', letterSpacing: '0.01em' }}>
                    {pillar.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10 pt-8 border-t-2 border-white/30">
        <p className="text-base text-white/70 italic text-center">
          {slide.footer}
        </p>
      </div>
      </div>
    </div>
  );
};

export default PillarsSlide;
