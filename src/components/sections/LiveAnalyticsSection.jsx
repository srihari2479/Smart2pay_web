import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  ArrowUpRight, 
  CheckCircle2, 
  Clock, 
  CreditCard, 
  Zap,
  Activity,
  Filter,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import Card from '../common/Card';
import Badge from '../common/Badge';
import { getAssetUrl } from '../../utils/assetHelper';

export default function LiveAnalyticsSection() {
  const [activeRange, setActiveRange] = useState('Live (1h)');
  const [liveClock, setLiveClock] = useState('');

  // Realistic dynamic datasets for each timeframe
  const rangeData = {
    'Live (1h)': {
      volume: 4829600,
      volumeFormatted: '₹48,29,600',
      volumeGrowth: '+18.4% vs last hour',
      successRate: '99.98%',
      successSub: 'Zero dropouts on primary CBS',
      latency: '142 ms',
      latencySub: 'NPCI & Switch round-trip',
      transactions: [
        { id: 'S2P-9841', merchant: 'Apex Retailers & POS', method: 'HDFC CC', amount: '₹18,450', status: 'Settled', time: 'Just now', badgeColor: 'bg-blue-50 text-[#1856F3] border-blue-200/60' },
        { id: 'S2P-9840', merchant: 'Urban Stays Rent Rails', method: 'Axis NetBanking', amount: '₹35,000', status: 'Settled', time: '4s ago', badgeColor: 'bg-emerald-50 text-[#059669] border-emerald-200/60' },
        { id: 'S2P-9839', merchant: 'Green Valley Global School', method: 'UPI Dynamic QR', amount: '₹12,200', status: 'Settled', time: '18s ago', badgeColor: 'bg-purple-50 text-[#7C3AED] border-purple-200/60' },
        { id: 'S2P-9838', merchant: 'Metro Health Diagnostics', method: 'ICICI RuPay', amount: '₹4,800', status: 'Settled', time: '34s ago', badgeColor: 'bg-amber-50 text-[#D97706] border-amber-200/60' },
        { id: 'S2P-9837', merchant: 'Skyline Airways Booking', method: 'Amex Network', amount: '₹28,900', status: 'Settled', time: '52s ago', badgeColor: 'bg-cyan-50 text-[#0891B2] border-cyan-200/60' }
      ]
    },
    'Today': {
      volume: 18472500,
      volumeFormatted: '₹1,84,72,500',
      volumeGrowth: '+24.1% vs yesterday',
      successRate: '99.99%',
      successSub: 'Dynamic multi-bank failover active',
      latency: '138 ms',
      latencySub: 'Direct IMPS clearance SLA',
      transactions: [
        { id: 'S2P-9780', merchant: 'Horizon Luxury Towers', method: 'Credit Card Rent', amount: '₹1,45,000', status: 'Settled', time: '12:15 PM', badgeColor: 'bg-blue-50 text-[#1856F3] border-blue-200/60' },
        { id: 'S2P-9778', merchant: 'Vanguard Retail Soundbox', method: 'UPI Dynamic QR', amount: '₹68,400', status: 'Settled', time: '11:42 AM', badgeColor: 'bg-emerald-50 text-[#059669] border-emerald-200/60' },
        { id: 'S2P-9774', merchant: 'Oakridge University Campus', method: '0% EMI Challan', amount: '₹2,10,000', status: 'Settled', time: '10:18 AM', badgeColor: 'bg-purple-50 text-[#7C3AED] border-purple-200/60' },
        { id: 'S2P-9769', merchant: 'CarePlus Life Insurance', method: 'Auto-Debit ECS', amount: '₹42,500', status: 'Settled', time: '09:05 AM', badgeColor: 'bg-amber-50 text-[#D97706] border-amber-200/60' },
        { id: 'S2P-9761', merchant: 'TransGlobe Holiday Express', method: 'Corporate Virtual Card', amount: '₹95,200', status: 'Settled', time: '08:30 AM', badgeColor: 'bg-cyan-50 text-[#0891B2] border-cyan-200/60' }
      ]
    },
    '7 Days': {
      volume: 124590000,
      volumeFormatted: '₹12,45,90,000',
      volumeGrowth: '+31.8% vs last week',
      successRate: '99.97%',
      successSub: '50+ Scheduled Commercial Banks',
      latency: '145 ms',
      latencySub: 'Automated batch reconciliation',
      transactions: [
        { id: 'S2P-9402', merchant: 'Phoenix Mall Chain Stores', method: 'Omnichannel POS QR', amount: '₹8,45,000', status: 'Settled', time: 'Yesterday', badgeColor: 'bg-emerald-50 text-[#059669] border-emerald-200/60' },
        { id: 'S2P-9388', merchant: 'Apex Tech Park Facilities', method: 'IMPS Payout Rail', amount: '₹14,20,000', status: 'Settled', time: '2 days ago', badgeColor: 'bg-blue-50 text-[#1856F3] border-blue-200/60' },
        { id: 'S2P-9350', merchant: 'National Insurance Consortium', method: 'Direct Bank Switch', amount: '₹22,80,000', status: 'Settled', time: '3 days ago', badgeColor: 'bg-purple-50 text-[#7C3AED] border-purple-200/60' },
        { id: 'S2P-9310', merchant: 'Silverline Education Trust', method: 'ERP Ledger Sync', amount: '₹31,50,000', status: 'Settled', time: '5 days ago', badgeColor: 'bg-amber-50 text-[#D97706] border-amber-200/60' },
        { id: 'S2P-9280', merchant: 'Global Transit Airlines', method: 'Sub-Second GDS Hold', amount: '₹18,90,000', status: 'Settled', time: '6 days ago', badgeColor: 'bg-cyan-50 text-[#0891B2] border-cyan-200/60' }
      ]
    },
    '30 Days': {
      volume: 548230000,
      volumeFormatted: '₹54,82,30,000',
      volumeGrowth: '+42.5% YoY Institutional',
      successRate: '99.98%',
      successSub: 'Zero downtime routing SLA',
      latency: '140 ms',
      latencySub: 'High-volume highway throughput',
      transactions: [
        { id: 'S2P-8800', merchant: 'Metro Retail Consortium Group', method: 'Batch POS Settle', amount: '₹1,24,00,000', status: 'Settled', time: 'Aug 28', badgeColor: 'bg-emerald-50 text-[#059669] border-emerald-200/60' },
        { id: 'S2P-8750', merchant: 'SmartCity Housing Society', method: 'Auto-Debit BBPS', amount: '₹84,50,000', status: 'Settled', time: 'Aug 22', badgeColor: 'bg-blue-50 text-[#1856F3] border-blue-200/60' },
        { id: 'S2P-8690', merchant: 'Alliance Healthcare Network', method: 'Direct IMPS Core', amount: '₹96,00,000', status: 'Settled', time: 'Aug 15', badgeColor: 'bg-purple-50 text-[#7C3AED] border-purple-200/60' },
        { id: 'S2P-8620', merchant: 'Prestige Academic Council', method: 'Central ERP Rails', amount: '₹1,45,00,000', status: 'Settled', time: 'Aug 08', badgeColor: 'bg-amber-50 text-[#D97706] border-amber-200/60' },
        { id: 'S2P-8580', merchant: 'Jetways Corporate Portals', method: 'Multi-Currency Forex', amount: '₹2,10,00,000', status: 'Settled', time: 'Aug 01', badgeColor: 'bg-cyan-50 text-[#0891B2] border-cyan-200/60' }
      ]
    }
  };

  const currentData = rangeData[activeRange];

  // Live real-time clock ticker
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setLiveClock(now.toLocaleTimeString('en-US', { hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="analytics" className="pt-6 pb-4 lg:pt-8 lg:pb-6 relative bg-[#F0F4F8] border-b border-[#D8E1EA]/60 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        
        {/* Section Header */}
        <SectionHeader
          badge="Real-Time Analytics & Settlement"
          badgeVariant="blue"
          badgeIcon={Activity}
          title="Full Visibility Into Every Single"
          highlightText="Rupee In Flight."
          subtitle="Monitor multi-bank routing health, instant settlement payouts, and automated dispute resolution from an intuitive console."
          className="mb-8 sm:mb-10"
        />

        {/* Real-Time Ledger Console Card */}
        <div className="bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#EEF2F6] p-6 sm:p-8 rounded-3xl border border-white shadow-[0_10px_30px_rgba(163,177,198,0.2),inset_0_1px_1px_rgba(255,255,255,1)]">
          
          {/* Dashboard Header Bar with Official Smart2Pay Logo */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#E2E8F0] mb-8">
            
            {/* Left: Official Smart2Pay Logo & Title */}
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#042656] to-[#0A3A80] p-2 flex items-center justify-center shadow-sm border border-white/40 shrink-0">
                <img
                  src={getAssetUrl('assets/logo/smart2pay_monogram.png')}
                  alt="Smart2Pay"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base sm:text-lg font-black text-[#042656]">
                    Merchant Real-Time Ledger Console
                  </h3>
                  <span className="hidden sm:inline px-2 py-0.5 rounded-full bg-[#EBF1FF] text-[#1856F3] text-[10px] font-black border border-blue-200/60">
                    Live V4.2
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#10B981] mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
                  <span>Live Webhook Sync: 0ms lag</span>
                  <span className="text-[#94A3B8]">•</span>
                  <span className="font-mono text-[#64748B] text-[11px]">{liveClock} UTC+05:30</span>
                </div>
              </div>
            </div>

            {/* Right: Interactive Timeframe Selector Pills */}
            <div className="flex items-center gap-1.5 bg-white/90 p-1.5 rounded-2xl border border-white shadow-[1px_1px_4px_rgba(163,177,198,0.15)]">
              {['Live (1h)', 'Today', '7 Days', '30 Days'].map((tab) => {
                const isActive = activeRange === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveRange(tab)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-[#042656] text-white shadow-[0_2px_8px_rgba(4,38,86,0.2)] scale-105'
                        : 'text-[#64748B] hover:text-[#042656] hover:bg-[#F1F5F9]'
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>

          </div>

          {/* Metric Highlights (Skeuomorphic + Neumorphic Extruded Ceramic Tiles) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 mb-8">
            
            {/* Stat 1: Volume */}
            <div className="bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#EEF2F6] p-5 rounded-2xl border border-white shadow-[2px_3px_8px_rgba(163,177,198,0.18),-2px_-3px_8px_rgba(255,255,255,0.9)] hover:-translate-y-0.5 transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10.5px] font-black text-[#64748B] uppercase tracking-[0.12em]">
                  Settled Gross Volume
                </span>
                <span className="w-2 h-2 rounded-full bg-[#1856F3] animate-pulse" />
              </div>
              <div className="text-2xl sm:text-[28px] font-black font-mono text-[#042656] tracking-tight mb-2 animate-fadeIn">
                {currentData.volumeFormatted}
              </div>
              <div className="text-xs font-bold text-[#10B981] flex items-center gap-1">
                <TrendingUp size={14} />
                <span>{currentData.volumeGrowth}</span>
              </div>
            </div>

            {/* Stat 2: Multi-Bank Route Success */}
            <div className="bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#EEF2F6] p-5 rounded-2xl border border-white shadow-[2px_3px_8px_rgba(163,177,198,0.18),-2px_-3px_8px_rgba(255,255,255,0.9)] hover:-translate-y-0.5 transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10.5px] font-black text-[#64748B] uppercase tracking-[0.12em]">
                  Multi-Bank Route Success
                </span>
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              </div>
              <div className="text-2xl sm:text-[28px] font-black font-mono text-[#059669] tracking-tight mb-2 animate-fadeIn">
                {currentData.successRate}
              </div>
              <span className="text-xs font-semibold text-[#64748B]">
                {currentData.successSub}
              </span>
            </div>

            {/* Stat 3: Average Latency */}
            <div className="bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#EEF2F6] p-5 rounded-2xl border border-white shadow-[2px_3px_8px_rgba(163,177,198,0.18),-2px_-3px_8px_rgba(255,255,255,0.9)] hover:-translate-y-0.5 transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10.5px] font-black text-[#64748B] uppercase tracking-[0.12em]">
                  Average Settlement Latency
                </span>
                <span className="w-2 h-2 rounded-full bg-[#1856F3] animate-pulse" />
              </div>
              <div className="text-2xl sm:text-[28px] font-black font-mono text-[#1856F3] tracking-tight mb-2 animate-fadeIn">
                {currentData.latency}
              </div>
              <span className="text-xs font-semibold text-[#64748B]">
                {currentData.latencySub}
              </span>
            </div>

          </div>

          {/* Live Transaction Feed Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#CBD5E1]/80 text-[#64748B] text-[11px] font-black uppercase tracking-wider">
                  <th className="pb-3 px-3">TXN REF</th>
                  <th className="pb-3 px-3">MERCHANT / ENTITY</th>
                  <th className="pb-3 px-3">METHOD</th>
                  <th className="pb-3 px-3">AMOUNT</th>
                  <th className="pb-3 px-3">STATUS</th>
                  <th className="pb-3 px-3">TIME</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0]/70 font-semibold text-[#334155]">
                {currentData.transactions.map((txn) => (
                  <tr key={txn.id} className="hover:bg-white/80 transition-colors animate-fadeIn">
                    <td className="py-3.5 px-3 font-mono font-black text-[#042656]">{txn.id}</td>
                    <td className="py-3.5 px-3 font-bold text-[#0F172A]">{txn.merchant}</td>
                    <td className="py-3.5 px-3">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-extrabold border shadow-sm ${txn.badgeColor}`}>
                        {txn.method}
                      </span>
                    </td>
                    <td className="py-3.5 px-3 font-mono font-black text-[#042656]">{txn.amount}</td>
                    <td className="py-3.5 px-3">
                      <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-[#059669] bg-[#D1FAE5] px-2.5 py-0.5 rounded-full border border-emerald-200/60 shadow-sm">
                        <CheckCircle2 size={12} /> {txn.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-3 font-mono text-xs text-[#64748B]">{txn.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>

      </div>
    </section>
  );
}
