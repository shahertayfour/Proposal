import React, { useState } from 'react';
import { Shield, Target, BarChart3, CheckCircle, Info, ChevronDown } from 'lucide-react';

/**
 * Governance Slide - Slide 9
 * Interactive governance framework with expandable details
 */
const GovernanceSlide = ({ slide }) => {
  const [expandedSection, setExpandedSection] = useState(null);

  const sectionConfig = {
    blue: {
      icon: Target,
      gradient: 'from-primary-blue1 to-primary-blue2',
      details: [
        "Weekly sprint reviews with JIRA/Asana tracking",
        "Monthly executive steering committee updates",
        "Transparent milestone tracking with risk registry",
        "Change control board for scope modifications",
        "Escalation protocols for critical issues"
      ]
    },
    green: {
      icon: Shield,
      gradient: 'from-green-500 to-green-600',
      details: [
        "Air-gapped VM environments with no internet access",
        "Read-only golden image repositories with checksums",
        "Automated reset to pristine state in under 5 minutes",
        "Dual active-active network paths with failover",
        "Encrypted backups with 3-2-1 strategy (3 copies, 2 media, 1 offsite)"
      ]
    },
    purple: {
      icon: BarChart3,
      gradient: 'from-accent-purple1 to-accent-purple2',
      details: [
        "Infrastructure uptime SLA: 99.5% during training hours",
        "Student satisfaction: Target CSAT ≥ 4.5/5, NPS ≥ 50",
        "Program completion rate: ≥ 80% cohort graduation",
        "Career outcomes: 70% job placement within 6 months",
        "Quarterly business reviews with continuous improvement plans"
      ]
    }
  };

  return (
    <div className="relative w-full min-h-screen px-16 pt-16 pb-40 flex flex-col bg-gradient-to-br from-gray-50 via-slate-50/40 to-gray-50">
      {/* Content wrapper */}
      <div className="h-full flex flex-col max-w-7xl mx-auto w-full">
        {/* Header with enhanced styling */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-3 tracking-tight">
            {slide.title}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-blue1 to-primary-blue2 rounded-full" />
        </div>

      <div className="space-y-6">
        {slide.sections.map((section, index) => {
          const config = sectionConfig[section.color];
          const Icon = config.icon;
          const isExpanded = expandedSection === index;

          return (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl p-10 border-2 cursor-pointer transition-all duration-500 animate-slide-in opacity-0 ${
                isExpanded
                  ? 'border-slate-300 shadow-2xl scale-[1.01]'
                  : 'border-slate-100 hover:border-slate-200 hover:shadow-xl'
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'forwards'
              }}
              onClick={() => setExpandedSection(isExpanded ? null : index)}
            >
              {/* Info indicator */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  isExpanded ? 'bg-primary-blue1' : 'bg-slate-100'
                }`}>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                    isExpanded ? 'text-white rotate-180' : 'text-slate-400'
                  }`} />
                </div>
              </div>

              <div className="flex items-start gap-8">
                {/* Icon with premium styling */}
                <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${config.gradient} rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 ${
                  isExpanded ? 'scale-125 -rotate-6' : 'group-hover:scale-110'
                }`}>
                  <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>

                {/* Content with improved typography */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {section.title}
                  </h3>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    {section.content}
                  </p>

                  {/* Expandable Details */}
                  <div className={`overflow-hidden transition-all duration-500 ${
                    isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="mt-6 pt-6 border-t-2 border-slate-100">
                      <h4 className="text-sm font-bold text-primary-blue1 mb-4 uppercase tracking-wider">
                        Specific Measures
                      </h4>
                      <ul className="space-y-3">
                        {config.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: `${idx * 50}ms` }}>
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-slate-600 leading-relaxed">{detail}</span>
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
                    Click for specific measures
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
};

export default GovernanceSlide;
