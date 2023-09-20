//Event scroll
//Lấy giá trị tọa độ theo trục x, y
//scrollX -> Lấy tọa độ theo trục X
//scrollY -> Lấy tọa độ theo trục Y
//Thiết lập di chuyển scroll đến tọa độ mong muốn
// -> window.scroll(x, y)

var topBtn = document.querySelector(".top");
var header = document.querySelector(".header");
var headerHeading = header.children[0];
var headerNav = header.children[1];
var headerHeadingHeight = headerHeading.clientHeight;
var headerNavHeight = headerNav.clientHeight;

window.addEventListener("scroll", function () {
  var y = window.scrollY;

  //Hiển thị back to top
  if (y >= 50) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }

  //Fixed navigation
  if (y >= headerHeadingHeight) {
    headerNav.classList.add("fixed");
    document.body.style.paddingTop = `${headerNavHeight}px`;
  } else {
    headerNav.classList.remove("fixed");
    document.body.style.paddingTop = "";
  }
});

topBtn.addEventListener("click", function () {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

var navItems = headerNav.children;
var mainPadding = window
  .getComputedStyle(document.querySelector("main"))
  .getPropertyValue("padding-bottom");
mainPadding = parseInt(mainPadding);
Array.from(navItems).forEach(function (navItem) {
  navItem.addEventListener("click", function (e) {
    e.preventDefault();
    var hash = this.getAttribute("href");
    var section = document.querySelector(hash);
    //Lấy offsetTop của section -> Tọa độ của element so với top
    var offsetTop = section.offsetTop;
    window.scroll({
      top: offsetTop - headerNavHeight - mainPadding,
      behavior: "smooth",
    });
  });
});
