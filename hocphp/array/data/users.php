<?php
$users = [
    [
        'name' => 'User 1',
        'email' => 'user1@gmail.com',
        'age' => 32,
    ],
    [
        'name' => 'User 2',
        'email' => 'user2@gmail.com',
        'age' => 30,
    ],
    [
        'name' => 'User 3',
        'email' => 'user3@gmail.com',
        'age' => 28,
    ],
    [
        'name' => 'User 4',
        'email' => 'user4@gmail.com',
        'age' => 29,
    ],
];

//Sắp xếp tăng dần theo tuổi
/*
Duyệt qua tất cả các phần tử
So sánh từng phần tử với tất cả phần tử sau nó
So sánh tuổi và đổi chỗ
 */
for ($i = 0; $i < count($users) - 1; $i++) {

    for ($j = $i + 1; $j < count($users); $j++) {

        //Kiểm tra điều kiện:
        //$users[$i]['age'] > $users[$j]['age']
        //Đổi chỗ $users[$i] với $users[$j]
        if ($users[$i]['age'] > $users[$j]['age']) {
            $temp = $users[$i];
            $users[$i] = $users[$j];
            $users[$j] = $temp;
        }
    }

}
//Thuật toán sắp xếp nổi bọt

$newUser = [
    'name' => 'User 5',
    'email' => 'user5@gmail.com',
    'age' => 35,
];

//Thêm biến $newUser vào đầu mảng $users
/*
$newArr = [$newUser];
foreach ($users as $user) {
$newArr[] = $user;
}

$users = $newArr;
 */
array_unshift($users, $newUser); //Thêm phần tử vào đầu mảng

//Tìm tất cả các users. Nếu user nào có tuổi < 30 --> Cộng thêm 2 tuổi
$number = 3;
$users = array_map(function ($user) use ($number) {
    if ($user['age'] < 30) {
        $user['age'] += $number;

    }
    return $user;
}, $users);
