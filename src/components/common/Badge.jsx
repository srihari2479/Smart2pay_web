import React from 'react';

/**
 * Reusable Micro-pill Badge with subtle inner bevel & glow
 */
export default function Badge({
  children,
  variant = 'blue',
  icon: Icon,
  className = '',
  pulse = false
}) {
  const variantStyles = {
    blue: 'bg-[#EBF1FF] text-[#1856F3] border-[#1856F3]/20 shadow-[0_2px_8px_rgba(24,86,243,0.15)]',
    emerald: 'bg-[#D1FAE5] text-[#059669] border-[#10B981]/25 shadow-[0_2px_8px_rgba(16,185,129,0.15)]',
    gold: 'bg-[#FEF3C7] text-[#D97706] border-[#F59E0B]/25 shadow-[0_2px_8px_rgba(245,158,11,0.15)]',
    navy: 'bg-[#042656] text-[#FFFFFF] border-white/20 shadow-[0_4px_12px_rgba(4,38,86,0.25)]',
    neutral: 'bg-white/80 text-[#334155] border-white/90 shadow-[4px_4px_10px_rgba(163,177,198,0.35)]'
  }[variant] || 'bg-[#EBF1FF] text-[#1856F3] border-[#1856F3]/20';

  return (
    <span className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide border backdrop-blur-sm ${variantStyles} ${className}`}>
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-current"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-current"></span>
        </span>
      )}
      {Icon && <Icon size={14} className="shrink-0" />}
      {children}
    </span>
  );
}
