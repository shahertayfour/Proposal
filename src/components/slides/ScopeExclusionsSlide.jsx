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

      <div className="grid md:grid-cols-2 gap-10 flex-1 group">
        {/* Included */}
        <div className="animate-slide-in opacity-0" style={{ animationDelay: '0ms', animationFillMode: 'forwards' }}>
          <div className="bg-white/12 backdrop-blur-lg rounded-3xl p-10 shadow-premium hover:shadow-premium-lg border-2 border-white/25 hover:border-white/50 hover:scale-[1.02] transition-all duration-700 h-full">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8 pb-6 border-b-2 border-white/20">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center shadow-premium group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <CheckCircle2 className="w-10 h-10 text-white" strokeWidth={3} />
              </div>
              <h3 className={`${typography.h3} text-white`} style={{ textShadow: '0 2px 12px rgba(0,0,0,0.15)', letterSpacing: '0.01em' }}>
                {slide.included.title}
              </h3>
            </div>

            {/* Items */}
            <ul className="space-y-7">
              {slide.included.items.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white/10 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-2xl text-white font-medium leading-relaxed transition-colors" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.15)', letterSpacing: '0.01em' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Excluded */}
        <div className="animate-slide-in opacity-0" style={{ animationDelay: '150ms', animationFillMode: 'forwards' }}>
          <div className="bg-white/12 backdrop-blur-lg rounded-3xl p-10 shadow-premium hover:shadow-premium-lg border-2 border-white/25 hover:border-white/50 hover:scale-[1.02] transition-all duration-700 h-full">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8 pb-6 border-b-2 border-white/20">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-400 to-gray-600 rounded-2xl flex items-center justify-center shadow-premium group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <XCircle className="w-10 h-10 text-white" strokeWidth={3} />
              </div>
              <h3 className={`${typography.h3} text-white`} style={{ textShadow: '0 2px 12px rgba(0,0,0,0.15)', letterSpacing: '0.01em' }}>
                {slide.excluded.title}
              </h3>
            </div>

            {/* Items */}
            <ul className="space-y-7">
              {slide.excluded.items.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white/10 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center mt-0.5">
                    <XCircle className="w-5 h-5 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-2xl text-white font-medium leading-relaxed transition-colors" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.15)', letterSpacing: '0.01em' }}>
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
