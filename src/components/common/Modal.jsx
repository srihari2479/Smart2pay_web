import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import Button from './Button';

/**
 * Accessible Tactile Modal dialog with backdrop blur & smooth zoom
 */
export default function Modal({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  maxWidth = 'max-w-lg'
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#042656]/40 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div
        role="dialog"
        aria-modal="true"
        className={`relative w-full ${maxWidth} bg-[#F0F4F8] border border-white/80 rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(4,38,86,0.35)] z-10 my-8 transition-all transform scale-100`}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-6 pb-4 border-b border-[#E2E8F0]">
          <div>
            {title && (
              <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="text-sm text-[#64748B] mt-1">
                {subtitle}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-10 h-10 rounded-full bg-white/80 border border-white flex items-center justify-center text-[#64748B] hover:text-[#0F172A] hover:bg-white shadow-[2px_2px_6px_rgba(163,177,198,0.4)] transition-all cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body Content */}
        <div className="relative text-[#334155]">{children}</div>
      </div>
    </div>
  );
}
