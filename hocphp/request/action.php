<?php
//Lấy body
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    echo $name . '<br/>';
    echo $email . '<br/>';
}

//Hàm isset() --> Kiểm tra biến tồn tại hay không?
//Hàm empty() --> Kiểm 1 biến không tồn tại hoặc không có dữ liệu

/*
0
""
[]
null
false
 */
