import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { 
  FileText, 
  ShieldCheck, 
  Banknote, 
  UserX, 
  Search, 
  ArrowLeft, 
  Printer, 
  Calendar,
  Building2,
  Mail,
  Phone,
  Scale,
  MessageSquare,
  Send,
  MapPin
} from 'lucide-react';
import Navbar from '../navigation/Navbar';
import Footer from '../footer/Footer';

export default function LegalLayout({ title, lastUpdated, children }) {
  const [searchQuery, setSearchQuery] = useState('');

  const legalNavItems = [
    { name: 'Terms of Service', path: '/terms', icon: FileText },
    { name: 'Privacy Policy', path: '/privacy', icon: ShieldCheck },
    { name: 'Refund Policy', path: '/refund', icon: Banknote },
    { name: 'Grievance Redressal Policy', path: '/grievance', icon: Scale },
    { name: 'Request to Delete Account', path: '/delete-account', icon: UserX }
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#EEF2F6] flex flex-col justify-between">
      <Navbar />

      <main className="pt-24 pb-14 flex-1">
        <div className="w-full px-5 max-w-[1720px] mx-auto">
          
          {/* Breadcrumb / Back Link */}
          <div className="flex items-center justify-between mb-5 pb-3 border-b border-[#CBD5E1]/60">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#1856F3] hover:text-[#042656] transition-colors"
            >
              <ArrowLeft size={16} />
              <span>Back to Smart2Pay Home</span>
            </Link>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white text-xs font-bold text-[#475569] hover:text-[#0F172A] border border-white shadow-sm transition-all cursor-pointer"
            >
              <Printer size={14} />
              <span>Print Policy</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left Column: Official Smart2Pay Legal Sidebar Navigation */}
            <aside className="lg:col-span-3 xl:col-span-3 sticky top-24">
              <div className="neu-raised-lg p-6 bg-white border border-white/90">
                
                {/* Header */}
                <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#64748B] mb-5 px-2">
                  SMART2PAY LEGAL
                </h3>

                {/* Nav Links */}
                <nav className="flex flex-col space-y-1.5 mb-6">
                  {legalNavItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                          `flex items-center gap-3.5 px-4 py-3.5 rounded-2xl text-sm font-bold transition-all ${
                            isActive
                              ? 'bg-[#EBF1FF] text-[#1856F3] border-l-4 border-[#1856F3] shadow-sm'
                              : 'text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0F172A]'
                          }`
                        }
                      >
                        <Icon size={18} className="shrink-0" />
                        <span>{item.name}</span>
                      </NavLink>
                    );
                  })}
                </nav>

                {/* Official Contact Summary Box */}
                <div className="neu-sunken p-4 rounded-2xl bg-[#F0F4F8] text-xs space-y-2.5">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2 font-bold text-[#042656]">
                      <Building2 size={14} className="text-[#1856F3] shrink-0" />
                      <span>Buddica Global Solutions Pvt Ltd</span>
                    </div>
                    <span className="text-[10px] font-semibold text-[#1856F3] uppercase tracking-wider block pl-5">
                      Smart2Pay B2B White Label
                    </span>
                  </div>

                  <div className="flex items-start gap-1.5 text-[11px] text-[#64748B] leading-relaxed">
                    <MapPin size={12} className="text-[#64748B] shrink-0 mt-0.5" />
                    <span>Sankara Matam Rd, Visakhapatnam, Andhra Pradesh, INDIA - 531019</span>
                  </div>

                  <div className="pt-2 border-t border-[#E2E8F0] space-y-1.5">
                    <div className="flex items-center gap-1.5 text-[#334155]">
                      <Mail size={12} className="text-[#1856F3] shrink-0" />
                      <a href="mailto:support@smart2pay.biz" className="hover:underline font-medium truncate">
                        support@smart2pay.biz
                      </a>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#334155]">
                      <Phone size={12} className="text-[#1856F3] shrink-0" />
                      <a href="tel:+918886327755" className="hover:underline font-medium">
                        +91 8886327755
                      </a>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#E2E8F0] flex items-center gap-2">
                    <a 
                      href="https://wa.me/919884548289" 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1 px-2 py-1.5 rounded-lg bg-[#25D366]/10 text-[#128C7E] font-bold text-[11px] hover:bg-[#25D366]/20 transition-colors"
                    >
                      <MessageSquare size={11} />
                      <span>WhatsApp</span>
                    </a>
                    <a 
                      href="https://t.me/buddica" 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1 px-2 py-1.5 rounded-lg bg-[#0088cc]/10 text-[#0088cc] font-bold text-[11px] hover:bg-[#0088cc]/20 transition-colors"
                    >
                      <Send size={11} />
                      <span>Telegram</span>
                    </a>
                  </div>
                </div>

              </div>
            </aside>

            {/* Right Column: Legal Document Content */}
            <article className="lg:col-span-9 xl:col-span-9 neu-raised-lg p-6 sm:p-10 lg:p-12 bg-white border border-white/90">
              
              {/* Document Header */}
              <div className="pb-8 mb-8 border-b border-[#E2E8F0]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1856F3] bg-[#EBF1FF] px-3 py-1 rounded-full mb-3 inline-block">
                  Official Policy Document
                </span>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-3">
                  {title}
                </h1>
                <div className="flex items-center gap-4 text-xs font-semibold text-[#64748B]">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} /> Last Updated: {lastUpdated || 'January 2026'}
                  </span>
                  <span>•</span>
                  <span>Effective for all Smart2Pay Merchants & Users</span>
                </div>
              </div>

              {/* Document Body */}
              <div className="prose prose-slate max-w-none text-[#334155] leading-relaxed space-y-6 text-sm sm:text-base">
                {children}
              </div>

            </article>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
