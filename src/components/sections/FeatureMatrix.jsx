import React, { useState, useEffect, useRef } from 'react';
import { 
  Zap, 
  ShieldCheck, 
  CreditCard, 
  TrendingUp, 
  FileCheck2, 
  Layers, 
  Webhook, 
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Activity
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import Card from '../common/Card';
import Button from '../common/Button';
import LottiePlayer from '../common/LottiePlayer';

export default function FeatureMatrix({ onOpenDemoModal }) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const sectionRef = useRef(null);

  const features = [
    {
      id: 'router',
      category: 'routing',
      icon: Zap,
      title: 'Smart Multi-Bank Dynamic Router',
      subtitle: 'Zero Downtime Architecture',
      desc: 'Intelligently directs payment requests across 50+ banking APIs based on real-time gateway health and historical success telemetry.',
      badge: '99.98% Success SLA',
      badgeVariant: 'emerald',
      color: '#1856F3',
      metrics: { label: 'Failover SLA', value: '< 15ms' }
    },
    {
      id: 'settlement',
      category: 'settlement',
      icon: TrendingUp,
      title: 'Instant T+0 Settlement Engine',
      subtitle: 'Accelerated Liquidity',
      desc: 'Eliminate weekend and holiday settlement delays with automated real-time IMPS and RTGS direct ledger transfers.',
      badge: 'T+0 Real-Time',
      badgeVariant: 'gold',
      color: '#F59E0B',
      metrics: { label: 'Disbursement', value: 'Instant IMPS' }
    },
    {
      id: 'kyc',
      category: 'onboarding',
      icon: FileCheck2,
      title: 'Paperless Aadhaar & PAN KYC/KYB',
      subtitle: 'Instant Onboarding',
      desc: 'Verify individual merchants and enterprises within 60 seconds with automated OCR, NSDL PAN verification, and Aadhaar OTP validation.',
      badge: '60s Verification',
      badgeVariant: 'blue',
      color: '#10B981',
      animationSrc: '/assets/animations/aadhar.json',
      metrics: { label: 'Verification', value: '60 Seconds' }
    },
    {
      id: 'payments',
      category: 'routing',
      icon: CreditCard,
      title: 'Universal Payment Acceptance',
      subtitle: 'Cards, UPI & Net Banking',
      desc: 'Accept Visa, Mastercard, RuPay, Amex, Diners Club, 50+ Net Banking gateways, and full zero-touch UPI dynamic QR rails.',
      badge: '100+ Methods',
      badgeVariant: 'blue',
      color: '#042656',
      metrics: { label: 'Payment Modes', value: '100+ Rails' }
    },
    {
      id: 'webhooks',
      category: 'developer',
      icon: Webhook,
      title: 'High-Throughput Webhooks & APIs',
      subtitle: 'Developer First',
      desc: 'Idempotent REST APIs, sub-millisecond webhook dispatches, comprehensive sandbox simulation environments, and pre-built SDKs.',
      badge: '< 50ms Delivery',
      badgeVariant: 'blue',
      color: '#8B5CF6',
      metrics: { label: 'API SLA', value: '99.99%' }
    },
    {
      id: 'fraud',
      category: 'security',
      icon: ShieldCheck,
      title: 'AI Fraud Prevention Radar',
      subtitle: 'PCI-DSS Level 1 Security',
      desc: 'Real-time behavioral scoring, IP geolocation analysis, biometric authentication checks, and zero-chargeback risk algorithms.',
      badge: 'Bank Grade AES-256',
      badgeVariant: 'emerald',
      color: '#10B981',
      metrics: { label: 'Risk Score', value: 'Real-Time' }
    }
  ];

  // Scroll reveal trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const categories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'routing', label: 'Multi-Bank Routing' },
    { id: 'settlement', label: 'T+0 Settlement' },
    { id: 'onboarding', label: 'Paperless KYC' },
    { id: 'security', label: 'Zero-Trust Security' }
  ];

  const filteredFeatures = activeCategory === 'all'
    ? features
    : features.filter((f) => f.category === activeCategory);

  return (
    <section 
      id="features" 
      ref={sectionRef}
      className="py-10 sm:py-14 lg:py-16 relative bg-[#F0F4F8] border-b border-[#D8E1EA]/60 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#1856F3]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#10B981]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header with smooth entrance */}
        <div className={`transition-all duration-700 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <SectionHeader
            badge="Enterprise Grade Capabilities"
            badgeVariant="blue"
            badgeIcon={Layers}
            title="Engineered for Scale,"
            highlightText="Designed for Reliability."
            subtitle="Every layer of the Smart2Pay architecture is optimized for conversion velocity, institutional security, and effortless integration."
            className="mb-6 sm:mb-8"
          />

          {/* Interactive Feature Category Filter Tabs */}
          <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2 px-1 max-w-3xl mx-auto scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#1856F3] text-white shadow-[0_2px_10px_rgba(24,86,243,0.3)] scale-105'
                    : 'bg-white/80 hover:bg-white text-[#475569] border border-[#CBD5E1]/60 hover:text-[#042656]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Staggered Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredFeatures.map((item, index) => {
            const Icon = item.icon;
            
            return (
              <div
                key={item.id}
                className={`transition-all duration-700 ease-out transform ${
                  isVisible 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-12 scale-95'
                }`}
                style={{
                  transitionDelay: `${Math.min(index * 90, 500)}ms`
                }}
              >
                <Card
                  variant="interactive"
                  className="flex flex-col justify-between h-full bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#EEF2F6] hover:bg-white p-5 sm:p-7 rounded-2xl sm:rounded-3xl border border-white/95 shadow-[2px_3px_10px_rgba(163,177,198,0.14),-2px_-3px_8px_rgba(255,255,255,0.9)] hover:shadow-[4px_6px_16px_rgba(163,177,198,0.22)] hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div>
                    {/* Top Bar: Icon + Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-white shadow-md transform group-hover:scale-105 transition-transform duration-300"
                        style={{ backgroundColor: item.color }}
                      >
                        <Icon size={24} className="sm:w-6 sm:h-6" />
                      </div>

                      <span className="text-[11px] sm:text-xs font-bold px-3 py-1 rounded-full bg-white border border-[#CBD5E1] shadow-xs text-[#042656] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                        {item.badge}
                      </span>
                    </div>

                    {/* Subtitle */}
                    <span className="text-[10.5px] sm:text-xs font-extrabold text-[#1856F3] uppercase tracking-wider block mb-1">
                      {item.subtitle}
                    </span>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-black text-[#042656] tracking-tight mb-2.5 leading-snug">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-5">
                      {item.desc}
                    </p>
                  </div>

                  {/* Card Bottom Meta & Interactive CTA */}
                  <div className="pt-4 border-t border-[#CBD5E1]/60 flex items-center justify-between text-xs font-bold text-[#1856F3]">
                    <div className="flex items-center gap-1.5 text-[#64748B] text-[11px] font-mono">
                      <Activity size={12} className="text-[#10B981]" />
                      <span>{item.metrics.label}: <strong className="text-[#042656]">{item.metrics.value}</strong></span>
                    </div>

                    <div 
                      onClick={onOpenDemoModal}
                      className="cursor-pointer flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                    >
                      <span className="hidden sm:inline">Learn More</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
