<?php
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

function fetch($sql, $data = [])
{
    global $conn;
    $statement = $conn->prepare($sql);
    $statement->execute($data);
    return $statement->fetch(PDO::FETCH_OBJ);
}

function fetchAll($sql, $data = [])
{
    global $conn;
    $statement = $conn->prepare($sql);
    $statement->execute($data);
    return $statement->fetchAll(PDO::FETCH_OBJ);
}

function create($table, $data)
{
    global $conn;
    $keys = array_keys($data);
    $attributes = implode(', ', $keys);
    // echo $attributes . '<br/>';
    $values = ':' . implode(', :', $keys);
    // echo $values . '<br/>';
    $sql = "INSERT INTO {$table}({$attributes}) VALUES({$values})";
    $statement = $conn->prepare($sql);
    return $statement->execute($data);
}

function update($table, $updateData = [], $condition = null, $conditionData = [])
{
    global $conn;
    $keys = array_keys($updateData);
    $updateStr = "";
    foreach ($keys as $key) {
        $updateStr .= $key . "=:" . $key . ", ";
    }
    $updateStr = rtrim($updateStr, ', ');
    $sql = "UPDATE {$table} SET {$updateStr}";
    if ($condition) {
        $sql .= " WHERE {$condition}";
    }

    $statement = $conn->prepare($sql);
    $data = array_merge($updateData, $conditionData);
    return $statement->execute($data);
    //UPDATE users SET password=:password, status=:status WHERE id = :id
}

function delete($table, $condition = null, $conditionData = [])
{
    global $conn;
    $sql = "DELETE FROM {$table}";
    if ($condition) {
        $sql .= " WHERE {$condition}";
    }

    $statement = $conn->prepare($sql);
    return $statement->execute($conditionData);

}

function rowCount($sql, $data = [])
{
    global $conn;
    $statement = $conn->prepare($sql);
    $statement->execute($data);
    return $statement->rowCount(); //Trả về số dòng của câu lệnh SQL
}

function lastId()
{
    global $conn;
    return $conn->lastInsertId(); //Trả về id vừa thực hiện câu lệnh Insert
}

function goPage($page = 1)
{
    //Xử lý query string
    if (!empty($_SERVER['QUERY_STRING'])) {
        $query = explode('&', $_SERVER['QUERY_STRING']);
        //Kiểm tra xem trong query có page không
        //Nếu có --> Thay thế page bằng giá trị mới
        //Nếu không có --> Thêm mới page = giá trị mới
        $check = false;
        foreach ($query as $key => $item) {
            $itemArr = explode('=', $item);
            if ($itemArr[0] == 'page') {
                $itemArr[1] = $page;
                $check = true;
            }
            $query[$key] = implode('=', $itemArr);
        }

        if (!$check) {
            $query[] = "page=" . $page;
        }

        $queryString = implode('&', $query);
        return '?' . $queryString;
    }

    return '?page=' . $page;
}

function redirect($path)
{
    header("Location: $path");
    exit;
}

function error($errors, $fieldName)
{
    if (!empty($errors[$fieldName])) {
        return reset($errors[$fieldName]);
    }
    return null;
}

function showMessage($msg, $msgType = 'success')
{

    $className = $msgType == 'success' ? 'success' : 'danger';
    $html = '<div class="alert alert-' . $className . '">' . $msg . '</div>';
    return $msg ? $html : '';
}

function old($data, $name, $default = null)
{
    if (isset($data[$name])) {
        return $data[$name];
    }
    return $default ?? '';
}

function authenticate()
{
    $user = getSession('user');

    if ($user) {
        $userDb = fetch("SELECT * FROM users WHERE id=:id", ['id' => $user->id]);
        if (!$userDb) {
            redirect('/php_mysql/auth/login.php');
        } else if (!$userDb->status) {
            redirect('/php_mysql/auth/block.php');
        } else {
            getSession('user', $user);
        }
    } else {
        redirect('/php_mysql/auth/login.php');
    }

}

function guest()
{
    $user = getSession('user');
    if ($user) {
        redirect('/php_mysql/lists.php');
    }
}

function getUserLogin()
{
    $user = getSession('user');

    return $user;
}

function sendMail($to, $subject, $content)
{
    $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->SMTPDebug = SMTP::DEBUG_SERVER; //Enable verbose debug output
        $mail->isSMTP(); //Send using SMTP
        $mail->Host = 'smtp.gmail.com'; //Set the SMTP server to send through
        $mail->SMTPAuth = true; //Enable SMTP authentication
        $mail->Username = 'hoangan.web@gmail.com'; //SMTP username
        $mail->Password = 'uxnq lfrd dzbb ellq'; //SMTP password --> Mật khẩu ứng dụng
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; //Enable implicit TLS encryption
        $mail->Port = 465; //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

        //Recipients
        $mail->setFrom('hoangan.web@gmail.com', 'Unicode Academy');
        $mail->addAddress($to); //Name is optional

        //Content
        $mail->isHTML(true); //Set email format to HTML
        $mail->Subject = $subject;
        $mail->Body = $content;
        $mail->CharSet = "UTF-8"; //Hỗ trợ Tiếng Việt

        $mail->send();
        echo 'Message has been sent';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
