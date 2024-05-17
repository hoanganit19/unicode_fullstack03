<?php
session_start();
require_once '../includes/session.php';
$msg = getFlash('msg');
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tài khoản bị khóa</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css">
</head>

<body>
    <h1 class="text-center">
        <?php echo $msg; ?>
    </h1>
    <h2 class="text-center">Vui lòng kiểm tra email để kích hoạt tài khoản</h2>
</body>

</html>