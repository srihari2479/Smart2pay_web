import React from 'react';
import LegalLayout from '../components/legal/LegalLayout';

export default function Refund() {
  return (
    <LegalLayout title="Refund, Cancellation & Chargeback Policy" lastUpdated="October 27, 2026">
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[#0F172A]">1. Policy Objective & Scope</h2>
        <p>
          This Refund, Cancellation, and Chargeback Policy outlines the procedures, SLAs, and rules governing transaction cancellations, reversals, and failed payment resolutions across all services powered by <strong>Smart2Pay</strong>, operated and Powered by <strong>Buddica Global Solutions Pvt Ltd</strong> alongside its fintech partner network including HappyPay.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[#0F172A]">2. Failed & Interrupted Transactions</h2>
        <div className="neu-sunken p-4 rounded-2xl bg-[#F0F4F8] space-y-2 text-sm">
          <p className="font-bold text-[#042656]">
            Automatic Reversal SLA (T+2 Business Days):
          </p>
          <p className="text-[#475569]">
            If an amount is debited from your bank account or card but the transaction fails to complete (due to network timeout, bank switch failure, or gateway interruption), the system automatically initiates an auto-reversal. The debited amount is credited back to the source account within 2 to 5 business days per RBI/NPCI guidelines.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[#0F172A]">3. Merchant Product / Service Refunds</h2>
        <p>
          For transactions completed successfully with a registered merchant:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Merchant Discretion:</strong> Refunds for goods or services purchased through Smart2Pay gateway are subject to the specific return and cancellation terms of the respective merchant.
          </li>
          <li>
            <strong>Refund Initiation:</strong> Once a merchant approves and triggers a refund via the Smart2Pay merchant console, the funds will be credited to the original payment source within 3 to 7 working days.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[#0F172A]">4. Utility & BBPS Bill Payment Cancellations</h2>
        <p>
          Payments made towards utility bills (electricity, water, gas, house rent, DTH, insurance premiums, and institutional school fees) cannot be cancelled or refunded once a confirmation Biller Reference Number (BRN) or tax receipt has been generated, as the funds are instantly settled to the biller institution.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[#0F172A]">5. Dispute Resolution & Chargebacks</h2>
        <p>
          If you identify an unauthorized charge or encounter an unfulfilled merchant order, please file a support ticket directly with our 24/7 dispute desk. We provide comprehensive transaction audit trails to ensure swift, transparent resolutions.
        </p>
      </section>

      <section className="space-y-4 pt-4 border-t border-[#E2E8F0]">
        <h2 className="text-xl font-bold text-[#0F172A]">6. Refund & Grievance Support</h2>
        <p className="text-sm">
          For refund queries, please provide your Transaction ID (e.g. S2P-XXXXXX), date, and amount:<br />
          <strong>SMART2PAY</strong> (Powered by Buddica Global Solutions Pvt Ltd)<br />
          NO.24, SRP COLONY, 8TH STREET, PAPER MILLS ROAD, PERAVALLUR, CHENNAI - 600082<br />
          Email: <a href="mailto:smart2payment@gmail.com" className="text-[#1856F3] font-bold underline">smart2payment@gmail.com</a><br />
          Phone: <a href="tel:+919750585861" className="text-[#1856F3] font-bold underline">+91 9750585861</a><br />
          WhatsApp: <a href="https://wa.me/918838607449" target="_blank" rel="noreferrer" className="text-[#1856F3] underline font-bold">+91 8838607449</a><br />
          Website: <a href="https://smart2pay.co.in" className="text-[#1856F3] underline">https://smart2pay.co.in</a>
        </p>
      </section>
    </LegalLayout>
  );
}
