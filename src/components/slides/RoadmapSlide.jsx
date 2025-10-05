import React from 'react';
import { typography, spacing } from '../../styles/colors';
import TimelineBox from '../ui/TimelineBox';
import { Calendar } from 'lucide-react';

/**
 * Roadmap Slide - Slide 8
 * Enhanced implementation timeline with connecting lines
 */
const RoadmapSlide = ({ slide }) => {
  return (
    <div className={`relative w-full h-screen ${spacing.slide} flex flex-col bg-gradient-to-br from-primary-blue3 via-primary-blue2 to-accent-purple1 overflow-hidden`}>
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

      <div className="grid md:grid-cols-2 gap-10 flex-1 relative">
        {/* Connecting line visual */}
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-0.5 bg-gradient-to-r from-primary-blue1 via-accent-purple1 to-green-500 opacity-20" />

        {slide.phases.map((phase, index) => (
          <TimelineBox
            key={index}
            number={phase.number}
            title={phase.title}
            duration={phase.duration}
            color={phase.color}
            animate={true}
            delay={index * 100}
          />
        ))}
      </div>

      {/* Total timeline with icon */}
      <div className="mt-10 pt-8">
        <div className="bg-white/12 backdrop-blur-lg rounded-3xl p-10 shadow-premium hover:shadow-premium-lg border-2 border-white/25 hover:border-white/50 transition-all duration-700">
          <div className="flex items-center justify-center gap-4 text-white">
            <div className="w-14 h-14 bg-gradient-to-br from-primary-blue1 to-accent-purple1 rounded-2xl flex items-center justify-center shadow-premium">
              <Calendar className="w-8 h-8" strokeWidth={2.5} />
            </div>
            <p className="text-3xl font-bold" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.15)', letterSpacing: '0.02em' }}>
              {slide.total}
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default RoadmapSlide;
