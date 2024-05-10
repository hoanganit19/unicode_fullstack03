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

    if ($_POST['status'] != 0 && $_POST['status'] != 1) {
        $errors['status']['invalid'] = 'Trạng thái không hợp lệ';
    }

    if (empty($errors)) {
        //Không có lỗi
        //Thêm dữ liệu vào database --> Chuyển hướng sang trang lists.php
        $data = [
            'name' => $_POST['name'],
            'email' => $_POST['email'],
            'password' => password_hash($_POST['password'], PASSWORD_BCRYPT),
            'status' => $_POST['status'],
        ];
        $status = create('users', $data);
        if ($status) {

            //Lấy id của user vừa insert
            $userId = lastId();
            if (!empty($_POST['phone'])) {
                create('phones', ['phone' => $_POST['phone'], 'user_id' => $userId]);
            }

            $msg = "Thêm người dùng thành công";
            $msgType = 'success';
        } else {
            $msg = "Thêm người dùng không thành công";
            $msgType = 'error';
        }
        setSession('msg', $msg);
        setSession('msg_type', $msgType);
        redirect("/php_mysql/lists.php");
    } else {
        //Có lỗi
        setSession('errors', $errors);
        redirect("/php_mysql/add.php");
    }
}
