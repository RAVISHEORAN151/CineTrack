
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAddModelOpen : false,
    editingMovieId: null,
    deleteTargetId: null,
}

const uiSlice = createSlice({
    name: "ui",
    initialState,

    reducers:{
        openAddMovieModel: (state) => {
            state.isAddModelOpen = true;
            state.editingMovieId = null;
        },
        openEditMovieModel:(state, action) => {
            state.isAddModelOpen = true;
            state.editingMovieId = action.payload;
        },
        closeAddMovieModel: (state) => {
            state.isAddModelOpen = false; 
        },
        openDeleteConfirm: (state, action) => {
            state.deleteTargetId = action.payload;
        },
        closeDeleteConfirm: (state) => {
            state.deleteTargetId = null;
        },


    }
});

export const { openAddMovieModel, closeAddMovieModel, openDeleteConfirm, closeDeleteConfirm,  openEditMovieModel} = uiSlice.actions;
export default uiSlice.reducer;