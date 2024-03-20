<?php
$users = [
    [
        'name' => 'Hoang An',
        'email' => 'user1@gmail.com',
        'age' => 32,
    ],
    [
        'name' => 'Hoang Anh',
        'email' => 'user2@gmail.com',
        'age' => 30,
    ],
    [
        'name' => 'Tuan Anh',
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

//Tìm hiểu hàm in_array(), thực hiện yêu cầu sau
/*
Thêm khách hàng mới vào mảng users, nếu email bị trùng thì không cho thêm
*/

$newUser = [
    'name' => 'User 6',
    'email' => 'user6@gmail.com',
    'age' => 30,
];
// $check = true;
// foreach ($users as $user) {
//     if ($user['email'] == $newUser['email']) {
//         $check = false; 
//         break;
//     }
// }

// if ($check) {
//     $users[] = $newUser;
// }

$check = in_array($newUser['email'], array_column($users, 'email'));
if (!$check) {
    $users[] = $newUser;
}

//Tìm kiếm: Trả về danh sách các users có tên chứa từ khóa
$keyword = 'an'; //Lưu ý: Không phân biệt chữ hoa thường
/*
- Tạo 1 mảng mới
- Lặp qua từng phần tử mảng cũ
- Tìm kiếm thỏa mãn điều kiện của keyword
- Lưu phần tử thỏa mãn điều kiện vào mảng mới
*/
// $result = [];
// foreach ($users as $user){
//     if (strpos(strtoupper($user['name']), strtoupper($keyword)) !== false) {
//         $result[] = $user;
//     }
// }

// $users = $result;

$users = array_filter($users, function($user) use ($keyword) {
    return strpos(strtoupper($user['name']), strtoupper($keyword)) !== false;
});

// $result = [];
// foreach ($users as $user) {
//     $result[] = $user;
// }

// $users = $result;

$users = array_values($users); //Khởi tạo mảng mới có value giống mảng cũ nhưng index sắp xếp lại

//Request, Response: $_GET, $_POST