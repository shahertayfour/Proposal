import React, { useState } from 'react';
import { Clock, Target, Shield, Zap, ChevronRight, Info } from 'lucide-react';

/**
 * Executive Summary Slide - Slide 2
 * Premium interactive design with expandable cards
 */
const ExecutiveSummarySlide = ({ slide }) => {
  const [expandedCard, setExpandedCard] = useState(null);

  const sectionConfig = {
    blue: {
      icon: Target,
      iconColor: '#286EE1',
      accentColor: '#E3F2FD',
      borderColor: '#286EE1',
      details: "12 fully-configured workstations with enterprise-grade virtualization, pre-loaded development tools, and isolated training environments ready for immediate deployment."
    },
    green: {
      icon: Zap,
      iconColor: '#10b981',
      accentColor: '#E8F5E9',
      borderColor: '#10b981',
      details: "Maharat will operate all aspects of the School of Coders program, from curriculum delivery to student placement, establishing a long-term partnership framework."
    },
    purple: {
      icon: Shield,
      iconColor: '#4B3095',
      accentColor: '#F3E5F5',
      borderColor: '#4B3095',
      details: "Training environments are completely isolated from certification systems, ensuring testing integrity while providing comprehensive hands-on learning experiences."
    },
    amber: {
      icon: Clock,
      iconColor: '#f59e0b',
      accentColor: '#FFF8E1',
      borderColor: '#f59e0b',
      details: "Complete setup including infrastructure assessment, VM configuration, pilot testing, documentation, and full knowledge transfer—ready to train students."
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

        {/* Grid layout with interactive cards */}
        <div className="grid md:grid-cols-2 gap-8 flex-1">
          {slide.sections.map((section, index) => {
            const config = sectionConfig[section.color];
            const Icon = config.icon;
            const isExpanded = expandedCard === index;

            return (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl p-10 border-2 cursor-pointer transition-all duration-500 animate-slide-in opacity-0 ${
                  isExpanded
                    ? 'border-slate-300 shadow-2xl scale-105 z-10'
                    : 'border-slate-100 hover:border-slate-200 hover:shadow-xl'
                }`}
                style={{
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: 'forwards'
                }}
                onClick={() => setExpandedCard(isExpanded ? null : index)}
              >
                {/* Hover Info Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isExpanded ? 'bg-primary-blue1' : 'bg-slate-100'
                  }`}>
                    {isExpanded ? (
                      <ChevronRight className="w-4 h-4 text-white rotate-90 transition-transform duration-300" />
                    ) : (
                      <Info className="w-4 h-4 text-slate-400" />
                    )}
                  </div>
                </div>

                {/* Icon with gradient background */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 transition-all duration-300 ${
                    isExpanded ? 'scale-125 -rotate-6' : 'group-hover:scale-110'
                  }`}
                  style={{ backgroundColor: config.accentColor }}
                >
                  <Icon className="w-8 h-8" style={{ color: config.iconColor }} strokeWidth={2.5} />
                </div>

                {/* Label with enhanced styling */}
                <div
                  className="text-xs font-extrabold uppercase tracking-[0.15em] mb-4 pb-3 border-b-2 transition-colors duration-300"
                  style={{
                    color: isExpanded ? config.iconColor : config.borderColor,
                    borderColor: isExpanded ? config.iconColor : config.accentColor
                  }}
                >
                  {section.label}
                </div>

                {/* Content with improved readability */}
                <p className={`text-base text-slate-700 leading-relaxed font-normal transition-all duration-300 ${
                  isExpanded ? 'mb-4' : ''
                }`}>
                  {section.content}
                </p>

                {/* Expandable Details */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pt-4 border-t border-slate-200">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-1 h-full bg-gradient-to-b from-primary-blue1 to-transparent rounded-full" />
                      <p className="text-sm text-slate-600 leading-relaxed italic">
                        {config.details}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Click hint */}
                <div className={`text-xs text-slate-400 mt-4 flex items-center gap-2 transition-opacity duration-300 ${
                  isExpanded ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'
                }`}>
                  <Info className="w-3 h-3" />
                  Click for more details
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
