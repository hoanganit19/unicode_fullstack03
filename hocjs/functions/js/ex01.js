/*
Hàm
- Đoạn chương trình con
- Tái sử dụng
- Thể hiện là 1 chức năng (Động từ)

Cú pháp:

1. Hàm không có tham số
function tenHam() {
    Nội dung hàm
}

2. Hàm có tham số
function tenHam(thamso1, thamso2,...) {
    Nội dung
}

3. Gọi hàm
tenHam(doiso1, doiso2,...)

4. Hàm có giá trị trả về và không có giá trị trả về

- Hàm có giá trị trả về => Cần phải có từ khóa return
- Hàm không có giá trị trả về => Không có từ khóa return
- Khi từ khóa return được gọi => Các đoạn chương trình phía sau sẽ không hoạt động

5. Biến toàn cuc, biến cục bộ

- Biến khai báo ở phạm vi ngoài hàm => Biến toàn cục
- Biến khai báo trong phạm vi hàm => Biến cục bộ

6. Expression Function
*/

// function getMsg(msg, type = "success") {
//   console.log(`Xin chào Hoàng An: ${msg}`);
//   console.log(`Type: ${type}`);
// }

// getMsg("Unicode", "error");

//arguments object
// function getTotal() {
//   //arguments
//   //   console.log(arguments);
//   var total = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     // console.log(arguments[i]);
//     total += arguments[i];
//   }

//   console.log(total);
// }

// getTotal(5, 10, 15, 20, 25);

//Rest parameter => Tham số còn lại

// function getTotal(msg, ...args) {
//   var total = 0;
//   for (var i = 0; i < args.length; i++) {
//     total += args[i];
//   }

//   console.log(`${msg}: ${total}`);
// }

// getTotal("Kết quả", 5, 10, 15, 20, 25);

// function sum(a, b) {
//   var total = a + b;
//   //   console.log(total);
//   return total;
// }

// var total = sum(10, 20) + 20;
// console.log(total);

// function division(a, b) {
//   if (b !== 0) {
//     var result = a / b;
//     //result => Biến cục bộ
//     //Biến cục bộ chỉ được sử dụng trong phạm vi hàm đó
//     //Biến cục không được sử dụng ở hàm khác, hoặc ở ngoài hàm
//     return result;
//   }

//   return false;
// }

// console.log(division(10, 0));

function getMessage() {
  //Muốn sử dụng biến toàn cục => Gọi biến đó ra (Không khai báo lại)
  return msg;
}

function setMessage(value) {
  msg = value;
  //Ngoài việc lấy giá trị của biến toàn cục
  //Chúng ta có thể cập nhật lại giá trị cho biến toàn cục
  //Nếu thêm từ khóa var cho biến toàn cục => Biến toàn cục sẽ trở thành cục bộ
}

var msg = "Unicode Academy";

setMessage("Hoàng An");

console.log(getMessage());
