import client from "./client";

export const getTodoList = () => {
  return client.get(`/todo`);
};

export const addTodo = (params) => {
  return client.post(`/todo`, params);
};
export const deleteTodoTask = (id) => {
  return client.delete(`/todo/${id}`);
};

export const editTodoTask = (id, params) => {
  return client.put(`/todo/${id}`, params);
};
