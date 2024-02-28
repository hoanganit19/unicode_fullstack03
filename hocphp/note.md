# PHP

- Ngôn ngữ lập trình phía Server (Back-End)
- Chạy trên Server
- Ngôn ngữ mã nguồn mở, miễn phí
- Chạy trên nhiều hệ điều hành. Thường sẽ chạy trên Linux
- Phần mở rộng: .php
- Ngôn ngữ đồng bộ
- Ngôn ngữ đơn luồng
- Ngôn ngữ thông dịch

# Để PHP hoạt động

## Web Server: Client truy cập vào máy chủ thông qua các giao thức web

- Nginx
- Apache

## PHP

- Cài đặt trên server
- Đọc và biên dịch file PHP
- Cài đặt: php core, php extension (Mở rộng của php để hỗ trợ thêm các tính năng)

## Database

- Nơi lưu trữ và xử lý dữ liệu
- Một số Database thường gặp: SQL (MySQL, MariaDB, Postgres,..), NoSQL (MongoDB, Redis,..)

Lưu ý: Khi làm việc trên máy tính cá nhân (local) thông qua các phần mềm có sẵn để setup môi trường

- Xampp
- Ampps
- Wamp
- Docker --> Phức tạp, áp dụng cho cả server

Giải pháp để chạy file php không cần đến webserver

Built-in web server

URL: protocol + domain | ip + :port + path

Example: http://127.0.0.1:5500/abc

## Kiểu dữ liệu trong PHP

- Number: integer, float
- String --> Chuyên đề xử lý chuỗi
- null
- boolean: true, false
- Array --> Chuyên đề xử lý mảng
- Object --> Lập trình hướng đối tượng

## Định nghĩa hàm

- Định nghĩa
- Gọi hàm
- Tham số mặc định
- Tham số còn lại
- Tham chiếu, tham trị
