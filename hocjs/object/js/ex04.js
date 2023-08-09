// var person = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   getName: function () {
//     return this.name;
//   },
// };

// var boy = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   gender: "male",
//   getName: function () {
//     return this.name;
//   },
// };

// var girl = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   gender: "female",
//   getName: function () {
//     return this.name;
//   },
// };

//Nhóm object có các phương thức, thuộc tính giống nhau

//Xây dựng 1 hàm tạo giống như: String, Array

var Person = function (name, email) {
  this.name = name;
  this.email = email;
  this.getName = function () {
    return this.name;
  };
};

Person.prototype.getInfo = function () {
  return [this.name, this.email];
};

//Tạo object từ hàm tạo
var person = new Person("Hoàng An", "hoangan.web@gmail.com");
console.log(person);
console.log(person.getInfo());
// console.log(person.name);
// console.log(person.email);
// console.log(person.getName());

// var boy = new Person("Hoàng An 2", "an@gmail.com");
// boy.gender = "male";
// console.log(boy);
// console.log(boy.getInfo());

// var girl = new Person("Hoàng An 3", "an3@gmail.com");
// girl.gender = "female";
// console.log(girl);
// console.log(girl.getInfo());

//Kiểm tra object được tạo từ hàm tạo nào
// var a = new Person("An", "an@gmail.com");
// console.log(a.constructor.name);
// var b = new Array();
// console.log(b.constructor.name);

// var c = {};
// console.log(c.constructor.name);

//Ví dụ: Kiểm tra biến có phải thuộc Person không?

Person.isPerson = function (variable) {
  return variable && variable.constructor.name === "Person";
};

// var a = new Person();
var a = new Person();

if (Person.isPerson(a)) {
  console.log("Đây là person");
} else {
  console.log("Không phải person");
}
