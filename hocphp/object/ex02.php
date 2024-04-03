<?php
$user = new stdClass;
$user->name = 'Hoàng An';
$user->children = new stdClass();
$user->children->name = 'Tạ Hoàng An';
// $user->email = 'hoangan.web@gmail.com';

echo $user->children->name . '<br/>';
echo $user->name . '<br/>';

//Kiểm tra thuộc tính có tồn tại hay không?
if (property_exists($user, 'email')) {
    echo $user->email;
}