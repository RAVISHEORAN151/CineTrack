import React from 'react'
import {StatsCard} from '../index'

function StatsSection({stats}) {
  const { totalMovies, watchedMovies, wantToWatchMovies, averageRating} = stats
  return (
    <section className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
      <StatsCard label="Total movies" value={totalMovies} icon={<i class="fa-solid fa-clapperboard"></i>} color="purple" />
<StatsCard label="watched" value={watchedMovies} icon={<i className="fa-solid fa-check"></i>} color="green" />
<StatsCard label="Want to watch" value={wantToWatchMovies} icon={<i class="fa-solid fa-hourglass-half"></i>} color="amber" />
<StatsCard label="Average rating" value={averageRating === 0 ? "—" : averageRating.toFixed(1)} icon={<i class="fa-solid fa-star"></i>} color="pink" />
    </section>
  )
}

export default StatsSection