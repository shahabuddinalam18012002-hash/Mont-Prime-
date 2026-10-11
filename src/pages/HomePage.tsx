import React from 'react';
import { PageId } from '../types';
import { SITE_CONFIG, IMAGES, BRAND_VALUES, getWhatsAppUrl } from '../config/siteConfig';
import { ArrowRight, ArrowUpRight, Shield, Award, Sparkles, Building, Layers } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectCategoryFilter?: (category: 'wallets' | 'purses' | 'card_holders') => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectCategoryFilter,
}) => {
  const categoryCards = [
    {
      id: 'wallets' as const,
      title: "Men's Wallets",
      image: IMAGES.wallets,
      description: 'Classic bifolds, coin-pocket profiles, and streamlined modern billfolds crafted for daily use.',
    },
    {
      id: 'purses' as const,
      title: "Men's Purses",
      image: IMAGES.purses,
      description: 'Zip-around travel wallets and executive clutches designed for currency, passports, and documents.',
    },
    {
      id: 'card_holders' as const,
      title: 'Card Holders',
      image: IMAGES.cardHolders,
      description: 'Ultra-slim front pocket sleeves and accordion multi-card cases with seamless pocket carry.',
    },
  ];

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* ========================================================
          A & B. HERO SECTION
          ======================================================== */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-[#1E1E1E]">
        {/* Background Cinematic Studio Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.hero}
            alt="MONT PRIME Men's Wallets and Card Holders Showcase"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter brightness-[0.4] contrast-[1.1]"
          />
          {/* Measured Dark Luxury Gradient Scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/70 to-[#0B0B0B]/40" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 sm:py-28 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs uppercase tracking-[0.25em] text-[#C8A45D] border border-[#C8A45D]/30 bg-[#0B0B0B]/60 backdrop-blur-sm mb-6 rounded-sm">
            <span>Official Brand Showcase & B2B Catalogue</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-semibold tracking-[0.2em] text-[#F5F2EC] uppercase mb-4 text-balance">
            MONT PRIME
          </h1>

          <p className="font-serif italic text-xl sm:text-2xl text-[#E3CD98] tracking-wide mb-6">
            &ldquo;Crafted for Everyday Elegance.&rdquo;
          </p>

          <p className="text-sm sm:text-base text-[#B8B5AF] max-w-2xl leading-relaxed mb-10 text-balance">
            Discover a refined collection of men&apos;s wallets, purses, and card holders designed for everyday style and presented with a premium brand experience.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => onNavigate('collection')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs uppercase tracking-[0.18em] font-semibold text-[#0B0B0B] bg-[#C8A45D] hover:bg-[#E3CD98] transition-all rounded-sm cursor-pointer shadow-lg hover:shadow-[#C8A45D]/10"
            >
              <span>Explore Our Collection</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('wholesale')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs uppercase tracking-[0.18em] font-semibold text-[#F5F2EC] bg-[#141414]/90 hover:bg-[#1C1C1C] border border-[#333333] hover:border-[#C8A45D] transition-all rounded-sm cursor-pointer"
            >
              <span>Wholesale Enquiries</span>
              <ArrowUpRight className="w-4 h-4 text-[#C8A45D]" />
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================
          C. BRAND INTRODUCTION
          ======================================================== */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-xs uppercase tracking-[0.25em] text-[#C8A45D] mb-3">
          Our Philosophy
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#F5F2EC] mb-6 tracking-wide">
          A Refined Approach to Everyday Accessories
        </h2>
        <div className="w-16 h-[1.5px] bg-[#C8A45D] mx-auto mb-6" />
        <p className="text-base text-[#B8B5AF] leading-relaxed max-w-2xl mx-auto">
          MONT PRIME brings together thoughtful design, everyday practicality, and a refined approach to men&apos;s accessories. Explore our collection and connect with us to discuss retail, wholesale, and business opportunities.
        </p>
      </section>

      {/* ========================================================
          D. FEATURED COLLECTION CATEGORY CARDS
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#C8A45D] block mb-1">
              Curated Lines
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#F5F2EC]">
              Product Categories
            </h2>
          </div>
          <button
            onClick={() => onNavigate('collection')}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#C8A45D] hover:text-[#E3CD98] transition-colors"
          >
            <span>View Full Catalogue</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categoryCards.map((category) => (
            <div
              key={category.id}
              className="group flex flex-col bg-[#141414] border border-[#222222] hover:border-[#333333] transition-all rounded-sm overflow-hidden"
            >
              <div className="relative aspect-[4/3] bg-[#0E0E0E] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-serif text-2xl font-normal text-[#F5F2EC] mb-2 group-hover:text-[#E3CD98] transition-colors">
                  {category.title}
                </h3>
                <p className="text-xs text-[#B8B5AF] leading-relaxed mb-6 flex-1">
                  {category.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-[#222222]">
                  <button
                    onClick={() => {
                      if (onSelectCategoryFilter) {
                        onSelectCategoryFilter(category.id);
                      }
                      onNavigate('collection');
                    }}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#C8A45D] hover:text-[#E3CD98] font-semibold transition-colors cursor-pointer"
                  >
                    <span>Explore Collection</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={getWhatsAppUrl(`Hello MONT PRIME, I am inquiring about wholesale availability for ${category.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#8E8B85] hover:text-[#F5F2EC] transition-colors"
                  >
                    Enquire via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Wallet Spotlight Grid */}
        <div className="mt-16 pt-16 border-t border-[#1F1F1F]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#C8A45D] block mb-1">
                Signature Collection
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#F5F2EC]">
                Featured Wallet Editions & Gift Packaging
              </h3>
            </div>
            <button
              onClick={() => {
                if (onSelectCategoryFilter) onSelectCategoryFilter('wallets');
                onNavigate('collection');
              }}
              className="text-xs uppercase tracking-wider text-[#C8A45D] hover:text-[#E3CD98] inline-flex items-center gap-1 font-semibold"
            >
              <span>View All Wallets</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#141414] border border-[#222222] rounded-sm overflow-hidden flex flex-col group">
              <div className="relative aspect-[4/3] bg-[#0E0E0E] overflow-hidden">
                <img
                  src={IMAGES.wallets}
                  alt="The Sovereign Trifold Executive Wallet"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#C8A45D] block mb-1">
                    Trifold Series
                  </span>
                  <h4 className="font-serif text-lg text-[#F5F2EC] mb-1">
                    The Sovereign Trifold
                  </h4>
                  <p className="text-xs text-[#8E8B85] line-clamp-2">
                    Textured black pebble leather with snap clasp, central ID window, and coin pouch.
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-[#1F1F1F]">
                  <a
                    href={getWhatsAppUrl("Hello MONT PRIME, I would like to enquire about wholesale for The Sovereign Trifold Executive Wallet.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#C8A45D] hover:text-[#E3CD98] font-medium block text-center"
                  >
                    Enquire on WhatsApp →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#141414] border border-[#222222] rounded-sm overflow-hidden flex flex-col group">
              <div className="relative aspect-[4/3] bg-[#0E0E0E] overflow-hidden">
                <img
                  src={IMAGES.walletsTan}
                  alt="The Heritage Tan Coin-Pocket Bifold"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#C8A45D] block mb-1">
                    Heritage Bifold
                  </span>
                  <h4 className="font-serif text-lg text-[#F5F2EC] mb-1">
                    The Heritage Tan Bifold
                  </h4>
                  <p className="text-xs text-[#8E8B85] line-clamp-2">
                    Warm cognac tan leather with pinstripe interior, ID compartment, and snap coin flap.
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-[#1F1F1F]">
                  <a
                    href={getWhatsAppUrl("Hello MONT PRIME, I would like to enquire about wholesale for The Heritage Tan Coin-Pocket Bifold.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#C8A45D] hover:text-[#E3CD98] font-medium block text-center"
                  >
                    Enquire on WhatsApp →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#141414] border border-[#222222] rounded-sm overflow-hidden flex flex-col group">
              <div className="relative aspect-[4/3] bg-[#0E0E0E] overflow-hidden">
                <img
                  src={IMAGES.walletsQuad}
                  alt="The Signature Quad Multi-Tone Gift Set"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#C8A45D] block mb-1">
                    Retail Gift Box Set
                  </span>
                  <h4 className="font-serif text-lg text-[#F5F2EC] mb-1">
                    Signature Quad Gift Set
                  </h4>
                  <p className="text-xs text-[#8E8B85] line-clamp-2">
                    4 versatile colorways with brass MP logo plaque & rigid gold gift boxes.
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-[#1F1F1F]">
                  <a
                    href={getWhatsAppUrl("Hello MONT PRIME, I would like to enquire about wholesale for The Signature Quad Multi-Tone Gift Set.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#C8A45D] hover:text-[#E3CD98] font-medium block text-center"
                  >
                    Enquire on WhatsApp →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#141414] border border-[#222222] rounded-sm overflow-hidden flex flex-col group">
              <div className="relative aspect-[4/3] bg-[#0E0E0E] overflow-hidden">
                <img
                  src={IMAGES.walletsBlackBoxes}
                  alt="The Star Edition Executive Bifold Set"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#C8A45D] block mb-1">
                    Executive Packaging
                  </span>
                  <h4 className="font-serif text-lg text-[#F5F2EC] mb-1">
                    The Star Edition Set
                  </h4>
                  <p className="text-xs text-[#8E8B85] line-clamp-2">
                    Matte black gold-ribbon gift packaging with debossed star mark in rich tones.
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-[#1F1F1F]">
                  <a
                    href={getWhatsAppUrl("Hello MONT PRIME, I would like to enquire about wholesale for The Star Edition Executive Bifold Set.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#C8A45D] hover:text-[#E3CD98] font-medium block text-center"
                  >
                    Enquire on WhatsApp →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          E. BRAND VALUES (4 Principles)
          ======================================================== */}
      <section className="bg-[#121212] border-y border-[#1F1F1F] py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C8A45D] block mb-2">
              Our Principles
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#F5F2EC] mb-4">
              What Defines Every MONT PRIME Piece
            </h2>
            <p className="text-xs sm:text-sm text-[#8E8B85]">
              These core principles guide our product development, material selection, and commercial relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {BRAND_VALUES.map((val, idx) => (
              <div
                key={val.id}
                className="p-6 bg-[#171717] border border-[#242424] rounded-sm space-y-3"
              >
                <div className="text-xs font-mono text-[#C8A45D] tracking-wider">
                  0{idx + 1}.
                </div>
                <h3 className="font-serif text-xl font-medium text-[#F5F2EC]">
                  {val.title}
                </h3>
                <p className="text-xs text-[#B8B5AF] leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          F. WHOLESALE CALL-TO-ACTION SECTION
          ======================================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#141414] border border-[#262626] rounded-sm p-8 sm:p-14 text-center relative overflow-hidden">
          {/* Subtle gold line ornamentation */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-[#C8A45D]" />

          <span className="text-xs uppercase tracking-[0.25em] text-[#C8A45D] block mb-3">
            B2B & Distribution Partnerships
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#F5F2EC] mb-6 text-balance">
            Let&apos;s Build a Business Relationship
          </h2>

          <p className="text-sm sm:text-base text-[#B8B5AF] max-w-2xl mx-auto leading-relaxed mb-8 text-balance">
            Looking to expand your accessories collection? Connect with MONT PRIME to discuss wholesale enquiries, retail opportunities, and potential business partnerships.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('wholesale')}
              className="inline-flex items-center gap-2 px-8 py-3.5 text-xs uppercase tracking-[0.18em] font-semibold text-[#0B0B0B] bg-[#C8A45D] hover:bg-[#E3CD98] transition-all rounded-sm cursor-pointer shadow-lg"
            >
              <span>Discuss Wholesale Opportunities</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={getWhatsAppUrl('Hello MONT PRIME, I am a retailer/distributor and would like to explore wholesale opportunities.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs uppercase tracking-[0.18em] font-semibold text-[#F5F2EC] bg-[#1A1A1A] hover:bg-[#222222] border border-[#333333] transition-colors rounded-sm"
            >
              <span>WhatsApp Direct Enquiry</span>
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          G. CLOSING BRAND STATEMENT
          ======================================================== */}
      <section className="text-center py-16 px-4">
        <p className="font-serif italic text-2xl sm:text-3xl text-[#E3CD98] tracking-wide mb-2">
          &ldquo;Style in Every Detail. Confidence in Every Day.&rdquo;
        </p>
        <span className="text-xs uppercase tracking-[0.3em] text-[#6E6B65]">
          MONT PRIME ACCESSORIES
        </span>
      </section>
    </div>
  );
};
