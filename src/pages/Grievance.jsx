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
  ExternalLink 
} from 'lucide-react';
import LegalLayout from '../components/legal/LegalLayout';

export default function Grievance() {
  const officials = [
    {
      level: 'Level 1 • Frontline',
      role: 'Customer Support Care',
      title: 'Frontline Support Desk',
      description: 'First point of contact for routine queries, failed recharges, bill payments, and general account inquiries.',
      email: 'support@smart2pay.biz',
      emailAlt: 'support@happypay.live',
      phone: '+91 8886327755',
      phoneAlt: '+91 8886317755',
      sla: 'Ack: within 2 working days',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      iconColor: 'text-[#1856F3]'
    },
    {
      level: 'Level 2 • Grievance Officer',
      role: 'Designated Officer',
      name: 'Geetha Chukkala',
      title: 'Designated Grievance Officer',
      description: 'Designated official for escalated complaints unresolved by frontline support within standard timelines.',
      email: 'info.geetha1720@gmail.com',
      phone: '+91 6309341213',
      sla: 'Resolution: within 7 working days',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      iconColor: 'text-amber-600'
    },
    {
      level: 'Level 3 • Senior Escalation',
      role: 'Highest Authority',
      name: 'Vinay Kumar',
      title: 'Senior Grievance Escalation',
      description: 'Highest internal authority for complex disputes, regulatory references, or unsatisfied Level 2 cases.',
      email: 'vinay.bunny420@gmail.com',
      phone: '+91 7207508599',
      sla: 'Final review & escalation outcome',
      badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
      iconColor: 'text-rose-600'
    }
  ];

  const steps = [
    {
      step: 'Step 1',
      title: 'Registration & Ack',
      desc: 'Complaint ticket generated and acknowledged within 2 working days with reference details.'
    },
    {
      step: 'Step 2',
      title: 'Investigation',
      desc: 'Records reviewed and coordinated with partner banks, aggregators, or billers.'
    },
    {
      step: 'Step 3',
      title: 'Resolution',
      desc: 'Resolution communicated clearly along with refund or corrective transaction details.'
    },
    {
      step: 'Step 4',
      title: 'Escalation',
      desc: 'If unresolved or unsatisfactory, escalate to Level 2 (Grievance Officer).'
    }
  ];

  return (
    <LegalLayout title="Grievance Redressal Policy" lastUpdated="October 27, 2026">
      
      {/* Policy Introduction Banner */}
      <div className="neu-sunken p-5 sm:p-6 rounded-2xl bg-[#EBF1FF]/60 border border-[#1856F3]/20 mb-8 space-y-3 text-sm">
        <div className="flex items-center gap-2 font-bold text-[#042656] text-base">
          <Scale size={20} className="text-[#1856F3]" />
          <span>Customer Support & Designated Grievance Redressal Officials</span>
        </div>
        <p className="text-[#334155] leading-relaxed">
          This Grievance Redressal Policy explains how customers, merchants, business partners, and other users can raise complaints about <strong>Smart2Pay</strong> (a B2B White-Label Fintech Solution operated by <strong>Buddica Global Solutions Pvt Ltd</strong>, alongside its fintech partner network including HappyPay) and how such complaints will be acknowledged, investigated, and resolved in a transparent and time-bound manner.
        </p>
        <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-[#64748B]">
          <span>Official Portal: <a href="https://smart2pay.co.in" className="text-[#1856F3] underline">https://smart2pay.co.in</a></span>
          <span>•</span>
          <span>Network Ecosystem: <a href="https://happypay.live" target="_blank" rel="noreferrer" className="text-[#1856F3] underline">https://happypay.live</a></span>
        </div>
      </div>

      {/* Designated Directory - Escalation Matrix Cards */}
      <div className="space-y-4 mb-10">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-[#0F172A]">
            Designated Grievance & Customer Support Officials
          </h2>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
            Regulatory Compliance
          </span>
        </div>
        <p className="text-xs text-[#64748B]">
          Published in compliance with regulatory and statutory consumer protection guidelines.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
          {officials.map((off, idx) => (
            <div 
              key={idx}
              className="neu-raised p-5 rounded-2xl bg-white border border-white/80 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className={`text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-lg border ${off.badgeColor}`}>
                    {off.level}
                  </span>
                  <span className="text-[11px] font-bold text-[#64748B]">
                    {off.role}
                  </span>
                </div>

                {off.name && (
                  <h3 className="text-base font-extrabold text-[#0F172A]">
                    {off.name}
                  </h3>
                )}

                <h4 className="text-sm font-bold text-[#042656]">
                  {off.title}
                </h4>

                <p className="text-xs text-[#475569] leading-relaxed">
                  {off.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E2E8F0] space-y-2 text-xs">
                <div className="flex items-center gap-2 text-[#334155]">
                  <Mail size={13} className={off.iconColor} />
                  <a href={`mailto:${off.email}`} className="font-semibold hover:underline truncate">
                    {off.email}
                  </a>
                </div>
                {off.emailAlt && (
                  <div className="flex items-center gap-2 text-[#64748B]">
                    <Mail size={13} className="text-slate-400" />
                    <a href={`mailto:${off.emailAlt}`} className="hover:underline truncate">
                      {off.emailAlt}
                    </a>
                  </div>
                )}
                <div className="flex items-center gap-2 text-[#334155]">
                  <Phone size={13} className={off.iconColor} />
                  <a href={`tel:${off.phone}`} className="font-semibold hover:underline">
                    {off.phone}
                  </a>
                  {off.phoneAlt && (
                    <span className="text-[#64748B]">/ {off.phoneAlt}</span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-emerald-700 font-medium text-[11px] pt-1">
                  <Clock size={12} className="text-emerald-600" />
                  <span>{off.sla}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 1: About Smart2Pay & Buddica */}
      <section className="space-y-3">
        <h2 className="text-lg font-bold text-[#0F172A]">1. ABOUT SMART2PAY & BUDDICA GLOBAL SOLUTIONS</h2>
        <p>
          <strong>Smart2Pay</strong> is a B2B white-label digital services and payment infrastructure platform operated by <strong>Buddica Global Solutions Private Limited</strong> (“Buddica”, “Smart2Pay”, “we”, “us” or “our”), alongside its associated fintech brands including HappyPay. Through its website, APIs, enterprise portals, applications, and authorised channels, Smart2Pay facilitates services such as mobile recharges, BBPS bill payments, payment aggregation services, merchant/business collections, payout routing, digital gold, e-commerce, and other services displayed on the platform from time to time.
        </p>
        <p>
          The exact service provider, payment aggregator, bank, biller, or other regulated entity involved may vary by transaction. For transactions processed by a partner bank, payment system operator, biller, merchant, or third-party service provider, Smart2Pay coordinates with the relevant entity where appropriate. This does not replace any complaint or dispute process that the relevant bank, issuer, payment system operator, biller, or regulator makes available directly to the customer.
        </p>
      </section>

      {/* Section 2: Purpose and Scope */}
      <section className="space-y-3">
        <h2 className="text-lg font-bold text-[#0F172A]">2. PURPOSE AND SCOPE</h2>
        <p>
          This policy is intended to provide a fair, accessible, and time-bound process for raising and resolving complaints relating to:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-sm">
          <li>Account registration, login, profile, KYC, or KYB verification workflow issues.</li>
          <li>Failed, pending, delayed, duplicate, or incorrectly processed transactions.</li>
          <li>Recharge, bill payment, FASTag, or other supported payment-service issues.</li>
          <li>Refunds, reversals, settlement status, fees, or charges displayed or applied by Smart2Pay, where applicable.</li>
          <li>Merchant onboarding, B2B business-portal access, service availability, or API support concerns.</li>
          <li>E-commerce orders, delivery, cancellation, returns, or product/service descriptions for transactions handled through Smart2Pay infrastructure.</li>
          <li>Suspected unauthorised activity, security concerns, misuse of account details, or suspected fraud.</li>
          <li>Customer support conduct, accessibility concerns, inaccurate information, or other service-related complaints.</li>
        </ul>
        <p className="text-xs text-[#64748B]">
          This policy does not limit rights available under applicable law. Product-specific terms, refund policies, merchant terms, payment-system rules, and third-party terms may also apply.
        </p>
      </section>

      {/* Section 3: How to Raise a Grievance */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-[#0F172A]">3. HOW TO RAISE A GRIEVANCE</h2>
        <p>Customers and merchants may submit a complaint through any of the following channels:</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
            <div className="font-bold text-[#0F172A] flex items-center gap-2">
              <Mail size={16} className="text-[#1856F3]" />
              <span>Email Support</span>
            </div>
            <p className="text-xs text-[#475569]">
              Primary: <a href="mailto:support@smart2pay.biz" className="text-[#1856F3] font-bold">support@smart2pay.biz</a><br />
              Secondary: <a href="mailto:support@happypay.live" className="text-[#1856F3]">support@happypay.live</a>
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
            <div className="font-bold text-[#0F172A] flex items-center gap-2">
              <Phone size={16} className="text-[#1856F3]" />
              <span>Helpline Support</span>
            </div>
            <p className="text-xs text-[#475569]">
              Helpline 1: <a href="tel:+918886327755" className="text-[#1856F3] font-bold">+91 8886327755</a><br />
              Helpline 2: <a href="tel:+918886317755" className="text-[#1856F3]">+91 8886317755</a>
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
            <div className="font-bold text-[#0F172A] flex items-center gap-2">
              <MessageSquare size={16} className="text-[#10B981]" />
              <span>Instant Chat Channels</span>
            </div>
            <p className="text-xs text-[#475569] space-y-1">
              <div>WhatsApp: <a href="https://wa.me/919884548289" target="_blank" rel="noreferrer" className="text-[#10B981] font-bold underline">+91 9884548289</a></div>
              <div>Telegram: <a href="https://t.me/buddica" target="_blank" rel="noreferrer" className="text-[#0284C7] font-bold underline">t.me/buddica</a></div>
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
            <div className="font-bold text-[#0F172A] flex items-center gap-2">
              <MapPin size={16} className="text-[#F43F5E]" />
              <span>Registered Postal Address</span>
            </div>
            <p className="text-xs text-[#475569] leading-relaxed">
              <strong>Buddica Global Solutions Private Limited</strong><br />
              Sankara Matam Rd, Visakhapatnam, Andhra Pradesh, INDIA.<br />
              <span className="text-[11px] text-[#64748B]">Corp Reg: Revenue Ward No 26, No. 26-30-19, Yerukuvanipalem, Ramalayam Street, Visakhapatnam, Paravada Industrial Area, Anakapalli, AP – 531019.</span>
            </p>
          </div>
        </div>

        <div className="neu-sunken p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 space-y-1">
          <p className="font-bold">Important Safety & Required Information:</p>
          <p>
            Please provide your registered mobile number, email, transaction/order reference (UTR/Txn ID), date and time, amount, and a clear description.
          </p>
          <p className="font-semibold text-rose-800">
            Never disclose your password, card CVV, UPI PIN, OTP, or remote-access credentials. Smart2Pay, Buddica, and its officials will never ask for confidential authentication keys.
          </p>
        </div>
      </section>

      {/* Section 4: Grievance Handling Process */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-[#0F172A]">4. GRIEVANCE HANDLING PROCESS</h2>
        <p>Every grievance logged with Smart2Pay undergoes a structured 4-step resolution workflow:</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((st, i) => (
            <div key={i} className="p-4 rounded-xl bg-[#F0F4F8] border border-[#CBD5E1]/60 space-y-2">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#1856F3] bg-[#EBF1FF] px-2 py-0.5 rounded">
                {st.step}
              </span>
              <h3 className="text-sm font-bold text-[#0F172A]">{st.title}</h3>
              <p className="text-xs text-[#475569] leading-relaxed">{st.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Grievance Officer & Escalation Matrix Table */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-[#0F172A]">5. GRIEVANCE OFFICER & ESCALATION MATRIX</h2>
        <p className="text-sm">
          Smart2Pay implements a structured three-level internal grievance redressal process. Customers are requested to first approach Level 1 Support before escalating to Level 2 or Level 3.
        </p>

        <div className="overflow-x-auto rounded-xl border border-[#CBD5E1]/80">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-[#F8FAFC] border-b border-[#CBD5E1]/80 text-[#475569] font-bold">
              <tr>
                <th className="p-3.5">Level</th>
                <th className="p-3.5">Designated Official</th>
                <th className="p-3.5">Direct Contact Details</th>
                <th className="p-3.5">Scope & Timelines</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8F0] text-[#334155]">
              <tr>
                <td className="p-3.5 font-bold text-[#042656]">Level 1<br /><span className="text-xs font-normal text-[#64748B]">First-Line Support</span></td>
                <td className="p-3.5">Customer Support Desk<br /><span className="text-xs text-[#64748B]">Frontline Customer Care</span></td>
                <td className="p-3.5">
                  <a href="mailto:support@smart2pay.biz" className="text-[#1856F3] font-semibold hover:underline">support@smart2pay.biz</a><br />
                  <span>+91 8886327755 / +91 8886317755</span>
                </td>
                <td className="p-3.5">Initial complaint registration and routine resolution. Target acknowledgement within 2 working days.</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-amber-700">Level 2<br /><span className="text-xs font-normal text-[#64748B]">Grievance Redressal</span></td>
                <td className="p-3.5 font-semibold">Geetha Chukkala<br /><span className="text-xs font-normal text-[#64748B]">Designated Grievance Officer</span></td>
                <td className="p-3.5">
                  <a href="mailto:info.geetha1720@gmail.com" className="text-[#1856F3] font-semibold hover:underline">info.geetha1720@gmail.com</a><br />
                  <span>+91 6309341213</span>
                </td>
                <td className="p-3.5">Independent review of unresolved complaints from Level 1. Target response within 7 working days of escalation.</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-rose-700">Level 3<br /><span className="text-xs font-normal text-[#64748B]">Senior Escalation</span></td>
                <td className="p-3.5 font-semibold">Vinay Kumar<br /><span className="text-xs font-normal text-[#64748B]">Senior Grievance Escalation</span></td>
                <td className="p-3.5">
                  <a href="mailto:vinay.bunny420@gmail.com" className="text-[#1856F3] font-semibold hover:underline">vinay.bunny420@gmail.com</a><br />
                  <span>+91 7207508599</span>
                </td>
                <td className="p-3.5">Final internal dispute escalation review and comprehensive handling. Conveys final company decision.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Sections 6 - 15 */}
      <section className="space-y-3">
        <h2 className="text-lg font-bold text-[#0F172A]">6. SUGGESTED RESOLUTION TIMELINES</h2>
        <ul className="list-disc pl-5 space-y-1.5 text-sm">
          <li><strong>Acknowledgement:</strong> Within 2 working days of ticket receipt.</li>
          <li><strong>Routine Account or Service Complaints:</strong> Target resolution within 7 working days.</li>
          <li><strong>Transaction Disputes, Chargebacks & Biller Inquiries:</strong> In accordance with standard banking and NPCI turnaround times (typically 3 to 15 working days depending on settlement cycles).</li>
          <li><strong>Security & Suspicious Activity Concerns:</strong> Immediate priority action, account access restrictions where required, and prompt coordination with issuing banks.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-[#0F172A]">7. FAILED TRANSACTIONS, REFUNDS AND DISPUTES</h2>
        <p className="text-sm">
          For a failed, pending, duplicate, or disputed transaction, please furnish the transaction reference number (UTR / Txn ID), date, time, and debited amount. If funds were debited but the service could not be fulfilled, refunds will be initiated automatically to the source instrument in accordance with banking guidelines. Funds typically reflect within 3 to 7 working days depending on your bank’s clearing cycle.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-[#0F172A]">8. FRAUD, UNAUTHORISED TRANSACTIONS AND SECURITY COMPLAINTS</h2>
        <p className="text-sm">
          If you suspect unauthorized activity on your account, notify Smart2Pay immediately at <a href="mailto:support@smart2pay.biz" className="text-[#1856F3] font-bold">support@smart2pay.biz</a> or call our helpline <a href="tel:+918886327755" className="text-[#1856F3] font-bold">+91 8886327755</a>. You must also notify your bank or card issuer immediately to block compromised cards or UPI handles.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-[#0F172A]">9. FAIR TREATMENT, ACCESSIBILITY AND NON-RETALIATION</h2>
        <p className="text-sm">
          Smart2Pay and Buddica Global Solutions treat every complaint fairly, respectfully, and without discrimination. Raising a genuine complaint will never affect a user’s or merchant’s access to unrelated platform services.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-[#0F172A]">10. PRIVACY AND USE OF INFORMATION</h2>
        <p className="text-sm">
          Information submitted for grievance resolution is accessed solely on a need-to-know basis for investigation, resolution, and regulatory audit compliance in accordance with our Privacy Policy and data protection laws.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-[#0F172A]">11. RECORD KEEPING AND QUALITY REVIEW</h2>
        <p className="text-sm">
          Smart2Pay maintains accurate audit records of all grievances, acknowledging dates, investigation logs, and resolution timestamps to identify recurring trends and continuously upgrade system stability.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-[#0F172A]">12. EXTERNAL ESCALATION AND REGULATORY REMEDIES</h2>
        <p className="text-sm">
          If a complaint remains unresolved after exhausting internal escalation channels, complainants may approach the appropriate regulatory forum, including the Reserve Bank of India (RBI) Integrated Ombudsman Scheme for matters under its jurisdiction, subject to scheme eligibility rules, or competent consumer dispute redressal forums.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-[#0F172A]">13. COMPLAINTS REQUIRING ADDITIONAL INFORMATION</h2>
        <p className="text-sm">
          In cases where critical transaction reference IDs are missing or authentication details cannot be matched, Smart2Pay may request additional corroborating documents to proceed with the investigation.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-[#0F172A]">14. POLICY UPDATES</h2>
        <p className="text-sm">
          Buddica Global Solutions Private Limited reserves the right to amend this policy periodically to reflect operational improvements or regulatory updates. The latest version will always be published on <a href="https://smart2pay.co.in" className="text-[#1856F3] font-bold">https://smart2pay.co.in</a> and network portals with the effective revision date.
        </p>
      </section>

      {/* Section 15: Corporate & Grievance Office Details */}
      <section className="space-y-4 pt-6 border-t border-[#CBD5E1]">
        <h2 className="text-lg font-bold text-[#0F172A]">15. REGISTERED ENTITY & CONTACT DETAILS</h2>
        <p className="text-sm">
          For all official communications or legal correspondence regarding this Grievance Redressal Policy:
        </p>

        <div className="neu-sunken p-6 rounded-2xl bg-[#F0F4F8] text-sm space-y-3">
          <div className="font-extrabold text-[#042656] text-base">
            Buddica Global Solutions Private Limited
            <span className="block text-xs font-semibold text-[#1856F3] mt-0.5">
              Operating Smart2Pay (B2B White-Label Fintech Infrastructure)
            </span>
          </div>

          <p className="text-xs text-[#475569] leading-relaxed">
            <strong>Headquarters:</strong> Sankara Matam Rd, Visakhapatnam, Andhra Pradesh, INDIA.<br />
            <strong>Registered Office:</strong> Revenue Ward No 26, No. 26-30-19, Yerukuvanipalem, Ramalayam Street, Visakhapatnam, Paravada Industrial Area, Anakapalli, Andhra Pradesh – 531019, India
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs border-t border-[#CBD5E1]/60">
            <div>
              <span className="text-[#64748B] block">Official Grievance Email:</span>
              <a href="mailto:info.geetha1720@gmail.com" className="text-[#1856F3] font-bold hover:underline">
                info.geetha1720@gmail.com
              </a>
            </div>
            <div>
              <span className="text-[#64748B] block">Grievance Direct Hotline:</span>
              <a href="tel:+916309341213" className="text-[#1856F3] font-bold hover:underline">
                +91 6309341213
              </a>
            </div>
            <div>
              <span className="text-[#64748B] block">General Support Care:</span>
              <a href="mailto:support@smart2pay.biz" className="text-[#1856F3] font-bold hover:underline">
                support@smart2pay.biz
              </a> | <a href="tel:+918886327755" className="text-[#1856F3] font-bold hover:underline">+91 8886327755</a>
            </div>
            <div>
              <span className="text-[#64748B] block">Direct Escalation Desk:</span>
              <a href="mailto:vinay.bunny420@gmail.com" className="text-[#1856F3] font-bold hover:underline">
                vinay.bunny420@gmail.com
              </a> | <a href="tel:+917207508599" className="text-[#1856F3] font-bold hover:underline">+91 7207508599</a>
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
