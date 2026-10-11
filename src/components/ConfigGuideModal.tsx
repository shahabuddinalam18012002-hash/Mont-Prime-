import React from 'react';
import { X, Settings, CheckCircle2, Globe, MessageCircle, MapPin, Mail, Server } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface ConfigGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConfigGuideModal: React.FC<ConfigGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="config-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
    >
      <div className="relative w-full max-w-3xl bg-[#121212] border border-[#2B2B2B] rounded-sm p-6 sm:p-8 shadow-2xl animate-in fade-in zoom-in-95">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#8E8B85] hover:text-[#F5F2EC] bg-[#1A1A1A] hover:bg-[#262626] rounded-full transition-colors cursor-pointer"
          aria-label="Close Guide"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C8A45D] mb-1">
          <Settings className="w-4 h-4" />
          <span>Website Owner Operations</span>
        </div>

        <h2 id="config-modal-title" className="font-serif text-2xl font-medium text-[#F5F2EC] mb-2">
          Owner Configuration & Deployment Guide
        </h2>

        <p className="text-xs text-[#8E8B85] mb-6">
          Everything on the MONT PRIME website is structured for rapid customization. All business numbers, addresses, emails, and products are stored in a single centralized file: <code className="text-[#E3CD98] bg-[#1E1E1E] px-1.5 py-0.5 rounded">src/config/siteConfig.ts</code>.
        </p>

        <div className="space-y-5 text-xs sm:text-sm text-[#B8B5AF] max-h-[60vh] overflow-y-auto pr-2">
          {/* Step 1: WhatsApp */}
          <div className="p-4 bg-[#171717] rounded-sm border border-[#222222]">
            <h3 className="font-semibold text-[#F5F2EC] flex items-center gap-2 mb-1.5">
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              1. Updating the Official WhatsApp Number
            </h3>
            <p className="text-xs text-[#B8B5AF] mb-2">
              Open <code className="text-[#E3CD98]">src/config/siteConfig.ts</code> and update the <code className="text-[#E3CD98]">whatsAppNumber</code> property. Use international format without &lsquo;+&rsquo; or spaces (e.g., <code className="text-[#E3CD98]">919973986235</code> for India).
            </p>
            <div className="text-[11px] text-[#7E7B75] bg-[#0E0E0E] p-2.5 rounded font-mono">
              whatsAppNumber: &apos;{SITE_CONFIG.contact.whatsAppNumber}&apos; // current active WhatsApp number
            </div>
          </div>

          {/* Step 2: Contact Info & Address */}
          <div className="p-4 bg-[#171717] rounded-sm border border-[#222222]">
            <h3 className="font-semibold text-[#F5F2EC] flex items-center gap-2 mb-1.5">
              <Mail className="w-4 h-4 text-[#C8A45D]" />
              2. Updating Email, Phone & Commercial Address
            </h3>
            <p className="text-xs text-[#B8B5AF] mb-2">
              Update <code className="text-[#E3CD98]">phone</code>, <code className="text-[#E3CD98]">email</code>, <code className="text-[#E3CD98]">enquiryEmail</code>, and <code className="text-[#E3CD98]">address</code> in the same config file. All footer links, contact page cards, and meta tags synchronize automatically.
            </p>
          </div>

          {/* Step 3: Google Maps Embed */}
          <div className="p-4 bg-[#171717] rounded-sm border border-[#222222]">
            <h3 className="font-semibold text-[#F5F2EC] flex items-center gap-2 mb-1.5">
              <MapPin className="w-4 h-4 text-[#C8A45D]" />
              3. Updating Google Maps Location
            </h3>
            <p className="text-xs text-[#B8B5AF]">
              Go to Google Maps $\to$ Search your actual showroom or office $\to$ Click Share $\to$ Embed a map $\to$ Copy the <code className="text-[#E3CD98]">src</code> URL $\to$ Paste into <code className="text-[#E3CD98]">googleMapsEmbedUrl</code> in <code className="text-[#E3CD98]">siteConfig.ts</code>.
            </p>
          </div>

          {/* Step 4: Custom Domain & Hosting */}
          <div className="p-4 bg-[#171717] rounded-sm border border-[#222222]">
            <h3 className="font-semibold text-[#F5F2EC] flex items-center gap-2 mb-1.5">
              <Globe className="w-4 h-4 text-[#C8A45D]" />
              4. Connecting Your Custom Domain
            </h3>
            <p className="text-xs text-[#B8B5AF] mb-2">
              When publishing to your custom domain (e.g., <code className="text-[#E3CD98]">montprime.com</code>):
            </p>
            <ul className="list-disc pl-5 text-xs space-y-1 text-[#8E8B85]">
              <li>Configure standard DNS A Records pointing to your host&apos;s IP, or CNAME to your provider.</li>
              <li>Ensure SSL / HTTPS certificate is active (automatic on Vercel, Cloud Run, Netlify, or Cloudflare).</li>
              <li>Run <code className="text-[#E3CD98]">npm run build</code> to generate the optimized production dist bundle.</li>
            </ul>
          </div>

          {/* Step 5: Form Handling Backend */}
          <div className="p-4 bg-[#171717] rounded-sm border border-[#222222]">
            <h3 className="font-semibold text-[#F5F2EC] flex items-center gap-2 mb-1.5">
              <Server className="w-4 h-4 text-[#C8A45D]" />
              5. Wholesale Form Submission Delivery
            </h3>
            <p className="text-xs text-[#B8B5AF]">
              Submissions are automatically recorded into the local browser storage buffer. If hosting on a server, connect your email service (e.g. Resend, SendGrid, or Google Workspace SMTP) or a webhook endpoint at <code className="text-[#E3CD98]">/api/enquiry</code>.
            </p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-[#222222] flex justify-between items-center">
          <span className="text-xs text-[#6E6B65]">MONT PRIME · Operations Documentation</span>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs uppercase tracking-wider font-semibold text-[#0B0B0B] bg-[#C8A45D] hover:bg-[#E3CD98] transition-colors rounded-sm cursor-pointer"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
};
