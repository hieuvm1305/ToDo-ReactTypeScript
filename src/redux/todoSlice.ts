import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface todoState {
  todoList: Array<object>;
  searchList: Array<object>;
}

const initialState: todoState = {
  todoList: [],
  searchList: [],
};

export const todoSlice: any = createSlice({
  name: "todo",
  initialState,
  reducers: {
    loadingList: (state, action: PayloadAction<object[]>) => {
      state.todoList = action.payload;
    },
    loadingSearchList: (state, action: PayloadAction<object[]>) => {
      state.searchList = action.payload;
    },
  },
});

export const selectTodoList = (state: any) => state.todo.todoList;
export const selectSearchList = (state : any) => state.todo.searchList;
export const { loadingList, loadingSearchList } = todoSlice.actions;
export default todoSlice.reducer;
