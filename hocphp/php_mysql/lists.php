<?php
session_start();
require_once './includes/connect.php';
require_once './includes/functions.php';
require_once './includes/session.php';
//Kiểm tra đăng nhập
authenticate();
$userLogin = getUserLogin();

$limit = 3;
$page = 1;
if (!empty($_GET['page']) && is_numeric($_GET['page'])) {
    $page = $_GET['page'];
}

$offset = ($page - 1) * $limit;

$filter = "WHERE name IS NOT NULL";
if (!empty($_GET['status']) && ($_GET['status'] == 'active' || $_GET['status'] == 'inactive')) {
    $status = $_GET['status'] == 'active' ? 1 : 0;
    $filter .= " AND status=$status";
}
if (!empty($_GET['keyword'])) {
    $keyword = $_GET['keyword'];
    //WHERE LIKE
    $filter .= " AND (name LIKE '%{$keyword}%' OR email LIKE '%{$keyword}%' OR phones.phone LIKE '%{$keyword}%')";
}

//Tính tổng số trang = Tổng số bản ghi / Số bản ghi trên 1 trang (limit)
$totalRows = rowCount("SELECT users.id FROM users LEFT JOIN phones ON users.id=phones.user_id $filter");

$totalPages = ceil($totalRows / $limit);

$sql = "SELECT users.*, phones.phone FROM users LEFT JOIN phones ON users.id=phones.user_id $filter ORDER BY id DESC LIMIT $limit OFFSET $offset";
$users = fetchAll($sql);

$msg = getFlash('msg');
$msgType = getFlash('msg_type');
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Danh sách người dùng</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css">
</head>

<body>
    <div class="container">
        <div class="d-flex justify-content-between align-items-center">
            <h2>Danh sách người dùng</h2>
            <ul class="list-unstyled d-flex gap-3 align-item-center">
                <li>Chào bạn: <?php echo $userLogin->name; ?></li>
                <li><a href="#">Tài khoản</a></li>
                <li><a href="/php_mysql/auth/logout.php">Đăng xuất</a></li>
            </ul>
        </div>
        <a href="/php_mysql/add.php" class="btn btn-primary mb-2">Thêm mới</a>
        <form action="" class="mb-3">
            <div class="row">
                <div class="col-3">
                    <select name="status" class="form-select">
                        <option value="all">Tất cả</option>
                        <option value="active"
                            <?php echo !empty($_GET['status']) && $_GET['status'] == 'active' ? 'selected' : '' ?>>Kích
                            hoạt</option>
                        <option value="inactive"
                            <?php echo !empty($_GET['status']) && $_GET['status'] == 'inactive' ? 'selected' : '' ?>>
                            Chưa
                            kích hoạt</option>
                    </select>
                </div>
                <div class="col-7">
                    <input type="search" name="keyword" placeholder="Từ khóa..." class="form-control"
                        value="<?php echo !empty($_GET['keyword']) ? $_GET['keyword'] : ''; ?>" />
                </div>
                <div class="col-2 d-grid">
                    <button type="submit" class="btn btn-primary">Tìm kiếm</button>
                </div>
            </div>
        </form>
        <?php echo showMessage($msg, $msgType); ?>

        <table class="table table-bordered">
            <tr>
                <th width="5%">
                    <input type="checkbox">
                </th>
                <th>Tên</th>
                <th>Email</th>
                <th>Điện thoại</th>
                <th>Trạng thái</th>
                <th width="5%">Sửa</th>
                <th width="5%">Xóa</th>
            </tr>
            <?php foreach ($users as $key => $user): ?>
            <tr>
                <td>
                    <input type="checkbox" class="delete-item" value="<?php echo $user->id; ?>" />
                </td>
                <td><?php echo $user->name; ?></td>
                <td><?php echo $user->email; ?></td>
                <td><?php echo $user->phone; ?></td>
                <td><?php echo $user->status ? '<span class="badge bg-success">Kích hoạt</span>' : '<span class="badge bg-danger">Chưa kích hoạt</span>' ?>
                </td>
                <td><a href="/php_mysql/edit.php?id=<?php echo $user->id; ?>" class="btn btn-warning">Sửa</a></td>
                <td><a onclick="handleDelete(event, <?php echo $user->id ?>)" href="/php_mysql/actions/delete.php"
                        class="btn btn-danger">Xóa</a>
                </td>
            </tr>
            <?php endforeach;?>
        </table>
        <div class="d-flex justify-content-between align-items-center">
            <form method="post" onsubmit="return confirm('Bạn có chắc chắn?')" action="/php_mysql/actions/deletes.php"
                class="form-deletes">
                <input type="hidden" name="ids" value="">
                <button class="btn btn-danger">Xóa đã chọn</button>
            </form>
            <nav class="d-flex justify-content-end">
                <ul class="pagination">
                    <?php if ($page > 1): ?>
                    <li class="page-item"><a class="page-link" href="<?php echo goPage($page - 1) ?>">Trước</a></li>
                    <?php endif;?>
                    <?php for ($i = 1; $i <= $totalPages; $i++): ?>
                    <li class="page-item"><a class="page-link <?php echo $i == $page ? 'active' : '' ?>"
                            href="<?php echo goPage($i); ?>"><?php echo $i; ?></a></li>
                    <?php endfor;?>
                    <?php if ($page < $totalPages): ?>
                    <li class="page-item"><a class="page-link" href="<?php echo goPage($page + 1) ?>">Sau</a></li>
                    <?php endif;?>
                </ul>
            </nav>
        </div>

    </div>
    <script>
    function handleDelete(event, id) {
        event.preventDefault();
        if (confirm('Bạn có chắc chắn?')) {
            const href = event.target.href;
            const form = document.createElement('form');
            form.method = 'post';
            form.action = href;
            const input = document.createElement('input');
            input.type = 'hidden';
            input.value = id;
            input.name = 'id';
            form.append(input);
            document.body.append(form);
            console.log(form);
            form.submit();
        }

    }

    function handleChangeDelete() {
        const deleteItems = document.querySelectorAll('.delete-item');
        let ids = [];
        const formDeletes = document.querySelector('.form-deletes');
        deleteItems.forEach((item) => {
            item.addEventListener('change', ({
                target
            }) => {
                if (target.checked) {
                    ids.push(+target.value);
                } else {
                    ids = ids.filter((id) => id !== +target.value)
                }

                formDeletes.children[0].value = ids.join();
            })
        })
    }

    handleChangeDelete();
    </script>
</body>

</html>

<?php
/*
Yêu cầu 1: Trả về số điện thoại
Yêu cầu 2: Tìm kiếm theo số điện thoại

Buổi sau:
- Đăng nhập
- Đăng ký
- OOP ==> Lập trình hướng đối tượng
 */
?>