/*
Toán tử trong Javascript

1. Toán tử số học

+, -, *, /, % (Chia lấy dư), ** (Lũy thừa), 
++ (Phép tăng), -- (Phép giảm)
*/

// var a = "10.5";
// var b = 20;
// var c = parseInt(a) + parseInt(b);
// var c = +a + +b; //+tenbien => Ép kiểu về số
// console.log(c);

var count = 1;
var total;
//count++; //count = count+1;
//++count; //count = count+1;
// total = ++count;
// total = count++;
// console.log(`Count = ${count}`);
// console.log(`Total = ${total}`);

total = count++ + ++count; //1 + 3

// console.log(total);

/*
2. Toán tử logic
>, <, >=, <=, ==, ===, !=, !==
=> Trả về kết quả của kiểu dữ liệu boolean (true, false)
*/

// var a = "10";
// var b = 10;
// // var check = a < b;
// // var check = a == b; //Chỉ so sánh giá trị
// var check = +a === +b; //So sánh giá trị và kiểu dữ liệu
// console.log(check);

/*
3. Toán tử kết hợp
&&, ||, !
=> Kết hợp nhiều toán tử logic
*/

// var a = 10;
// var check = a >= 5 && a <= 10;
// console.log(check);

/*
4. Toán tử gán
*/
// var a = 10;
// // a = a + 10;
// a += 10; //a = a + 10
// a *= 10; //a = a * 10
// a /= 10; //a = a / 10
// a %= 10; //a = a % 10
// console.log(a);

/*
5. Toán tử 3 ngôi
dieukien ? giatridung : giatrisai
*/

// var a = 10;
// var b = a >= 10 ? "Đúng" : "Sai";
// console.log(b);

// var a = 10;
// var s = 5 + 2 + 3 + a >= 10 ? 20 : 10 + 5;
// console.log(s);

/*
6. Toán tử nullish (??)

Kiểm tra giá trị trước dấu ?? có khác null và undefined

=> Nếu khác gán giá trị trước dấu ??
=> Ngược lại, gán giá trị sau dấu ??
*/

// var a = 10;
// var b = a ?? "Không có";
// console.log(b);

/*
Bài tập: Viết lại toán tử nullish dưới dạng toán tử 3 ngôi
*/

// var b = a !== null && a !== undefined ? a : "Không có";

// console.log(b);

/*
7. Toán tử &&

Truthy
=> Tự động chuyển về true nếu ngữ cảnh cần sử dụng kiểu logic

Falsy
=> Tự động chuyển về false nếu ngữ cảnh cần sử dụng kiểu logic
false, 0, null, "", undefined, NaN
*/

var a = 1;
var b = a && "Unicode";

console.log(b);
