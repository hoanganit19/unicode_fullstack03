import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div>
      <h1>useMemo</h1>
      <TodoList />
    </div>
  );
};

export default App;
/*
Hook useMemo
- Lưu trữ kết quả tính toán vào bộ nhớ đệm qua mỗi lần re-render
- Nếu không tính toán lại -> Trả về kết quả cũ từ bộ nhớ đệm
- Nếu tính toán lại -> Trả về kết quả mới
- Sử dụng kỹ thuật Memoization
*/
