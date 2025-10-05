import React from 'react';

/**
 * Timeline Box Component
 * Premium professional design for roadmap phases
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
    blue: {
      gradient: 'bg-gradient-to-br from-primary-blue1 to-primary-blue2',
      borderColor: '#286EE1'
    },
    green: {
      gradient: 'bg-gradient-to-br from-green-500 to-green-600',
      borderColor: '#10b981'
    },
    purple: {
      gradient: 'bg-gradient-to-br from-accent-purple1 to-accent-purple2',
      borderColor: '#4B3095'
    },
    amber: {
      gradient: 'bg-gradient-to-br from-amber-500 to-amber-600',
      borderColor: '#f59e0b'
    },
  };

  const config = colorVariants[color];

  const animationClass = animate
    ? `animate-slide-in opacity-0`
    : '';

  const style = animate
    ? { animationDelay: `${delay}ms`, animationFillMode: 'forwards' }
    : {};

  return (
    <div
      className={`group bg-white p-10 rounded-2xl border-2 border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 ${animationClass}`}
      style={style}
    >
      <div className="flex items-start gap-6 mb-4">
        <div className={`flex-shrink-0 w-14 h-14 ${config.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <div className="text-2xl font-bold text-white">{number}</div>
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-xl text-slate-900 mb-2">{title}</h3>
          <p className="text-base text-slate-700 font-medium">{duration}</p>
        </div>
      </div>
    </div>
  );
};

export default TimelineBox;
