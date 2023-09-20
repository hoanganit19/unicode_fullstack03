//Event load -> Khi tất cả tài nguyên được tải xong (ảnh, video,...)
// window.onload = function () {
//   console.log("Hello Unicode");
// };

var preloader;

//Event DOMContentLoaded -> Khi cây DOM được hình thành
document.addEventListener("DOMContentLoaded", function () {
  //   console.log("DOM Loaded");
  //   var img = document.querySelector("img");
  //   console.log(img.width);
  //   console.log(img.height);
  preloader = document.querySelector(".preloader");
});

window.addEventListener("load", function () {
  //   console.log("Hello Unicode");
  //   var img = document.querySelector("img");
  //   console.log(img.width);
  //   console.log(img.height);
  preloader.classList.add("hide");
  setTimeout(function () {
    preloader.remove();
  }, 400);
});
