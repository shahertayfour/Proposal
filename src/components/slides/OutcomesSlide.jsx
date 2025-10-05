import React, { useState } from 'react';
import { TrendingUp, Users, Zap, Info, CheckCircle } from 'lucide-react';

/**
 * Outcomes Slide - Slide 3
 * Premium interactive design with expandable outcomes
 */
const OutcomesSlide = ({ slide }) => {
  const [expandedCard, setExpandedCard] = useState(null);

  const outcomeIcons = [Zap, Users, TrendingUp];
  const gradients = [
    'from-blue-500 to-blue-600',
    'from-green-500 to-green-600',
    'from-purple-500 to-purple-600'
  ];

  const additionalDetails = [
    {
      title: "Program Diversity",
      points: [
        "AI & Machine Learning fundamentals to advanced applications",
        "Full-stack web development with modern frameworks",
        "Enterprise cybersecurity practices and penetration testing",
        "Network engineering and cloud infrastructure",
        "Robotic process automation and workflow optimization"
      ]
    },
    {
      title: "Platform Capabilities",
      points: [
        "Support for 12+ concurrent students per session",
        "Flexible scheduling for cohorts and workshops",
        "Integration with corporate training programs",
        "Hackathon and innovation challenge infrastructure",
        "Partnership activation and demo environments"
      ]
    },
    {
      title: "Operational Excellence",
      points: [
        "Streamlined program management and delivery",
        "Reduced administrative overhead for ADGM Academy",
        "Professional training delivery and student support",
        "Quality assurance and continuous improvement",
        "Comprehensive reporting and outcome tracking"
      ]
    }
  ];

  return (
    <div className="relative w-full h-screen p-16 flex flex-col bg-gradient-to-br from-blue-50 via-slate-50/50 to-blue-50">
      {/* Content wrapper */}
      <div className="h-full flex flex-col max-w-6xl mx-auto w-full">
        {/* Header with enhanced typography */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-3 tracking-tight">
            {slide.title}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-blue1 to-primary-blue2 rounded-full mb-5" />
          <p className="text-xl text-slate-600 max-w-3xl font-medium">
            {slide.subtitle}
          </p>
        </div>

        {/* Outcomes list with interactive expansion */}
        <div className="space-y-6 flex-1">
          {slide.outcomes.map((outcome, index) => {
            const Icon = outcomeIcons[index % outcomeIcons.length];
            const gradient = gradients[index % gradients.length];
            const isExpanded = expandedCard === index;
            const details = additionalDetails[index];

            return (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl p-8 border-2 cursor-pointer transition-all duration-500 animate-slide-in opacity-0 ${
                  isExpanded
                    ? 'border-slate-300 shadow-2xl scale-[1.02]'
                    : 'border-slate-100 hover:border-slate-200 hover:shadow-xl'
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'forwards'
                }}
                onClick={() => setExpandedCard(isExpanded ? null : index)}
              >
                {/* Info indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    isExpanded ? 'bg-primary-blue1' : 'bg-slate-100'
                  }`}>
                    <Info className={`w-4 h-4 ${isExpanded ? 'text-white' : 'text-slate-400'}`} />
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  {/* Number with gradient */}
                  <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 ${
                    isExpanded ? 'scale-125 -rotate-6' : 'group-hover:scale-110'
                  }`}>
                    <span className="text-2xl font-bold text-white">{index + 1}</span>
                  </div>

                  {/* Content with improved typography */}
                  <p className="flex-1 text-lg text-slate-700 leading-relaxed font-medium">
                    {outcome}
                  </p>

                  {/* Icon with enhanced styling */}
                  <div className={`flex-shrink-0 w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    isExpanded ? 'bg-green-50' : 'group-hover:bg-slate-100'
                  }`}>
                    <Icon className={`w-6 h-6 ${isExpanded ? 'text-green-600' : 'text-slate-500'}`} strokeWidth={2.5} />
                  </div>
                </div>

                {/* Expandable Details */}
                <div className={`overflow-hidden transition-all duration-500 ${
                  isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="mt-6 pt-6 border-t-2 border-slate-100">
                    <h4 className="text-sm font-bold text-primary-blue1 mb-4 uppercase tracking-wider">
                      {details.title}
                    </h4>
                    <ul className="space-y-3">
                      {details.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: `${idx * 50}ms` }}>
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-600 leading-relaxed">{point}</span>
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
                  Click to explore details
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OutcomesSlide;
