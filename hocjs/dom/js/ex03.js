//DOM Event Listener
// var btn = document.querySelector(".btn");
// var removeBtn = document.querySelector(".remove-btn");
// var handleClick = function (e) {
//   //event = Event Object
//   console.log("Cảm ơn bạn 1");
//   //   console.log(this);
//   console.log(e);
// };
// btn.addEventListener("click", handleClick);

// removeBtn.addEventListener("click", function () {
//   btn.removeEventListener("click", handleClick);
// });

// btn.addEventListener("click", function () {
//   console.log("Cảm ơn bạn 2");
// });

// btn.onclick = function () {
//   console.log("Cảm ơn bạn 1");
// };

// btn.onclick = function () {
//   console.log("Cảm ơn bạn 2");
// };

var h2 = document.querySelectorAll(".content h2");
for (var index = 0; index < h2.length; index++) {
  //   var el = h2[index];
  h2[index].addEventListener("click", function () {
    console.log(this);
  });
}

// h2.forEach(function (el) {
//   el.addEventListener("click", function () {
//     console.log(el);
//   });
// });

// var content = document.querySelector(".content");
// content.addEventListener("click", function (e) {
//   console.log(e.target);
// });
