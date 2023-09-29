//Web Component -> Thành phần khác nhau
/*
header
footer
about

-> Tạo ra các thẻ HTML riêng biệt
*/

//Thành phần cấu tạo các Element

// console.log(HTMLElement);

// var a = document.createElement("a");
// console.log(a);

HTMLElement.prototype.getLength = function () {
  return this.innerText.length;
};

// var content = document.querySelector(".content");
// console.log(content.getLength());

// var text = document.querySelector(".text");
// console.log(text.getLength());

//Shadow DOM -> Đóng gói và tách thành DOM riêng biệt

//HelloWorld -> Kế thừa từ HTMLElement
var HelloWorld = function () {
  return Reflect.construct(HTMLElement, [], HelloWorld);
};

HelloWorld.prototype = Object.create(HTMLElement.prototype);

HelloWorld.prototype.connectedCallback = function () {
  var name = this.getAttribute("name");
  this.innerHTML = `
   <div class="hello-box">
    <h1>Xin chào: ${name}</h1>
   </div>
  `;
  var style = document.createElement("style");
  style.textContent = `
    .hello-box h1 {
        color: red;
    }
  `;
  this.prepend(style);
};

customElements.define("hello-world", HelloWorld);

//-> Ôn lại Function Constructor

//Bài tập: Xây dựng 1 web component có tên: image-box để hiển thị khung ảnh

/*
Có các thuộc tính sau
- link => Link ảnh cần hiển thị
- shadow => true/false -> Có hiển thị đổ bóng không?
- caption => Nội dung tiêu đề
- shadow-color => Màu của đổ bóng
- width => Chiều rộng của khung ảnh
- height => Chiều cao của khung ảnh
*/

var ImageBox = function () {
  return Reflect.construct(HTMLElement, [], ImageBox);
};

ImageBox.prototype = Object.create(HTMLElement.prototype);

ImageBox.prototype.connectedCallback = function () {
  var link = this.getAttribute("link");
  var shawdow = this.getAttribute("shadow");
  var caption = this.getAttribute("caption");
  var width = this.getAttribute("width");
  var height = this.getAttribute("height");
  var shadowColor = this.getAttribute("shadow-color");
  var shadowRoot = this.attachShadow({
    mode: "open",
  });

  var html = `<div class="image-box">
    <img src="${link}" width="${width ?? "auto"}" height="${height ?? "auto"}"/>
    ${caption ? "<p>" + caption + "</p>" : ""}
 </div>`;
  shadowRoot.innerHTML = html;

  //Thêm style
  var style = document.createElement("style");
  style.textContent = `
  .image-box {
    ${
      shawdow === "true"
        ? `box-shadow: 3px 3px 3px 3px ${shadowColor ?? "#000"}`
        : ""
    };
    display: inline-block;
    margin: 10px;
    border-radius: 10px;
  }

  .image-box img {
    max-width: 100%;
    display: block;
    border-radius: 10px 10px 0 0;
  }

  .image-box p {
    margin: 0;
    padding: 10px 0;
    text-align: center;
  }
  `;
  shadowRoot.prepend(style);
};

customElements.define("image-box", ImageBox);

/*
Buổi sau: 

- template
- slots
- cloneNode
*/
