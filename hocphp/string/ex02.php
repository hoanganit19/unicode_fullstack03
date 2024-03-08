<?php
/*
Số điện thoại: 0388875179
Ẩn 4 số ở giữa
--> 0388****79
*/
$phone = '0491000035576';

$output = substr($phone, 0, 4) . str_repeat('*', 4) . substr($phone, 8);
echo $output . '<br/>';


/*
Viết hàm kiểm tra độ mạnh, yếu của password
- Độ dài >=8 ký tự
- Có ít nhất 1 chữ HOA
- Có ít nhất 1 chữ thường
- Có ít nhất 1 ký tự đặc biệt: !@#$%^&*
- Có ít nhất chữ số
*/
function isStrengthPassword($password)
{
    $checkUpper = false;
    $checkLower = false;
    $checkSymbol = false;
    $checkNumber = false;
    $checkLength = false;
    if (strlen($password) >= 8) {
        $checkLength = true;
        $number = '0123456789';
        $symbol = "!@#$%^&*";
        $upperCount = 0;
        $lowerCount = 0;
        for ($i = 0; $i < strlen($password); $i++) {
            $char = $password[$i];
            //Kiểm tra chữ hoa
            if ($char >= 'A' && $char <= 'Z') {
                $upperCount++;
            }
            //Kiểm tra chữ thường
            if ($char >= 'a' && $char <= 'z') {
                $lowerCount++;
            }
            //Kiểm tra số
            if (strpos($number, $char) !== false) {
                $checkNumber = true;
            }
            //Kiểm tra ký tự đặc biệt
            if (strpos($symbol, $char) !== false) {
                $checkSymbol = true;
            }
        }

        if ($upperCount >= 2) {
            $checkUpper = true;
        }

        if ($lowerCount >= 2) {
            $checkLower = true;
        }
    }

    if ($checkLength && $checkLower && $checkUpper && $checkNumber && $checkSymbol) {
        return true;
    }
    return false;
}
$password = 'HOANGANab#123';
if (isStrengthPassword($password)) {
    echo 'Mật khẩu mạnh';
} else {
    echo 'Mật khẩu yếu';
}
