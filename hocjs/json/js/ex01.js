/*
Khi làm việc với các ngôn ngữ lập trình
-> Thông qua các kiểu dữ liệu
-> Cần phải đồng bộ dữ liệu giữa các nền tảng với nhau
-> Cần phải chuyển 1 kiểu dữ liệu chung mà các nền tảng hoặc ngôn ngữ đều đọc được: xml, json

JSON là gì? 

Viết tắt: JavaScript Object Notation

JSON là định dạng trao đổi dữ liệu văn bản dung lượng nhẹ

JSON là ngôn ngữ độc lập

JSON được "tự mô tả" và dễ hiểu

JSON là chuỗi
*/

var users = [
  {
    id: 1,
    name: "Hoàng An",
  },

  {
    id: 2,
    name: "Tuấn Anh",
  },
];

console.log(users);

//Chuyển về định dạng chung để trao đổi dữ liệu

var usersStr = JSON.stringify(users);
console.log(usersStr);

//Chuyển từ định dạng chung thành kiểu dữ liệu tương ứng của ngôn ngữ (ARRAY, OBJECT)
var users = JSON.parse(usersStr);
console.log(users);

console.log(JSON);
