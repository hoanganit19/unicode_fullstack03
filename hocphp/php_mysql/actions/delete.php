<?php
session_start();
require_once '../includes/connect.php';
require_once '../includes/functions.php';
require_once '../includes/session.php';
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $id = $_POST['id'];
    delete('phones', "user_id=:id", ['id' => $id]);
    $status = delete('users', "id = :id", ['id' => $id]);
    if ($status) {
        $msg = "Xóa thành công";
        $msgType = 'success';
    } else {
        $msg = "Xóa không thành công";
        $msgType = 'error';
    }
    setSession('msg', $msg);
    setSession('msg_type', $msgType);
    redirect("/php_mysql/lists.php");
}
