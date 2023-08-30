var carousel = document.querySelector(".carousel");
var carouselInner = carousel.querySelector(".carousel-inner");
var carouselItems = carouselInner.children;

var carouselNav = carousel.querySelector(".carousel-nav");
var carouselDots = carousel.querySelector(".carousel-dots");
var btnNext = carouselNav.querySelector(".next");
var btnPrev = carouselNav.querySelector(".prev");

//Tính toán kích thước

//1. Tính kích thước của 1 itemlInner.clientWid
var itemWidth = carouselInner.clientWidth; //Lấy ra chiều rộng của element

//2. Tính tổng kích thước của tất cả các items
var totalWidth = itemWidth * carouselItems.length;

//Gán CSS cho các element
carouselInner.style.width = `${totalWidth}px`;

Array.from(carouselItems).forEach(function (item, index) {
  item.style.width = `${itemWidth}px`;
});

var gotoSlide = function (indexSlide) {
  index = indexSlide;
  position = 0 - indexSlide * itemWidth;
  carouselInner.style.translate = `${position}px`;
  renderDots(+index);
};

//Render ra dots navigation
var renderDots = function (index) {
  var htmlDots = "";
  Array.from(carouselItems).forEach(function (item, _index) {
    htmlDots += `<span class="${
      _index === index ? "active" : ""
    }" data-index="${_index}"></span>`;
  });
  carouselDots.innerHTML = htmlDots;

  carouselDots.addEventListener("click", function (e) {
    if (e.target.localName === "span") {
      var index = e.target.dataset.index;
      gotoSlide(index);
    }
  });
};

renderDots(0);

var position = 0; //Tính tọa độ mỗi lần di chuyển slide
var index = 0; //Lưu lại vị trí các slide
//Lắng nghe sự kiện khi click vào nút next
btnNext.addEventListener("click", function () {
  if (index < carouselItems.length - 1) {
    position -= itemWidth;
    index++;
  } else {
    position = 0;
    index = 0;
  }

  carouselInner.style.translate = `${position}px`;
  renderDots(index);
});

//Lắng nghe sự kiện khi click vào nút prev
btnPrev.addEventListener("click", function () {
  if (index > 0) {
    position += itemWidth;
    index--;
  } else {
    index = carouselItems.length - 1;
    position = 0 - totalWidth + itemWidth;
  }

  carouselInner.style.translate = `${position}px`;
  renderDots(index);
});

//Kéo slider
var isDrag = false;
var initialOffsetX;
var widthMove;
carouselInner.addEventListener("mousedown", function (e) {
  isDrag = true;
  initialOffsetX = e.offsetX;
});

carouselInner.addEventListener("mousemove", function (e) {
  e.preventDefault();
  if (isDrag) {
    //Tính được khoảng cách kéo
    widthMove = e.offsetX - initialOffsetX;
    if (Math.abs(widthMove) > 0) {
      carouselInner.style.translate = `${position + widthMove}px`; //Kéo tới đâu => Slide di chuyển tới đó
      carouselInner.style.transition = "none"; //Vô hiệu hóa transtion
    }

    // if (widthMove < 0) {
    //   //Next Slide
    //   if (widthMove <= -150) {
    //     console.log("Đạt ngưỡng");
    //   } else {
    //     console.log("Không đạt");
    //   }
    // }
  }
});

carouselInner.addEventListener("mouseup", function () {
  isDrag = false;
  carouselInner.style.transition = null;

  if (widthMove < 0) {
    if (widthMove <= -100) {
      gotoSlide(index + 1);
    } else {
      gotoSlide(index);
    }
  } else {
    if (widthMove >= 100) {
      gotoSlide(index - 1);
    } else {
      gotoSlide(index);
    }
  }

  widthMove = 0;
});
