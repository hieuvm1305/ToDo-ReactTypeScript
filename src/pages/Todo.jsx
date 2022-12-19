import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import SearchTodo from "./SearchTodo";

function Todo() {
  return (
    <div className="w-3/4 mx-auto px-4 py-3 border-2 rounded-md border-black">
      <TodoForm />
      <TodoList />
      <SearchTodo />
    </div>
  );
}

export default Todo;
