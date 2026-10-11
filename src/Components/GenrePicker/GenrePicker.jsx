
import React from 'react'
import { SORT_GENRE as GENRES } from "../../utils/constants";

function GenrePicker({ register, error }) {
  return (
    <fieldset>
      <legend className="mb-2 block text-sm font-medium text-slate-300">Genres</legend>

      <div className="flex flex-wrap gap-2">
        {GENRES.map((genre) => (
          <label key={genre} className="cursor-pointer">
            <input
              type="checkbox"
              value={genre.value}
              className="peer sr-only"
              {...register("genres", {
                validate: (value) =>
                  (Array.isArray(value) && value.length > 0) || "Pick at least one genre",
              })}
            />
            <span className="inline-block rounded-full border border-white/20 bg-white/5 px-3 py-1 text-sm text-slate-300 transition hover:bg-white/10 peer-checked:border-pink-400 peer-checked:bg-pink-500/20 peer-checked:text-pink-200 peer-focus-visible:ring-2 peer-focus-visible:ring-pink-400">
              {genre.label}
            </span>
          </label>
        ))}
      </div>

      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </fieldset>
  )
}

export default GenrePicker