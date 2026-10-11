import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    movies: [
],
}

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers:{
        addMovie: (state, action) =>{
            state.movies.push(action.payload)
        },
        deleteMovie: (state, action) =>{
            state.movies = state.movies.filter((movie) => movie.id != action.payload);
        },
        updateMovie: (state,action) => {
            const updateMovie = action.payload;

            const movieIndex = state.movies.findIndex(
                (movie) => movie.id === updateMovie.id
            );

            if(movieIndex !== -1){
                state.movies[movieIndex] = updateMovie;
            }
        },

        togglewatched: (state,action) => {
            const movieId = action.payload;

            const movie = state.movies.find(
                (movie) => movie.id === movieId
            );
 


            if(movie){
                movie.watched = !movie.watched;
                movie.status = movie.watched ? "Watched" : "Want to Watch";
            }

        },
        setMovies :(state, action) => {
          state.movies = action.payload
        }


    },
})
export const { addMovie, deleteMovie, updateMovie, togglewatched, setMovies} = movieSlice.actions
export default movieSlice.reducer
