<?php
//Response: Thông tin trả về từ server

//1. Response body: Text, HTML, JSON
// echo '<h1>Học lập trình không khó</h1>';
$users = [
    'name' => 'Hoàng An',
    'email' => 'hoangan.web@gmail.com',
];
// echo json_encode($users);

//2. Response status
// http_response_code(201);

//3. Header
// header("X-Api-Key: 123", true, 404);

//4. Header Location
header('Location: https://google.com');
