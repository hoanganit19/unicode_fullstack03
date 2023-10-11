var btn = document.querySelector(".btn");

var SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

//Thay đổi ngôn ngữ sang Tiếng Việt
recognition.lang = "vi-VN";

btn.addEventListener("click", function () {
  recognition.start();
  console.log("Hãy nói gì đó");
});

recognition.addEventListener("speechend", function () {
  console.log("Bạn đã nói xong");
});

recognition.addEventListener("result", function (e) {
  var transcript = e.results[0][0].transcript.replaceAll(".", "");
  console.log(transcript);
});

/*
Bài tập: 

- Hiển thị lên UI những gì bạn vừa nói
- Thực hành các hành động tương ứng
+ google => Mở trang google.com
+ youtube => Mở trang youtube.com
+ bản đồ, google maps => Mở trang maps.google.com 
+ facebook => Mở trang facebook.com
- Hiển thị trạng thái xử lý
*/
