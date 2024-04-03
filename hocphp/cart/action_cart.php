<?php
session_start();
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['update_cart'])) {
        $quantity = $_POST['quantity'];
        if (!empty($quantity)) {
            foreach ($quantity as $productId => $quantity) {
                if ($quantity > 0) {
                    $_SESSION['cart'][$productId] = $quantity;
                } else {
                    unset($_SESSION['cart'][$productId]);
                }
            }
        }
    }

    if (!empty($_POST['delete'])) {
        $productId = array_keys($_POST['delete'])[0];
        unset($_SESSION['cart'][$productId]);
    }

    if (isset($_POST['delete_cart'])) {
        unset($_SESSION['cart']);
    }

    header("Location: cart.php");
}
