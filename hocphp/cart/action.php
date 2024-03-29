<?php
session_start();

//Xử lý thêm vào session

//1. Thiết kế cấu trúc session
/*
$_SESSION['cart'][$productId] = $quantity
 */
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $productId = $_GET['id'];
    $quantity = $_POST['quantity'];
    if ($productId && $quantity) {
        $quantity = $quantity <= 0 ? 1 : $quantity;

        if (!empty($_SESSION['cart'][$productId])) {
            $_SESSION['cart'][$productId] += $quantity;
        } else {
            $_SESSION['cart'][$productId] = $quantity;
        }
    }
    header("Location: cart.php");
}
