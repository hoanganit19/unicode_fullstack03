//DOM Nodes
// var title = document.querySelector(".title");
// console.log(title);

var content = document.querySelector(".content");
var addBtn = document.querySelector(".btn");

// var count = 0;
// addBtn.addEventListener("click", function () {
//   //Tạo 1 element node
//   var h1 = document.createElement("h1");
//   h1.innerText = "Unicode Academy: " + ++count;
//   h1.classList.add("title");
//   h1.id = "title";

//   //Đưa element node vào thẻ div content
//   //appendChild()
//   // content.appendChild(h1);
//   //   content.append(h1);
//   content.prepend(h1);
// });

//insertBefore
var h2 = document.createElement("h2");
h2.innerText = "Hello Hoàng An";
content.append(h2);

var h3 = document.createElement("h3");
h3.innerText = "Fullstack";
content.append(h3);

var p = document.createElement("p");
p.innerText = "Tôi là Hoàng An";
content.insertBefore(p, h3);

//replaceChild
var ul = document.createElement("ul");
var li = document.createElement("li");
li.innerText = "Xin chào 1";
ul.append(li);

var li = document.createElement("li");
li.innerText = "Xin chào 2";
ul.append(li);

var li = document.createElement("li");
li.innerText = "Xin chào 3";
ul.append(li);

content.replaceChild(ul, h2);

//removeChild
h3.remove();

//text node
var text = document.createTextNode("Hello");
content.append(text);
text.data = "Hello Unicode";

// console.log([text]);

// text.remove();

//comment node
var comment = document.createComment("Hello node");
content.append(comment);

//Lấy text node từ element
var pTextNode = p.childNodes[0];
pTextNode.data = "Tôi là Hoàng An Unicode";

//children -> Lấy html
