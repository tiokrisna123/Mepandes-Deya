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
import { LinkGeneratorModal } from './components/LinkGeneratorModal';
import { Footer } from './components/Footer';
import { DigitalGiftSection } from './components/DigitalGiftSection';

import {
  PROFILES,
  GALLERY_ITEMS,
  INITIAL_WISHES,
  DIGITAL_ACCOUNTS,
} from './data/deyaData';

import { Wish } from './types';

export default function App() {
  console.log('[DEBUG] App.tsx LOADED');
  console.log('[DEBUG] DIGITAL_ACCOUNTS =', DIGITAL_ACCOUNTS);

  const [isOpen, setIsOpen] = useState(false);

  const [guestName, setGuestName] = useState('Tamu Undangan');

  const [wishes, setWishes] = useState<Wish[]>(() => {
    try {
      const saved = localStorage.getItem('mepandes_wishes');

      return saved
        ? JSON.parse(saved)
        : INITIAL_WISHES;
    } catch {
      return INITIAL_WISHES;
    }
  });

  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  const [isLinkGenOpen, setIsLinkGenOpen] = useState(false);

  // Read guest name from URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const toParam = params.get('to');

    if (toParam && toParam.trim()) {
      setGuestName(toParam.trim());
    }
  }, []);

  // Sync wishes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(
        'mepandes_wishes',
        JSON.stringify(wishes)
      );
    } catch (e) {
      console.warn(
        'Failed to persist wishes:',
        e
      );
    }
  }, [wishes]);

  // Handle reveal animation
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');

      reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 80) {
          el.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll
      );
    };
  }, [isOpen]);

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
      <LinkGeneratorModal
        isOpen={isLinkGenOpen}
        onClose={() =>
          setIsLinkGenOpen(false)
        }
        currentGuest={guestName}
      />

    </div>
  );
}