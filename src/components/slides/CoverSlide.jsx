import React from 'react';
import { typography, spacing } from '../../styles/colors';

/**
 * Cover Slide - Slide 1
 * Full-page professional cover design
 */
const CoverSlide = ({ slide }) => {
  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-primary-blue1 via-primary-blue2 to-accent-purple1 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-accent-purple2/10 rounded-full blur-3xl" />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 h-full flex flex-col justify-between text-white px-16 py-12">
        {/* Top section - Logos */}
        <div className="flex items-center justify-between">
          <img
            src="/maharat_logo.png"
            alt="Maharat Logo"
            className="h-20 object-contain drop-shadow-2xl"
          />
          <img
            src="/ADGM.png"
            alt="ADGM Academy Logo"
            className="h-20 object-contain drop-shadow-2xl"
          />
        </div>

        {/* Main content - centered and expanded */}
        <div className="flex-1 flex flex-col items-center justify-center space-y-12 animate-fade-in">
          {/* Badge */}
          <div className="inline-block px-8 py-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 shadow-xl">
            <span className="text-base font-bold tracking-widest uppercase">Partnership Proposal 2025</span>
          </div>

          {/* Main title - extra large */}
          <h1 className="text-8xl md:text-9xl font-bold leading-none tracking-tight text-center max-w-6xl">
            {slide.title}
          </h1>

          {/* Divider */}
          <div className="flex items-center gap-6">
            <div className="h-px w-32 bg-white/50" />
            <div className="w-4 h-4 rounded-full bg-white/70 rotate-45" />
            <div className="h-px w-32 bg-white/50" />
          </div>

          {/* Subtitle */}
          <p className="text-4xl font-light leading-relaxed tracking-wide opacity-95 text-center max-w-5xl">
            {slide.subtitle}
          </p>
        </div>

        {/* Bottom section */}
        <div className="flex items-center justify-center gap-8 mb-20">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">Step 1</div>
            <div className="text-xs uppercase tracking-wide opacity-80">Lab Setup</div>
          </div>
          <div className="w-px h-16 bg-white/30" />
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">Step 2</div>
            <div className="text-xs uppercase tracking-wide opacity-80">Launch School of Coding</div>
          </div>
          <div className="w-px h-16 bg-white/30" />
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">2.5 Months</div>
            <div className="text-xs uppercase tracking-wide opacity-80">Timeline</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverSlide;
