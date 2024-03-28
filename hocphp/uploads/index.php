<?php
session_start();
// if (!empty($_SERVER['HTTP_COOKIE'])) {
//     $cookie = $_SERVER['HTTP_COOKIE'];

//     $cookie = explode('upload_status=', $cookie);
//     if (!empty($cookie[1])) {
//         $cookie = json_decode($cookie[1], true);
//     }
//     //Xóa cookie
//     header("Set-Cookie: upload_status=;path=/");
// }
if (!empty($_SESSION['result'])) {
    $result = $_SESSION['result'];
    unset($_SESSION['result']);
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
echo !empty($result['message']) ? $result['message'] : ''
?>
    <form action="./action.php" method="post" enctype="multipart/form-data">
        <input type="file" name="image">
        <button>Upload</button>
    </form>
    <?php
echo !empty($result['output']) ? '<img src="' . $result['output'] . '"' : '';
?>
</body>

</html>