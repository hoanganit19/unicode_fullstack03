/*
Mảng là 1 kiểu dữ liệu phức hợp

Bên trong mảng sẽ có nhiều giá trị

Có thể mỗi giá trị là 1 kiểu dữ liệu khác nhau

Trong Javascript, mảng là object
*/

// var users = []; //Khai báo mảng

// console.log(users);
// console.log(typeof users);

var users = ["An", "Anh", "Đạt", 12];

//Mảng được xây dựng từ 1 hàm tạo Array

// console.log(Array.prototype);

// var users = new Array("An", "Anh", "Đạt");
// console.log(users);

//Kiểm tra 1 biến thuộc kiểu mảng

// if (Array.isArray(users)) {
//   console.log("Đây là kiểu mảng");
// }

//Lấy số lượng phần tử trong mảng
console.log(users.length);

//1. Thêm dữ liệu vào mảng
users[users.length] = "Quân";
users[users.length] = "Tuấn";

//2. Sửa => Phải xác định được index
users[3] = "Quang";

//3. Xóa => Phải xác định được index
// delete users[4];

//4. Duyệt mảng

console.log(users);

// for (var i = 0; i < users.length; i++) {
//   console.log(users[i]);
// }

// for (var index in users) {
//   console.log(users[index]);
// }

// for (var user of users) {
//   console.log(user);
// }

//Bài tập xóa mảng theo index

var indexDelete = 3;
var result = [];

for (var index in users) {
  if (+indexDelete === +index) {
    continue;
  }
  result[result.length] = users[index];
}
