import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "../redux/actions/todoActions";
const TodoList = () => {
  const todoList = useSelector((state) => state.todo.todoList);
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(name));
    setName("");
  };
  const handldRemove = (index) => {
    if (confirm("Bạn có chắc chắn?")) {
      dispatch(removeTodo(index));
    }
  };
  return (
    <div>
      <ul>
        {todoList.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => handldRemove(index)}>&times;</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name..."
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default TodoList;

/* 
Gợi ý: 
- Lấy dữ liệu từ form
- Viết action reducer
- Dispatch
*/
