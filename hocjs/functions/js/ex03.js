//Giải thuật đệ quy

// var showNumber = function (n) {
//   console.log(n);
//   //Khi dùng đệ quy => Có điều kiện dừng => Nếu không sẽ bị lặp vô hạn

//   if (n > 1) {
//     showNumber(n - 1);
//   }
// };

// showNumber(10);

//Ví dụ: Tính tổng không dùng vòng lặp
var sum = function (n) {
  //   if (n > 1) {
  //     n += sum(n - 1);
  //   }
  //   return n;
  if (n === 1) {
    return 1;
  }

  n += sum(n - 1);

  return n;
};
//10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1

console.log(sum(10));

/*
Tác dụng của đệ quy: 
=> Giải quyết các bài toán đa cấp
+ Menu đa cấp
+ Chuyên mục đa cấp

Nhược điểm: 
=> Chạy chậm
*/

//Tìm số fibonaci thứ 5
var fibonaci = function (n) {
  if (n === 1 || n === 2) {
    return 1;
  }

  return fibonaci(n - 1) + fibonaci(n - 2);
};

//Hiển thị 11 số fibinaci đầu tiên

var result = "";
for (var i = 1; i <= 20; i++) {
  result += fibonaci(i) + " ";
}

console.log(result);
