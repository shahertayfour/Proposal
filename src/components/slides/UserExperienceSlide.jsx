import React, { useState } from 'react';
import { Users, GraduationCap, UserCog, CheckCircle, Info } from 'lucide-react';

/**
 * User Experience Slide - Slide 7
 * Interactive stakeholder experience showcase with expandable benefits
 */
const UserExperienceSlide = ({ slide }) => {
  const [expandedCard, setExpandedCard] = useState(null);

  const stakeholderConfig = {
    blue: {
      icon: UserCog,
      gradient: 'from-primary-blue1 to-primary-blue2',
      benefits: [
        "Real-time program analytics and student progress dashboards",
        "Complete certification system isolation and audit compliance",
        "Strategic partnership ROI tracking and success metrics",
        "Comprehensive quarterly reporting and stakeholder updates",
        "Scalable infrastructure supporting future growth"
      ]
    },
    green: {
      icon: Users,
      gradient: 'from-green-500 to-green-600',
      benefits: [
        "One-click environment provisioning for lab sessions",
        "Instant student environment reset and recovery",
        "Pre-configured curriculum-aligned tool suites",
        "Flexible session scheduling and cohort management",
        "Dedicated technical support and troubleshooting assistance"
      ]
    },
    purple: {
      icon: GraduationCap,
      gradient: 'from-accent-purple1 to-accent-purple2',
      benefits: [
        "Industry-standard development tools and frameworks",
        "Hands-on projects with real-world applications",
        "Safe, isolated environments for experimentation",
        "Portfolio-ready projects and certifications",
        "Access to enterprise-grade cloud infrastructure"
      ]
    }
  };

  return (
    <div className="relative w-full h-screen p-16 flex flex-col bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      {/* Content wrapper */}
      <div className="h-full flex flex-col max-w-7xl mx-auto w-full">
        {/* Header with enhanced styling */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-3 tracking-tight">
            {slide.title}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-blue1 to-primary-blue2 rounded-full" />
        </div>

      <div className="grid md:grid-cols-3 gap-8">
        {slide.stakeholders.map((stakeholder, index) => {
          const config = stakeholderConfig[stakeholder.color];
          const Icon = config.icon;
          const isExpanded = expandedCard === index;

          return (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl p-10 border-2 flex flex-col cursor-pointer transition-all duration-500 animate-slide-in opacity-0 ${
                isExpanded
                  ? 'border-slate-300 shadow-2xl scale-105 z-10'
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

              {/* Icon with enhanced styling */}
              <div className={`w-16 h-16 bg-gradient-to-br ${config.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg transition-all duration-300 ${
                isExpanded ? 'scale-125 -rotate-6' : 'group-hover:scale-110'
              }`}>
                <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>

              {/* Role with improved typography */}
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {stakeholder.role}
              </h3>

              {/* Description with enhanced readability */}
              <p className="text-base text-slate-700 leading-relaxed">
                {stakeholder.description}
              </p>

              {/* Expandable Benefits */}
              <div className={`overflow-hidden transition-all duration-500 ${
                isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="mt-6 pt-6 border-t-2 border-slate-100">
                  <h4 className="text-sm font-bold text-primary-blue1 mb-4 uppercase tracking-wider">
                    Key Benefits
                  </h4>
                  <ul className="space-y-3">
                    {config.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: `${idx * 50}ms` }}>
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-600 leading-relaxed">{benefit}</span>
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
                Click to see benefits
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
};

export default UserExperienceSlide;
