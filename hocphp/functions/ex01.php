<?php
//underscore
//Đặt tên theo camelCase

function getMessage($msg, $type = 'success')
{
    echo $msg;
    echo '<br/>';
    echo $type;
}

function getTotal($a, $b)
{
    $total = $a + $b;
    return $total;
}

function example()
{
}

getMessage('PHP', 'error');
echo '<hr/>';
echo "Tổng là: " . getTotal(10, 20);

echo '<hr/>';

$result = example();

var_dump($result);

echo '<hr/>';

$data = "Học PHP không khó";
function getData()
{
    global $data; //Sử dụng biến toàn cục
    return $data;
}
function setData($value)
{
    global $data;
    $data = $value;
}
setData('Hello anh em');
echo getData("Hoàng An");

echo '<hr/>';

//Kiểm tra hàm có bị trùng hay không?
if (function_exists('getData')) {
    echo 'Hàm đã bị trùng';
}

//Rest Parameter --> Tham số còn lại
function getMax($prefix, ...$args)
{
    echo $prefix;
    echo '<br/>';
    var_dump($args);
}
getMax('Kết quả', 1, 2, 3, 4);

echo '<hr/>';

//Tham trị, tham chiếu
$a = 10;
$b = $a;
$b = 20;
echo 'a = ' . $a . '<br/>';
echo 'b = ' . $b . '<br/>';

// --> Tham trị

$a = 10;
$b = &$a;
$b = 20;
echo 'a = ' . $a . '<br/>';
echo 'b = ' . $b . '<br/>';
// --> Chỉ định tham chiếu (tham biến)

/*
Tham số: Khi định nghĩa hàm --> parameter
Đối số: Định nghĩa hàm --> argument
Tham trị: passed by value
Tham chiếu: Thay đổi dữ liệu biến được tham chiếu --> passed by reference
*/
echo '<hr/>';
function addData(&$data, $value)
{
    $data .= $value . ',';
}

$str = "";
addData($str, 'Item 1');
addData($str, 'Item 2');
addData($str, 'Item 3');
addData($str, 'Item 4');
echo $str;
