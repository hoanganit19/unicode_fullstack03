<?php
//Object: Đối tượng

//Để tạo object

/*
Cách 1: Dùng class

Cách 2: Dùng stdClass --> Object rỗng

Cách 3: Chuyển từ mảng
 */

// $user = new stdClass();
// $user->name = 'Hoàng An';
// $user->email = 'hoangan.web@gmail.com';
// var_dump($user);
// echo $user->name . '<br/>';
// echo $user->email . '<br/>';

// $user = [
//     'name' => 'Hoàng An',
//     'email' => 'hoangan.web@gmail.com',
// ];
// $user = (object) $user; //Ép kiểu
// var_dump($user);
// echo $user->name . '<br/>';
// echo $user->email . '<br/>';

$users = [
    [
        'id' => 1,
        'name' => 'User 1',
        'email' => 'user1@gmail.com',
    ],
    [
        'id' => 2,
        'name' => 'User 2',
        'email' => 'user2@gmail.com',
    ],
    [
        'id' => 3,
        'name' => 'User 3',
        'email' => 'user3@gmail.com',
    ],
];

//Yêu cầu: Chuyển mảng con thành object
// $users = array_map(function ($user) {
//     return (object) $user;
// }, $users);

// foreach ($users as $user) {
//     echo $user->name . '<br/>';
// }

// $users = new ArrayIterator($users);
// echo $users->count() . '<br/>';

// var_dump($users);

//Collection
