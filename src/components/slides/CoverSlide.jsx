import React from 'react';
import { Sparkles, ArrowRight, Award } from 'lucide-react';

/**
 * Cover Slide - Slide 1
 * Premium branded cover design with stunning visuals
 */
const CoverSlide = ({ slide }) => {
  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-primary-blue1 via-primary-blue2 to-accent-purple1 overflow-hidden">
      {/* Enhanced background with modern patterns */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-white/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '4s'}} />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-accent-purple2/20 rounded-full blur-3xl animate-pulse" style={{animationDuration: '5s', animationDelay: '1s'}} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl animate-pulse" style={{animationDuration: '6s'}} />

        {/* Modern dot grid pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />

        {/* Diagonal accent lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 via-transparent to-transparent"
               style={{transform: 'skewY(-12deg)', transformOrigin: 'top left'}} />
        </div>
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 h-full flex flex-col text-white px-16 py-16">
        {/* Top branding section - Logos with partnership symbol */}
        <div className="flex items-center justify-between animate-fade-in">
          <div className="flex items-center gap-4">
            <img
              src="/maharat_logo.png"
              alt="Maharat Logo"
              className="h-28 object-contain filter drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            />
            <div className="h-20 w-px bg-white/30" />
            <div className="flex flex-col gap-1">
              <Sparkles className="w-5 h-5 text-yellow-300" />
              <span className="text-xs font-bold uppercase tracking-widest text-white/80">Partnership</span>
            </div>
          </div>

          <img
            src="/ADGM.png"
            alt="ADGM Academy Logo"
            className="h-28 object-contain filter drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          />
        </div>

        {/* Main content - hero section */}
        <div className="flex-1 flex flex-col items-center justify-center -mt-12">
          {/* Premium badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/15 backdrop-blur-xl rounded-full border-2 border-white/30 shadow-2xl mb-12 animate-scale-in">
            <Award className="w-5 h-5 text-yellow-300" />
            <span className="text-sm font-bold tracking-[0.25em] uppercase text-white">
              Partnership Proposal 2025
            </span>
          </div>

          {/* Main title - massive and bold */}
          <h1 className="text-[7rem] font-black leading-[0.9] tracking-tight text-center max-w-6xl mb-8 animate-slide-up"
              style={{
                textShadow: '0 20px 60px rgba(0,0,0,0.4), 0 0 80px rgba(255,255,255,0.1)',
                letterSpacing: '-0.03em'
              }}>
            {slide.title}
          </h1>

          {/* Elegant separator */}
          <div className="flex items-center gap-6 mb-10 animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/60 to-white/60" />
            <div className="relative">
              <div className="w-3 h-3 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.6)]" />
              <div className="absolute inset-0 w-6 h-6 -m-1.5 rounded-full border-2 border-white/40 animate-ping" />
            </div>
            <div className="h-px w-32 bg-gradient-to-l from-transparent via-white/60 to-white/60" />
          </div>

          {/* Subtitle - compelling tagline */}
          <p className="text-2xl font-light leading-relaxed text-center max-w-4xl text-white/90 mb-16 animate-slide-up"
             style={{
               animationDelay: '0.4s',
               letterSpacing: '0.03em',
               textShadow: '0 4px 20px rgba(0,0,0,0.3)'
             }}>
            {slide.subtitle}
          </p>

          {/* Vision tagline with icon */}
          <div className="inline-flex items-center gap-4 px-10 py-5 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl animate-fade-in" style={{animationDelay: '0.5s'}}>
            <ArrowRight className="w-6 h-6 text-white" strokeWidth={2.5} />
            <span className="text-lg font-semibold text-white/95">
              {slide.tagline}
            </span>
          </div>
        </div>

        {/* Bottom info cards - key highlights */}
        <div className="flex items-center justify-center gap-8 pb-8 animate-slide-up" style={{animationDelay: '0.6s'}}>
          <div className="group relative px-12 py-6 rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/20 shadow-xl hover:bg-white/20 hover:scale-105 transition-all duration-500">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary-blue2 to-accent-purple2 text-xs font-bold uppercase tracking-wider">
              Stage 1
            </div>
            <div className="text-4xl font-black mb-2 text-white">Lab Setup</div>
            <div className="text-sm text-white/80 font-medium">Complete Infrastructure</div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="h-px w-20 bg-gradient-to-r from-white/40 to-white/40" />
            <ArrowRight className="w-6 h-6 text-white/60" />
            <div className="h-px w-20 bg-gradient-to-r from-white/40 to-white/40" />
          </div>

          <div className="group relative px-12 py-6 rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/20 shadow-xl hover:bg-white/20 hover:scale-105 transition-all duration-500">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-xs font-bold uppercase tracking-wider">
              Stage 2
            </div>
            <div className="text-4xl font-black mb-2 text-white">School Launch</div>
            <div className="text-sm text-white/80 font-medium">Partnership Delivery</div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="h-px w-20 bg-gradient-to-r from-white/40 to-white/40" />
            <Award className="w-6 h-6 text-yellow-300" />
            <div className="h-px w-20 bg-gradient-to-r from-white/40 to-white/40" />
          </div>

          <div className="group relative px-12 py-6 rounded-2xl bg-white/10 backdrop-blur-md border-2 border-white/20 shadow-xl hover:bg-white/20 hover:scale-105 transition-all duration-500">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-xs font-bold uppercase tracking-wider">
              Timeline
            </div>
            <div className="text-4xl font-black mb-2 text-white">8-10 Weeks</div>
            <div className="text-sm text-white/80 font-medium">To Production Ready</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverSlide;
