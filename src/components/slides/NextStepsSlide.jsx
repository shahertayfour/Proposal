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
    <div className={`w-full h-full ${spacing.slide} flex flex-col bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30`}>
      {/* Header */}
      <div className="mb-12">
        <div className="inline-block">
          <h2 className={`${typography.h2} text-neutral-dark1 relative`}>
            {slide.title}
            <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-primary-blue1 to-accent-purple1 rounded-full" />
          </h2>
        </div>
        <p className="text-xl text-neutral-slateLight mt-4">
          Your Roadmap to Success
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 flex-1">
        {slide.steps.map((step, index) => {
          const gradient = gradients[index % gradients.length];

          return (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-blue-100 hover:border-primary-blue1 animate-slide-in opacity-0"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'forwards'
              }}
            >
              {/* Number Badge */}
              <div className={`absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl shadow-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                <span className="text-3xl font-bold text-white">
                  {step.number}
                </span>
              </div>

              {/* Checkmark icon */}
              <div className="absolute top-4 right-4">
                <CheckCircle2 className="w-8 h-8 text-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="pt-6 pl-4">
                <p className="text-xl text-neutral-dark1 leading-relaxed font-medium">
                  {step.content}
                </p>
              </div>

              {/* Arrow indicator */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="w-6 h-6 text-primary-blue1" />
              </div>

              {/* Bottom gradient bar */}
              <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${gradient} rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
            </div>
          );
        })}
      </div>

      {/* Call to Action */}
      <div className="mt-12 pt-8">
        <div className="bg-gradient-to-r from-primary-blue1 to-accent-purple1 rounded-2xl p-8 shadow-2xl text-center">
          <p className="text-3xl font-bold text-white mb-2">
            Ready to Transform Education Together?
          </p>
          <p className="text-xl text-white/90">
            Let's build the future of tech education in the UAE
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-primary-blue1/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-accent-purple1/10 to-transparent rounded-full blur-3xl pointer-events-none" />
    </div>
  );
};

export default NextStepsSlide;
