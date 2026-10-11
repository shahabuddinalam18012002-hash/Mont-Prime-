import React from 'react';
import { Product, PageId } from '../types';
import { getProductWhatsAppUrl } from '../config/siteConfig';
import { X, MessageCircle, FileText, Check, ShieldCheck, Ruler, Layers } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onNavigateToWholesale: (productName: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onNavigateToWholesale,
}) => {
  if (!product) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
    >
      <div className="relative w-full max-w-4xl bg-[#121212] border border-[#2B2B2B] rounded-sm overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-[#8E8B85] hover:text-[#F5F2EC] bg-[#1A1A1A]/80 hover:bg-[#262626] rounded-full transition-colors cursor-pointer"
          aria-label="Close product details"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Column: Large Product Imagery */}
          <div className="relative bg-[#0A0A0A] flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-[#222222]">
            <img
              src={product.image}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="max-h-[380px] w-auto object-contain rounded-sm"
            />
            <div className="absolute bottom-3 left-4 text-[11px] text-[#6E6B65] tracking-wider uppercase">
              MONT PRIME · Product Specification View
            </div>
          </div>

          {/* Right Column: Detailed Specification & Enquiry Actions */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              {/* Category Breadcrumb */}
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C8A45D] mb-1">
                <span>{product.categoryLabel}</span>
                <span aria-hidden="true">·</span>
                <span>Ref: {product.id.toUpperCase()}</span>
              </div>

              <h2
                id="modal-product-title"
                className="font-serif text-2xl sm:text-3xl font-medium text-[#F5F2EC] mb-2"
              >
                {product.name}
              </h2>

              <p className="text-xs uppercase tracking-wide text-[#8E8B85] mb-4">
                {product.subtitle}
              </p>

              <p className="text-sm text-[#B8B5AF] leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Technical Specifications List */}
              <div className="space-y-3 bg-[#171717] p-4 rounded-sm border border-[#222222] text-xs">
                <div className="flex items-start gap-2.5">
                  <Ruler className="w-4 h-4 text-[#C8A45D] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#8E8B85]">Dimensions: </span>
                    <span className="text-[#F5F2EC] font-medium tabular-nums">{product.dimensions}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Layers className="w-4 h-4 text-[#C8A45D] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#8E8B85]">Finishing & Material: </span>
                    <span className="text-[#F5F2EC] font-medium">{product.material}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#C8A45D] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#8E8B85]">Internal Layout: </span>
                    <span className="text-[#F5F2EC] font-medium">{product.compartments}</span>
                  </div>
                </div>
              </div>

              {/* Verified Features */}
              <div className="mt-4">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#A8A59F] mb-2">
                  Key Construction Attributes
                </h4>
                <ul className="space-y-1.5 text-xs text-[#B8B5AF]">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C8A45D] shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Business Enquiry Buttons */}
            <div className="pt-4 border-t border-[#222222] space-y-2.5">
              <a
                href={getProductWhatsAppUrl(product.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs uppercase tracking-wider font-semibold text-[#0B0B0B] bg-[#C8A45D] hover:bg-[#E3CD98] transition-colors rounded-sm cursor-pointer shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire via WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  onClose();
                  onNavigateToWholesale(product.name);
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs uppercase tracking-wider font-semibold text-[#F5F2EC] bg-[#1A1A1A] hover:bg-[#252525] border border-[#333333] transition-colors rounded-sm cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-[#C8A45D]" />
                <span>Submit Wholesale Proposal Form</span>
              </button>

              <p className="text-[11px] text-[#6E6B65] text-center pt-1">
                Custom embossing & bulk batch packaging available for authorized retail partners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
