export const addTodo = (name) => {
  return {
    type: "todos/add",
    payload: name,
  };
};

export const removeTodo = (index) => {
  return {
    type: "todos/remove",
    payload: index,
  };
};
