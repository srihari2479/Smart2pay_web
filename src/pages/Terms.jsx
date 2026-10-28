import React from 'react';
import LegalLayout from '../components/legal/LegalLayout';

export default function Terms() {
  return (
    <LegalLayout title="Terms of Service & Merchant Agreement" lastUpdated="October 27, 2026">
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[#0F172A]">1. Introduction & Acceptance</h2>
        <p>
          These Terms of Service ("Terms") constitute a legally binding agreement between you (whether individually or on behalf of an entity, "Merchant", "User", or "You") and <strong>Buddica Global Solutions Pvt Ltd</strong> ("Company", "We", "Us"), the developer and operator of <strong>Smart2Pay</strong>, an enterprise B2B White-Label Fintech Solution operating alongside its allied network platforms including HappyPay.
        </p>
        <p>
          By accessing, registering with, or utilizing the Smart2Pay payment infrastructure, APIs, soundbox hardware, SDKs, or web portal available at <strong>https://smart2pay.co.in</strong>, you acknowledge that you have read, understood, and agree to be bound by all the provisions of these Terms and our related regulatory policies.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[#0F172A]">2. Scope of Services & B2B White-Label Architecture</h2>
        <p>
          Smart2Pay provides B2B technology aggregation, multi-bank transaction routing, BBPS utility collection rails, UPI dynamic QR processing, payment gateway switching, automated settlement engines, and merchant reconciliation consoles.
        </p>
        <p>
          As an enterprise B2B white-label platform powered by Buddica Global Solutions Pvt Ltd, Smart2Pay acts as a technical service provider and payment aggregator intermediary connecting merchants with scheduled commercial banking institutions, card payment networks (Visa, Mastercard, RuPay, Amex, Diners), and the National Payments Corporation of India (NPCI).
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[#0F172A]">3. Merchant Onboarding & KYB Verification</h2>
        <p>
          To utilize the Smart2Pay infrastructure, you agree to provide authentic, verifiable Know Your Customer (KYC) and Know Your Business (KYB) documentation, including valid PAN, Aadhaar OTP authentication, GST registration certificates, bank account proof (cancelled cheque or bank statement), and business address verification.
        </p>
        <p>
          Smart2Pay and Buddica Global Solutions reserve the right to suspend or restrict account settlement if documentation fails verification checks or if irregular activity is detected.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[#0F172A]">4. Transaction Processing, Settlements & Fees</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Settlement Timelines:</strong> Standard transactions are settled on a T+0 or T+1 basis directly into the verified designated merchant bank account, subject to standard banking clearing cycles.
          </li>
          <li>
            <strong>Merchant Discount Rate (MDR):</strong> Applicable MDR fees and platform charges will be deducted at source from processing volumes as agreed upon during onboarding.
          </li>
          <li>
            <strong>Reserve & Holdbacks:</strong> In cases of abnormal transaction spikes, excessive chargebacks, or compliance inquiries, Smart2Pay may establish a rolling risk reserve per banking guidelines.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[#0F172A]">5. Prohibited Activities</h2>
        <p>You agree not to utilize Smart2Pay infrastructure for:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Unauthorized gambling, betting, or lottery services</li>
          <li>Sale of counterfeit, pirated, or illicit goods</li>
          <li>Unlicensed forex trading or illegal multi-level marketing (MLM) schemes</li>
          <li>Money laundering, terrorist financing, or sanctions evasion</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[#0F172A]">6. Governing Law & Jurisdiction</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of India. Any legal dispute, arbitration, or proceeding shall be subject to the exclusive jurisdiction of the competent courts in <strong>Visakhapatnam, Andhra Pradesh, India</strong>.
        </p>
      </section>

      <section className="space-y-4 pt-4 border-t border-[#E2E8F0]">
        <h2 className="text-xl font-bold text-[#0F172A]">7. Official Entity & Contact Details</h2>
        <p className="text-sm">
          <strong>Buddica Global Solutions Pvt Ltd</strong> (Operating Smart2Pay B2B White Label Solution)<br />
          Sankara Matam Rd, Visakhapatnam, Andhra Pradesh, INDIA.<br />
          Registered Office: Revenue Ward No 26, No. 26-30-19, Yerukuvanipalem, Ramalayam Street, Visakhapatnam, Paravada Industrial Area, Anakapalli, AP – 531019<br />
          Phone: +91 8886327755 | Email: support@smart2pay.biz<br />
          WhatsApp: <a href="https://wa.me/919884548289" target="_blank" rel="noreferrer" className="text-[#1856F3] underline">+91 9884548289</a> | Telegram: <a href="https://t.me/buddica" target="_blank" rel="noreferrer" className="text-[#1856F3] underline">t.me/buddica</a><br />
          Website: <a href="https://smart2pay.co.in" className="text-[#1856F3] underline">https://smart2pay.co.in</a>
        </p>
      </section>
    </LegalLayout>
  );
}
