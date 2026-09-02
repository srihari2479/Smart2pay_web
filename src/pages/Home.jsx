import React, { useState } from 'react';
import Navbar from '../components/navigation/Navbar';
import HeroSection from '../components/hero/HeroSection';
import BankEcosystemTicker from '../components/sections/BankEcosystemTicker';
import PaymentFlowSection from '../components/sections/PaymentFlowSection';
import FeatureMatrix from '../components/sections/FeatureMatrix';
import UtilityServicesShowcase from '../components/sections/UtilityServicesShowcase';
import SecuritySection from '../components/sections/SecuritySection';
import FeeCalculatorSection from '../components/sections/FeeCalculatorSection';
import LiveAnalyticsSection from '../components/sections/LiveAnalyticsSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import CTASection from '../components/sections/CTASection';
import Footer from '../components/footer/Footer';
import Modal from '../components/common/Modal';
import Button from '../components/common/Button';
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Building2, Mail, Phone } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Home() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [demoSubmitted, setDemoSubmitted] = useState(false);

  const handleDemoSubmit = (e) => {
    e.preventDefault();
    setDemoSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="min-h-screen bg-[#EEF2F6] flex flex-col justify-between selection:bg-[#1856F3] selection:text-white">
      {/* Navigation Header */}
      <Navbar
        onOpenDemoModal={() => setDemoModalOpen(true)}
        onOpenLoginModal={() => setLoginModalOpen(true)}
      />

      {/* Main Landing Sections Flow */}
      <main className="flex-1">
        {/* 1. Hero Section with 3D Canvas */}
        <HeroSection onOpenDemoModal={() => setDemoModalOpen(true)} />

        {/* 2. Bank Ecosystem & Payment Switch Ticker */}
        <BankEcosystemTicker />

        {/* 3. 3D Payment Flow Lifecycle */}
        <PaymentFlowSection />

        {/* 4. Core Feature Matrix */}
        <FeatureMatrix onOpenDemoModal={() => setDemoModalOpen(true)} />

        {/* 5. Utility Services & BBPS Showcase */}
        <UtilityServicesShowcase onOpenDemoModal={() => setDemoModalOpen(true)} />

        {/* 6. 3D Security Vault & Compliance */}
        <SecuritySection />

        {/* 7. Interactive Fee Estimator & ROI Calculator */}
        <FeeCalculatorSection onOpenDemoModal={() => setDemoModalOpen(true)} />

        {/* 8. Live Real-Time Analytics & Settlement */}
        <LiveAnalyticsSection />

        {/* 9. 4-Step How It Works Flow */}
        <HowItWorksSection />

        {/* 10. High Conversion CTA Section */}
        <CTASection onOpenDemoModal={() => setDemoModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Get Started / Instant Demo Onboarding Modal */}
      <Modal
        isOpen={demoModalOpen}
        onClose={() => {
          setDemoModalOpen(false);
          setDemoSubmitted(false);
        }}
        title="Get Started with Smart2Pay"
        subtitle="Activate instant multi-bank routing & T+0 settlement"
      >
        {demoSubmitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#D1FAE5] text-[#10B981] flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 size={36} />
            </div>
            <h4 className="text-xl font-bold text-[#042656]">Welcome to Smart2Pay!</h4>
            <p className="text-sm text-[#475569] max-w-sm mx-auto">
              Your sandbox merchant API keys and developer documentation have been generated. Our merchant desk is reviewing your details.
            </p>
            <Button
              variant="primary"
              onClick={() => {
                setDemoModalOpen(false);
                setDemoSubmitted(false);
              }}
              className="mt-4"
            >
              Access Merchant Dashboard
            </Button>
          </div>
        ) : (
          <form onSubmit={handleDemoSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#64748B] uppercase tracking-wider mb-1.5">
                Business / Enterprise Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Apex Global Technologies"
                className="w-full px-4 py-2.5 rounded-xl bg-[#F0F4F8] border border-[#CBD5E1] text-sm text-[#0F172A] focus:outline-none focus:border-[#1856F3]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-[#64748B] uppercase tracking-wider mb-1.5">
                  Contact Person
                </label>
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F0F4F8] border border-[#CBD5E1] text-sm text-[#0F172A] focus:outline-none focus:border-[#1856F3]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#64748B] uppercase tracking-wider mb-1.5">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 9876543210"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#F0F4F8] border border-[#CBD5E1] text-sm text-[#0F172A] focus:outline-none focus:border-[#1856F3]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#64748B] uppercase tracking-wider mb-1.5">
                Work Email
              </label>
              <input
                type="email"
                required
                placeholder="partner@company.com"
                className="w-full px-4 py-2.5 rounded-xl bg-[#F0F4F8] border border-[#CBD5E1] text-sm text-[#0F172A] focus:outline-none focus:border-[#1856F3]"
              />
            </div>

            <div className="pt-2">
              <Button
                type="submit"
                variant="primary"
                size="md"
                icon={ArrowRight}
                iconPosition="right"
                className="w-full justify-center text-sm font-bold shadow-lg"
              >
                Generate Live API Credentials
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-4 pt-2 text-[11px] text-[#64748B]">
              <span className="flex items-center gap-1">
                <ShieldCheck size={13} className="text-[#10B981]" /> 256-Bit SSL
              </span>
              <span>•</span>
              <span>Instant Testnet Sandbox</span>
            </div>
          </form>
        )}
      </Modal>

      {/* Merchant Sign In Modal */}
      <Modal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        title="Merchant Portal Sign In"
        subtitle="Access your real-time settlement and multi-bank ledger"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert('Sandbox Merchant Auth simulated successfully!');
            setLoginModalOpen(false);
          }}
          className="space-y-4"
        >
          <div>
            <label className="block text-xs font-bold text-[#64748B] uppercase tracking-wider mb-1.5">
              Registered Merchant Email or Phone
            </label>
            <input
              type="text"
              required
              placeholder="merchant@smart2pay.biz"
              className="w-full px-4 py-2.5 rounded-xl bg-[#F0F4F8] border border-[#CBD5E1] text-sm text-[#0F172A] focus:outline-none focus:border-[#1856F3]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-[#64748B] uppercase tracking-wider mb-1.5">
              Password or 2FA Passkey
            </label>
            <input
              type="password"
              required
              placeholder="••••••••••••"
              className="w-full px-4 py-2.5 rounded-xl bg-[#F0F4F8] border border-[#CBD5E1] text-sm text-[#0F172A] focus:outline-none focus:border-[#1856F3]"
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            size="md"
            className="w-full justify-center text-sm font-bold shadow-md"
          >
            Authenticate Session
          </Button>
        </form>
      </Modal>
    </div>
  );
}
