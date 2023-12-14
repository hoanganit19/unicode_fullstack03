import { useState } from "react";
import Counter from "./components/Counter";
// import Todo from "./components/Todo";

const App = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      {show && <Counter />}
      <hr />
      <button onClick={() => setShow(!show)}>Toggle</button>
    </div>
  );
  // return <Todo />;
};

export default App;

/*
useEffect --> Xử lý các công việc ở dạng Side Effect (Công việc phụ, bên lề)

Mounting --> Khi component được đưa vào DOM (Sau khi component được render lần 1)
Umouting --> Khi component bị loại bỏ khỏi DOM
*/
