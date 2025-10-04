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
    <div className={`w-full h-full ${spacing.slide} flex flex-col bg-gradient-to-br from-white via-blue-50/20 to-purple-50/20`}>
      {/* Header */}
      <div className="mb-12">
        <div className="inline-block">
          <h2 className={`${typography.h2} text-neutral-dark1 relative`}>
            {slide.title}
            <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-primary-blue1 to-accent-purple1 rounded-full" />
          </h2>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 flex-1 relative">
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
        <div className="bg-gradient-to-r from-primary-blue1 to-accent-purple1 rounded-2xl p-6 shadow-xl">
          <div className="flex items-center justify-center gap-4 text-white">
            <Calendar className="w-8 h-8" />
            <p className="text-2xl font-bold">
              {slide.total}
            </p>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-radial from-primary-blue1/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-radial from-accent-purple1/5 to-transparent rounded-full blur-3xl pointer-events-none" />
    </div>
  );
};

export default RoadmapSlide;
