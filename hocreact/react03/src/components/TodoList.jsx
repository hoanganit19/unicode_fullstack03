import { useContext, useState } from "react";
import { AppContext } from "../App";

const TodoList = () => {
  const { state, dispatch } = useContext(AppContext);
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== "") {
      dispatch({
        type: "add_todo",
        payload: name,
      });
    }
  };
  return (
    <div>
      <ul>
        {state.todoList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tên..."
          onChange={(e) => setName(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default TodoList;
