import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading : false,
}

const loadingSlice = createSlice({
    name: "loading",
    initialState,
    reducers: {
        loadingPage : (state) => {
            state.isLoading = !state.isLoading;
        }
    }
})

export const selectLoading = (state) => state.loading.isLoading;
export const {loadingPage} = loadingSlice.actions;
export default loadingSlice.reducer;