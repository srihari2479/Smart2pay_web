import React from 'react';
import LegalLayout from '../components/legal/LegalLayout';

export default function Privacy() {
  return (
    <LegalLayout title="Privacy & Data Protection Policy" lastUpdated="October 27, 2026">
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[#0F172A]">1. Overview & Commitment</h2>
        <p>
          At <strong>Buddica Global Solutions Pvt Ltd</strong>, developer and operator of <strong>Smart2Pay</strong> (an enterprise B2B White-Label Fintech Solution operating across our fintech network alongside HappyPay), we are deeply committed to safeguarding your privacy and protecting the confidentiality and security of personal, merchant, and transaction data in strict compliance with the Information Technology Act, 2000, and the Digital Personal Data Protection (DPDP) Act, 2023.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[#0F172A]">2. Information We Collect</h2>
        <p>In operating the Smart2Pay B2B white-label platform, we collect:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Identity & KYB Data:</strong> Full Name, Business/Entity Name, PAN, Aadhaar information (masked/hashed via UIDAI guidelines), GSTIN, certificate of incorporation.
          </li>
          <li>
            <strong>Contact Data:</strong> Primary email address, registered mobile phone number, and physical office location.
          </li>
          <li>
            <strong>Financial & Settlement Data:</strong> Bank account numbers, IFSC codes, settlement ledger history, and transaction volumes.
          </li>
          <li>
            <strong>Technical & Telemetry Data:</strong> IP address, device fingerprints, browser version, TLS cipher metadata, and transaction latency telemetry for security fraud scoring.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[#0F172A]">3. How We Protect & Encrypt Data</h2>
        <p>
          Smart2Pay and Buddica Global Solutions implement enterprise-grade technical safeguards including:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>256-Bit Advanced Encryption Standard (AES-256) for data at rest</li>
          <li>Transport Layer Security (TLS 1.3) for all in-transit payload exchanges</li>
          <li>Tokenization of sensitive card data avoiding raw PAN storage</li>
          <li>Dedicated Hardware Security Modules (HSM) with strict access logging</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[#0F172A]">4. Data Sharing & Third Parties</h2>
        <p>
          We do not sell, rent, or monetize your personal or financial data. Data is shared exclusively with:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Regulated banking partners and card networks (NPCI, Visa, Mastercard, RuPay) strictly to clear transactions</li>
          <li>Regulatory authorities and statutory law enforcement agencies when mandated under applicable Indian law</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[#0F172A]">5. User Rights & Data Retention</h2>
        <p>
          You have the right to access, review, rectify, or request deletion of your account data subject to statutory financial recordkeeping mandates (e.g. Prevention of Money Laundering Act guidelines).
        </p>
      </section>

      <section className="space-y-4 pt-4 border-t border-[#E2E8F0]">
        <h2 className="text-xl font-bold text-[#0F172A]">6. Data Protection Officer (DPO) & Grievance Contact</h2>
        <p className="text-sm">
          <strong>Grievance & Privacy Desk — Buddica Global Solutions Pvt Ltd</strong><br />
          Operating Smart2Pay (B2B White Label Fintech Platform)<br />
          Sankara Matam Rd, Visakhapatnam, Andhra Pradesh, INDIA.<br />
          Registered Office: Revenue Ward No 26, No. 26-30-19, Yerukuvanipalem, Ramalayam Street, Visakhapatnam, Paravada Industrial Area, Anakapalli, AP – 531019<br />
          Email: <a href="mailto:support@smart2pay.biz" className="text-[#1856F3] underline">support@smart2pay.biz</a> | Phone: <a href="tel:+918886327755" className="text-[#1856F3] underline">+91 8886327755</a><br />
          WhatsApp: <a href="https://wa.me/919884548289" target="_blank" rel="noreferrer" className="text-[#1856F3] underline">+91 9884548289</a> | Telegram: <a href="https://t.me/buddica" target="_blank" rel="noreferrer" className="text-[#1856F3] underline">t.me/buddica</a><br />
          Official Website: <a href="https://smart2pay.co.in" className="text-[#1856F3] underline">https://smart2pay.co.in</a>
        </p>
      </section>
    </LegalLayout>
  );
}
