// import Counter from "./components/Counter";
import { createContext, useState } from "react";
import Usd from "./components/Usd";
import Vnd from "./components/Vnd";
export const AppContext = createContext();
const App = () => {
  const [count, setCount] = useState(0);
  //Xử lý logic tăng biến count tại đây
  const [vnd, setVnd] = useState(0);
  const [usd, setUsd] = useState(0);

  return (
    <AppContext.Provider
      value={{
        count,
        setCount,
        usd,
        vnd,
        setUsd,
        setVnd,
      }}
    >
      {/* <Counter /> */}
      <Usd />
      <Vnd />
    </AppContext.Provider>
  );
};

export default App;
/*
React Context
useContext

--> Truyền dữ liệu giữa component cha xuống component con không cần thông qua Props

A => B => C => D => E

Context: 
- Object Context --> Chứa dữ liệu được gửi đi
- Provider --> Gửi dữ liệu vào context
- Consumer --> Nhận dữ liệu (useContext)
*/
