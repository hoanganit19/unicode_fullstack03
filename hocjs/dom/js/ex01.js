/*
DOM = Document Object Model

Các loại DOM: 

1. DOM Element: Truy xuất vào các thẻ html

2. DOM CSS: Thay đổi CSS Inline

3. DOM Event: Tác động các sự kiện lên các thẻ html

4. DOM HTML: Chỉnh sửa lại nội dung và thuộc tính HTML

5. DOM Navigation: Truy xuất tới các element theo phân cấp cha con

6. DOM Event Listener: Lắng nghe các sự kiện

7. DOM Node: Thao tác với HTML thông qua object
*/

//1. DOM Element
/*
- Truy xuất vào thẻ html thông qua id
document.getElementById(id)

- Truy xuất vào thẻ html thông qua class
document.getElementsByClassName(class)

- Truy xuất vào thẻ html thông qua tag name
document.getElementsByTagName(tag);

- Truy xuất vào thẻ html thông qua css selector
document.querySelector(selector) => Lấy element đầu tiên
document.querySelectorAll(selector) => Lấy tất cả element
*/
// var title = document.getElementById("title");
// console.log(title, typeof title);
// console.log(title.innerText);

// var title = document.getElementsByClassName("title");
// for (var index = 0; index < title.length; index++) {
//   console.log(title[index].innerText);
// }

// var title = document.getElementsByTagName("h1");
// console.log(title);

// var title = document.querySelector("h1.title");
// var title = document.querySelectorAll(".title");
// title.forEach(function (element) {
//   console.log(element.innerHTML);
// });

// var title = document.querySelector(".content .title");
// var p = document.querySelector(".content p");
// console.log(title);
// console.log(p);

var content = document.querySelector(".content");
var title = content.querySelector(".title");
var p = content.querySelector("p");
console.log(title);
console.log(p);
