import React from 'react';
import { GraduationCap, ArrowRight } from 'lucide-react';

/**
 * Programs & Next Steps Slide - Course table and next steps with CTA
 */
const ADGMPrograms = ({ slide }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-white">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F3F4F6] via-white to-[#F3F4F6]"></div>

      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-20 max-w-7xl mx-auto py-10 pb-32">
        {/* Header */}
        <div className="mb-4">
          <div className="flex items-center gap-4 mb-3">
            <GraduationCap className="w-10 h-10 text-[#0EA5E9]" strokeWidth={2} />
            <h2 className="text-4xl font-bold text-[#1B365D] leading-tight">
              {slide.title}
            </h2>
          </div>
          <div className="w-24 h-1.5 bg-[#0EA5E9] ml-14 mb-3"></div>
          <p className="text-base text-[#4B5563] font-light max-w-4xl ml-14">
            {slide.subline}
          </p>
        </div>

        {/* Course Table */}
        <div className="mb-4">
          <p className="text-sm font-semibold text-[#1B365D] mb-3 uppercase tracking-wider">
            Sample Courses
          </p>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            {/* Table header */}
            <div className="grid grid-cols-4 gap-4 bg-gradient-to-r from-[#1B365D] to-[#2D4A7C] px-6 py-3">
              <div className="text-sm font-semibold text-white uppercase tracking-wide">Pillar</div>
              <div className="text-sm font-semibold text-white uppercase tracking-wide">Course</div>
              <div className="text-sm font-semibold text-white uppercase tracking-wide">Level</div>
              <div className="text-sm font-semibold text-white uppercase tracking-wide">Price</div>
            </div>

            {/* Table rows */}
            {slide.courses.map((course, index) => (
              <div
                key={index}
                className={`grid grid-cols-4 gap-4 px-6 py-3 ${
                  index % 2 === 0 ? 'bg-[#F3F4F6]' : 'bg-white'
                } hover:bg-[#0EA5E9]/5 transition-colors duration-200`}
              >
                <div className="text-sm font-semibold text-[#1B365D]">{course.pillar}</div>
                <div className="text-sm text-[#4B5563] font-light">{course.course}</div>
                <div className="text-sm text-[#4B5563] font-light">{course.level}</div>
                <div className="text-sm font-medium text-[#009A44]">{course.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Steps */}
        <div className="mb-4">
          <p className="text-sm font-semibold text-[#1B365D] mb-3 uppercase tracking-wider">
            Next Steps
          </p>
          <div className="space-y-2 max-w-5xl">
            {slide.nextSteps.map((step, index) => (
              <div key={index} className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-[#0EA5E9] flex-shrink-0 mt-1" strokeWidth={2.5} />
                <p className="text-base text-[#4B5563] leading-relaxed font-light">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-5xl mt-3">
          <div className="bg-gradient-to-r from-[#009A44] via-[#00B852] to-[#009A44] p-6 rounded-2xl shadow-xl">
            <div className="flex items-center justify-between">
              <p className="text-xl font-bold text-white leading-relaxed">
                {slide.cta}
              </p>
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all duration-300 cursor-pointer">
                  <ArrowRight className="w-7 h-7 text-white" strokeWidth={3} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide number */}
        <div className="absolute bottom-12 right-20">
          <span className="text-[#4B5563]/40 text-sm font-light">05 / 05</span>
        </div>
      </div>
    </div>
  );
};

export default ADGMPrograms;
