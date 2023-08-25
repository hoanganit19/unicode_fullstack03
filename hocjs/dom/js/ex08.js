/*
DOM Navigation
*/

//Truy cập thành phần cha
var btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  console.log(this);
  console.log(this.parentElement);
  console.log(this.parentElement.parentElement);
  console.log(this.parentNode);
  //   this.parentElement.dataset.count = 1;
  //   this.parentNode.dataset.count = 1;
});

//Truy cập thành phần con
var btn2 = document.querySelector(".btn-2");
btn2.addEventListener("click", function () {
  //   console.log(this.parentElement.querySelectorAll("ul li"));
  console.log(this.parentElement.children[1].children);
});

//Truy cập thành phần kế tiếp / phía trước (Ngang hàng)
// var productActive = document.querySelector(".products .active");
// var changeBtn = document.querySelector(".change");
// changeBtn.addEventListener("click", function () {
//   //   console.log(productActive.nextElementSibling);
//   //   productActive.classList.remove("active");
//   //   productActive.nextElementSibling.classList.add("active");
//   //   productActive = productActive.nextElementSibling;
//   //   console.log(productActive);
//   //   console.log(productActive.previousElementSibling);
// });

var products = document.querySelector(".products");
var productActive = products.querySelector(".active");
var nextBtn = document.querySelector(".next");
var prevBtn = document.querySelector(".prev");
nextBtn.addEventListener("click", function () {
  var currentElement = productActive.nextElementSibling;
  if (!currentElement) {
    currentElement = products.children[0];
  }

  currentElement.classList.add("active");

  productActive.classList.remove("active");
  productActive = currentElement;
});

//Bài tập: Bấm nút prev => Quay lại

prevBtn.addEventListener("click", function () {
  var currentElement = productActive.previousElementSibling;
  if (!currentElement) {
    currentElement = products.children[products.children.length - 1];
  }

  currentElement.classList.add("active");

  productActive.classList.remove("active");
  productActive = currentElement;
});
