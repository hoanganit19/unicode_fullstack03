import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../redux/middlewares/todoMiddleware";
import { todoSlice } from "../redux/slices/todoSlice";
const { updateMessage } = todoSlice.actions;

const Todos = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo.todoList);
  const status = useSelector((state) => state.todo.status);
  const message = useSelector((state) => state.todo.message);
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  if (status === "pending") {
    return <h3>Loading...</h3>;
  }

  if (status === "error") {
    return <h3>Network Error...</h3>;
  }

  return (
    <div>
      <h2>Todo App</h2>
      <button
        onClick={() =>
          dispatch(updateMessage("Unicode: " + Math.random() * 1000))
        }
      >
        Update
      </button>
      {message}
      {todoList.map(({ id, title }) => (
        <h3 key={id}>{title}</h3>
      ))}
    </div>
  );
};

export default Todos;
