const initialState = {
  todoList: ["Item 1", "Item 2", "Item 3"],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todo/add": {
      return { ...state, todoList: [...state.todoList, action.payload] };
    }
    default: {
      return state;
    }
  }
};
