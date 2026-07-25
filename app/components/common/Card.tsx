import type { ReactNode } from "react";
import clsx from "clsx";

type CardVariant = "default" | "glass" | "outline" | "elevated" | "gradient";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: CardVariant;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg" | "xl";
}

export default function Card({
  children,
  className,
  variant = "default",
  hover = false,
  padding = "md",
}: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-3xl transition-all duration-300",

        {
          "bg-white border border-slate-200 shadow-sm": variant === "default",

          "bg-white shadow-xl": variant === "elevated",

          "border border-slate-300 bg-transparent": variant === "outline",

          "border border-white/20 bg-white/10 backdrop-blur-xl":
            variant === "glass",

          "bg-gradient-to-br from-blue-600 to-cyan-500 text-white":
            variant === "gradient",

          "hover:-translate-y-2 hover:shadow-2xl cursor-pointer": hover,

          "p-0": padding === "none",

          "p-4": padding === "sm",

          "p-6": padding === "md",

          "p-8": padding === "lg",

          "p-12": padding === "xl",
        },

        className,
      )}
    >
      {children}
    </div>
  );
}
