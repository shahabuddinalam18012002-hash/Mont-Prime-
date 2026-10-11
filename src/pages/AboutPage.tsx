import React from 'react';
import { PageId } from '../types';
import { IMAGES, getWhatsAppUrl } from '../config/siteConfig';
import { ArrowRight, ArrowUpRight, Check, Compass, Shield, Users, Layers, Gem } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-20">
      {/* Hero Header */}
      <div className="text-center space-y-4">
        <span className="text-xs uppercase tracking-[0.25em] text-[#C8A45D] block">
          Brand Overview
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#F5F2EC]">
          About MONT PRIME
        </h1>
        <div className="w-16 h-[1.5px] bg-[#C8A45D] mx-auto mt-4 mb-6" />
        <p className="text-base sm:text-lg text-[#B8B5AF] max-w-2xl mx-auto leading-relaxed">
          MONT PRIME is a men&apos;s accessories brand focused on wallets, purses, and card holders.
          Our aim is to bring together thoughtful design, practical everyday use, and a refined presentation.
        </p>
      </div>

      {/* Editorial Image Accent */}
      <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-sm overflow-hidden border border-[#222222]">
        <img
          src={IMAGES.craftsmanship}
          alt="MONT PRIME Fine Leathercraft Finishing"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-80" />
        <div className="absolute bottom-4 left-6 text-xs text-[#E3CD98] tracking-widest uppercase">
          Precision Finishes · Defined Proportions
        </div>
      </div>

      {/* Structured Sections 1 - 5 */}
      <div className="space-y-16">
        {/* 1. Who We Are */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 items-start">
          <div className="md:col-span-1">
            <span className="text-xs font-mono text-[#C8A45D] block mb-1">01</span>
            <h2 className="font-serif text-2xl font-medium text-[#F5F2EC]">
              Who We Are
            </h2>
          </div>
          <div className="md:col-span-2 text-sm sm:text-base text-[#B8B5AF] leading-relaxed space-y-4">
            <p>
              MONT PRIME was established to fulfill the demand for sophisticated, thoughtfully proportioned men&apos;s everyday pocket accessories. We focus on modern essentials—pieces that accompany individuals throughout daily commerce, business meetings, travel, and casual occasions.
            </p>
            <p>
              Rather than pursuing rapid novelty cycles, our creative focus remains dedicated to classic silhouettes executed with tactile materials, durable hardware, and balanced interior compartment layouts.
            </p>
          </div>
        </section>

        <div className="h-[1px] bg-[#1E1E1E]" />

        {/* 2. Our Approach to Design */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 items-start">
          <div className="md:col-span-1">
            <span className="text-xs font-mono text-[#C8A45D] block mb-1">02</span>
            <h2 className="font-serif text-2xl font-medium text-[#F5F2EC]">
              Our Approach to Design
            </h2>
          </div>
          <div className="md:col-span-2 text-sm sm:text-base text-[#B8B5AF] leading-relaxed space-y-4">
            <p>
              Good design in pocket goods is measured by how quietly it serves its user. A wallet that causes excessive bulk disrupts tailoring; an unintuitive card slot slows down daily routines.
            </p>
            <p>
              Our design process starts with everyday geometry:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#D4D1C9]">
              <li className="p-3 bg-[#141414] border border-[#222222] rounded-sm">
                <span className="text-[#C8A45D] font-semibold block mb-0.5">Pocket Geometry</span>
                Calibrated thicknesses to slide effortlessly into suit jackets or trouser pockets.
              </li>
              <li className="p-3 bg-[#141414] border border-[#222222] rounded-sm">
                <span className="text-[#C8A45D] font-semibold block mb-0.5">Curated Capacity</span>
                Partitioning configured for cards, currency notes, and vital credentials.
              </li>
              <li className="p-3 bg-[#141414] border border-[#222222] rounded-sm">
                <span className="text-[#C8A45D] font-semibold block mb-0.5">Tactile Comfort</span>
                Surface grain selected for firm grip and a refined hand feel.
              </li>
              <li className="p-3 bg-[#141414] border border-[#222222] rounded-sm">
                <span className="text-[#C8A45D] font-semibold block mb-0.5">Clean Edges</span>
                Burnished wax-sealed edges preventing early fraying or leather separation.
              </li>
            </ul>
          </div>
        </section>

        <div className="h-[1px] bg-[#1E1E1E]" />

        {/* 3. Our Product Categories */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 items-start">
          <div className="md:col-span-1">
            <span className="text-xs font-mono text-[#C8A45D] block mb-1">03</span>
            <h2 className="font-serif text-2xl font-medium text-[#F5F2EC]">
              Our Product Categories
            </h2>
          </div>
          <div className="md:col-span-2 space-y-4 text-sm sm:text-base text-[#B8B5AF]">
            <p>
              MONT PRIME specializes in three dedicated product families:
            </p>
            <div className="space-y-3 pt-1">
              <div className="p-4 bg-[#141414] border border-[#222222] rounded-sm">
                <h3 className="font-serif text-lg text-[#F5F2EC] mb-1">1. Men&apos;s Wallets</h3>
                <p className="text-xs text-[#8E8B85]">
                  Bifold designs engineered with dual cash dividers, hidden slip pockets, and optional coin sections for complete daily functionality.
                </p>
              </div>
              <div className="p-4 bg-[#141414] border border-[#222222] rounded-sm">
                <h3 className="font-serif text-lg text-[#F5F2EC] mb-1">2. Men&apos;s Purses & Travel Clutches</h3>
                <p className="text-xs text-[#8E8B85]">
                  Long-format zip-around organizers accommodating boarding passes, multi-currency notes, passports, and mobile devices.
                </p>
              </div>
              <div className="p-4 bg-[#141414] border border-[#222222] rounded-sm">
                <h3 className="font-serif text-lg text-[#F5F2EC] mb-1">3. Minimalist Card Holders</h3>
                <p className="text-xs text-[#8E8B85]">
                  Front-pocket ultra-slim sleeves and concertina card wallets catering to cashless lifestyles and contactless payment needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="h-[1px] bg-[#1E1E1E]" />

        {/* 4. Commitment to Customers and Business Partners */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 items-start">
          <div className="md:col-span-1">
            <span className="text-xs font-mono text-[#C8A45D] block mb-1">04</span>
            <h2 className="font-serif text-2xl font-medium text-[#F5F2EC]">
              Commitment to Partners
            </h2>
          </div>
          <div className="md:col-span-2 text-sm sm:text-base text-[#B8B5AF] leading-relaxed space-y-4">
            <p>
              We view retailers, boutique shop owners, and regional distributors as our primary commercial ambassadors. Our operations are structured around clear communication, consistent product packaging, and predictable replenishment timelines.
            </p>
            <p>
              Every wholesale shipment undergoes dimensional inspection and finishing verification prior to dispatch.
            </p>
          </div>
        </section>

        <div className="h-[1px] bg-[#1E1E1E]" />

        {/* 5. Why Connect with MONT PRIME? */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 items-start">
          <div className="md:col-span-1">
            <span className="text-xs font-mono text-[#C8A45D] block mb-1">05</span>
            <h2 className="font-serif text-2xl font-medium text-[#F5F2EC]">
              Why Connect With Us?
            </h2>
          </div>
          <div className="md:col-span-2 text-sm sm:text-base text-[#B8B5AF] leading-relaxed space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-[#141414] border border-[#262626] rounded-sm">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C8A45D] mb-1">
                  Retailer Presentation
                </h4>
                <p className="text-xs text-[#B8B5AF]">
                  Distinctive gift-box packaging ready for display counters and upscale retail displays.
                </p>
              </div>
              <div className="p-4 bg-[#141414] border border-[#262626] rounded-sm">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C8A45D] mb-1">
                  Accessible Minimums
                </h4>
                <p className="text-xs text-[#B8B5AF]">
                  Flexible batch options enabling retailers to test new designs without prohibitive upfront inventory commitments.
                </p>
              </div>
              <div className="p-4 bg-[#141414] border border-[#262626] rounded-sm">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C8A45D] mb-1">
                  Responsive Coordination
                </h4>
                <p className="text-xs text-[#B8B5AF]">
                  Direct liaison via WhatsApp and dedicated business channels for swift order updates.
                </p>
              </div>
              <div className="p-4 bg-[#141414] border border-[#262626] rounded-sm">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C8A45D] mb-1">
                  Honest Craftsmanship
                </h4>
                <p className="text-xs text-[#B8B5AF]">
                  Authentic descriptions and verified material specifications you can confidently communicate to end customers.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Navigation CTA Actions */}
      <div className="pt-10 border-t border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          onClick={() => onNavigate('collection')}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs uppercase tracking-wider font-semibold text-[#0B0B0B] bg-[#C8A45D] hover:bg-[#E3CD98] transition-colors rounded-sm cursor-pointer"
        >
          <span>Explore Collection</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <button
          onClick={() => onNavigate('wholesale')}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs uppercase tracking-wider font-semibold text-[#F5F2EC] bg-[#171717] hover:bg-[#202020] border border-[#333333] transition-colors rounded-sm cursor-pointer"
        >
          <span>Wholesale & Business Enquiries</span>
          <ArrowUpRight className="w-4 h-4 text-[#C8A45D]" />
        </button>
      </div>
    </div>
  );
};
