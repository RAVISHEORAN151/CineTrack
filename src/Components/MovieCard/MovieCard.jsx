import React from "react";
import { Link } from "react-router-dom";
import { Button, RatingBadge, StatusBadge } from "../index";
import { useDispatch } from "react-redux";
import { openDeleteConfirm, openEditMovieModel } from "../../store/uiSlice";
import { togglewatched } from "../../store/movieSlice";

function MovieCard({ movie }) {
  const dispatch = useDispatch();

  return (
    <div className="md: w100 overflow-hidden rounded-2xl  border-pink-400/70 bg-gradient-to-br from-slate-900 via-slate-900 to-pink-950/50 shadow-[0_12px_40px_rgba(0,0,0,0.25)]">
      <div className="aspect-[5/3] w-full overflow-hidden rounded-t-2xl bg-slate-800">
        {movie.posterUrl ? (
          <img
            src={movie.posterUrl}
            alt={movie.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-800 to-slate-950 text-sm text-slate-500">
            No Poster
          </div>
        )}
      </div>

      <div className="p-2">
        <h3 className="truncate text-base font-bold text-slate-100 sm:text-lg">
          {movie.title}
        </h3>

        <div className="mt-2 flex flex-wrap items-center gap-2">
        <span className="text-xs text-slate-400 sm:text-sm">
          {movie.year}
        </span>

        {(movie.genres ?? []).map((genre) => (
          <span
            key={genre}
            className="inline-flex rounded-full border border-pink-400/30 bg-pink-500/10 px-2.5 py-1 text-xs font-medium text-pink-200"
          >
            {genre}
          </span>
        ))}
       </div>

        <div className="mt-2 flex flex-wrap gap-2">
            <RatingBadge rating = {movie.Rating}/>
            <StatusBadge watched= {movie.watched}/>
        </div>

        

        <Button className="mt-1 w-full text-xs sm:text-sm">
          <Link to={`/movie/${movie.id}`}>View Details</Link>
        </Button>

        <Button
          type="button"
          variant="ghost"
          className="mt-1 w-full text-xs sm:text-sm"
          onClick={() => dispatch(openEditMovieModel(movie.id))}
        >
          Edit
        </Button>

        <Button
          type="button"
          variant="danger"
          className="mt-1 w-full text-xs sm:text-sm"
          onClick={() => dispatch(openDeleteConfirm(movie.id))}
        >
          Delete
        </Button>

        <Button
          type="button"
          className={`mt-1 w-full text-xs text-slate-100 sm:text-sm ${movie.watched ? "bg-gradient-to-r from-green-300 to-green-400 text-white shadow-[0_0_14px_rgba(236,72,153,0.35)] hover:from-green-400 hover:to-green-500" : "bg-gradient-to-r from-amber-400 to-amber-500 text-white shadow-[0_0_14px_rgba(236,72,153,0.35)] hover:from-amber-500 hover:to-amber-600"}`}
          onClick={() => dispatch(togglewatched(movie.id))}
        >
          {movie.watched ? "watched ✓"  : "Mark watched"}
        </Button>
      </div>
    </div>
  );
}

export default MovieCard
 