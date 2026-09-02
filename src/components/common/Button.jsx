import React from 'react';

/**
 * Reusable Tactile Skeuomorphic Button
 * Variants: 'primary', 'secondary', 'icon', 'outline', 'emerald'
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  className = '',
  onClick,
  disabled = false,
  type = 'button',
  ariaLabel,
  ...props
}) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg font-bold',
    icon: 'p-3'
  }[size] || 'px-6 py-3 text-base';

  let variantStyle = 'neu-button-primary';
  if (variant === 'secondary') variantStyle = 'neu-button-secondary';
  if (variant === 'icon') variantStyle = 'neu-button-icon';
  if (variant === 'emerald') {
    variantStyle = 'neu-button-primary';
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`relative select-none outline-none cursor-pointer transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed ${variantStyle} ${sizeClasses} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon size={size === 'sm' ? 16 : 20} className="shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon size={size === 'sm' ? 16 : 20} className="shrink-0" />}
    </button>
  );
}
