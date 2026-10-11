import React, { forwardRef, useId } from 'react'

const Textarea = forwardRef(function Textarea(
  {
    error, label, rows = 4, className = "", ...props
  },ref
) {
  const id = useId();
  return (

    <div className='w-full' >

      {label && (
      <label
       htmlFor={id}
       className='mb-1 block text-sm font-medium text-slate-300'
       >
        {label}
        </label>
        )}

        <textarea
         id={id}
         ref={ref}
         rows={rows}
         className={`w-full resize-none rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-slate-100 outline-none placeholder:text-slate-500 duration-200 focus:border-pink-400/40 focus:bg-white/10 focus:shadow-[0_0_0_3px_rgba(236,72,153,0.15)] ${className}`}
         {...props}/>

         {error && (<p
         className='mt-1 text-xs text-red-400'>
          {error}

         </p>)}
    </div>

  )
}
)
export default Textarea