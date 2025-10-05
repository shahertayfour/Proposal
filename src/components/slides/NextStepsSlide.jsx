import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { typography, spacing } from '../../styles/colors';

/**
 * Next Steps Slide - Slide 12
 * Enhanced action items with modern design and call-to-action
 */
const NextStepsSlide = ({ slide }) => {
  const gradients = [
    'from-primary-blue1 to-primary-blue2',
    'from-primary-blue2 to-accent-purple1',
    'from-accent-purple1 to-accent-purple2',
    'from-green-500 to-green-600'
  ];

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
          <p className="text-2xl text-white/80 mt-4" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.15)', letterSpacing: '0.01em' }}>
            Your Roadmap to Success
          </p>
        </div>

      <div className="grid md:grid-cols-2 gap-10 flex-1">
        {slide.steps.map((step, index) => {
          const gradient = gradients[index % gradients.length];

          return (
            <div
              key={index}
              className="group relative bg-white/12 backdrop-blur-lg rounded-3xl p-10 shadow-premium hover:shadow-premium-lg transition-all duration-700 border-2 border-white/25 hover:border-white/50 hover:scale-[1.02] animate-slide-in opacity-0"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'forwards'
              }}
            >
              {/* Number Badge */}
              <div className={`absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br ${gradient} rounded-2xl shadow-premium flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                <span className="text-4xl font-bold text-white" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.15)' }}>
                  {step.number}
                </span>
              </div>

              {/* Checkmark icon */}
              <div className="absolute top-4 right-4">
                <CheckCircle2 className="w-10 h-10 text-green-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500" strokeWidth={2.5} />
              </div>

              {/* Content */}
              <div className="pt-6 pl-4">
                <p className="text-2xl text-white leading-relaxed font-medium" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.15)', letterSpacing: '0.01em' }}>
                  {step.content}
                </p>
              </div>

              {/* Arrow indicator */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <ArrowRight className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>

              {/* Bottom gradient bar */}
              <div className={`absolute bottom-0 left-0 right-0 h-2 bg-white/30 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
            </div>
          );
        })}
      </div>

      {/* Call to Action */}
      <div className="mt-12 pt-8">
        <div className="bg-white/12 backdrop-blur-lg rounded-3xl p-10 shadow-premium hover:shadow-premium-lg text-center border-2 border-white/25 hover:border-white/50 transition-all duration-700">
          <p className="text-4xl font-bold text-white mb-2" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.15)', letterSpacing: '0.02em' }}>
            Ready to Transform Education Together?
          </p>
          <p className="text-2xl text-white/90" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.15)', letterSpacing: '0.01em' }}>
            Let's build the future of tech education in the UAE
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default NextStepsSlide;
