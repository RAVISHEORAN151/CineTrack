import React from 'react'
import { useSelector } from "react-redux";
import {MovieCard} from "../index"

function MovieGrid({movies=[]}) {
  return (
   <div 
   className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie}/>
      ))}
    </div>
  )
}

export default MovieGrid