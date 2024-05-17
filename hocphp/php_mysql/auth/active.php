<?php
session_start();
require_once '../includes/connect.php';
require_once '../includes/session.php';
require_once '../includes/functions.php';
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Active</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css">
</head>

<body>
    <div class="container">
        <?php
if (!empty($_GET['token'])) {
    $token = $_GET['token'];
    $user = fetch("SELECT * FROM users WHERE active_token=:token", ['token' => $token]);
    if (!$user) {
        echo showMessage('Liên kết không tồn tại', 'danger');
    } else {
        update('users', [
            'status' => 1,
            'active_token' => null,
        ]);
        setSession('user', $user);
        redirect('/php_mysql/auth/login.php');
        //Yêu cầu: Kích hoạt xong --> Tự động đăng nhập
    }
} else {
    echo showMessage('Liên kết không tồn tại', 'danger');
}
?>
    </div>
</body>

</html>