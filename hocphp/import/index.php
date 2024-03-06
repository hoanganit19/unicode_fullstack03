<?php
//echo '<pre>';
//var_dump($_SERVER);
//echo '</pre>';
require './includes/header.php';
$pathname = $_SERVER['PATH_INFO'] ?? '/';
$module = 'home';
if ($pathname != '/') {
    $module = $pathname;
}
$path = './modules/' . $module . '.php';
if (!file_exists($path)) {
    $path = './modules/error.php';
}
require $path;
require './includes/footer.php';
?>
<!--
    index.php
        header.php
            logo.php
            menu.php
            account.php
        footer.php
            menu.php
            copyright.php
Nhược điểm: dữ liệu sẽ bị đè nếu trùng nhau: biến, function, class,...            
-->