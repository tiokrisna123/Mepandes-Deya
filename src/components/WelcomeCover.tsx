import React from 'react';

interface WelcomeCoverProps {
  guestName: string;
  isOpen: boolean;
  onOpen: () => void;
}

export const WelcomeCover: React.FC<WelcomeCoverProps> = ({
  guestName,
  isOpen,
  onOpen,
}) => {
  return (
    <div
      id="welcome-cover"
      className={`fixed inset-0 flex flex-col items-center justify-center overflow-hidden px-6 text-center md:px-8 z-[100] transition-transform duration-1000 cubic-bezier(0.77,0,0.175,1) ${
        isOpen
          ? '-translate-y-full pointer-events-none'
          : 'translate-y-0'
      }`}
    >
      {/* =========================
          BACKGROUND FOTO
      ========================== */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/foto-deya-berdua.jpeg"
          alt="Mepandes Ceremony Cover"
          className="h-full w-full object-cover"
        />

        {/* Overlay gelap dasar */}
        <div className="absolute inset-0 bg-black/0" />

        {/* Vignette elegan:
            Tengah tetap memperlihatkan foto,
            semakin ke pinggir semakin gelap */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(
              ellipse_at_center,
              transparent_18%,
              rgba(40,64,47,0.20)_50%,
              rgba(10,5,6,0.85)_100%
            )]
          "
        />
      </div>

      {/* =========================
          FLORAL FRAME
      ========================== */}
      <img
        src="/assets/floral-frame.png"
        alt=""
        className="
          absolute
          inset-0
          z-10
          h-full
          w-full
          object-fill
          pointer-events-none
          select-none
        "
      />

      {/* =========================
          CONTENT
      ========================== */}
      <div className="relative z-20 mx-auto flex max-w-lg flex-col items-center">
        <p className="mb-4 font-sans text-[10px] font-medium uppercase tracking-[0.4em] text-white/80 md:text-[11px]">
          UNDANGAN UPACARA
        </p>

        <h1 className="mb-2 font-serif text-5xl font-normal italic tracking-wide text-white md:text-7xl">
          Mepandes
        </h1>

        <p className="mb-12 font-sans text-xs font-light tracking-[0.25em] text-[#d8a7a9]">
          27 . 07 . 26
        </p>

        <div className="mb-14 text-center">
          <p className="mb-2 font-sans text-[10px] uppercase tracking-[0.25em] text-white/60">
            KEPADA YTH.
          </p>

          <p className="mx-auto max-w-xs break-words font-serif text-2xl font-medium italic text-white md:text-3xl">
            {guestName || 'Tamu Undangan'}
          </p>
        </div>

        <button
          id="open-btn"
          onClick={onOpen}
          className="
            cursor-pointer
            border
            border-[#8b3a42]
            bg-black/30
            px-10
            py-4
            font-sans
            text-[10px]
            uppercase
            tracking-[0.3em]
            text-[#e5b5b7]
            shadow-lg
            backdrop-blur-sm
            transition-all
            duration-500
            hover:scale-105
            hover:bg-[#5C1A1F]
            hover:text-white
            active:scale-95
          "
        >
          BUKA UNDANGAN
        </button>
      </div>
    </div>
  );
};