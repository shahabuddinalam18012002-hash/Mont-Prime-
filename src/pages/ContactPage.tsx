import React, { useState } from 'react';
import { PageId } from '../types';
import { SITE_CONFIG, getWhatsAppUrl } from '../config/siteConfig';
import { submitContactMessage } from '../services/enquiryService';
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  ShieldCheck,
  Instagram,
  Linkedin,
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  onOpenPrivacy: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  onOpenPrivacy,
}) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);

    if (!name.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }
    if (!contact.trim()) {
      setErrorMsg('Please enter your email or phone number.');
      return;
    }
    if (!message.trim()) {
      setErrorMsg('Please write your message.');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await submitContactMessage({
        name: name.trim(),
        contact: contact.trim(),
        subject: subject.trim() || 'General Business Query',
        message: message.trim(),
        honeypot,
        submittedAt: new Date().toISOString(),
      });
      setSuccessMsg(res.message);
      setName('');
      setContact('');
      setSubject('');
      setMessage('');
    } catch (err: any) {
      setErrorMsg(err.message || 'Failed to submit message. Please try WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-[0.25em] text-[#C8A45D] block">
          Communications
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#F5F2EC]">
          Contact MONT PRIME
        </h1>
        <div className="w-16 h-[1.5px] bg-[#C8A45D] mx-auto mt-4 mb-4" />
        <p className="text-sm sm:text-base text-[#B8B5AF] leading-relaxed">
          We welcome commercial enquiries from retailers, distributors, corporate gifting planners, and accessories buyers. Reach our team through our official channels.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Contact Info & Details */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#141414] border border-[#242424] p-6 sm:p-7 rounded-sm space-y-6">
            <h2 className="font-serif text-2xl font-normal text-[#F5F2EC]">
              Commercial Directory
            </h2>

            <ul className="space-y-4 text-xs sm:text-sm text-[#B8B5AF]">
              {/* WhatsApp */}
              <li className="flex items-start gap-3.5 p-3 bg-[#171717] rounded-sm border border-[#242424]">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#8E8B85] block text-[11px] uppercase tracking-wider">
                    WhatsApp Business
                  </span>
                  <a
                    href={getWhatsAppUrl('Hello MONT PRIME, I am reaching out regarding business enquiries.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F5F2EC] hover:text-[#25D366] font-medium transition-colors"
                  >
                    {SITE_CONFIG.contact.displayWhatsApp}
                  </a>
                </div>
              </li>

              {/* Email */}
              <li className="flex items-start gap-3.5 p-3 bg-[#171717] rounded-sm border border-[#242424]">
                <Mail className="w-4 h-4 text-[#C8A45D] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#8E8B85] block text-[11px] uppercase tracking-wider">
                    Wholesale Email
                  </span>
                  <a
                    href={`mailto:${SITE_CONFIG.contact.enquiryEmail}`}
                    className="text-[#F5F2EC] hover:text-[#E3CD98] font-medium transition-colors"
                  >
                    {SITE_CONFIG.contact.enquiryEmail}
                  </a>
                </div>
              </li>

              {/* Phone */}
              <li className="flex items-start gap-3.5 p-3 bg-[#171717] rounded-sm border border-[#242424]">
                <Phone className="w-4 h-4 text-[#C8A45D] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#8E8B85] block text-[11px] uppercase tracking-wider">
                    Office Phone
                  </span>
                  <a
                    href={`tel:${SITE_CONFIG.contact.phone.replace(/[^0-9+]/g, '')}`}
                    className="text-[#F5F2EC] hover:text-[#E3CD98] font-medium transition-colors"
                  >
                    {SITE_CONFIG.contact.phone}
                  </a>
                </div>
              </li>

              {/* Office Address */}
              <li className="flex items-start gap-3.5 p-3 bg-[#171717] rounded-sm border border-[#242424]">
                <MapPin className="w-4 h-4 text-[#C8A45D] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#8E8B85] block text-[11px] uppercase tracking-wider">
                    Registered Office
                  </span>
                  <p className="text-[#F5F2EC] leading-relaxed">
                    {SITE_CONFIG.contact.address}
                  </p>
                </div>
              </li>

              {/* Hours */}
              <li className="flex items-start gap-3.5 p-3 bg-[#171717] rounded-sm border border-[#242424]">
                <Clock className="w-4 h-4 text-[#C8A45D] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#8E8B85] block text-[11px] uppercase tracking-wider">
                    Operating Schedule
                  </span>
                  <p className="text-[#F5F2EC]">{SITE_CONFIG.contact.businessHours}</p>
                </div>
              </li>
            </ul>

            {/* Social Links */}
            <div className="pt-2 border-t border-[#222222]">
              <span className="text-[11px] uppercase tracking-wider text-[#8E8B85] block mb-2">
                Brand Channels
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={SITE_CONFIG.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-[#171717] hover:bg-[#222222] border border-[#2B2B2B] rounded-sm text-xs text-[#F5F2EC] transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#C8A45D]" />
                  <span>Instagram</span>
                </a>
                <a
                  href={SITE_CONFIG.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-[#171717] hover:bg-[#222222] border border-[#2B2B2B] rounded-sm text-xs text-[#F5F2EC] transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#C8A45D]" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Wholesale Priority Box */}
          <div className="p-5 bg-[#141414] border border-[#262626] rounded-sm space-y-2">
            <span className="text-xs uppercase tracking-wider text-[#C8A45D] font-semibold">
              Looking for Bulk Pricing or Sampling?
            </span>
            <p className="text-xs text-[#8E8B85] leading-relaxed">
              For structured orders and distributor tier requests, use our dedicated Wholesale Opportunities form.
            </p>
            <button
              onClick={() => onNavigate('wholesale')}
              className="text-xs text-[#E3CD98] hover:underline font-medium inline-block pt-1 cursor-pointer"
            >
              Open Wholesale Enquiry Form →
            </button>
          </div>
        </div>

        {/* Contact Form & Google Map */}
        <div className="lg:col-span-7 space-y-8">
          {/* Working Contact Form */}
          <div className="bg-[#141414] border border-[#242424] p-6 sm:p-8 rounded-sm">
            <h2 className="font-serif text-2xl font-normal text-[#F5F2EC] mb-1">
              Send a Direct Message
            </h2>
            <p className="text-xs text-[#8E8B85] mb-6">
              Share your inquiry and our commercial desk will reply promptly.
            </p>

            {successMsg && (
              <div
                role="status"
                className="mb-6 p-4 bg-[#142316] border border-[#234F29] text-[#A6E8B0] text-xs rounded-sm flex items-start gap-2.5"
              >
                <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                <span>{successMsg}</span>
              </div>
            )}

            {errorMsg && (
              <div
                role="alert"
                className="mb-6 p-4 bg-red-950/40 border border-red-800/60 text-red-200 text-xs rounded-sm flex items-start gap-2.5"
              >
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Spam Honeypot */}
              <div className="hidden" aria-hidden="true">
                <input
                  type="text"
                  tabIndex={-1}
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  autoComplete="off"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A8A59F] mb-1 font-medium">
                    Your Name <span className="text-[#C8A45D]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Vikram Malhotra"
                    className="w-full bg-[#171717] border border-[#2B2B2B] focus:border-[#C8A45D] rounded-sm py-2 px-3 text-xs text-[#F5F2EC] placeholder-[#6E6B65] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A8A59F] mb-1 font-medium">
                    Email or Phone <span className="text-[#C8A45D]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="e.g. contact@domain.com"
                    className="w-full bg-[#171717] border border-[#2B2B2B] focus:border-[#C8A45D] rounded-sm py-2 px-3 text-xs text-[#F5F2EC] placeholder-[#6E6B65] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#A8A59F] mb-1 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. Catalog Request / Retail Stockist"
                  className="w-full bg-[#171717] border border-[#2B2B2B] focus:border-[#C8A45D] rounded-sm py-2 px-3 text-xs text-[#F5F2EC] placeholder-[#6E6B65] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#A8A59F] mb-1 font-medium">
                  Message <span className="text-[#C8A45D]">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your enquiry..."
                  className="w-full bg-[#171717] border border-[#2B2B2B] focus:border-[#C8A45D] rounded-sm p-3 text-xs text-[#F5F2EC] placeholder-[#6E6B65] outline-none"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-[11px] text-[#7E7B75]">
                  Protected by privacy notice. No spam.
                </span>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 py-2.5 px-6 text-xs uppercase tracking-wider font-semibold text-[#0B0B0B] bg-[#C8A45D] hover:bg-[#E3CD98] disabled:opacity-50 transition-colors rounded-sm cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </div>
            </form>
          </div>

          {/* Google Maps Location Preview Card */}
          <div className="bg-[#141414] border border-[#242424] p-5 rounded-sm space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#C8A45D] font-medium">
                <MapPin className="w-4 h-4" />
                <span>Commercial Office Location</span>
              </div>
              <a
                href={SITE_CONFIG.contact.googleMapsDirectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#E3CD98] hover:underline inline-flex items-center gap-1"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Embedded Google Maps iFrame */}
            <div className="relative aspect-[16/7] rounded-sm overflow-hidden border border-[#222222]">
              <iframe
                title="MONT PRIME Business Location"
                src={SITE_CONFIG.contact.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="text-[11px] text-[#7E7B75]">
              Visits to our commercial consultation studio are scheduled by appointment. Please submit an enquiry prior to arrival.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
