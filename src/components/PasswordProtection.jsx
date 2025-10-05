import React, { useState } from 'react';
import { Lock, Eye, EyeOff } from 'lucide-react';

/**
 * Password Protection Component
 * Simple password gate to protect the presentation
 */
const PasswordProtection = ({ onAuthenticate }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  // Set your password here
  const CORRECT_PASSWORD = 'maharat2025';

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === CORRECT_PASSWORD) {
      setError(false);
      onAuthenticate(true);
    } else {
      setError(true);
      setPassword('');
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-[#1B365D] via-[#2D4A7C] to-[#1B365D]">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-white rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#0EA5E9] rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-8">
        {/* Lock icon */}
        <div className="mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-[#0EA5E9] to-[#00B7FF] rounded-2xl flex items-center justify-center shadow-2xl">
            <Lock className="w-10 h-10 text-white" strokeWidth={2} />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-5xl font-black text-white mb-3 tracking-tight text-center">
          Protected Presentation
        </h1>
        <p className="text-xl text-white/80 font-light mb-12 text-center">
          Please enter the password to view this presentation
        </p>

        {/* Password form */}
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="bg-white/10 backdrop-blur-lg border-2 border-white/30 rounded-2xl p-8 shadow-2xl">
            <div className="relative mb-6">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                placeholder="Enter password"
                className={`w-full px-6 py-4 bg-white/90 rounded-xl border-2 ${
                  error ? 'border-red-400' : 'border-gray-200'
                } focus:outline-none focus:border-[#0EA5E9] text-lg font-medium text-[#1B365D] placeholder-gray-400 pr-12`}
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#0EA5E9] transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>

            {error && (
              <div className="mb-4 bg-red-500/20 border border-red-400 rounded-lg p-3">
                <p className="text-sm text-red-200 text-center font-medium">
                  Incorrect password. Please try again.
                </p>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#0EA5E9] to-[#00B7FF] text-white font-bold py-4 px-6 rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Access Presentation
            </button>
          </div>
        </form>

        {/* Footer */}
        <div className="mt-12">
          <p className="text-sm text-white/50 text-center">
            Maharat × ADGM Academy • Confidential
          </p>
        </div>
      </div>
    </div>
  );
};

export default PasswordProtection;
