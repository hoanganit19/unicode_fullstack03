# Đăng nhập thông qua Google

-   Click vào button / link trên web
-   Chuyển hướng tới Google
-   Đăng nhập tài khoản trên Google
-   Chuyển hướng về web để xử lý đăng nhập trên web (Callback)

# Xây dựng chức năng đăng nhập trên 1 thiết bị

Ý tưởng: Dựa vào session id được lưu trong Database và session id được lưu trên trình duyệt

Nếu session trên Database khác session trên trình duyệt ==> Đăng xuất

Triển khai:

-   Khi đăng nhập ==> Lưu session id vào database và lưu ở trình duyệt
-   Tạo middleware để so sánh 2 session với nhau
-   Gọi middleware tại nơi muốn kiểm tra
