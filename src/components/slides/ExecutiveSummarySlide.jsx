import React from 'react';
import { Clock, Target, Shield, Zap } from 'lucide-react';

/**
 * Executive Summary Slide - Slide 2
 * Premium professional design with enhanced visual hierarchy
 */
const ExecutiveSummarySlide = ({ slide }) => {
  const sectionConfig = {
    blue: {
      icon: Target,
      iconColor: '#286EE1',
      accentColor: '#E3F2FD',
      borderColor: '#286EE1'
    },
    green: {
      icon: Zap,
      iconColor: '#10b981',
      accentColor: '#E8F5E9',
      borderColor: '#10b981'
    },
    purple: {
      icon: Shield,
      iconColor: '#4B3095',
      accentColor: '#F3E5F5',
      borderColor: '#4B3095'
    },
    amber: {
      icon: Clock,
      iconColor: '#f59e0b',
      accentColor: '#FFF8E1',
      borderColor: '#f59e0b'
    }
  };

  return (
    <div className="relative w-full h-screen p-16 flex flex-col bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      {/* Content wrapper */}
      <div className="h-full flex flex-col max-w-7xl mx-auto w-full">
        {/* Header with enhanced typography */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-3 tracking-tight">
            {slide.title}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-blue1 to-primary-blue2 rounded-full" />
        </div>

        {/* Grid layout with enhanced spacing */}
        <div className="grid md:grid-cols-2 gap-8 flex-1">
          {slide.sections.map((section, index) => {
            const config = sectionConfig[section.color];
            const Icon = config.icon;

            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-10 border-2 border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 animate-slide-in opacity-0"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                {/* Icon with gradient background */}
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: config.accentColor }}
                >
                  <Icon className="w-8 h-8" style={{ color: config.iconColor }} strokeWidth={2.5} />
                </div>

                {/* Label with enhanced styling */}
                <div
                  className="text-xs font-extrabold uppercase tracking-[0.15em] mb-4 pb-3 border-b-2"
                  style={{ color: config.borderColor, borderColor: config.accentColor }}
                >
                  {section.label}
                </div>

                {/* Content with improved readability */}
                <p className="text-base text-slate-700 leading-relaxed font-normal">
                  {section.content}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExecutiveSummarySlide;
