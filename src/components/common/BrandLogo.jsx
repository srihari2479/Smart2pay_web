import React from 'react';
import { getAssetUrl } from '../../utils/assetHelper';

/**
 * Official Smart2Pay Monogram Logo & Brand Wordmark
 */
export default function BrandLogo({ size = 42, className = '', showText = true, textDark = true }) {
  return (
    <div className={`flex items-center gap-3 select-none group ${className}`}>
      {/* Official Hexagonal Monogram Icon */}
      <div 
        className="rounded-2xl bg-[#042656] flex items-center justify-center p-1.5 shadow-[0_4px_12px_rgba(4,38,86,0.25)] border border-white/20 shrink-0 transition-transform duration-200 group-hover:scale-105 overflow-hidden"
        style={{ width: size, height: size }}
      >
        <img
          src={getAssetUrl('assets/logo/smart2pay_monogram.png')}
          alt="Smart2Pay Monogram"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Brand Wordmark & Subtitle */}
      {showText && (
        <div className="flex flex-col text-left">
          <div className="flex items-center tracking-tight">
            <span className={`font-extrabold text-xl sm:text-[22px] leading-none ${textDark ? 'text-[#042656]' : 'text-white'}`}>
              Smart
            </span>
            <span className="font-extrabold text-xl sm:text-[22px] leading-none text-[#1856F3]">
              2
            </span>
            <span className={`font-extrabold text-xl sm:text-[22px] leading-none ${textDark ? 'text-[#042656]' : 'text-white'}`}>
              Pay
            </span>
          </div>
          <span className={`text-[9px] font-extrabold tracking-[0.2em] uppercase mt-1 ${textDark ? 'text-[#64748B]' : 'text-white/70'}`}>
            FINTECH RAILS
          </span>
        </div>
      )}
    </div>
  );
}
