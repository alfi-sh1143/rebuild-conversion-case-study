import React from 'react';
import { Phone, Calendar } from 'lucide-react';

interface StickyMobileBarProps {
  onOpenQuote: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenQuote }) => {
  return (
    <aside aria-label="Quick contact actions" className="fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 p-2.5 shadow-2xl sm:hidden">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* Emergency Direct Call Button */}
        <a
          href="tel:5125553569"
          className="flex-1 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black h-12 rounded-xl flex items-center justify-center gap-2 text-xs shadow-md transition"
        >
          <Phone className="w-4 h-4 fill-slate-950" />
          <span className="truncate">Call 24/7 (512) 555-FLOW</span>
        </a>

        {/* 60s Quote Trigger */}
        <button
          onClick={onOpenQuote}
          className="bg-blue-600 hover:bg-blue-500 text-white font-bold h-12 px-4 rounded-xl flex items-center justify-center gap-1.5 text-xs shadow-md transition cursor-pointer shrink-0"
        >
          <Calendar className="w-4 h-4" />
          <span>Quote</span>
        </button>
      </div>
    </aside>
  );
};
