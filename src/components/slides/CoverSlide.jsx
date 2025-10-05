import React from 'react';
import { typography, spacing } from '../../styles/colors';

/**
 * Cover Slide - Slide 1
 * Full-page professional cover design
 */
const CoverSlide = ({ slide }) => {
  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-primary-blue1 via-primary-blue2 to-accent-purple1 overflow-hidden">
      {/* Background decorative elements with enhanced depth */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[1200px] h-[1200px] bg-white/5 rounded-full blur-3xl animate-glow" />
        <div className="absolute bottom-0 left-0 w-[900px] h-[900px] bg-accent-purple2/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-blue2/5 rounded-full blur-3xl" />
        {/* Grid pattern overlay for depth */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 h-full flex flex-col text-white px-16 py-12">
        {/* Top section - Logos with premium shadows */}
        <div className="flex items-center justify-between animate-fade-in">
          <img
            src="/maharat_logo.png"
            alt="Maharat Logo"
            className="h-24 object-contain filter drop-shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
          />
          <img
            src="/ADGM.png"
            alt="ADGM Academy Logo"
            className="h-24 object-contain filter drop-shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
          />
        </div>

        {/* Main content - centered and expanded */}
        <div className="flex-1 flex flex-col items-center justify-center space-y-16 -mt-16">
          {/* Badge with premium styling */}
          <div className="inline-block px-12 py-5 bg-white/15 backdrop-blur-lg rounded-full border-2 border-white/40 shadow-premium animate-scale-in">
            <span className="text-sm font-bold tracking-[0.3em] uppercase text-white/95" style={{letterSpacing: '0.3em'}}>
              Partnership Proposal 2025
            </span>
          </div>

          {/* Main title with enhanced typography */}
          <h1 className="text-8xl md:text-9xl font-bold leading-[0.95] tracking-tight text-center max-w-6xl animate-slide-up"
              style={{
                textShadow: '0 10px 40px rgba(0,0,0,0.3), 0 2px 10px rgba(0,0,0,0.2)',
                letterSpacing: '-0.02em'
              }}>
            {slide.title}
          </h1>

          {/* Refined divider with elegant design */}
          <div className="flex items-center gap-10 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="h-[2px] w-48 bg-gradient-to-r from-transparent via-white/70 to-transparent" />
            <div className="relative">
              <div className="w-4 h-4 rounded-full bg-white/90 shadow-glow-blue" />
              <div className="absolute inset-0 w-8 h-8 -m-2 rounded-full bg-white/20 animate-ping" />
            </div>
            <div className="h-[2px] w-48 bg-gradient-to-r from-transparent via-white/70 to-transparent" />
          </div>

          {/* Subtitle with premium typography */}
          <p className="text-3xl font-light leading-relaxed text-center max-w-5xl animate-slide-up text-white/95"
             style={{
               animationDelay: '0.3s',
               letterSpacing: '0.02em',
               textShadow: '0 4px 20px rgba(0,0,0,0.2)'
             }}>
            {slide.subtitle}
          </p>
        </div>

        {/* Bottom section with premium card design */}
        <div className="absolute left-0 right-0 bottom-0 top-0 flex items-center justify-center pointer-events-none">
          <div className="flex items-center justify-center gap-12 mt-[70vh] pointer-events-auto">
            <div className="group text-center px-10 py-7 rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/20 shadow-premium hover:bg-white/15 hover:shadow-premium-lg hover:scale-105 transition-all duration-500">
              <div className="text-5xl font-bold mb-3 bg-gradient-to-br from-white to-white/80 bg-clip-text text-transparent">Step 1</div>
              <div className="text-xs uppercase tracking-[0.25em] opacity-90 font-bold">Lab Setup</div>
            </div>
            <div className="w-[2px] h-24 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
            <div className="group text-center px-10 py-7 rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/20 shadow-premium hover:bg-white/15 hover:shadow-premium-lg hover:scale-105 transition-all duration-500">
              <div className="text-5xl font-bold mb-3 bg-gradient-to-br from-white to-white/80 bg-clip-text text-transparent">Step 2</div>
              <div className="text-xs uppercase tracking-[0.25em] opacity-90 font-bold">Launch School</div>
            </div>
            <div className="w-[2px] h-24 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
            <div className="group text-center px-10 py-7 rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/20 shadow-premium hover:bg-white/15 hover:shadow-premium-lg hover:scale-105 transition-all duration-500">
              <div className="text-5xl font-bold mb-3 bg-gradient-to-br from-white to-white/80 bg-clip-text text-transparent">8-10 Wks</div>
              <div className="text-xs uppercase tracking-[0.25em] opacity-90 font-bold">Timeline</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverSlide;
