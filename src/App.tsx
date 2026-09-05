import React, { useState, useEffect } from 'react';
import { WelcomeCover } from './components/WelcomeCover';
import { HeroSection } from './components/HeroSection';
import { QuoteSection } from './components/QuoteSection';
import { ProfileSection } from './components/ProfileSection';
import { GallerySection } from './components/GallerySection';
import { EventInfoSection } from './components/EventInfoSection';
import { MapSection } from './components/MapSection';
import { CountdownSection } from './components/CountdownSection';
import { RsvpSection } from './components/RsvpSection';
import { AudioPlayer } from './components/AudioPlayer';
import { LightboxModal } from './components/LightboxModal';
import { Footer } from './components/Footer';
import { DigitalGiftSection } from './components/DigitalGiftSection';

import {
  PROFILES,
  GALLERY_ITEMS,
  INITIAL_WISHES,
  DIGITAL_ACCOUNTS,
} from './data/deyaData';

import { Wish } from './types';
import { supabase } from './lib/supabase';
import { useReveal } from './hooks/useReveal';

export default function App() {
  console.log('[DEBUG] App.tsx LOADED');
  console.log('[DEBUG] DIGITAL_ACCOUNTS =', DIGITAL_ACCOUNTS);

  const [isOpen, setIsOpen] = useState(false);

  const [guestName, setGuestName] = useState('Tamu Undangan');

 const [wishes, setWishes] = useState<Wish[]>(INITIAL_WISHES);

  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  const [isLinkGenOpen, setIsLinkGenOpen] = useState(false);

  useReveal();

  // Read guest name from URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const toParam = params.get('to');

    if (toParam && toParam.trim()) {
      setGuestName(toParam.trim());
    }
  }, []);

 // Load wishes dari Supabase
useEffect(() => {
  const loadWishes = async () => {
    const { data, error } = await supabase
      .from('rsvp')
      .select('*')
      .order('created_at', {
        ascending: false,
      });

    if (error) {
      console.error(
        'Gagal mengambil RSVP:',
        error
      );
      return;
    }

    if (!data) return;

    const formattedWishes: Wish[] = data.map(
      (item) => ({
        id: String(item.id),

        name: item.nama,

        attendance:
          item.hadir === 'hadir'
            ? 'hadir'
            : 'tidak_hadir',

        guestCount:
          item.jumlah_tamu ?? 0,

        message:
          item.ucapan ?? '',

        timestamp: new Date(
          item.created_at
        ).toLocaleDateString('id-ID', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }),
      })
    );

    setWishes(formattedWishes);
  };

  loadWishes();
}, []);

  const handleOpenInvitation = () => {
    setIsOpen(true);

    document.body.classList.remove('no-scroll');
  };

  const handleAddWish = (
    newWishData: Omit<Wish, 'id' | 'timestamp'>
  ) => {
    const newWish: Wish = {
      ...newWishData,
      id: Date.now().toString(),
      timestamp: 'Baru saja',
    };

    setWishes((prev) => [
      newWish,
      ...prev,
    ]);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-cream text-charcoal font-sans selection:bg-primary/20 selection:text-primary">

      {/* Locked Cover Screen */}
      <WelcomeCover
        guestName={guestName}
        isOpen={isOpen}
        onOpen={handleOpenInvitation}
      />

      {/* Main Content */}
      <main
        className={`transition-opacity duration-1000 ${
          isOpen
            ? 'opacity-100'
            : 'pointer-events-none h-screen overflow-hidden opacity-0'
        }`}
      >
        <HeroSection />

        <QuoteSection />

        <ProfileSection
          profiles={PROFILES}
          onSelectImage={(src, alt) =>
            setLightboxImage({
              src,
              alt,
            })
          }
        />

        <GallerySection
          items={GALLERY_ITEMS}
          onSelectImage={(src, alt) =>
            setLightboxImage({
              src,
              alt,
            })
          }
        />

        <EventInfoSection />

        <MapSection />

        <CountdownSection />

        <DigitalGiftSection
         accounts={DIGITAL_ACCOUNTS}
        />

        <RsvpSection
          wishes={wishes}
          onAddWish={handleAddWish}
        />

        <Footer
          onOpenLinkGenerator={() =>
            setIsLinkGenOpen(true)
          }
        />
      </main>

      {/* Background Audio Player */}
      <AudioPlayer autoStart={isOpen} />

      {/* Lightbox Modal */}
      <LightboxModal
        src={lightboxImage?.src || null}
        alt={lightboxImage?.alt || ''}
        onClose={() =>
          setLightboxImage(null)
        }
      />

      {/* Shareable Link Generator Modal */}
      

    </div>
  );
}