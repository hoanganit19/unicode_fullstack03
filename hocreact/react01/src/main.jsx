// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//Render UI
/*
1. React Element
2. ReactDOM
*/

//Tạo React Element
// const h1 = React.createElement(
//   "h1",
//   {
//     className: "title",
//   },
//   "Học lập trình không khó",
// );

// const h2 = React.createElement(
//   "h2",
//   {
//     className: "sub-title",
//   },
//   "Học React không khó",
// );
// const button = React.createElement(
//   "button",
//   {
//     className: "btn",
//     onClick: () => {
//       console.log("Click me");
//     },
//     style: {
//       color: "red",
//       fontWeight: "bold",
//     },
//   },
//   "Click me",
// );
// const liList = [...Array(100)].map((_, index) => {
//   return React.createElement("li", null, "Item " + (index + 1));
// });
// const ul = React.createElement("ul", null, ...liList);

// const getName = () => {
//   return "Hoàng An";
// };
// //Component
// //Hàm --> Functional Component
// //Class --> Class Component
// const Product = () => {
//   return React.createElement("h1", null, "Xin chào Unicode");
// };

// const div = React.createElement(
//   "div",
//   {
//     id: "main",
//     className: "content",
//   },
//   h1,
//   h2,
//   // ul,
//   button,
//   getName(),
//   <Product />,
// );
/*
Tạo thẻ ul thêm vào trước thẻ button
Tạo 100 thẻ li thêm vào trong ul
*/
// const course = "Khóa học React";

// const div = (
//   <div id="main" className="content">
//     <h1>Học lập trình không khó</h1>
//     <h2>Xin chào các bạn</h2>
//     <button>Click me</button>
//     {course}
//   </div>
// );

//Render React Element lên trình duyệt
ReactDOM.createRoot(document.querySelector("#root")).render(<App />);

//JSX (Javascript XML) --> Complier --> React Element --> React DOM --> HTML --> UI
