import React, { useEffect, useState } from 'react';
import { Quote, Sparkles } from 'lucide-react';

/**
 * Enhanced Narrative Banner Component
 * Shows storytelling context with elegant animations
 */
const NarrativeBanner = ({ narrative }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsVisible(false);
    setIsAnimating(true);
    const showTimer = setTimeout(() => setIsVisible(true), 400);
    const animateTimer = setTimeout(() => setIsAnimating(false), 900);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(animateTimer);
    };
  }, [narrative]);

  if (!narrative) return null;

  return (
    <div
      className={`fixed top-20 left-1/2 -translate-x-1/2 z-20 transition-all duration-700 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 -translate-y-8 scale-95'
      }`}
    >
      <div className="relative">
        {/* Glow effect */}
        <div className={`absolute inset-0 bg-gradient-to-r from-primary-blue1/40 to-accent-purple1/40 rounded-full blur-xl transition-opacity duration-700 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`} />

        {/* Main banner */}
        <div className="relative bg-gradient-to-r from-primary-blue1 to-accent-purple1 backdrop-blur-md text-white px-10 py-5 rounded-2xl shadow-2xl border-2 border-white/30 max-w-4xl">
          <div className="flex items-center gap-4">
            {/* Animated quote icon */}
            <div className={`transition-all duration-500 ${isAnimating ? 'rotate-12 scale-110' : 'rotate-0 scale-100'}`}>
              <Quote className="w-6 h-6 flex-shrink-0 text-white/90" strokeWidth={2.5} />
            </div>

            {/* Quote text */}
            <p className="text-base font-medium leading-relaxed italic text-white/95">
              {narrative}
            </p>

            {/* Sparkle decoration */}
            <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 rotate-0' : 'opacity-0 rotate-180'}`}>
              <Sparkles className="w-5 h-5 flex-shrink-0 text-yellow-300/80" strokeWidth={2} />
            </div>
          </div>

          {/* Subtle bottom accent */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-b-2xl" />
        </div>
      </div>
    </div>
  );
};

export default NarrativeBanner;
