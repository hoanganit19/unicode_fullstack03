var btn = document.querySelector(".btn");
var modalBox = document.querySelector(".modal-box");
var modalClose = modalBox.querySelector(".modal .close");
var modalOverlay = modalBox.querySelector(".overlay");

btn.addEventListener("click", function () {
  modalBox.classList.add("show");
});

/**
 * Bài tập: Click vào nút close và overlay => Tắt modal
 *
 */

var closeModal = function () {
  modalBox.classList.remove("show");
};

modalClose.addEventListener("click", closeModal);

modalOverlay.addEventListener("click", closeModal);
