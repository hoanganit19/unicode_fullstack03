var requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;

var cancelAnimationFrame =
  window.cancelAnimationFrame || window.mozCancelAnimationFrame;

var INTERVAL = 1000;
var count = 30;
var timer = 0;
var counterEl = document.querySelector(".counter");
var timerEl = counterEl.querySelector("h2");
var buttonEl = counterEl.querySelector("button");
buttonEl.disabled = true;

// var finishEvent = new Event("finish");
var finishEvent = new CustomEvent("finish", {
  detail: {
    path: window.location.pathname,
  },
});

var handleCounter = function (currentTime) {
  if (timer < currentTime) {
    count = count - 1;
    timer = currentTime + INTERVAL;
    timerEl.innerText = count;
  }

  if (count > 0) {
    requestAnimationFrame(handleCounter);
  } else {
    finishEvent.detail = "ABC";
    timerEl.dispatchEvent(finishEvent);
  }
};

requestAnimationFrame(handleCounter);

//Lắng nghe sự kiện khi chạy xong timer
timerEl.addEventListener("finish", function (e) {
  console.log(e);
  buttonEl.disabled = false;
  buttonEl.addEventListener("click", function () {
    window.location.href = "https://google.com";
  });
});

/*
- Trigger Event
- Web Component: 
+ HTMLElement
+ customElements
*/
