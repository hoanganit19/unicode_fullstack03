//DOM Event
/*
Gán các sự kiện cho các element

Cần phải có: 
- Tên sự kiện
- Hàm thực thi: eventHandler
*/

var handleClick = function () {
  console.log("Xin chào");
};

var btn = document.querySelector(".btn");
var title = document.querySelector(".title");
// btn.onclick = handleClick;
btn.ondblclick = handleClick;

title.onmouseover = function () {
  console.log("Hoàng An");
};

title.onmouseout = function () {
  console.log("Fullstack");
};

var nameInput = document.querySelector(".name");
// nameInput.onchange = function () {
//   console.log(nameInput.value);
// };
nameInput.onkeyup = function (e) {
  console.log(e.key);
};
