import React from 'react';
import { GalleryItem } from '../types';
import { Maximize2 } from 'lucide-react';

interface GallerySectionProps {
  items: GalleryItem[];
  onSelectImage: (src: string, alt: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  items,
  onSelectImage,
}) => {
  return (
    <section
      className="
        relative
        overflow-visible
        bg-background
        px-6
        py-24
        ${item.className || ''}
      "
    >
      {/* =========================
          FLORAL FRAME
      ========================== */}

      <img
        src="/assets/floral-kiri-tengah.webp" alt="" loading="lazy" decoding="async"
        className="
          pointer-events-none
          absolute
          left-0
          top-[-14%]
          z-20
          h-[16%]
          w-auto
          object-contain
          object-left
          select-none
        "
      />

      <img
        src="/assets/floral-kiri-tengah.webp" alt="" loading="lazy" decoding="async"
        className="
          pointer-events-none
          absolute
          right-0
          top-[-14%]
          z-20
          h-[16%]
          w-auto
          scale-x-[-1]
          object-contain
          object-left
          select-none
        "
      />

      <img
        src="/assets/floral-kiri-tengah.webp" alt="" loading="lazy" decoding="async"
        className="
          pointer-events-none
          absolute
          left-0
          top-[-9%]
          z-20
          h-[16%]
          w-auto
          translate-y-1/2
          object-contain
          object-left
          select-none
        "
      />

      <img
        src="/assets/floral-kiri-tengah.webp" alt="" loading="lazy" decoding="async"
        className="
          pointer-events-none
          absolute
          right-0
          top-[-9%]
          z-20
          h-[16%]
          w-auto
          translate-y-1/2
          scale-x-[-1]
          object-contain
          object-left
          select-none
        "
      />

      <img
        src="/assets/floral-kiri-tengah.webp" alt="" loading="lazy" decoding="async"
        className="
          pointer-events-none
          absolute
          left-0
          top-[4%]
          z-20
          h-[16%]
          w-auto
          translate-y-1/2
          object-contain
          object-left
          select-none
        "
      />

      <img
        src="/assets/floral-kiri-tengah.webp" alt="" loading="lazy" decoding="async"
        className="
          pointer-events-none
          absolute
          right-0
          top-[4%]
          z-20
          h-[16%]
          w-auto
          translate-y-1/2
          scale-x-[-1]
          object-contain
          object-left
          select-none
        "
      />
      <img
        src="/assets/floral-kiri-tengah.webp" alt="" loading="lazy" decoding="async"
        className="
          pointer-events-none
          absolute
          left-0
          top-[17%]
          z-20
          h-[16%]
          w-auto
          translate-y-1/2
          object-contain
          object-left
          select-none
        "
      />
      <img
        src="/assets/floral-kiri-tengah.webp" alt="" loading="lazy" decoding="async"
        className="
          pointer-events-none
          absolute
          right-0
          top-[17%]
          z-20
          h-[16%]
          w-auto
          scale-x-[-1]
          translate-y-1/2
          object-contain
          object-left
          select-none
        "
      />
      <img
        src="/assets/floral-kiri-tengah.webp" alt="" loading="lazy" decoding="async"
        className="
          pointer-events-none
          absolute
          left-0
          top-[30%]
          z-20
          h-[16%]
          w-auto
          translate-y-1/2
          object-contain
          object-left
          select-none
        "
      />
      <img
        src="/assets/floral-kiri-tengah.webp" alt="" loading="lazy" decoding="async"
        className="
          pointer-events-none
          absolute
          right-0
          top-[30%]
          z-20
          h-[16%]
          w-auto
          translate-y-1/2
          scale-x-[-1]
          object-contain
          object-left
          select-none
        "
      />
      <img
        src="/assets/floral-kiri-tengah.webp" alt="" loading="lazy" decoding="async"
        className="
          pointer-events-none
          absolute
          left-0
          top-[40%]
          z-20
          h-[16%]
          w-auto
          translate-y-1/2
          object-contain
          object-left
          select-none
        "
      />
      <img
        src="/assets/floral-kiri-tengah.webp" alt="" loading="lazy" decoding="async"
        className="
          pointer-events-none
          absolute
          left-0
          top-[43%]
          z-20
          h-[16%]
          w-auto
          translate-y-1/2
          object-contain
          object-left
          select-none
        "
      />
      <img
        src="/assets/floral-kiri-tengah.webp" alt="" loading="lazy" decoding="async"
        className="
          pointer-events-none
          absolute
          right-0
          top-[43%]
          z-20
          h-[16%]
          w-auto
          translate-y-1/2
          scale-x-[-1]
          object-contain
          object-left
          select-none
        "
      />
      <img
        src="/assets/floral-kiri-tengah.webp" alt="" loading="lazy" decoding="async"
        className="
          pointer-events-none
          absolute
          left-0
          top-[57%]
          z-20
          h-[16%]
          w-auto
          translate-y-1/2
          object-contain
          object-left
          select-none
        "
      />
      <img
        src="/assets/floral-kiri-tengah.webp" alt="" loading="lazy" decoding="async"
        className="
          pointer-events-none
          absolute
          right-0
          top-[57%]
          z-20
          h-[16%]
          w-auto
          translate-y-1/2
          scale-x-[-1]
          object-contain
          object-left
          select-none
        "
      />

      {/* =========================
          CONTENT
      ========================== */}

      <div className="relative z-30 mx-auto max-w-6xl">

        <p
          className="
            mb-3
            text-center
            font-sans
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.4em]
            text-[#d8b36a]
          "
        >
          DOKUMENTASI
        </p>

        <h2
          className="
            mb-16
            text-center
            font-serif
            text-2xl
            uppercase
            tracking-widest
            text-white
            md:text-3xl
          "
          style={{
            textShadow: '0 3px 10px rgba(0,0,0,0.35)',
          }}
        >
          Kenangan Suci
        </h2>

        {/* =========================
            SYMMETRIC GALLERY
        ========================== */}

        <div className="grid grid-cols-2 gap-5 md:grid-cols-3">

          {items.map((item) => (
            <div
              key={item.id}
              onClick={() =>
                onSelectImage(item.src, item.caption || item.alt)
              }
              className="
                group
                relative
                cursor-pointer
                overflow-hidden
                rounded-sm
                shadow-sm
                transition-shadow
                duration-500
                hover:shadow-xl
              "
            >
              {/* Fixed ratio supaya semua foto simetris */}
              <div className="aspect-[4/5]">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Overlay */}
              <div
                className="
                  absolute
                  inset-0
                  flex
                  items-end
                  justify-between
                  bg-black/40
                  p-4
                  text-white
                  opacity-0
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                "
              >
                <span className="font-serif text-sm italic">
                  {item.caption || item.alt}
                </span>

                <Maximize2 className="h-4 w-4 text-[#d8b36a]" />
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};
