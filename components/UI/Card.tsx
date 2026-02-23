import React from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "glass" | "dark";
  hover?: boolean;
  onClick?: () => void;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      className = "",
      variant = "default",
      hover = true,
      onClick,
    },
    ref
  ) => {
    const variants = {
      default: "bg-white border border-gray-200 shadow-md",
      glass: "bg-white/10 backdrop-blur-md border border-white/20 shadow-xl",
      dark: "bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 shadow-xl",
    };

    const baseStyles = "rounded-2xl p-6 md:p-8 transition-all duration-300";

    return (
      <motion.div
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        whileHover={
          hover ? { scale: 1.05, y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" } : {}
        }
        transition={{ duration: 0.3 }}
        onClick={onClick}
        role={onClick ? "button" : undefined}
        tabIndex={onClick ? 0 : undefined}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";
