import { useSelector, useDispatch } from "react-redux";
import { counterSlice } from "../redux/slices/counterSlice";
const { increment, decrement } = counterSlice.actions;
const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment(10));
  };
  const handleDecrement = () => {
    dispatch(decrement(5));
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default Counter;
