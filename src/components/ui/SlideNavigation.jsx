import React, { useState } from 'react';
import { Menu, X, Home, ChevronRight } from 'lucide-react';

/**
 * Interactive Navigation Menu Component
 * Premium slide navigation with hover functionality
 */
const SlideNavigation = ({ currentSlide, totalSlides, onNavigate, slideData }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Group slides by section
  const sections = [
    {
      title: "Introduction",
      slides: [0, 1, 2] // Cover, Executive Summary, Strategic Impact
    },
    {
      title: "Stage 1: Foundation",
      slides: [3, 4, 5] // Proposal, Scope, Pillars
    },
    {
      title: "Stakeholder Value",
      slides: [6, 7] // User Experience, Roadmap
    },
    {
      title: "Framework & Investment",
      slides: [8, 9] // Governance, Commercial
    },
    {
      title: "Future Vision",
      slides: [10, 11] // Vision, Next Steps
    }
  ];

  return (
    <>
      {/* Navigation Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-8 right-8 z-50 bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-slate-200 hover:border-primary-blue1 group"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-slate-700 group-hover:text-primary-blue1 transition-colors" />
        ) : (
          <Menu className="w-6 h-6 text-slate-700 group-hover:text-primary-blue1 transition-colors" />
        )}
      </button>

      {/* Navigation Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Navigation Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[500px] bg-white shadow-2xl z-40 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col p-8 overflow-y-auto">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">
              Table of Contents
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary-blue1 to-primary-blue2 rounded-full" />
          </div>

          {/* Progress */}
          <div className="mb-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-slate-600">Progress</span>
              <span className="text-sm font-bold text-primary-blue1">
                {Math.round((currentSlide / (totalSlides - 1)) * 100)}%
              </span>
            </div>
            <div className="w-full h-2 bg-white rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary-blue1 to-accent-purple1 transition-all duration-500"
                style={{ width: `${(currentSlide / (totalSlides - 1)) * 100}%` }}
              />
            </div>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            {sections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  {section.title}
                </h3>
                <div className="space-y-2">
                  {section.slides.map((slideIndex) => {
                    const slide = slideData[slideIndex];
                    const isActive = currentSlide === slideIndex;
                    const isCompleted = currentSlide > slideIndex;

                    return (
                      <button
                        key={slideIndex}
                        onClick={() => {
                          onNavigate(slideIndex);
                          setIsOpen(false);
                        }}
                        className={`w-full text-left p-4 rounded-xl transition-all duration-300 group ${
                          isActive
                            ? 'bg-gradient-to-r from-primary-blue1 to-primary-blue2 text-white shadow-lg'
                            : isCompleted
                            ? 'bg-green-50 hover:bg-green-100 text-slate-700'
                            : 'bg-slate-50 hover:bg-slate-100 text-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${
                              isActive
                                ? 'bg-white/20 text-white'
                                : isCompleted
                                ? 'bg-green-200 text-green-700'
                                : 'bg-slate-200 text-slate-600'
                            }`}
                          >
                            {slideIndex + 1}
                          </div>
                          <div className="flex-1">
                            <div className={`font-semibold text-sm ${isActive ? 'text-white' : ''}`}>
                              {slide.title}
                            </div>
                          </div>
                          {isActive && (
                            <ChevronRight className="w-5 h-5 text-white" />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SlideNavigation;
