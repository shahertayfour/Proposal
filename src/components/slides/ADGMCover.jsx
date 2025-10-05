import React from 'react';

/**
 * Cover Slide - Unified professional design
 */
const ADGMCover = ({ slide }) => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-[#1B365D] via-[#2D4A7C] to-[#1B365D]">
      {/* Decorative overlay pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#0EA5E9] rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-8 md:px-12 lg:px-20 max-w-6xl mx-auto">
        {/* Logos at top */}
        <div className="absolute top-8 sm:top-12 md:top-16 left-0 right-0 flex items-center justify-center gap-3 sm:gap-5 md:gap-8 px-4">
          <img
            src="/maharat_logo.png"
            alt="Maharat Logo"
            className="h-10 sm:h-14 md:h-16 lg:h-20 object-contain drop-shadow-2xl"
          />
          <div className="text-white/30 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-thin">×</div>
          <img
            src="/ADGM.png"
            alt="ADGM Academy Logo"
            className="h-10 sm:h-14 md:h-16 lg:h-20 object-contain drop-shadow-2xl brightness-0 invert"
          />
        </div>

        {/* Main title */}
        <div className="mb-6 sm:mb-8 md:mb-12 mt-20 sm:mt-24 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black text-white leading-tight mb-3 sm:mb-4 md:mb-6 tracking-tight drop-shadow-2xl px-2">
            {slide.title}
          </h1>
          <div className="flex justify-center mb-3 sm:mb-4 md:mb-6">
            <div className="w-20 sm:w-24 md:w-32 h-1 sm:h-1.5 md:h-2 bg-gradient-to-r from-[#0EA5E9] to-[#00B7FF] rounded-full shadow-lg"></div>
          </div>
          <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-white/95 font-light tracking-wide mb-2 sm:mb-3 md:mb-4 px-4">
            {slide.subtitle}
          </p>
        </div>

        {/* Tagline */}
        <div className="bg-white/15 backdrop-blur-lg border-2 border-white/30 rounded-xl sm:rounded-2xl px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 shadow-2xl max-w-4xl mx-4">
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-white font-medium leading-relaxed">
            {slide.tagline}
          </p>
        </div>

        {/* Footer */}
        <div className="absolute bottom-12 sm:bottom-16 md:bottom-20 left-0 right-0 px-4">
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/70 font-light tracking-wider">
            {slide.footer}
          </p>
        </div>

        {/* Slide number */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-8 md:right-20">
          <span className="text-white/40 text-xs sm:text-sm font-light">01 / 06</span>
        </div>
      </div>
    </div>
  );
};

export default ADGMCover;
