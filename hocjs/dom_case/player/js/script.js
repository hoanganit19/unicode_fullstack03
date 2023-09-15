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
  //Tính phần trăm
  var value = (audio.currentTime * 100) / audio.duration;

  if (!isDrag) {
    currentTimeEl.innerText = getTime(audio.currentTime);

    timerEl.value = value;
  }
});

var isDrag = false;
var isMouseDown = false;

timerEl.addEventListener("input", function () {
  // console.log("Đang kéo");
  var value = +this.value;

  //Chuyển phần trăm sang currentTime
  var currentTime = (value / 100) * audio.duration;

  currentTimeEl.innerText = getTime(currentTime);

  if (!isDrag) {
    audio.currentTime = currentTime;
  }
});

timerEl.addEventListener("mousedown", function () {
  isMouseDown = true;
});

document.addEventListener("mousemove", function () {
  if (isMouseDown) {
    isDrag = true;
  }
});

timerEl.addEventListener("change", function () {
  isDrag = false;
  isMouseDown = false;
  var value = this.value;
  var currentTime = (value / 100) * audio.duration;
  audio.currentTime = currentTime;
});

audio.addEventListener("pause", function () {
  iconBtn.classList.remove("fa-pause");
  iconBtn.classList.add("fa-play");
});

audio.addEventListener("play", function () {
  iconBtn.classList.remove("fa-play");
  iconBtn.classList.add("fa-pause");
});

audio.addEventListener("ended", function () {
  audio.currentTime = 0;
  timerEl.value = 0;
});

//Xử lý tăng giảm âm lượng
var volumeSlider = document.querySelector(".player .volume input");
var volumeIcon = volumeSlider.previousElementSibling;
var volumeValue = volumeSlider.nextElementSibling;

var volumeIconNode = document.createElement("i");
volumeIconNode.classList.add("fa-solid", "fa-volume-high");

var muteIconNode = document.createElement("i");
muteIconNode.classList.add("fa-solid", "fa-volume-off");

volumeIcon.append(volumeIconNode);

volumeSlider.addEventListener("input", function () {
  var value = +this.value;

  audio.volume = value / 100;

  volumeValue.innerText = `${value}%`;

  if (value === 0) {
    volumeIcon.append(muteIconNode);
    volumeIconNode.remove();
  } else {
    volumeIcon.append(volumeIconNode);
    muteIconNode.remove();
  }
});

var currentVolume;

volumeSlider.addEventListener("change", function () {
  currentVolume = this.value / 100;
});

volumeIcon.addEventListener("click", function () {
  if (audio.volume > 0) {
    audio.volume = 0;
    volumeIcon.append(muteIconNode);
    volumeIconNode.remove();
    volumeSlider.value = 0;
    volumeValue.innerText = 0;
  } else {
    audio.volume = currentVolume;
    volumeIcon.append(volumeIconNode);
    muteIconNode.remove();
    volumeSlider.value = currentVolume * 100;
    volumeValue.innerText = `${Math.round(currentVolume * 100)}%`;
  }
});

console.log(lyric);

var karaokeBtn = document.querySelector(".open-karaoke");
var karaoke = document.querySelector(".karaoke");
var karaokeClose = karaoke.querySelector(".close");
var karaokeContent = karaoke.querySelector(".karaoke-content");
var player = document.querySelector(".player");
karaokeBtn.addEventListener("click", function () {
  player.style.opacity = 0;
  karaoke.classList.add("show");

  setTimeout(function () {
    document.body.classList.add("show-karaoke");
    player.style.transition = `all 0.2s ease`;
    player.style.opacity = 1;
  }, 400);
});

karaokeClose.addEventListener("click", function () {
  karaoke.classList.remove("show");
  document.body.classList.remove("show-karaoke");
});

var songInfo = `
<p>Yêu vội vàng remix</p>
<p>Lê Bảo Bình</p>
`;

karaokeContent.innerHTML = songInfo;
var sentenceNumber = 2;
var currentScreen;
audio.addEventListener("timeupdate", function () {
  var currentTime = this.currentTime * 1000;

  var index = lyric.findIndex(function (item) {
    var words = item.words;
    return (
      currentTime >= words[0].startTime &&
      currentTime <= words[words.length - 1].endTime
    );
  });

  if (index !== -1) {
    //Tính thời gian kết thúc của từ cuối và thời gian bắt đầu của câu tiếp theo
    var sentence = lyric[index].words;
    var sentenceNext = lyric[index + 1].words;
    var time =
      sentence[sentence.length - 1].endTime - sentenceNext[0].startTime;

    if (Math.abs(time) > 10000) {
      setTimeout(function () {
        karaokeContent.innerHTML = songInfo;
      }, 5000);
    }

    handleColor(currentTime);
    var screen = Math.floor(index / sentenceNumber + 1);
    if (screen !== currentScreen) {
      var offset = (screen - 1) * sentenceNumber;
      if (index >= offset && index < offset + sentenceNumber) {
        var sentenceHtml = "";
        for (var i = offset; i < offset + sentenceNumber; i++) {
          var sentence = lyric[i].words
            .map(function (word) {
              return word.data;
            })
            .join(" ");

          sentenceHtml += `<p 
          data-start="${lyric[i].words[0].startTime}" 
          data-end="${lyric[i].words[lyric[i].words.length - 1].endTime}"
          data-last-word-start="${
            lyric[i].words[lyric[i].words.length - 1].startTime
          }"
          >

            ${sentence}
          <span>
            ${sentence}
          </span>
          </p>`;
        }

        karaokeContent.innerHTML = sentenceHtml;
      }

      currentScreen = screen;
    }
  }
});

/*
Màn hình 1: index = 0, index = 1
Màn hình 2: index = 2, index = 3
Màn hình 3: index = 4, index = 5

index = (screen - 1) * 2

screen = index / 2 + 1 -> Làm tròn xuống
*/

var handleColor = function (currentTime) {
  var sentences = karaokeContent.children;

  Array.from(sentences).forEach(function (sentence, index) {
    var startTime = sentence.dataset.start;
    var endTime = sentence.dataset.end;

    if (startTime && endTime) {
      //Tính số giây trong 1 cầu
      var sentenceTime = endTime - startTime;

      if (currentTime >= startTime && currentTime <= endTime) {
        var rate = ((currentTime - startTime) * 100) / sentenceTime;
        sentence.children[0].style.transition = `width ${sentenceTime}ms linear`;
        sentence.children[0].style.width = `${rate}%`;
        sentence.children[0].style.width = `100%`;
      }
    }
  });
};
