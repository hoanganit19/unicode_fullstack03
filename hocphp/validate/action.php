<?php
//Nhận request
//Kiểm tra
//Lưu vào cookie
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $errors = [];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    //Kiểm tra từng biến xem có dữ liệu không?
    if (empty($name)) {
        $errors['name'] = 'Vui lòng nhập tên';
    }
    if (empty($email)) {
        $errors['email'] = 'Vui lòng nhập email';
    } else {
        if (!strpos($email, '@') !== false) {
            $errors['email'] = 'Email không đúng định dạng';
        }
    }
    if (empty($password)) {
        $errors['password'] = 'Vui lòng nhập mật khẩu';
    }

    header("Set-Cookie: error=" . json_encode($errors) . ";path=/");
    header("Location: ex01.php");
}

//Tìm hiểu upload file lên server
/*
$_FILES
https://www.php.net/manual/en/function.move-uploaded-file.php
 */
