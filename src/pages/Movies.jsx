
import React, {useMemo, useState} from 'react'
import { MovieGrid, SearchBar,FilterBar, SortSelect, EmptyState } from "../Components"
import { useSelector } from 'react-redux';
import {filterMovies, sortMovies} from "../utils/movieHelpers"

function Movies() {

  const movies = useSelector((state)=> state.movies.movies);

  const[searchText, setSearchTest] = useState("");
  const[FilterBarValue, setFilterBarValue] = useState("all");
  const[SortSelectValue, setSortSelectValue] = useState("newest");

  const visibleMovies = useMemo(
    () => sortMovies(filterMovies(movies,searchText,FilterBarValue), SortSelectValue),
    [movies, searchText, FilterBarValue, SortSelectValue]
  );

  const heading =
    FilterBarValue === "all"
      ? "ALL MOVIES"
      : FilterBarValue === "watched"
      ? "watched MOVIES"
      : "WANT TO WATCH";

  return (

    <div className="mx-auto max-w-7xl px-4 pt-4">
      <h1 className="text-2xl font-bold bg-gradient-to-tr from-pink-600 via-yellow-500 to-red-900 bg-clip-text text-transparent">{heading}
    </h1>

    <div className="mt-4 flex flex-col gap-2 items-center">
      <div className='flex-1 w-full'>
        <SearchBar value={searchText} onChange={setSearchTest} />
      </div>

      <div className="flex w-full items-center pl-4 pr-4 justify-between">
        <FilterBar value={FilterBarValue} onChange={setFilterBarValue} />
        <div className=' ml-1 lg:w-50'>
          <SortSelect value={SortSelectValue} onChange={setSortSelectValue} />
        </div>
      </div>
    </div>

    {movies.length === 0 ? (
      <EmptyState variant='no-movies'/>
    ) : visibleMovies.length === 0 ? (
       <EmptyState variant='no-results'/>  
    ): (<MovieGrid
         className="pb-16"
       movies={visibleMovies}/>

    )}

        </div>
  )
}

export default Movies