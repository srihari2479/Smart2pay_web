import React from 'react';
import Badge from './Badge';

/**
 * Reusable Section Header with kicker badge, gradient headline, and descriptive subtitle
 */
export default function SectionHeader({
  badge,
  badgeIcon,
  badgeVariant = 'blue',
  title,
  highlightText,
  subtitle,
  align = 'center',
  className = ''
}) {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end'
  }[align] || 'text-center items-center';

  return (
    <div className={`flex flex-col ${alignClasses} max-w-3xl mx-auto mb-8 sm:mb-10 ${className}`}>
      {badge && (
        <div className="mb-4">
          <Badge variant={badgeVariant} icon={badgeIcon} pulse={badgeVariant === 'emerald'}>
            {badge}
          </Badge>
        </div>
      )}
      
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-[1.15] mb-4">
        {title}{' '}
        {highlightText && (
          <span className="gradient-text-blue block sm:inline">
            {highlightText}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
