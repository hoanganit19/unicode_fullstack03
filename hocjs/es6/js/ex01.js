/*
Scope => Phạm vi

- Global Scope -> Phạm vi toàn cục
- Local Scope -> Phạm vi cục bộ
+ Function Scope -> Phạm vi hàm
+ Block Scope -> Phạm vi khối
*/

// var a = 10;
// if (a >= 10) {
//   //Block Scope
//   var b = 20;
// }

// var getMessage = function () {
//   //Function Scope
//   var msg = "Hello";
// };

/*
{} => Block code
*/

//Biến trong ES6: let, const
/*
let, const 
-> Chỉ hỗ trợ và hoạt động trong scope mà nó được khai báo (Tính cả các scope con)
-> Trong cùng scope chỉ chấp nhận khai báo 1 lần

let: Cho phép thay đổi
const: Không cho phép thay đổi, khi khai báo phải gán luôn
*/

let a = 10;
if (a >= 10) {
  let b = 20;
  let total = 0;
  for (let i = 1; i <= b; i++) {
    total = total + b * i;
  }
  console.log(total);
}
// console.log(b);

const b = 1;
console.log(b);

const user = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
};

const lists = [1, 2, 3, 4];

const getMessage = function () {
  console.log("Hello");
};
getMessage();
