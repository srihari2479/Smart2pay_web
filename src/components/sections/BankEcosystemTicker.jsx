import React from 'react';
import { Building2, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import Badge from '../common/Badge';
import { getAssetUrl } from '../../utils/assetHelper';

export default function BankEcosystemTicker() {
  const bankList = [
    { name: 'AXIS BANK', file: 'AXIS BANK.png' },
    { name: 'BANK OF BARODA', file: 'BANK OF BARODA.png' },
    { name: 'CANARA BANK', file: 'CANARA BANK.png' },
    { name: 'BANK OF INDIA', file: 'BANK OF INDIA.png' },
    { name: 'CENTRAL BANK OF INDIA', file: 'CENTRAL BANK OF INDIA.png' },
    { name: 'BANDHAN BANK', file: 'BANDHAN BANK LIMITED.png' },
    { name: 'AU SMALL FINANCE', file: 'AU SMALL FINANCE BANK LIMITED.png' },
    { name: 'AIRTEL PAYMENTS BANK', file: 'AIRTEL PAYMENTS BANK LIMITED.png' },
    { name: 'BARCLAYS BANK', file: 'BARCLAYS BANK.png' },
    { name: 'BANK OF AMERICA', file: 'BANK OF AMERICA.png' }
  ];

  const gatewayPartners = [
    { name: 'Razorpay', file: 'cards_razorpay.png' },
    { name: 'PayU', file: 'cards_payu.png' },
    { name: 'Cashfree', file: 'cards_cashfree.png' },
    { name: 'OceanPay', file: 'cards_oceanpay.png' },
    { name: 'Amex Network', file: 'amex.png' },
    { name: 'Diners Club', file: 'diners.png' }
  ];

  return (
    <section className="py-8 sm:py-10 my-4 bg-gradient-to-b from-[#EEF2F6] via-[#E4ECF4] to-[#EEF2F6] border-y border-[#CBD5E1] shadow-[inset_0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden">
      <div className="container mx-auto px-4 mb-5 text-center">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 border border-white shadow-[2px_2px_6px_rgba(163,177,198,0.2)] text-xs sm:text-sm font-black uppercase tracking-widest text-[#475569]">
          <Building2 size={16} className="text-[#1856F3]" />
          <span>Integrated with 50+ Scheduled Commercial Banks & Gateway Switches</span>
        </div>
      </div>

      {/* Primary Bank Logos Ticker Track */}
      <div className="relative w-full overflow-hidden flex py-3">
        <div className="animate-ticker flex items-center gap-8 sm:gap-10 px-6">
          {[...bankList, ...bankList].map((bank, i) => (
            <div
              key={`bank-${i}`}
              className="flex items-center gap-3.5 px-6 py-3.5 rounded-2xl sm:rounded-3xl bg-white border border-white shadow-[2px_3px_8px_rgba(163,177,198,0.16),-2px_-3px_8px_rgba(255,255,255,0.9)] shrink-0 hover:shadow-[4px_6px_14px_rgba(24,86,243,0.15)] transition-all hover:scale-105 duration-200"
            >
              <img
                src={getAssetUrl(`assets/banklogos/${bank.file}`)}
                alt={bank.name}
                className="h-8 sm:h-9 w-auto max-w-[130px] object-contain transition-all"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <span className="text-xs sm:text-sm font-black text-[#042656] tracking-tight whitespace-nowrap">
                {bank.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Gateway & Network Rails Ticker Track */}
      <div className="relative w-full overflow-hidden flex pt-4 pb-2">
        <div className="animate-ticker-reverse flex items-center gap-8 sm:gap-10 px-6">
          {[...gatewayPartners, ...gatewayPartners].map((partner, i) => (
            <div
              key={`gateway-${i}`}
              className="flex items-center gap-3.5 px-6 py-3 rounded-2xl sm:rounded-3xl bg-white/90 border border-white shadow-[2px_2px_6px_rgba(163,177,198,0.14),-2px_-2px_6px_rgba(255,255,255,0.9)] shrink-0 hover:bg-white hover:shadow-[3px_4px_10px_rgba(16,185,129,0.15)] transition-all hover:scale-105 duration-200"
            >
              <img
                src={getAssetUrl(`assets/cards/${partner.file}`)}
                alt={partner.name}
                className="h-7 sm:h-8 w-auto max-w-[110px] object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <span className="text-xs sm:text-sm font-bold text-[#334155] whitespace-nowrap">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
