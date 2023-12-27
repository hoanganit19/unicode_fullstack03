import { useEffect, useRef, useState } from "react";
import Content from "./Content";
import color from "../utils/color";

const Counter = color(function Counter() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const a = { current: 0 };
  const handleUpdate = () => {
    // countRef.current = 10;
    console.log(countRef);
    console.log(a);
  };
  const handleIncrement = () => {
    setCount(count + 1);
    countRef.current++;
    a.current++;
  };

  const inputRef = useRef();
  useEffect(() => {
    console.log(inputRef);
    inputRef.current.focus();
    inputRef.current.style.width = "400px";
  }, []);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleUpdate}>Update</button>
      <Content count={1} />
      <input type="text" placeholder="Từ khóa tìm kiếm..." ref={inputRef} />
    </div>
  );
});

export default Counter;
//Cha Render -> Con Render
//Phân tích giải pháp: Khi nào props thay đổi -> Cho phép component Re-render
//React: Cung cấp sẵn HOC (Higher Order Component): React.memo()
/*
Tự định nghĩa HOC
- Tạo 1 hàm nhận vào 1 tham số là component
- Trả về 1 component mới, trong component mới sẽ trả về component ban đầu

Refs:
- 1 thành phần của React
- 1 object (Thuộc tính current)
- Lưu lại giá trị cuối cùng sau mỗi lần re-render
- Không bị re-render khi ref thay đổi
- Có thể thay đổi trực tiếp ref
- Để tạo ref trong React, dùng hook useRef
- Tham chiếu tới 1 element -> Trả về Node Element giúp thao tác với DOM
*/
