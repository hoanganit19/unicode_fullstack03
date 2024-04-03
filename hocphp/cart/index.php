<?php
session_start();
require_once './data.php';
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h2>Danh sách sản phẩm</h2>
    <h3>Giỏ hàng (<?php echo count($_SESSION['cart']) ?>) <a href="/cart/cart.php">Vào giỏ hàng</a></h3>
    <?php foreach ($products as $product): ?>
    <div>
        <h3><?php echo $product['name']; ?></h3>
        <p><?php echo $product['price']; ?></p>
        <form action="/cart/action.php?id=<?php echo $product['id']; ?>" method="post">
            <input type="number" value="1" name="quantity" />
            <button>Thêm vào giỏ</button>
        </form>
    </div>
    <?php endforeach;?>

</body>

</html>