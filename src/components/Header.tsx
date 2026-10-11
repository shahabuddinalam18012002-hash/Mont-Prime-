import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PageId } from '../types';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenThemeSelector?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenThemeSelector,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'collection', label: 'Our Collection' },
    { id: 'manufacturing', label: 'Manufacturing / Quality' },
    { id: 'wholesale', label: 'Wholesale' },
    { id: 'story', label: 'Our Story' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0B0B0B]/95 backdrop-blur-md border-b border-[#262626] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A45D]"
          aria-label="MONT PRIME Home"
        >
          <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-[0.2em] text-[#F5F2EC] uppercase transition-colors group-hover:text-[#E3CD98]">
            MONT PRIME
          </span>
        </button>

        {/* Zone 2: Navigation Links */}
        <nav
          className="hidden lg:flex items-center gap-7 text-sm font-medium tracking-wide"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-colors whitespace-nowrap cursor-pointer py-1 relative ${
                  isActive
                    ? 'text-[#E3CD98]'
                    : 'text-[#B8B5AF] hover:text-[#F5F2EC]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#C8A45D]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Palette Switcher + Primary Action + Mobile Toggle */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          {onOpenThemeSelector && (
            <button
              type="button"
              onClick={onOpenThemeSelector}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#B8B5AF] hover:text-[#F5F2EC] bg-[#141414] hover:bg-[#1A1A1A] border border-[#2B2B2B] hover:border-[#3E3E3E] rounded-sm transition-colors cursor-pointer"
              title="Change brand color palette"
              aria-label="Change brand color palette"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#C8A45D] ring-1 ring-[#E3CD98]/50" />
              <span className="hidden sm:inline">Colours</span>
            </button>
          )}

          <button
            onClick={() => handleNavClick('wholesale')}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#0B0B0B] bg-[#C8A45D] hover:bg-[#E3CD98] transition-all cursor-pointer rounded-sm shadow-sm"
          >
            <span>Wholesale Enquiry</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#F5F2EC] hover:text-[#C8A45D] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A45D]"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#262626] bg-[#0E0E0E] px-6 py-6 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left text-base font-medium py-2 transition-colors cursor-pointer flex items-center justify-between ${
                    isActive ? 'text-[#E3CD98]' : 'text-[#B8B5AF] hover:text-[#F5F2EC]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#C8A45D]" />}
                </button>
              );
            })}

            <div className="pt-4 border-t border-[#262626] space-y-3">
              {onOpenThemeSelector && (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenThemeSelector();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-[#F5F2EC] bg-[#171717] hover:bg-[#202020] border border-[#2B2B2B] rounded-sm transition-colors cursor-pointer"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C8A45D]" />
                  <span>Change Brand Colour Palette</span>
                </button>
              )}

              <button
                onClick={() => handleNavClick('wholesale')}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold tracking-wider uppercase text-[#0B0B0B] bg-[#C8A45D] hover:bg-[#E3CD98] transition-colors rounded-sm cursor-pointer"
              >
                <span>Wholesale Enquiry</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
