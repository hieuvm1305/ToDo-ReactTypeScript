import client from "./client";

// get
export const getTodoList = () => {
  return client.get(`/todo`);
};
export const getTodoDetail = (id: number) => {
  return client.get(`/todo/${id}`);
};

// add
export const addNewTodo = (params: object) => {
  return client.post(`/todo`, params);
};

// delete

export const deleteTodo = (id: string) => {
  return client.delete(`/todo/${id}`);
};

// edit

export const editTodo = (id: string, params : any) => {
  return client.put(`/todo/${id}`, params);
};
