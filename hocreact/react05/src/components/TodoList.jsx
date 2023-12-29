import { useState, useMemo, useCallback } from "react";
import { v4 as uuid } from "uuid";
import "../assets/style.css";
import TodoCount from "./TodoCount";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Vui lòng nhập tên");
      return;
    }
    setTodoList([
      ...todoList,
      {
        id: uuid(),
        name,
        completed: false,
      },
    ]);
    setName("");
  };
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleCompleted = (id, status) => {
    setTodoList(
      todoList.map((item) => {
        if (id === item.id) {
          item.completed = status;
        }
        return item;
      }),
    );
  };

  const total = todoList.length; //Tổng tất cả công việc
  const totalCompleted = useMemo(() => {
    return todoList.filter((item) => {
      return item.completed;
    }).length;
  }, [todoList]);
  const totalUncompleted = total - totalCompleted;

  //Kiểu dữ liệu tham chiếu
  //Mỗi lần re-render -> Tạo function mới
  const handleClear = useCallback(() => {
    setTodoList([]);
  }, []);

  return (
    <div className="todo">
      <h2>Todo App</h2>
      <ul>
        {todoList.map(({ id, name, completed }) => (
          <li key={id} className={`${completed ? "completed" : ""}`}>
            <input
              type="checkbox"
              defaultChecked={completed}
              onChange={(e) => {
                handleCompleted(id, e.target.checked);
              }}
            />
            <span>{name}</span>
          </li>
        ))}
      </ul>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tên công việc..."
          onChange={handleChange}
          value={name}
        />
        <button>Thêm</button>
      </form>
      <TodoCount
        total={total}
        totalCompleted={totalCompleted}
        totalUncompleted={totalUncompleted}
        onClear={handleClear}
      />
    </div>
  );
};

export default TodoList;
/*
- Lấy dữ liệu từ input khi submit form
- Cập nhật dữ liệu vào state todoList
{
    id: ngau nhien
    name: du lieu input
    completed: false
}
*/
