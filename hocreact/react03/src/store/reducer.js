export const initialState = {
  todoList: [
    {
      name: "CV 1",
      completed: false,
    },
    {
      name: "CV 2",
      completed: false,
    },
  ],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "todo/add": {
      return { ...state, todoList: [...state.todoList, action.payload] };
    }
    case "todo/delete": {
      const _index = action.payload;
      return {
        ...state,
        todoList: state.todoList.filter((todo, index) => index !== _index),
      };
    }

    case "todo/completed": {
      const todoList = [...state.todoList];
      const { index, status } = action.payload;
      todoList[index].completed = status;

      return { ...state, todoList };
    }
  }
};
