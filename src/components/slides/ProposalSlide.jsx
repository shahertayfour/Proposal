import React from 'react';
import { Check, Layers, Shield, Wrench, Settings, BookOpen } from 'lucide-react';
import { typography, spacing } from '../../styles/colors';
import Chip from '../ui/Chip';

/**
 * Proposal Slide - Slide 4
 * Enhanced designer-friendly proposal with visual cards and icons
 */
const ProposalSlide = ({ slide }) => {
  // Icons for each "includes" item
  const includeIcons = [Settings, Shield, Wrench, Layers, BookOpen];

  return (
    <div className={`w-full h-full ${spacing.slide} flex flex-col bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30`}>
      {/* Header with gradient accent */}
      <div className="mb-12">
        <div className="inline-block">
          <h2 className={`${typography.h2} text-neutral-dark1 relative`}>
            {slide.title}
            <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-primary-blue1 to-accent-purple1 rounded-full" />
          </h2>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 flex-1">
        {/* Left column - Main objectives */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-primary-blue1/10 to-accent-purple1/10 p-8 rounded-2xl border-2 border-primary-blue1/20 backdrop-blur-sm">
            <p className="text-2xl font-semibold text-neutral-dark1 mb-8">
              {slide.intro}
            </p>

            <div className="space-y-4">
              {slide.bullets.map((bullet, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white/80 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 animate-slide-in opacity-0"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: 'forwards'
                  }}
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                    <Check className="w-5 h-5 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-lg text-neutral-slate font-medium pt-1.5">
                    {bullet}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column - What's included */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-white to-blue-50/50 p-8 rounded-2xl border-2 border-blue-200/50 shadow-lg">
            <h3 className={`${typography.h3} text-primary-blue1 mb-6 flex items-center gap-3`}>
              <div className="w-2 h-8 bg-gradient-to-b from-primary-blue1 to-accent-purple1 rounded-full" />
              {slide.includesTitle}
            </h3>

            <div className="space-y-3">
              {slide.includes.map((item, index) => {
                const Icon = includeIcons[index % includeIcons.length];
                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl border border-blue-100 hover:border-primary-blue1 hover:shadow-md transition-all duration-300 group animate-fade-in opacity-0"
                    style={{
                      animationDelay: `${(index + 3) * 100}ms`,
                      animationFillMode: 'forwards'
                    }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-blue1 to-primary-blue2 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-base font-medium text-neutral-slate group-hover:text-primary-blue1 transition-colors">
                      {item}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-primary-blue1/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-radial from-accent-purple1/5 to-transparent rounded-full blur-3xl pointer-events-none" />
    </div>
  );
};

export default ProposalSlide;
