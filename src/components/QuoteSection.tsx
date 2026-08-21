import React from 'react';
import { Quote } from 'lucide-react';

export const QuoteSection: React.FC = () => {
  return (
    <section
      className="
        relative
        overflow-visible
        bg-gradient-to-b
        from-[#5C1A1F]
        via-[#3d171d]
        to-[#28402F]
        px-6
        py-24
        text-center
      "
    >
      {/* =========================
          FLORAL FRAME
      ========================== */}

      {/* =========================
          KIRI TENGAH ATAS
          Sambungan dari Hero Section
      ========================== */}
      <img
        src="/assets/floral-kiri-tengah.png"
        alt=""
        className="
          pointer-events-none
          absolute
          left-0
          top-[-70px]
          z-20
          h-[320px]
          w-auto
          object-contain
          object-left
          select-none
        "
      />

      {/* =========================
          KANAN TENGAH ATAS
          Sambungan dari Hero Section
      ========================== */}
      <img
        src="/assets/floral-kiri-tengah.png"
        alt=""
        className="
          pointer-events-none
          absolute
          right-0
          top-[-50px]
          z-20
          h-[320px]
          w-auto
          scale-x-[-1]
          object-contain
          object-left
          select-none
        "
      />

      {/* =========================
          KIRI TENGAH
      ========================== */}
      <img
        src="/assets/floral-kiri-tengah.png"
        alt=""
        className="
          pointer-events-none
          absolute
          left-0
          top-[47%]
          z-20
          h-[45%]
          w-auto
          -translate-y-1/2
          object-contain
          object-left
          select-none
        "
      />

      {/* =========================
          KANAN TENGAH
      ========================== */}
      <img
        src="/assets/floral-kiri-tengah.png"
        alt=""
        className="
          pointer-events-none
          absolute
          right-0
          top-[47%]
          z-20
          h-[45%]
          w-auto
          -translate-y-1/2
          scale-x-[-1]
          object-contain
          object-left
          select-none
        "
      />

      {/* =========================
          KIRI TENGAH BAWAH
      ========================== */}
      <img
        src="/assets/floral-kiri-tengah.png"
        alt=""
        className="
          pointer-events-none
          absolute
          left-0
          top-[78%]
          z-20
          h-[45%]
          w-auto
          -translate-y-1/2
          object-contain
          object-left
          select-none
        "
      />

      {/* =========================
          KANAN TENGAH BAWAH
      ========================== */}
      <img
        src="/assets/floral-kiri-tengah.png"
        alt=""
        className="
          pointer-events-none
          absolute
          right-0
          top-[78%]
          z-20
          h-[45%]
          w-auto
          -translate-y-1/2
          scale-x-[-1]
          object-contain
          object-left
          select-none
        "
      />

      {/* =========================
          KIRI BAWAH
      ========================== */}
      <img
        src="/assets/floral-kiri-bawah.png"
        alt=""
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          z-20
          w-[40%]
          select-none
        "
      />

      {/* =========================
          KANAN BAWAH
      ========================== */}
      <img
        src="/assets/floral-kiri-bawah.png"
        alt=""
        className="
          pointer-events-none
          absolute
          bottom-0
          right-0
          z-20
          w-[40%]
          scale-x-[-1]
          select-none
        "
      />

      {/* =========================
          CONTENT
      ========================== */}
      <div className="relative z-30 mx-auto max-w-2xl reveal active">
        <Quote className="mx-auto mb-8 h-10 w-10 text-[#d8b36a] opacity-90" />

        <p
          className="
            mb-8
            font-serif
            text-xl
            font-normal
            italic
            leading-relaxed
            text-white
            md:text-3xl
          "
          style={{
            textShadow: '0 4px 15px rgba(0,0,0,0.8)',
          }}
        >
          &ldquo;Pancawali krama, suci laksana, ngupadi kerahayuan jagat.
          Mepandes pinaka simbol pamutus rwa bhineda ring angga sarira.&rdquo;
        </p>

        <div className="mx-auto mb-4 h-px w-12 bg-[#c9a65b]/70" />

        <p
          className="
            font-sans
            text-[11px]
            font-medium
            uppercase
            tracking-[0.3em]
            text-[#d8b36a]
          "
        >
          Bhagawad Gita
        </p>
      </div>
    </section>
  );
};