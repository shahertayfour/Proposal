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
    <div className={`w-full h-full ${spacing.slide} flex flex-col bg-gradient-to-br from-white via-blue-50/20 to-purple-50/20`}>
      {/* Header */}
      <div className="mb-12">
        <div className="inline-block">
          <h2 className={`${typography.h2} text-neutral-dark1 relative`}>
            {slide.title}
            <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-primary-blue1 to-accent-purple1 rounded-full" />
          </h2>
        </div>
        <p className="text-xl text-neutral-slateLight mt-4">
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
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-blue-100 hover:border-primary-blue1 animate-slide-in opacity-0"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'forwards'
              }}
            >
              {/* Number badge */}
              <div className={`absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl shadow-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-3xl font-bold text-white">{index + 1}</span>
              </div>

              {/* Icon */}
              <div className="absolute top-8 right-8">
                <div className={`w-16 h-16 bg-gradient-to-br ${gradient} opacity-10 rounded-xl flex items-center justify-center`}>
                  <Icon className="w-10 h-10 text-primary-blue1 opacity-50" />
                </div>
              </div>

              {/* Content */}
              <div className="pl-12 pt-4">
                <p className="text-2xl text-neutral-dark1 leading-relaxed font-medium">
                  {outcome}
                </p>
              </div>

              {/* Decorative gradient line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
            </div>
          );
        })}
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-gradient-radial from-primary-blue1/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-gradient-radial from-accent-purple1/5 to-transparent rounded-full blur-3xl pointer-events-none" />
    </div>
  );
};

export default OutcomesSlide;
