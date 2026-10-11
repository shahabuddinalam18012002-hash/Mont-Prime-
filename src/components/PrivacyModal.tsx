import React from 'react';
import { X, ShieldCheck, Lock, Building2 } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
    >
      <div className="relative w-full max-w-2xl bg-[#121212] border border-[#262626] rounded-sm p-6 sm:p-8 shadow-2xl animate-in fade-in zoom-in-95">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#8E8B85] hover:text-[#F5F2EC] bg-[#1A1A1A] hover:bg-[#262626] rounded-full transition-colors cursor-pointer"
          aria-label="Close Privacy Notice"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 text-xs uppercase tracking-widest text-[#C8A45D] mb-2">
          <ShieldCheck className="w-4 h-4" />
          <span>MONT PRIME Brand Governance</span>
        </div>

        <h2 id="privacy-modal-title" className="font-serif text-2xl font-medium text-[#F5F2EC] mb-4">
          Privacy Policy & Commercial Data Notice
        </h2>

        <div className="space-y-4 text-xs sm:text-sm text-[#B8B5AF] leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
          <section>
            <h3 className="font-semibold text-[#F5F2EC] text-sm mb-1 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#C8A45D]" />
              1. Non-Ecommerce Nature & Scope
            </h3>
            <p>
              MONT PRIME operates this website as an official brand showcase and business catalogue for retailers, distributors, wholesalers, and partners. We do not conduct consumer retail transactions, store credit cards, or operate customer purchasing accounts on this platform.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-[#F5F2EC] text-sm mb-1 flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#C8A45D]" />
              2. Information We Collect
            </h3>
            <p>
              When you submit a Wholesale Enquiry or Contact Message, we collect only the business contact details you provide voluntarily: Full Name, Business Email, Contact Number, Company/Store Name, Business Category, and your enquiry message.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-[#F5F2EC] text-sm mb-1">
              3. Purpose & Data Retention
            </h3>
            <p>
              All submitted commercial details are utilized exclusively to evaluate your wholesale or retail inquiry, provide product catalogs, discuss minimum order quantities, and establish commercial communications. We never sell, lease, or monetize your business information to third-party ad brokers.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-[#F5F2EC] text-sm mb-1">
              4. WhatsApp Communications
            </h3>
            <p>
              Conversations initiated via the WhatsApp Click-to-Chat functionality are governed by WhatsApp&apos;s standard end-to-end encryption protocols and terms of service.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-[#F5F2EC] text-sm mb-1">
              5. Contact & Rectification
            </h3>
            <p>
              For questions regarding your submitted business enquiry or to request removal of your contact details from our commercial correspondence, email us directly at <span className="text-[#E3CD98]">{SITE_CONFIG.contact.email}</span>.
            </p>
          </section>
        </div>

        <div className="mt-6 pt-4 border-t border-[#222222] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs uppercase tracking-wider font-semibold text-[#0B0B0B] bg-[#C8A45D] hover:bg-[#E3CD98] transition-colors rounded-sm cursor-pointer"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
