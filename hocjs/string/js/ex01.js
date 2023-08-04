//Khai báo chuỗi

//Hàm tạo String()
console.log(String.prototype);

// var fullname = `Unicode Academy`;
// var fullname2 = String("Hoàng An");
// var fullname3 = new String("Hoàng An");

// console.log(fullname);
// console.log(typeof fullname);

// if (typeof fullname === "string") {
//   console.log("Đây là chuỗi");
// }

//Các thuộc tính, phương thức xử lý chuỗi

var str = "Hoàng An 12 Unicode Fullstack 15 Unicode";

//1. length => Trả về độ dài của 1 chuỗi
// console.log(str.length);

//2. charAt() => Trả về ký tự của chuỗi theo index (index bắt đầu từ 0)

// console.log(str.charAt(1));

//3. charCodeAt() => Trả về mã ASCII của ký tự theo index

// console.log(str.charCodeAt(0));

//4. concat(str1, str2, ...) => Nối chuỗi

// console.log(str.concat(" Item 1", " Item 2"));

//5. indexOf(str1) => Tìm vị trí đầu tiên xuất hiện chuỗi str1 trong chuỗi cha, nếu tìm thấy trả về index, ngược lại sẽ trả về -1

// console.log(str.indexOf("Unicode1"));

///6. lastIndexOf(str1) => Giống indexOf nhưng sẽ trả về vị trí tìm thấy sau cùng

// console.log(str.lastIndexOf("Unicode"));

//7. includes(str1) => Tìm chuỗi con trong chuỗi cha, nếu tìm thấy trả về true, ngược lại trả về false
// console.log(str.includes("Unicode1"));

//8. slice(start, end) => Cắt chuỗi từ start đến end

// console.log(str.slice(0, 7));

// console.log(str.slice(5));

// console.log(str.slice(-5));

//9. replace() => Thay thế chuỗi (Vị trí đầu tiên)

//Lưu ý: Hàm replace() có thể nhận giá trị tìm kiếm là biểu thức chính quy (Regex)

// console.log(str.replace("Unicode", "Google"));

// console.log(str.replace(/\d+/g, "***"));

//10. replaceAll() => Thay thế tất cả

// console.log(str.replaceAll("Unicode", "Google"));

//12. toLowerCase() => Chuyển thành chữ thường

// console.log(str.toLowerCase());

//13. toUpperCase() => Chuyển thành chữ hoa
// console.log(str.toUpperCase());

//14. trim() => Loại bỏ khoảng trắng đầu và cuối chuỗi

// var str = " Hoàng An ";
// console.log(str);
// console.log(str.trim());

//15. trimStart() => Loại bỏ khoảng trắng đầu chuỗi

//16. trimEnd() => Loại bỏ khoảng trắng cuối chuỗi

//17. match() => Cắt chuỗi theo Regex

var content =
  "Xin chào, số điện thoại của tôi là 0388875179 cvsjifd 0123456789";

//Yêu cầu: Cắt các số điện thoại trong chuỗi trên

var pattern = /0\d{9}/g;
var phones = content.match(pattern);
console.log(phones);
