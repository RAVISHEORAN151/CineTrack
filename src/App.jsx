import { Outlet } from "react-router-dom";
import { Header, Footer, Model, MovieForm, ConfirmDeleteModal, Loader } from "./Components";
import { closeAddMovieModel } from "./store/uiSlice";
import "./App.css";
import { setMovies } from "./store/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { loadMovies, saveMovies } from "./utils/localStorage"


function App() {
  const dispatch = useDispatch();
  const isAddMovieModelOpen = useSelector((state) => state.ui.isAddModelOpen)
   const editingMovieId = useSelector((state) => state.ui.editingMovieId);

   const [isLoading, setIsLoading] = useState(true)
   const movies = useSelector((state) => state.movies.movies)

   useEffect(()=>{
    dispatch(setMovies(loadMovies()))
    setIsLoading(false)
   },[dispatch])

   useEffect(() => {
    if(!isLoading) saveMovies(movies)  
   }, [movies, isLoading])

   if(isLoading) return <Loader />
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pb-20">
        <Outlet />
      </main>

      <Footer />

      <Model
      isOpen={isAddMovieModelOpen}
      onClose={() => dispatch(closeAddMovieModel())}
      title={editingMovieId ? "Edit movie" : "Add a movie"}
      >
        <MovieForm />
      </Model>

      <ConfirmDeleteModal/>
    </div>
  );
}

export default App;