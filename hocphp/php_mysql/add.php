<?php
session_start();
require_once './includes/session.php';
require_once './includes/functions.php';
$errors = getFlash('errors');

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Danh sách người dùng</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css">
</head>

<body>
    <div class="container">
        <h2>Thêm người dùng</h2>
        <form action="/php_mysql/actions/add.php" method="POST">
            <div class="row">
                <div class="col-6">
                    <div class="mb-3">
                        <label for="">Tên</label>
                        <input type="text" name="name" class="form-control" placeholder="Tên...">
                        <span class="text-danger"><?php echo error($errors, 'name') ?></span>
                    </div>
                </div>
                <div class="col-6">
                    <div class="mb-3">
                        <label for="">Email</label>
                        <input type="email" name="email" class="form-control" placeholder="Email...">
                        <span class="text-danger"><?php echo error($errors, 'email') ?></span>
                    </div>
                </div>
                <div class="col-6">
                    <div class="mb-3">
                        <label for="">Mật khẩu</label>
                        <input type="password" name="password" class="form-control" placeholder="Mật khẩu...">
                        <span class="text-danger"><?php echo error($errors, 'password') ?></span>
                    </div>
                </div>
                <div class="col-6">
                    <div class="mb-3">
                        <label for="">Nhập lại mật khẩu</label>
                        <input type="password" name="confirm_password" class="form-control"
                            placeholder="Nhập lại mật khẩu...">
                        <span class="text-danger"><?php echo error($errors, 'confirm_password') ?></span>
                    </div>
                </div>
                <div class="col-6">
                    <div class="mb-3">
                        <label for="">Điện thoại</label>
                        <input type="text" name="phone" class="form-control" placeholder="Phone...">
                        <span class="text-danger"><?php echo error($errors, 'phone') ?></span>
                    </div>
                </div>
                <div class="col-6">
                    <div class="mb-3">
                        <label for="">Trạng thái</label>
                        <select name="status" class="form-select">
                            <option value="0">Chưa kích hoạt</option>
                            <option value="1">Kích hoạt</option>
                        </select>
                        <span class="text-danger"><?php echo error($errors, 'status') ?></span>
                    </div>
                </div>
                <div class="col-6">
                    <button class="btn btn-primary">Lưu</button>
                </div>
            </div>
        </form>
    </div>
</body>

</html>
<?php
//Yêu cầu:
/*
1. Validate Form
- Tên: Bắt buộc nhập
- Email: Bắt buộc nhập, Định dạng email, Không trùng lặp với Database
- Mật khẩu: Bắt buộc nhập, từ 6 ký tự trở lên
- Nhập lại mật khẩu: Giống mật khẩu
- Trạng thái: Chỉ nhận 0 và 1

==> Thông báo rõ ràng từng lỗi

2. Thêm dữ liệu vào database
- Nếu thất bại --> Thông báo lỗi tạo trang thêm
- Nếu thành công --> Chuyển hướng qua trang lists.php và thông báo lỗi

Thêm dữ liệu vào 2 bảng

- Thêm dữ liệu vào bảng users trước
- Lấy id vừa thêm
- Thêm dữ liệu vào bảng phones với id vừa lấy được
 */