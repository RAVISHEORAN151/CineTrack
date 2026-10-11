import React, { forwardRef, useId } from 'react'
import { twMerge } from 'tailwind-merge';

const Select = forwardRef(function Select({
  options = [], error, className="", label, children, ...props
}, ref) {
   const id = useId();
  return (
    <div className='w-full'>
      {
        label && 
        <label
       htmlFor={id}
      className={twMerge("mb-1 block text-sm font-medium text-slate-500")}>
        {label}
      </label>
      }

      <select
       id= {id}
       ref= {ref}
      className={twMerge(
          "w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-slate-100 outline-none duration-200 focus:border-pink-400/40 focus:bg-white/10",
          className
        )}
       {...props}>

        {options.map((opt)=>(

          <option
          key={opt.value}
          value={opt.value}
          className='bg-slate-900 rounded-2xl'
          >
            {opt.label}
          </option>
          ))}
      </select>
      {error && <p
          className='mt-1 text-xs text-red-400'>
            {error}
          </p>}
    </div>
  );
});

export default Select