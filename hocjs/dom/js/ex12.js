var handleBeforeUnload = function (e) {
  e.preventDefault();
  return (e.returnValue = "");
};

var loginForm = document.querySelector(".login");
loginForm.addEventListener("input", function (e) {
  if (e.target.defaultValue !== e.target.value) {
    window.addEventListener("beforeunload", handleBeforeUnload);
  } else {
    window.removeEventListener("beforeunload", handleBeforeUnload);
  }
});
loginForm.addEventListener("submit", function (e) {
  {
    e.preventDefault(); //Ngăn submit mặc định
    window.removeEventListener("beforeunload", handleBeforeUnload); //Xóa beforeunload
    this.submit(); //Submit lại
  }
});

// window.onbeforeunload = function () {
//   return "";
// };

var editor = document.querySelector(".editor");
editor.setAttribute("contenteditable", true);

var hash = "";
var result;
editor.addEventListener("keypress", function (e) {
  result = this.innerHTML;
  if (e.key === "#") {
    hash = "#";
  }

  if (hash.indexOf("#") === 0 && e.key !== " ") {
    if (e.key !== "#") {
      hash += e.key;
    }

    var value = this.innerText;
    result =
      value.slice(0, value.indexOf("#")) + `<span class="hash">${hash}</span>`;
  }

  if (e.key === " ") {
    hash = "";
  }
});

editor.addEventListener("blur", function () {
  this.innerHTML = result;
});

//Buổi sau:
//document.execCommand()
//Blob
//html2pdf
//Thực hành: Xây dựng editor tương tự google docs
