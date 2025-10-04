/**
 * Maharat Brand Colors
 * Easy to update for rebrand or white-label use
 */

export const colors = {
  primary: {
    blue1: '#286EE1',    // Vibrant blue - main brand
    blue2: '#3459C8',    // Royal blue - secondary
    blue3: '#4045AE',    // Deep blue - accents
  },
  accent: {
    purple1: '#4B3095',  // Purple - innovation
    purple2: '#571B7C',  // Dark purple - premium
  },
  neutral: {
    white: '#ffffff',
    dark1: '#1a1a2e',    // Near black
    dark2: '#16213e',    // Navy dark
    slate: '#334155',    // Text dark
    slateLight: '#64748b' // Text light
  },
  semantic: {
    success: '#10b981',
    warning: '#f59e0b',
    info: '#286EE1',
  }
};

export const gradients = {
  bluePurple: 'from-primary-blue1 via-primary-blue2 to-accent-purple1',
  blueLight: 'from-primary-blue1 to-primary-blue2',
  purpleDark: 'from-accent-purple1 to-accent-purple2',
  successLight: 'from-green-50 to-green-100',
  warningLight: 'from-amber-50 to-amber-100',
  infoLight: 'from-blue-50 to-blue-100',
};

export const typography = {
  h1: 'text-5xl md:text-6xl font-bold tracking-tight',
  h2: 'text-3xl md:text-4xl font-bold',
  h3: 'text-xl md:text-2xl font-bold',
  body: 'text-lg leading-relaxed',
  small: 'text-sm',
  caption: 'text-xs',
};

export const spacing = {
  slide: 'p-12 md:p-16',
  section: 'space-y-8',
  element: 'space-y-4',
};

export const effects = {
  card: 'rounded-lg border-2 p-6',
  shadow: 'shadow-lg',
  gradient: 'bg-gradient-to-br',
  transition: 'transition-all duration-300',
  hover: 'hover:scale-[1.02] hover:shadow-xl',
};
