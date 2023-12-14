import TodoList from "./components/TodoList";
import { createContext, useReducer } from "react";
export const AppContext = createContext();
const App = () => {
  //   const [todoList, setTodoList] = useState();
  const reducer = (state, action) => {
    switch (action.type) {
      case "add_todo": {
        return { ...state, todoList: [...state.todoList, action.payload] };
      }
    }
  };
  const initialState = {
    todoList: ["CV 1", "CV 2"],
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <TodoList />
    </AppContext.Provider>
  );
};

export default App;
