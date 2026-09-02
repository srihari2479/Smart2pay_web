import React, { useState } from 'react';
import { UserX, AlertTriangle, CheckCircle2, ShieldAlert, ArrowRight } from 'lucide-react';
import LegalLayout from '../components/legal/LegalLayout';
import Button from '../components/common/Button';

export default function DeleteAccount() {
  const [formData, setFormData] = useState({
    merchantId: '',
    email: '',
    phone: '',
    reason: '',
    confirmed: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.confirmed) return;
    setSubmitted(true);
  };

  return (
    <LegalLayout title="Request to Delete Account" lastUpdated="January 15, 2026">
      <section className="space-y-4 mb-8">
        <h2 className="text-xl font-bold text-[#0F172A]">Account Deletion & Data Privacy Portal</h2>
        <p>
          In accordance with our user privacy standards and the Digital Personal Data Protection (DPDP) Act 2023, you may request permanent deletion of your <strong>Smart2Pay</strong> merchant profile and associated non-statutory records.
        </p>
      </section>

      {/* Important Warning Notice */}
      <div className="neu-sunken p-5 rounded-2xl bg-[#FFE4E6]/50 border border-[#F43F5E]/30 mb-8 flex items-start gap-4">
        <AlertTriangle size={24} className="text-[#F43F5E] shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm text-[#334155] space-y-1">
          <p className="font-bold text-[#E11D48]">Critical Information Prior to Deletion:</p>
          <ul className="list-disc pl-4 space-y-1 text-xs">
            <li>Any outstanding balance in your merchant wallet will be settled to your registered bank account.</li>
            <li>Active API keys, soundbox hardware pairings, and webhook endpoints will be permanently revoked.</li>
            <li>Statutory financial records will be retained for the legally mandated period as required under PMLA/RBI guidelines.</li>
          </ul>
        </div>
      </div>

      {submitted ? (
        <div className="neu-raised p-8 rounded-3xl bg-[#D1FAE5]/60 border border-[#10B981]/30 text-center space-y-4">
          <div className="w-14 h-14 rounded-full bg-[#10B981] text-white flex items-center justify-center mx-auto shadow-md">
            <CheckCircle2 size={30} />
          </div>
          <h3 className="text-xl font-bold text-[#042656]">Deletion Request Logged Successfully</h3>
          <p className="text-sm text-[#475569] max-w-md mx-auto">
            Your ticket <strong>#DEL-{Math.floor(100000 + Math.random() * 900000)}</strong> has been received. Our compliance officer will verify account clearances and process closure within 7 working days. Confirmation will be sent to your registered email.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 neu-raised p-6 sm:p-8 rounded-3xl bg-white border border-white/80">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#64748B] mb-2">
                Merchant / User ID
              </label>
              <input
                type="text"
                required
                placeholder="e.g. S2P-88910"
                value={formData.merchantId}
                onChange={(e) => setFormData({ ...formData, merchantId: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#F0F4F8] border border-[#CBD5E1] text-sm text-[#0F172A] focus:outline-none focus:border-[#1856F3]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#64748B] mb-2">
                Registered Mobile
              </label>
              <input
                type="tel"
                required
                placeholder="+91 9876543210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#F0F4F8] border border-[#CBD5E1] text-sm text-[#0F172A] focus:outline-none focus:border-[#1856F3]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#64748B] mb-2">
              Registered Email Address
            </label>
            <input
              type="email"
              required
              placeholder="merchant@business.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-[#F0F4F8] border border-[#CBD5E1] text-sm text-[#0F172A] focus:outline-none focus:border-[#1856F3]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#64748B] mb-2">
              Reason for Account Closure (Optional)
            </label>
            <textarea
              rows="3"
              placeholder="Please let us know how we can improve..."
              value={formData.reason}
              onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-[#F0F4F8] border border-[#CBD5E1] text-sm text-[#0F172A] focus:outline-none focus:border-[#1856F3]"
            />
          </div>

          <div className="flex items-start gap-3 pt-2">
            <input
              type="checkbox"
              id="confirmDeletion"
              required
              checked={formData.confirmed}
              onChange={(e) => setFormData({ ...formData, confirmed: e.target.checked })}
              className="mt-1 w-4 h-4 rounded text-[#1856F3] focus:ring-[#1856F3] cursor-pointer"
            />
            <label htmlFor="confirmDeletion" className="text-xs text-[#475569] cursor-pointer">
              I acknowledge that deleting my account will terminate all active merchant settlements, revoking all API credentials and linked payment soundboxes.
            </label>
          </div>

          <Button
            type="submit"
            variant="primary"
            size="md"
            icon={UserX}
            iconPosition="right"
            className="w-full justify-center bg-[#E11D48] hover:bg-[#BE123C] text-white"
          >
            Submit Account Deletion Request
          </Button>
        </form>
      )}
    </LegalLayout>
  );
}
