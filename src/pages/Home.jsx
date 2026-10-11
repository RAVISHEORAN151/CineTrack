import React from 'react'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {Button, StatsSection, MovieGrid, EmptyState} from '../Components';
import { openAddMovieModel } from '../store/uiSlice'
import { CalculateStats, getRecentMovies} from '../utils/movieHelpers'

function Home() {

  const dispatch = useDispatch()
  const movies = useSelector((state) => state.movies.movies)

  const stats = CalculateStats(movies)
  const recentMovies = getRecentMovies(movies,4)

  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <section className="relative isolate overflow-hidden rounded-3xl border-2 border-pink-400/70 bg-gradient-to-br from-slate-900 via-slate-900 to-pink-950/50 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.25)] sm:p-8">
  <div className="pointer-events-none absolute -right-16 -top-20 -z-10 h-56 w-56 rounded-full bg-pink-500/15 blur-3xl" />

  <div className="relative max-w-2xl">
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-pink-300">
      Your personal movie collection
    </p>

    <h1 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
      Welcome to <span className="text-pink-300">CineTrack</span>
    </h1>

    <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
      Search, watch, and remember. Keep track of every movie you want to see
      and every one you’ve finished.
    </p>

    <Button
      type="button"
      className="mt-6 shadow-lg shadow-pink-950/30 transition-transform hover:-translate-y-0.5"
      onClick={() => dispatch(openAddMovieModel())}
    >
      + Add Movie
    </Button>
  </div>
</section>

      <StatsSection stats={stats} />

      <section className="mt-10">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold bg-gradient-to-r from-gray-600 via-yellow-500 to-gray-900 bg-clip-text text-transparent">Recently added</h2>
          <Link to="/movies" className="text-2xl font-bold bg-gradient-to-r from-rose-600 via-yellow-500 to-pink-900 bg-clip-text text-transparent  hover:underline">
            View all
          </Link>
        </div>

        {recentMovies.length === 0 ? (
          <EmptyState variant="no-movies" />
        ) : (
          <MovieGrid movies={recentMovies} />
        )}
      </section>
    </div>
  )

}

export default Home