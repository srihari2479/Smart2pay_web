import React from 'react';
import { useMouseTilt } from '../../hooks/useMouseTilt';

/**
 * Reusable Tactile Neumorphic Card with zero-re-render high performance 3D tilt & glare
 */
export default function Card({
  children,
  className = '',
  tilt = true,
  maxTilt = 8,
  variant = 'raised', // 'raised' | 'sunken' | 'flat' | 'interactive'
  glow = false,
  glowColor = 'rgba(24, 86, 243, 0.16)',
  onClick,
  ...props
}) {
  const { cardRef, glareRef, handleMouseMove, handleMouseLeave } = useMouseTilt(maxTilt);

  let variantClass = 'neu-raised';
  if (variant === 'sunken') variantClass = 'neu-sunken';
  if (variant === 'interactive') variantClass = 'neu-card-interactive';
  if (variant === 'flat') variantClass = 'bg-[#F0F4F8] border border-white/80 rounded-2xl';

  const isTiltable = tilt && variant !== 'sunken';

  return (
    <div
      ref={isTiltable ? cardRef : null}
      onClick={onClick}
      onMouseMove={isTiltable ? handleMouseMove : undefined}
      onMouseLeave={isTiltable ? handleMouseLeave : undefined}
      style={{
        boxShadow: glow ? `var(--shadow-raised-md), 0 4px 16px ${glowColor}` : undefined
      }}
      className={`relative p-6 sm:p-8 transition-all duration-300 ${variantClass} ${onClick ? 'cursor-pointer' : ''} ${className}`}
      {...props}
    >
      {/* Dynamic 3D Glare effect on mouse move */}
      {isTiltable && (
        <div
          ref={glareRef}
          className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 opacity-0"
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
