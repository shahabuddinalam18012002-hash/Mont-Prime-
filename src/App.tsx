import React, { useState, useEffect } from 'react';
import { PageId, Product, ProductCategory } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ProductDetailModal } from './components/ProductDetailModal';
import { PrivacyModal } from './components/PrivacyModal';
import { ConfigGuideModal } from './components/ConfigGuideModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CollectionPage } from './pages/CollectionPage';
import { ManufacturingPage } from './pages/ManufacturingPage';
import { WholesalePage } from './pages/WholesalePage';
import { StoryPage } from './pages/StoryPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  // Routing state
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [prefilledWholesaleProduct, setPrefilledWholesaleProduct] = useState<string | undefined>(
    undefined
  );
  const [collectionCategoryFilter, setCollectionCategoryFilter] = useState<
    ProductCategory | 'all'
  >('all');

  // Modal states
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isConfigGuideOpen, setIsConfigGuideOpen] = useState(false);

  // Sync with URL Hash on load & change for real multi-page URL routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '').toLowerCase();
      const validPages: PageId[] = [
        'home',
        'about',
        'collection',
        'manufacturing',
        'wholesale',
        'story',
        'contact',
      ];
      if (validPages.includes(hash as PageId)) {
        setCurrentPage(hash as PageId);
      } else if (!hash) {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Sync SEO Title & Description dynamically per page
  useEffect(() => {
    const pageMetaMap: Record<PageId, { title: string; desc: string }> = {
      home: {
        title: "MONT PRIME | Premium Men's Wallets, Purses & Card Holders",
        desc: "Explore MONT PRIME men's wallets, purses, and card holders. Discover our collection and contact us for wholesale and business enquiries.",
      },
      about: {
        title: "About Us | MONT PRIME — Everyday Elegance & Craftsmanship",
        desc: "Learn about MONT PRIME, a premium men's accessories brand dedicated to thoughtful design, practical everyday durability, and trade partnerships.",
      },
      collection: {
        title: "Our Collection | MONT PRIME — Men's Wallets, Purses & Card Holders",
        desc: "Browse MONT PRIME's curated collection of bifold wallets, continental travel purses, and minimalist card holders for wholesale and retail.",
      },
      manufacturing: {
        title: "Manufacturing & Quality | MONT PRIME Standards",
        desc: "Discover MONT PRIME's standards for precision stitching, edge finishing, materials, and comprehensive pre-shipment product inspection.",
      },
      wholesale: {
        title: "Wholesale & Business Enquiries | MONT PRIME Partner Program",
        desc: "Connect with MONT PRIME to discuss retail distribution, boutique stocking, sample evaluation sets, and commercial wholesale terms.",
      },
      story: {
        title: "Brand Story | MONT PRIME — Crafting Everyday Elegance",
        desc: "Read the editorial story behind MONT PRIME: our focus on minimalist geometry, dignified materials, and dependable business integrity.",
      },
      contact: {
        title: "Contact & Commercial Directory | MONT PRIME",
        desc: "Get in touch with MONT PRIME via official WhatsApp, email, phone, or scheduled office visits for business opportunities.",
      },
    };

    const currentMeta = pageMetaMap[currentPage];
    if (currentMeta) {
      document.title = currentMeta.title;
      const metaDescTag = document.querySelector('meta[name="description"]');
      if (metaDescTag) {
        metaDescTag.setAttribute('content', currentMeta.desc);
      }
    }
  }, [currentPage]);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategoryFromHome = (category: ProductCategory) => {
    setCollectionCategoryFilter(category);
    handleNavigate('collection');
  };

  const handleNavigateToWholesaleWithProduct = (productName?: string) => {
    setPrefilledWholesaleProduct(productName);
    handleNavigate('wholesale');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0B0B] text-[#F5F2EC]">
      {/* 1. Header (Sticky Top Bar Contract) */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* 2. Main Page Content View */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectCategoryFilter={handleSelectCategoryFromHome}
          />
        )}
        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {currentPage === 'collection' && (
          <CollectionPage
            initialCategory={collectionCategoryFilter}
            onSelectProduct={(prod) => setSelectedProduct(prod)}
            onNavigateToWholesale={handleNavigateToWholesaleWithProduct}
          />
        )}
        {currentPage === 'manufacturing' && (
          <ManufacturingPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'wholesale' && (
          <WholesalePage
            prefilledProduct={prefilledWholesaleProduct}
            onOpenPrivacy={() => setIsPrivacyOpen(true)}
          />
        )}
        {currentPage === 'story' && <StoryPage onNavigate={handleNavigate} />}
        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
            onOpenPrivacy={() => setIsPrivacyOpen(true)}
          />
        )}
        {![
          'home',
          'about',
          'collection',
          'manufacturing',
          'wholesale',
          'story',
          'contact',
        ].includes(currentPage) && <NotFoundPage onNavigate={handleNavigate} />}
      </main>

      {/* 3. Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
        onOpenConfigGuide={() => setIsConfigGuideOpen(true)}
      />

      {/* 4. Accessible Floating WhatsApp Contact Button */}
      <WhatsAppButton />

      {/* 5. Product Details Lightbox / Spec Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onNavigateToWholesale={handleNavigateToWholesaleWithProduct}
      />

      {/* 6. Privacy & Commercial Data Policy Modal */}
      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />

      {/* 7. Website Owner Operations & Config Guide Modal */}
      <ConfigGuideModal
        isOpen={isConfigGuideOpen}
        onClose={() => setIsConfigGuideOpen(false)}
      />
    </div>
  );
}
