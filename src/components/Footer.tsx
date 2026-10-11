import React from 'react';
import { PageId } from '../types';
import { SITE_CONFIG, getWhatsAppUrl } from '../config/siteConfig';
import { MessageCircle, Mail, Phone, MapPin, ExternalLink, ShieldCheck, Settings } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenPrivacy: () => void;
  onOpenConfigGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenPrivacy,
  onOpenConfigGuide,
}) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080808] border-t border-[#1F1F1F] text-[#B8B5AF] text-sm">
      {/* Upper Brand & Link Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Col 1 & 2: Brand Lockup & Purpose */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => handleNav('home')}
              className="text-left font-serif text-2xl font-semibold tracking-[0.25em] text-[#F5F2EC] uppercase hover:text-[#E3CD98] transition-colors"
            >
              MONT PRIME
            </button>
            <p className="text-xs uppercase tracking-[0.18em] text-[#C8A45D]">
              {SITE_CONFIG.tagline}
            </p>
            <p className="text-sm text-[#8E8B85] leading-relaxed max-w-sm">
              A premium men&apos;s accessories label focusing on wallets, purses, and card holders.
              Conceived for everyday elegance, refined durability, and dedicated commercial partnerships with retailers and distributors.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs rounded-sm border border-[#333333] hover:border-[#C8A45D] text-[#F5F2EC] hover:text-[#E3CD98] transition-colors"
                aria-label="Direct WhatsApp Enquiry"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp Business</span>
              </a>

              <button
                onClick={onOpenConfigGuide}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#8E8B85] hover:text-[#F5F2EC] transition-colors rounded-sm border border-[#222222] hover:border-[#444444]"
                title="Website Owner Guide: Edit WhatsApp, Phone, Address"
              >
                <Settings className="w-3 h-3 text-[#C8A45D]" />
                <span>Config Guide</span>
              </button>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#F5F2EC] mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-[#E3CD98] transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-[#E3CD98] transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('collection')}
                  className="hover:text-[#E3CD98] transition-colors text-left"
                >
                  Our Collection
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('manufacturing')}
                  className="hover:text-[#E3CD98] transition-colors text-left"
                >
                  Manufacturing & Quality
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('story')}
                  className="hover:text-[#E3CD98] transition-colors text-left"
                >
                  Brand Journey
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Commercial Categories */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#F5F2EC] mb-4">
              Collection
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav('collection')}
                  className="hover:text-[#E3CD98] transition-colors text-left"
                >
                  Men&apos;s Wallets
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('collection')}
                  className="hover:text-[#E3CD98] transition-colors text-left"
                >
                  Men&apos;s Purses & Organizers
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('collection')}
                  className="hover:text-[#E3CD98] transition-colors text-left"
                >
                  Minimalist Card Holders
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('wholesale')}
                  className="text-[#C8A45D] hover:text-[#E3CD98] font-medium transition-colors text-left flex items-center gap-1 mt-3"
                >
                  <span>Wholesale Enquiries</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Business Contact Details */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#F5F2EC] mb-4">
              Business Enquiries
            </h4>
            <ul className="space-y-3 text-xs leading-relaxed">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C8A45D] shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.contact.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C8A45D] shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.contact.enquiryEmail}`}
                  className="hover:text-[#F5F2EC] transition-colors"
                >
                  {SITE_CONFIG.contact.enquiryEmail}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C8A45D] shrink-0" />
                <a
                  href={`tel:${SITE_CONFIG.contact.phone.replace(/[^0-9+]/g, '')}`}
                  className="hover:text-[#F5F2EC] transition-colors"
                >
                  {SITE_CONFIG.contact.phone}
                </a>
              </li>
              <li className="pt-1 text-[#8E8B85]">
                <span>{SITE_CONFIG.contact.businessHours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Sub-Bar */}
      <div className="border-t border-[#171717] bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#787570]">
          <div>
            © {currentYear} MONT PRIME. All rights reserved. Crafted for Everyday Elegance.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-[#E3CD98] transition-colors flex items-center gap-1.5"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#C8A45D]" />
              <span>Privacy & Commercial Data Notice</span>
            </button>
            <button
              onClick={() => handleNav('contact')}
              className="hover:text-[#E3CD98] transition-colors"
            >
              Contact Directory
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
