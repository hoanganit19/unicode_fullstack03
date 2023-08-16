//DOM HTML

// var btn = document.querySelector(".btn");
// var content = document.querySelector(".content");
// var result = document.querySelector(".result");
// btn.addEventListener("click", function () {
//   //Lấy nội dung của thẻ html có class là content
//   //   console.log(content.innerHTML);
//   //   console.log(content.innerText);
//   //   console.log(content.outerHTML);
//   //   console.log(content.textContent);
//   //   content.innerHTML = "<h3>Khóa học Fullstack</h3>";
//   //   content.innerText = "<h3>Khóa học Fullstack</h3>";
//   //   content.outerHTML = "<h3>Khóa học Fullstack</h3>";
//   //   content.remove();
//   result.innerHTML = content.innerHTML;
//   content.innerHTML = "";
// });

var link = document.querySelector(".content a");
// console.log(link.href);
// console.log(link.target);
// console.log(link.title);
// console.log(link.className);

// // console.log(link.getAttribute("data-columns"));
// console.log(link.dataset.columns);
// console.log(link.dataset.indexNumber);

link.href = "https://google.com";
link.target = "_self";
link.title = "Google";

// link.setAttribute("data-columns", 5);
link.dataset.columns = 5;
link.dataset.indexNumber = 123321;

//Thêm mới
link.dataset.animationDuration = "1s";
link.id = "link";

//Xóa
link.removeAttribute("target");
