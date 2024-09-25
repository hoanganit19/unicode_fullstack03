# API

-   Công cụ giao tiếp giữa các ứng dụng với nhau
-   RESTful: Chuẩn xây dựng API

# Ví dụ:

Cần xây dựng module quản lý người dùng

## Client

-   Giao diện
-   Tương tác với người dùng
-   Gửi và nhận dữ liệu từ Server

## Server

-   Nhận yêu cầu từ Client
-   Xử lý logic / database
-   Trả về cho client (JSON)

Để Server hiểu được yêu cầu từ Client ==> Quy ước về URL, HTTP METHOD

HTTP GET http://127.0.0.1:8000/api/users ==> Lấy tất cả users

HTTP GET http://127.0.0.1:8000/api/users/1 ==> Lấy user có id bằng 1

HTTP POST http://127.0.0.1:8000/api/users ==> Thêm user

HTTP PUT/PATCH http://127.0.0.1:8000/api/users/1 ==> Sửa user có id bằng 1

-   PUT: Ghi đè dữ liệu
-   PATCH: Chỉ cập nhật các dữ liệu được gửi lại

HTTP DELETE http://127.0.0.1:8000/api/users/1 ==> Xóa user có id bằng 1

## Xác thực

-   Sanctum
-   Passport
-   JWT
