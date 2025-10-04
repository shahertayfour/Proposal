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
      className={`${colorVariants[color]} text-white p-6 rounded-lg transition-all duration-300 hover:scale-105 ${animationClass}`}
      style={style}
    >
      <div className="text-3xl font-bold mb-2">{number}</div>
      <h3 className="font-bold mb-3 text-lg">{title}</h3>
      <p className="text-sm opacity-90">{duration}</p>
    </div>
  );
};

export default TimelineBox;
