import React from 'react';
import { Share2 } from 'lucide-react';

interface FooterProps {
  onOpenLinkGenerator: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLinkGenerator }) => {
  return (
    <footer
      className="relative overflow-visible bg-background px-6 py-20 text-white md:px-10 md:py-28"
    >

      {/* =========================
          FLORAL FRAME
      ========================== */}

      {/* KIRI TENGAH ATAS
          Sambungan dari Hero Section */}
      <img
        src="/assets/floral-kiri-tengah.webp" loading="lazy" decoding="async"
        alt=""
        className="
          pointer-events-none
          absolute
          left-0
          top-[-55%]
          z-20
          h-[119%]
          w-auto
          object-contain
          object-left
          select-none
        "
      />
      {/* KANAN TENGAH ATAS
          Sambungan dari Hero Section */}
      <img
        src="/assets/floral-kiri-tengah.webp" loading="lazy" decoding="async"
        alt=""
        className="
          pointer-events-none
          absolute
          right-0
          top-[-55%]
          z-20
          h-[119%]
          w-auto
          scale-x-[-1]
          object-contain
          object-left
          select-none
        "
      />
      {/* KIRI BAWAH
          Sambungan dari Hero Section */}
      <img
        src="/assets/floral-kiri-bawah.webp" loading="lazy" decoding="async"
        alt=""
        className="
          pointer-events-none
          absolute
          left-[-1%]
          bottom-[-5%]
          z-20
          h-[119%]
          w-auto
          object-contain
          object-left
          select-none
        "
      />
      {/* KANAN BAWAH
          Sambungan dari Hero Section */}
      <img
        src="/assets/floral-kiri-bawah.webp" loading="lazy" decoding="async"
        alt=""
        className="
          pointer-events-none
          absolute
          right-[-1%]
          bottom-[-5%]
          z-20
          h-[119%]
          w-auto
          scale-x-[-1]
          object-contain
          object-left
          select-none
        "
      />

      {/* CONTENT */}
      <div className="relative z-30 flex flex-col items-center">
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
