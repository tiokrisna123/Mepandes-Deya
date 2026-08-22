
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
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto flex flex-col items-center">

        {/* Judul Section */}
        <p className="font-sans text-[10px] tracking-[0.4em] text-primary mb-3 uppercase font-semibold">
          PUTRA PUTRI KAMI
        </p>

        <h2 className="font-serif text-2xl md:text-3xl mb-16 tracking-widest uppercase text-charcoal text-center">
          Sang Saskara
        </h2>

        {/* Daftar Profile */}
        <div className="flex flex-col gap-16 w-full max-w-md">
          {profiles.map((person) => (
            <div
              key={person.id}
              className="flex flex-col items-center text-center reveal active group"
            >

              {/* Foto */}
              <div
                onClick={() => onSelectImage(person.image, person.name)}
                className="w-full cursor-pointer relative overflow-hidden mb-6 transition-all duration-500 transform group-hover:scale-[1.02] group-hover:shadow-xl"
              >
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-auto object-cover block"
                />

                {/* Overlay saat hover */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors flex items-center justify-center">
                  <span className="text-xs font-sans text-white bg-black/50 px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    Lihat Foto
                  </span>
                </div>
              </div>

              {/* Nama */}
              <p className="font-serif text-2xl mb-1 text-primary italic font-medium">
                {person.name}
              </p>

              {/* Urutan Anak */}
              <p className="font-sans text-[10px] tracking-[0.2em] text-gray-400 uppercase font-medium mb-1">
                {person.order}
              </p>

              {/* Biodata */}
              {person.bio && (
                <p className="font-sans text-xs text-gray-500 max-w-[250px] mt-2 font-light leading-relaxed">
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

