import React from 'react';
import { CheckCircle, Info, ChevronDown } from 'lucide-react';

/**
 * Timeline Box Component
 * Interactive design for roadmap phases with expandable details
 */
const TimelineBox = ({
  number,
  title,
  duration,
  color = 'blue',
  animate = false,
  delay = 0,
  activities = [],
  isExpanded = false,
  onToggle = null
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

  const isInteractive = onToggle && activities.length > 0;

  return (
    <div
      className={`group relative bg-white p-10 rounded-2xl border-2 transition-all duration-500 ${
        isExpanded
          ? 'border-slate-300 shadow-2xl scale-[1.02]'
          : 'border-slate-100 hover:border-slate-200 hover:shadow-xl'
      } ${animationClass} ${isInteractive ? 'cursor-pointer' : ''}`}
      style={style}
      onClick={isInteractive ? onToggle : undefined}
    >
      {/* Info indicator */}
      {isInteractive && (
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
            isExpanded ? 'bg-primary-blue1' : 'bg-slate-100'
          }`}>
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
              isExpanded ? 'text-white rotate-180' : 'text-slate-400'
            }`} />
          </div>
        </div>
      )}

      <div className="flex items-start gap-6 mb-4">
        <div className={`flex-shrink-0 w-14 h-14 ${config.gradient} rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 ${
          isExpanded ? 'scale-125 -rotate-6' : 'group-hover:scale-110'
        }`}>
          <div className="text-2xl font-bold text-white">{number}</div>
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-xl text-slate-900 mb-2">{title}</h3>
          <p className="text-base text-slate-700 font-medium">{duration}</p>
        </div>
      </div>

      {/* Expandable Activities */}
      {isInteractive && (
        <>
          <div className={`overflow-hidden transition-all duration-500 ${
            isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="mt-6 pt-6 border-t-2 border-slate-100">
              <h4 className="text-sm font-bold text-primary-blue1 mb-4 uppercase tracking-wider">
                Key Activities
              </h4>
              <ul className="space-y-3">
                {activities.map((activity, idx) => (
                  <li key={idx} className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: `${idx * 50}ms` }}>
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-600 leading-relaxed">{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Click hint */}
          <div className={`text-xs text-slate-400 mt-4 flex items-center gap-2 transition-opacity duration-300 ${
            isExpanded ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'
          }`}>
            <Info className="w-3 h-3" />
            Click to see activities
          </div>
        </>
      )}
    </div>
  );
};

export default TimelineBox;
