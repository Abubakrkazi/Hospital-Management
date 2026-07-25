import { forwardRef, useState } from "react";
import type { InputHTMLAttributes, ReactNode } from "react";
import { Eye, EyeOff } from "lucide-react";
import clsx from "clsx";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      className,
      type = "text",
      id,
      required,
      disabled,
      readOnly,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const inputType =
      type === "password"
        ? showPassword
          ? "text"
          : "password"
        : type;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={id}
            className="mb-2 block text-sm font-semibold text-slate-700"
          >
            {label}

            {required && (
              <span className="ml-1 text-red-500">*</span>
            )}
          </label>
        )}

        <div className="relative">
          {leftIcon && (
            <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
              {leftIcon}
            </div>
          )}

          <input
            ref={ref}
            id={id}
            type={inputType}
            disabled={disabled}
            readOnly={readOnly}
            aria-invalid={!!error}
            aria-describedby={
              helperText || error ? `${id}-help` : undefined
            }
            className={clsx(
              "h-12 w-full rounded-xl border bg-white px-4 text-slate-900 transition-all duration-200 outline-none",
              "placeholder:text-slate-400",
              "focus:border-blue-600 focus:ring-4 focus:ring-blue-100",

              "disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500",

              "read-only:bg-slate-50",

              "[&:-webkit-autofill]:shadow-[inset_0_0_0px_1000px_white]",

              {
                "border-slate-300": !error,
                "border-red-500 focus:border-red-500 focus:ring-red-100":
                  error,
                "pl-11": leftIcon,
                "pr-11": rightIcon || type === "password",
              },

              className
            )}
            {...props}
          />

          {type === "password" ? (
            <button
              type="button"
              aria-label={
                showPassword
                  ? "Hide password"
                  : "Show password"
              }
              onClick={() =>
                setShowPassword((prev) => !prev)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-slate-700"
            >
              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>
          ) : (
            rightIcon && (
              <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-500">
                {rightIcon}
              </div>
            )
          )}
        </div>

        {(helperText || error) && (
          <p
            id={`${id}-help`}
            className={clsx(
              "mt-2 text-sm",
              error
                ? "text-red-600"
                : "text-slate-500"
            )}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;