// console.log(Array.prototype);
console.log([Array]);

var users = ["An", "Đạt", "Tùng", "Dũng"];

//1. fill
// users.fill("Fullstack");

// console.log(users);

//2. forEach() => Duyệt mảng

// var result = users.forEach(function (user, index) {
//   console.log(user, index);
// });

//3. map() => Duyệt từ đầu đến cuối trả về 1 mảng

// var result = users.map(function (user, index) {
//   return `<h2>${user}</h2>`;
// });

// var html = result.join("");

// document.write(html);

//4. some() => Trả về true nếu 1 phần tử return về giá trị true

// var numbers = [1, 2, 3, 5, 7, 9];
// var check = numbers.some(function (number) {
//   if (number % 2 === 0) {
//     return true;
//   }

//   return false;
// });

// console.log(check);

/*
Tìm trong mảng số nguyên xem có phải tất cả là số lẻ hay không?
- Nếu đúng trả về "Tất cả là số lẻ"
- Nếu sai trả về "Trong mảng có số chẵn"
*/

// var numbers = [3, 5, 9, 11, 1];

// var check = !numbers.some(function (number) {
//   return number % 2 === 0;
// });

// if (check) {
//   console.log("Tất cả là số lẻ");
// } else {
//   console.log("Trong mảng có số chẵn");
// }

//5. every() => Trả về true nếu tất cả các phần tử trả về true

// var numbers = [3, 5, 9, 11, 2];
// //Kiểm tra trong mảng có phải đều là số lẻ không?

// var check = numbers.every(function (number) {
//   return number % 2 !== 0;
// });

// console.log(check);

//6. filter() => Lọc các phần tử và trả về 1 mảng

// var customers = [
//   "Nguyễn Văn Anh",
//   "Tạ Hoàng An",
//   "Phạm Văn Dũng",
//   "Nguyễn Thị Yến",
//   "Nguyễn Văn An",
// ];

// var keyword = "văn";

// var result = customers.filter(function (customer) {
//   return customer.toLowerCase().includes(keyword.toLowerCase());
// });

// console.log(result);

//Bài tập: Tìm theo từ khóa, chỉ cần từ khóa đó nằm trong họ và tên sẽ đều trả về kết quả

//7. find() => Tìm kiếm và trả về kết quả đầu tiên

// var customers = [
//   "Nguyễn Văn Anh",
//   "Tạ Hoàng An",
//   "Phạm Văn Dũng",
//   "Nguyễn Thị Yến",
//   "Nguyễn Văn An",
// ];

// var keyword = "văn";

// var result = customers.find(function (customer) {
//   return customer.toLowerCase().includes(keyword.toLowerCase());
// });

// console.log(result);

//8. findIndex() => Trả về index sau khi tìm được

// var customers = [
//   "Nguyễn Văn Anh",
//   "Tạ Hoàng An",
//   "Phạm Văn Dũng",
//   "Nguyễn Thị Yến",
//   "Nguyễn Văn An",
// ];

// var keyword = "an";

// var result = customers.findIndex(function (customer) {
//   return customer.toLowerCase().includes(keyword.toLowerCase());
// });

// console.log(result);

//9. findLastIndex() => Tìm index cuối cùng

//10. findLast() => Trả về kết quả cuối cùng

//11. reduce()

// var numbers = [5, 1, 9, 2];

// var result = numbers.reduce(function (prevValue, currentValue) {
//   //   console.log(prevValue, currentValue);
//   //   return currentValue;
//   console.log(prevValue);
//   return prevValue + currentValue;
// }, 0);

// console.log(`Kết quả = ${result}`);

//Bài tập: Tìm max sử dụng reduce

var numbers = [5, 1, 9, 2];

var max = numbers.reduce(function (max, current) {
  //Code
  //   if (max < current) {
  //     return current;
  //   }

  //   return max;
  return max < current ? current : max;
});

console.log(`Max: ${max}`);

var li = document.getElementsByTagName("li");
// for (var i = 0; i < li.length; i++) {
//   console.log(li[i]);
// }

// li = Array.from(li); //Ép về kiểu mảng

// li.forEach(function (item) {
//   console.log(item);
// });

var users = ["An", "hoangan.web@gmail.com"];

// var users2 = users;
//Thực hiện copy
// var users2 = users.map(function (user) {
//   return user;
// });

var users2 = [...users]; //Spread Operator

//JSON

users2[1] = "contact@unicode.vn";

console.log(users);
console.log(users2);

//Giải thuật đệ quy liên quan đến mảng => Xử lý các bài toán đa cấp
