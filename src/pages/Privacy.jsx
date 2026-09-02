import React from 'react';
import LegalLayout from '../components/legal/LegalLayout';

export default function Privacy() {
  return (
    <LegalLayout title="Privacy & Data Protection Policy" lastUpdated="January 15, 2026">
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[#0F172A]">1. Overview & Commitment</h2>
        <p>
          At <strong>Smart2Pay Technologies Pvt Ltd ("Smart2Pay")</strong>, we are committed to safeguarding your privacy and protecting the integrity and confidentiality of your personal, business, and financial data in strict adherence to the Information Technology Act, 2000, and the Digital Personal Data Protection (DPDP) Act, 2023.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[#0F172A]">2. Information We Collect</h2>
        <p>In operating the Smart2Pay payment platform, we collect:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Identity & KYB Data:</strong> Full Name, Business Name, PAN, Aadhaar information (masked/hashed via UIDAI guidelines), GSTIN, date of incorporation.
          </li>
          <li>
            <strong>Contact Data:</strong> Primary email address, registered mobile phone number, and physical office location.
          </li>
          <li>
            <strong>Financial & Settlement Data:</strong> Bank account numbers, IFSC codes, settlement ledger history, transaction volumes.
          </li>
          <li>
            <strong>Technical & Telemetry Data:</strong> IP address, device fingerprints, browser version, TLS cipher metadata, and transaction latency telemetry for security fraud scoring.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[#0F172A]">3. How We Protect & Encrypt Data</h2>
        <p>
          Smart2Pay implements robust technical safeguards including:
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
        <h2 className="text-xl font-bold text-[#0F172A]">6. Data Protection Officer (DPO) Contact</h2>
        <p className="text-sm">
          <strong>Grievance & Privacy Desk — Smart2Pay Technologies</strong><br />
          Revenue Ward No 26, no 26-30-19, Yerukuvanipalem, Ramalayam Street,<br />
          VISAKHAPATNAM, Paravada Industrial Area, Anakapalli, Andhra Pradesh, 531019<br />
          Email: Support@smart2pay.biz | Phone: +91 8886317755
        </p>
      </section>
    </LegalLayout>
  );
}
