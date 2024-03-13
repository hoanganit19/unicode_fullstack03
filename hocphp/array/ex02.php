<?php
require_once './data/users.php';
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <table border="1" cellpadding="0" cellspacing="0" width="100%">
        <tr>
            <th width="5%">STT</th>
            <th>Tên</th>
            <th>Email</th>
            <th>Tuổi</th>
        </tr>
        <tbody>
            <?php foreach ($users as $key => $user): ?>
            <tr>
                <td><?php echo $key + 1; ?></td>
                <td><?php echo $user['name'] ?></td>
                <td><?php echo $user['email']; ?></td>
                <td><?php echo $user['age']; ?></td>
            </tr>
            <?php endforeach;?>
        </tbody>
    </table>
</body>

</html>