import { configureStore } from "@reduxjs/toolkit";
import loadingSlice from "../redux/loadingSlice";
import todoSlice from "../redux/todoSlice";
export const store = configureStore({
  reducer: {
    loading: loadingSlice,
    todo: todoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch