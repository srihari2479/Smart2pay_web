import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, 
  ArrowRight, 
  Menu, 
  X, 
  Layers, 
  Sparkles,
  Zap,
  Lock,
  User,
  ExternalLink
} from 'lucide-react';
import BrandLogo from '../common/BrandLogo';

import { useLenisSmoothScroll } from '../../hooks/useLenisSmoothScroll';

export default function Navbar({ onOpenDemoModal, onOpenLoginModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { scrollTo } = useLenisSmoothScroll();

  const isHome = location.pathname === '/';

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 15);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    if (isHome) {
      scrollTo(`#${sectionId}`);
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-20 flex items-center transition-all duration-300 ${
        isScrolled
          ? 'bg-[#EEF2F6]/95 backdrop-blur-xl border-b border-[#CBD5E1]/80 shadow-[0_4px_16px_rgba(163,177,198,0.15)]'
          : 'bg-[#EEF2F6]/90 backdrop-blur-lg border-b border-[#D8E1EA] shadow-[0_2px_8px_rgba(163,177,198,0.08)]'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="outline-none shrink-0" aria-label="Smart2Pay Home">
          <BrandLogo size={42} textDark={true} />
        </Link>

        {/* Desktop Navigation Links Pill */}
        <nav 
          aria-label="Main Navigation"
          className="hidden lg:flex items-center gap-1 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#D5DEE7] shadow-[0_2px_10px_rgba(163,177,198,0.25)] shrink-0"
        >
          <button
            onClick={() => handleNavClick('ecosystem')}
            className="px-3.5 py-1.5 rounded-full text-[13px] font-bold text-[#334155] hover:text-[#1856F3] hover:bg-[#EEF4FF] transition-all whitespace-nowrap cursor-pointer"
          >
            Ecosystem
          </button>
          
          <button
            onClick={() => handleNavClick('features')}
            className="px-3.5 py-1.5 rounded-full text-[13px] font-bold text-[#334155] hover:text-[#1856F3] hover:bg-[#EEF4FF] transition-all whitespace-nowrap cursor-pointer"
          >
            Features
          </button>

          <button
            onClick={() => handleNavClick('utility')}
            className="px-3.5 py-1.5 rounded-full text-[13px] font-bold text-[#334155] hover:text-[#1856F3] hover:bg-[#EEF4FF] transition-all whitespace-nowrap cursor-pointer"
          >
            Services
          </button>

          <button
            onClick={() => handleNavClick('security')}
            className="px-3.5 py-1.5 rounded-full text-[13px] font-bold text-[#334155] hover:text-[#1856F3] hover:bg-[#EEF4FF] transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5"
          >
            <ShieldCheck size={14} className="text-[#10B981]" />
            <span>Security</span>
          </button>

          <button
            onClick={() => handleNavClick('calculator')}
            className="px-3.5 py-1.5 rounded-full text-[13px] font-bold text-[#334155] hover:text-[#1856F3] hover:bg-[#EEF4FF] transition-all whitespace-nowrap cursor-pointer"
          >
            Fee Estimator
          </button>

          <Link
            to="/terms"
            className={`px-3.5 py-1.5 rounded-full text-[13px] font-bold transition-all whitespace-nowrap ${
              location.pathname.startsWith('/terms') || location.pathname.startsWith('/privacy') || location.pathname.startsWith('/refund') || location.pathname.startsWith('/delete-account')
                ? 'text-[#1856F3] bg-[#EEF4FF]'
                : 'text-[#334155] hover:text-[#1856F3] hover:bg-[#EEF4FF]'
            }`}
          >
            Legal
          </Link>
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenLoginModal}
            className="h-10 px-4 sm:px-5 rounded-full text-xs font-bold text-[#0F172A] bg-white border border-[#CBD5E1] shadow-[2px_2px_6px_rgba(163,177,198,0.25)] hover:border-[#1856F3]/50 hover:text-[#1856F3] hover:shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <User size={14} className="text-[#64748B]" />
            <span>Merchant Portal</span>
          </button>

          <button
            onClick={onOpenDemoModal}
            className="h-10 px-5 sm:px-6 rounded-full text-xs font-bold text-white bg-[#1856F3] hover:bg-[#0D45D6] shadow-[0_4px_14px_rgba(24,86,243,0.35)] hover:shadow-[0_6px_20px_rgba(24,86,243,0.45)] active:scale-95 transition-all flex items-center justify-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Get Started</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="lg:hidden w-11 h-11 rounded-2xl bg-white/90 border border-white flex items-center justify-center text-[#042656] shadow-[2px_2px_8px_rgba(163,177,198,0.35)] active:scale-95 transition-transform"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 bg-[#EEF2F6]/98 backdrop-blur-xl border-b border-[#CBD5E1] shadow-2xl p-6 transition-all animate-fadeIn">
          <div className="flex flex-col gap-2.5">
            <button
              onClick={() => handleNavClick('ecosystem')}
              className="flex items-center justify-between p-3.5 rounded-2xl bg-white font-bold text-[#0F172A] shadow-sm text-left hover:text-[#1856F3] transition-colors"
            >
              <span>Payment Ecosystem</span>
              <Layers size={18} className="text-[#1856F3]" />
            </button>

            <button
              onClick={() => handleNavClick('features')}
              className="flex items-center justify-between p-3.5 rounded-2xl bg-white font-bold text-[#0F172A] shadow-sm text-left hover:text-[#1856F3] transition-colors"
            >
              <span>Core Features</span>
              <Sparkles size={18} className="text-[#1856F3]" />
            </button>

            <button
              onClick={() => handleNavClick('utility')}
              className="flex items-center justify-between p-3.5 rounded-2xl bg-white font-bold text-[#0F172A] shadow-sm text-left hover:text-[#1856F3] transition-colors"
            >
              <span>BBPS & Utility Services</span>
              <Zap size={18} className="text-[#F59E0B]" />
            </button>

            <button
              onClick={() => handleNavClick('security')}
              className="flex items-center justify-between p-3.5 rounded-2xl bg-white font-bold text-[#0F172A] shadow-sm text-left hover:text-[#1856F3] transition-colors"
            >
              <span>Security & Compliance</span>
              <ShieldCheck size={18} className="text-[#10B981]" />
            </button>

            <button
              onClick={() => handleNavClick('calculator')}
              className="flex items-center justify-between p-3.5 rounded-2xl bg-white font-bold text-[#0F172A] shadow-sm text-left hover:text-[#1856F3] transition-colors"
            >
              <span>Fee & ROI Estimator</span>
              <span className="text-xs text-[#1856F3] font-mono font-bold">Calculator</span>
            </button>

            <Link
              to="/terms"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-3.5 rounded-2xl bg-white font-bold text-[#0F172A] shadow-sm text-left hover:text-[#1856F3] transition-colors"
            >
              <span>Legal Policies & KYB</span>
              <ExternalLink size={18} className="text-[#64748B]" />
            </Link>

            {/* Mobile Action CTAs */}
            <div className="flex flex-col gap-2.5 pt-4 mt-2 border-t border-[#CBD5E1]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenLoginModal) onOpenLoginModal();
                }}
                className="w-full h-11 rounded-2xl bg-white border border-[#CBD5E1] text-[#0F172A] font-bold text-sm shadow-sm flex items-center justify-center gap-2"
              >
                <User size={16} />
                <span>Merchant Portal Login</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenDemoModal) onOpenDemoModal();
                }}
                className="w-full h-11 rounded-2xl bg-gradient-to-r from-[#1856F3] to-[#042656] text-white font-bold text-sm shadow-md flex items-center justify-center gap-2"
              >
                <span>Get Started Now</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
