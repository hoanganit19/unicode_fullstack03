//Object, Array, Function ES6

//1. Destructuring: Phá vỡ cấu trúc của object, array để truy cập vào các phần tử và gán thành các biến riêng biệt

// const user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   age: 31,
//   "address-1": "Hà Nội",
//   "address-2": "Hồ Chí Minh",
//   position: "Teacher",
// };

// const { name: _name, email, age = 30 } = user;

// console.log(_name, email, age);

// const { "address-1": address1 } = user;
// console.log(address1);

// const { name, email, ...rest } = user;
// console.log(rest);

// Object.keys(user).forEach(function (key) {
//   //   const value = user[key];
//   //   console.log(value);
//   const { [key]: value } = user; //Destructuring computed property
//   console.log(value);
// });

// const users = ["Hoàng An", "hoangan.web@gmail.com", 31, "Hà Nội", "Developer"];

// const [username, email, , address, position = "Teacher"] = users;
// console.log(username, email, address, position);

// const [username, email, ...rest] = users;
// console.log(rest);

// const profile = {
//   displayName: "Hoàng An",
//   emails: [
//     {
//       value: "hoangan.web@gmail.com",
//     },
//   ],
// };

// const {
//   displayName,
//   emails: [{ value: email }],
// } = profile;

// console.log(displayName);
// console.log(email);

//2. Arrow Function

//2.1. Không tham số
// const getMessage = () => {
//   console.log("Hello Unicode");
// };
// getMessage();

//2.2. Có 1 tham số
// const getMessage = msg => {
//     console.log(msg);
// }

// getMessage('Unicode')

//2.3. Có nhiều tham số
// const getMessage = (msg, type = 'success') => {
//     console.log(msg, type);
// }
// getMessage('Unicode', 'error')

//2.4. Có return
// const sum = (a, b) => a + b;
// console.log(sum(10, 20));

// const getUser = () => ({ name: "Hoàng An", email: "hoangan.web@gmail.com" });
// console.log(getUser());

//2.5. Closure: Return về 1 hàm
// const sum = (a) => {
//   return (b) => {
//     return a + b;
//   };
// };
// const sum = (a) => (b) => a + b;

// const add = sum(10);
// console.log(add(10));
// console.log(add(20));

const users = [
  {
    id: 1,
    name: "User 1",
  },
  {
    id: 2,
    name: "User 2",
  },
  {
    id: 3,
    name: "User 3",
  },
];

// const getUser = (userId) => users.find(({ id }) => id === userId);

// console.log(getUser(1));

const getHtml = () =>
  users.map(({ id, name }) => `<h2>${id} - ${name}</h2>`).join("");
document.body.innerHTML = getHtml();

/*
Các lưu ý khi sử dụng Arrow Function

1. Không dùng để thay thế function truyền thống
2. Không binding được this
3. Không binding được arguments
4. Không nên sử dụng làm method của object
5. Không được dùng để xây dựng Constructor
6. Không có thuộc tính prototype
*/

const customer = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
  getEmail: () => {
    return this.email;
  },
  getEmail2: function () {
    return this.email;
  },
};

console.log(customer.getEmail());
console.log(customer.getEmail2());

// const getMax = () => {
//   console.log(arguments);
// };
// const getMax = function () {
//   console.log(arguments);
// };

// getMax(5, 10, 15, 20);

//Constructor
// const User = function () {
//   this.email = "hoangan.web@gmail.com";
// };

// const User = () => {
//   this.email = "hoangan.web@gmail.com";
// };

// const user = new User();
// console.log(user);

//3. Spread Operator: Trải các phần tử trong object, array ra ngoài
const oldObj = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
};

const newObj = {
  job: "Teacher",
  ...oldObj,
};

// console.log(newObj);

const oldArr = ["Hoàng An", "hoangan.web@gmail.com"];
const newArr = ["Teacher", ...oldArr];

// console.log(newArr);

const sum = (a, b) => a + b;
const values = [10, 20];
console.log(sum(...values));

const state = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
  products: [],
};

// const newState = { ...state, email: "contact@unicode.vn" };

// console.log(newState);
// console.log(state);

// const newState = { ...state };
// newState.products.push("Sản phẩm 1");
// newState.products.push("Sản phẩm 2");

// const { products } = newState;
// console.log(products);

//Tạo 1 mảng có giá trị từ 1 đến 10
const range = [...Array(10).keys()].map((index) => index + 1);
console.log(range);

/*
Tránh nhầm lẫn giữa:
1. Rest Destructuring
2. Spread Operator
3. Rest Parameter
*/

// const getA = (callback, ...args) => {
//   callback(...args);
// };

// getA(
//   (a, b) => {
//     console.log(a, b);
//   },
//   10,
//   20,
// );

//4. Enhance Object Literal

// const name = "Hoàng An";
// const email = "hoangan.web@gmail.com";
// const age = undefined;
// const user = {
//   name,
//   email,
//   age,
// };

// console.log(user);

function getAge() {
  return 31;
}
const user = {
  getName() {
    return "Hoàng An";
  },
  getEmail() {
    return "hoangan.web@gmail.com";
  },
  getAge,
};
console.log(user);

/*
Chốt lại: 
- Speeach API: Chuyển lời nói thành văn bản
- Variable
- Arrow function
- Object, Array: Destructuring, Spread, Enhance

Buổi sau:
- Classes: Định nghĩa, kế thừa, Static, Setter, Getter
- Es6 Module: Export, Import
*/
