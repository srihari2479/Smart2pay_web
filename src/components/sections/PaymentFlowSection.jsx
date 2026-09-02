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

export default function PaymentFlowSection() {
  const [activeStep, setActiveStep] = useState(0);
  const cardRefs = useRef([]);

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

  // Scroll observer to automatically activate corresponding step on scroll
  useEffect(() => {
    const handleScroll = () => {
      const triggerY = window.innerHeight * 0.45;

      cardRefs.current.forEach((el, index) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= triggerY && rect.bottom >= triggerY) {
          setActiveStep(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCardClick = (index) => {
    setActiveStep(index);
    if (cardRefs.current[index]) {
      cardRefs.current[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section id="ecosystem" className="pt-6 pb-12 lg:pt-8 lg:pb-16 relative overflow-hidden bg-[#EEF2F6] border-b border-[#D8E1EA]/60">
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

        {/* Scroll-Driven Split Screen: Sticky Canvas Left + Scrolling Stepper Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Sticky 3D Neural Topology Canvas */}
          <div className="lg:col-span-6 lg:sticky lg:top-28 flex flex-col items-center justify-center">
            
            {/* Top Status Pill */}
            <div className="flex items-center justify-between w-full max-w-md px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-white shadow-[2px_2px_8px_rgba(163,177,198,0.25),-2px_-2px_6px_rgba(255,255,255,0.9)] mb-1">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-ping" />
                <span className="text-xs font-black text-[#042656]">Live Neural Routing Topology</span>
              </div>
              <span className="text-[10.5px] font-mono font-bold text-[#1856F3] bg-[#EBF1FF] px-2 py-0.5 rounded-full border border-blue-200/60">
                Step 0{activeStep + 1} / 04
              </span>
            </div>

            {/* Interactive 3D Canvas with Active Step State */}
            <div className="w-full relative">
              <ThreeCanvas
                scene="ecosystem"
                activeStep={activeStep}
                height="h-[380px] sm:h-[430px]"
              />
            </div>

            {/* Floating Live Telemetry HUD Bar */}
            <div className="w-full max-w-md mt-4 px-5 py-3 rounded-2xl bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#EEF2F6] border border-white shadow-[5px_5px_15px_rgba(163,177,198,0.35),-5px_-5px_12px_rgba(255,255,255,0.95),inset_0_1px_1px_rgba(255,255,255,1)] flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black text-[#64748B] uppercase tracking-wider">Active Phase:</span>
                <span className="font-black text-[#1856F3]">{steps[activeStep].title}</span>
              </div>
              <span className="font-mono text-[11px] font-black text-[#059669] bg-[#D1FAE5] px-2.5 py-0.5 rounded-full border border-emerald-200/60 shadow-xs">
                Flow: {steps[activeStep].telemetry.speed}
              </span>
            </div>

          </div>

          {/* Right Column: Scrollable Step Stepper Cards */}
          <div className="lg:col-span-6 flex flex-col gap-6 pt-2">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;

              return (
                <div
                  key={step.id}
                  ref={(el) => (cardRefs.current[index] = el)}
                  onClick={() => handleCardClick(index)}
                  className={`cursor-pointer p-6 sm:p-7 rounded-3xl transition-all duration-300 bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#EEF2F6] ${
                    isActive
                      ? 'border-2 border-[#1856F3] shadow-[8px_8px_24px_rgba(24,86,243,0.22),-6px_-6px_16px_rgba(255,255,255,0.95),inset_0_1px_1px_rgba(255,255,255,1)] scale-[1.02]'
                      : 'border border-white/95 shadow-[5px_5px_15px_rgba(163,177,198,0.38),-5px_-5px_12px_rgba(255,255,255,0.95),inset_0_1px_1px_rgba(255,255,255,1)] hover:-translate-y-0.5 hover:shadow-[7px_7px_18px_rgba(163,177,198,0.45),-5px_-5px_14px_rgba(255,255,255,1)] opacity-90 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    
                    {/* Step Icon Coin */}
                    <div
                      className={`w-13 h-13 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-transform duration-200 ${
                        isActive ? 'scale-110 shadow-lg' : ''
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

                      <h3 className="text-lg sm:text-xl font-black text-[#042656] mb-1.5 tracking-tight">
                        {step.title}
                      </h3>

                      <p className="text-sm text-[#475569] leading-relaxed font-medium">
                        {step.desc}
                      </p>

                      {/* Telemetry Metrics on active card */}
                      {isActive && (
                        <div className="mt-5 pt-3.5 border-t border-[#CBD5E1]/60 grid grid-cols-3 gap-2 text-xs animate-fadeIn">
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
