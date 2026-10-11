import React from 'react'

const TONES = {
  high: "border-emerald-400/30 bg-emerald-500/15 text-emerald-300",
  mid:  "border-amber-400/30 bg-amber-500/15 text-amber-300",
  low:  "border-red-400/30 bg-red-500/15 text-red-300",
  none: "border-white/10 bg-white/5 text-slate-400",

}

function RatingBadge({rating}) {
  const value = Number(rating) || 0
  const tone = value === 0 ? "none" : value >= 8 ? "high" :  value >= 6 ? "mid" : "low"
  return (
    <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold ${TONES[tone]}`}>
      {value === 0 ? "Not rated" : (
        <div className='flex gap-1 justify-center items-center'>
           <i className="fa-solid fa-star"></i> 
         {value.toFixed(1)}
         </div>
    )}
    </span>
  )
}

export default RatingBadge