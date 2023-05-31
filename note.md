# Http Request - Http Response

- Giao thức giao tiếp giữa Client - Server
- Không liên tục

## Http Request

- URL: Đường dẫn
- Method: Phương thức (GET, POST)
- Header: Thông tin đi kèm gửi lên Server (Cookie, Content-Type,...)
- Body (Payload): Dữ liệu gửi lên Server (Chỉ hoạt động với POST)

## Http Response

- Status: Code, Text
- Response: Nội dung trả về: html, xml, text, json,...
- Header: Thông đi kèm trả về từ server: Content-Length, Content-Type, Set-Cookie,....

# Cấu tạo của trang web

- HTML => Tạo nên nội dung của trang web
- CSS => Làm đẹp, tạo bố cục
- Javascript => Xử lý tương tác giữa người dùng và trang web
- Image => Hình ảnh
- Fonts => Font chữ
- Icon: image, fonts

# Chuẩn bị trước khi học

- Visual Studio Code
- Extensions VS Code: Live Server, Prettier
- GIT: https://git-scm.com
- Tài khoản github
- Các câu lệnh khi làm việc git

1. git add .
2. git commit -m 'Noi dung'
3. git push
4. git pull => Lấy code mới về

# HTML

## Phân loại thẻ

- Thẻ đủ: Có cả mở và đóng thẻ
- Thẻ rỗng: Chỉ có mở thẻ

## Nhóm thẻ

### Block

- Width mặc định = 100%
- Mỗi thẻ nằm trên 1 dòng

### Inline

- Width mặc định bằng nội dung của thẻ
- Các thẻ liên tiếp nhau nằm trên 1 dòng

## Cấu trúc trang html

- head: Chứa các thẻ meta, tiêu đề, liên kết css, js
- body: Nội dung của trang web

## Cấu tạo chung của thẻ html

- Thẻ block không cần quan tâm đến thuộc tính (Không phải tất cả)
- Tất cả các thẻ html sẽ có 2 thuộc tính mặc định: class, id (Dùng để định danh bên css)
- Mỗi thẻ html sẽ có css mặc định của trình duyệt nhưng độ ưu tiên thấp

## Các thẻ html 5

- header
- footer
- main
- nav
- section
- article
- aside
- figure và figcaption
- time
