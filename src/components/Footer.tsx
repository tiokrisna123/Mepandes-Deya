import React from 'react';
import { Share2 } from 'lucide-react';

interface FooterProps {
  onOpenLinkGenerator: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLinkGenerator }) => {
  return (
    <footer className="relative overflow-hidden bg-background px-6 py-20 text-white md:px-10 md:py-28">

      {/* CONTENT */}
      <div className="relative z-30 reveal active flex flex-col items-center">
        <p className="mb-2 font-sans text-[8px] uppercase tracking-[0.4em] text-white/80">
          CREATED BY MAITEKA
        </p>

        <p className="font-sans text-[8px] tracking-[0.2em] text-white/60">
          © 2026 MEPANDES CEREMONY
        </p>
      </div>

    </footer>
  );
};