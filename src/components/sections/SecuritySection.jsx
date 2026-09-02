import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  KeyRound, 
  Fingerprint, 
  FileCheck, 
  Server, 
  AlertTriangle,
  CheckCircle2,
  Cpu
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import Card from '../common/Card';
import ThreeCanvas from '../three/ThreeCanvas';
import Badge from '../common/Badge';

export default function SecuritySection() {
  const [demoInput, setDemoInput] = useState('Smart2Pay Secure Transaction');
  const [encryptedOutput, setEncryptedOutput] = useState(
    'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'
  );

  const handleInputChange = (e) => {
    const val = e.target.value;
    setDemoInput(val);
    // Simple visual simulation of dynamic SHA-256 hash generation
    let hash = 0;
    for (let i = 0; i < val.length; i++) {
      hash = (hash << 5) - hash + val.charCodeAt(i);
      hash |= 0;
    }
    const hex = Math.abs(hash).toString(16).padStart(8, '0');
    setEncryptedOutput(`9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08${hex}`.slice(0, 64));
  };

  const securityPillars = [
    {
      icon: Lock,
      title: 'End-to-End Field Level Encryption',
      desc: 'All sensitive cardholder and PII data is tokenized at the edge before leaving the client browser.'
    },
    {
      icon: Fingerprint,
      title: 'FIDO2 & WebAuthn Biometric 2FA',
      desc: 'Native device biometric face and fingerprint passkey verification for frictionless and zero-phishing auth.'
    },
    {
      icon: Server,
      title: 'Dedicated HSM Vaulting',
      desc: 'Hardware Security Modules (HSM) isolated in Tier-4 data centers with automated key rotation cycles.'
    },
    {
      icon: FileCheck,
      title: 'Real-Time Fraud Radar Scoring',
      desc: 'Machine learning heuristics continuously evaluate device fingerprinting, IP velocity, and anomaly patterns.'
    }
  ];

  return (
    <section id="security" className="pt-8 pb-6 lg:pt-10 lg:pb-8 relative bg-[#F0F4F8] border-b border-[#D8E1EA]/60 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge="Institutional Grade Security"
          badgeVariant="emerald"
          badgeIcon={ShieldCheck}
          title="Protected by Advanced Cryptography &"
          highlightText="Zero-Trust Architecture."
          subtitle="Smart2Pay implements multi-layered defensive controls, hardware tokenization, and strict compliance standards."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-8 sm:mb-10">
          
          {/* Left Column: 3D Cryptographic Vault & Security Shield Canvas */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center">
            
            {/* Floating Top Security Status Pill */}
            <div className="flex items-center justify-between w-full max-w-md px-4 py-2.5 rounded-full bg-white/90 backdrop-blur-md border border-white shadow-[1px_2px_6px_rgba(163,177,198,0.15)] mb-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-ping" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#059669] font-black">
                  AES-256 HSM Vault Active
                </span>
              </div>
              <span className="text-[11px] font-mono text-[#64748B] font-bold">
                TLS 1.3 Certified
              </span>
            </div>

            {/* 3D WebGL Cryptographic Vault Canvas Floating Seamlessly in Background */}
            <div className="w-full relative">
              <ThreeCanvas scene="security" height="h-[400px] sm:h-[460px]" />
            </div>

            {/* Floating Security Compliance Badge */}
            <div className="w-full max-w-md mt-2 px-5 py-3 rounded-2xl bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#EEF2F6] border border-white shadow-[3px_4px_12px_rgba(163,177,198,0.18),-3px_-4px_10px_rgba(255,255,255,0.9)] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 flex items-center justify-center text-[#10B981] shadow-inner">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <span className="text-xs font-black text-[#042656] block">PCI-DSS Level 1 Certified</span>
                  <span className="text-[10.5px] font-semibold text-[#64748B]">Zero-Knowledge Tokenization</span>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#EBF1FF] text-[#1856F3] text-[10.5px] font-black border border-blue-200/60 shadow-sm">
                FIDO2 Passkey
              </span>
            </div>
          </div>

          {/* Right Column: Security Pillars */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {securityPillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={i}
                  className="neu-raised-sm p-5 sm:p-6 bg-white/80 hover:bg-white rounded-2xl border border-white/90 transition-all flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#D1FAE5] text-[#059669] flex items-center justify-center shrink-0 shadow-sm border border-[#10B981]/20">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-[#0F172A] mb-1">
                      {pillar.title}
                    </h4>
                    <p className="text-sm text-[#475569] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Compliance & Standards Verification Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
          
          {/* Tile 1: PCI-DSS */}
          <div className="bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#EEF2F6] p-5 rounded-2xl border border-white/95 shadow-[2px_3px_8px_rgba(163,177,198,0.18),-2px_-3px_8px_rgba(255,255,255,0.9)] hover:-translate-y-1 hover:shadow-[4px_6px_12px_rgba(163,177,198,0.22)] transition-all duration-200 flex flex-col justify-between group">
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-white to-[#E2E8F0] shadow-[1px_1px_3px_rgba(163,177,198,0.2)] flex items-center justify-center text-[#10B981]">
                <ShieldCheck size={18} />
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#059669] bg-[#D1FAE5] px-2.5 py-0.5 rounded-full border border-emerald-200/60 shadow-sm">
                Certified
              </span>
            </div>
            <div className="mt-3">
              <span className="text-lg sm:text-xl font-black text-[#042656] font-mono block tracking-tight">
                PCI-DSS
              </span>
              <span className="text-xs font-semibold text-[#64748B] block mt-0.5">Level 1 Architecture</span>
            </div>
          </div>

          {/* Tile 2: AES-256 */}
          <div className="bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#EEF2F6] p-5 rounded-2xl border border-white/95 shadow-[2px_3px_8px_rgba(163,177,198,0.18),-2px_-3px_8px_rgba(255,255,255,0.9)] hover:-translate-y-1 hover:shadow-[4px_6px_12px_rgba(163,177,198,0.22)] transition-all duration-200 flex flex-col justify-between group">
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-white to-[#E2E8F0] shadow-[1px_1px_3px_rgba(163,177,198,0.2)] flex items-center justify-center text-[#1856F3]">
                <Lock size={18} />
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#1856F3] bg-[#EBF1FF] px-2.5 py-0.5 rounded-full border border-blue-200/60 shadow-sm">
                HSM Vault
              </span>
            </div>
            <div className="mt-3">
              <span className="text-lg sm:text-xl font-black text-[#042656] font-mono block tracking-tight">
                AES-256
              </span>
              <span className="text-xs font-semibold text-[#64748B] block mt-0.5">Hardware HSM Security</span>
            </div>
          </div>

          {/* Tile 3: ISO/IEC 27001 */}
          <div className="bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#EEF2F6] p-5 rounded-2xl border border-white/95 shadow-[2px_3px_8px_rgba(163,177,198,0.18),-2px_-3px_8px_rgba(255,255,255,0.9)] hover:-translate-y-1 hover:shadow-[4px_6px_12px_rgba(163,177,198,0.22)] transition-all duration-200 flex flex-col justify-between group">
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-white to-[#E2E8F0] shadow-[1px_1px_3px_rgba(163,177,198,0.2)] flex items-center justify-center text-[#8B5CF6]">
                <FileCheck size={18} />
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#7C3AED] bg-[#F3E8FF] px-2.5 py-0.5 rounded-full border border-purple-200/60 shadow-sm">
                Audited
              </span>
            </div>
            <div className="mt-3">
              <span className="text-lg sm:text-xl font-black text-[#042656] font-mono block tracking-tight">
                ISO 27001
              </span>
              <span className="text-xs font-semibold text-[#64748B] block mt-0.5">Security Management</span>
            </div>
          </div>

          {/* Tile 4: DPDP 2023 */}
          <div className="bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#EEF2F6] p-5 rounded-2xl border border-white/95 shadow-[2px_3px_8px_rgba(163,177,198,0.18),-2px_-3px_8px_rgba(255,255,255,0.9)] hover:-translate-y-1 hover:shadow-[4px_6px_12px_rgba(163,177,198,0.22)] transition-all duration-200 flex flex-col justify-between group">
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-white to-[#E2E8F0] shadow-[1px_1px_3px_rgba(163,177,198,0.2)] flex items-center justify-center text-[#F59E0B]">
                <KeyRound size={18} />
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#D97706] bg-[#FEF3C7] px-2.5 py-0.5 rounded-full border border-amber-200/60 shadow-sm">
                Compliant
              </span>
            </div>
            <div className="mt-3">
              <span className="text-lg sm:text-xl font-black text-[#042656] font-mono block tracking-tight">
                DPDP 2023
              </span>
              <span className="text-xs font-semibold text-[#64748B] block mt-0.5">Data Privacy Ready</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
