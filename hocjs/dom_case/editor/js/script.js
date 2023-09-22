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

//Bài tập: Làm chúc năng new file
action.addEventListener("change", function () {
  var value = this.value;
  if (value === "new") {
    editor.innerText = "";
    editor.focus();
    spanChar.data = 0;
    spanWord.data = 0;
    filenameInput.value = "untitled";
    colorBtn.value = "#000000";
    heading.value = "P";
  }

  if (value === "save_txt") {
    var content = editor.innerText;
    var blob = new Blob([content]);
    var url = URL.createObjectURL(blob);

    var a = document.createElement("a");
    a.download = filenameInput.value + ".txt";
    a.href = url;
    a.click(); //Tự động click (Trigger Event)
  }

  if (value === "save_pdf") {
    var opt = {
      margin: 1,
      filename: filenameInput.value + ".pdf",
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(opt).from(editor).save();
  }
});

editor.addEventListener("blur", function () {
  console.log(this.innerText);
});

var imageList = document.querySelectorAll(".images .image-item");
imageList.forEach(function (imageItem) {
  imageItem.addEventListener("click", function () {
    var inputFile = this.children[0];
    inputFile.click();

    inputFile.addEventListener("change", function () {
      var file = this.files[0];
      console.log(file);
      var url = URL.createObjectURL(file);
      imageItem.style.backgroundImage = `url("${url}")`;
    });
  });
});
