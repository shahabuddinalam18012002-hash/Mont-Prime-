import React from 'react';
import { PageId } from '../types';
import { IMAGES, getWhatsAppUrl } from '../config/siteConfig';
import { Layers, Scissors, ShieldCheck, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

interface ManufacturingPageProps {
  onNavigate: (page: PageId) => void;
}

export const ManufacturingPage: React.FC<ManufacturingPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-20">
      {/* Hero Header */}
      <div className="text-center space-y-4">
        <span className="text-xs uppercase tracking-[0.25em] text-[#C8A45D] block">
          Craft & Standards
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#F5F2EC]">
          Attention to Detail. A Commitment to Quality.
        </h1>
        <div className="w-16 h-[1.5px] bg-[#C8A45D] mx-auto mt-4 mb-6" />
        <p className="text-base sm:text-lg text-[#B8B5AF] max-w-2xl mx-auto leading-relaxed">
          Everyday accessories should combine practical use with thoughtful design. MONT PRIME presents its collection with an emphasis on product appearance, finishing, and everyday functionality.
        </p>
      </div>

      {/* Hero Macro Detail Photo */}
      <div className="relative aspect-[16/9] rounded-sm overflow-hidden border border-[#222222]">
        <img
          src={IMAGES.craftsmanship}
          alt="Precision Stitching and Edge Burnishing Detail"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-80" />
        <div className="absolute bottom-5 left-6 text-xs text-[#E3CD98] tracking-widest uppercase">
          Master Finish · Uniform Tension · Sealed Edges
        </div>
      </div>

      {/* 6 Core Sections */}
      <div className="space-y-16">
        {/* 1. Product Design */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 items-start">
          <div className="md:col-span-1">
            <span className="text-xs font-mono text-[#C8A45D] block mb-1">01</span>
            <h2 className="font-serif text-2xl font-medium text-[#F5F2EC]">
              Product Design
            </h2>
          </div>
          <div className="md:col-span-2 text-sm sm:text-base text-[#B8B5AF] leading-relaxed space-y-3">
            <p>
              Each accessory begins with precise pattern engineering. Before an item moves to production, pocket tolerances, seam allowances, and folding spine radii are carefully modeled.
            </p>
            <p>
              Our design focus eliminates superfluous decorative layers that add unnecessary bulk, preserving an ultra-slim profile when loaded with everyday cards and currency.
            </p>
          </div>
        </section>

        <div className="h-[1px] bg-[#1E1E1E]" />

        {/* 2. Materials and Finishing */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 items-start">
          <div className="md:col-span-1">
            <span className="text-xs font-mono text-[#C8A45D] block mb-1">02</span>
            <h2 className="font-serif text-2xl font-medium text-[#F5F2EC]">
              Materials & Finishing
            </h2>
          </div>
          <div className="md:col-span-2 text-sm sm:text-base text-[#B8B5AF] leading-relaxed space-y-3">
            <p>
              We prioritize materials selected for consistent surface texture, scratch resistance, and graceful patina over time. Surface coatings are curated to repel light moisture and resist pocket abrasion.
            </p>
            <p>
              Interiors are finished with smooth microfiber linings that allow cards to slide in and out cleanly without snagging or fraying.
            </p>
          </div>
        </section>

        <div className="h-[1px] bg-[#1E1E1E]" />

        {/* 3. Stitching and Construction */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 items-start">
          <div className="md:col-span-1">
            <span className="text-xs font-mono text-[#C8A45D] block mb-1">03</span>
            <h2 className="font-serif text-2xl font-medium text-[#F5F2EC]">
              Stitching & Construction
            </h2>
          </div>
          <div className="md:col-span-2 text-sm sm:text-base text-[#B8B5AF] leading-relaxed space-y-3">
            <p>
              Seams are executed using high-tensile bonded thread calibrated to stitch density of 6–7 stitches per inch. High-stress points—such as the mouth of card compartments and folding spine transitions—receive reinforced back-tack stitching.
            </p>
            <p>
              Edge treatments are polished and hand-sealed with multi-layered edge paint, creating a smooth barrier against moisture and everyday wear.
            </p>
          </div>
        </section>

        <div className="h-[1px] bg-[#1E1E1E]" />

        {/* 4. Product Inspection */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 items-start">
          <div className="md:col-span-1">
            <span className="text-xs font-mono text-[#C8A45D] block mb-1">04</span>
            <h2 className="font-serif text-2xl font-medium text-[#F5F2EC]">
              Product Inspection
            </h2>
          </div>
          <div className="md:col-span-2 text-sm sm:text-base text-[#B8B5AF] leading-relaxed space-y-3">
            <p>
              Prior to batch packaging, our quality checklist reviews individual pieces for:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#D4D1C9]">
              <li className="p-3 bg-[#141414] border border-[#222222] rounded-sm">
                <span className="text-[#C8A45D] font-semibold block mb-0.5">Dimensional Symmetry</span>
                Exact squareness and alignment when the bifold or purse is closed.
              </li>
              <li className="p-3 bg-[#141414] border border-[#222222] rounded-sm">
                <span className="text-[#C8A45D] font-semibold block mb-0.5">Stitch Uniformity</span>
                Absence of dropped stitches, loose loops, or irregular stitch tensions.
              </li>
              <li className="p-3 bg-[#141414] border border-[#222222] rounded-sm">
                <span className="text-[#C8A45D] font-semibold block mb-0.5">Hardware Smoothness</span>
                Zippers and metallic snaps tested for fluid opening without sticking.
              </li>
              <li className="p-3 bg-[#141414] border border-[#222222] rounded-sm">
                <span className="text-[#C8A45D] font-semibold block mb-0.5">Edge Finish Integrity</span>
                Smooth edge paint without bubbling, cracking, or rough burs.
              </li>
            </ul>
          </div>
        </section>

        <div className="h-[1px] bg-[#1E1E1E]" />

        {/* 5. Quality Expectations */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 items-start">
          <div className="md:col-span-1">
            <span className="text-xs font-mono text-[#C8A45D] block mb-1">05</span>
            <h2 className="font-serif text-2xl font-medium text-[#F5F2EC]">
              Quality Expectations
            </h2>
          </div>
          <div className="md:col-span-2 text-sm sm:text-base text-[#B8B5AF] leading-relaxed space-y-3">
            <p>
              We understand that the retail value of an accessory brand rests on customer trust. Our philosophy is rooted in honest manufacturing standards: clear material disclosures, robust internal partitions, and dependable daily durability.
            </p>
            <p>
              We do not rely on inflated claims or unverified credentials. Instead, we allow our sample pieces and detailed finishing to speak directly to commercial buyers and retail store owners.
            </p>
          </div>
        </section>

        <div className="h-[1px] bg-[#1E1E1E]" />

        {/* 6. Wholesale Product Enquiries */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 items-start">
          <div className="md:col-span-1">
            <span className="text-xs font-mono text-[#C8A45D] block mb-1">06</span>
            <h2 className="font-serif text-2xl font-medium text-[#F5F2EC]">
              Wholesale Enquiries
            </h2>
          </div>
          <div className="md:col-span-2 text-sm sm:text-base text-[#B8B5AF] leading-relaxed space-y-4">
            <p>
              Are you planning a seasonal collection for your retail store, corporate gifting program, or regional distribution channel? We welcome inquiries regarding customized batch sizes, private labelling, and physical sample review.
            </p>
            <div>
              <button
                onClick={() => onNavigate('wholesale')}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-wider font-semibold text-[#0B0B0B] bg-[#C8A45D] hover:bg-[#E3CD98] transition-colors rounded-sm cursor-pointer shadow-md"
              >
                <span>Contact Us About Product Specifications</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
