import React from 'react'

function Loader({label = "Loading..."}) {
  return (
     <div className="flex min-h-[40vh] items-center justify-center" role="status">
      <div className="flex items-center gap-3 rounded-full border border-pink-400/20 bg-slate-900/60 px-6 py-3">
        <span className="h-5 w-5 animate-spin rounded-full border-2 border-pink-400/30 border-t-pink-400" />
        <span className="text-sm font-medium text-slate-300">{label}</span>
      </div>
    </div>
  )
}

export default Loader