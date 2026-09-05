import { useEffect } from 'react';

export function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(
      '.reveal, .image-reveal'
    );

    if (!elements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('active', entry.isIntersecting);
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
}
