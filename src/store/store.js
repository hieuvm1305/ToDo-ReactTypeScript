import { configureStore } from "@reduxjs/toolkit";
import loadingSlice from "../reducer/loadingSlice";

export const store = configureStore({
    reducer: {
        loading: loadingSlice,
    }
})