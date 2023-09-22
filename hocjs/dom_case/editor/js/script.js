var editor = document.querySelector(".editor");
var action = document.querySelector(".action");
var filenameInput = document.querySelector(".filename");

var boldBtn = document.querySelector(".bold");
var italicBtn = document.querySelector(".italic");
var underlineBtn = document.querySelector(".underline");
var colorBtn = document.querySelector(".color");
var heading = document.querySelector(".heading");

//Thay đổi editor => contenteditable

editor.setAttribute("contenteditable", true);
editor.focus();

//Counter
var counterEl = document.querySelector(".counter");
var spanCharEl = document.createElement("span");
spanCharEl.innerText = `Ký tự: `;
var spanChar = document.createTextNode(0);
spanCharEl.append(spanChar);
counterEl.append(spanCharEl);

var spanWordEl = document.createElement("span");
spanWordEl.innerText = `Số từ: `;
var spanWord = document.createTextNode(0);
spanWordEl.append(spanWord);
counterEl.append(spanWordEl);

boldBtn.addEventListener("click", function () {
  document.execCommand("bold");
  //   this.classList.add("active");
});

italicBtn.addEventListener("click", function () {
  document.execCommand("italic");
});

underlineBtn.addEventListener("click", function () {
  document.execCommand("underline");
});

colorBtn.addEventListener("input", function () {
  document.execCommand("styleWithCSS", false, true);
  document.execCommand("foreColor", false, this.value);
});

heading.addEventListener("change", function () {
  var value = this.value;

  document.execCommand("formatBlock", false, value);
});

//Xử lý đếm
editor.addEventListener("input", function () {
  var content = this.innerText;

  var charCount = content.trim().length;
  spanChar.data = charCount;

  var wordCount = content.trim().split(/\s+/).length;

  spanWord.data = wordCount;
});
