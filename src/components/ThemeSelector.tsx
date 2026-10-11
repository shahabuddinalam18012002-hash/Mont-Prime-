import React, { useState, useEffect } from 'react';
import { Palette, Check, Sparkles, X, Sun, Moon } from 'lucide-react';

export type ThemeId = 'cognac' | 'noir' | 'ivory' | 'emerald' | 'navy';

export interface ThemeOption {
  id: ThemeId;
  name: string;
  tagline: string;
  isLight?: boolean;
  colors: {
    bg: string;
    surface: string;
    accent: string;
    text: string;
  };
}

export const THEME_OPTIONS: ThemeOption[] = [
  {
    id: 'cognac',
    name: 'Cognac Leather & Amber',
    tagline: 'Warm luxury leather tones with rich amber bronze',
    colors: {
      bg: '#140E0A',
      surface: '#201610',
      accent: '#D97706',
      text: '#FAF5EF',
    },
  },
  {
    id: 'noir',
    name: 'Royal Noir & Gold',
    tagline: 'Deep black with refined imperial metallic gold',
    colors: {
      bg: '#0B0B0B',
      surface: '#141414',
      accent: '#C8A45D',
      text: '#F5F2EC',
    },
  },
  {
    id: 'ivory',
    name: 'Warm Linen & Saddle (Light)',
    tagline: 'Editorial high-contrast light theme with saddle tan accents',
    isLight: true,
    colors: {
      bg: '#F9F6F0',
      surface: '#FFFFFF',
      accent: '#B45309',
      text: '#1C1917',
    },
  },
  {
    id: 'emerald',
    name: 'Imperial Emerald & Champagne',
    tagline: 'Deep British racing green noir with champagne gold',
    colors: {
      bg: '#07150E',
      surface: '#0F2418',
      accent: '#D4AF37',
      text: '#F4F8F5',
    },
  },
  {
    id: 'navy',
    name: 'Midnight Navy & Platinum',
    tagline: 'Executive midnight blue with crisp platinum accents',
    colors: {
      bg: '#090D16',
      surface: '#111827',
      accent: '#38BDF8',
      text: '#F8FAFC',
    },
  },
];

interface ThemeSelectorProps {
  currentTheme: ThemeId;
  onThemeChange: (theme: ThemeId) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({
  currentTheme,
  onThemeChange,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="theme-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
    >
      <div className="relative w-full max-w-lg bg-[#141414] border border-[#2B2B2B] rounded-sm p-6 sm:p-7 shadow-2xl animate-in fade-in zoom-in-95">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#8E8B85] hover:text-[#F5F2EC] bg-[#1A1A1A] hover:bg-[#262626] rounded-full transition-colors cursor-pointer"
          aria-label="Close Palette Selector"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C8A45D] mb-1">
          <Palette className="w-4 h-4" />
          <span>Brand Visual Identity</span>
        </div>

        <h2 id="theme-modal-title" className="font-serif text-2xl font-medium text-[#F5F2EC] mb-2">
          Select Color Palette
        </h2>

        <p className="text-xs text-[#8E8B85] mb-6 leading-relaxed">
          Switch the brand atmosphere in real-time. Choose between classic deep black and gold, warm cognac leather, luxury light linen, or prestige emerald & navy palettes.
        </p>

        <div className="space-y-3">
          {THEME_OPTIONS.map((theme) => {
            const isActive = currentTheme === theme.id;
            return (
              <button
                key={theme.id}
                onClick={() => {
                  onThemeChange(theme.id);
                  onClose();
                }}
                className={`w-full p-4 rounded-sm border text-left transition-all cursor-pointer flex items-center justify-between gap-4 ${
                  isActive
                    ? 'bg-[#1C1C1C] border-[#C8A45D] ring-1 ring-[#C8A45D]/40'
                    : 'bg-[#171717] border-[#262626] hover:border-[#383838] hover:bg-[#1A1A1A]'
                }`}
              >
                <div className="flex items-center gap-3.5 flex-1 min-w-0">
                  {/* Color Swatch Pill */}
                  <div className="flex items-center -space-x-1 shrink-0 p-1 bg-[#0A0A0A] rounded-full border border-[#262626]">
                    <span
                      className="w-4 h-4 rounded-full border border-black/30"
                      style={{ backgroundColor: theme.colors.bg }}
                      title="Background"
                    />
                    <span
                      className="w-4 h-4 rounded-full border border-black/30"
                      style={{ backgroundColor: theme.colors.surface }}
                      title="Surface"
                    />
                    <span
                      className="w-4 h-4 rounded-full border border-black/30 ring-1 ring-white/20"
                      style={{ backgroundColor: theme.colors.accent }}
                      title="Accent"
                    />
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-serif text-base text-[#F5F2EC] font-medium truncate">
                        {theme.name}
                      </span>
                      {theme.isLight ? (
                        <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider text-[#A16207] bg-[#FEF3C7] px-1.5 py-0.2 rounded font-semibold">
                          <Sun className="w-2.5 h-2.5" /> Light
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider text-[#9CA3AF] bg-[#1F2937] px-1.5 py-0.2 rounded">
                          <Moon className="w-2.5 h-2.5" /> Dark
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#8E8B85] truncate mt-0.5">
                      {theme.tagline}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 flex items-center">
                  {isActive && (
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#C8A45D] text-black">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-6 pt-4 border-t border-[#222222] flex items-center justify-between text-xs text-[#7E7B75]">
          <span>Theme preference persists in browser</span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs uppercase tracking-wider font-semibold text-[#0B0B0B] bg-[#C8A45D] hover:bg-[#E3CD98] transition-colors rounded-sm cursor-pointer"
          >
            Apply & Close
          </button>
        </div>
      </div>
    </div>
  );
};
