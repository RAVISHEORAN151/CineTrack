// Components/SearchBar/SearchBar.jsx
import React from 'react'
import { Input } from "../index.js"

function SearchBar({ value, onChange }) {
  return (
    <div className="px-3">

      <Input
        type="search"
        placeholder="Search by title or genre"
        aria-label="Search movies"
        className="w-full rounded-2xl border border-pink-400/30 text-2xl bg-slate-900/90 py-4 pl-4 pr-12  font-medium text-slate-500 shadow-lg shadow-pink-950/20 outline-none transition placeholder:text-slate-500"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}

export default SearchBar