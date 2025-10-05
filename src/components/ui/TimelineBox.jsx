import React from 'react';

/**
 * Timeline Box Component
 * Used for roadmap phases
 */
const TimelineBox = ({
  number,
  title,
  duration,
  color = 'blue',
  animate = false,
  delay = 0
}) => {
  const colorVariants = {
    blue: 'bg-gradient-to-br from-primary-blue1 to-primary-blue2',
    green: 'bg-gradient-to-br from-green-500 to-green-600',
    purple: 'bg-gradient-to-br from-accent-purple1 to-accent-purple2',
    amber: 'bg-gradient-to-br from-amber-500 to-amber-600',
  };

  const animationClass = animate
    ? `animate-slide-in opacity-0`
    : '';

  const style = animate
    ? { animationDelay: `${delay}ms`, animationFillMode: 'forwards' }
    : {};

  return (
    <div
      className={`${colorVariants[color]} text-white p-10 rounded-3xl shadow-premium hover:shadow-premium-lg border-2 border-white/25 hover:border-white/50 transition-all duration-700 hover:scale-[1.02] ${animationClass}`}
      style={style}
    >
      <div className="text-5xl font-bold mb-2" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.15)', letterSpacing: '0.02em' }}>{number}</div>
      <h3 className="font-bold mb-3 text-2xl" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.15)', letterSpacing: '0.01em' }}>{title}</h3>
      <p className="text-xl opacity-90" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.15)', letterSpacing: '0.01em' }}>{duration}</p>
    </div>
  );
};

export default TimelineBox;
