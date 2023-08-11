//Xử lý Number
console.log(Number.prototype);
console.log([Number]);

// var age = 30.5;

//Kiểm tra 1 biến có phải là số nguyên hay không?

// if (Number.isInteger(age)) {
//   console.log("Đây là số nguyên");
// }

var age = "30a123";
//Ép kiểu

// age = Number.parseInt(age);
// age = Number.parseFloat(age);
// age = +age;
// console.log(age, typeof age);

var a = 1;
var b = undefined;
var c = a - b;
// console.log(c);

//Những tình huống không tính toán được => Trả về NaN (Not A Number)
// if (Number.isNaN(c)) {
//   console.log("Không có kết quả");
// } else {
//   console.log(c);
// }

// var a = 1;
// var b = 0;
// var c = a / b; //Infinity => Vượt quá bộ nhớ lưu trữ cho phép
// console.log(c);

// var a = 1000;
// a = a ** a;

// if (a !== Infinity) {
//   console.log(a);
// } else {
//   console.log("Không hiển thị được");
// }

//toString() => Chuyển đổi số thành chuỗi
// var a = 10;
// // a = a + "";
// a = a.toString();
// console.log(a, typeof a);

//toFixed() => Làm tròn số và lấy phần thập phân, trả về 1 chuỗi
// var a = 10.556;
// a = a.toFixed(2);
// console.log(a, typeof a);

//toLocaleString
// var price = 12000000;
// price = price.toLocaleString();
// console.log(price);

//Bài tập: Viết 1 prototype cho hàm tạo Number
Number.prototype.format = function (
  decimal = 0,
  decimalSep = ".",
  thousandSep = ",",
) {
  if (decimal < -1) {
    return false;
  }

  if (decimal !== -1) {
    var value = this.toFixed(decimal);
  } else {
    var value = this.toString();
  }

  //   value = parseFloat(value);

  var left = value.split(".")[0];

  left = parseInt(left);

  left = left.toLocaleString().replaceAll(",", thousandSep);

  var right = "";

  if (value.split(".").length === 2) {
    right = value.split(".")[1];
    var number = 1;
    for (var i = 0; i < right.length; i++) {
      number *= 10;
    }

    if (decimal >= 0) {
      right = right / number;
      right = right.toFixed(decimal);
    }
  }

  if (right.length) {
    right = right.replace("0.", "");
    value = left + decimalSep + right;
  } else {
    value = left;
  }

  return value;
};

var price = 12000000.56789;

// console.log(price.format()); //12,000,001
// console.log(price.format(2)); //12,000,000.57
console.log(price.format(9, ".", " ")); //12 000 000.57
