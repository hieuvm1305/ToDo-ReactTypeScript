import {createSlice} from "@reduxjs/toolkit"

export interface loadingState {
    isLoading: boolean,
}
const initialState : loadingState = {
    isLoading: false,
}

export const loadingSlice : any = createSlice({
    name: "loading",
    initialState,
    reducers: {
        loadingPage: (state : any) => {
            state.isLoading = !state.isLoading;
        }
    }
});
export const selectLoading = (state: any) => state.loading.isLoading;
export const {loadingPage} = loadingSlice.actions;
export default loadingSlice.reducer;