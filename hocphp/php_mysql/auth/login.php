<?php
session_start();
require_once '../includes/session.php';
require_once '../includes/functions.php';
guest();
$errors = getFlash('errors');
$msg = getFlash('msg');
$msgType = getFlash('msg_type');
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Đăng nhập</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css">
</head>

<body>
    <div class="w-50 mx-auto">
        <h2 class="text-center">Đăng nhập</h2>
        <?php echo showMessage($msg, $msgType); ?>
        <form action="/php_mysql/actions/login.php" method="post">
            <div class="mb-3">
                <label for="">Email</label>
                <input type="text" name="email" class="form-control" placeholder="Email..." />
                <span class="text-danger"><?php echo error($errors, 'email') ?></span>
            </div>
            <div class="mb-3">
                <label for="">Mật khẩu</label>
                <input type="password" name="password" class="form-control" placeholder="Password..." />
                <span class="text-danger"><?php echo error($errors, 'password') ?></span>
            </div>
            <div class="d-grid">
                <button class="btn btn-primary">Đăng nhập</button>
            </div>
        </form>
    </div>
</body>

</html>