Object.prototype.combine = function (...args) {
  var current = this;
  if (args.length) {
    var result = args.map(function (item) {
      return current[item];
    });

    return result;
  }

  return false;
};

Object.prototype.message = "Hoàng An Unicode";

var users = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
  age: 30,
};

console.log(users.combine("name", "email", "age"));
console.log(users.message);

var customers = {
  name: "Hoàng An Unicode",
  address: "Hà Nội",
  type: "Khách hàng mới",
};

console.log(customers.combine("name", "address", "type"));
console.log(customers.message);

/*
Tất cả các object đều muốn sử dụng phương thức combine
*/

var products = {
  name: "Sản phẩm 1",
  price: 200000,
};

console.log(products.combine("name", "price"));

console.log(products.message);
