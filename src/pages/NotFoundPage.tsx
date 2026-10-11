import React from 'react';
import { PageId } from '../types';
import { ArrowLeft, Compass } from 'lucide-react';

interface NotFoundPageProps {
  onNavigate: (page: PageId) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-28 text-center space-y-6">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#171717] border border-[#262626] text-[#C8A45D] mx-auto">
        <Compass className="w-8 h-8" />
      </div>

      <div className="space-y-2">
        <span className="font-mono text-xs uppercase tracking-widest text-[#C8A45D]">
          404 · Page Not Found
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-normal text-[#F5F2EC]">
          The Requested Page Does Not Exist
        </h1>
        <p className="text-xs sm:text-sm text-[#8E8B85] max-w-md mx-auto leading-relaxed">
          The page or product line you are attempting to view may have been moved or updated.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
        <button
          onClick={() => onNavigate('home')}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs uppercase tracking-wider font-semibold text-[#0B0B0B] bg-[#C8A45D] hover:bg-[#E3CD98] transition-colors rounded-sm cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Home</span>
        </button>

        <button
          onClick={() => onNavigate('collection')}
          className="w-full sm:w-auto px-6 py-3 text-xs uppercase tracking-wider font-semibold text-[#F5F2EC] bg-[#141414] hover:bg-[#1E1E1E] border border-[#333333] transition-colors rounded-sm cursor-pointer"
        >
          Explore Collection
        </button>
      </div>
    </div>
  );
};
