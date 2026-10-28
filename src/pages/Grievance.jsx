import React from 'react';
import { 
  ShieldAlert, 
  Clock, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  AlertCircle, 
  MessageSquare, 
  Send, 
  Scale, 
  ExternalLink,
  UserCheck,
  ShieldCheck,
  FileText,
  Building2,
  ChevronRight
} from 'lucide-react';
import LegalLayout from '../components/legal/LegalLayout';

export default function Grievance() {
  const officials = [
    {
      levelBadge: 'LEVEL 1',
      category: 'Frontline Care',
      name: 'Customer Support Desk',
      title: 'Frontline Support Team',
      description: 'First point of contact for routine queries, failed recharges, bill payments, and general account inquiries.',
      email: 'smart2payment@gmail.com',
      emailSecondary: null,
      phone: '+91 9750585861',
      phoneSecondary: null,
      sla: 'Ack within 2 working days',
      accent: 'border-blue-100 bg-gradient-to-b from-blue-50/40 via-white to-white',
      badgeClass: 'bg-blue-100/80 text-blue-800 border-blue-200',
      iconClass: 'text-[#1856F3]'
    },
    {
      levelBadge: 'LEVEL 2',
      category: 'Grievance Officer',
      name: 'Geetha Chukkala',
      title: 'Designated Grievance Officer',
      description: 'Designated official for escalated complaints unresolved by frontline support within standard SLA timelines.',
      email: 'info.geetha1720@gmail.com',
      emailSecondary: null,
      phone: '+91 6309341213',
      phoneSecondary: null,
      sla: 'Resolution within 7 working days',
      accent: 'border-amber-100 bg-gradient-to-b from-amber-50/40 via-white to-white',
      badgeClass: 'bg-amber-100/80 text-amber-900 border-amber-200',
      iconClass: 'text-amber-600'
    },
    {
      levelBadge: 'LEVEL 3',
      category: 'Senior Escalation',
      name: 'Vinay Kumar',
      title: 'Senior Grievance Escalation Authority',
      description: 'Highest internal authority for complex disputes, regulatory references, or unsatisfied Level 2 cases.',
      email: 'vinay.bunny420@gmail.com',
      emailSecondary: null,
      phone: '+91 7207508599',
      phoneSecondary: null,
      sla: 'Final review & escalation outcome',
      accent: 'border-rose-100 bg-gradient-to-b from-rose-50/40 via-white to-white',
      badgeClass: 'bg-rose-100/80 text-rose-900 border-rose-200',
      iconClass: 'text-rose-600'
    }
  ];

  const steps = [
    {
      step: '01',
      title: 'Registration & Ack',
      desc: 'Complaint ticket generated and acknowledged within 2 working days with unique tracking reference details.'
    },
    {
      step: '02',
      title: 'Investigation',
      desc: 'Technical records reviewed and coordinated with partner banks, card networks, aggregators, or billers.'
    },
    {
      step: '03',
      title: 'Resolution',
      desc: 'Resolution communicated clearly with transparent audit notes, refund details, or corrective transactions.'
    },
    {
      step: '04',
      title: 'Escalation',
      desc: 'If unresolved or unsatisfactory within timeline, matter escalates automatically to Level 2 Grievance Officer.'
    }
  ];

  return (
    <LegalLayout title="Grievance Redressal Policy" lastUpdated="October 27, 2026">
      
      {/* Policy Introduction Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#EBF1FF] to-[#F1F5F9] border border-[#CBD5E1]/80 shadow-xs mb-8 space-y-3">
        <div className="flex items-center gap-2.5 font-bold text-[#042656] text-base">
          <div className="w-8 h-8 rounded-xl bg-[#1856F3] text-white flex items-center justify-center shadow-xs">
            <Scale size={18} />
          </div>
          <span>Customer Support & Designated Grievance Redressal Framework</span>
        </div>
        <p className="text-sm text-[#334155] leading-relaxed">
          This Grievance Redressal Policy explains how customers, merchants, business partners, and other users can raise complaints about <strong>Smart2Pay</strong> (Powered by <strong>Buddica Global Solutions Pvt Ltd</strong>, alongside its fintech partner network including HappyPay) and how such complaints will be acknowledged, investigated, and resolved in a transparent and time-bound manner.
        </p>
        <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-semibold text-[#64748B]">
          <span className="inline-flex items-center gap-1 text-[#042656]">
            Official Portal: <a href="https://smart2pay.co.in" className="text-[#1856F3] underline font-bold">https://smart2pay.co.in</a>
          </span>
          <span className="text-slate-300">•</span>
          <span className="inline-flex items-center gap-1 text-[#042656]">
            Network Ecosystem: <a href="https://happypay.live" target="_blank" rel="noreferrer" className="text-[#1856F3] underline">https://happypay.live</a>
          </span>
        </div>
      </div>

      {/* Designated Directory - Escalation Matrix Cards */}
      <div className="space-y-4 mb-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-[#E2E8F0]">
          <div>
            <h2 className="text-xl font-extrabold text-[#0F172A] tracking-tight">
              Designated Grievance & Customer Support Officials
            </h2>
            <p className="text-xs text-[#64748B] mt-0.5">
              Published in strict compliance with regulatory and statutory consumer protection guidelines.
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 shrink-0 self-start sm:self-auto">
            <ShieldCheck size={14} className="text-emerald-600" />
            <span>Statutory Directory</span>
          </span>
        </div>

        {/* 3 Perfectly Aligned Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-3">
          {officials.map((off, idx) => (
            <div 
              key={idx}
              className={`rounded-2xl border p-6 flex flex-col justify-between shadow-xs transition-all duration-200 hover:shadow-md ${off.accent}`}
            >
              {/* Top Meta Area */}
              <div>
                <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-[#E2E8F0]/70">
                  <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md border ${off.badgeClass}`}>
                    {off.levelBadge}
                  </span>
                  <span className="text-xs font-bold text-[#64748B]">
                    {off.category}
                  </span>
                </div>

                {/* Official's Identity */}
                <div className="mb-4">
                  <h3 className="text-base sm:text-lg font-black text-[#0F172A] tracking-tight mb-1">
                    {off.name}
                  </h3>
                  <div className="text-xs font-bold text-[#1856F3]">
                    {off.title}
                  </div>
                </div>

                {/* Description with fixed min-height for uniform alignment */}
                <p className="text-xs text-[#475569] leading-relaxed min-h-[52px]">
                  {off.description}
                </p>
              </div>

              {/* Bottom Contact Area with clean spacing */}
              <div className="pt-4 mt-4 border-t border-[#E2E8F0] space-y-3">
                {/* Email Channels */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs">
                    <Mail size={13} className={`${off.iconClass} shrink-0`} />
                    <a 
                      href={`mailto:${off.email}`} 
                      className="font-bold text-[#0F172A] hover:text-[#1856F3] hover:underline truncate"
                    >
                      {off.email}
                    </a>
                  </div>
                  {off.emailSecondary && (
                    <div className="flex items-center gap-2 text-[11px] text-[#64748B] pl-5">
                      <span className="text-slate-400">Alt:</span>
                      <a href={`mailto:${off.emailSecondary}`} className="hover:underline truncate">
                        {off.emailSecondary}
                      </a>
                    </div>
                  )}
                </div>

                {/* Phone Channels */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs">
                    <Phone size={13} className={`${off.iconClass} shrink-0`} />
                    <a 
                      href={`tel:${off.phone}`} 
                      className="font-mono font-bold text-[#0F172A] hover:text-[#1856F3] hover:underline"
                    >
                      {off.phone}
                    </a>
                  </div>
                  {off.phoneSecondary && (
                    <div className="flex items-center gap-2 text-[11px] text-[#64748B] pl-5">
                      <span className="text-slate-400">Desk 2:</span>
                      <a href={`tel:${off.phoneSecondary}`} className="font-mono hover:underline">
                        {off.phoneSecondary}
                      </a>
                    </div>
                  )}
                </div>

                {/* SLA Badge */}
                <div className="pt-2">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200/70 text-[11px] font-bold">
                    <Clock size={12} className="text-emerald-600 shrink-0" />
                    <span>{off.sla}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 1: About Smart2Pay & Buddica */}
      <section className="space-y-3 pt-2">
        <h2 className="text-base sm:text-lg font-bold text-[#0F172A] flex items-center gap-2">
          <span className="w-6 h-6 rounded-md bg-[#1856F3]/10 text-[#1856F3] inline-flex items-center justify-center text-xs font-bold">1</span>
          <span>ABOUT SMART2PAY & BUDDICA GLOBAL SOLUTIONS</span>
        </h2>
        <p className="text-sm text-[#334155] leading-relaxed">
          <strong>Smart2Pay</strong> is a specialized digital services and payment infrastructure platform operated and Powered by <strong>Buddica Global Solutions Private Limited</strong> (“Buddica”, “Smart2Pay”, “we”, “us” or “our”), functioning collaboratively across our digital financial ecosystem alongside partner platforms including HappyPay. Through its portal, APIs, and business channels, Smart2Pay facilitates mobile recharges, BBPS utility bill collections, multi-bank payment rails, dynamic QR collections, payout switches, digital gold, and related enterprise services displayed from time to time.
        </p>
        <p className="text-sm text-[#475569] leading-relaxed">
          The exact service provider, payment aggregator, partner bank, biller, or regulated entity involved may vary by transaction. For transactions processed by a partner bank, payment system operator, biller, merchant, or third-party service provider, Smart2Pay coordinates with the relevant entity where appropriate. This does not replace any complaint or dispute process that the relevant bank, issuer, payment system operator, biller, or regulator makes available directly to the customer.
        </p>
      </section>

      {/* Section 2: Purpose and Scope */}
      <section className="space-y-3 pt-2">
        <h2 className="text-base sm:text-lg font-bold text-[#0F172A] flex items-center gap-2">
          <span className="w-6 h-6 rounded-md bg-[#1856F3]/10 text-[#1856F3] inline-flex items-center justify-center text-xs font-bold">2</span>
          <span>PURPOSE AND SCOPE</span>
        </h2>
        <p className="text-sm text-[#334155] leading-relaxed">
          This policy is intended to provide a fair, accessible, and time-bound process for raising and resolving complaints relating to:
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs sm:text-sm text-[#334155] pt-1">
          <li className="flex items-start gap-2 p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
            <CheckCircle2 size={15} className="text-[#10B981] shrink-0 mt-0.5" />
            <span>Account registration, login, profile, KYC, or KYB verification workflow issues.</span>
          </li>
          <li className="flex items-start gap-2 p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
            <CheckCircle2 size={15} className="text-[#10B981] shrink-0 mt-0.5" />
            <span>Failed, pending, delayed, duplicate, or incorrectly processed transactions.</span>
          </li>
          <li className="flex items-start gap-2 p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
            <CheckCircle2 size={15} className="text-[#10B981] shrink-0 mt-0.5" />
            <span>Recharge, bill payment, FASTag, or other supported payment-service issues.</span>
          </li>
          <li className="flex items-start gap-2 p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
            <CheckCircle2 size={15} className="text-[#10B981] shrink-0 mt-0.5" />
            <span>Refunds, reversals, settlement status, fees, or charges displayed or applied.</span>
          </li>
          <li className="flex items-start gap-2 p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
            <CheckCircle2 size={15} className="text-[#10B981] shrink-0 mt-0.5" />
            <span>Merchant onboarding, B2B portal access, service availability, or API concerns.</span>
          </li>
          <li className="flex items-start gap-2 p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
            <CheckCircle2 size={15} className="text-[#10B981] shrink-0 mt-0.5" />
            <span>Suspected unauthorised activity, security concerns, or suspected fraud.</span>
          </li>
        </ul>
      </section>

      {/* Section 3: How to Raise a Grievance */}
      <section className="space-y-4 pt-2">
        <h2 className="text-base sm:text-lg font-bold text-[#0F172A] flex items-center gap-2">
          <span className="w-6 h-6 rounded-md bg-[#1856F3]/10 text-[#1856F3] inline-flex items-center justify-center text-xs font-bold">3</span>
          <span>HOW TO RAISE A GRIEVANCE</span>
        </h2>
        <p className="text-sm text-[#334155]">
          Customers, partners, and merchants may submit grievances through any of the following verified channels:
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-white border border-[#CBD5E1]/80 shadow-xs space-y-2">
            <div className="font-bold text-[#0F172A] flex items-center gap-2 text-sm">
              <div className="w-7 h-7 rounded-lg bg-blue-100 text-[#1856F3] flex items-center justify-center">
                <Mail size={14} />
              </div>
              <span>Email Support</span>
            </div>
            <div className="text-xs text-[#475569] space-y-1 pl-9">
              <div>Primary: <a href="mailto:smart2payment@gmail.com" className="text-[#1856F3] font-bold hover:underline">smart2payment@gmail.com</a></div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#CBD5E1]/80 shadow-xs space-y-2">
            <div className="font-bold text-[#0F172A] flex items-center gap-2 text-sm">
              <div className="w-7 h-7 rounded-lg bg-blue-100 text-[#1856F3] flex items-center justify-center">
                <Phone size={14} />
              </div>
              <span>Helpline Support</span>
            </div>
            <div className="text-xs text-[#475569] space-y-1 pl-9 font-mono">
              <div>Primary: <a href="tel:+919750585861" className="text-[#1856F3] font-bold hover:underline">+91 9750585861</a></div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#CBD5E1]/80 shadow-xs space-y-2">
            <div className="font-bold text-[#0F172A] flex items-center gap-2 text-sm">
              <div className="w-7 h-7 rounded-lg bg-emerald-100 text-[#10B981] flex items-center justify-center">
                <MessageSquare size={14} />
              </div>
              <span>Instant Chat Channel</span>
            </div>
            <div className="text-xs text-[#475569] space-y-1.5 pl-9">
              <div>WhatsApp: <a href="https://wa.me/918838607449" target="_blank" rel="noreferrer" className="text-[#10B981] font-bold hover:underline inline-flex items-center gap-1">+91 8838607449 <ExternalLink size={10} /></a></div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#CBD5E1]/80 shadow-xs space-y-2">
            <div className="font-bold text-[#0F172A] flex items-center gap-2 text-sm">
              <div className="w-7 h-7 rounded-lg bg-rose-100 text-[#F43F5E] flex items-center justify-center">
                <MapPin size={14} />
              </div>
              <span>Registered Operational Address</span>
            </div>
            <div className="text-xs text-[#475569] pl-9 leading-relaxed">
              <strong>SMART2PAY</strong> (Powered by Buddica Global Solutions)<br />
              NO.24, SRP COLONY, 8TH STREET, PAPER MILLS ROAD, PERAVALLUR, CHENNAI - 600082.
            </div>
          </div>
        </div>

        {/* Security Warning */}
        <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-900 space-y-1.5">
          <div className="font-bold flex items-center gap-1.5 text-amber-950">
            <AlertCircle size={15} className="text-amber-700" />
            <span>Important Safety & Required Information</span>
          </div>
          <p className="leading-relaxed">
            Please provide your registered mobile number, email, transaction reference ID (UTR / Txn ID), date, time, and debited amount.
          </p>
          <p className="font-bold text-rose-800 leading-relaxed">
            Never disclose your password, card CVV, UPI PIN, OTP, or remote-access credentials. Smart2Pay, Buddica, and its officials will never solicit confidential authentication credentials.
          </p>
        </div>
      </section>

      {/* Section 4: Grievance Handling Process */}
      <section className="space-y-4 pt-2">
        <h2 className="text-base sm:text-lg font-bold text-[#0F172A] flex items-center gap-2">
          <span className="w-6 h-6 rounded-md bg-[#1856F3]/10 text-[#1856F3] inline-flex items-center justify-center text-xs font-bold">4</span>
          <span>GRIEVANCE HANDLING PROCESS</span>
        </h2>
        <p className="text-sm text-[#334155]">
          Every grievance logged with Smart2Pay undergoes a transparent, structured 4-step resolution workflow:
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((st, i) => (
            <div key={i} className="p-4 rounded-xl bg-white border border-[#CBD5E1]/80 shadow-xs flex flex-col justify-between space-y-2">
              <div>
                <span className="text-[11px] font-black tracking-widest text-[#1856F3] bg-[#EBF1FF] px-2 py-0.5 rounded">
                  STEP {st.step}
                </span>
                <h3 className="text-sm font-bold text-[#0F172A] mt-2">{st.title}</h3>
              </div>
              <p className="text-xs text-[#475569] leading-relaxed">{st.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Grievance Officer & Escalation Matrix Table */}
      <section className="space-y-4 pt-2">
        <h2 className="text-base sm:text-lg font-bold text-[#0F172A] flex items-center gap-2">
          <span className="w-6 h-6 rounded-md bg-[#1856F3]/10 text-[#1856F3] inline-flex items-center justify-center text-xs font-bold">5</span>
          <span>GRIEVANCE OFFICER & ESCALATION MATRIX</span>
        </h2>
        <p className="text-sm text-[#334155]">
          Smart2Pay implements a structured three-level internal grievance redressal mechanism. Complainants are requested to first approach Level 1 Support before escalating to higher authority tiers.
        </p>

        <div className="overflow-x-auto rounded-xl border border-[#CBD5E1]/80 shadow-xs">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-[#F8FAFC] border-b border-[#CBD5E1]/80 text-[#475569] font-bold">
              <tr>
                <th className="p-3.5 whitespace-nowrap">Level</th>
                <th className="p-3.5 whitespace-nowrap">Designated Official</th>
                <th className="p-3.5 whitespace-nowrap">Direct Contact Channels</th>
                <th className="p-3.5">Scope & Mandated SLA</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8F0] text-[#334155] bg-white">
              <tr>
                <td className="p-3.5 font-bold text-[#042656]">
                  Level 1
                  <span className="block text-[11px] font-normal text-[#64748B]">First-Line Support</span>
                </td>
                <td className="p-3.5">
                  <span className="font-semibold text-[#0F172A]">Customer Support Desk</span>
                  <span className="block text-xs text-[#64748B]">Frontline Support Team</span>
                </td>
                <td className="p-3.5">
                  <a href="mailto:smart2payment@gmail.com" className="text-[#1856F3] font-bold hover:underline block">smart2payment@gmail.com</a>
                  <span className="font-mono text-xs text-[#475569] block mt-0.5">+91 9750585861</span>
                </td>
                <td className="p-3.5 text-xs sm:text-sm leading-relaxed">
                  Initial complaint registration, transaction queries, and routine operational resolution. <strong>Ack within 2 working days.</strong>
                </td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-amber-800">
                  Level 2
                  <span className="block text-[11px] font-normal text-[#64748B]">Grievance Officer</span>
                </td>
                <td className="p-3.5">
                  <span className="font-bold text-[#0F172A]">Geetha Chukkala</span>
                  <span className="block text-xs text-[#64748B]">Designated Grievance Officer</span>
                </td>
                <td className="p-3.5">
                  <a href="mailto:info.geetha1720@gmail.com" className="text-[#1856F3] font-bold hover:underline block">info.geetha1720@gmail.com</a>
                  <span className="font-mono text-xs text-[#475569] block mt-0.5">+91 6309341213</span>
                </td>
                <td className="p-3.5 text-xs sm:text-sm leading-relaxed">
                  Independent assessment of unresolved complaints from Level 1. <strong>Target resolution within 7 working days.</strong>
                </td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-rose-800">
                  Level 3
                  <span className="block text-[11px] font-normal text-[#64748B]">Senior Escalation</span>
                </td>
                <td className="p-3.5">
                  <span className="font-bold text-[#0F172A]">Vinay Kumar</span>
                  <span className="block text-xs text-[#64748B]">Senior Grievance Escalation</span>
                </td>
                <td className="p-3.5">
                  <a href="mailto:vinay.bunny420@gmail.com" className="text-[#1856F3] font-bold hover:underline block">vinay.bunny420@gmail.com</a>
                  <span className="font-mono text-xs text-[#475569] block mt-0.5">+91 7207508599</span>
                </td>
                <td className="p-3.5 text-xs sm:text-sm leading-relaxed">
                  Final internal dispute escalation review, regulatory inquiries, and comprehensive handling. Conveys final enterprise decision.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Sections 6 - 15 */}
      <section className="space-y-3 pt-2">
        <h2 className="text-base sm:text-lg font-bold text-[#0F172A] flex items-center gap-2">
          <span className="w-6 h-6 rounded-md bg-[#1856F3]/10 text-[#1856F3] inline-flex items-center justify-center text-xs font-bold">6</span>
          <span>SUGGESTED RESOLUTION TIMELINES</span>
        </h2>
        <ul className="list-disc pl-5 space-y-1.5 text-sm text-[#334155]">
          <li><strong>Acknowledgement:</strong> Within 2 working days of ticket generation.</li>
          <li><strong>Routine Account or Service Complaints:</strong> Target resolution within 7 working days.</li>
          <li><strong>Transaction Disputes, Chargebacks & Biller Inquiries:</strong> In accordance with standard banking and NPCI turnaround times (typically 3 to 15 working days depending on settlement cycles).</li>
          <li><strong>Security & Suspicious Activity Concerns:</strong> Immediate priority action, account access restrictions where required, and prompt coordination with issuing banks.</li>
        </ul>
      </section>

      <section className="space-y-3 pt-2">
        <h2 className="text-base sm:text-lg font-bold text-[#0F172A] flex items-center gap-2">
          <span className="w-6 h-6 rounded-md bg-[#1856F3]/10 text-[#1856F3] inline-flex items-center justify-center text-xs font-bold">7</span>
          <span>FAILED TRANSACTIONS, REFUNDS AND DISPUTES</span>
        </h2>
        <p className="text-sm text-[#334155] leading-relaxed">
          For a failed, pending, duplicate, or disputed transaction, please furnish the transaction reference number (UTR / Txn ID), date, time, and debited amount. If funds were debited but the service could not be fulfilled, refunds will be initiated automatically to the source instrument in accordance with banking guidelines. Funds typically reflect within 3 to 7 working days depending on your bank’s clearing cycle.
        </p>
      </section>

      <section className="space-y-3 pt-2">
        <h2 className="text-base sm:text-lg font-bold text-[#0F172A] flex items-center gap-2">
          <span className="w-6 h-6 rounded-md bg-[#1856F3]/10 text-[#1856F3] inline-flex items-center justify-center text-xs font-bold">8</span>
          <span>FRAUD, UNAUTHORISED TRANSACTIONS AND SECURITY COMPLAINTS</span>
        </h2>
        <p className="text-sm text-[#334155] leading-relaxed">
          If you suspect unauthorized activity on your account, notify Smart2Pay immediately at <a href="mailto:smart2payment@gmail.com" className="text-[#1856F3] font-bold hover:underline">smart2payment@gmail.com</a> or call our helpline <a href="tel:+919750585861" className="text-[#1856F3] font-bold hover:underline">+91 9750585861</a>. You must also notify your bank or card issuer immediately to block compromised cards or UPI handles.
        </p>
      </section>

      <section className="space-y-3 pt-2">
        <h2 className="text-base sm:text-lg font-bold text-[#0F172A] flex items-center gap-2">
          <span className="w-6 h-6 rounded-md bg-[#1856F3]/10 text-[#1856F3] inline-flex items-center justify-center text-xs font-bold">9</span>
          <span>FAIR TREATMENT, ACCESSIBILITY AND NON-RETALIATION</span>
        </h2>
        <p className="text-sm text-[#334155] leading-relaxed">
          Smart2Pay and Buddica Global Solutions treat every complaint fairly, respectfully, and without discrimination. Raising a genuine complaint will never affect a user’s or merchant’s access to unrelated platform services.
        </p>
      </section>

      <section className="space-y-3 pt-2">
        <h2 className="text-base sm:text-lg font-bold text-[#0F172A] flex items-center gap-2">
          <span className="w-6 h-6 rounded-md bg-[#1856F3]/10 text-[#1856F3] inline-flex items-center justify-center text-xs font-bold">10</span>
          <span>PRIVACY AND USE OF INFORMATION</span>
        </h2>
        <p className="text-sm text-[#334155] leading-relaxed">
          Information submitted for grievance resolution is accessed solely on a need-to-know basis for investigation, resolution, and regulatory audit compliance in accordance with our Privacy Policy and data protection laws.
        </p>
      </section>

      <section className="space-y-3 pt-2">
        <h2 className="text-base sm:text-lg font-bold text-[#0F172A] flex items-center gap-2">
          <span className="w-6 h-6 rounded-md bg-[#1856F3]/10 text-[#1856F3] inline-flex items-center justify-center text-xs font-bold">11</span>
          <span>RECORD KEEPING AND QUALITY REVIEW</span>
        </h2>
        <p className="text-sm text-[#334155] leading-relaxed">
          Smart2Pay maintains accurate audit records of all grievances, acknowledging dates, investigation logs, and resolution timestamps to identify recurring trends and continuously upgrade system stability.
        </p>
      </section>

      <section className="space-y-3 pt-2">
        <h2 className="text-base sm:text-lg font-bold text-[#0F172A] flex items-center gap-2">
          <span className="w-6 h-6 rounded-md bg-[#1856F3]/10 text-[#1856F3] inline-flex items-center justify-center text-xs font-bold">12</span>
          <span>EXTERNAL ESCALATION AND REGULATORY REMEDIES</span>
        </h2>
        <p className="text-sm text-[#334155] leading-relaxed">
          If a complaint remains unresolved after exhausting internal escalation channels, complainants may approach the appropriate regulatory forum, including the Reserve Bank of India (RBI) Integrated Ombudsman Scheme for matters under its jurisdiction, subject to scheme eligibility rules, or competent consumer dispute redressal forums.
        </p>
      </section>

      <section className="space-y-3 pt-2">
        <h2 className="text-base sm:text-lg font-bold text-[#0F172A] flex items-center gap-2">
          <span className="w-6 h-6 rounded-md bg-[#1856F3]/10 text-[#1856F3] inline-flex items-center justify-center text-xs font-bold">13</span>
          <span>COMPLAINTS REQUIRING ADDITIONAL INFORMATION</span>
        </h2>
        <p className="text-sm text-[#334155] leading-relaxed">
          In cases where critical transaction reference IDs are missing or authentication details cannot be matched, Smart2Pay may request additional corroborating documents to proceed with the investigation.
        </p>
      </section>

      <section className="space-y-3 pt-2">
        <h2 className="text-base sm:text-lg font-bold text-[#0F172A] flex items-center gap-2">
          <span className="w-6 h-6 rounded-md bg-[#1856F3]/10 text-[#1856F3] inline-flex items-center justify-center text-xs font-bold">14</span>
          <span>POLICY UPDATES</span>
        </h2>
        <p className="text-sm text-[#334155] leading-relaxed">
          Buddica Global Solutions Private Limited reserves the right to amend this policy periodically to reflect operational improvements or regulatory updates. The latest version will always be published on <a href="https://smart2pay.co.in" className="text-[#1856F3] font-bold hover:underline">https://smart2pay.co.in</a> with the effective revision date.
        </p>
      </section>

      {/* Section 15: Corporate & Grievance Office Details */}
      <section className="space-y-4 pt-6 border-t border-[#CBD5E1]">
        <h2 className="text-base sm:text-lg font-bold text-[#0F172A] flex items-center gap-2">
          <span className="w-6 h-6 rounded-md bg-[#1856F3]/10 text-[#1856F3] inline-flex items-center justify-center text-xs font-bold">15</span>
          <span>REGISTERED ENTITY & CONTACT DETAILS</span>
        </h2>
        <p className="text-sm text-[#334155]">
          For all official communications or legal correspondence regarding this Grievance Redressal Policy:
        </p>

        <div className="p-6 rounded-2xl bg-[#F0F4F8] border border-[#CBD5E1]/80 shadow-xs space-y-4">
          <div className="space-y-1">
            <h3 className="font-black text-[#042656] text-base sm:text-lg">
              SMART2PAY
            </h3>
            <span className="text-xs font-bold text-[#1856F3] uppercase tracking-wider block">
              Powered by Buddica Global Solutions
            </span>
          </div>

          <p className="text-xs text-[#475569] leading-relaxed">
            <strong>Operational Address:</strong> NO.24, SRP COLONY, 8TH STREET, PAPER MILLS ROAD, PERAVALLUR, CHENNAI - 600082.<br />
            <strong>Parent Corporate Office:</strong> Buddica Global Solutions Private Limited, Revenue Ward No 26, No. 26-30-19, Yerukuvanipalem, Ramalayam Street, Visakhapatnam, Paravada Industrial Area, Anakapalli, Andhra Pradesh – 531019, India
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 text-xs border-t border-[#CBD5E1]/60">
            <div className="p-2.5 rounded-lg bg-white border border-[#CBD5E1]/60">
              <span className="text-[#64748B] block text-[11px] font-semibold">Official Grievance Email</span>
              <a href="mailto:info.geetha1720@gmail.com" className="text-[#1856F3] font-bold hover:underline">
                info.geetha1720@gmail.com
              </a>
            </div>
            <div className="p-2.5 rounded-lg bg-white border border-[#CBD5E1]/60">
              <span className="text-[#64748B] block text-[11px] font-semibold">Grievance Direct Hotline</span>
              <a href="tel:+916309341213" className="text-[#1856F3] font-bold hover:underline font-mono">
                +91 6309341213
              </a>
            </div>
            <div className="p-2.5 rounded-lg bg-white border border-[#CBD5E1]/60">
              <span className="text-[#64748B] block text-[11px] font-semibold">General Customer Care</span>
              <a href="mailto:smart2payment@gmail.com" className="text-[#1856F3] font-bold hover:underline">
                smart2payment@gmail.com
              </a> | <a href="tel:+919750585861" className="text-[#1856F3] font-bold hover:underline font-mono">+91 9750585861</a>
            </div>
            <div className="p-2.5 rounded-lg bg-white border border-[#CBD5E1]/60">
              <span className="text-[#64748B] block text-[11px] font-semibold">Senior Escalation Desk</span>
              <a href="mailto:vinay.bunny420@gmail.com" className="text-[#1856F3] font-bold hover:underline">
                vinay.bunny420@gmail.com
              </a> | <a href="tel:+917207508599" className="text-[#1856F3] font-bold hover:underline font-mono">+91 7207508599</a>
            </div>
          </div>
        </div>

        <p className="text-xs text-[#64748B] text-center pt-2">
          © {new Date().getFullYear()} Buddica Global Solutions Private Limited. All rights reserved. Visakhapatnam, Andhra Pradesh, India.
        </p>
      </section>

    </LegalLayout>
  );
}
