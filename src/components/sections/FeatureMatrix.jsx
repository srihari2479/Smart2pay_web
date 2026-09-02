import React from 'react';
import { 
  Zap, 
  ShieldCheck, 
  CreditCard, 
  TrendingUp, 
  FileCheck2, 
  Layers, 
  Webhook, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import Card from '../common/Card';
import Button from '../common/Button';
import LottiePlayer from '../common/LottiePlayer';

export default function FeatureMatrix({ onOpenDemoModal }) {
  const features = [
    {
      icon: Zap,
      title: 'Smart Multi-Bank Dynamic Router',
      subtitle: 'Zero Downtime Architecture',
      desc: 'Intelligently directs payment requests across 50+ banking APIs based on real-time gateway health and historical success telemetry.',
      badge: '99.98% Success SLA',
      badgeVariant: 'emerald',
      color: '#1856F3'
    },
    {
      icon: TrendingUp,
      title: 'Instant T+0 Settlement Engine',
      subtitle: 'Accelerated Liquidity',
      desc: 'Eliminate weekend and holiday settlement delays with automated real-time IMPS and RTGS direct ledger transfers.',
      badge: 'T+0 Real-Time',
      badgeVariant: 'gold',
      color: '#F59E0B'
    },
    {
      icon: FileCheck2,
      title: 'Paperless Aadhaar & PAN KYC/KYB',
      subtitle: 'Instant Onboarding',
      desc: 'Verify individual merchants and enterprises within 60 seconds with automated OCR, NSDL PAN verification, and Aadhaar OTP validation.',
      badge: '60s Verification',
      badgeVariant: 'blue',
      color: '#10B981',
      animationSrc: '/assets/animations/aadhar.json'
    },
    {
      icon: CreditCard,
      title: 'Universal Payment Acceptance',
      subtitle: 'Cards, UPI & Net Banking',
      desc: 'Accept Visa, Mastercard, RuPay, Amex, Diners Club, 50+ Net Banking gateways, and full zero-touch UPI dynamic QR rails.',
      badge: '100+ Methods',
      badgeVariant: 'blue',
      color: '#042656'
    },
    {
      icon: Webhook,
      title: 'High-Throughput Webhooks & APIs',
      subtitle: 'Developer First',
      desc: 'Idempotent REST APIs, sub-millisecond webhook dispatches, comprehensive sandbox simulation environments, and pre-built SDKs.',
      badge: '< 50ms Delivery',
      badgeVariant: 'blue',
      color: '#8B5CF6'
    },
    {
      icon: ShieldCheck,
      title: 'AI Fraud Prevention Radar',
      subtitle: 'PCI-DSS Level 1 Security',
      desc: 'Real-time behavioral scoring, IP geolocation analysis, biometric authentication checks, and zero-chargeback risk algorithms.',
      badge: 'Bank Grade AES-256',
      badgeVariant: 'emerald',
      color: '#10B981'
    }
  ];

  return (
    <section id="features" className="py-10 lg:py-14 relative bg-[#F0F4F8] border-b border-[#D8E1EA]/60 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <SectionHeader
          badge="Enterprise Grade Capabilities"
          badgeVariant="blue"
          badgeIcon={Layers}
          title="Engineered for Scale,"
          highlightText="Designed for Reliability."
          subtitle="Every layer of the Smart2Pay architecture is optimized for conversion velocity, institutional security, and effortless integration."
        />

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                variant="interactive"
                className="flex flex-col justify-between h-full bg-[#F0F4F8] hover:bg-white"
              >
                <div>
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md"
                      style={{ backgroundColor: item.color }}
                    >
                      <Icon size={26} />
                    </div>

                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-white border border-[#E2E8F0] shadow-sm text-[#0F172A]">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <span className="text-xs font-semibold text-[#64748B] uppercase tracking-wider block mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-[#0F172A] tracking-tight mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#475569] leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Interactive Action */}
                <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-bold text-[#1856F3] group">
                  <span>Explore Feature SLA</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}
