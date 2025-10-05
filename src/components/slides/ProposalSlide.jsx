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

      <div className="grid md:grid-cols-2 gap-8 flex-1">
        {/* Left column - Main objectives with premium design */}
        <div className="space-y-6">
          <div className="bg-white/12 backdrop-blur-lg p-10 rounded-3xl border-2 border-white/25 shadow-premium">
            <p className="text-3xl font-semibold text-white mb-10"
               style={{textShadow: '0 2px 15px rgba(0,0,0,0.2)', letterSpacing: '0.01em'}}>
              {slide.intro}
            </p>

            <div className="space-y-5">
              {slide.bullets.map((bullet, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-5 p-5 bg-white/10 rounded-2xl shadow-lg hover:shadow-premium hover:bg-white/15 hover:scale-[1.02] transition-all duration-500 animate-slide-in opacity-0"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: 'forwards'
                  }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center shadow-premium group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Check className="w-6 h-6 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-xl text-white font-medium pt-2"
                        style={{textShadow: '0 1px 8px rgba(0,0,0,0.1)'}}>
                    {bullet}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column - What's included with premium styling */}
        <div className="space-y-6">
          <div className="bg-white/12 backdrop-blur-lg p-10 rounded-3xl border-2 border-white/25 shadow-premium">
            <h3 className={`${typography.h3} text-white mb-8 flex items-center gap-4`}
                style={{textShadow: '0 2px 12px rgba(0,0,0,0.2)'}}>
              <div className="w-2 h-10 bg-gradient-to-b from-white to-white/60 rounded-full shadow-glow-blue" />
              {slide.includesTitle}
            </h3>

            <div className="space-y-4">
              {slide.includes.map((item, index) => {
                const Icon = includeIcons[index % includeIcons.length];
                return (
                  <div
                    key={index}
                    className="group flex items-center gap-5 p-5 bg-white/10 rounded-2xl border border-white/25 hover:border-white/50 hover:bg-white/15 hover:shadow-premium hover:scale-[1.02] transition-all duration-500 animate-fade-in opacity-0"
                    style={{
                      animationDelay: `${(index + 3) * 100}ms`,
                      animationFillMode: 'forwards'
                    }}
                  >
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center shadow-premium group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <Icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                    </div>
                    <span className="text-lg font-medium text-white"
                          style={{textShadow: '0 1px 8px rgba(0,0,0,0.1)'}}>
                      {item}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ProposalSlide;
