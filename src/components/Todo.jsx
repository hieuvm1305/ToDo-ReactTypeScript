import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import ListTodo from "./ListTodo";
import SearchTodo from "./SearchTodo";
function Todo() {
  const [todos, setTodos] = useState([]);
  const [editItem, seteditItem] = useState(); //lay item can chinh sua

  useEffect(() => {
    let todoList = JSON.parse(localStorage.getItem("todo"));
    if (todoList !== null) {
      setTodos(todoList);
    }
  }, []); //khi moi vao se bind du lieu tu local storage

  //Them todo
  const addTodo = (todo) => {
    if (todo.title !== "") {
      setTodos([todo, ...todos]);
    }
    localStorage.setItem("todo", JSON.stringify(todos));
  };

  //Xoa todo
  const removeTodo = (id) => {
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
    localStorage.setItem("todo", JSON.stringify(todos));
  };

  //lay item can update và setstate
  const updateTodo = (id) => {
    let res = todos.find((item) => item.id === id);
    seteditItem(res);
  };

  //update item luu local storage và set item can update = null;
  const handleUpdate = (data) => {
    let updateArr = [...todos];
    //khai báo một mảng tạm = todos, thay đổi phần tử trong mảng và set lại todo;
    updateArr.forEach((item) => {
      if (item.id === data.id) {
        item.title = data.title;
        item.time = data.time;
        item.status = data.status;
      }
    });
    setTodos(updateArr);
    localStorage.setItem("todo", JSON.stringify(todos));
    seteditItem(null);
  };
  //Hiện còn phần search Todo, phần đổi màu
  return (
    <div className="max-w-3xl mx-auto mt-7 border border-black rounded">
      <h3 className="text-2xl text-center mb-5">Simple Todo App</h3>
      <TodoForm onSubmit={addTodo} edit={editItem} onUpdate={handleUpdate} />
      <br />
      <ListTodo todos={todos} removeTodo={removeTodo} updateTodo={updateTodo} />
      <br/>
      <SearchTodo />
    </div>
  );
}

export default Todo;
