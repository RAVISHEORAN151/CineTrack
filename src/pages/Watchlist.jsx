import React, {useMemo} from 'react'
import { useSelector } from 'react-redux'
import {filterMovies, sortMovies} from "../utils/movieHelpers"
import { EmptyState, MovieGrid } from '../Components';

function Watchlist() {
  const movies = useSelector((state) => state.movies.movies);

  const watchlist = useMemo(() => sortMovies(filterMovies(movies,"", "unwatched"),"newest"),[movies])
  return (
    <div className="mx-auto max-w-7xl px-6 py-8">
      <h1 className="text-2xl font-bold bg-gradient-to-bl from-gray-600 via-yellow-500 to-gray-900 bg-clip-text text-transparent">Watchlist</h1>
      {watchlist.length === 0 ? (
        <EmptyState variant="empty-watchlist" />
      ) : (
        <MovieGrid movies={watchlist} />
      )}
    </div>
  )
}

export default Watchlist