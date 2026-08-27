import React, { useState, useEffect } from 'react';

export const CountdownSection: React.FC = () => {
  const targetDate = new Date('2026-07-27T09:00:00+08:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));

      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );

      const seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
      );

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });
    };

    updateCountdown();

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section
      className="
        relative
        overflow-visible
        bg-charcoal
        px-6
        py-24
        text-center
        text-white
      "
    >
      {/* =========================
          FLORAL FRAME
      ========================== */}

      {/* KIRI TENGAH ATAS */}
      <img
        src="/assets/floral-kiri-tengah.png"
        alt=""
        className="
          pointer-events-none
          absolute
          left-0
          top-[-20%]
          z-20
          h-[72%]
          w-auto
          select-none
          object-contain
          object-left
        "
      />
      {/* KANAN TENGAH ATAS */}
      <img
        src="/assets/floral-kiri-tengah.png"
        alt=""
        className="
          pointer-events-none
          absolute
          right-0
          top-[-20%]
          z-20
          h-[72%]
          w-auto
          scale-x-[-1]
          select-none
          object-contain
          object-left
        "
      />
      {/* KIRI TENGAH ATAS */}
      <img
        src="/assets/floral-kiri-tengah.png"
        alt=""
        className="
          pointer-events-none
          absolute
          left-0
          top-[40%]
          z-20
          h-[72%]
          w-auto
          select-none
          object-contain
          object-left
        "
      />
      {/* KANAN TENGAH ATAS */}
      <img
        src="/assets/floral-kiri-tengah.png"
        alt=""
        className="
          pointer-events-none
          absolute
          right-0
          top-[40%]
          z-20
          h-[72%]
          w-auto
          scale-x-[-1]
          select-none
          object-contain
          object-left
        "
      />

      {/* =========================
          CONTENT
      ========================== */}

      <div className="relative z-30 mx-auto max-w-4xl reveal active">
        <p className="mb-12 font-sans text-[10px] font-semibold uppercase tracking-[0.4em] opacity-60">
          HITUNG MUNDUR
        </p>

        <div
          className="grid grid-cols-4 gap-2 md:gap-12"
          id="countdown"
        >
          {/* HARI */}
          <div className="rounded-xs border border-white/10 bg-white/5 p-4 md:p-6">
            <p className="mb-2 font-serif text-3xl font-light text-primary md:text-6xl">
              {timeLeft.days.toString().padStart(2, '0')}
            </p>

            <p className="font-sans text-[9px] font-medium tracking-[0.2em] opacity-50">
              HARI
            </p>
          </div>

          {/* JAM */}
          <div className="rounded-xs border border-white/10 bg-white/5 p-4 md:p-6">
            <p className="mb-2 font-serif text-3xl font-light text-primary md:text-6xl">
              {timeLeft.hours.toString().padStart(2, '0')}
            </p>

            <p className="font-sans text-[9px] font-medium tracking-[0.2em] opacity-50">
              JAM
            </p>
          </div>

          {/* MENIT */}
          <div className="rounded-xs border border-white/10 bg-white/5 p-4 md:p-6">
            <p className="mb-2 font-serif text-3xl font-light text-primary md:text-6xl">
              {timeLeft.minutes.toString().padStart(2, '0')}
            </p>

            <p className="font-sans text-[9px] font-medium tracking-[0.2em] opacity-50">
              MENIT
            </p>
          </div>

          {/* DETIK */}
          <div className="rounded-xs border border-white/10 bg-white/5 p-4 md:p-6">
            <p className="mb-2 font-serif text-3xl font-light text-primary md:text-6xl">
              {timeLeft.seconds.toString().padStart(2, '0')}
            </p>

            <p className="font-sans text-[9px] font-medium tracking-[0.2em] opacity-50">
              DETIK
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};