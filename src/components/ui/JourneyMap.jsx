import React, { useState } from 'react';
import { MapPin, Circle } from 'lucide-react';

/**
 * Journey Map Component
 * Visual storytelling arc showing presentation flow
 */
const JourneyMap = ({ currentSlide, slideData, onNavigate }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Define the story arc with milestones
  const journeyMilestones = [
    { slide: 0, label: "Start", phase: "Introduction", color: "blue" },
    { slide: 1, label: "Challenge", phase: "Understanding", color: "blue" },
    { slide: 3, label: "Solution", phase: "Our Approach", color: "green" },
    { slide: 6, label: "Value", phase: "Benefits", color: "purple" },
    { slide: 8, label: "Trust", phase: "Governance", color: "amber" },
    { slide: 10, label: "Vision", phase: "Future", color: "purple" },
    { slide: 11, label: "Action", phase: "Next Steps", color: "green" }
  ];

  const colorMap = {
    blue: 'from-primary-blue1 to-primary-blue2',
    green: 'from-green-500 to-green-600',
    purple: 'from-accent-purple1 to-accent-purple2',
    amber: 'from-amber-500 to-amber-600'
  };

  return (
    <div
      className="fixed left-8 top-1/2 -translate-y-1/2 z-30"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className={`transition-all duration-300 ${isExpanded ? 'w-64' : 'w-16'}`}>
        {/* Journey Path */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-blue1 via-accent-purple1 to-green-500" />

          {/* Milestones */}
          <div className="space-y-8">
            {journeyMilestones.map((milestone, index) => {
              const isActive = currentSlide === milestone.slide;
              const isPassed = currentSlide > milestone.slide;
              const isCurrent = currentSlide >= milestone.slide &&
                              (index === journeyMilestones.length - 1 ||
                               currentSlide < journeyMilestones[index + 1].slide);

              return (
                <button
                  key={index}
                  onClick={() => onNavigate(milestone.slide)}
                  className="relative group flex items-center gap-4 transition-all duration-300"
                >
                  {/* Milestone Dot */}
                  <div
                    className={`relative z-10 transition-all duration-300 ${
                      isActive
                        ? 'w-12 h-12'
                        : isCurrent
                        ? 'w-10 h-10'
                        : 'w-8 h-8'
                    }`}
                  >
                    <div
                      className={`w-full h-full rounded-full flex items-center justify-center transition-all duration-300 ${
                        isPassed || isActive
                          ? `bg-gradient-to-br ${colorMap[milestone.color]} shadow-lg`
                          : 'bg-slate-200'
                      }`}
                    >
                      {isPassed && !isActive ? (
                        <Circle className="w-4 h-4 text-white fill-current" />
                      ) : (
                        <MapPin className={`${isActive ? 'w-6 h-6' : 'w-4 h-4'} text-white`} />
                      )}
                    </div>

                    {/* Pulse effect for active */}
                    {isActive && (
                      <div className="absolute inset-0 rounded-full bg-primary-blue1 animate-ping opacity-25" />
                    )}
                  </div>

                  {/* Label (shows on hover) */}
                  <div
                    className={`transition-all duration-300 ${
                      isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}
                  >
                    <div className="bg-white rounded-lg px-4 py-2 shadow-lg border border-slate-200 whitespace-nowrap">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                        {milestone.phase}
                      </div>
                      <div className={`text-sm font-bold ${isActive ? 'text-primary-blue1' : 'text-slate-700'}`}>
                        {milestone.label}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Story Arc Label */}
        {isExpanded && (
          <div className="mt-8 pl-16 animate-fade-in">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Journey Map
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JourneyMap;
