import React from 'react';
import TimelineBox from '../ui/TimelineBox';
import { Calendar } from 'lucide-react';

/**
 * Roadmap Slide - Slide 8
 * Clean professional implementation timeline
 */
const RoadmapSlide = ({ slide }) => {
  return (
    <div className="relative w-full h-screen p-16 flex flex-col bg-gradient-to-br from-blue-50 via-slate-50/40 to-blue-50">
      {/* Content wrapper */}
      <div className="h-full flex flex-col max-w-7xl mx-auto w-full">
        {/* Header with enhanced styling */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-3 tracking-tight">
            {slide.title}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-blue1 to-primary-blue2 rounded-full" />
        </div>

      <div className="grid md:grid-cols-2 gap-8">
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

      {/* Total timeline with enhanced styling */}
      <div className="mt-12">
        <div className="bg-white rounded-2xl px-12 py-8 border-2 border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-center gap-6">
            <div className="w-14 h-14 bg-gradient-to-br from-primary-blue1 to-primary-blue2 rounded-2xl flex items-center justify-center shadow-lg">
              <Calendar className="w-7 h-7 text-white" strokeWidth={2.5} />
            </div>
            <p className="text-2xl font-bold text-slate-900">
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
