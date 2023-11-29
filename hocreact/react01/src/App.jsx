// import Header from "./components/Header";
// import User from "./components/User";

import Header from "./components/Header";

const App = () => {
  // const title = "Xin chào Unicode";
  // const isAuth = false;
  // const status = false;
  // const arr = ["Item 1", "Item 2", "Item 3"];
  // //Xử lý bọc thẻ <h3> vào mỗi item và render UI
  // const handleClick = (e) => {
  //   console.log(e);
  //   console.log("Hello Unicode");
  // };
  // const handleClick2 = (title) => {
  //   console.log(title);
  // };
  const handleGetData = (data) => {
    //Nhận dữ liệu từ component Header
    console.log(data);
  };
  return (
    <div className="container">
      {/* <h1>Xin chào ReactJS</h1>
      <h2>{title}</h2>
      {isAuth ? (
        <h2>Chào mừng bạn quay trở lại</h2>
      ) : (
        <button>Vui lòng đăng nhập</button>
      )}
      {status && <h2>Hello ABC</h2>}
      {arr.map((item, index) => (
        <h3 key={index}>{item}</h3>
      ))}
      <button onClick={handleClick}>Click me</button>
      <button
        onClick={() => {
          handleClick2("Unicode");
        }}
      >
        Click me 2
      </button>
      <Header /> */}
      {/* <User name="User 1" email="user1@gmail.com" />
      <User name="User 2" email="user2@gmail.com" />
      <User name="User 3" email="user3@gmail.com" /> */}
      <Header onGetData={handleGetData} />
    </div>
  );
};

export default App;

/*
Props
- Truyền dữ liệu từ component cha sang component con

Render Props

Buổi sau: 
- State
- Lifecycle component
*/
