var number = 10;

if (number >= 10) {
  console.log(`Thỏa mãn điều kiện`);
} else {
  console.log(`Không thỏa mãn điều kiện`);
}

/*
Bài tập: 
Tính lương thực nhận của 1 nhân viên

var total = 10000000;

Hiển thị lương thực nhận dựa vào công thức sau

1. Tổng lương < 5tr => Thuế = 3%
2. Tổng lương từ 5tr đến 15tr => Thuế 5%
3. Tổng lương từ 15 triệu trở lên => Thuế 10%

Lương thực nhận = tổng - thuế
*/

var total = 15000000;
var tax = 0;
if (total < 5000000) {
  tax = 3;
} else if (total >= 5000000 && total <= 15000000) {
  tax = 5;
} else {
  tax = 10;
}

var income = total - (tax * total) / 100;

console.log(`Tổng = ${income}`);
