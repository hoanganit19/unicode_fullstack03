<?php
session_start();
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $image = $_FILES['image'];
    $message = '';
    $output = '';

    if ($image['error'] == 0) {
        $filename = $image['name'];
        $tmpPath = $image['tmp_name'];
        $size = $image['size'];
        $type = $image['type'];
        $allowTypes = ['image/jpg', 'image/png', 'image/jpeg'];
        $maxSize = 1048576;
        if (!in_array($type, $allowTypes)) {
            $message = 'Định dạng file không cho phép';

        } elseif ($size > $maxSize) {
            $message = 'Dung lượng không cho phép';

        } else {
            $filenameArr = explode('.', $filename);
            $ext = end($filenameArr);
            $filename = md5(uniqid()) . '.' . $ext;
            $upload = move_uploaded_file($tmpPath, './data/' . $filename);
            $output = './data/' . $filename;
            if ($upload) {
                $message = 'Thành công';
                $status = true;
            } else {
                $message = 'Thất bại';

            }
        }

    } else {
        $message = 'Đã có lỗi xảy ra';

    }
    // $cookie = [
    //     'message' => $message,
    //     'output' => $output,
    // ];
    // header("Set-Cookie: upload_status=" . json_encode($cookie) . ';path=/');
    $_SESSION['result'] = [
        'message' => $message,
        'output' => $output,
    ];
    header("Location: index.php");
}

/*
Request HTTP ==> Content type ==> Server
- application/json --> Text
- application/x-www-urlencoded --> Text
- application/form-data --> Text + Files

Quy trình upload ảnh

- Trình duyệt di chuyển file ở local lên server và lưu vào bộ nhớ tạm ở server
- Dùng ngôn ngữ lập trình phía server di chuyển file ở folder tạm qua folder cần lưu trữ
 */
