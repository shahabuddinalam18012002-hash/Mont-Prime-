import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppUrl } from '../config/siteConfig';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
    >
      {/* Interactive Quick Helper Tooltip */}
      {showTooltip && (
        <div
          role="status"
          className="hidden sm:flex items-center gap-2 bg-[#171717] border border-[#2D2D2D] text-[#F5F2EC] px-3.5 py-2 text-xs rounded-sm shadow-xl animate-in fade-in slide-in-from-right-2"
        >
          <span>Chat with MONT PRIME on WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#8E8B85] hover:text-[#F5F2EC] p-0.5 ml-1"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Anchor */}
      <a
        href={getWhatsAppUrl('Hello MONT PRIME, I am reaching out to discuss wholesale availability and product catalog.')}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
        aria-label="Contact MONT PRIME on WhatsApp"
        title="Contact MONT PRIME on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white/20 stroke-white" />
        <span className="sr-only">Contact MONT PRIME on WhatsApp</span>

        {/* Pulse indicator */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />
      </a>
    </aside>
  );
};
