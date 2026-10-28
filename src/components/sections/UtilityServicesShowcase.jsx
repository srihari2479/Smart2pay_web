import React, { useState, useEffect } from 'react';
import { 
  Building, 
  GraduationCap, 
  Store, 
  ShieldCheck, 
  Plane, 
  Wallet, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Zap,
  TrendingUp,
  Activity
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import Button from '../common/Button';
import LottiePlayer, { preloadLottie } from '../common/LottiePlayer';
import { getAssetUrl } from '../../utils/assetHelper';

// Preload top utility animations for instantaneous display
try {
  preloadLottie('/assets/animations/Business.json');
  preloadLottie('/assets/animations/Learning Data.json');
} catch (e) {}

/**
 * Stacked Layered Cards Showcase
 * Each vertical service is rendered as a standalone full-screen stacked card
 * that slides and stacks over the previous card as the user scrolls.
 */
export default function UtilityServicesShowcase({ onOpenDemoModal }) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(typeof window !== 'undefined' && window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const services = [
    {
      num: '01',
      id: 'houserent',
      iconFile: 'houserent.png',
      category: 'Real Estate & Rent',
      title: 'Automated House Rent & Society Billing',
      subtitle: 'Credit Card to Bank Landlord Settlement Rails',
      desc: 'Seamlessly pay and collect residential and commercial property rentals with credit card rewards, instant landlord bank settlement, and automated digital rent receipts.',
      features: [
        'Instant IMPS Landlord Settlement',
        'Auto-Generated Tax Compliant Rent Receipts',
        'Credit Card Reward Multipliers',
        'Scheduled Monthly Auto-Debit'
      ],
      animation: '/assets/animations/Business.json',
      badge: 'T+0 Landlord Direct',
      accentColor: '#1856F3',
      badgeBg: 'bg-blue-50 text-[#1856F3] border-blue-200/60',
      actionLabel: 'Integrate Rent Rails'
    },
    {
      num: '02',
      id: 'edufee',
      iconFile: 'edufee.png',
      category: 'Education & Academics',
      title: 'Institutional College & School Fees',
      subtitle: 'Centralized Education Payment Gateway & ERP Ledger',
      desc: 'Empower schools, universities, and coaching institutes with customizable fee payment links, no-cost EMI options, and real-time student ERP ledger synchronization.',
      features: [
        'Multi-Child Fee Consolidation',
        '0% Interest Flexible EMI Options',
        'Instant Digital Fee Challan Generation',
        'Integrated ERP Ledger Sync'
      ],
      animation: '/assets/animations/Learning Data.json',
      badge: 'ERP Auto-Sync',
      accentColor: '#F59E0B',
      badgeBg: 'bg-amber-50 text-[#D97706] border-amber-200/60',
      actionLabel: 'Integrate Education'
    },
    {
      num: '03',
      id: 'shop_kyb',
      iconFile: 'Shop_KYB.png',
      category: 'Retail & Merchants',
      title: 'Shop KYB & Retail Soundbox QR',
      subtitle: 'Omnichannel POS & Instant QR Payment Collection',
      desc: 'Equip offline storefronts and retail chains with dynamic UPI soundbox QR codes, fast merchant KYB verification, and unified daily batch settlement reports.',
      features: [
        'Instant Audio Payment Confirmation',
        'Dynamic Multi-Account QR Routing',
        'Daily Midnight Auto-Reconciliation',
        'Multi-Store Staff Permissions'
      ],
      animation: '/assets/animations/verifyotp.json',
      badge: 'Retail Soundbox Ready',
      accentColor: '#10B981',
      badgeBg: 'bg-emerald-50 text-[#059669] border-emerald-200/60',
      actionLabel: 'Integrate Retail POS'
    },
    {
      num: '04',
      id: 'insurance',
      iconFile: 'home_insurance.png',
      category: 'Insurance & Protection',
      title: 'Insurance Premium & Claim Rails',
      subtitle: 'Instant Life, Health & Motor Premium Gateway',
      desc: 'Direct integration with leading insurance underwriters for instantaneous premium payments, policy renewal reminders, and instant digital endorsements.',
      features: [
        'Over 40+ Integrated Insurers',
        'Automated Grace Period Alerts',
        'Instant Policy Certificate Retrieval',
        'Zero Surcharge on Debit & UPI'
      ],
      animation: '/assets/animations/insurance_animation.json',
      badge: 'Direct IRDAI Rails',
      accentColor: '#8B5CF6',
      badgeBg: 'bg-purple-50 text-[#7C3AED] border-purple-200/60',
      actionLabel: 'Integrate Insurance'
    },
    {
      num: '05',
      id: 'travel',
      iconFile: 'home_travel.png',
      category: 'Transit & Tourism',
      title: 'Travel, Transit & Airline Ticketing',
      subtitle: 'High-Volume Concurrency Payment Processing',
      desc: 'High-concurrency payment processing for travel aggregators, corporate booking portals, bus operators, and holiday transit packages with instant auto-refunds.',
      features: [
        'Sub-second GDS Booking Hold',
        'Instant Cancellation Auto-Refunds',
        'Multi-Currency Forex Settlement',
        'Corporate Virtual Card Support'
      ],
      animation: '/assets/animations/Payments.json',
      badge: 'Instant Refund SLA',
      accentColor: '#06B6D4',
      badgeBg: 'bg-cyan-50 text-[#0891B2] border-cyan-200/60',
      actionLabel: 'Integrate Travel Rails'
    },
    {
      num: '06',
      id: 'refer_earn',
      iconFile: 'refer.png',
      category: 'Refer & Earn Program',
      title: 'Merchant Referral & Commission Engine',
      subtitle: 'Passive Revenue Sharing & Multi-Tier Rewards',
      desc: 'Monetize your professional network by inviting merchants, distributors, and retail franchises to Smart2Pay. Earn lifetime recurring commission payouts and instant wallet bonuses.',
      features: [
        'Instant Referral Payouts to Bank',
        'Multi-Tier Lifetime Revenue Share',
        'Custom Branded Merchant Invite Links',
        'Real-Time Referral Analytics Dashboard'
      ],
      animation: '/assets/animations/refer_earn.json',
      badge: 'Lifetime Commission',
      accentColor: '#E11D48',
      badgeBg: 'bg-rose-50 text-[#E11D48] border-rose-200/60',
      actionLabel: 'Join Referral Program'
    }
  ];

  return (
    <section id="utility" className="pt-8 pb-3 sm:pt-12 sm:pb-6 lg:py-16 relative bg-[#EEF2F6] border-b border-[#D8E1EA]/60 overflow-visible">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        
        {/* Section Header */}
        <SectionHeader
          badge="BBPS & Vertical Ecosystem"
          badgeVariant="gold"
          badgeIcon={Sparkles}
          title="Empowering Everyday Bills &"
          highlightText="Institutional Payments."
          subtitle="Discover our specialized vertical payment solutions engineered for instant reconciliation, zero delay, and institutional scale."
          className="mb-8 sm:mb-12 lg:mb-16"
        />

        {/* Stacked Cards Deck (Screens slide over each other naturally on scroll on desktop, cleanly stacked on mobile) */}
        <div className="relative flex flex-col gap-6 sm:gap-10 lg:gap-16 pb-2 sm:pb-4">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="relative lg:sticky transition-all duration-300"
              style={isDesktop ? {
                top: `${96 + index * 18}px`,
                zIndex: index + 10
              } : undefined}
            >
              {/* Full Skeuomorphic Card Screen */}
              <div className="bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#EEF2F6] p-4 sm:p-6 lg:p-10 rounded-2xl sm:rounded-3xl border border-white/90 shadow-[0_4px_16px_rgba(163,177,198,0.12)] hover:shadow-[0_6px_20px_rgba(163,177,198,0.16)] transition-all">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
                  
                  {/* Left Column: Numbered Badge, Title, Description, and Features */}
                  <div className="lg:col-span-7 flex flex-col items-start">
                    
                    {/* Top Status Header */}
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 flex-wrap">
                      {/* Step Number Coin */}
                      <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#042656] text-white font-mono text-xs font-bold flex items-center justify-center shadow-xs shrink-0">
                        {service.num}
                      </span>

                      {/* Official Service Category Icon */}
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-white p-1 border border-[#CBD5E1] shadow-xs flex items-center justify-center overflow-hidden shrink-0">
                        <img
                          src={getAssetUrl(`assets/icons/${service.iconFile}`)}
                          alt={service.category}
                          className="w-full h-full object-contain"
                          loading="lazy"
                          decoding="async"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      </div>

                      {/* Category Badge */}
                      <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#042656] bg-white px-2.5 py-1 rounded-full border border-[#CBD5E1] shadow-xs">
                        {service.category}
                      </span>

                      {/* Feature Badge */}
                      <span className={`text-[11px] sm:text-xs font-bold px-2.5 py-1 rounded-full border shadow-xs flex items-center gap-1.5 ${service.badgeBg}`}>
                        <CheckCircle2 size={12} />
                        {service.badge}
                      </span>
                    </div>

                    {/* Main Title */}
                    <h3 className="text-xl sm:text-2xl lg:text-[32px] font-black text-[#042656] tracking-tight mb-1.5 sm:mb-2 leading-tight">
                      {service.title}
                    </h3>
                    
                    {/* Subtitle */}
                    <p className="text-xs sm:text-sm lg:text-base font-bold text-[#1856F3] mb-2.5 sm:mb-4">
                      {service.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-xs sm:text-sm lg:text-base text-[#475569] leading-relaxed mb-5 sm:mb-6">
                      {service.desc}
                    </p>

                    {/* Feature Pills (2x2 Grid) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 w-full mb-5 sm:mb-8">
                      {service.features.map((feat, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 sm:gap-2.5 p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-white/90 border border-white shadow-[1px_1px_3px_rgba(163,177,198,0.12)]"
                        >
                          <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-[#10B981] shrink-0">
                            <CheckCircle2 size={13} />
                          </div>
                          <span className="text-xs sm:text-sm font-bold text-[#1E293B]">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button - Sleek, compact, single-line */}
                    <Button
                      variant="primary"
                      size="md"
                      icon={ArrowRight}
                      iconPosition="right"
                      onClick={onOpenDemoModal}
                      className="w-full sm:w-auto h-11 sm:h-12 px-5 sm:px-7 text-xs sm:text-sm font-black whitespace-nowrap justify-center shadow-[0_4px_14px_rgba(24,86,243,0.18)]"
                    >
                      {service.actionLabel}
                    </Button>
                  </div>

                  {/* Right Column: Lottie Animation & Live Telemetry Glass Card */}
                  <div className="lg:col-span-5 flex items-center justify-center w-full mt-2 lg:mt-0">
                    <div className="w-full max-w-md p-3.5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/95 to-[#F1F5F9]/90 border border-white shadow-[2px_3px_10px_rgba(163,177,198,0.14)] flex flex-col items-center justify-center relative overflow-hidden">
                      
                      {/* Interactive Lottie Stage (Properly scaled for mobile) */}
                      <div className="w-full h-36 sm:h-52 lg:h-64 flex items-center justify-center">
                        <LottiePlayer
                          src={service.animation}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      {/* Bottom Live Telemetry Pill */}
                      <div className="mt-2.5 sm:mt-4 flex items-center justify-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-extrabold text-[#042656] bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#CBD5E1] shadow-sm text-center w-full max-w-xs">
                        <Sparkles size={12} className="text-[#F59E0B] shrink-0" />
                        <span className="truncate">Direct Settlement & Instant Ledger Sync</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
