//Event Object

// var btn = document.querySelector(".btn");

// btn.addEventListener("click", function (e) {
//   //e = event object
//   //   console.log([this]);
//   //   console.log(e.target);
//   //   console.log(this);
//   //   console.log(e);
// });

// btn.addEventListener("mousedown", function (e) {
//   console.log(e);
// });

// btn.addEventListener("mouseover", function (e) {
//   console.log(e);
// });

// var text = document.querySelector(".text");
// text.addEventListener("focus", function (e) {
//   console.log(e);
// });

//1. preventDefault()
//Ngăn hành động mặc định của HTML
var link = document.querySelector(".link");
link.addEventListener("click", function (e) {
  e.preventDefault(); //Chặn hành động mặc định của HTML
  console.log(this.href);
});

var form = document.querySelector(".form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(this.querySelector(".name").value);
});

var context = document.querySelector(".context");

document.addEventListener("contextmenu", function (e) {
  console.log(e);
  e.preventDefault();

  context.style.display = "block";
  context.style.top = e.clientY + "px";
  context.style.left = e.clientX + "px";
});

document.addEventListener("click", function () {
  console.log("Click vào document");
  context.style.display = "none";
});

//2. stopPropagation()

context.addEventListener("click", function (e) {
  e.stopPropagation(); //Ngăn tình trạng nổi bọt của thẻ html cha
  console.log("Click vào context");
});
