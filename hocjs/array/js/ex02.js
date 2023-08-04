console.log(Array.prototype);

var users = ["Item 1", "Item 2", "Item 3", "Item 4"];

//1. length => Trả về số lượng phần tử mảng

// console.log(users.length);

//2. at() => Lấy 1 phần tử theo index

// console.log(users.at(1));
// console.log(users[1]);

//3. concat(arr1, arr2,...) => Nối mảng

// console.log(users.concat([1, 2, 3], [4, 5, 6]));

// console.log(users.concat("Item 4"));

//4. indexOf(value) => Tìm phần tử đầu tiên trong mảng, nếu tìm thấy trả về index, không tìm thấy trả về -1

// console.log(users.indexOf("Item 21"));

//5. lastIndexOf(value) => Tìm giống indexOf(), trả về vị trí cuối

// console.log(users.lastIndexOf("Item 2"));

//6. inclues(value) => Tìm phần tử trong mảng => Trả về true/false

// console.log(users.includes("Item 31"));

//7. slice(start, end) => Cắt mảng

// console.log(users.slice(-2));

//8. splice(index, number) => Xóa number phần tử từ vị trí index
// users.splice(1, 1);
// console.log(users);

//9. push(value1, value2,...) => Thêm phần tử vào cuối mảng và trả về số lượng phần tử sau khi thêm

// var count = users.push("A", "B", "C");

// console.log(users, count);

//10. unshift(value1, value2, value3...) => Thêm phần tử vào đầu mảng và trả về số lượng phần tử sau khi thêm

// var count = users.unshift("A", "B", "C");
// console.log(users, count);

//11. pop() => Xóa phần tử cuối mảng và hiển thị giá trị phần tử vừa xóa

// var lastDelete = users.pop();
// console.log(lastDelete);
// console.log(users);

//12. shift() => Xóa phần tử đầu mảng và trả về giá trị phần tử vừa xóa

// var firstDelete = users.shift();
// console.log(users);
// console.log(firstDelete);

//13. join() => Nối các phần tử của mảng thành 1 chuỗi

// var fullname = "Tạ Hoàng An";
// //Chuyển chuỗi thành mảng: split()

// var fullnameArr = fullname.split(" ");

// fullnameArr.push("Đạt");

// fullname = fullnameArr.join(" ");

// console.log(fullname);

//14. reverse() => Đảo ngược mảng

//15. sort() => Sắp xếp mảng theo thứ tự tăng dần

// var customers = ["Tùng", "Dũng", "Hương"];

// console.log(customers);

// customers.sort();

// console.log(customers);

// var numbers = [5, 1, 10, 100, 8];
// // numbers.sort();
// numbers.sort(function (a, b) {
//   return b - a;
// });
// console.log(numbers);
