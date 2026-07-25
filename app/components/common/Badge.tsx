import type { ReactNode } from "react";
import clsx from "clsx";

type BadgeVariant =
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "secondary";

type BadgeSize = "sm" | "md" | "lg";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  rounded?: boolean;
  className?: string;
}

export default function Badge({
  children,
  variant = "primary",
  size = "md",
  rounded = true,
  className,
}: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center font-medium transition-colors",

        {
          "rounded-full": rounded,
          "rounded-lg": !rounded,

          "px-2.5 py-1 text-xs": size === "sm",
          "px-3 py-1.5 text-sm": size === "md",
          "px-4 py-2 text-base": size === "lg",

          "bg-blue-100 text-blue-700": variant === "primary",
          "bg-green-100 text-green-700": variant === "success",
          "bg-yellow-100 text-yellow-700": variant === "warning",
          "bg-red-100 text-red-700": variant === "danger",
          "bg-cyan-100 text-cyan-700": variant === "info",
          "bg-slate-100 text-slate-700": variant === "secondary",
        },

        className
      )}
    >
      {children}
    </span>
  );
}