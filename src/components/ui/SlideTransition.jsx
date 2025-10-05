import React from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * Slide Transition Component
 * Creates story-driven connections between slides
 */
const SlideTransition = ({ currentSlide, nextSlide, onNext }) => {
  // Define transitions between slides
  const transitions = {
    0: {
      message: "Let's explore our strategic proposal",
      cta: "Begin Journey"
    },
    1: {
      message: "Discover the transformative impact",
      cta: "View Impact"
    },
    2: {
      message: "See our comprehensive solution",
      cta: "View Proposal"
    },
    3: {
      message: "Understand the scope",
      cta: "View Scope"
    },
    4: {
      message: "Explore our educational pillars",
      cta: "View Pillars"
    },
    5: {
      message: "See stakeholder value",
      cta: "View Experience"
    },
    6: {
      message: "Review our delivery timeline",
      cta: "View Roadmap"
    },
    7: {
      message: "Understand our governance",
      cta: "View Framework"
    },
    8: {
      message: "Review investment structure",
      cta: "View Commercial"
    },
    9: {
      message: "Envision the future together",
      cta: "View Vision"
    },
    10: {
      message: "Ready to begin?",
      cta: "Next Steps"
    }
  };

  const transition = transitions[currentSlide];
  if (!transition || !nextSlide) return null;

  return (
    <div className="fixed bottom-24 right-8 z-30 animate-fade-in">
      <button
        onClick={onNext}
        className="group bg-gradient-to-r from-primary-blue1 to-primary-blue2 text-white rounded-full px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3"
      >
        <span className="font-semibold text-sm">{transition.message}</span>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};

export default SlideTransition;
