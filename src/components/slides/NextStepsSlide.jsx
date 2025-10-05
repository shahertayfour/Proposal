import React from 'react';
import { CheckCircle2 } from 'lucide-react';

/**
 * Next Steps Slide - Slide 12
 * Clean professional action items with call-to-action
 */
const NextStepsSlide = ({ slide }) => {
  const gradients = [
    'from-primary-blue1 to-primary-blue2',
    'from-primary-blue2 to-accent-purple1',
    'from-accent-purple1 to-accent-purple2',
    'from-green-500 to-green-600'
  ];

  return (
    <div className="relative w-full h-screen p-16 flex flex-col bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      {/* Content wrapper */}
      <div className="h-full flex flex-col max-w-7xl mx-auto w-full">
        {/* Header with enhanced styling */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-3 tracking-tight">
            {slide.title}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-blue1 to-primary-blue2 rounded-full mb-5" />
          <p className="text-xl text-slate-600 font-medium">
            Your Roadmap to Success
          </p>
        </div>

      <div className="grid md:grid-cols-2 gap-8">
        {slide.steps.map((step, index) => {
          const gradient = gradients[index % gradients.length];

          return (
            <div
              key={index}
              className="group bg-white rounded-2xl p-10 border-2 border-slate-100 animate-slide-in opacity-0 hover:border-slate-200 hover:shadow-xl transition-all duration-300"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'forwards'
              }}
            >
              {/* Number Badge with premium styling */}
              <div className="flex items-center gap-5 mb-6">
                <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl font-bold text-white">
                    {step.number}
                  </span>
                </div>
                <CheckCircle2 className="w-6 h-6 text-green-500 ml-auto" strokeWidth={2.5} />
              </div>

              {/* Content with improved typography */}
              <p className="text-lg text-slate-700 leading-relaxed font-medium">
                {step.content}
              </p>
            </div>
          );
        })}
      </div>

      {/* Call to Action with premium styling */}
      <div className="mt-12">
        <div className="bg-white rounded-2xl px-14 py-12 border-2 border-slate-100 text-center hover:border-slate-200 hover:shadow-xl transition-all duration-300">
          <p className="text-3xl font-bold text-slate-900 mb-4">
            Ready to Transform Education Together?
          </p>
          <p className="text-lg text-slate-600 font-medium">
            Let's build the future of tech education in the UAE
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default NextStepsSlide;
