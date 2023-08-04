/*
var email = contact@unicode.vn

//Yêu cầu: Lấy ra username của email
//Ví dụ: 
- contact@unicode.vn => contact
- hoangan.web@gmail.com => hoangan.web
*/

// var email = "hoangan.web@gmail.com";

//Code
// var position = email.indexOf("@");
// var username = email.slice(0, position);
// console.log(`Username: ${username}`);

/*
var fullname = "TẠ HOÀNG AN";
Viết hàm kiểm tra 1 chuỗi có được viết hoa không?
*/

// var isUpperCase = function (str) {
//   //Code
//   return str === str.toUpperCase();
// };

// console.log(isUpperCase("TẠ HOÀNG AN"));

/*
var fullname = "tạ hoàng an";

Yêu cầu: Chuyển ký tự đầu của mỗi từ thành viết hoa

=> Tạ Hoàng An
*/

var fullname = "nguyễn Văn tuấn anh";

fullname = fullname.charAt(0).toUpperCase() + fullname.slice(1);

var result = "";

for (var i = 0; i < fullname.length; i++) {
  var char = fullname.charAt(i);

  var charNext = fullname.charAt(i + 1);
  if (char === " " && charNext !== " ") {
    var index = i + 1;
  }

  if (i !== index) {
    result += char;
  } else {
    result += fullname.charAt(index).toUpperCase();
  }
}

console.log(result);
