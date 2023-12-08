import { useEffect } from "react";
import { useState } from "react";
import TodoForm from "./TodoForm";

const todoApi = `http://localhost:3000/todos`;
const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const getTodos = async () => {
    const response = await fetch(todoApi);
    const todos = await response.json();
    setTodoList(todos);
    setLoading(false);
  };

  //Gọi hàm getTodos() --> Treo máy
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div>
      <h1>Todo App</h1>
      <ul>
        {isLoading ? (
          <h3>Loading...</h3>
        ) : (
          todoList.map(({ id, title }) => <li key={id}>{title}</li>)
        )}
      </ul>
      <TodoForm />
    </div>
  );
};

export default Todo;
