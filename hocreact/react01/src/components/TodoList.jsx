import { useState } from "react";

const TodoList = () => {
  const [name, setName] = useState("");
  const [todoList, setTodoList] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList([...todoList, name]);
    setName("");
  };
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleRemove = (index) => {
    // const todo = [...todoList];
    // todo.splice(index, 1);
    // setTodoList(todo);
    setTodoList(todoList.filter((_, _index) => +index !== +_index));
  };
  return (
    <div>
      <ul>
        {todoList.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button
              onClick={() => {
                handleRemove(index);
              }}
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Tên công việc..."
          onChange={handleChange}
          value={name}
        />
        <button>Thêm</button>
      </form>
    </div>
  );
};

export default TodoList;

/*
Tìm hiểu: 
- Lifecycle Component
- Hook useEffect
*/
