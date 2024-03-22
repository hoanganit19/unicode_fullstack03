<?php
//HTTP Request: Lấy các yêu cầu từ phía Client gửi lên
/*
1. HTTP Method

2. Path

3. Body

4. Query String
*/

//Lấy http method
echo $_SERVER['REQUEST_METHOD']. '<br/>';

//Lấy path
echo $_SERVER['REQUEST_URI'].'<br/>';

//Lấy query string
echo $_SERVER['QUERY_STRING'].'<br/>';

//Parse query string
echo $_GET['category'].'<br/>';
echo $_GET['keyword'].'<br/>';

//Trả về thông tin server
// echo '<pre>'; 
// print_r($_SERVER); 
// echo '</pre>';

//Bóc tách URL thành từng phần
$fullUrl = 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
$url = parse_url($fullUrl);
// echo '<pre>'; 
// print_r($url); 
// echo '</pre>';

//Header
$userAgent = $_SERVER['HTTP_USER_AGENT'];
$cookie = $_SERVER['HTTP_COOKIE'];
echo $userAgent.'<br/>';
echo $cookie.'<br/>';

$headers = getallheaders();
echo '<pre>'; 
print_r($headers); 
echo '</pre>';