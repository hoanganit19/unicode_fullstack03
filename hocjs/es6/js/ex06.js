//Classes: Setter, Getter
/*
Sử dụng để truy cập vào các thuộc tính private (Chỉ được phép truy cập nội bộ)

-> Thông qua 1 phương thức để set, 1 phương thức để get
*/

class User {
  //Private thuộc tính
  #email; //private
  name; //public
  constructor() {
    //Giả sử thuộc tính data private
    this.data = ["User 1", "User 2", "User 3"];
  }

  //Cần lấy ra user cuối cùng, user đầu tiên

  //getter
  get first() {
    return this.data[0];
  }

  //getter
  get latest() {
    return this.data[this.data.length - 1];
  }

  //setter
  set latest(value) {
    this.data.push(value);
  }

  //getter
  get length() {
    return this.data.length;
  }

  //setter private property
  set email(value) {
    this.#email = value;
  }

  //getter private property
  get email() {
    return this.#email;
  }
}

const user = new User();
// console.log(user.#email);
user.email = "hoangan.web@gmail.com";
console.log(user.email);
console.log(user.length);

// user.latest = "User 4";
// console.log(user.first);
// console.log(user.latest);

//Array.length

//Thực hành setter, getter

const users = ["User 1", "User 2", "User 3", "User 4", "User 5"];

// Array.prototype.length2 = function () {
//   console.log("Hello");
// };

// users.length2();

Array.prototype.__defineGetter__("length2", function () {
  //Trả về số lượng phần tử của mảng (giống thuộc tính length)
  let length = 0;

  for (let element of this) {
    length++;
  }
  return length;
});

// console.log(users.length2);

// console.log(users.length);

Array.prototype.__defineSetter__("length2", function (value) {
  this.splice(value); //Xóa từ index value đến hết
});

// users.length2 = 2;
users.length = 2;
console.log(users);
