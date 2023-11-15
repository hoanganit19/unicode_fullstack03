//Xử lý URL
//http://127.0.0.1:51395/hocjs/bom/ex02.html?id=123&q=abc#home
console.log(window.location);
console.log(window.location.search);
const search = new URLSearchParams(window.location.search);
console.log(search.get("id"));
console.log(search.get("q"));

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  //   window.location.href = "https://google.com";
  window.location.reload();
});

//Window History PushState
const link = document.querySelector(".link");
link.addEventListener("click", (e) => {
  e.preventDefault();
  const url = e.target.getAttribute("href");
  window.history.pushState({}, "", url);
});

console.log(window.navigator);

const urlBox = document.querySelector(".url-box");
const urlInput = urlBox.querySelector("input");
urlInput.value = window.location.href;
const urlCopyBtn = urlBox.querySelector("button");
urlCopyBtn.addEventListener("click", (e) => {
  urlInput.select();
  const value = urlInput.value;
  window.navigator.clipboard.writeText(value);
  alert("Copy thành công");
});
