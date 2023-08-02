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

## Thẻ chèn liên kết (a = anchor)

<a href="link">Text</a>

`#` => Hash => Phía client

target

- `_blank` => mở tab mới
- `_self` => mở tab hiện tại

## Thẻ chèn hình ảnh (img = image)

- <img src="link ảnh" width="chiều rộng" height="chiều cao"  title="Tiêu đề" alt="Chữ thay thế"/>

Đường dẫn tương đối (relative path): Chỉ ở cấp folder con

Đường dẫn tuyệt đối (absolute path): Đầy đủ cả giao thức và đường dẫn

http://tenmien/duong-dan

protocol + domain:port/path

## Table

- Vẽ theo hàng ngang
- Vẽ hàng trước, cột sau

Thẻ table => Tạo bảng

- width: Chiều rộng
- border: Viền
- cellpadding: Khoảng cách giữa viền tới nội dung của các ô
- cellspacing: Khoảng cách giữa các ô (lề)

Thẻ tr => Tạo hàng cho bảng

Thẻ td => tạo cột cho bảng (Nằm trong thẻ tr)

## Form: Biểu mẫu

- 1 trang web sẽ có nhiều form
- form đứng ngang hàng, không lồng nhau
- 1 form bao gồm nhiều trường (field)

`<form method="phuong-thuc" action="duong-dan">
Các trường

</form>`

Các trường trong form

1. Thẻ input

- type: Kiểu dữ liệu (Default = text)
- name: Tên trường để lấy dữ liệu (back-end)
- class, id
- placeholder: Chữ chìm gợi ý
- value: Giá trị của input
- disabled: Vô hiệu hóa trường
- readonly: Chỉ cho phép xem, không nhập được
- required: Bắt buộc phải nhập khi submit form

2. Thẻ label

- Thể hiện 1 dòng chữ mô tả cho trường
- <label for="id của field">Nội dung</label>

# CSS

## Đặt tên id, class

- Tường minh (Theo chức năng nhiệm vụ)
- Nên dùng Tiếng Anh (Đúng chính tả, chuẩn số ít, số nhiều)
- Viết thường, sử dụng gạch ngang, không nên dùng số
- Nên bắt đầu bằng chữ cái
- Cháp nhận: chữ cái thường, dấu gạch dưới, gạch ngang, số
- Không được phép bắt đầu bằng số
- Sử dụng danh từ

Lưu ý:

- id trong 1 thẻ html chỉ có 1
- class trong 1 thẻ html sẽ có nhiều (Mỗi class sẽ cách nhau bởi khoảng trắng)

Nguyên tắc với selector ~

- Cùng cấp
- Nằm trong 1 cha
- Không phân biệt thứ tự liền sau

## Các giá trị mặc định trong CSS

- inherit
- initial
- unset

## Các đơn vị trong CSS

### Tuyệt đối

- px (pixel) = Điểm ảnh
- pt (point) = 1.3 x pixel

### Tương đối

- em: Tỷ lệ với font-size của thành phần cha
  => 1em = font-size của thành phần cha
- rem: Tỷ lệ với font-size của trình duyệt (Có thay đổi bằng selector html)
  => 1rem = font-size của selector html
- %: Giống em (Khác về tỷ lệ)
  => 100% = font-size của thành phần cha

Các đơn vị bên kích thước:

- vw (viewport width)
- vh (viewport height)

# CSS

## Flex

### Flex Container

- display: flex
- justify-content: Căn chỉnh các item theo trục chính

* flex-start
* flex-end
* center
* space-around
* space-between
* space-evenly

- flex-direction: Chọn hướng

* row
* row-reverse
* column
* column-reverse

- flex-wrap

* nowrap
* wrap
* wrap-reverse

- align-items: Căn chỉnh theo trục cross

* stretch
* flex-start
* center
* flex-end
* baseline

- align-content

* stretch
* flex-start
* flex-end
* center
* space-around
* space-between
* space-evenly

### Flex Item

- flex-grow

- flex-shrink

- flex-basis

* Bị chặn bởi min-width, max-width nếu flex-direction: row
* Bị chặn bởi min-height, max-height nếu flex-direction: column

- flex: grow shrink basis

- order: Sắp xếp vị trí của flex item

- align-self

* stretch
* flex-start
* center
* flex-end
* baseline

## Transition

- Giúp delay quá trình chuyển động của thành phần css
- Chỉ delay các thuộc tính có giá trị số

Các thuộc tính:

- transition-property

* all
* Thuộc tính css muốn delay

- transition-duration: Thời gian hoàn thành chuyển động

* ms
* s

- transition-timing-function: Tùy chỉnh tốc độ từng giai đoạn của quá trình chuyển động

- transition-delay: Delay trước khi chuyển động

Responsive Web Design

- Viewport
- Breakpoint và các breakpoint phổ biến
- Media Query
- Desktop First, Mobile first

## Javascript

- Kiểu dữ liệu: Kiểu nguyên thủy, kiểu tham chiếu
- Kiểu dữ liệu chuỗi (String)
