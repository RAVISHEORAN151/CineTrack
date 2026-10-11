import React from 'react'
import {useNavigate, useParams} from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { togglewatched } from '../store/movieSlice'
import { openEditMovieModel, openDeleteConfirm } from '../store/uiSlice'
import { Button } from '../Components'


function MovieDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const movies = useSelector((state) => state.movies.movies);

  const movie = movies.find((m) => String(m.id) === id)
  
  if(!movie){
    return(
       <div className="flex flex-col items-center justify-center py-24 text-center">
                <p className="text-lg font-semibold text-slate-200">Movie not found</p>
                <p className="mt-1 text-sm text-slate-500">It may have been deleted, or the link is wrong.</p>
                <Button type="button" className="mt-4" onClick={() => navigate('/movies')}>
                    Back to movies
                </Button>
            </div>
    )
  }
   return (
  <div className="mx-auto max-w-5xl px-4 py-8">
    <Button
      type="button"
      variant="ghost"
      className="mb-6 font-semibold text-2xl bg-gradient-to-r from-gray-600 via-yellow-500 to-gray-900 bg-clip-text text-transparent"
      onClick={() => navigate("/movies")}
    >
      ← Back to movies
    </Button>

    <div className="relative isolate overflow-hidden rounded-3xl border-2 border-pink-400/70 bg-gradient-to-br from-slate-900 via-slate-900 to-pink-950/50 shadow-[0_12px_40px_rgba(0,0,0,0.25)]">
  <div className="flex flex-col md:flex-row">
         <div className="w-full shrink-0 bg-slate-800 md:w-72 md:self-stretch lg:w-80">
    {movie.posterUrl ? (
      <img
        src={movie.posterUrl}
        alt={movie.title}
        className="block h-auto w-full md:h-full md:object-cover"
      />
    ) : (
      <div className="flex aspect-[2/3] items-center justify-center text-sm text-slate-500 md:h-full">
        No poster available
      </div>
    )}
  </div>

       
        <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-7">
          <div className="flex flex-wrap items-start justify-between gap-3">
           <div>
            <h1 className="text-2xl font-bold text-slate-100 md:text-3xl">
              {movie.title}
            </h1>

            <div className="mt-2 flex flex-wrap items-center gap-2">
              <span className="text-sm text-slate-400">{movie.year}</span>

              {(movie.genres ?? []).map((genre) => (
                <span
                  key={genre}
                  className="inline-flex rounded-full border border-pink-400/30 bg-pink-500/10 px-3 py-1 text-xs font-medium text-pink-200"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>

            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                movie.watched
                  ? "bg-emerald-500/15 text-emerald-300"
                  : "bg-amber-500/15 text-amber-300"
              }`}
            >
              {movie.watched ? "watched" : "Not watched"}
            </span>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-3 py-1">
              <span className="text-yellow-300">★</span>
              <span className="text-sm font-semibold text-yellow-200">
                {movie.Rating ?? "—"}/10
              </span>
            </div>

            {movie.status && (
              <span className={`rounded-full border 
              ${movie.watched
                ?"border-red-400/20 bg-red-400/10 px-3 py-1 text-x font-semibold text-orange-400"
                : "border-purple-400/40 bg-purple-400/20 px-3 py-1 text-x font-semibold text-purple-400"
              }`}>
                {movie.status}
              
              </span>
            )}
          </div>

         
          <div className="mt-6 rounded-xl border border-white/10 bg-slate-800/50 p-4">
            <h2 className="text-sm font-semibold text-slate-300">
              Description
            </h2>

            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              {movie.description || "No description added yet."}
            </p>
          </div>

         
          <div className="mt-auto flex flex-wrap gap-3 pt-6">
            <Button
              type="button"
              variant="primary"
              onClick={() =>
                dispatch(openEditMovieModel(movie.id))
              }
            >
              Edit
            </Button>

            <Button
              type="button"
              variant="danger"
              onClick={() =>
                dispatch(openDeleteConfirm(movie.id))
              }
            >
              Delete
            </Button>

            <Button
              type="button"
              variant={movie.watched ? "ghost" : "primary"}
              onClick={() => dispatch(togglewatched(movie.id))}
            >
              {movie.watched
                ? "Mark as Unwatched"
                : "Mark as watched"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default MovieDetails