var action = "update";

switch (action) {
  case "add":
  case "insert":
  case "create":
    console.log(`Thêm`);
    break;

  case "edit":
  case "update":
    console.log(`Sửa`);
    break;

  case "delete":
  case "destroy":
  case "remove":
    console.log(`Xóa`);
    break;

  default:
    console.log(`Hiển thị danh sách`);
    break;
}

//Chuyển dạng switch case ví dụ trên thành if else

if (action === "add" || action === "create" || action === "insert") {
  console.log(`Thêm`);
} else if (action === "edit" || action === "update") {
  console.log(`Sửa`);
} else if (action === "delete" || action === "remove" || action === "destroy") {
  console.log(`Xóa`);
} else {
  console.log(`Hiển thị danh sách`);
}

/*
Hiển thị số ngày trong 1 tháng

31 ngày: 1, 3, 5, 7, 8, 10, 12
30 ngày: 4, 6, 9, 11
29 ngày: 2

Yêu cầu: 
- Kiểm tra tháng hợp lệ
+ Số nguyên
+ Từ 1 đến 12

Hiển thị ví dụ: Tháng 12 có 31 ngày
*/

var month = "11";
var year = 2023;
var days;

if (month % 1 === 0 && month >= 1 && month <= 12) {
  month = +month; //Ép kiểu số
  switch (month) {
    case 2:
      if (year % 4 === 0) {
        days = 29;
      } else {
        days = 28;
      }

      break;

    case 4:
    case 6:
    case 9:
    case 11:
      days = 30;
      break;

    default:
      days = 31;
      break;
  }

  console.log(`Tháng ${month} có ${days} ngày`);
} else {
  console.log(`Tháng ${month} không hợp lệ`);
}
