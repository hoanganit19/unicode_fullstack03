/*
1 Object bao gồm 2 phần
- Thuộc tính: Biến
- Phương thức: Hàm
*/

//Khai báo object
// var comments = {};
// console.log(comments);

// var customers = new Object();
// console.log(customers);

// //Kiểm tra 1 biến có phải object không?

// if (
//   !Array.isArray(comments) &&
//   typeof comments === "object" &&
//   comments !== null
// ) {
//   console.log("Đây là object");
// } else {
//   console.log("Không phải object");
// }

var comments = {
  name: "Hoàng An",
  email: "contact@unicode.vn",
  address: "Hà Nội",
  getEmail: function () {
    return "contact@unicode.vn";
  },
};

// comments.name = "Hoàng An Unicode";
// comments.position = "Giảng viên";

// delete comments.email;

console.log(comments);
// console.log(comments.name, comments.email, comments.address);
// console.log(comments["name"], comments["email"], comments["address"]);

// var users = [];
// console.log(users);

for (var key in comments) {
  if (typeof comments[key] === "function") {
    console.log(comments[key]());
  } else {
    console.log(comments[key]);
  }
}
