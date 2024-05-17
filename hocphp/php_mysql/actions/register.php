<?php
session_start();
require_once '../includes/connect.php';
require_once '../includes/functions.php';
require_once '../includes/session.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $errors = [];
    if (!$_POST['name']) {
        $errors['name']['required'] = 'Tên bắt buộc phải nhập';
    }

    if (!$_POST['email']) {
        $errors['email']['required'] = 'Email bắt buộc phải nhập';
    } elseif (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
        $errors['email']['email'] = 'Email không đúng định dạng';
    } else {
        //Truy vấn xem có trùng lặp không?
        $sql = "SELECT id FROM users WHERE email = :email";
        $count = rowCount($sql, ['email' => $_POST['email']]);
        if ($count) {
            $errors['email']['unique'] = 'Email đã tồn tại';
        }
    }

    if (!$_POST['password']) {
        $errors['password']['required'] = 'Mật khẩu bắt buộc phải nhập';
    } elseif (strlen($_POST['password']) < 6) {
        $errors['password']['min'] = 'Mật khẩu phải từ 6 ký tự';
    }

    if ($_POST['confirm_password'] != $_POST['password']) {
        $errors['confirm_password']['same'] = 'Mật khẩu nhập lại không khớp';
    }

    if (empty($errors)) {
        $token = md5(uniqid()); //Tạo chuỗi 32 ký tự
        $data = [
            'name' => $_POST['name'],
            'email' => $_POST['email'],
            'password' => password_hash($_POST['password'], PASSWORD_BCRYPT),
            'status' => 0,
            'active_token' => $token,
        ];
        $status = create('users', $data);
        if ($status) {
            $msg = "Đăng ký tài khoản thành công";
            setSession('msg', $msg);
            redirect("/php_mysql/auth/active_page.php");
        } else {
            $msg = "Đăng ký tài khoản không thành công";
            $msgType = 'error';
            setSession('msg', $msg);
            setSession('msg_type', $msgType);
            redirect("/php_mysql/auth/register.php");
        }
    } else {
        setSession('errors', $errors);
        redirect("/php_mysql/auth/register.php");
    }
}

/*
Xây dựng chức năng đăng ký tài khoản

1. Validate

Tên: Bắt buộc nhập
Email: Bắt buộc nhập, định dạng email, email không bị trùng
Password: Bắt buộc nhập, từ 6 ký tự trở lên
Confirm: Bắt buộc nhập, giống password

2. Thêm vào Database
- name
- email
- password: Hash với hàm password_hash()
- status: 0 --> Mặc định chưa kích hoạt
- active_token --> Tự động tạo 1 chuỗi ngẫu nhiên

3. ý tưởng phần kích hoạt

Tạo link: /auth/active.php?token={token}

Kiểm tra token có tồn tại trong database không?

- Tồn tại: Chuyển status => 1 và xóa active_token trong database
- Không tồn tại: Thông báo lỗi
 */