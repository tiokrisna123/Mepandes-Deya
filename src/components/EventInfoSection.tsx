import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  ExternalLink,
  Check,
} from 'lucide-react';

export const EventInfoSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const googleCalendarUrl =
    'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Upacara+Mepandes+(Manusa+Yadnya)&dates=20260727T010000Z/20260727T060000Z&details=Upacara+Mepandes+(Potong+Gigi)+Manusa+Yadnya&location=Jero+Dusak,+Gianyar,+Bali';

  const handleCopyLocation = () => {
    navigator.clipboard.writeText('Jero Dusak, Gianyar, Bali');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      className="
        relative
        overflow-visible
        bg-gradient-to-b
        from-[#f5efe6]
        via-[#e8e0d2]
        to-[#28402F]
        px-6
        py-24
      "
    >
      {/* =========================
          FLORAL FRAME
      ========================== */}

      {/* KIRI ATAS
          Sambungan dari Gallery Section */}
      <img
        src="/assets/floral-kiri-tengah.png"
        alt=""
        className="
          pointer-events-none
          absolute
          left-0
          top-[-5%]
          z-20
          h-[28%]
          w-auto
          object-contain
          object-left
          select-none
        "
      />
        {/* KANAN ATAS
          Sambungan dari Gallery Section */}
      <img
        src="/assets/floral-kiri-tengah.png"
        alt=""
        className="
          pointer-events-none
          absolute
          right-0
          top-[-5%]
          z-20
          h-[28%]
          w-auto
          scale-x-[-1]
          object-contain
          object-left
          select-none
        "
      />
        {/* KIRI ATAS
          Sambungan dari Gallery Section */}
      <img
        src="/assets/floral-kiri-tengah.png"
        alt=""
        className="
          pointer-events-none
          absolute
          left-0
          top-[18%]
          z-20
          h-[28%]
          w-auto
          object-contain
          object-left
          select-none
        "
      />
        {/* KANAN ATAS
          Sambungan dari Gallery Section */}
      <img
        src="/assets/floral-kiri-tengah.png"
        alt=""
        className="
          pointer-events-none
          absolute
          right-0
          top-[18%]
          z-20
          h-[28%]
          w-auto
          scale-x-[-1]
          object-contain
          object-left
          select-none
        "
      />
        {/* KIRI TENGAH
          Sambungan dari Gallery Section */}
      <img
        src="/assets/floral-kiri-tengah.png"
        alt=""
        className="
          pointer-events-none
          absolute
          left-0
          top-[27%]
          z-20
          h-[28%]
          w-auto
          translate-y-1/2
          object-contain
          object-left
          select-none
        "
      />
        {/* KANAN TENGAH
          Sambungan dari Gallery Section */}
      <img
        src="/assets/floral-kiri-tengah.png"
        alt=""
        className="
          pointer-events-none
          absolute
          right-0
          top-[27%]
          z-20
          h-[28%]
          w-auto
          translate-y-1/2
          scale-x-[-1]
          object-contain
          object-left
          select-none
        "
      />
        {/* KIRI BAWAH
          Sambungan dari Gallery Section */}
      <img
        src="/assets/floral-kiri-tengah.png"
        alt=""
        className="
          pointer-events-none
          absolute
          left-0
          bottom-[22%]
          z-20
          h-[28%]
          w-auto
          translate-y-1/2
          object-contain
          object-left
          select-none
        "
      />
        {/* KANAN BAWAH
          Sambungan dari Gallery Section */}
      <img
        src="/assets/floral-kiri-tengah.png"
        alt=""
        className="
          pointer-events-none
          absolute
          right-0
          bottom-[22%]
          z-20
          h-[28%]
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

      <div className="relative z-30 mx-auto max-w-4xl text-center reveal active">
        <p className="mb-12 font-sans text-[10px] font-semibold uppercase tracking-[0.4em] text-primary">
          WAKTU &amp; TEMPAT
        </p>

        <div className="mb-16 grid items-center gap-12 md:grid-cols-3">
          {/* TANGGAL */}
          <div className="p-4">
            <Calendar className="mx-auto mb-3 h-5 w-5 text-primary" />

            <p className="mb-1 font-serif text-2xl text-charcoal">
              M I N G G U
            </p>

            <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-gray-500">
              27 JULI 2026
            </p>
          </div>

          {/* WAKTU */}
          <div className="border-y border-gray-300/60 p-4 py-8 md:border-x md:border-y-0 md:py-4">
            <Clock className="mx-auto mb-3 h-5 w-5 text-primary" />

            <p className="mb-2 font-serif text-5xl font-light leading-none text-primary md:text-6xl">
              09:00
            </p>

            <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-gray-500">
              WITA - SELESAI
            </p>
          </div>

          {/* LOKASI */}
          <div className="p-4">
            <MapPin className="mx-auto mb-3 h-5 w-5 text-primary" />

            <p className="mb-1 font-serif text-2xl text-charcoal">
              JERO DUSAK
            </p>

            <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-gray-500">
              GIANYAR, BALI
            </p>
          </div>
        </div>

        {/* BUTTON */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              gap-2
              border
              border-primary
              px-6
              py-3
              font-sans
              text-[10px]
              uppercase
              tracking-[0.2em]
              text-primary
              transition-all
              duration-300
              hover:bg-primary
              hover:text-white
            "
          >
            <Calendar className="h-4 w-4" />
            SIMPAN KE KALENDER
          </a>

          <button
            onClick={handleCopyLocation}
            className="
              flex
              cursor-pointer
              items-center
              gap-2
              border
              border-charcoal/30
              px-6
              py-3
              font-sans
              text-[10px]
              uppercase
              tracking-[0.2em]
              text-charcoal
              transition-all
              duration-300
              hover:bg-charcoal
              hover:text-white
            "
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-600" />
            ) : (
              <ExternalLink className="h-4 w-4" />
            )}

            {copied ? 'ALAMAT DISALIN!' : 'SALIN ALAMAT'}
          </button>
        </div>
      </div>
    </section>
  );
};