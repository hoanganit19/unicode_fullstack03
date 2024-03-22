<?php
if (!empty($_SERVER['HTTP_COOKIE'])) {
    $cookie = $_SERVER['HTTP_COOKIE'];
    $errors = explode('error=', $cookie);
    if (!empty($errors[1])) {
        $errors = json_decode($errors[1], true);
    }
    //Xóa cookie
    header("Set-Cookie: error=;path=/");
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css">
</head>

<body>
    <div class="mx-auto w-50 py-2">
        <form action="./action.php" method="post">
            <div class="mb-3">
                <label for="">Tên</label>
                <input type="text" name="name" placeholder="Tên..." class="form-control" />
                <?php echo !empty($errors['name']) ? '<span class="text-danger">' . $errors['name'] . '</span>' : ''; ?>
            </div>
            <div class="mb-3">
                <label for="">Email</label>
                <input type="text" name="email" placeholder="Email..." class="form-control" />
                <?php echo !empty($errors['email']) ? '<span class="text-danger">' . $errors['email'] . '</span>' : ''; ?>
            </div>
            <div class="mb-3">
                <label for="">Mật khẩu</label>
                <input type="password" name="password" placeholder="Password..." class="form-control" />
                <?php echo !empty($errors['password']) ? '<span class="text-danger">' . $errors['password'] . '</span>' : ''; ?>
            </div>
            <input type="file">
            <div class="d-grid">
                <button class="btn btn-primary">Đăng nhập</button>
            </div>
        </form>
    </div>
</body>

</html>