import { configureStore } from "@reduxjs/toolkit";
import loadingSlice from "../redux/loadingSlice";

export const store = configureStore({
  reducer: {
    loading: loadingSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch