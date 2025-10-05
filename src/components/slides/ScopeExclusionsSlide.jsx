import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

/**
 * Scope & Exclusions Slide - Slide 5
 * Premium professional design with clear visual hierarchy
 */
const ScopeExclusionsSlide = ({ slide }) => {
  return (
    <div className="relative w-full h-screen p-16 flex flex-col bg-gradient-to-br from-gray-50 via-slate-50/40 to-gray-50">
      {/* Content wrapper */}
      <div className="h-full flex flex-col max-w-7xl mx-auto w-full">
        {/* Header with enhanced styling */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-3 tracking-tight">
            {slide.title}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-blue1 to-primary-blue2 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 flex-1">
          {/* In Scope with premium styling */}
          <div className="bg-white rounded-2xl p-10 border-2 border-green-100 hover:border-green-200 hover:shadow-xl transition-all duration-300 animate-slide-in opacity-0" style={{ animationDelay: '0ms', animationFillMode: 'forwards' }}>
            <div className="flex items-center gap-4 mb-8 pb-5 border-b-2 border-green-100">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <CheckCircle2 className="w-7 h-7 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                {slide.included.title}
              </h3>
            </div>

            <ul className="space-y-4">
              {slide.included.items.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 p-3 rounded-xl hover:bg-green-50/50 transition-colors duration-200"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-base text-slate-700 leading-relaxed font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Out of Scope with premium styling */}
          <div className="bg-white rounded-2xl p-10 border-2 border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 animate-slide-in opacity-0" style={{ animationDelay: '150ms', animationFillMode: 'forwards' }}>
            <div className="flex items-center gap-4 mb-8 pb-5 border-b-2 border-slate-200">
              <div className="w-14 h-14 bg-gradient-to-br from-slate-400 to-slate-500 rounded-xl flex items-center justify-center shadow-lg">
                <XCircle className="w-7 h-7 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                {slide.excluded.title}
              </h3>
            </div>

            <ul className="space-y-4">
              {slide.excluded.items.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors duration-200"
                >
                  <XCircle className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-base text-slate-700 leading-relaxed font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScopeExclusionsSlide;
