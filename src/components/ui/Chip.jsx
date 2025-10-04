import React from 'react';

/**
 * Chip/Pill Component
 * Used for tags and "Including" sections
 */
const Chip = ({
  children,
  variant = 'blue',
  className = ''
}) => {
  const variants = {
    blue: 'bg-blue-100 text-blue-800',
    green: 'bg-green-100 text-green-800',
    purple: 'bg-purple-100 text-purple-800',
    amber: 'bg-amber-100 text-amber-800',
    gray: 'bg-gray-100 text-gray-800',
  };

  return (
    <span
      className={`px-4 py-2 rounded-full text-sm font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Chip;
