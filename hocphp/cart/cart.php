<?php
require_once './data.php';
require_once './functions.php';
session_start();

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h2>Giỏ hàng</h2>
    <?php if (!empty($_SESSION['cart'])): ?>
    <form action="/cart/action_cart.php" method="post">
        <table border="1" width="100%">
            <tr>
                <th width="5%">STT</th>
                <th>Tên</th>
                <th>Giá</th>
                <th width="10%">Số lượng</th>
                <th width="20%">Thành tiền</th>
                <th width="5%">Xóa</th>
            </tr>
            <?php
$count = 0;
foreach ($_SESSION['cart'] as $productId => $quantity):
    $count++;
    $product = getProduct($productId);
    ?>
            <tr>
                <td><?php echo $count; ?></td>
                <td><?php echo $product['name']; ?></td>
                <td><?php echo $product['price'] ?></td>
                <td>
                    <input type="number" name="quantity[<?php echo $productId ?>]" value="<?php echo $quantity; ?>">
                </td>
                <td><?php echo $product['price'] * $quantity; ?></td>
                <td>
                    <button name="delete[<?php echo $productId ?>]">&times</button>
                </td>
            </tr>
            <?php endforeach;?>
        </table>
        <hr>
        <button name="update_cart">Cập nhật giỏ hàng</button>
        <button name="delete_cart">Xóa giỏ hàng</button>
    </form>

    <?php else: ?>
    <p>Không có sản phẩm trong giỏ hàng</p>
    <?php endif;?>
</body>

</html>