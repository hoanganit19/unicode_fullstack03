//Function Expression
/*
Với cách này => Định nghĩa trước => Gọi hàm sau
*/
// var getMessage = function () {
//   //Function ẩn danh
//   console.log("Hoàng An");
// };

//Kiểm tra 1 biến xem có phải là 1 hàm hay không
//Kiểm tra bằng từ khóa typeof

// if (typeof getMessage === "function") {
//   console.log(`Đây là 1 hàm`);
//   getMessage();
// }

//Callback Function

/*
Truyền 1 đối số là 1 hàm => Callback
*/

var getA = function (fn, ...args) {
  setTimeout(function () {
    console.log(`getA`);
    if (typeof fn === "function") {
      fn(...args);
    }
  }, 2000); //milliseconds
};
//Cần 2s để hiển thị kết quả

var getB = function (text, title, content) {
  console.log(`getB: ${text}`, title, content);
};

var getC = function () {
  console.log(`getC`);
};

// getA(getC);
// getA(getB, "Hoàng An", "Unicode", "Fullstack");

// getA(function () {
//   getB("Hoàng An", "Unicode", "Fullstack");
// });
//Dùng 1 hàm không tham số để gọi hàm có tham số

/*
Khi getA chạy xong => getB được gọi
Hay nói cách khác: Hàm getB phụ thuộc vào getA
=> Giúp giải quyết vấn đề bất đồng bộ trong JS
Ví dụ: 
getA() => Cần 5s để hoàn thành
getB() => Cần 1s để hoàn thành

getA() => getB()

Kết quả: Hàm getB() sẽ hiển thị kết quả trước
*/

//Delay đoạn chương trình
// var handleShow = function (name, company) {
//   console.log(`Xin chào: ${name}`, company);
// };
// setTimeout(handleShow, 2000, "Hoàng An", "Unicode");

// setTimeout(
//   function (name) {
//     console.log(`Xin chào: ${name}`);
//   },
//   2000,
//   "Hoàng An",
// );

//setInterval => Lặp đi lặp 1 đoạn chương trình (có delay)

// var count = 0;
// var myInterval = setInterval(function () {
//   count++;
//   console.log(`Count: ${count}`);

//   if (count === 10) {
//     clearInterval(myInterval); //Xóa interval
//   }
// }, 1000);
