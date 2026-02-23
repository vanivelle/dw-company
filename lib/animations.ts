/**
 * Reusable Animation Variants and Utilities
 * Using Framer Motion 12+
 */

import type { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const scaleIn: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

export const tilt3D = {
  whileHover: {
    rotateY: 10,
    rotateX: 10,
    scale: 1.05,
    transition: { duration: 0.3 },
  },
};

export const buttonHover = {
  whileHover: {
    scale: 1.05,
    boxShadow: "0 10px 30px rgba(37, 99, 235, 0.3)",
  },
  whileTap: { scale: 0.95 },
};

export const buttonShake: Variants = {
  animate: {
    x: [0, -5, 5, -5, 0],
    transition: {
      duration: 0.5,
    },
  },
};

export const pulse: Variants = {
  animate: {
    scale: [1, 1.1, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

export const bounce: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 1,
      repeat: Infinity,
    },
  },
};

export const shimmer: Variants = {
  animate: {
    backgroundPosition: ["200% 0", "-200% 0"],
    transition: {
      duration: 3,
      repeat: Infinity,
    },
  },
};

export const rotateInY: Variants = {
  hidden: { opacity: 0, rotateY: -100 },
  visible: {
    opacity: 1,
    rotateY: 0,
    transition: { duration: 0.6 },
  },
};

export const flipCard = {
  whileHover: {
    rotateY: 180,
  },
  transition: {
    duration: 0.6,
    type: "tween" as const,
  },
};

// Viewport configuration for InView animations
export const viewportConfig = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -100px 0px",
} as const;

// Error animation
export const errorShake: Variants = {
  animate: {
    x: [0, -10, 10, -10, 10, 0],
    transition: {
      duration: 0.5,
    },
  },
};

// Success animation
export const successCheck: Variants = {
  animate: {
    scale: [0, 1.2, 1],
    opacity: [0, 1, 1],
    transition: {
      duration: 0.6,
    },
  },
};
