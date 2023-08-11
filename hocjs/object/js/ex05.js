//Object
// console.log([Object]);

// Object.prototype.message = "Hoàng An Unicode";

// var users = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   age: 31,
// };

// // for (var index in users) {
// //   console.log(index);
// // }

// //Lấy các key trong Object ( Không lấy prototype )
// // Object.keys(users).forEach(function (key) {
// //   console.log(key, users[key]);
// // });

// var errors = {
//   name: {
//     min: "Độ dài không được vượt quá 5 ký tự",
//     required: "Vui lòng nhập họ và tên",
//   },

//   email: {
//     email: "Định dạng email không hợp lệ",
//     required: "Vui lòng nhập email",
//     unique: "Email đã được sử dụng",
//   },
// };

// var getError = function (field) {
//   //Yêu cầu: Chỉ trả về lỗi đầu tiên của 1 trường
//   if (errors[field]) {
//     var error = errors[field];
//     var keys = Object.keys(error);
//     if (keys.length) {
//       return error[keys[0]];
//     }
//   }

//   return false;
// };

// console.log(getError("email")); //Vui lòng nhập họ và tên

//Gộp object

// var users = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   age: 31,
// };

// var job = {
//   teacher: "Hoàng An",
//   skill: "Fullstack",
// };

// Object.assign(users, job);
// console.log(users);

//Bài tập: Gộp 2 object không dùng hàm
// Object.keys(job).forEach(function (key) {
//   users[key] = job[key];
// });

// console.log(users);

// var users = { name: "Hoàng An" }; //null/undefined
// var users = {
//   name: {
//     job: 0,
//   },
// };

// if (users && users.name) {
//   console.log(users.name.job);
// }

//Optional Chaining (?.)

//1. Optional Chaining với thuộc tính

// var users = null;
// var users = {
//   name: {
//     job: "Giảng viên",
//   },
// };
// console.log(users?.name?.job);

// // var customers = ["Item 1", "Item 2", "Item 3"];
// var customers = null;

// if (customers?.length) {
//   customers.forEach(function (customer) {
//     console.log(customer);
//   });
// }

//2. Optional Chaining với phương thức
var users = {
  getName: function () {
    console.log("Hoàng An");
    return {
      getAge: function () {
        console.log("31 tuổi");
      },
    };
  },
};
// if (users && typeof users.getName === "function") {
//   users.getName();
// }
// users?.getName?.()?.getAge?.();

// var customers = ["Item 1", "Item 2", "Item 3"];
// // var customers = {};

// if (customers?.length) {
//   customers.forEach?.(function (customer) {
//     console.log(customer);
//   });
// }

//Bài tập: Tìm thông tin sản phẩm có giá lớn nhất

var products = [
  null,
  false,
  {
    name: "Sản phẩm 1",
    price: 20000,
  },

  10,

  "Hoàng An",

  {
    name: "Sản phẩm 3",
    price: 50000,
  },

  {
    name: "Sản phẩm 2",
    price: 30000,
  },
];

console.log(products);
//Output:
/*
{
    name: "Sản phẩm 3",
    price: 50000,
}
*/
// var max;
// if (products?.length) {
//   products.forEach(function (product) {
//     if (
//       typeof product === "object" &&
//       !Array.isArray(product) &&
//       product !== null
//     ) {
//       if (!max) {
//         max = product;
//       } else {
//         if (max.price < product.price) {
//           max = product;
//         }
//       }
//     }
//   });
// }

// console.log(max);

//Tham chiếu
var users = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
};

// var customers = users; //1 object có nhiều tên
//Clone Object
var customers = Object.assign({}, users);
// var customers = { ...users }; //Spread Operator
customers.email = "contact@unicode.vn";

console.log(users);
console.log(customers);

// console.log({} === {});

var users = ["Hoàng An", "hoangan.web@gmail.com"];
// var customers = users;
var customers = users.map(function (user) {
  return user;
});
// var customers = [...users];
customers[1] = "contact@unicode.vn";
console.log(users);
console.log(customers);
