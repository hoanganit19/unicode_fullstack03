<?php
//Gọi hàm thông qua hàm

//Declaration function
function hello($a, $b)
{
    echo 'Hello anh em: ' . $a . ' - ' . $b;
}
$name = 'hello';

call_user_func($name, 'Unicode', 'PHP');

echo '<hr/>';

//Expression function
$example = function () {
    echo 'Example';
};
call_user_func($example);

/*
anonymous function
lambda function
*/
echo '<hr/>';
function getA($func)
{
    echo 'getA <br/>';
    $func();
}

$msg = 'Unicode';

getA(function () use ($msg) {
    echo 'Hello anh em <br/>';
    echo $msg;
});

/*
function handle()
{
    echo 'Hello anh em';
}
*/
/*
$handle = function () {
    echo 'Hello anh em';
};
getA($handle);
*/

echo '<hr/>';

$b = 'Closure';
function display($a)
{
    global $b;
    $msg = "Unicode"; //Biến cục bộ của hàm display

    //IIFE
    (function () use ($a, $msg, $b) {
        echo $msg;
        echo '<br/>';
        echo $a;
        echo '<br/>';
        echo $b;
    })();
}
display('PHP');

//Closure: Định nghĩa hàm có thể truy cập được các biến của phạm vi chứa nó

echo '<hr/>';

//Giải thuật đệ quy
//Ví dụ: tính tổng s = 1 + 2 + 3 + ... + n 
function total($n)
{
    if ($n == 1) {
        return $n;
    }
    return $n + total($n - 1);
}
$result = total(10);
echo 'Tổng = ' . $result;

/*
Lưu ý: 
- Thay đổi đối số truyền vào
- Điều kiện dừng
*/