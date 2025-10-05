import React, { useState } from 'react';
import { FileText, Eye, EyeOff, Shield, Users, Briefcase } from 'lucide-react';

/**
 * Password Protection Component - Maharat Proposal Hub
 * Multi-proposal authentication system
 */
const PasswordProtection = ({ onAuthenticate }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  // Multi-proposal password system
  // Each password redirects to a different proposal
  const PROPOSAL_PASSWORDS = {
    'Osama-6-10!': 'adgm', // ADGM Academy proposal
    // Add more passwords for future proposals here
    // 'client2-pass': 'client2',
    // 'client3-pass': 'client3',
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (PROPOSAL_PASSWORDS[password]) {
      setError(false);
      onAuthenticate(true);
      // Future: redirect to different proposals based on password
      // const proposalId = PROPOSAL_PASSWORDS[password];
    } else {
      setError(true);
      setPassword('');
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-white">
      {/* Header with Maharat Branding */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#1B365D] via-[#2D4A7C] to-[#1B365D] py-4 sm:py-6 px-4 sm:px-8 shadow-lg z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <img
              src="/maharat_logo.png"
              alt="Maharat"
              className="h-8 sm:h-10 md:h-12 object-contain drop-shadow-lg"
            />
            <div className="hidden sm:block w-px h-8 bg-white/30"></div>
            <div className="hidden sm:block">
              <p className="text-white text-xs sm:text-sm font-semibold">Proposal Hub</p>
              <p className="text-white/70 text-[0.65rem] sm:text-xs">Secure Client Access</p>
            </div>
          </div>
          <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white/50" strokeWidth={2} />
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0EA5E9] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#1B365D] rounded-full blur-3xl"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 pt-20 sm:pt-24">
        {/* Icon */}
        <div className="mb-6 sm:mb-8">
          <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-[#0EA5E9] to-[#00B7FF] rounded-xl sm:rounded-2xl flex items-center justify-center shadow-2xl">
            <FileText className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white" strokeWidth={2} />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1B365D] mb-2 sm:mb-3 tracking-tight text-center px-2">
          Client Proposal Access
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-[#4B5563] font-light mb-3 sm:mb-4 text-center px-2 max-w-2xl">
          Enter your unique access code to view your personalized proposal
        </p>

        {/* Stats - Multiple Proposals Indicator */}
        <div className="flex items-center gap-4 sm:gap-6 mb-8 sm:mb-10">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#0EA5E9]" strokeWidth={2} />
            <span className="text-xs sm:text-sm text-[#4B5563] font-medium">50+ Partners</span>
          </div>
          <div className="w-px h-4 bg-gray-300"></div>
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-[#0EA5E9]" strokeWidth={2} />
            <span className="text-xs sm:text-sm text-[#4B5563] font-medium">Multiple Proposals</span>
          </div>
        </div>

        {/* Password form */}
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-8 shadow-2xl">
            <div className="mb-5">
              <label className="block text-xs sm:text-sm font-semibold text-[#1B365D] mb-2">
                Access Code
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError(false);
                  }}
                  placeholder="Enter your access code"
                  className={`w-full px-4 py-3 sm:px-5 sm:py-3.5 md:px-6 md:py-4 bg-gray-50 rounded-lg sm:rounded-xl border-2 ${
                    error ? 'border-red-400 bg-red-50' : 'border-gray-200'
                  } focus:outline-none focus:border-[#0EA5E9] focus:bg-white text-base sm:text-lg font-medium text-[#1B365D] placeholder-gray-400 pr-10 sm:pr-12 transition-all`}
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#0EA5E9] transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" />
                  ) : (
                    <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                  )}
                </button>
              </div>
            </div>

            {error && (
              <div className="mb-4 bg-red-50 border-2 border-red-200 rounded-lg p-3">
                <p className="text-xs sm:text-sm text-red-700 text-center font-semibold">
                  Invalid access code. Please check and try again.
                </p>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#0EA5E9] to-[#00B7FF] text-white font-bold py-3.5 px-5 sm:py-4 sm:px-6 text-sm sm:text-base rounded-lg sm:rounded-xl hover:shadow-xl hover:scale-[1.02] transition-all duration-300 shadow-lg"
            >
              Access Your Proposal
            </button>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-[0.65rem] sm:text-xs text-gray-500 text-center">
                Each proposal has a unique access code provided by Maharat
              </p>
            </div>
          </div>
        </form>

        {/* Footer */}
        <div className="mt-8 sm:mt-10 md:mt-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-8 h-px bg-gray-300"></div>
            <Shield className="w-4 h-4 text-gray-400" strokeWidth={2} />
            <div className="w-8 h-px bg-gray-300"></div>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 text-center px-2 font-medium">
            Confidential & Secure • Maharat Skills Platform
          </p>
          <p className="text-[0.65rem] sm:text-xs text-gray-400 text-center px-2 mt-1">
            Empowering UAE talent through technology training
          </p>
        </div>
      </div>
    </div>
  );
};

export default PasswordProtection;
