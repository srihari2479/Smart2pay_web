import React from 'react';
import { Building2, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import Badge from '../common/Badge';

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
    <section className="py-6 my-2 bg-[#EBF0F6]/90 border-y border-[#D8E1EA] shadow-[inset_0_2px_6px_rgba(0,0,0,0.03)] overflow-hidden">
      <div className="container mx-auto px-4 mb-3 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#64748B]">
          <Building2 size={15} className="text-[#1856F3]" />
          <span>Integrated with 50+ Scheduled Commercial Banks & Gateway Switches</span>
        </div>
      </div>

      {/* Primary Bank Logos Ticker Track */}
      <div className="relative w-full overflow-hidden flex py-2">
        <div className="animate-ticker flex items-center gap-8 px-4">
          {[...bankList, ...bankList].map((bank, i) => (
            <div
              key={`bank-${i}`}
              className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white/70 border border-white shadow-[2px_2px_8px_rgba(163,177,198,0.25)] shrink-0 hover:bg-white transition-all hover:scale-105"
            >
              <img
                src={`/assets/banklogos/${bank.file}`}
                alt={bank.name}
                className="h-6 w-auto max-w-[110px] object-contain grayscale hover:grayscale-0 transition-all"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <span className="text-xs font-bold text-[#334155]">{bank.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Gateway & Network Rails Ticker Track (Reverse Direction) */}
      <div className="relative w-full overflow-hidden flex pt-4">
        <div className="animate-ticker-reverse flex items-center gap-8 px-4">
          {[...gatewayPartners, ...gatewayPartners].map((partner, i) => (
            <div
              key={`gateway-${i}`}
              className="flex items-center gap-3 px-5 py-2 rounded-2xl bg-white/50 border border-white/80 shadow-[2px_2px_6px_rgba(163,177,198,0.2)] shrink-0 hover:bg-white transition-all hover:scale-105"
            >
              <img
                src={`/assets/cards/${partner.file}`}
                alt={partner.name}
                className="h-6 w-auto max-w-[90px] object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <span className="text-xs font-semibold text-[#475569]">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
