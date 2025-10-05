import React, { useState } from 'react';
import { CheckCircle2, Info, ChevronDown, Calendar, FileText, Users, Rocket } from 'lucide-react';

/**
 * Next Steps Slide - Slide 12
 * Interactive action items with expandable details
 */
const NextStepsSlide = ({ slide }) => {
  const [expandedStep, setExpandedStep] = useState(null);

  const gradients = [
    'from-primary-blue1 to-primary-blue2',
    'from-primary-blue2 to-accent-purple1',
    'from-accent-purple1 to-accent-purple2',
    'from-green-500 to-green-600'
  ];

  // Detailed actions for each step
  const stepDetails = [
    {
      icon: Calendar,
      actions: [
        "Schedule discovery call to discuss requirements and timeline",
        "Review proposal details and ask any clarifying questions",
        "Connect with key stakeholders at ADGM Academy",
        "Share feedback on proposal scope and deliverables"
      ]
    },
    {
      icon: FileText,
      actions: [
        "Receive formal contract documentation for review",
        "Legal and procurement team review of terms",
        "Address any contract modifications or questions",
        "Finalize payment terms and milestone schedule"
      ]
    },
    {
      icon: Users,
      actions: [
        "Introduce project teams and assign points of contact",
        "Schedule weekly status meetings and establish communication channels",
        "Provide access to ADGM infrastructure for assessment",
        "Align on project governance and decision-making process"
      ]
    },
    {
      icon: Rocket,
      actions: [
        "Week 1-3: Infrastructure assessment and architecture design",
        "Week 4-7: VM development, configuration, and testing",
        "Week 8: User acceptance testing and training delivery",
        "Week 9-10: Documentation handover and final deployment"
      ]
    }
  ];

  return (
    <div className="relative w-full min-h-screen px-16 pt-16 pb-40 flex flex-col bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      {/* Content wrapper */}
      <div className="h-full flex flex-col max-w-7xl mx-auto w-full">
        {/* Header with enhanced styling */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-3 tracking-tight">
            {slide.title}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-blue1 to-primary-blue2 rounded-full mb-5" />
          <p className="text-xl text-slate-600 font-medium">
            Your Roadmap to Success
          </p>
        </div>

      <div className="grid md:grid-cols-2 gap-8">
        {slide.steps.map((step, index) => {
          const gradient = gradients[index % gradients.length];
          const isExpanded = expandedStep === index;
          const details = stepDetails[index];
          const DetailIcon = details.icon;

          return (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl p-10 border-2 cursor-pointer transition-all duration-500 animate-slide-in opacity-0 ${
                isExpanded
                  ? 'border-slate-300 shadow-2xl scale-105'
                  : 'border-slate-100 hover:border-slate-200 hover:shadow-xl'
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'forwards'
              }}
              onClick={() => setExpandedStep(isExpanded ? null : index)}
            >
              {/* Expand indicator */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  isExpanded ? 'bg-primary-blue1' : 'bg-slate-100'
                }`}>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                    isExpanded ? 'text-white rotate-180' : 'text-slate-400'
                  }`} />
                </div>
              </div>

              {/* Number Badge with premium styling */}
              <div className="flex items-center gap-5 mb-6">
                <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 ${
                  isExpanded ? 'scale-125 -rotate-6' : 'group-hover:scale-110'
                }`}>
                  <span className="text-2xl font-bold text-white">
                    {step.number}
                  </span>
                </div>
                <CheckCircle2 className="w-6 h-6 text-green-500 ml-auto" strokeWidth={2.5} />
              </div>

              {/* Content with improved typography */}
              <p className="text-lg text-slate-700 leading-relaxed font-medium">
                {step.content}
              </p>

              {/* Expandable Actions */}
              <div className={`overflow-hidden transition-all duration-500 ${
                isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="mt-6 pt-6 border-t-2 border-slate-100">
                  <div className="flex items-center gap-3 mb-4">
                    <DetailIcon className="w-5 h-5 text-primary-blue1" />
                    <h4 className="text-sm font-bold text-primary-blue1 uppercase tracking-wider">
                      Action Items
                    </h4>
                  </div>
                  <ul className="space-y-3">
                    {details.actions.map((action, idx) => (
                      <li key={idx} className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: `${idx * 50}ms` }}>
                        <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary-blue1 mt-2" />
                        <span className="text-sm text-slate-600 leading-relaxed">{action}</span>
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
                Click for action items
              </div>
            </div>
          );
        })}
      </div>

      {/* Call to Action with premium styling */}
      <div className="mt-12">
        <div className="bg-white rounded-2xl px-14 py-12 border-2 border-slate-100 text-center hover:border-slate-200 hover:shadow-xl transition-all duration-300">
          <p className="text-3xl font-bold text-slate-900 mb-4">
            Ready to Transform Education Together?
          </p>
          <p className="text-lg text-slate-600 font-medium">
            Let's build the future of tech education in the UAE
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default NextStepsSlide;
