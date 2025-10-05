import React from 'react';
import { DollarSign, CreditCard, Star } from 'lucide-react';
import { typography, spacing } from '../../styles/colors';

/**
 * Commercial Slide - Slide 10
 * Enhanced commercial overview with icons
 */
const CommercialSlide = ({ slide }) => {
  const sectionConfig = {
    blue: {
      icon: DollarSign,
      gradient: 'from-primary-blue1 to-primary-blue2',
      bg: 'from-blue-50 to-blue-100/60',
      text: 'text-primary-blue1',
      border: 'border-primary-blue1'
    },
    green: {
      icon: CreditCard,
      gradient: 'from-green-500 to-green-600',
      bg: 'from-green-50 to-green-100/60',
      text: 'text-green-700',
      border: 'border-green-500'
    },
    purple: {
      icon: Star,
      gradient: 'from-accent-purple1 to-accent-purple2',
      bg: 'from-purple-50 to-purple-100/60',
      text: 'text-accent-purple1',
      border: 'border-accent-purple1'
    }
  };

  return (
    <div className={`relative w-full h-screen ${spacing.slide} flex flex-col bg-gradient-to-br from-primary-blue1 via-primary-blue3 to-accent-purple2 overflow-hidden`}>
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
        {slide.sections.map((section, index) => {
          const config = sectionConfig[section.color];
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
                  <h3 className={`${typography.h3} text-white mb-4 font-bold`} style={{ textShadow: '0 2px 12px rgba(0,0,0,0.15)', letterSpacing: '0.01em' }}>
                    {section.title}
                  </h3>
                  <p className="text-2xl text-white/90 leading-relaxed" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.15)', letterSpacing: '0.01em' }}>
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

export default CommercialSlide;
