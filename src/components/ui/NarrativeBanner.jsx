import React, { useEffect, useState } from 'react';
import { Quote } from 'lucide-react';

/**
 * Narrative Banner Component
 * Shows storytelling context at the top of each slide
 */
const NarrativeBanner = ({ narrative }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, [narrative]);

  if (!narrative) return null;

  return (
    <div
      className={`fixed top-24 left-1/2 -translate-x-1/2 z-20 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
      }`}
    >
      <div className="bg-gradient-to-r from-primary-blue1/95 to-accent-purple1/95 backdrop-blur-md text-white px-8 py-4 rounded-full shadow-xl border border-white/20 max-w-4xl">
        <div className="flex items-center gap-4">
          <Quote className="w-5 h-5 flex-shrink-0 text-white/80" />
          <p className="text-sm font-medium leading-relaxed italic">
            {narrative}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NarrativeBanner;
