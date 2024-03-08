<?php
$fullname = 'Hello "anh" em';
/*
echo $fullname[0] . '<br/>';
echo $fullname[1] . '<br/>';
echo $fullname[2] . '<br/>';
*/
//echo strlen($fullname);
echo $fullname . '<br/>';
echo addcslashes($fullname, '"') . '<br/>';
echo addslashes($fullname) . '<br/>'; // \ --> Ký tự escape

$str = "<h1>Hello anh em</h1>";
echo htmlentities($str) . '<br/>';

$str = "&lt;h1&gt;Hello anh em&lt;/h1&gt;";
echo html_entity_decode($str);

echo '<hr/>';

$str = "Hoc PHP khong PHP kho";
echo strpos($str, 'PHP') . '<br/>'; //Trả về vị trí đầu tiên
echo strripos($str, 'PHP') . '<br/>'; //Trả về vị trí cuối cùng
echo substr($str, 4, 5) . '<br/>'; //Cắt từ vị trí thứ 4 đến vị trí thứ 8
echo substr($str, -4) . '<br/>'; //Lấy 4 ký tự cuối chuỗi
echo strstr($str, 'PHP') . '<br/>'; //Lấy từ chuỗi PHP đến hết chuỗi
echo str_replace('PHP', 'Javascript', $str) . '<br/>';
echo str_repeat('*', 10) . '<br/>';

//Tách chuỗi thành mảng
echo '<pre>';
var_dump(explode(' ', $str));
echo '</pre>';

//Nối mảng thành chuỗi
$arr = ['PHP', 'Javascript', 'React', 'Laravel'];
//echo implode(' ', $arr) . '<br/>';
echo join(' ', $arr) . '<br/>';

echo strtoupper($str) . '<br/>';
echo strtolower($str) . '<br/>';
echo ucfirst('ta hoang an') . '<br/>';
echo ucwords('ta hoang an') . '<br/>';
$output = trim('/hello/', '/');
var_dump($output);
