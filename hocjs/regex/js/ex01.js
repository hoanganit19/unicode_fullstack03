//Regex = Biểu thức chính quy
/*
==> Kỹ thuật xử lý chuỗi nâng cao thông qua các ký hiệu

- So khớp
- Cắt chuỗi
- Thay thế

--> Pattern

Trong JS --> pattern là 1 object

/regex/modifier

Website test: https://regex101.com/

Các ký hiệu cơ bản: 
- /string/ --> So sánh chuỗi string có nằm trong chuỗi cần so sánh ko?
- /^ --> Khớp đầu chuỗi
- $/ --> Khớp cuối chuỗi
- [a-z] --> Chữ thường
- [A-Z] --> Chữ hoa
- [0-9] --> Số
- [charlist] --> Các ký tự
Lưu ý: Các ký hiệu trong cùng cặp ngoặc [] kết hợp với nhau theo điều kiện hoặc

Các ký hiệu độ dài:
{min,max} --> Độ dài từ min đến max
{value} --> Độ dài cố định value
{min,} --> Độ dài >= min

Các ký hiệu viết tắt của độ dài
+ --> {1,}
* --> {0,}
? --> {0,1}

Các ký hiệu viết tắt khác
\d --> Từ 0 đến 9
\D --> Không phải là số
\w --> A-Z, a-z, 0-9, _
\W --> Ngược lại với \w
\s --> Khoảng trắng
\S --> Không phải khoảng trắng
\t --> Tab
. --> Đại diện cho tất cả các ký tự

Lưu ý: Khi gặp các ký hiệu của biểu thức chính quy mà vẫn muốn so khớp --> Thêm ký hiệu \ phía trước

Hoặc: | --> Nên nhóm vào cặp ngoặc tròn

Phủ định: ^
*/

// const pattern = /[def]/;
// const str = "abcd";
// console.log(pattern.test(str));

//Bài tập: Kiểm tra tên biến hợp lệ
/*
Bắt đầu bằng: chữ cái, gạch dưới, $
Tên biến chứa: Chữ cái, số, gạch dưới, $
Độ dài tối thiếu: 1
*/

// const str = "1customer_name";
// const pattern = /^[A-Za-z_$][A-Za-z0-9_$]{0,}$/;
// console.log(pattern.test(str));

//Bài tập: Khớp địa chỉ email
//username@domain

//Ví dụ: Khớp link youtube
//1. https://youtube.com/watch?v=id
//2. https://youtu.be/id
