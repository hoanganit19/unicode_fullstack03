<?php
require_once './classes/Database.php';
require_once './classes/User.php';

$user = new User;
$userList = $user->all();
echo '<pre>';
print_r($userList);
echo '</pre>';

echo $user->table;
