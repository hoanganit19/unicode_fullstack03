/*
Vòng lặp while
=> Lặp với số lần lặp không xác định trước
=> Thực hiện kiểm tra điều kiện trước, sau đó thực hiện nội dung trong vòng lặp

Vòng lặp do while
=> Lặp với số lần lặp không xác định trước
=> Thực hiện nội dung trong vòng lặp trước, sau đó mới kiểm tra điều kiện
*/

// var i = 1;
// while (i <= 10) {
//   console.log("Xin chào: " + i);
//   i++;
// }

//S = 1 + 2 + 3 + 4 + ... + N

// var n = 10;
// var i = 1;
// var total = 0;
// while (i <= n) {
//   total += i;
//   i++;
// }

// console.log(`Total = ${total}`);

var i = 1;
//Điều kiện sai => Vẫn chạy => Chỉ được 1 lần
do {
  console.log(i);
  //   i++;
} while (i > 10);

//Điều kiện sai => Không chạy
while (i > 10) {
  console.log(i);
}

//=> Các Case Study thực tế => Học ở phần kiểu dữ liệu

/*
Từ khóa sử dụng trong vòng lặp

1. break
- Dừng vòng lặp trong khi vòng lặp chưa chạy hết
- Đảm bảo về mặt tốc độ của chương trình
- Đảm bảo tính đúng của chương trình

*/

// for (var i = 0; i < 10; i++) {
//   console.log(`i = ${i}`);

//   if (i === 1) {
//     break;
//   }
// }

//Ví dụ: Cần lặp 1000 lần, nhưng mà đến lần thứ 5 đã tìm ra kết quả => Thực break luôn

//Tìm số chẵn nhỏ nhất trong khoảng từ begin đến end

// var begin = 3;
// var end = 10;
// var result;

// for (var i = begin; i <= end; i++) {
//   if (i % 2 === 0) {
//     result = i;
//     break; //Thoát vòng lặp
//     //i = end; //Thoát vòng lặp
//   }
// }

// console.log(`Kết quả = ${result}`);

/*
2. continue
Bỏ qua lần lặp để đi tới lần lặp tiếp theo
*/

// for (var i = 1; i <= 10; i++) {
//   console.log(`Hoàng An ${i}`);
//   if (i === 5) {
//     continue;
//   }
//   console.log(`================ ${i}`);
//   console.log(`Lần lặp thứ: ${i}`);
// }

//Ví dụ: Tính tổng các số chẵn từ 1 đến N

var total = 0;
var n = 10;
for (var i = 1; i <= n; i++) {
  //   if (i % 2 === 0) {
  //     total += i;
  //   }

  //Bỏ qua các trường hợp là số lẻ
  if (i % 2 !== 0) {
    continue;
  }

  total += i;
}

console.log(`Total = ${total}`);

//Tính tổng các số không chia hết cho 3 từ 1 đến n

/*
Trên thực tế => Còn các vòng lặp: for in, for of => Học ở phần kiểu dữ liệu array, object
*/
