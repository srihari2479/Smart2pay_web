import React from 'react';
import { useMouseTilt } from '../../hooks/useMouseTilt';

/**
 * Reusable Tactile Neumorphic Card with optional 3D tilt & glare
 */
export default function Card({
  children,
  className = '',
  tilt = true,
  maxTilt = 8,
  variant = 'raised', // 'raised' | 'sunken' | 'flat' | 'interactive'
  glow = false,
  glowColor = 'rgba(24, 86, 243, 0.25)',
  onClick,
  ...props
}) {
  const { tiltStyle, glareStyle, handleMouseMove, handleMouseLeave } = useMouseTilt(maxTilt);

  let variantClass = 'neu-raised';
  if (variant === 'sunken') variantClass = 'neu-sunken';
  if (variant === 'interactive') variantClass = 'neu-card-interactive';
  if (variant === 'flat') variantClass = 'bg-[#F0F4F8] border border-white/80 rounded-2xl';

  return (
    <div
      onClick={onClick}
      onMouseMove={tilt && variant !== 'sunken' ? handleMouseMove : undefined}
      onMouseLeave={tilt && variant !== 'sunken' ? handleMouseLeave : undefined}
      style={{
        ...(tilt && variant !== 'sunken' ? tiltStyle : {}),
        boxShadow: glow ? `var(--shadow-raised-md), 0 10px 30px -5px ${glowColor}` : undefined
      }}
      className={`relative p-6 sm:p-8 transition-all duration-300 ${variantClass} ${onClick ? 'cursor-pointer' : ''} ${className}`}
      {...props}
    >
      {/* Dynamic 3D Glare effect on mouse move */}
      {tilt && variant !== 'sunken' && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 opacity-0 hover:opacity-100"
          style={glareStyle}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
