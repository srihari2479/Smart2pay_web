import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Smartphone, 
  ShieldCheck, 
  ArrowUpRight, 
  Heart,
  ExternalLink
} from 'lucide-react';

import BrandLogo from '../common/BrandLogo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#042656] text-white pt-20 pb-12 overflow-hidden">
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1856F3]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#10B981]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand & Corporate Overview */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link to="/" className="mb-6 group block">
              <BrandLogo size={46} textDark={false} />
            </Link>

            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-sm">
              Smart2Pay empowers businesses, merchants, and institutions with next-generation fintech infrastructure, intelligent multi-bank routing, automated reconciliations, and instantaneous settlement execution.
            </p>

            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-medium border border-emerald-500/30">
                <ShieldCheck size={14} /> 256-Bit Encrypted
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-medium border border-blue-500/30">
                PCI-DSS Compliant
              </span>
            </div>
          </div>

          {/* Quick Links / Solutions */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-5 text-[#38BDF8]">
              Solutions
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <a href="#ecosystem" className="hover:text-white transition-colors">
                  Payment Ecosystem
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Multi-Bank Router
                </a>
              </li>
              <li>
                <a href="#utility" className="hover:text-white transition-colors">
                  BBPS & Utility Billing
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-white transition-colors">
                  Fraud Detection Radar
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition-colors">
                  Fee & ROI Estimator
                </a>
              </li>
            </ul>
          </div>

          {/* Legal / Policies */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-5 text-[#38BDF8]">
              Smart2Pay Legal
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <Link to="/terms" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Terms & Conditions</span>
                  <ArrowUpRight size={13} className="text-white/40" />
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Privacy Policy</span>
                  <ArrowUpRight size={13} className="text-white/40" />
                </Link>
              </li>
              <li>
                <Link to="/refund" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Refund Policy</span>
                  <ArrowUpRight size={13} className="text-white/40" />
                </Link>
              </li>
              <li>
                <Link to="/delete-account" className="hover:text-white transition-colors flex items-center gap-1 text-rose-300 hover:text-rose-200">
                  <span>Request to Delete Account</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Official Registered Office & Contact */}
          <div className="lg:col-span-4">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-5 text-[#38BDF8]">
              Corporate Office & Contact
            </h4>
            
            <div className="space-y-4 text-sm text-white/80">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#38BDF8] shrink-0 mt-0.5" />
                <p className="leading-relaxed text-white/75 text-xs sm:text-sm">
                  <strong className="text-white block font-semibold mb-0.5">SMART2PAY HEADQUARTERS</strong>
                  Revenue Ward No 26, no 26-30-19, Yerukuvanipalem, Ramalayam Street, VISAKHAPATNAM, Paravada Industrial Area, Anakapalli, Andhra Pradesh, 531019
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#38BDF8] shrink-0" />
                <a href="tel:+918886317755" className="hover:text-white font-mono tracking-wide text-white/90">
                  +91 8886317755
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[#38BDF8] shrink-0" />
                <a href="mailto:Support@smart2pay.biz" className="hover:text-white font-mono text-white/90">
                  Support@smart2pay.biz
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Smartphone size={16} className="text-[#38BDF8] shrink-0" />
                <span className="font-mono text-white/90">+91 8886317755</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Clean Legal Links */}
        <div className="pt-6 mt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/70">
          
          {/* Left: Entity & Copyright */}
          <p className="text-center sm:text-left text-white/80 font-medium">
            © {currentYear} <span className="text-white font-bold">Smart2Pay Technologies Pvt Ltd</span>. All rights reserved.
          </p>

          {/* Right: Clean Horizontal Legal & Security Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs">
            <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold">
              <ShieldCheck size={13} /> PCI-DSS L1
            </span>
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/refund" className="hover:text-white transition-colors">
              Refund Policy
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}
