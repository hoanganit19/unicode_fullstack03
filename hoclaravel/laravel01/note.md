# Các phương thức trong Model

-   all() --> Trả về danh sách tất cả bản ghi
-   find($id) ==> Lấy 1 bản ghi theo khóa chính
-   findOrFail($id) ==> Như hàm file, thêm phần exception nếu không tìm thấy
-   create($array) ==> Thêm bản ghi
-   insert($array) ==> Thêm bản ghi
-   save() ==> Thêm mới và cập nhật (Nếu mà khởi tạo instance mới ==> Thêm mới, Dùng instance đã có sẵn ==> Cập nhật)
-   update($array) ==> Cập nhật bản ghi (Thực where trước khi update)
==> Ví dụ: User::where('id', '=', 1)->update($data)
-   delete() (Gọi delete từ instance)
