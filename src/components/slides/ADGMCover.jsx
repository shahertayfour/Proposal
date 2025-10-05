import React from 'react';
import { Code2 } from 'lucide-react';

/**
 * Cover Slide - Hero landing with gradient
 */
const ADGMCover = ({ slide }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-[#1B365D] via-[#2D4A7C] to-[#0EA5E9]">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-white rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#009A44] rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-20 max-w-7xl mx-auto">
        {/* Logos at top */}
        <div className="absolute top-12 left-20 right-20 flex items-center justify-between">
          <img
            src="/maharat_logo.png"
            alt="Maharat Logo"
            className="h-16 object-contain"
          />
          <div className="flex items-center gap-6">
            <span className="text-white/40 text-2xl font-light">×</span>
            <img
              src="/ADGM.png"
              alt="ADGM Academy Logo"
              className="h-16 object-contain"
            />
          </div>
        </div>

        {/* Icon accent */}
        <div className="mb-10">
          <Code2 className="w-20 h-20 text-[#009A44] opacity-90" strokeWidth={1.5} />
        </div>

        {/* Main title */}
        <h1 className="text-8xl font-bold text-white leading-tight mb-8 tracking-tight">
          {slide.title}
        </h1>

        {/* Subtitle with glass morphism */}
        <div className="inline-block max-w-fit bg-white/10 backdrop-blur-md px-10 py-5 rounded-2xl border border-white/20 mb-12">
          <p className="text-3xl text-white font-medium tracking-wide">
            {slide.subtitle}
          </p>
        </div>

        {/* Tagline */}
        <div className="mt-8 max-w-4xl">
          <p className="text-2xl text-[#0EA5E9] font-semibold tracking-wide">
            {slide.tagline}
          </p>
        </div>

        {/* Footer */}
        <div className="absolute bottom-16 left-20">
          <p className="text-base text-white/70 font-light tracking-wider">
            {slide.footer}
          </p>
        </div>

        {/* Slide number */}
        <div className="absolute bottom-16 right-20">
          <span className="text-white/50 text-sm font-light">01 / 05</span>
        </div>
      </div>
    </div>
  );
};

export default ADGMCover;
