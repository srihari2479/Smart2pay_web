import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  TrendingUp, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Zap,
  Percent
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import Card from '../common/Card';
import Button from '../common/Button';

export default function FeeCalculatorSection({ onOpenDemoModal }) {
  const [monthlyVolume, setMonthlyVolume] = useState(2500000); // 25 Lakhs default
  const [cardPercentage, setCardPercentage] = useState(40); // 40% cards, 60% UPI/Net Banking

  // Calculate fees
  const calculations = useMemo(() => {
    const cardVol = (monthlyVolume * cardPercentage) / 100;
    const upiVol = monthlyVolume - cardVol;

    // Standard Gateway Rates: 2.2% on Cards, 0.4% on UPI/NetBanking + Hidden gateway setup
    const standardCardFee = cardVol * 0.022;
    const standardUpiFee = upiVol * 0.004;
    const standardTotalMonthly = standardCardFee + standardUpiFee;

    // Smart2Pay Optimized Rates: 1.65% on Cards, 0.0% on UPI, Flat dynamic routing
    const smart2payCardFee = cardVol * 0.0165;
    const smart2payUpiFee = upiVol * 0.000;
    const smart2payTotalMonthly = smart2payCardFee + smart2payUpiFee;

    const monthlySavings = standardTotalMonthly - smart2payTotalMonthly;
    const annualSavings = monthlySavings * 12;

    return {
      standardTotalMonthly,
      smart2payTotalMonthly,
      monthlySavings: Math.max(monthlySavings, 0),
      annualSavings: Math.max(annualSavings, 0)
    };
  }, [monthlyVolume, cardPercentage]);

  return (
    <section id="calculator" className="pt-6 pb-10 lg:pt-8 lg:pb-12 relative bg-[#EEF2F6] border-b border-[#D8E1EA]/60 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <SectionHeader
          badge="Interactive Fee & ROI Estimator"
          badgeVariant="gold"
          badgeIcon={Calculator}
          title="Transparent Pricing,"
          highlightText="Measurable Savings."
          subtitle="Estimate your monthly payment processing costs and calculate your annual merchant savings with Smart2Pay."
        />

        <div className="max-w-4xl mx-auto neu-raised-lg p-6 sm:p-10 bg-white border border-white/90">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Sliders & Config */}
            <div className="md:col-span-7 flex flex-col gap-6">
              
              {/* Slider 1: Monthly Volume */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-[#64748B] uppercase tracking-wider">
                    Monthly Processing Volume:
                  </span>
                  <span className="text-lg font-bold font-mono text-[#042656]">
                    ₹{(monthlyVolume / 100000).toFixed(1)} Lakhs
                  </span>
                </div>
                <input
                  type="range"
                  min="200000"
                  max="20000000"
                  step="100000"
                  value={monthlyVolume}
                  onChange={(e) => setMonthlyVolume(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#E2E8F0] rounded-lg appearance-none cursor-pointer accent-[#1856F3]"
                />
                <div className="flex justify-between text-[11px] text-[#94A3B8] font-mono mt-1">
                  <span>₹2 Lakhs</span>
                  <span>₹1 Crore</span>
                  <span>₹2 Crores+</span>
                </div>
              </div>

              {/* Slider 2: Card vs UPI Split */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-[#64748B] uppercase tracking-wider">
                    Credit Card & Net Banking Share:
                  </span>
                  <span className="text-lg font-bold font-mono text-[#1856F3]">
                    {cardPercentage}% Cards / {100 - cardPercentage}% UPI
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="90"
                  step="5"
                  value={cardPercentage}
                  onChange={(e) => setCardPercentage(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#E2E8F0] rounded-lg appearance-none cursor-pointer accent-[#1856F3]"
                />
              </div>

              {/* Feature Inclusions Pill List */}
              <div className="grid grid-cols-2 gap-2 pt-4 border-t border-[#E2E8F0] text-xs">
                <div className="flex items-center gap-2 text-[#334155]">
                  <CheckCircle2 size={15} className="text-[#10B981]" />
                  <span>Zero UPI Processing Fee</span>
                </div>
                <div className="flex items-center gap-2 text-[#334155]">
                  <CheckCircle2 size={15} className="text-[#10B981]" />
                  <span>Free Instant T+0 Settlements</span>
                </div>
                <div className="flex items-center gap-2 text-[#334155]">
                  <CheckCircle2 size={15} className="text-[#10B981]" />
                  <span>No Setup or Annual AMC</span>
                </div>
                <div className="flex items-center gap-2 text-[#334155]">
                  <CheckCircle2 size={15} className="text-[#10B981]" />
                  <span>24/7 Dedicated Support SLA</span>
                </div>
              </div>

            </div>

            {/* Right Column: Estimated Savings Card */}
            <div className="md:col-span-5">
              <div className="neu-sunken p-6 rounded-3xl bg-[#F0F4F8] border border-white flex flex-col items-center text-center">
                
                <span className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-1">
                  Estimated Annual Savings
                </span>

                <div className="text-3xl sm:text-4xl font-extrabold text-[#10B981] font-mono mb-4">
                  ₹{Math.round(calculations.annualSavings).toLocaleString('en-IN')}
                </div>

                <div className="w-full space-y-2.5 text-xs pb-4 mb-4 border-b border-[#CBD5E1]/60 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-[#64748B]">Legacy Gateways:</span>
                    <span className="font-mono font-bold text-[#E11D48] line-through">
                      ₹{Math.round(calculations.standardTotalMonthly).toLocaleString('en-IN')}/mo
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[#64748B]">Smart2Pay Optimized:</span>
                    <span className="font-mono font-bold text-[#042656]">
                      ₹{Math.round(calculations.smart2payTotalMonthly).toLocaleString('en-IN')}/mo
                    </span>
                  </div>
                </div>

                <Button
                  variant="primary"
                  size="md"
                  icon={ArrowRight}
                  iconPosition="right"
                  onClick={onOpenDemoModal}
                  className="w-full justify-center text-sm font-bold"
                >
                  Claim Custom Rate
                </Button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
