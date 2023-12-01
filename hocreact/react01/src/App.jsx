// import Form from "./components/Form";
// import Hello from "./components/Hello";

import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      {/* <Hello /> */}
      {/* <Form /> */}
      <TodoList />
    </div>
  );
}

export default App;

/*
- Props --> Truyền dữ liệu từ component cha xuống component con
- Props không thay đổi được trong nội bộ component

Muốn thay đổi dữ liệu trong nội bộ component --> Dùng state

- Thể hiện trạng thái của 1 component
- Khi state thay đổi --> Component re-render --> Giao diện được cập nhật
- State không được thay đổi trực tiếp mà cần phải thông qua hàm riêng biệt
- Hàm thay đổi State (setState) là hàm bất đồng bộ
- Để làm việc với State trong functional component --> Dùng React Hook
    - Hàm đặc biệt
    - Tuân thủ các nguyên tắc của React
    - Cho phép can thiệp vào các thành phần của React (State, Lifecycle,...)
*/
