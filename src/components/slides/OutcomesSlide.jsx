import React from 'react';
import { TrendingUp, Users, Zap } from 'lucide-react';

/**
 * Outcomes Slide - Slide 3
 * Premium professional design highlighting strategic impact
 */
const OutcomesSlide = ({ slide }) => {
  const outcomeIcons = [Zap, Users, TrendingUp];
  const gradients = [
    'from-blue-500 to-blue-600',
    'from-green-500 to-green-600',
    'from-purple-500 to-purple-600'
  ];

  return (
    <div className="relative w-full h-screen p-16 flex flex-col bg-gradient-to-br from-blue-50 via-slate-50/50 to-blue-50">
      {/* Content wrapper */}
      <div className="h-full flex flex-col max-w-6xl mx-auto w-full">
        {/* Header with enhanced typography */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-3 tracking-tight">
            {slide.title}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-blue1 to-primary-blue2 rounded-full mb-5" />
          <p className="text-xl text-slate-600 max-w-3xl font-medium">
            {slide.subtitle}
          </p>
        </div>

        {/* Outcomes list with premium styling */}
        <div className="space-y-6 flex-1">
          {slide.outcomes.map((outcome, index) => {
            const Icon = outcomeIcons[index % outcomeIcons.length];
            const gradient = gradients[index % gradients.length];

            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 border-2 border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 animate-slide-in opacity-0"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                <div className="flex items-center gap-6">
                  {/* Number with gradient */}
                  <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl font-bold text-white">{index + 1}</span>
                  </div>

                  {/* Content with improved typography */}
                  <p className="flex-1 text-lg text-slate-700 leading-relaxed font-medium">
                    {outcome}
                  </p>

                  {/* Icon with enhanced styling */}
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center group-hover:bg-slate-100 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-slate-500" strokeWidth={2.5} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OutcomesSlide;
