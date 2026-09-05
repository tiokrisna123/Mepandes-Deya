import type { Variants } from 'motion/react';

export const scrollRevealVariants: Variants = {
  hidden: {
    opacity: 1,
    y: 50,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
