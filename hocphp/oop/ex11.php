<?php
//Namespace: Đặt không gian tên cho 1 class
//Tác dụng: Tránh trùng lặp class, hỗ trợ Autoload
use Home\Home;
use Home\User\Home as HomeUser;

require_once 'modules/Home.php';
require_once 'modules/users/UserCourse.php';
require_once 'modules/users/Home.php';

$home = new Home();
$user = new HomeUser();
