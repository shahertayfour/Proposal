import React, { useState } from 'react';
import { Brain, Code, Globe, Info, Sparkles } from 'lucide-react';

/**
 * Pillars Slide - Slide 6
 * Premium interactive design with expandable program pillars
 */
const PillarsSlide = ({ slide }) => {
  const [expandedPillar, setExpandedPillar] = useState(null);

  const pillarConfig = {
    purple: {
      icon: Brain,
      gradient: 'from-accent-purple1 to-accent-purple2',
      bgLight: 'bg-purple-50',
      iconColor: '#4B3095',
      examples: [
        "Generative AI and prompt engineering fundamentals",
        "Machine learning model development and deployment",
        "Computer vision and natural language processing",
        "Ethical AI and responsible AI practices"
      ]
    },
    blue: {
      icon: Code,
      gradient: 'from-primary-blue1 to-primary-blue2',
      bgLight: 'bg-blue-50',
      iconColor: '#286EE1',
      examples: [
        "Modern web development (React, Next.js, Vue)",
        "Backend API development and microservices",
        "Mobile app development (iOS, Android, React Native)",
        "DevOps and CI/CD pipeline automation"
      ]
    },
    green: {
      icon: Globe,
      gradient: 'from-green-500 to-green-600',
      bgLight: 'bg-green-50',
      iconColor: '#10b981',
      examples: [
        "Digital transformation and business technology",
        "Cloud computing (AWS, Azure, GCP)",
        "IoT device programming and integration",
        "Enterprise security and compliance frameworks"
      ]
    }
  };

  return (
    <div className="relative w-full h-screen p-16 flex flex-col bg-gradient-to-br from-blue-50 via-slate-50/40 to-blue-50">
      {/* Content wrapper */}
      <div className="h-full flex flex-col max-w-6xl mx-auto w-full">
        {/* Header with enhanced styling */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-3 tracking-tight">
            {slide.title}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-blue1 to-primary-blue2 rounded-full" />
        </div>

        <div className="space-y-6 flex-1">
          {slide.pillars.map((pillar, index) => {
            const config = pillarConfig[pillar.color];
            const Icon = config.icon;
            const isExpanded = expandedPillar === index;

            return (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl p-10 border-2 cursor-pointer transition-all duration-500 animate-slide-in opacity-0 ${
                  isExpanded
                    ? 'border-slate-300 shadow-2xl scale-[1.02]'
                    : 'border-slate-100 hover:border-slate-200 hover:shadow-xl'
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'forwards'
                }}
                onClick={() => setExpandedPillar(isExpanded ? null : index)}
              >
                {/* Info indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    isExpanded ? 'bg-primary-blue1' : 'bg-slate-100'
                  }`}>
                    <Info className={`w-4 h-4 ${isExpanded ? 'text-white' : 'text-slate-400'}`} />
                  </div>
                </div>

                <div className="flex items-start gap-8">
                  {/* Icon with gradient background */}
                  <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${config.gradient} rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 ${
                    isExpanded ? 'scale-125 rotate-6' : 'group-hover:scale-110'
                  }`}>
                    <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      {pillar.description}
                    </p>

                    {/* Expandable Details */}
                    <div className={`overflow-hidden transition-all duration-500 ${
                      isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="mt-6 pt-6 border-t-2 border-slate-100">
                        <div className="flex items-center gap-2 mb-4">
                          <Sparkles className="w-4 h-4 text-yellow-500" />
                          <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wider">
                            Example Topics & Technologies
                          </h4>
                        </div>
                        <ul className="grid grid-cols-2 gap-3">
                          {config.examples.map((example, idx) => (
                            <li key={idx} className="flex items-start gap-2 animate-fade-in" style={{ animationDelay: `${idx * 50}ms` }}>
                              <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-primary-blue1 to-accent-purple1 mt-2" />
                              <span className="text-sm text-slate-600 leading-relaxed">{example}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Click hint */}
                <div className={`text-xs text-slate-400 mt-4 flex items-center gap-2 transition-opacity duration-300 ${
                  isExpanded ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'
                }`}>
                  <Info className="w-3 h-3" />
                  Click to see example topics
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 pt-8 border-t-2 border-slate-200">
          <p className="text-base text-slate-600 italic text-center font-medium">
            {slide.footer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PillarsSlide;
