import { useEffect } from "react";
import { useState } from "react";
import TodoForm from "./TodoForm";
import Message from "./Message";

const todoApi = `http://localhost:3000/todos`;
const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
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
      setMessage("Thêm công việc thành công");
    }
  };
  const deleteTodo = async (id) => {
    const response = await fetch(`${todoApi}/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      getTodos();
      setMessage("Xóa thành công");
    }
  };

  useEffect(() => {
    setMessage("");
  }, [message]);

  //Gọi hàm getTodos() --> Treo máy
  useEffect(() => {
    getTodos();
  }, []);
  const handleAddTodo = (todo) => {
    addTodo({ title: todo });
  };
  const handleRemove = (id) => {
    if (window.confirm("Bạn có chắc chắn?")) {
      deleteTodo(id);
    }
  };
  return (
    <div>
      <h1>Todo App</h1>
      <ul>
        {isLoading ? (
          <h3>Loading...</h3>
        ) : (
          todoList.map(({ id, title }) => (
            <li key={id}>
              {title} <button onClick={() => handleRemove(id)}>&times;</button>
            </li>
          ))
        )}
      </ul>
      <TodoForm onAddTodo={handleAddTodo} todoList={todoList} />
      <Message message={message} />
    </div>
  );
};

export default Todo;

/*
Custom Hook --> Tạo ra 1 hook riêng
- Có thể sử dụng các hook khác
- Tuân thủ nghiêm ngặt quy tắc về React Hook

Mouting, Unmouting --> Quá trình 1 component được đưa vào DOM và loại bỏ khỏi DOM
Sử dụng Cleanup để tránh rò rỉ bộ nhớ
*/
