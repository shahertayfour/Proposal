import React from 'react';
import { effects } from '../../styles/colors';

/**
 * Reusable Card Component
 * Used for color-coded sections throughout the presentation
 */
const Card = ({
  children,
  borderColor = 'border-gray-200',
  className = '',
  animate = false,
  delay = 0
}) => {
  const animationClass = animate
    ? `animate-fade-in opacity-0`
    : '';

  const style = animate
    ? { animationDelay: `${delay}ms`, animationFillMode: 'forwards' }
    : {};

  return (
    <div
      className={`${effects.card} ${effects.transition} ${borderColor} ${className} ${animationClass}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default Card;
