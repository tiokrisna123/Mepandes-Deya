import React from 'react';
import { MapPin } from 'lucide-react';

export const MapSection: React.FC = () => {
  return (
    <section
      className="relative overflow-visible bg-background px-8 py-16"
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
          top-[0%]
          z-20
          h-[43%]
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
          top-[-0%]
          z-20
          h-[43%]
          w-auto
          object-contain
          scale-x-[-1]
          object-left
          select-none
        "
      />
      {/* KIRI TENGAH ATAS
          Sambungan dari Hero Section */}
      <img
        src="/assets/floral-kiri-tengah.webp" loading="lazy" decoding="async"
        alt=""
        className="
          pointer-events-none
          absolute
          left-0
          top-[35%]
          z-20
          h-[43%]
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
          top-[35%]
          z-20
          h-[43%]
          w-auto
          object-contain
          scale-x-[-1]
          object-left
          select-none
        "
      />
      {/* KIRI TENGAH ATAS
          Sambungan dari Hero Section */}
      <img
        src="/assets/floral-kiri-tengah.webp" loading="lazy" decoding="async"
        alt=""
        className="
          pointer-events-none
          absolute
          left-0
          top-[49%]
          z-20
          h-[43%]
          w-auto
          object-contain
          translate-y-1/2
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
          top-[49%]
          z-20
          h-[43%]
          w-auto
          object-contain
          scale-x-[-1]
          translate-y-1/2
          object-left
          select-none
        "
      />


      {/* =========================
          MAP CONTAINER
      ========================== */}
      <div className="relative z-10 mx-auto h-[450px] w-[90%] max-w-5xl overflow-hidden border border-primary/30 shadow-xl">
        <iframe
          className="
            h-full
            w-full
            grayscale
            filter
            transition-all
            duration-700
            hover:grayscale-0
          "
          loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d246.63325699320998!2d115.2460886936484!3d-8.48653326185835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1788079489811!5m2!1sen!2sid"
          style={{ border: 0 }}
          title="Lokasi Upacara Mepandes"
        />

        

        {/* BUTTON GOOGLE MAPS */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <a
            href="https://maps.app.goo.gl/skfX223mc9XgSPw59"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              gap-3
              border
              border-charcoal
              bg-white
              px-8
              py-3
              font-sans
              text-[9px]
              uppercase
              tracking-[0.25em]
              text-charcoal
              shadow-xl
              transition-all
              duration-300
              hover:bg-charcoal
              hover:text-white
            "
          >
            <MapPin className="h-4 w-4 text-primary" />
            BUKA DI GOOGLE MAPS
          </a>
        </div>
      </div>
    </section>
  );
};
