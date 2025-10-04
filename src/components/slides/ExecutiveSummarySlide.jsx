import React from 'react';
import { Clock, Target, Shield, Zap } from 'lucide-react';
import { typography, spacing } from '../../styles/colors';
import Card from '../ui/Card';

/**
 * Executive Summary Slide - Slide 2
 * Enhanced with icons and premium card design
 */
const ExecutiveSummarySlide = ({ slide }) => {
  const sectionConfig = {
    blue: {
      bg: 'bg-gradient-to-br from-blue-50 to-blue-100/50',
      border: 'border-l-primary-blue1',
      text: 'text-primary-blue1',
      icon: Target,
      iconBg: 'bg-gradient-to-br from-primary-blue1 to-primary-blue2'
    },
    green: {
      bg: 'bg-gradient-to-br from-green-50 to-green-100/50',
      border: 'border-l-green-500',
      text: 'text-green-700',
      icon: Zap,
      iconBg: 'bg-gradient-to-br from-green-500 to-green-600'
    },
    purple: {
      bg: 'bg-gradient-to-br from-purple-50 to-purple-100/50',
      border: 'border-l-accent-purple1',
      text: 'text-accent-purple1',
      icon: Shield,
      iconBg: 'bg-gradient-to-br from-accent-purple1 to-accent-purple2'
    },
    amber: {
      bg: 'bg-gradient-to-br from-amber-50 to-amber-100/50',
      border: 'border-l-amber-500',
      text: 'text-amber-700',
      icon: Clock,
      iconBg: 'bg-gradient-to-br from-amber-500 to-amber-600'
    }
  };

  return (
    <div className={`w-full h-full ${spacing.slide} flex flex-col bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30`}>
      {/* Header with gradient accent */}
      <div className="mb-12">
        <div className="inline-block">
          <h2 className={`${typography.h2} text-neutral-dark1 relative`}>
            {slide.title}
            <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-primary-blue1 to-accent-purple1 rounded-full" />
          </h2>
        </div>
      </div>

      <div className="grid gap-6 flex-1">
        {slide.sections.map((section, index) => {
          const config = sectionConfig[section.color];
          const Icon = config.icon;

          return (
            <div
              key={index}
              className={`${config.bg} ${config.border} border-l-8 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-in opacity-0`}
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className={`flex-shrink-0 w-16 h-16 ${config.iconBg} rounded-xl flex items-center justify-center shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 space-y-2">
                  <span className={`text-sm font-bold uppercase tracking-wider ${config.text}`}>
                    {section.label}
                  </span>
                  <p className="text-xl text-neutral-slate leading-relaxed font-medium">
                    {section.content}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-primary-blue1/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-radial from-accent-purple1/5 to-transparent rounded-full blur-3xl pointer-events-none" />
    </div>
  );
};

export default ExecutiveSummarySlide;
