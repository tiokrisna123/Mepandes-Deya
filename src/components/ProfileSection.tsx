import React from 'react';
import { Profile } from '../types';

interface ProfileSectionProps {
  profiles: Profile[];
  onSelectImage: (src: string, alt: string) => void;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({
  profiles,
  onSelectImage,
}) => {
  return (
    <section 
      className="
        relative 
        overflow-visible 
        bg-gradient-to-b
        from-[#28402F]
        via-[#26382E]
        via-[20%]
        via-[#3d171d]
        via-[55%]
        to-[#5C1A1F]
        px-6 
        py-24
    
      "
    >
      
      {/* =========================
          FLORAL FRAME
      ========================== */}

      {/* KIRI TENGAH ATAS
          Sambungan dari Quote Section */}
      <img
        src="/assets/floral-kiri-tengah.png"
        alt=""
        className="
          pointer-events-none
          absolute
          left-0
          top-[2%]
          z-20
          h-[21%]
          w-auto
          object-contain
          object-left
          select-none
        "
      />

      {/* KANAN TENGAH ATAS
          Sambungan dari Quote Section */}
      <img
        src="/assets/floral-kiri-tengah.png"
        alt=""
        className="
          pointer-events-none
          absolute
          right-0
          top-[2%]
          z-20
          h-[21%]
          w-auto
          scale-x-[-1]
          object-contain
          object-left
          select-none
        "
      />
      {/* KIRI TENGAH 
          Sambungan dari Quote Section */}
      <img
        src="/assets/floral-kiri-tengah.png"
        alt=""
        className="
          pointer-events-none
          absolute
          left-0
          top-[8%]
          z-20
          h-[21%]
          w-auto
          translate-y-1/2
          object-contain
          object-left
          select-none
        "
      />
      {/* KANAN TENGAH 
          Sambungan dari Quote Section */}
      <img
        src="/assets/floral-kiri-tengah.png"
        alt=""
        className="
          pointer-events-none
          absolute
          right-0
          top-[8%]
          z-20
          h-[21%]
          w-auto
          scale-x-[-1]
          translate-y-1/2
          object-contain
          object-left
          select-none
        "
      />
      {/* KIRI TENGAH 
          Sambungan dari Quote Section */}
      <img
        src="/assets/floral-kiri-tengah.png"
        alt=""
        className="
          pointer-events-none
          absolute
          left-0
          top-[25%]
          z-20
          h-[21%]
          w-auto
          translate-y-1/2
          object-contain
          object-left
          select-none
        "
      />
      {/* KANAN TENGAH 
          Sambungan dari Quote Section */}
      <img
        src="/assets/floral-kiri-tengah.png"
        alt=""
        className="
          pointer-events-none
          absolute
          right-0
          top-[25%]
          z-20
          h-[21%]
          w-auto
          scale-x-[-1]
          translate-y-1/2
          object-contain
          object-left
          select-none
        "
      />
      {/* KIRI TENGAH 
          Sambungan dari Quote Section */}
      <img
        src="/assets/floral-kiri-tengah.png"
        alt=""
        className="
          pointer-events-none
          absolute
          left-0
          top-[42%]
          z-20
          h-[21%]
          w-auto
          translate-y-1/2
          object-contain
          object-left
          select-none
        "
      />
      {/* KANAN TENGAH 
          Sambungan dari Quote Section */}
      <img
        src="/assets/floral-kiri-tengah.png"
        alt=""
        className="
          pointer-events-none
          absolute
          right-0
          top-[42%]
          z-20
          h-[21%]
          w-auto
          translate-y-1/2
          scale-x-[-1]
          object-contain
          object-left
          select-none
        "
      />
      {/* KIRI TENGAH 
          Sambungan dari Quote Section */}
      <img
        src="/assets/floral-kiri-tengah.png"
        alt=""
        className="
          pointer-events-none
          absolute
          left-0
          top-[59%]
          z-20
          h-[21%]
          w-auto
          translate-y-1/2
          object-contain
          object-left
          select-none
        "
      />
      {/* KANAN TENGAH 
          Sambungan dari Quote Section */}
      <img
        src="/assets/floral-kiri-tengah.png"
        alt=""
        className="
          pointer-events-none
          absolute
          right-0
          top-[59%]
          z-20
          h-[21%]
          w-auto
          translate-y-1/2
          scale-x-[-1]
          object-contain
          object-left
          select-none
        "
      />
      {/* KIRI TENGAH BAWAH
          Sambungan dari Quote Section */}
      <img
        src="/assets/floral-kiri-tengah.png"
        alt=""
        className="
          pointer-events-none
          absolute
          left-0
          bottom-[3%]
          z-20
          h-[21%]
          w-auto
          translate-y-1/2
          object-contain
          object-left
          select-none
        "
      />
      {/* KANAN TENGAH BAWAH
          Sambungan dari Quote Section */}
      <img
        src="/assets/floral-kiri-tengah.png"
        alt=""
        className="
          pointer-events-none
          absolute
          right-0
          bottom-[3%]
          z-20
          h-[21%]
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
      <div className="relative z-30 mx-auto flex max-w-4xl flex-col items-center">
        
        <p className="mb-3 font-sans text-[10px] font-semibold uppercase tracking-[0.4em] text-primary">
          PUTRA PUTRI KAMI
        </p>

        <h2 className="mb-16 text-center font-serif text-2xl uppercase tracking-widest text-charcoal md:text-3xl">
          Sang Saskara
        </h2>

        <div className="grid w-full max-w-3xl grid-cols-1 gap-12 md:grid-cols-3 md:gap-16">
          {profiles.map((person) => (
            <div
              key={person.id}
              className="group reveal active flex flex-col items-center text-center"
            >
              <div
                onClick={() => onSelectImage(person.image, person.name)}
                className="
                  relative
                  mb-6
                  h-40
                  w-40
                  cursor-pointer
                  overflow-hidden
                  rounded-full
                  border
                  border-primary
                  p-1
                  transition-all
                  duration-500
                  group-hover:scale-105
                  group-hover:shadow-xl
                  md:h-48
                  md:w-48
                "
              >
                <img
                  src={person.image}
                  alt={person.name}
                  className="h-full w-full rounded-full object-cover"
                />

                <div className="absolute inset-0 flex items-center justify-center rounded-full bg-primary/0 transition-colors group-hover:bg-primary/10">
                  <span className="rounded-full bg-black/50 px-3 py-1 font-sans text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                    Lihat Foto
                  </span>
                </div>
              </div>

              <p className="mb-1 font-serif text-2xl font-medium italic text-primary">
                {person.name}
              </p>

              <p className="mb-1 font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">
                {person.order}
              </p>

              {person.bio && (
                <p className="mt-2 max-w-[200px] font-sans text-xs font-light leading-relaxed text-gray-500">
                  {person.bio}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};