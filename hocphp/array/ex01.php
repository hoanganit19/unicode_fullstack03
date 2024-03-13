<?php
//Tổng hợp nhiều giá trị trong 1 biến
/*
- Mảng tuần tự: Index từ 0, 1, 2, 3,...
- Mảng hỗn hợp: Index nhận các loại: số, chuỗi,..
 */
/*
$users = [
'User', 'User 2', 'User 3',
];

echo '<pre>';
print_r($users);
echo '</pre>';

$customers = [
'name' => 'Hoàng An',
'email' => 'hoangan.web@gmail.com',
'age' => 32,
'Hello anh em',
];
echo '<pre>';
print_r($customers);
echo '</pre>';
 */
$users = [
    [
        'name' => "User 1",
        'email' => 'user1@gmail.com',
    ],
    [
        'name' => "User 2",
        'email' => 'user2@gmail.com',
    ],
    [
        'name' => "User 3",
        'email' => 'user3@gmail.com',
    ],
];
$users[] = [
    'name' => "User 4",
    'email' => 'user4@gmail.com',
];
/*
$users[2]['email'] = 'update@gmail.com';
unset($users[1]);
 */
echo '<pre>';
print_r($users);
echo '</pre>';
/*
echo count($users); //Trả về số lượng phần tử của mảng
if (is_array($users)) {
echo 'Đây là mảng';
}
 */
/*
if (is_array($users)) {
$usersCount = count($users);
for ($i = 0; $i < $usersCount; $i++) {
$user = $users[$i];
echo $user['name'] . ' - ' . $user['email'] . '<br/>';
}
}
 */
/*
foreach ($users as $user) {
echo $user['name'] . ' - ' . $user['email'] . '<br/>';
}
 */

$customer = [
    'name' => 'Hoàng An',
    'email' => 'hoangan.web@gmail.com',
    'address' => 'Hà Nội',
];
foreach ($customer as $key => $value) {
    echo $key . ' - ' . $value . '<br/>';
}
