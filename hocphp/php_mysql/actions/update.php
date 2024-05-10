<?php
session_start();
require_once '../includes/connect.php';
require_once '../includes/functions.php';
require_once '../includes/session.php';
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $id = $_GET['id'];
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
        $sql = "SELECT id FROM users WHERE email = :email AND id != :id";
        $count = rowCount($sql, ['email' => $_POST['email'], 'id' => $id]);
        if ($count) {
            $errors['email']['unique'] = 'Email đã tồn tại';
        }
    }

    if ($_POST['password'] && strlen($_POST['password']) < 6) {
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
            'status' => $_POST['status'],
        ];
        if (!empty($_POST['password'])) {
            $data['password'] = password_hash($_POST['password'], PASSWORD_BCRYPT);
        }
        $status = update('users', $data, "id = :id", ['id' => $id]);
        if ($status) {
            if (!empty($_POST['phone'])) {
                $phoneRow = rowCount("SELECT id FROM phones WHERE user_id=:id", ['id' => $id]);
                if (!$phoneRow) {
                    create('phones', [
                        'phone' => $_POST['phone'],
                        'user_id' => $id,
                    ]);
                } else {
                    update('phones', [
                        'phone' => $_POST['phone'],
                    ], "user_id = :id", ['id' => $id]);
                }

            } else {
                delete('phones', "user_id=:id", ['id' => $id]);
            }

            $msg = "Cập nhật dùng thành công";
            $msgType = 'success';
        } else {
            $msg = "Cập nhật người dùng không thành công";
            $msgType = 'error';
        }
        setSession('msg', $msg);
        setSession('msg_type', $msgType);

    } else {
        //Có lỗi
        setSession('errors', $errors);
        setSession('old', $_POST);

    }

    redirect("/php_mysql/edit.php?id=" . $id);
}

/*
Yêu cầu Validate:
- Tên: Như cũ
- Email: Như cũ tuy nhiên khi kiểm tra trùng với Database phải loại trừ user đang sửa
- Password: Chỉ validate khi thay đổi password (Không bắt buộc phải đổi)

Cập nhật database
- Name
- Email
- Password --> Check xem người có nhập ko? Nếu nhập mới thay đổi
 */
