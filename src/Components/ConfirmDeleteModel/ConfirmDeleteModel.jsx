import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { deleteMovie } from '../../store/movieSlice';
import { closeDeleteConfirm } from '../../store/uiSlice';
import {Button, Model } from "../index";

function ConfirmDeleteModel() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const deleteTargetId = useSelector((state) => state.ui.deleteTargetId)
  const movies = useSelector((state) => state.movies.movies)
  const movie = movies.find((m) => m.id === deleteTargetId)

  const isOpen = deleteTargetId !== null

  const handleConfirm = () => {
    dispatch(deleteMovie(deleteTargetId))
    dispatch(closeDeleteConfirm())
  }

  if(location.pathname === `/movie/${deleteTargetId}`){
    navigate('/movies')
  }
  return (
    <Model
     isOpen = {isOpen}
     onClose={() => dispatch(closeDeleteConfirm())}
     title="Delete Movie">
      <p className='text-sm text-slate-400'>
        {movie 
        ? `"${movie.title}" will be permanently removed. This can't be undone.`
       : "This can't be undone."}
      </p>
      <div className="mt-6 flex justify-end gap-3 border-t border-white/10 pt-4">
        <Button type="button" variant="ghost" onClick={() => dispatch(closeDeleteConfirm())}>
            Cancel
        </Button>
        <Button type="button" variant="danger" onClick={handleConfirm}>
            Delete
        </Button>
      </div>
     </Model>
  )
}

export default ConfirmDeleteModel