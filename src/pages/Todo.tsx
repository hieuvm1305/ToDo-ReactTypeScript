import React from "react";
import SearchTodo from "./SearchTodo";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function Todo() {
  return (
    <div className="mt-20 w-3/5 mx-auto border-2 rounded-md border-amber-700">
      <div className="p-3">
        <TodoForm />
        <TodoList />
        <SearchTodo/>
      </div>
    </div>
  );
}

export default Todo;
