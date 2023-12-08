import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const TodoForm = ({ onAddTodo, todoList }) => {
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodo(title);
  };
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  useEffect(() => {
    setTitle("");
  }, [todoList]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Tên..."
        onChange={handleChange}
        value={title}
      />
      <button>Thêm</button>
    </form>
  );
};

export default TodoForm;

TodoForm.propTypes = {
  onAddTodo: PropTypes.func,
  todoList: PropTypes.array,
};
