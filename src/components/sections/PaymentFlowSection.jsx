import React, { useState, useEffect, useRef } from 'react';
import { 
  Cpu, 
  Smartphone, 
  Building2, 
  Store, 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  CheckCircle2,
  RefreshCw,
  Sparkles
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import Card from '../common/Card';
import ThreeCanvas from '../three/ThreeCanvas';
import LottiePlayer from '../common/LottiePlayer';

import { useLenisSmoothScroll } from '../../hooks/useLenisSmoothScroll';

export default function PaymentFlowSection() {
  const [activeStep, setActiveStep] = useState(0);
  const cardRefs = useRef([]);
  const sectionRef = useRef(null);
  const { scrollTo } = useLenisSmoothScroll();

  const steps = [
    {
      id: 0,
      title: 'Customer Checkout',
      category: 'Initiation',
      icon: Smartphone,
      color: '#38BDF8',
      desc: 'Customer initiates payment via UPI dynamic QR, Credit Card, Net Banking, or BBPS utility on web or mobile app.',
      telemetry: { speed: '12ms', status: 'Payload Signed', method: 'End-to-End Encrypted' }
    },
    {
      id: 1,
      title: 'Smart2Pay Neural Router',
      category: 'Orchestration',
      icon: Cpu,
      color: '#1856F3',
      desc: 'Our AI routing engine analyzes 50+ bank switches in real-time, dynamically picking the highest success probability path.',
      telemetry: { speed: '28ms', status: 'Bank Latency 0.04s', method: 'Dynamic Fallback Ready' }
    },
    {
      id: 2,
      title: 'Bank & NPCI Rail',
      category: 'Processing',
      icon: Building2,
      color: '#10B981',
      desc: 'Secure 2-factor authentication & authorization processed directly via issuer CBS & NPCI clearinghouse.',
      telemetry: { speed: '85ms', status: '2FA Authorized', method: '256-Bit TLS 1.3' }
    },
    {
      id: 3,
      title: 'Instant Merchant Payout',
      category: 'Settlement',
      icon: Store,
      color: '#F59E0B',
      desc: 'Funds cleared with automated reconciliation, webhooks dispatch, and instant T+0 merchant ledger credit.',
      telemetry: { speed: '17ms', status: 'Ledger Reconciled', method: 'Zero Chargeback Risk' }
    }
  ];

  // Robust distance-weighted scroll tracker for calm, well-timed step sequencing
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const viewportCenter = window.innerHeight * 0.5;
          let closestIndex = 0;
          let minDistance = Infinity;

          cardRefs.current.forEach((el, index) => {
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const cardCenter = rect.top + rect.height * 0.5;
            const distance = Math.abs(cardCenter - viewportCenter);

            if (distance < minDistance) {
              minDistance = distance;
              closestIndex = index;
            }
          });

          setActiveStep((prev) => prev !== closestIndex ? closestIndex : prev);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial evaluate
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCardClick = (index) => {
    setActiveStep(index);
    if (cardRefs.current[index]) {
      scrollTo(cardRefs.current[index], { offset: -120 });
    }
  };

  return (
    <section 
      id="ecosystem" 
      ref={sectionRef} 
      className="pt-8 pb-8 lg:pt-10 lg:pb-10 relative bg-[#EEF2F6] border-b border-[#D8E1EA]/60"
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        
        {/* Section Header */}
        <SectionHeader
          badge="Payment Ecosystem Flow"
          badgeVariant="blue"
          badgeIcon={Zap}
          title="Intelligent Transaction Lifecycle"
          highlightText="End-to-End."
          subtitle="Discover how Smart2Pay converts complex banking infrastructure into a unified, high-speed payment highway."
          className="mb-8 sm:mb-10"
        />

        {/* Scroll-Driven Split Screen: Sticky 3D Left + Story Milestones Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start relative">
          
          {/* Left Column: Sticky 3D Neural Topology Canvas */}
          <div className="lg:col-span-6 lg:sticky lg:top-28 flex flex-col items-center justify-center self-start">
            
            {/* Top Status & Node Progress Pill */}
            <div className="flex items-center justify-between w-full max-w-md px-4 py-2 rounded-full bg-white/95 backdrop-blur-md border border-white shadow-[1px_2px_6px_rgba(163,177,198,0.15)] mb-1">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-ping" />
                <span className="text-xs font-black text-[#042656]">Live Neural Routing Topology</span>
              </div>
              <span className="text-[10.5px] font-mono font-bold text-[#1856F3] bg-[#EBF1FF] px-2.5 py-0.5 rounded-full border border-blue-200/60 shadow-xs">
                Stage 0{activeStep + 1} / 04
              </span>
            </div>

            {/* Interactive 3D Canvas Synchronized with Active Step */}
            <div className="w-full relative">
              <ThreeCanvas
                scene="ecosystem"
                activeStep={activeStep}
                height="h-[360px] sm:h-[400px] lg:h-[420px]"
              />
            </div>

            {/* Floating Live Telemetry HUD Bar */}
            <div className="w-full max-w-md mt-3 px-5 py-3 rounded-2xl bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#EEF2F6] border border-white shadow-[3px_4px_12px_rgba(163,177,198,0.18),-3px_-4px_10px_rgba(255,255,255,0.9)] flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black text-[#64748B] uppercase tracking-wider">Active Stage:</span>
                <span className="font-black text-[#1856F3] transition-all duration-300">{steps[activeStep].title}</span>
              </div>
              <span className="font-mono text-[11px] font-black text-[#059669] bg-[#D1FAE5] px-2.5 py-0.5 rounded-full border border-emerald-200/60 shadow-xs transition-all duration-300">
                Flow: {steps[activeStep].telemetry.speed}
              </span>
            </div>

            {/* Stepper Dots Indicator on Left HUD */}
            <div className="flex items-center justify-center gap-2 mt-3">
              {steps.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => handleCardClick(idx)}
                  className={`h-2 rounded-full transition-all duration-400 cursor-pointer ${
                    activeStep === idx 
                      ? 'w-8 bg-[#1856F3] shadow-xs' 
                      : 'w-2 bg-[#CBD5E1] hover:bg-[#94A3B8]'
                  }`}
                  aria-label={`Go to step ${idx + 1}`}
                />
              ))}
            </div>

            </div>

          {/* Right Column: Scroll Milestones */}
          <div className="lg:col-span-6 relative flex flex-col gap-8 sm:gap-10 pt-2 pb-6 sm:pb-8">

            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;

              return (
                <div
                  key={step.id}
                  ref={(el) => (cardRefs.current[index] = el)}
                  onClick={() => handleCardClick(index)}
                  className={`relative z-10 cursor-pointer p-6 sm:p-8 rounded-3xl transition-all duration-500 ease-out bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#EEF2F6] ${
                    isActive
                      ? 'border-2 border-[#1856F3] shadow-[0_4px_16px_rgba(24,86,243,0.15),-4px_-4px_12px_rgba(255,255,255,0.95)] scale-[1.01] opacity-100'
                      : 'border border-white/95 shadow-[2px_3px_8px_rgba(163,177,198,0.15),-2px_-3px_8px_rgba(255,255,255,0.9)] hover:-translate-y-0.5 hover:shadow-[4px_6px_12px_rgba(163,177,198,0.2)] opacity-75 hover:opacity-95'
                  }`}
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    
                    {/* Step Icon Coin */}
                    <div
                      className={`w-13 h-13 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-all duration-400 ${
                        isActive ? 'scale-110 shadow-[0_8px_20px_rgba(24,86,243,0.35)]' : ''
                      }`}
                      style={{ backgroundColor: step.color }}
                    >
                      <Icon size={24} />
                    </div>

                    {/* Step Content */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-black uppercase tracking-wider text-[#64748B]">
                          Step 0{index + 1} • {step.category}
                        </span>
                        {isActive && (
                          <span className="text-xs font-black text-[#1856F3] bg-[#EBF1FF] px-2.5 py-0.5 rounded-full border border-blue-200/60 flex items-center gap-1 shadow-xs animate-fadeIn">
                            <CheckCircle2 size={13} /> Active Node
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg sm:text-xl font-black text-[#042656] mb-2 tracking-tight">
                        {step.title}
                      </h3>

                      <p className="text-sm text-[#475569] leading-relaxed font-medium">
                        {step.desc}
                      </p>

                      {/* Telemetry Metrics on active card */}
                      {isActive && (
                        <div className="mt-5 pt-4 border-t border-[#CBD5E1]/60 grid grid-cols-3 gap-2 text-xs animate-fadeIn">
                          <div>
                            <span className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-wider block">Latency</span>
                            <span className="font-mono font-black text-[#042656] text-sm">{step.telemetry.speed}</span>
                          </div>
                          <div>
                            <span className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-wider block">Validation</span>
                            <span className="font-mono font-black text-[#059669] text-xs">{step.telemetry.status}</span>
                          </div>
                          <div>
                            <span className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-wider block">Security</span>
                            <span className="font-mono font-black text-[#1856F3] text-xs">{step.telemetry.method}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
