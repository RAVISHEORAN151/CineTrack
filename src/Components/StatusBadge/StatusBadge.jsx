import React from 'react'

function StatusBadge({ watched }) {
  const style = watched 
  ? "border-emerald-400/30 bg-emerald-500/15 text-emerald-300"
  : "border-pink-400/30 bg-pink-500/15 text-pink-300"
  return (
   <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold ${style}`}>
    {watched ? "watched" : "Want to watch"}
   </span>
  )
}

export default StatusBadge