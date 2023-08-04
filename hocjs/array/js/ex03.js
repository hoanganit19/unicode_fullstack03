/*
Bài 1: Cho trước cả họ và tên

var fullname = "Tạ Hoàng An";

Yêu cầu: Lấy tên
*/

// var fullname = "Tạ Hoàng An"; //An

// var getFirstName = function (name) {
//   //Code
//   return name.split(" ").slice(-1).join();
// };

// console.log(getFirstName(fullname));

/*
Bài 2: Cho 1 danh sách khách hàng

Nguyễn Văn Anh
Tạ Hoàng An
Phạm Văn Dũng
Nguyễn Thị Yến

=> Yêu cầu: Sắp xếp danh sách khách hàng theo tên
*/

var customers = [
  "Nguyễn Văn Anh",
  "Tạ Hoàng An",
  "Phạm Văn Dũng",
  "Nguyễn Thị Yến",
];

var getFirstName = function (name) {
  //Code
  return name.split(" ").slice(-1).join();
};

customers.sort(function (a, b) {
  var nameA = getFirstName(a);
  var nameB = getFirstName(b);
  if (nameA < nameB) {
    return -1;
  }
});

console.log(customers);
