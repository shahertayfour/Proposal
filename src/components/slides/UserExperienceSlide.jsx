import React from 'react';
import { Users, GraduationCap, UserCog } from 'lucide-react';
import { typography, spacing } from '../../styles/colors';

/**
 * User Experience Slide - Slide 7
 * Enhanced three-column stakeholder view with icons
 */
const UserExperienceSlide = ({ slide }) => {
  const stakeholderConfig = {
    blue: {
      icon: UserCog,
      gradient: 'from-primary-blue1 to-primary-blue2',
      bg: 'from-blue-50 to-blue-100/60',
      border: 'border-primary-blue1',
      text: 'text-primary-blue1'
    },
    green: {
      icon: Users,
      gradient: 'from-green-500 to-green-600',
      bg: 'from-green-50 to-green-100/60',
      border: 'border-green-500',
      text: 'text-green-700'
    },
    purple: {
      icon: GraduationCap,
      gradient: 'from-accent-purple1 to-accent-purple2',
      bg: 'from-purple-50 to-purple-100/60',
      border: 'border-accent-purple1',
      text: 'text-accent-purple1'
    }
  };

  return (
    <div className={`relative w-full h-screen ${spacing.slide} flex flex-col bg-gradient-to-br from-primary-blue1 via-accent-purple1 to-accent-purple2 overflow-hidden`}>
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-accent-purple2/10 rounded-full blur-3xl" />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block">
            <h2 className={`${typography.h2} text-white relative`}>
              {slide.title}
              <div className="absolute -bottom-2 left-0 w-24 h-1 bg-white/50 rounded-full" />
            </h2>
          </div>
        </div>

      <div className="grid md:grid-cols-3 gap-10 flex-1">
        {slide.stakeholders.map((stakeholder, index) => {
          const config = stakeholderConfig[stakeholder.color];
          const Icon = config.icon;

          return (
            <div
              key={index}
              className={`group relative bg-white/12 backdrop-blur-lg rounded-3xl p-10 shadow-premium hover:shadow-premium-lg transition-all duration-700 border-2 border-white/25 hover:border-white/50 hover:scale-[1.02] flex flex-col animate-slide-in opacity-0`}
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'forwards'
              }}
            >
              {/* Icon */}
              <div className={`w-20 h-20 bg-gradient-to-br ${config.gradient} rounded-2xl flex items-center justify-center shadow-premium mb-6 transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500`}>
                <Icon className="w-10 h-10 text-white" strokeWidth={2.5} />
              </div>

              {/* Role */}
              <h3 className={`${typography.h3} text-white mb-4 font-bold`} style={{ textShadow: '0 2px 12px rgba(0,0,0,0.15)', letterSpacing: '0.01em' }}>
                {stakeholder.role}
              </h3>

              {/* Description */}
              <p className="text-2xl text-white/90 leading-relaxed flex-1" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.15)', letterSpacing: '0.01em' }}>
                {stakeholder.description}
              </p>

              {/* Decorative bottom bar */}
              <div className={`absolute bottom-0 left-0 right-0 h-2 bg-white/30 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
};

export default UserExperienceSlide;
