const initialState = {
  todoList: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todos/add": {
      return { ...state, todoList: [...state.todoList, action.payload] };
    }
    case "todos/remove": {
      //Xác định index cần xóa
      const _index = action.payload;
      return {
        ...state,
        todoList: state.todoList.filter((_, index) => index !== _index),
      };
    }
    default: {
      return state;
    }
  }
};
