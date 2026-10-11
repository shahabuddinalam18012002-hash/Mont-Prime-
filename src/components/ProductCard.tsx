import React, { useState } from 'react';
import { Product } from '../types';
import { getProductWhatsAppUrl } from '../config/siteConfig';
import { MessageCircle, Eye, Shield, Layers } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onViewDetails,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group flex flex-col bg-[#141414] border border-[#222222] hover:border-[#383838] transition-all duration-300 rounded-sm overflow-hidden">
      {/* Product Image Slot */}
      <div className="relative aspect-[4/3] bg-[#0F0F0F] overflow-hidden">
        {!imageError ? (
          <img
            src={product.image}
            alt={`${product.name} - ${product.categoryLabel}`}
            referrerPolicy="no-referrer"
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            className={`w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ) : null}

        {/* Fallback container if image fails or while loading */}
        {(!imageLoaded || imageError) && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-[#171717] text-[#8E8B85]">
            <Layers className="w-10 h-10 mb-2 text-[#C8A45D]/60" />
            <span className="text-xs uppercase tracking-wider text-[#B8B5AF]">
              {product.name}
            </span>
          </div>
        )}

        {/* Quick view overlay button */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
          <button
            onClick={() => onViewDetails(product)}
            className="px-4 py-2 text-xs uppercase tracking-wider font-semibold text-[#F5F2EC] bg-[#0B0B0B]/90 hover:bg-[#C8A45D] hover:text-[#0B0B0B] transition-colors rounded-sm flex items-center gap-2 cursor-pointer shadow-lg"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Specifications & Inspection</span>
          </button>
        </div>
      </div>

      {/* Card Content & Metadata */}
      <div className="p-5 flex flex-col flex-1">
        {/* Anti-slop clean unboxed metadata with dot separators */}
        <div className="flex items-center gap-2 text-xs text-[#8E8B85] tracking-wide mb-1.5 uppercase">
          <span>{product.categoryLabel}</span>
          <span aria-hidden="true">·</span>
          <span>Refined Finish</span>
        </div>

        <h3 className="font-serif text-xl font-medium text-[#F5F2EC] group-hover:text-[#E3CD98] transition-colors mb-1">
          {product.name}
        </h3>

        <p className="text-xs text-[#A8A59F] line-clamp-2 mb-4 leading-relaxed">
          {product.subtitle}
        </p>

        {/* Specifications snippet */}
        <div className="mt-auto pt-3 border-t border-[#1F1F1F] space-y-1.5 text-xs text-[#8E8B85]">
          <div className="flex justify-between items-center">
            <span>Dimensions:</span>
            <span className="text-[#D4D1C9] tabular-nums">{product.dimensions}</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Configuration:</span>
            <span className="text-[#D4D1C9] truncate max-w-[160px] text-right">
              {product.compartments.split(',')[0]}
            </span>
          </div>
        </div>

        {/* Action Button: WhatsApp Enquiry */}
        <div className="pt-4 mt-2">
          <a
            href={getProductWhatsAppUrl(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-2.5 px-3 text-xs uppercase tracking-wider font-semibold text-[#0B0B0B] bg-[#C8A45D] hover:bg-[#E3CD98] transition-colors rounded-sm cursor-pointer"
            aria-label={`Enquire about ${product.name} on WhatsApp`}
          >
            <MessageCircle className="w-3.5 h-3.5 fill-[#0B0B0B]/20" />
            <span>Enquire on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
