/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue1: '#286EE1',
          blue2: '#3459C8',
          blue3: '#4045AE',
        },
        accent: {
          purple1: '#4B3095',
          purple2: '#571B7C',
        },
        neutral: {
          dark1: '#1a1a2e',
          dark2: '#16213e',
          slate: '#334155',
          slateLight: '#64748b',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-in': 'slideIn 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-up': 'slideUp 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        glow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      boxShadow: {
        'premium': '0 20px 60px -15px rgba(0, 0, 0, 0.3), 0 10px 30px -10px rgba(0, 0, 0, 0.2)',
        'premium-lg': '0 30px 80px -20px rgba(0, 0, 0, 0.4), 0 15px 40px -15px rgba(0, 0, 0, 0.3)',
        'inner-premium': 'inset 0 2px 10px rgba(0, 0, 0, 0.1)',
        'glow-blue': '0 0 30px rgba(40, 110, 225, 0.4), 0 0 60px rgba(40, 110, 225, 0.2)',
        'glow-purple': '0 0 30px rgba(75, 48, 149, 0.4), 0 0 60px rgba(75, 48, 149, 0.2)',
      },
    },
  },
  plugins: [],
}
