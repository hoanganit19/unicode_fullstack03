<?php
require_once 'connect.php';
require_once 'functions.php';

// $sql = "INSERT INTO users(id, name, email, password, status) VALUES(:id, :name, :email, :password, :status)";

// $statement = $conn->prepare($sql);
// $statement->execute([
//     'id' => 8,
//     'name' => "User 8",
//     'email' => 'user8@gmail.com',
//     'password' => '123456',
//     'status' => true,
// ]);

// $status = create('users', [
//     'id' => 10,
//     'name' => "User 10",
//     'email' => 'user10@gmail.com',
//     // 'password' => '123456',
//     // 'status' => true,
// ]);
// var_dump($status);

// $status = update('users', [
//     'password' => '123456',
//     'status' => true,
// ], 'id = :id', [
//     'id' => 10,
// ]);
// var_dump($status);

$status = delete("users");
var_dump($status);
