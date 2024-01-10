import { useLayoutEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [finish, setFinish] = useState(false);
  useLayoutEffect(() => {
    if (count === 5) {
      setFinish(true);
    }
  }, [count]);
  return (
    <div>
      {finish ? (
        <h1>Đã hoàn thành</h1>
      ) : (
        <>
          <h1>Count: {count}</h1>
          <button onClick={() => setCount(count + 1)}>+</button>
        </>
      )}
    </div>
  );
};

export default Counter;

/*
useEffect
- State thay đổi
- Re-render
- Repaint (Update giao diện)
- Cleanup useEffect
- Callback useEffect

useLayoutEffect
- State thay đổi
- Re-render
- Cleanup useEffect
- Callback useEffect
- Repaint (Update giao diện)
*/
