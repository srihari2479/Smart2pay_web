import React from 'react';
import { 
  UserCheck, 
  CreditCard, 
  Cpu, 
  CheckCircle, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import Card from '../common/Card';

export default function HowItWorksSection() {
  const steps = [
    {
      num: '01',
      title: 'Digital Onboarding & KYB',
      desc: 'Complete paperless merchant registration with automated Aadhaar & PAN validation in under 60 seconds.',
      icon: UserCheck,
      color: '#1856F3'
    },
    {
      num: '02',
      title: 'Integrate API or Soundbox',
      desc: 'Drop in our lightweight JavaScript SDK, mobile SDK, or place our dynamic soundbox QR at your retail counter.',
      icon: CreditCard,
      color: '#F59E0B'
    },
    {
      num: '03',
      title: 'Neural Payment Routing',
      desc: 'Transactions are dynamically routed across the healthiest bank switch for maximum success and lowest latency.',
      icon: Cpu,
      color: '#10B981'
    },
    {
      num: '04',
      title: 'Instant Direct Settlement',
      desc: 'Enjoy automated T+0 payouts directly credited into your designated bank account with zero manual reconciliation.',
      icon: CheckCircle,
      color: '#8B5CF6'
    }
  ];

  return (
    <section id="how-it-works" className="pt-4 pb-10 lg:pt-6 lg:pb-12 relative bg-[#EEF2F6] border-b border-[#D8E1EA]/60 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <SectionHeader
          badge="Seamless 4-Step Process"
          badgeVariant="blue"
          badgeIcon={Sparkles}
          title="From Onboarding to Settlement"
          highlightText="in Minutes."
          subtitle="A frictionless integration pathway designed to get your business accepting payments instantly."
        />

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <Card
                key={idx}
                variant="raised"
                className="flex flex-col justify-between h-full bg-white hover:bg-[#F8FAFC] relative"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold font-mono text-[#CBD5E1]">
                      {step.num}
                    </span>
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-sm"
                      style={{ backgroundColor: step.color }}
                    >
                      <Icon size={22} />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#0F172A] tracking-tight mb-2">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#475569] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F1F5F9] flex items-center text-xs font-bold text-[#1856F3]">
                  <span>Step {step.num} Complete</span>
                </div>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}
