import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import clsx from "clsx";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "danger"
  | "success";

type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled || loading}
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-4 disabled:cursor-not-allowed disabled:opacity-60",

        {
          "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-200":
            variant === "primary",

          "bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-300":
            variant === "secondary",

          "border border-blue-600 bg-transparent text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-200":
            variant === "outline",

          "bg-transparent text-slate-700 hover:bg-slate-100":
            variant === "ghost",

          "bg-red-600 text-white hover:bg-red-700 focus:ring-red-200":
            variant === "danger",

          "bg-green-600 text-white hover:bg-green-700 focus:ring-green-200":
            variant === "success",

          "px-4 py-2 text-sm": size === "sm",

          "px-6 py-3 text-base": size === "md",

          "px-8 py-4 text-lg": size === "lg",

          "w-full": fullWidth,
        },

        className
      )}
      {...props}
    >
      {!loading && leftIcon}

      {loading ? (
        <>
          <svg
            className="h-5 w-5 animate-spin"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              opacity=".25"
            />
            <path
              fill="currentColor"
              d="M22 12a10 10 0 0 1-10 10V18a6 6 0 0 0 6-6h4z"
            />
          </svg>

          Loading...
        </>
      ) : (
        <>
          {children}
          {rightIcon}
        </>
      )}
    </button>
  );
}