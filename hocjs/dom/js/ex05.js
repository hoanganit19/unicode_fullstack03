// var btn = document.querySelector(".btn");
// var content = document.querySelector(".content");
// btn.addEventListener("click", function () {
//   //   var className = content.className;
//   //   if (!className.includes("hide")) {
//   //     className += " hide";
//   //     this.innerText = "Hiện";
//   //   } else {
//   //     className = className.replace("hide", "").trim();
//   //     this.innerText = "Ẩn";
//   //   }
//   //   content.className = className;
//   //Thêm class mới
//   //   content.classList.add("block-1", "block-2");
//   //Xóa class
//   //   content.classList.remove("block-1", "block-2");
//   //   if (content.classList.contains("hide")) {
//   //     content.classList.remove("hide");
//   //   } else {
//   //     content.classList.add("hide");
//   //   }

//   content.classList.toggle("hide"); //Chưa có => thêm mới, có rồi => xóa
// });

var h2 = document.querySelectorAll(".lists h2");
var counter = document.querySelector(".counter");
counter.innerText = `Đã xóa 0`;
var count = 0;
h2.forEach(function (el) {
  el.addEventListener("click", function () {
    this.classList.toggle("delete");
    if (this.classList.contains("delete")) {
      count++;
    } else {
      count--;
    }

    counter.innerText = `Đã xóa ${count}`;
  });

  el.addEventListener("dblclick", function () {
    this.remove();
  });
});
