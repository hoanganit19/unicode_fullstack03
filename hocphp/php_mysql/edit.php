<?php
session_start();
require_once './includes/session.php';
require_once './includes/connect.php';
require_once './includes/functions.php';
$errors = getFlash('errors');
$old = getFlash('old');
//Viết truy vấn database để trả về thông tin user
if (!empty($_GET['id'])) {
    $id = $_GET['id'];

    $sql = "SELECT * FROM users WHERE id = :id";
    $user = fetch($sql, ['id' => $id]);

    if (!$user) {
        echo 'Không tồn tại';
        die;
    }
} else {
    echo 'Không tồn tại';
    die;
}
$msg = getFlash('msg');
$msgType = getFlash('msg_type');
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
        <h2>Cập nhật người dùng</h2>
        <?php echo showMessage($msg, $msgType); ?>
        <form action="/php_mysql/actions/update.php?id=<?php echo $id; ?>" method="POST">
            <div class="row">
                <div class="col-6">
                    <div class="mb-3">
                        <label for="">Tên</label>
                        <input type="text" name="name" class="form-control" placeholder="Tên..."
                            value="<?php echo old($old, 'name', $user->name); ?>">
                        <span class="text-danger"><?php echo error($errors, 'name') ?></span>
                    </div>
                </div>
                <div class="col-6">
                    <div class="mb-3">
                        <label for="">Email</label>
                        <input type="email" name="email" class="form-control" placeholder="Email..."
                            value="<?php echo old($old, 'email', $user->email); ?>">
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
                        <label for="">Trạng thái</label>
                        <select name="status" class="form-select">
                            <option value="0" <?php echo old($old, 'status', $user->status) == 0 ? 'selected' : '' ?>>
                                Chưa kích hoạt</option>
                            <option value="1" <?php echo old($old, 'status', $user->status) == 1 ? 'selected' : '' ?>>
                                Kích hoạt</option>
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