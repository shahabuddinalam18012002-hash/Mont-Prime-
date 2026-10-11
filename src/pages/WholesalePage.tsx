import React, { useState, useEffect } from 'react';
import { BusinessType, WholesaleEnquiryPayload } from '../types';
import { submitWholesaleEnquiry, SubmissionResponse } from '../services/enquiryService';
import { SITE_CONFIG, getWhatsAppUrl } from '../config/siteConfig';
import {
  Building2,
  Mail,
  Phone,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  Send,
  ShieldCheck,
  Package,
  Layers,
  ArrowRight,
} from 'lucide-react';

interface WholesalePageProps {
  prefilledProduct?: string;
  onOpenPrivacy: () => void;
}

export const WholesalePage: React.FC<WholesalePageProps> = ({
  prefilledProduct,
  onOpenPrivacy,
}) => {
  // Form State
  const [fullName, setFullName] = useState('');
  const [businessContact, setBusinessContact] = useState('');
  const [businessType, setBusinessType] = useState<BusinessType>('Retailer');
  const [message, setMessage] = useState(
    prefilledProduct
      ? `Hello MONT PRIME, we are interested in discussing wholesale terms, minimum order quantities, and sample availability for ${prefilledProduct}.`
      : ''
  );
  const [companyName, setCompanyName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('India');
  const [categories, setCategories] = useState<string[]>(
    prefilledProduct ? ["Men's Wallets"] : ["Men's Wallets", "Card Holders"]
  );
  const [estimatedQuantity, setEstimatedQuantity] = useState('50 - 100 units');
  const [preferredContactMethod, setPreferredContactMethod] = useState<'WhatsApp' | 'Phone Call' | 'Email'>('WhatsApp');
  const [honeypot, setHoneypot] = useState(''); // Spam trap

  // UI state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submissionResult, setSubmissionResult] = useState<SubmissionResponse | null>(null);

  useEffect(() => {
    if (prefilledProduct) {
      setMessage(
        `Hello MONT PRIME, we are interested in discussing wholesale terms, minimum order quantities, and sample availability for ${prefilledProduct}.`
      );
    }
  }, [prefilledProduct]);

  const handleCategoryToggle = (cat: string) => {
    if (categories.includes(cat)) {
      if (categories.length > 1) {
        setCategories(categories.filter((c) => c !== cat));
      }
    } else {
      setCategories([...categories, cat]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Basic Client validation
    if (!fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!businessContact.trim()) {
      setErrorMessage('Please enter a valid business email or phone number.');
      return;
    }
    if (!businessType) {
      setErrorMessage('Please select your business type.');
      return;
    }
    if (!message.trim() || message.trim().length < 10) {
      setErrorMessage('Please enter a brief message regarding your requirements (minimum 10 characters).');
      return;
    }

    setIsSubmitting(true);

    try {
      const payload: WholesaleEnquiryPayload = {
        fullName: fullName.trim(),
        businessContact: businessContact.trim(),
        businessType,
        message: message.trim(),
        companyName: companyName.trim() || undefined,
        city: city.trim() || undefined,
        state: state.trim() || undefined,
        country: country.trim() || 'India',
        categories,
        estimatedQuantity,
        preferredContactMethod,
        honeypot,
        submittedAt: new Date().toISOString(),
      };

      const result = await submitWholesaleEnquiry(payload);
      setSubmissionResult(result);
    } catch (err: any) {
      setErrorMessage(err.message || 'An error occurred while submitting your enquiry. Please try again or reach out on WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmissionResult(null);
    setErrorMessage(null);
    setFullName('');
    setBusinessContact('');
    setCompanyName('');
    setCity('');
    setState('');
    setMessage('');
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-[0.25em] text-[#C8A45D] block">
          B2B & Distribution Channel
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#F5F2EC]">
          Wholesale & Business Opportunities
        </h1>
        <div className="w-16 h-[1.5px] bg-[#C8A45D] mx-auto mt-4 mb-4" />
        <p className="text-sm sm:text-base text-[#B8B5AF] leading-relaxed">
          Are you a retailer, reseller, distributor, or accessories business looking to connect with MONT PRIME? Send us your enquiry to discuss our collection and potential business opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Context, Partner Benefits & WhatsApp Fast-Track */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#141414] border border-[#242424] p-6 sm:p-7 rounded-sm space-y-5">
            <h2 className="font-serif text-2xl font-normal text-[#F5F2EC]">
              Retail & Distribution Program
            </h2>
            <p className="text-xs text-[#B8B5AF] leading-relaxed">
              MONT PRIME collaborates with independent boutiques, menswear specialty shops, corporate gifting agencies, and accessories distributors across India and international regions.
            </p>

            <div className="space-y-3 pt-2 text-xs text-[#D4D1C9]">
              <div className="flex items-start gap-3">
                <Package className="w-4 h-4 text-[#C8A45D] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#F5F2EC] block">Physical Product Samples</strong>
                  Evaluation units dispatched for tactile inspection before order finalization.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Layers className="w-4 h-4 text-[#C8A45D] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#F5F2EC] block">Custom Branding & Packaging</strong>
                  Available foil embossing and bespoke gift-box branding for qualifying orders.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Building2 className="w-4 h-4 text-[#C8A45D] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#F5F2EC] block">Tiered Commercial Terms</strong>
                  Structured pricing with predictable lead times and reliable reorder schedules.
                </div>
              </div>
            </div>
          </div>

          {/* Direct WhatsApp Box */}
          <div className="bg-[#121A14] border border-[#1E3823] p-6 rounded-sm space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#25D366]">
              <MessageCircle className="w-4 h-4" />
              <span>Direct WhatsApp Channel</span>
            </div>
            <p className="text-xs text-[#A8C5AC] leading-relaxed">
              Prefer WhatsApp? Contact us directly to discuss your enquiry in real-time with our commercial team.
            </p>
            <a
              href={getWhatsAppUrl('Hello MONT PRIME, I am reaching out to discuss wholesale opportunities and bulk order availability.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs uppercase tracking-wider font-semibold text-[#0B0B0B] bg-[#25D366] hover:bg-[#20BA5A] transition-colors rounded-sm cursor-pointer shadow-md"
            >
              <span>Connect on WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Right Column: Genuine Enquiry Form */}
        <div className="lg:col-span-7 bg-[#141414] border border-[#242424] p-6 sm:p-9 rounded-sm">
          {submissionResult ? (
            /* Confirmed Submission State */
            <div className="space-y-6 text-center py-8 animate-in fade-in">
              <div className="w-14 h-14 bg-[#C8A45D]/15 border border-[#C8A45D]/40 text-[#C8A45D] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#F5F2EC]">
                  Enquiry Received
                </h3>
                <p className="text-sm text-[#C8A45D] font-medium max-w-md mx-auto">
                  &ldquo;Thank you for contacting MONT PRIME. Your business enquiry has been received.&rdquo;
                </p>
              </div>

              <div className="bg-[#171717] p-5 rounded-sm border border-[#262626] text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="flex justify-between border-b border-[#222222] pb-2">
                  <span className="text-[#8E8B85]">Reference ID:</span>
                  <span className="font-mono text-[#F5F2EC] font-semibold">{submissionResult.referenceId}</span>
                </div>
                <div className="flex justify-between border-b border-[#222222] pb-2">
                  <span className="text-[#8E8B85]">Registered Contact:</span>
                  <span className="text-[#F5F2EC]">{businessContact}</span>
                </div>
                <div className="flex justify-between border-b border-[#222222] pb-2">
                  <span className="text-[#8E8B85]">Business Type:</span>
                  <span className="text-[#F5F2EC]">{businessType}</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-[#8E8B85]">Status:</span>
                  <span className="text-[#25D366] font-medium">Logged & Queued for Review</span>
                </div>
              </div>

              <p className="text-xs text-[#8E8B85] max-w-sm mx-auto leading-relaxed">
                Our team reviews submissions during regular business hours (Mon–Sat, 10 AM – 7 PM IST) and will contact you via {preferredContactMethod}.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 text-xs uppercase tracking-wider font-semibold text-[#F5F2EC] bg-[#1F1F1F] hover:bg-[#282828] border border-[#333333] transition-colors rounded-sm cursor-pointer"
                >
                  Submit Another Enquiry
                </button>

                <a
                  href={getWhatsAppUrl(`Hello MONT PRIME, referring to Enquiry Reference ${submissionResult.referenceId}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 text-xs uppercase tracking-wider font-semibold text-[#0B0B0B] bg-[#C8A45D] hover:bg-[#E3CD98] transition-colors rounded-sm cursor-pointer"
                >
                  Follow-up on WhatsApp
                </a>
              </div>
            </div>
          ) : (
            /* Active Wholesale Form */
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="border-b border-[#222222] pb-4">
                <h2 className="font-serif text-2xl font-normal text-[#F5F2EC]">
                  Wholesale Enquiry Form
                </h2>
                <p className="text-xs text-[#8E8B85] mt-1">
                  Please share your business details. Fields marked with <span className="text-[#C8A45D]">*</span> are required.
                </p>
              </div>

              {/* Error notice */}
              {errorMessage && (
                <div
                  role="alert"
                  className="p-3.5 bg-red-950/40 border border-red-800/60 text-red-200 text-xs rounded-sm flex items-start gap-2.5 animate-in fade-in"
                >
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Spam Honeypot Field (Hidden from humans) */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="hp_field">Leave this field blank</label>
                <input
                  id="hp_field"
                  type="text"
                  tabIndex={-1}
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  autoComplete="off"
                />
              </div>

              {/* 1. Full Name & Business Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A8A59F] mb-1.5 font-medium">
                    Full Name <span className="text-[#C8A45D]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full bg-[#171717] border border-[#2B2B2B] focus:border-[#C8A45D] focus:ring-1 focus:ring-[#C8A45D] rounded-sm py-2.5 px-3.5 text-xs text-[#F5F2EC] placeholder-[#6E6B65] outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A8A59F] mb-1.5 font-medium">
                    Business Email or Phone <span className="text-[#C8A45D]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={businessContact}
                    onChange={(e) => setBusinessContact(e.target.value)}
                    placeholder="e.g. rahul@retailstore.in or +91 98..."
                    className="w-full bg-[#171717] border border-[#2B2B2B] focus:border-[#C8A45D] focus:ring-1 focus:ring-[#C8A45D] rounded-sm py-2.5 px-3.5 text-xs text-[#F5F2EC] placeholder-[#6E6B65] outline-none transition-colors"
                  />
                </div>
              </div>

              {/* 2. Business Type & Company Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A8A59F] mb-1.5 font-medium">
                    Business Type <span className="text-[#C8A45D]">*</span>
                  </label>
                  <select
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value as BusinessType)}
                    className="w-full bg-[#171717] border border-[#2B2B2B] focus:border-[#C8A45D] focus:ring-1 focus:ring-[#C8A45D] rounded-sm py-2.5 px-3 text-xs text-[#F5F2EC] outline-none transition-colors cursor-pointer"
                  >
                    <option value="Retailer">Retailer (Physical Store or Boutique)</option>
                    <option value="Wholesaler">Wholesaler</option>
                    <option value="Distributor">Regional Distributor</option>
                    <option value="Reseller">Reseller / Corporate Gifting</option>
                    <option value="Other">Other Commercial Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A8A59F] mb-1.5 font-medium">
                    Company / Shop Name <span className="text-[#6E6B65] font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Premier Menswear"
                    className="w-full bg-[#171717] border border-[#2B2B2B] focus:border-[#C8A45D] focus:ring-1 focus:ring-[#C8A45D] rounded-sm py-2.5 px-3.5 text-xs text-[#F5F2EC] placeholder-[#6E6B65] outline-none transition-colors"
                  />
                </div>
              </div>

              {/* 3. Location fields: City, State, Country */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A8A59F] mb-1.5 font-medium">
                    City <span className="text-[#6E6B65] font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Mumbai"
                    className="w-full bg-[#171717] border border-[#2B2B2B] focus:border-[#C8A45D] rounded-sm py-2 px-3 text-xs text-[#F5F2EC] placeholder-[#6E6B65] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A8A59F] mb-1.5 font-medium">
                    State <span className="text-[#6E6B65] font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    placeholder="e.g. Maharashtra"
                    className="w-full bg-[#171717] border border-[#2B2B2B] focus:border-[#C8A45D] rounded-sm py-2 px-3 text-xs text-[#F5F2EC] placeholder-[#6E6B65] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A8A59F] mb-1.5 font-medium">
                    Country
                  </label>
                  <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full bg-[#171717] border border-[#2B2B2B] focus:border-[#C8A45D] rounded-sm py-2 px-3 text-xs text-[#F5F2EC] outline-none"
                  />
                </div>
              </div>

              {/* 4. Product Categories of Interest */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#A8A59F] mb-2 font-medium">
                  Interested Product Categories
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
                  {["Men's Wallets", "Men's Purses", 'Card Holders'].map((cat) => {
                    const isChecked = categories.includes(cat);
                    return (
                      <button
                        type="button"
                        key={cat}
                        onClick={() => handleCategoryToggle(cat)}
                        className={`flex items-center gap-2 p-2.5 rounded-sm border transition-colors text-left cursor-pointer ${
                          isChecked
                            ? 'bg-[#C8A45D]/15 border-[#C8A45D] text-[#F5F2EC]'
                            : 'bg-[#171717] border-[#262626] text-[#8E8B85] hover:text-[#B8B5AF]'
                        }`}
                      >
                        <span className={`w-3.5 h-3.5 rounded-sm flex items-center justify-center border text-[10px] ${
                          isChecked ? 'bg-[#C8A45D] border-[#C8A45D] text-black font-bold' : 'border-[#444]'
                        }`}>
                          {isChecked ? '✓' : ''}
                        </span>
                        <span>{cat}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 5. Order Quantity & Preferred Contact Method */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A8A59F] mb-1.5 font-medium">
                    Estimated Batch Quantity
                  </label>
                  <select
                    value={estimatedQuantity}
                    onChange={(e) => setEstimatedQuantity(e.target.value)}
                    className="w-full bg-[#171717] border border-[#2B2B2B] focus:border-[#C8A45D] rounded-sm py-2.5 px-3 text-xs text-[#F5F2EC] outline-none cursor-pointer"
                  >
                    <option value="Initial Sample Set (1 - 10 units)">Initial Sample Set (1 - 10 units)</option>
                    <option value="50 - 100 units">50 – 100 units</option>
                    <option value="100 - 300 units">100 – 300 units</option>
                    <option value="300 - 500 units">300 – 500 units</option>
                    <option value="500+ units">500+ units (Regional Distribution)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#A8A59F] mb-1.5 font-medium">
                    Preferred Contact Method
                  </label>
                  <select
                    value={preferredContactMethod}
                    onChange={(e) => setPreferredContactMethod(e.target.value as any)}
                    className="w-full bg-[#171717] border border-[#2B2B2B] focus:border-[#C8A45D] rounded-sm py-2.5 px-3 text-xs text-[#F5F2EC] outline-none cursor-pointer"
                  >
                    <option value="WhatsApp">WhatsApp Message</option>
                    <option value="Email">Official Business Email</option>
                    <option value="Phone Call">Direct Phone Call</option>
                  </select>
                </div>
              </div>

              {/* 6. Message */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#A8A59F] mb-1.5 font-medium">
                  Enquiry Message <span className="text-[#C8A45D]">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your store, target timeline, requested models, or specific questions..."
                  className="w-full bg-[#171717] border border-[#2B2B2B] focus:border-[#C8A45D] focus:ring-1 focus:ring-[#C8A45D] rounded-sm p-3.5 text-xs text-[#F5F2EC] placeholder-[#6E6B65] outline-none transition-colors"
                />
              </div>

              {/* Privacy Notice Notice */}
              <div className="p-3 bg-[#111111] border border-[#1F1F1F] rounded-sm flex items-start gap-2.5 text-[11px] text-[#8E8B85]">
                <ShieldCheck className="w-4 h-4 text-[#C8A45D] shrink-0 mt-0.5" />
                <p>
                  Your business details are collected solely to evaluate and respond to your commercial enquiry. We do not store payment credentials or share commercial data with third parties.{' '}
                  <button
                    type="button"
                    onClick={onOpenPrivacy}
                    className="text-[#C8A45D] hover:underline inline"
                  >
                    Read Privacy Notice
                  </button>
                  .
                </p>
              </div>

              {/* Submit CTA */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 text-xs uppercase tracking-[0.18em] font-semibold text-[#0B0B0B] bg-[#C8A45D] hover:bg-[#E3CD98] disabled:opacity-50 transition-colors rounded-sm cursor-pointer shadow-lg"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Transmitting Enquiry...' : 'Submit Business Enquiry'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
