// Components/Input/Input.jsx
import React, { forwardRef, useId } from 'react'
import { twMerge } from 'tailwind-merge'

const Input = forwardRef(function Input({ label, error, className = "", ...props }, ref) {
  const id = useId()
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="mb-1 block text-sm font-medium text-slate-300">
          {label}
        </label>
      )}
      <input
        id={id}
        ref={ref}
        className={twMerge(
          "w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-slate-100 outline-none placeholder:text-slate-500 duration-200 focus:border-pink-400/60 focus:bg-white/10 focus:shadow-[0_0_0_3px_rgba(236,72,153,0.15)]",
          className
        )}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  )
})

export default Input