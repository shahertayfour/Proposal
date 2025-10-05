import React, { useState } from 'react';
import { CheckCircle2, XCircle, Info, ChevronDown } from 'lucide-react';

/**
 * Scope & Exclusions Slide - Slide 5
 * Interactive design with expandable scope details
 */
const ScopeExclusionsSlide = ({ slide }) => {
  const [expandedIncluded, setExpandedIncluded] = useState(null);
  const [expandedExcluded, setExpandedExcluded] = useState(null);

  // Detailed explanations for included items
  const includedDetails = [
    "Full lifecycle from requirements gathering through deployment, including security hardening, performance optimization, and multi-environment testing",
    "Industry-standard IDEs, frameworks, libraries, and specialized tools for AI/ML, cybersecurity, and cloud development—all pre-configured and version-controlled",
    "Automated snapshot management, rollback procedures, disaster recovery protocols, and self-healing mechanisms with comprehensive monitoring",
    "End-to-end testing framework including unit tests, integration tests, security scans, and user acceptance testing with documented test cases",
    "Detailed architecture diagrams, API documentation, configuration guides, runbooks, and hands-on training workshops with certification"
  ];

  // Rationale for excluded items
  const excludedDetails = [
    "Infrastructure hosting and maintenance remains with ADGM Academy—we deliver the platform, you control the environment",
    "Physical space upgrades and equipment procurement are outside technical platform scope—focuses on virtual infrastructure only",
    "Certification systems remain isolated and unchanged—we ensure complete separation to maintain exam integrity and compliance",
    "Stage 1 focuses on infrastructure delivery—instructor services covered separately under Stage 2 partnership agreement"
  ];

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

        <div className="grid md:grid-cols-2 gap-8 flex-1">
          {/* In Scope with interactive expandable items */}
          <div className="bg-white rounded-2xl p-10 border-2 border-green-100 hover:border-green-200 hover:shadow-xl transition-all duration-300 animate-slide-in opacity-0" style={{ animationDelay: '0ms', animationFillMode: 'forwards' }}>
            <div className="flex items-center gap-4 mb-8 pb-5 border-b-2 border-green-100">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <CheckCircle2 className="w-7 h-7 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                {slide.included.title}
              </h3>
            </div>

            <ul className="space-y-3">
              {slide.included.items.map((item, index) => {
                const isExpanded = expandedIncluded === index;
                return (
                  <li
                    key={index}
                    className={`group relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-500 ${
                      isExpanded
                        ? 'border-green-300 bg-green-50/70 shadow-md'
                        : 'border-green-50 hover:border-green-100 hover:bg-green-50/30'
                    }`}
                    onClick={() => setExpandedIncluded(isExpanded ? null : index)}
                  >
                    {/* Expand indicator */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        isExpanded ? 'text-green-600 rotate-180' : 'text-slate-400'
                      }`} />
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 transition-all duration-300 ${
                        isExpanded ? 'text-green-700 scale-110' : 'text-green-600'
                      }`} strokeWidth={2.5} />
                      <span className="text-base text-slate-700 leading-relaxed font-medium pr-6">{item}</span>
                    </div>

                    {/* Expandable Details */}
                    <div className={`overflow-hidden transition-all duration-500 ${
                      isExpanded ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="mt-4 pt-4 border-t-2 border-green-100 ml-8">
                        <p className="text-sm text-slate-600 leading-relaxed italic">
                          {includedDetails[index]}
                        </p>
                      </div>
                    </div>

                    {/* Click hint */}
                    <div className={`text-xs text-slate-400 mt-2 ml-8 flex items-center gap-1.5 transition-opacity duration-300 ${
                      isExpanded ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'
                    }`}>
                      <Info className="w-3 h-3" />
                      Click for details
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Out of Scope with interactive expandable items */}
          <div className="bg-white rounded-2xl p-10 border-2 border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 animate-slide-in opacity-0" style={{ animationDelay: '150ms', animationFillMode: 'forwards' }}>
            <div className="flex items-center gap-4 mb-8 pb-5 border-b-2 border-slate-200">
              <div className="w-14 h-14 bg-gradient-to-br from-slate-400 to-slate-500 rounded-xl flex items-center justify-center shadow-lg">
                <XCircle className="w-7 h-7 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                {slide.excluded.title}
              </h3>
            </div>

            <ul className="space-y-3">
              {slide.excluded.items.map((item, index) => {
                const isExpanded = expandedExcluded === index;
                return (
                  <li
                    key={index}
                    className={`group relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-500 ${
                      isExpanded
                        ? 'border-slate-300 bg-slate-50/70 shadow-md'
                        : 'border-slate-100 hover:border-slate-200 hover:bg-slate-50/30'
                    }`}
                    onClick={() => setExpandedExcluded(isExpanded ? null : index)}
                  >
                    {/* Expand indicator */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        isExpanded ? 'text-slate-600 rotate-180' : 'text-slate-400'
                      }`} />
                    </div>

                    <div className="flex items-start gap-3">
                      <XCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 transition-all duration-300 ${
                        isExpanded ? 'text-slate-700 scale-110' : 'text-slate-500'
                      }`} strokeWidth={2.5} />
                      <span className="text-base text-slate-700 leading-relaxed font-medium pr-6">{item}</span>
                    </div>

                    {/* Expandable Rationale */}
                    <div className={`overflow-hidden transition-all duration-500 ${
                      isExpanded ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="mt-4 pt-4 border-t-2 border-slate-100 ml-8">
                        <p className="text-sm text-slate-600 leading-relaxed italic">
                          {excludedDetails[index]}
                        </p>
                      </div>
                    </div>

                    {/* Click hint */}
                    <div className={`text-xs text-slate-400 mt-2 ml-8 flex items-center gap-1.5 transition-opacity duration-300 ${
                      isExpanded ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'
                    }`}>
                      <Info className="w-3 h-3" />
                      Click for rationale
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScopeExclusionsSlide;
