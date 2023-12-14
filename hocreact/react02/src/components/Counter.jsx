import { useEffect, useState } from "react";

// let total = 0;
const Counter = () => {
  const [count, setCount] = useState(0);
  console.log("Render: " + count);
  // if (count < 5) {
  //   total += count;
  // }

  //   console.log("Total: " + total);
  // --> Lùi các công việc sang phía sau --> Side Effect
  // useEffect(() => {
  //   console.log("Count: " + count);
  //   return () => {
  //     console.log("Cleanup: " + count);
  //   };
  // });
  useEffect(() => {
    console.log("Mouting");
    return () => {
      console.log("Unmouting");
    };
  }, []);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      {console.log("Update UI: " + count)}
    </div>
  );
};

export default Counter;

/*
useEffect --> Xử lý các công việc ở dạng Side Effect (Công việc phụ, bên lề)
useEffect(callback, dependencies)
1. callback: Hàm để thực thi
- Nếu callback return về 1 hàm --> Hàm đó sẽ gọi là cleanup
+ Reset các giá trị của biến mà không sử dụng
+ Xóa các bộ nhớ đệm không sử dụng
+ Loại các event đã thêm ở lần render truwocs đó
+ Xóa các timer đã thêm ở lần render trước đó
--> Tránh rò rỉ bộ nhớ trong lập trình

2. dependencies: Điều kiện để hàm callback được thực thi
- null hoặc undefined --> Khi component re-render thì callback trong useEffect sẽ thực thi
- [] --> Chạy 1 lần sau lần render thứ nhất (Khi component được mount)
- [bien1, bien2, bien3] --> Khi 1 trong các biến trong dependencies thay đổi
 */
