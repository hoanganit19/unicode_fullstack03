var audio = document.querySelector("audio");
var timerEl = document.querySelector(".player input");
var currentTimeEl = timerEl.previousElementSibling;
var durationEl = timerEl.nextElementSibling;
var playBtn = document.querySelector(".player .play-btn");

var getTime = function (seconds) {
  var mins = Math.floor(seconds / 60);

  //Tính ra được số giây còn lại
  seconds = seconds - mins * 60;

  seconds = Math.floor(seconds);

  return `${mins < 10 ? "0" + mins : mins}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
};
audio.addEventListener("loadeddata", function () {
  durationEl.innerText = getTime(audio.duration);
});

var iconBtn = document.createElement("i");
iconBtn.classList.add("fa-solid", "fa-play");

playBtn.append(iconBtn);

playBtn.addEventListener("click", function () {
  //audio.paused => Lấy trạng thái của bài nhạc
  if (audio.paused) {
    audio.play(); //Phát nhạc
    iconBtn.classList.remove("fa-play");
    iconBtn.classList.add("fa-pause");
  } else {
    audio.pause(); //Dừng nhạc
    iconBtn.classList.remove("fa-pause");
    iconBtn.classList.add("fa-play");
  }
});

audio.addEventListener("timeupdate", function () {
  currentTimeEl.innerText = getTime(audio.currentTime);

  //Tính phần trăm
  var value = (audio.currentTime * 100) / audio.duration;

  timerEl.value = value;
});

timerEl.addEventListener("input", function () {
  console.log("Đang kéo");
});

timerEl.addEventListener("change", function () {
  console.log("kéo xong");
});
