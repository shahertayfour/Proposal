import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import { typography, spacing } from '../../styles/colors';

/**
 * Scope & Exclusions Slide - Slide 5
 * Enhanced with premium card design and clear visual separation
 */
const ScopeExclusionsSlide = ({ slide }) => {
  return (
    <div className={`relative w-full h-screen ${spacing.slide} flex flex-col bg-gradient-to-br from-primary-blue1 via-primary-blue2 to-accent-purple1 overflow-hidden`}>
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

      <div className="grid md:grid-cols-2 gap-10 flex-1">
        {/* Included */}
        <div className="animate-slide-in opacity-0" style={{ animationDelay: '0ms', animationFillMode: 'forwards' }}>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border-2 border-green-300/50 h-full">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8 pb-6 border-b-2 border-white/20">
              <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <CheckCircle2 className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              <h3 className={`${typography.h3} text-white`}>
                {slide.included.title}
              </h3>
            </div>

            {/* Items */}
            <ul className="space-y-4">
              {slide.included.items.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white/10 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-lg text-white font-medium leading-relaxed transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Excluded */}
        <div className="animate-slide-in opacity-0" style={{ animationDelay: '150ms', animationFillMode: 'forwards' }}>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border-2 border-white/30 h-full">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8 pb-6 border-b-2 border-white/20">
              <div className="w-14 h-14 bg-gradient-to-br from-gray-400 to-gray-600 rounded-xl flex items-center justify-center shadow-lg">
                <XCircle className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              <h3 className={`${typography.h3} text-white`}>
                {slide.excluded.title}
              </h3>
            </div>

            {/* Items */}
            <ul className="space-y-4">
              {slide.excluded.items.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white/10 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center mt-0.5">
                    <XCircle className="w-5 h-5 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-lg text-white font-medium leading-relaxed transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ScopeExclusionsSlide;
