import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
let isSubmit = false;
const TodoForm = ({ onAddTodo, todoList }) => {
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodo(title);
    isSubmit = true;
  };
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  useEffect(() => {
    setTitle("");
    isSubmit && toast("Thêm công việc thành công");
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
      <ToastContainer />
    </form>
  );
};

export default TodoForm;

TodoForm.propTypes = {
  onAddTodo: PropTypes.func,
  todoList: PropTypes.array,
};
