//DOM CSS

//1. Tạo element

// var content = document.querySelector(".content");

// content.style.color = "#fff";
// content.style.fontStyle = "italic"; //font-style
// content.style.backgroundColor = "black";

//2. Thêm style cho element
// var css = {
//   color: "#fff",
//   fontStyle: "italic",
//   backgroundColor: "black",
//   textTransform: "uppercase",
// };

// Object.assign(content.style, css);

//Bài tập:
var content = document.querySelector(".content");
var btnList = document.querySelectorAll(".btn");

btnList.forEach(function (btn) {
  btn.addEventListener("click", function () {
    var type = this.dataset.type;
    var value = this.dataset.value;

    var css = {};
    css[type] = value;

    Object.assign(content.style, css);
  });
});
