import React from 'react';
import { PageId } from '../types';
import { IMAGES, getWhatsAppUrl } from '../config/siteConfig';
import { ArrowRight, Compass, Sparkles, HeartHandshake, Eye, Edit3 } from 'lucide-react';

interface StoryPageProps {
  onNavigate: (page: PageId) => void;
}

export const StoryPage: React.FC<StoryPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-20">
      {/* Hero Header */}
      <div className="text-center space-y-4">
        <span className="text-xs uppercase tracking-[0.25em] text-[#C8A45D] block">
          Editorial Chronicle
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#F5F2EC]">
          The MONT PRIME Story
        </h1>
        <div className="w-16 h-[1.5px] bg-[#C8A45D] mx-auto mt-4 mb-6" />
        <p className="text-base sm:text-lg text-[#B8B5AF] max-w-2xl mx-auto leading-relaxed">
          Every brand begins with an idea. MONT PRIME is focused on men&apos;s everyday accessories, with an emphasis on style, practicality, and a distinctive premium presentation.
        </p>
      </div>

      {/* Editorial Banner */}
      <div className="relative aspect-[16/9] sm:aspect-[2/1] rounded-sm overflow-hidden border border-[#222222]">
        <img
          src={IMAGES.hero}
          alt="MONT PRIME Narrative Showcase"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-80" />
        <div className="absolute bottom-5 left-6 text-xs text-[#E3CD98] tracking-widest uppercase">
          Form · Function · Timeless Everyday Confidence
        </div>
      </div>

      {/* Narrative Editorial Sections 1 - 5 */}
      <div className="space-y-16">
        {/* 1. The Brand Idea */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#C8A45D]">01.</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#F5F2EC]">
              The Brand Idea
            </h2>
          </div>
          <div className="text-sm sm:text-base text-[#B8B5AF] leading-relaxed space-y-4 pl-0 sm:pl-7 border-l-0 sm:border-l border-[#222222]">
            <p>
              Men carry their wallets every single day. Yet in the accessories marketplace, items frequently veer between two extremes: disposable novelty products that wear out after months of use, or prohibitively priced designer labels whose brand mark overshadows daily utility.
            </p>
            <p>
              MONT PRIME was conceived around an uncomplicated premise: crafting refined, durable, and dignified pocket essentials that an individual feels proud to draw from a jacket pocket during a business dinner, travel checkpoint, or casual afternoon.
            </p>
          </div>
        </section>

        {/* 2. Our Design Philosophy */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#C8A45D]">02.</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#F5F2EC]">
              Our Design Philosophy
            </h2>
          </div>
          <div className="text-sm sm:text-base text-[#B8B5AF] leading-relaxed space-y-4 pl-0 sm:pl-7 border-l-0 sm:border-l border-[#222222]">
            <p>
              Elegance is measured in subtraction rather than excess. We do not apply ostentatious badges or unnecessary exterior hardware that catches against pocket fabric.
            </p>
            <p>
              Instead, design value is embedded in proportions: card slots engineered at comfortable extraction angles, dual cash partitions that lie flat, and sealed wax edge burnishing that preserves structural integrity over thousands of fold cycles.
            </p>
          </div>
        </section>

        {/* 3. The Products We Focus On */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#C8A45D]">03.</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#F5F2EC]">
              The Products We Focus On
            </h2>
          </div>
          <div className="text-sm sm:text-base text-[#B8B5AF] leading-relaxed space-y-4 pl-0 sm:pl-7 border-l-0 sm:border-l border-[#222222]">
            <p>
              Rather than scattering creative energy across unrelated goods, MONT PRIME specializes in three foundational categories:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 bg-[#141414] border border-[#222222] rounded-sm">
                <span className="text-xs uppercase tracking-wider text-[#C8A45D] block mb-1">
                  Category I
                </span>
                <h3 className="font-serif text-lg text-[#F5F2EC] mb-1">Men&apos;s Wallets</h3>
                <p className="text-xs text-[#8E8B85]">
                  Bifold and coin-pocket essentials with dedicated currency dividers and RFID protection.
                </p>
              </div>

              <div className="p-4 bg-[#141414] border border-[#222222] rounded-sm">
                <span className="text-xs uppercase tracking-wider text-[#C8A45D] block mb-1">
                  Category II
                </span>
                <h3 className="font-serif text-lg text-[#F5F2EC] mb-1">Men&apos;s Purses</h3>
                <p className="text-xs text-[#8E8B85]">
                  Zip-around travel wallets and executive clutches for tickets, passports, and multiple currencies.
                </p>
              </div>

              <div className="p-4 bg-[#141414] border border-[#222222] rounded-sm">
                <span className="text-xs uppercase tracking-wider text-[#C8A45D] block mb-1">
                  Category III
                </span>
                <h3 className="font-serif text-lg text-[#F5F2EC] mb-1">Card Holders</h3>
                <p className="text-xs text-[#8E8B85]">
                  Featherweight front-pocket sleeves and expanding accordions for the digital payments era.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Our Vision for Business Relationships */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#C8A45D]">04.</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#F5F2EC]">
              Our Vision for Business Relationships
            </h2>
          </div>
          <div className="text-sm sm:text-base text-[#B8B5AF] leading-relaxed space-y-4 pl-0 sm:pl-7 border-l-0 sm:border-l border-[#222222]">
            <p>
              A brand is sustained by the trust of its trade partners. We aim to become the preferred accessories brand for boutique shop owners, menswear retailers, and corporate gifting houses by maintaining consistent packaging, transparent product descriptions, and fair wholesale minimums.
            </p>
          </div>
        </section>

        {/* 5. Looking Ahead */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#C8A45D]">05.</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#F5F2EC]">
              Looking Ahead
            </h2>
          </div>
          <div className="text-sm sm:text-base text-[#B8B5AF] leading-relaxed space-y-4 pl-0 sm:pl-7 border-l-0 sm:border-l border-[#222222]">
            <p>
              As the MONT PRIME catalogue evolves, our commitment remains anchored in craft, tactile satisfaction, and business integrity. We look forward to building enduring relationships with retail partners who share our appreciation for classic, understated elegance.
            </p>
          </div>
        </section>
      </div>

      {/* Owner Note on Future Milestones */}
      <div className="p-5 bg-[#141414] border border-dashed border-[#2E2E2E] rounded-sm text-xs text-[#8E8B85] space-y-2">
        <div className="flex items-center gap-2 text-[#C8A45D] font-medium">
          <Edit3 className="w-3.5 h-3.5" />
          <span>Brand Journey Customization Note</span>
        </div>
        <p>
          This section contains honest brand editorial copy. The business owner can easily update specific founding dates, verified retail partners, or regional expansion milestones directly in <code className="text-[#E3CD98]">src/pages/StoryPage.tsx</code> as the brand reaches new milestones.
        </p>
      </div>

      {/* Navigation Actions */}
      <div className="pt-8 border-t border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          onClick={() => onNavigate('collection')}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs uppercase tracking-wider font-semibold text-[#0B0B0B] bg-[#C8A45D] hover:bg-[#E3CD98] transition-colors rounded-sm cursor-pointer"
        >
          <span>Browse Product Collection</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <button
          onClick={() => onNavigate('wholesale')}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs uppercase tracking-wider font-semibold text-[#F5F2EC] bg-[#141414] hover:bg-[#1E1E1E] border border-[#333333] transition-colors rounded-sm cursor-pointer"
        >
          <span>Connect for Wholesale</span>
        </button>
      </div>
    </div>
  );
};
