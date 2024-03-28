<?php
/*
Cookie nằm ở phía trình duyệt, chỉ lưu trữ Text

Các cách set cookie
- Dùng JS (Trình duyệt) --> Học ở Front-End
- Dùng HTTP Response (Back-end)
Set Header tên Set-Cookie

Các cách get cookie
- Dùng JS (Trình duyệt) --> Học ở Front-End
- Dùng HTTP Request (Back-end)
Get Header Cookie (Mặc định trình duyệt đính kèm header cookie ở mỗi Request)
 */

//Set cookie
// setcookie('username', 'hoangan.web', time() + 300, '/', '', false, true);

//Get cookie
// $username = $_COOKIE['username'];
// echo $username;

// echo '<pre>';
// print_r($_COOKIE);
// echo '</pre>';

/*
Session
- Lưu trữ trên Server
- Server sẽ trả về 1 cookie có chứa session id
- Khi trình duyệt gửi request ==> Kèm theo session id
- Server check session id có tồn tại không
- Trả về nội dung trong session đã lưu

==> Cookie mở rộng
 */
session_name('unicode_session');
session_save_path('./sessions');
session_start(); //Kích hoạt session

//Set session
// $_SESSION['username'] = 'Hoàng An';

//Get session
echo '<pre>';
print_r($_SESSION);
echo '</pre>';

//Xóa session
unset($_SESSION['username']);

//Xóa tất cả session
session_destroy(); // --> Xóa file

session_unset(); // --> Xóa hết nội dung trong file

//Lưu ý: Khi làm việc với session không cần chuyển thành chuỗi
