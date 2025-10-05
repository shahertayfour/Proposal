import React from 'react';
import { DollarSign, CreditCard, Star } from 'lucide-react';

/**
 * Commercial Slide - Slide 10
 * Clean professional commercial overview
 */
const CommercialSlide = ({ slide }) => {
  const sectionConfig = {
    blue: {
      icon: DollarSign,
      gradient: 'from-primary-blue1 to-primary-blue2'
    },
    green: {
      icon: CreditCard,
      gradient: 'from-green-500 to-green-600'
    },
    purple: {
      icon: Star,
      gradient: 'from-accent-purple1 to-accent-purple2'
    }
  };

  return (
    <div className="relative w-full h-screen p-16 flex flex-col bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      {/* Content wrapper */}
      <div className="h-full flex flex-col max-w-7xl mx-auto w-full">
        {/* Header with enhanced styling */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-3 tracking-tight">
            {slide.title}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-blue1 to-primary-blue2 rounded-full" />
        </div>

      <div className="space-y-6">
        {slide.sections.map((section, index) => {
          const config = sectionConfig[section.color];
          const Icon = config.icon;

          return (
            <div
              key={index}
              className="group bg-white rounded-2xl p-10 border-2 border-slate-100 animate-slide-in opacity-0 hover:border-slate-200 hover:shadow-xl transition-all duration-300"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <div className="flex items-start gap-8">
                {/* Icon with premium styling */}
                <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${config.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>

                {/* Content with improved typography */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {section.title}
                  </h3>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    {section.content}
                  </p>
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

export default CommercialSlide;
