<?php
session_start();
require_once '../includes/connect.php';
require_once '../includes/functions.php';
require_once '../includes/session.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $errors = [];
    if (!$_POST['email']) {
        $errors['email']['required'] = 'Email bắt buộc phải nhập';
    } elseif (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
        $errors['email']['email'] = 'Email không đúng định dạng';
    }

    if (!$_POST['password']) {
        $errors['password']['required'] = 'Mật khẩu bắt buộc phải nhập';
    }

    if (empty($errors)) {
        //Truy vấn lấy thông tin user
        $user = fetch("SELECT * FROM users WHERE email=:email", ['email' => $_POST['email']]);
        if (!$user) {
            setSession('msg', 'Email không tồn tại');
            redirect("/php_mysql/auth/login.php");
        } else {
            $status = password_verify($_POST['password'], $user->password);
            if (!$status) {
                setSession('msg', 'Mật khẩu không đúng');
                redirect("/php_mysql/auth/login.php");
            } else {
                setSession('user', $user);
                redirect("/php_mysql/lists.php");
            }
        }
    } else {
        setSession('errors', $errors);
        redirect("/php_mysql/auth/login.php");
    }
}

/*
Các bước xây dựng chức năng đăng nhập

1. Validate Form
- Email: Bắt buộc nhập, định dạng email
- Password: Bắt buộc nhập

2. Lấy email và password từ form

3. Truy vấn email có trong database hay không?

- Nếu không có ==> Trả về thông báo lỗi
- Nếu có ==> Lấy password trong database

4. So sánh password từ form với password trong database bằng hàm password_verify()

- Nếu sai ==> Thông báo lỗi
- Nếu đúng ==> Lưu thông tin user vào session ==> Chuyển hướng về trang lists.php
 */
