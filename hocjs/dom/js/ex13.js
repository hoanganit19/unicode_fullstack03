/*
Custom Event
- Kỹ thuật để tạo ra 1 event mới để giải quyết 1 khối lượng công việc
- Sử dụng thông qua new Event(), new CustomEvent()

Các bước định nghĩa Custom Event

1. Xác định rõ event cần định nghĩa là gì? (Logic, tên event)

2. Xác định element được áp dụng event -> Sử dụng hàm dispatchEvent để lan tỏa hành động
*/

var finishEvent = new Event("finish");
var slider = document.querySelector(".slider");
slider.addEventListener("input", function (e) {
  if (+this.value === 100) {
    finishEvent.hello = "Unicode";
    slider.dispatchEvent(finishEvent);
  }
});

slider.addEventListener("mousemove", function (e) {
  finishEvent.offsetX = e.offsetX;
  finishEvent.offsetY = e.offsetY;
});

//Listener
slider.addEventListener("finish", function (e) {
  console.log(e);
  //   console.log("Hoàn thành");
});
