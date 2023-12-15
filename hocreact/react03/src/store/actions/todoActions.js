//Action Creator
export const addTodo = (todo) => {
  return {
    type: "todo/add",
    payload: todo,
  };
};

export const removeTodo = (index) => {
  return {
    type: "todo/delete",
    payload: index,
  };
};

export const completedTodo = (index, status) => {
  return {
    type: "todo/completed",
    payload: {
      index,
      status,
    },
  };
};
