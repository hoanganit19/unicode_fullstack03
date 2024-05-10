<?php
session_start();
require_once '../includes/connect.php';
require_once '../includes/functions.php';
require_once '../includes/session.php';
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $ids = $_POST['ids'];
    if (!$ids) {
        $msg = "Không có gì để xóa";
        $msgType = 'error';
    } else {
        $params = str_repeat('?,', count(explode(',', $ids)));
        $params = rtrim($params, ',');

        $status = delete('users', "id IN($params)", explode(',', $ids));
        if ($status) {
            $msg = "Xóa thành công";
            $msgType = 'success';
        } else {
            $msg = "Xóa không thành công";
            $msgType = 'error';
        }
    }

    setSession('msg', $msg);
    setSession('msg_type', $msgType);
    redirect("/php_mysql/lists.php");
}
