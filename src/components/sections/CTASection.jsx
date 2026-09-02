import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Smartphone, 
  Headphones,
  Zap,
  Star,
  Download,
  QrCode
} from 'lucide-react';
import confetti from 'canvas-confetti';
import Button from '../common/Button';
import Badge from '../common/Badge';
import { getAssetUrl } from '../../utils/assetHelper';

export default function CTASection({ onOpenDemoModal }) {
  const handleTriggerConfetti = () => {
    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.6 }
    });
    if (onOpenDemoModal) onOpenDemoModal();
  };

  return (
    <section id="cta" className="pt-6 pb-12 lg:pt-8 lg:pb-16 relative bg-[#F0F4F8] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        
        {/* Extruded Hero Banner Card */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#021838] via-[#052E66] to-[#0A3A80] text-white p-8 sm:p-12 lg:p-14 shadow-[0_12px_36px_-8px_rgba(4,38,86,0.22)] border border-white/25 overflow-hidden">
          
          {/* Ambient Lighting Flares */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#1856F3]/35 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#10B981]/25 rounded-full blur-3xl pointer-events-none" />
          
          {/* Subtle Cybernetic Grid Mesh Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col items-start">
              
              {/* Top Kicker Pill */}
              <div className="mb-4">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#38BDF8] text-xs font-black border border-white/20 backdrop-blur-md shadow-xs">
                  <Sparkles size={14} className="text-[#38BDF8]" /> Instant Activation Available
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12] mb-4">
                Ready to Upgrade to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-[#93C5FD]">
                  Smart2Pay
                </span>{' '}
                Infrastructure?
              </h2>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-200/90 leading-relaxed mb-8 max-w-xl font-medium">
                Join thousands of merchants, educational institutions, and enterprises leveraging automated multi-bank routing, instant T+0 settlements, and zero reconciliation overhead.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <button
                  onClick={handleTriggerConfetti}
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-gradient-to-r from-[#1856F3] to-[#0284C7] hover:from-[#0D45D6] hover:to-[#0369A1] text-white font-black text-base shadow-[0_4px_16px_rgba(24,86,243,0.22)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 border border-white/30 cursor-pointer"
                >
                  <span>Create Merchant Account</span>
                  <ArrowRight size={18} />
                </button>

                <a
                  href="tel:+918886317755"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm sm:text-base border border-white/20 backdrop-blur-md shadow-xs hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="w-7 h-7 rounded-lg bg-white/15 flex items-center justify-center text-[#38BDF8]">
                    <Headphones size={15} />
                  </div>
                  <span>+91 8886317755</span>
                </a>
              </div>

              {/* Value Proposition Badge Chips */}
              <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-bold text-white/90">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm">
                  <CheckCircle2 size={14} className="text-[#10B981]" /> Paperless 60s KYB
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm">
                  <CheckCircle2 size={14} className="text-[#10B981]" /> Zero Setup Fee
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm">
                  <CheckCircle2 size={14} className="text-[#10B981]" /> T+0 Instant Payouts
                </span>
              </div>
            </div>

            {/* Right Column: Skeuomorphic App Showcase Card */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center">
              
              <div className="bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#EEF2F6] text-[#0F172A] p-6 sm:p-7 rounded-3xl border border-white shadow-[0_6px_20px_rgba(0,0,0,0.12)] w-full max-w-sm flex flex-col items-center text-center relative group">
                
                {/* 3D App Icon Monogram Tile */}
                <div className="w-18 h-18 rounded-2xl bg-gradient-to-br from-[#042656] to-[#0A3A80] p-3 mx-auto mb-3 shadow-[0_4px_12px_rgba(4,38,86,0.18)] border border-white/40 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-200">
                  <img
                    src={getAssetUrl('assets/logo/smart2pay_monogram.png')}
                    alt="Smart2Pay"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* App Title & Subtitle */}
                <h4 className="font-black text-[#042656] text-lg sm:text-xl tracking-tight mb-0.5">
                  Smart2Pay Business
                </h4>
                <p className="text-xs font-semibold text-[#64748B] mb-2.5">
                  Merchant POS, Soundbox & Ledger App
                </p>

                {/* Rating Badge */}
                <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FEF3C7] border border-amber-200/70 text-amber-800 text-[11px] font-black mb-5 shadow-xs">
                  <Star size={12} className="text-amber-500 fill-amber-500" />
                  <span>4.9 / 5.0 Rating • 10K+ Merchants</span>
                </div>

                {/* Dual Store Action Buttons (Pill Buttons matching reference) */}
                <div className="w-full space-y-3">
                  
                  {/* Google Play Store Pill Button */}
                  <a
                    href="https://play.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-3.5 py-3 px-6 rounded-full bg-[#042656] hover:bg-[#07387A] text-white font-bold text-xs shadow-[0_2px_8px_rgba(4,38,86,0.18)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 border border-white/20 cursor-pointer"
                  >
                    <img
                      src={getAssetUrl('assets/icons/playstore_logo.png')}
                      alt="Google Play"
                      className="w-5 h-5 object-contain shrink-0"
                    />
                    <div className="text-left">
                      <span className="block text-[9.5px] uppercase tracking-wider text-slate-300 font-bold leading-none">
                        GET IT ON
                      </span>
                      <span className="block text-sm font-black text-white leading-tight">
                        Google Play
                      </span>
                    </div>
                  </a>

                  {/* Apple App Store Pill Button */}
                  <a
                    href="https://apple.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-3.5 py-3 px-6 rounded-full bg-[#042656] hover:bg-[#07387A] text-white font-bold text-xs shadow-[0_2px_8px_rgba(4,38,86,0.18)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 border border-white/20 cursor-pointer"
                  >
                    <svg className="w-5 h-5 fill-current text-white shrink-0" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.86c.62-.75 1.04-1.8 0.92-2.86-.9.04-2 .6-2.65 1.36-.58.66-1.09 1.74-.96 2.76 1.02.08 2.07-.51 2.69-1.26z"/>
                    </svg>
                    <div className="text-left">
                      <span className="block text-[9.5px] uppercase tracking-wider text-slate-300 font-bold leading-none">
                        DOWNLOAD ON THE
                      </span>
                      <span className="block text-sm font-black text-white leading-tight">
                        App Store
                      </span>
                    </div>
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
