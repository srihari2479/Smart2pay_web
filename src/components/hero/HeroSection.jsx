import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Sparkles, 
  CreditCard, 
  TrendingUp, 
  CheckCircle2, 
  Activity,
  Play
} from 'lucide-react';
import confetti from 'canvas-confetti';
import Button from '../common/Button';
import Badge from '../common/Badge';
import Card from '../common/Card';
import ThreeCanvas from '../three/ThreeCanvas';
import LottiePlayer from '../common/LottiePlayer';

export default function HeroSection({ onOpenDemoModal }) {
  const [liveVolume, setLiveVolume] = useState(8429150);
  const [recentTxns, setRecentTxns] = useState([
    { id: 'TXN-9081', amount: '₹14,500', method: 'HDFC UPI', status: 'Success', time: 'Just now' },
    { id: 'TXN-9082', amount: '₹8,200', method: 'ICICI RuPay', status: 'Success', time: '2s ago' }
  ]);

  // Live transaction volume simulator ticker
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveVolume((prev) => prev + Math.floor(Math.random() * 4500) + 1200);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleStartDemo = () => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 }
    });
    if (onOpenDemoModal) onOpenDemoModal();
  };

  const handleScrollToEcosystem = () => {
    const el = document.getElementById('ecosystem');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-24 pb-4 sm:pt-28 lg:pt-28 lg:pb-6 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-[#1856F3]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Hero Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Kicker Pill */}
            <div className="mb-6 animate-fadeIn">
              <Badge variant="blue" icon={Sparkles} pulse>
                Intelligent Multi-Bank Payment Rails
              </Badge>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-tight leading-[1.12] mb-6">
              High-Velocity Payments for{' '}
              <span className="gradient-text-blue block">
                Modern Digital Commerce.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-[#334155] leading-relaxed mb-8 max-w-2xl">
              Smart2Pay bridges merchants, multi-bank routing networks, and utility ecosystems with millisecond settlement speeds, institutional security, and real-time reconciliation.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                onClick={handleStartDemo}
                className="w-full sm:w-auto shadow-[0_12px_30px_rgba(24,86,243,0.35)]"
              >
                Get Started Now
              </Button>

              <Button
                variant="secondary"
                size="lg"
                icon={Play}
                onClick={handleScrollToEcosystem}
                className="w-full sm:w-auto"
              >
                Explore Payment Rails
              </Button>
            </div>

            {/* Live Trust & Volume Indicators (Skeuomorphic + Neumorphic) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full pt-6 border-t border-[#CBD5E1]/60">
              
              {/* Stat 1: Live Volume (24h) */}
              <div className="bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#EEF2F6] p-4 rounded-2xl border border-white/90 shadow-[5px_5px_14px_rgba(163,177,198,0.38),-5px_-5px_12px_rgba(255,255,255,0.95),inset_0_1px_1px_rgba(255,255,255,1)] hover:shadow-[7px_7px_18px_rgba(163,177,198,0.45),-5px_-5px_14px_rgba(255,255,255,1)] hover:-translate-y-0.5 transition-all duration-200 flex flex-col group">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-[11px] font-extrabold text-[#64748B] uppercase tracking-[0.14em]">
                    Live Volume (24h)
                  </span>
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-white to-[#E2E8F0] shadow-[2px_2px_4px_rgba(163,177,198,0.4),-2px_-2px_4px_rgba(255,255,255,0.9)] flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                  </div>
                </div>
                <div className="mt-2 flex items-baseline">
                  <span className="text-lg sm:text-xl font-black font-mono text-[#042656] tracking-tight">
                    ₹{liveVolume.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex items-center gap-1 mt-1 text-[10px] font-bold text-[#10B981]">
                  <TrendingUp size={11} />
                  <span>+14.2% today</span>
                </div>
              </div>

              {/* Stat 2: Success Rate */}
              <div className="bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#EEF2F6] p-4 rounded-2xl border border-white/90 shadow-[5px_5px_14px_rgba(163,177,198,0.38),-5px_-5px_12px_rgba(255,255,255,0.95),inset_0_1px_1px_rgba(255,255,255,1)] hover:shadow-[7px_7px_18px_rgba(163,177,198,0.45),-5px_-5px_14px_rgba(255,255,255,1)] hover:-translate-y-0.5 transition-all duration-200 flex flex-col group">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-[11px] font-extrabold text-[#64748B] uppercase tracking-[0.14em]">
                    Success Rate
                  </span>
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-white to-[#E2E8F0] shadow-[2px_2px_4px_rgba(163,177,198,0.4),-2px_-2px_4px_rgba(255,255,255,0.9)] flex items-center justify-center text-[#10B981]">
                    <CheckCircle2 size={12} />
                  </div>
                </div>
                <div className="mt-2 flex items-baseline">
                  <span className="text-lg sm:text-xl font-black font-mono text-[#059669] tracking-tight">
                    99.98%
                  </span>
                </div>
                <div className="flex items-center gap-1 mt-1 text-[10px] font-bold text-[#64748B]">
                  <span>Zero-drop SLA</span>
                </div>
              </div>

              {/* Stat 3: Avg. Settlement */}
              <div className="bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#EEF2F6] p-4 rounded-2xl border border-white/90 shadow-[5px_5px_14px_rgba(163,177,198,0.38),-5px_-5px_12px_rgba(255,255,255,0.95),inset_0_1px_1px_rgba(255,255,255,1)] hover:shadow-[7px_7px_18px_rgba(163,177,198,0.45),-5px_-5px_14px_rgba(255,255,255,1)] hover:-translate-y-0.5 transition-all duration-200 col-span-2 sm:col-span-1 flex flex-col group">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-[11px] font-extrabold text-[#64748B] uppercase tracking-[0.14em]">
                    Avg. Settlement
                  </span>
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-white to-[#E2E8F0] shadow-[2px_2px_4px_rgba(163,177,198,0.4),-2px_-2px_4px_rgba(255,255,255,0.9)] flex items-center justify-center text-[#1856F3]">
                    <Zap size={12} />
                  </div>
                </div>
                <div className="mt-2 flex items-baseline">
                  <span className="text-lg sm:text-xl font-black font-mono text-[#1856F3] tracking-tight">
                    &lt; 142ms
                  </span>
                </div>
                <div className="flex items-center gap-1 mt-1 text-[10px] font-bold text-[#64748B]">
                  <span>Direct Bank Switch</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Interactive Canvas & Tactile Live HUD Card */}
          <div className="lg:col-span-5 relative flex flex-col items-center">
            
            {/* 3D WebGL Canvas Layer */}
            <div className="relative w-full">
              <ThreeCanvas scene="hero-card" height="h-[340px] sm:h-[380px] lg:h-[420px]" />
            </div>

            {/* Tactile Live Payment HUD Overlay (Skeuomorphic + Neumorphic) */}
            <div className="w-full mt-3 bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#EEF2F6] p-4 rounded-2xl border border-white/95 shadow-[6px_6px_16px_rgba(163,177,198,0.35),-6px_-6px_14px_rgba(255,255,255,0.95),inset_0_1px_1px_rgba(255,255,255,1)] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100/80 border border-emerald-200/60 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.9),2px_2px_6px_rgba(16,185,129,0.15)] flex items-center justify-center text-[#10B981] shrink-0">
                  <Activity size={20} className="animate-pulse" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-[#042656]">Smart Multi-Bank Router</span>
                    <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
                  </div>
                  <p className="text-[11px] font-medium text-[#64748B]">Zero-drop dynamic fallback active</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-gradient-to-b from-[#EFF6FF] to-[#DBEAFE] border border-blue-200/60 text-[#1856F3] text-[10.5px] font-black shadow-[inset_0_1px_1px_rgba(255,255,255,1),1px_1px_3px_rgba(24,86,243,0.15)] shrink-0">
                256-Bit SSL
              </span>
            </div>

            {/* Supported Card Networks Ribbon */}
            <div className="mt-5 flex items-center justify-center gap-4 flex-wrap opacity-85 hover:opacity-100 transition-opacity">
              <img src="/assets/cc_logos/VISA_cc.png" alt="Visa" className="h-5 object-contain" />
              <img src="/assets/cc_logos/master_cc.png" alt="Mastercard" className="h-5 object-contain" />
              <img src="/assets/cc_logos/rupay_cc.png" alt="RuPay" className="h-5 object-contain" />
              <img src="/assets/cc_logos/AMEX_CC.png" alt="Amex" className="h-5 object-contain" />
              <img src="/assets/cc_logos/Dinersclub_cc.png" alt="Diners Club" className="h-5 object-contain" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
