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
  const addTodo = async (data) => {
    const response = await fetch(todoApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      getTodos();
    }
  };

  //Gọi hàm getTodos() --> Treo máy
  useEffect(() => {
    getTodos();
  }, []);
  const handleAddTodo = (todo) => {
    addTodo({ title: todo });
  };
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
      <TodoForm onAddTodo={handleAddTodo} todoList={todoList} />
    </div>
  );
};

export default Todo;
