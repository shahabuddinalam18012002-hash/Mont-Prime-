import React, { useState } from 'react';
import { Product, ProductCategory, PageId } from '../types';
import { PRODUCTS_CATALOG, getProductWhatsAppUrl } from '../config/siteConfig';
import { ProductCard } from '../components/ProductCard';
import { MessageCircle, Search, Filter, Sparkles, CheckCircle2 } from 'lucide-react';

interface CollectionPageProps {
  onSelectProduct: (product: Product) => void;
  onNavigateToWholesale: (productName?: string) => void;
  initialCategory?: ProductCategory | 'all';
}

export const CollectionPage: React.FC<CollectionPageProps> = ({
  onSelectProduct,
  onNavigateToWholesale,
  initialCategory = 'all',
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>(
    initialCategory
  );
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs: { id: ProductCategory | 'all'; label: string }[] = [
    { id: 'all', label: 'Complete Collection' },
    { id: 'wallets', label: "Men's Wallets" },
    { id: 'purses', label: "Men's Purses" },
    { id: 'card_holders', label: 'Card Holders' },
  ];

  const filteredProducts = PRODUCTS_CATALOG.filter((product) => {
    const matchesCategory =
      selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-16">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-[0.25em] text-[#C8A45D] block">
          Curated Product Lines
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#F5F2EC]">
          Our Collection
        </h1>
        <div className="w-16 h-[1.5px] bg-[#C8A45D] mx-auto mt-4 mb-4" />
        <p className="text-sm sm:text-base text-[#B8B5AF] leading-relaxed">
          Explore our range of premium men&apos;s wallets, purses, and card holders. Designed for everyday elegance and engineered with refined finishing for discerning retail and commercial partners.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-[#222222]">
        {/* Segmented Category Buttons */}
        <div
          className="flex flex-wrap items-center gap-2 p-1 bg-[#141414] border border-[#222222] rounded-md"
          role="tablist"
          aria-label="Category filter"
        >
          {filterTabs.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-sm transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#C8A45D] text-[#0B0B0B] shadow-sm'
                    : 'text-[#B8B5AF] hover:text-[#F5F2EC] hover:bg-[#1E1E1E]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-[#8E8B85] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search models, features..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#141414] border border-[#262626] focus:border-[#C8A45D] focus:ring-1 focus:ring-[#C8A45D] rounded-sm py-2 pl-10 pr-4 text-xs text-[#F5F2EC] placeholder-[#787570] transition-colors outline-none"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8E8B85] hover:text-[#F5F2EC]"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={onSelectProduct}
            />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center bg-[#141414] border border-[#222222] rounded-sm p-8">
          <p className="text-base text-[#F5F2EC] mb-2">No models match your query.</p>
          <p className="text-xs text-[#8E8B85] mb-6">
            Try adjusting your search criteria or reset category filters.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="px-5 py-2 text-xs uppercase tracking-wider font-semibold text-[#0B0B0B] bg-[#C8A45D] rounded-sm cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Wholesale Information Banner */}
      <div className="bg-[#121212] border border-[#262626] rounded-sm p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="text-xs uppercase tracking-widest text-[#C8A45D]">
            Commercial Ordering & Retail Samples
          </div>
          <h3 className="font-serif text-2xl font-normal text-[#F5F2EC]">
            Interested in Sampling or Custom Wholesale Batches?
          </h3>
          <p className="text-xs text-[#8E8B85] max-w-xl">
            We provide verified physical sample units for commercial review and offer custom embossing, private packaging, and flexible tier pricing for retail stores and regional distributors.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
          <button
            onClick={() => onNavigateToWholesale()}
            className="w-full sm:w-auto px-6 py-3 text-xs uppercase tracking-wider font-semibold text-[#0B0B0B] bg-[#C8A45D] hover:bg-[#E3CD98] transition-colors rounded-sm cursor-pointer whitespace-nowrap"
          >
            Submit Wholesale Form
          </button>
        </div>
      </div>
    </div>
  );
};
