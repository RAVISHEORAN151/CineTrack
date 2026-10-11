
import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-6xl font-extrabold bg-gradient-to-r from-red-400 to-red-600 
      bg-clip-text text-transparent">404</p>
      <h1 className="mt-4 text-2xl font-bold text-slate-300">Page not found</h1>
      <p className="mt-2 text-slate-400">That page doesn't exist or has moved.</p>
      <Link
        to="/"
        className="mt-6 rounded-lg bg-gradient-to-r from-red-400 to-rose-600 px-4 py-2 text-sm font-semibold text-white"
      >
        Back to home
      </Link>
    </div>
  )
}

export default NotFound