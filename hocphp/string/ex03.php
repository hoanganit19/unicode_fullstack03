<style>
    span {
        background: yellow;
    }
</style>
<?php
$keyword = 'Biden';
$content = <<<EOT
Tổng thống Mỹ Joe Biden tối 7/3 (sáng 8/3 giờ Hà Nội) đọc Thông điệp Liên bang cuối cùng trong nhiệm kỳ, đề cập đến thành tựu đối nội và chính sách đối ngoại, cũng như chỉ trích người tiền nhiệm Donald Trump dù không trực tiếp nhắc tên đối thủ trong cuộc chạy đua vào Nhà Trắng.

Thông điệp Liên bang lần này được giới quan sát nhận định chính là cơ hội để ông Biden cải thiện vị thế, đưa ra chương trình nghị sự cho thời gian còn lại trong nhiệm kỳ và xóa bỏ những lo ngại về tuổi tác, cho cử tri thấy ông sẵn sàng lãnh đạo Mỹ thêm 4 năm.

Tổng thống Mỹ Joe Biden tối 7/3 (sáng 8/3 giờ Hà Nội) đọc Thông điệp Liên bang cuối cùng trong nhiệm kỳ, đề cập đến thành tựu đối nội và chính sách đối ngoại, cũng như chỉ trích người tiền nhiệm Donald Trump dù không trực tiếp nhắc tên đối thủ trong cuộc chạy đua vào Nhà Trắng.

Thông điệp Liên bang lần này được giới quan sát nhận định chính là cơ hội để ông Biden cải thiện vị thế, đưa ra chương trình nghị sự cho thời gian còn lại trong nhiệm kỳ và xóa bỏ những lo ngại về tuổi tác, cho cử tri thấy ông sẵn sàng lãnh đạo Mỹ thêm 4 năm.
EOT;
$position = mb_strpos($content, $keyword, 0, 'UTF-8');
$output = "";
while ($position !== false) {
    $output .= mb_substr($content, 0, $position, 'UTF-8') . '<span>' . mb_substr($content, $position, strlen($keyword), 'UTF-8') . '</span>';
    $content = mb_substr($content, $position + strlen($keyword));
    $position = mb_strpos($content, $keyword, 0, 'UTF-8');
}
$output .= $content;

echo $output;

//Tiền xử lý (Request) --> Database --> Hậu xử lý
//Mảng --> Chuỗi
//Kiến thức --> Kỹ năng