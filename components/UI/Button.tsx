import React from "react";
import { motion } from "framer-motion";
import { buttonHover } from "@/lib/animations";
import { classNames } from "@/lib/utils";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  is3D?: boolean;
  loading?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      is3D = false,
      loading = false,
      children,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "relative font-semibold rounded-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary:
        "bg-gradient-to-r from-green-600 to-green-700 text-white hover:shadow-lg focus-visible:ring-green-500",
      secondary:
        "bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:shadow-lg focus-visible:ring-amber-500",
      outline:
        "border-2 border-green-600 text-green-600 hover:bg-green-50 focus-visible:ring-green-500",
      ghost:
        "text-gray-700 hover:bg-gray-100 focus-visible:ring-gray-500 dark:text-gray-300 dark:hover:bg-gray-700",
    };

    const sizes = {
      sm: "px-3 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    const buttonClass = classNames(
      baseStyles,
      variants[variant],
      sizes[size],
      className
    );

    const content = (
      <>
        {loading && (
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          </span>
        )}
        <span className={loading ? "invisible" : "visible"}>{children}</span>
      </>
    );

    if (is3D) {
      return (
        <motion.button
          ref={ref}
          className={buttonClass}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 30px rgba(37, 99, 235, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
          disabled={disabled || loading}
          {...(props as any)}
        >
          {content}
        </motion.button>
      );
    }

    return (
      <motion.button
        ref={ref}
        className={buttonClass}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={disabled || loading}
        {...(props as any)}
      >
        {content}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
