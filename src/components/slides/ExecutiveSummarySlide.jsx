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
      bg: 'bg-white/10 backdrop-blur-md',
      border: 'border-l-blue-300',
      text: 'text-blue-300',
      icon: Target,
      iconBg: 'bg-gradient-to-br from-blue-400 to-blue-600'
    },
    green: {
      bg: 'bg-white/10 backdrop-blur-md',
      border: 'border-l-green-300',
      text: 'text-green-300',
      icon: Zap,
      iconBg: 'bg-gradient-to-br from-green-400 to-green-600'
    },
    purple: {
      bg: 'bg-white/10 backdrop-blur-md',
      border: 'border-l-purple-300',
      text: 'text-purple-300',
      icon: Shield,
      iconBg: 'bg-gradient-to-br from-purple-400 to-purple-600'
    },
    amber: {
      bg: 'bg-white/10 backdrop-blur-md',
      border: 'border-l-amber-300',
      text: 'text-amber-300',
      icon: Clock,
      iconBg: 'bg-gradient-to-br from-amber-400 to-amber-600'
    }
  };

  return (
    <div className={`relative w-full h-screen ${spacing.slide} flex flex-col bg-gradient-to-br from-primary-blue1 via-primary-blue2 to-accent-purple1 overflow-hidden`}>
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-accent-purple2/10 rounded-full blur-3xl" />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Header with gradient accent */}
        <div className="mb-12">
          <div className="inline-block">
            <h2 className={`${typography.h2} text-white relative`}>
              {slide.title}
              <div className="absolute -bottom-2 left-0 w-24 h-1 bg-white/50 rounded-full" />
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
                  <p className="text-xl text-white leading-relaxed font-medium">
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

export default ExecutiveSummarySlide;
