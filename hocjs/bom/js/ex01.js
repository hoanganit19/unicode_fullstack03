//BOM = Browser Object Model
// --> API trên trình duyệt
/*
1. window.open() --> Mở trang web mới
2. window.location --> Xử lý URL
3. window.history --> Xử lý lịch sử trình duyệt
4. Navigator
*/
const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
let openObj;
openBtn.addEventListener("click", function () {
  openObj = window.open(
    "https://google.com",
    "google",
    // "width=200,height=200,top=200,left=100",
  );
});

// closeBtn.addEventListener("click", function () {
//   openObj.close();
// });
