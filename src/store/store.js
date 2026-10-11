import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './movieSlice'
import uiReducer from './uiSlice'
import { loadMovies, saveMovies } from "../utils/localStorage"

const store = configureStore({
    reducer:{
        movies: movieReducer,
        ui: uiReducer,
    },

    preloadedState: {
        movies: {movies: loadMovies() },
    }
})

let previousMovies = store.getState().movies.movies

store.subscribe(()=> {
    const currentMovies = store.getState().movies.movies
    if(currentMovies !== previousMovies){
        previousMovies = currentMovies
        saveMovies(currentMovies)
    }
})


export default store