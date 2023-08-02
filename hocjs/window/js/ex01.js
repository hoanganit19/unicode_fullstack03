var user = "Hoàng An";

function getUser() {
  return user;
}

console.log(window.user);
console.log(window.getUser());

/*
Tất cả mọi thứ trong JS sẽ được build từ 1 object tên là window

Truy cập vào 1 hàm hoặc 1 biến của object theo cú pháp

tenobject.tenbien
tenObject.tenHam()
*/

window.setTimeout(function () {
  window.console.log(`Xin chào Hoàng An`);
});

// var name = "Unicode";
// console.log(name);
//name là 1 thuộc tính của window

// console.log(window);

/*
Để kiểm tra trong 1 object có các biến, hàm gì => Cần console.log(tenObject)
*/

// console.error("Tạ Hoàng An");

// window.localStorage.setItem("user", "Hoàng An 2");
// console.log(window.localStorage.getItem("user"));
// console.log(window.Storage.prototype);

console.log(window.String.prototype);

// var user = "Hoàng An";
// user.search();
