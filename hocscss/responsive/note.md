# Responsive Web Design

- Tùy chỉnh giao diện tương thích với các kích thước màn hình khác nhau
- Dùng CSS và dựa vào kích thước màn hình để thay đổi

# Breakpoint

- Điểm dừng tọa độ
- Tại điểm đó giao diện sẽ thay đổi
- Trên 1 website sẽ có nhiều breakpoint
- Không có breakpoint cho tất cả các dự án

- Breakpoint phổ biến

* 576px
* 768px
* 992px
* 1200px
* 1400px

=> Các CSS Framework đã nghiên cứu

# Viewport là gì?

- Khung nội dung mà người dùng nhìn thấy trên trình duyệt
- Để đảm bảo tỷ lệ giữa các thiết bị, cần thẻ meta viewport

# Media Queries

Lưu ý: Chỉ nên sử dụng media query theo 1 hướng

- Mobile first: Đi từ màn hình nhỏ tới màn hình lớn

@media screen and (min-width: 576px) {
//selector css
}

@media screen and (min-width: 768px) {
//selector css
}

@media screen and (min-width: 992px) {
//selector css
}

@media screen and (min-width: 1200px) {
//selector css
}

@media screen and (min-width: 1400px) {
//selector css
}

- Desktop first: Đi từ màn hình lớn xuống màn hình nhỏ

@media screen and (max-width: 1400px) {
//selector css
}

@media screen and (max-width: 1200px) {
//selector css
}

@media screen and (max-width: 992px) {
//selector css
}

@media screen and (max-width: 768px) {
//selector css
}

@media screen and (max-width: 576px) {
//selector css
}
