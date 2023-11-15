//Cookie
const expire = new Date("2023-11-15 11:33:00").toUTCString();
// document.cookie =
//   "username=hoangan.web;domain=127.0.0.1;path=/;expires=" + expire;

// document.cookie = "email=hoangan.web@gmail.com;path=/";

// console.log(document.cookie);

document.cookie = "username=;path=/;expires=" + new Date().toUTCString();

//HttpOnly, Secure --> Chỉ server mới được phép set
//HttpOnly --> Chỉ cho phép server đọc cookie
//Secure --> Chỉ cho phép thao tác với cookie khi sử dụng https

var product_data = [
  { product_id: 1, product_name: "Sản phẩm 1", product_price: 1000 },
  { product_id: 2, product_name: "Sản phẩm 2", product_price: 2000 },
  { product_id: 3, product_name: "Sản phẩm 3", product_price: 3000 },
  { product_id: 4, product_name: "Sản phẩm 3", product_price: 4000 },
];

//Date, Regex
