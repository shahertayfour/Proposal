import React from 'react';
import { TrendingUp, Users, Zap } from 'lucide-react';
import { typography, spacing } from '../../styles/colors';

/**
 * Outcomes Slide - Slide 3
 * Enhanced with numbered cards and icons
 */
const OutcomesSlide = ({ slide }) => {
  const outcomeIcons = [Zap, Users, TrendingUp];
  const gradients = [
    'from-primary-blue1 to-primary-blue2',
    'from-accent-purple1 to-accent-purple2',
    'from-primary-blue2 to-accent-purple1'
  ];

  return (
    <div className={`relative w-full h-screen ${spacing.slide} flex flex-col bg-gradient-to-br from-primary-blue1 via-primary-blue2 to-accent-purple1 overflow-hidden`}>
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
          <p className="text-xl text-white/80 mt-4">
            {slide.subtitle}
          </p>
        </div>

      <div className="grid gap-8 flex-1">
        {slide.outcomes.map((outcome, index) => {
          const Icon = outcomeIcons[index % outcomeIcons.length];
          const gradient = gradients[index % gradients.length];

          return (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-lg rounded-3xl p-10 shadow-premium hover:shadow-premium-lg hover:scale-[1.02] transition-all duration-700 border-2 border-white/25 hover:border-white/50 animate-slide-in opacity-0"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'forwards'
              }}
            >
              {/* Number badge with premium design */}
              <div className={`absolute -top-7 -left-7 w-20 h-20 bg-gradient-to-br ${gradient} rounded-3xl shadow-premium flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                <span className="text-4xl font-bold text-white" style={{textShadow: '0 2px 8px rgba(0,0,0,0.3)'}}>{index + 1}</span>
              </div>

              {/* Icon with glow effect */}
              <div className="absolute top-10 right-10 group-hover:scale-110 transition-transform duration-500">
                <div className={`w-18 h-18 bg-white/15 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20`}>
                  <Icon className="w-12 h-12 text-white/60" strokeWidth={2} />
                </div>
              </div>

              {/* Content with better typography */}
              <div className="pl-16 pt-6 pr-4">
                <p className="text-2xl text-white leading-relaxed font-medium"
                   style={{textShadow: '0 2px 12px rgba(0,0,0,0.15)', letterSpacing: '0.01em'}}>
                  {outcome}
                </p>
              </div>

              {/* Decorative gradient line with smooth animation */}
              <div className={`absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r ${gradient} rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out`} />
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
};

export default OutcomesSlide;
