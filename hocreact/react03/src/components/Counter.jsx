import { useContext } from "react";
import { AppContext } from "../App";

const Counter = () => {
  const { count, setCount } = useContext(AppContext);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default Counter;
