<?php
session_start();
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['update_cart'])) {
    $quantity = $_POST['quantity'];
    if (!empty($quantity)) {
        foreach ($quantity as $productId => $quantity) {
            if ($quantity > 0) {
                $_SESSION['cart'][$productId] = $quantity;
            }
        }
    }

    header("Location: cart.php");
}
