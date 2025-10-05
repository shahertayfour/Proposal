import React from 'react';
import { Users, GraduationCap, UserCog } from 'lucide-react';

/**
 * User Experience Slide - Slide 7
 * Clean professional stakeholder experience showcase
 */
const UserExperienceSlide = ({ slide }) => {
  const stakeholderConfig = {
    blue: {
      icon: UserCog,
      gradient: 'from-primary-blue1 to-primary-blue2'
    },
    green: {
      icon: Users,
      gradient: 'from-green-500 to-green-600'
    },
    purple: {
      icon: GraduationCap,
      gradient: 'from-accent-purple1 to-accent-purple2'
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

          return (
            <div
              key={index}
              className="group bg-white rounded-2xl p-10 border-2 border-slate-100 flex flex-col animate-slide-in opacity-0 hover:border-slate-200 hover:shadow-xl transition-all duration-300"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'forwards'
              }}
            >
              {/* Icon with enhanced styling */}
              <div className={`w-16 h-16 bg-gradient-to-br ${config.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>

              {/* Role with improved typography */}
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {stakeholder.role}
              </h3>

              {/* Description with enhanced readability */}
              <p className="text-base text-slate-700 leading-relaxed flex-1">
                {stakeholder.description}
              </p>
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
};

export default UserExperienceSlide;
