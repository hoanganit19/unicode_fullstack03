import { useState } from "react";
import "../assets/style.css";
import {
  addTodo,
  completedTodo,
  removeTodo,
} from "../store/actions/todoActions";
import { useDispatch, useSelector } from "../store/hook";
import Content from "./Content";
const TodoList = () => {
  const todoList = useSelector((state) => state.todoList);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== "") {
      const todo = { name, completed: false };
      dispatch(addTodo(todo));
      setName("");
    }
  };
  const handleRemove = (index) => {
    dispatch(removeTodo(index));
  };
  const handleCompleted = (index, status) => {
    dispatch(completedTodo(index, status));
  };
  return (
    <div>
      <ul>
        {todoList.map(({ name, completed }, index) => (
          <li key={index}>
            <input
              type="checkbox"
              onChange={(e) => handleCompleted(index, e.target.checked)}
            />
            <span className={completed ? "completed" : ""}>{name}</span>
            <button onClick={() => handleRemove(index)}>&times;</button>
          </li>
        ))}
      </ul>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tên..."
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <button>Add</button>
      </form>
      <Content />
    </div>
  );
};

export default TodoList;

/*
Gợi ý: 
- Sửa lại state TodoList --> Mỗi phần tử là 1 object
{
  name
  completed: false
}
- Tạo Event handler (Dựa vào event onchange của checkbox)
- Lấy index
- dispatch

Reducer: Viết case "todo/completed"
Cập nhật được completed

UI: Dựa vào giá trị của completed để hiển thị css
*/
