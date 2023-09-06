var chatbox = document.querySelector(".chatbox");
var form = chatbox.querySelector("form");
var messages = chatbox.querySelector(".messages");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  var inputEl = this.querySelector(".message");
  var messageValue = inputEl.value;

  if (messageValue === "") {
    alert("Vui lòng nhập tin nhắn");
    return;
  }

  //   var messageHtml = `
  //   <div class="message-item">
  //         ${messageValue}
  //   </div> `;

  //   messages.innerHTML += messageHtml;

  var div = document.createElement("div");
  div.classList.add("message-item");
  div.innerText = messageValue;

  var span = document.createElement("span");
  span.innerHTML = `&times;`;
  span.classList.add("remove");
  span.addEventListener("click", function () {
    handleRemove(div);
  });
  div.append(span);

  messages.append(div);

  inputEl.value = "";
});

var handleRemove = function (element) {
  if (confirm("Bạn có chắc chắn?")) {
    element.remove();
  }
};

//Lỗi bảo mật XSS khi sử dụng innerHTML
