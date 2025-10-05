import React, { useState } from 'react';
import { Info } from 'lucide-react';

/**
 * Interactive Card Component with Hover Effects
 * Adds engaging hover states and optional tooltips
 */
const InteractiveCard = ({
  children,
  tooltip,
  hoverEffect = 'lift',
  className = ''
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const hoverEffects = {
    lift: 'hover:-translate-y-2 hover:shadow-2xl',
    glow: 'hover:shadow-2xl hover:shadow-primary-blue1/20',
    scale: 'hover:scale-105',
    border: 'hover:border-primary-blue1',
  };

  return (
    <div
      className={`relative transition-all duration-300 ${hoverEffects[hoverEffect]} ${className}`}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}

      {tooltip && (
        <>
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-6 h-6 bg-primary-blue1/10 rounded-full flex items-center justify-center">
              <Info className="w-4 h-4 text-primary-blue1" />
            </div>
          </div>

          {showTooltip && (
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full z-50 animate-fade-in">
              <div className="bg-slate-900 text-white text-sm px-4 py-2 rounded-lg shadow-xl whitespace-nowrap">
                {tooltip}
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1">
                  <div className="w-2 h-2 bg-slate-900 rotate-45" />
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default InteractiveCard;
