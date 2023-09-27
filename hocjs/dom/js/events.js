var rangeInputList = document.querySelectorAll('input[type="range"]');

var finishEvent = new Event("finish");

if (rangeInputList.length) {
  rangeInputList.forEach(function (element) {
    element.addEventListener("input", function () {
      if (+this.value === 100) {
        element.dispatchEvent(finishEvent);
      }
    });
  });
}
