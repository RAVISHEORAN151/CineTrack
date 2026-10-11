import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const Button = forwardRef(function Button(
  { children, variant = "primary", className = "", ...props },
  ref
) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow-[0_0_14px_rgba(236,72,153,0.35)] hover:from-pink-600 hover:to-rose-700",

    ghost:
      "border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10",

    danger:
      "bg-gradient-to-r from-red-500 to-red-700 text-white hover:from-red-600 hover:to-red-800",
  };

  return (
    <button
      ref={ref}
      className={twMerge(base, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
});

export default Button;