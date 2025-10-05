import React, { useState } from 'react';
import TimelineBox from '../ui/TimelineBox';
import { Calendar } from 'lucide-react';

/**
 * Roadmap Slide - Slide 8
 * Interactive implementation timeline with expandable phases
 */
const RoadmapSlide = ({ slide }) => {
  const [expandedPhase, setExpandedPhase] = useState(null);

  // Detailed activities for each phase
  const phaseActivities = [
    [
      "Infrastructure audit and capacity planning",
      "Network topology design and VLAN configuration",
      "Hardware compatibility assessment and procurement",
      "Security architecture planning and compliance review",
      "Backup and disaster recovery strategy development"
    ],
    [
      "VM base image creation and hardening",
      "Development tools and software installation",
      "Network configuration and security implementation",
      "Automation scripts and orchestration setup",
      "Integration testing and performance tuning"
    ],
    [
      "Comprehensive functional testing across all VMs",
      "Security penetration testing and vulnerability assessment",
      "Load testing and scalability validation",
      "User acceptance testing (UAT) with pilot cohort",
      "Bug fixes and optimization based on feedback"
    ],
    [
      "Complete administrator and instructor guides",
      "Student onboarding and troubleshooting manuals",
      "Live training sessions for ADGM Academy staff",
      "Handover of all source code and configuration files",
      "Post-deployment support planning and SLA definition"
    ]
  ];

  return (
    <div className="relative w-full min-h-screen px-16 pt-16 pb-40 flex flex-col bg-gradient-to-br from-blue-50 via-slate-50/40 to-blue-50">
      {/* Content wrapper */}
      <div className="h-full flex flex-col max-w-7xl mx-auto w-full">
        {/* Header with enhanced styling */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-3 tracking-tight">
            {slide.title}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-blue1 to-primary-blue2 rounded-full" />
        </div>

      <div className="grid md:grid-cols-2 gap-8">
        {slide.phases.map((phase, index) => (
          <TimelineBox
            key={index}
            number={phase.number}
            title={phase.title}
            duration={phase.duration}
            color={phase.color}
            animate={true}
            delay={index * 100}
            activities={phaseActivities[index]}
            isExpanded={expandedPhase === index}
            onToggle={() => setExpandedPhase(expandedPhase === index ? null : index)}
          />
        ))}
      </div>

      {/* Total timeline with enhanced styling */}
      <div className="mt-12">
        <div className="bg-white rounded-2xl px-12 py-8 border-2 border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-center gap-6">
            <div className="w-14 h-14 bg-gradient-to-br from-primary-blue1 to-primary-blue2 rounded-2xl flex items-center justify-center shadow-lg">
              <Calendar className="w-7 h-7 text-white" strokeWidth={2.5} />
            </div>
            <p className="text-2xl font-bold text-slate-900">
              {slide.total}
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default RoadmapSlide;
