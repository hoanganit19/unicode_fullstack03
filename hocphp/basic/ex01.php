<?php
//Comment 1 dòng
/* 
Comment nhiều dòng
*/

//Biến trong PHP
$a = 12;
echo $a;
echo '<br/>';
$b = "Unicode Academy";
echo $b . '<br/>'; //Nối chuỗi trong php --> dùng dấu .

//Bài tập: Nối biến $url vào href
//$url = "https://online.unicode.vn";
//$html = '<a href="' . $url . '">Unicode Online</a>';
//$html = "<a href='{$url}a'>Unicode Online</a>";
//echo $html;
$title = 'Loạt nước phương Tây bác khả năng đưa quân đến Ukraine 1';
$html = <<<EOT
<div class="wrapper-topstory-folder wrapper-topstory-folder-v2 wrapper-topstory-home-v2 flexbox width_common" data-campaign="ThuongVien">
<article class="item-news full-thumb article-topstory">
<div class="thumb-art">
<a href="https://vnexpress.net/loat-nuoc-phuong-tay-bac-kha-nang-dua-quan-den-ukraine-4716112.html" class="thumb thumb-5x3" title="Loạt nước phương Tây bác khả năng đưa quân đến Ukraine" data-medium="Item-1" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-1&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1">
<picture>
<!--[if IE 9]><video style="display: none;"><![endif]-->
<source srcset="https://i1-vnexpress.vnecdn.net/2024/02/28/afp-20180122-xh73m-v3-highres-2042-7731-1709085057.jpg?w=680&amp;h=408&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=nHuPwkqzzavxG31y5hfgXg 1x, https://i1-vnexpress.vnecdn.net/2024/02/28/afp-20180122-xh73m-v3-highres-2042-7731-1709085057.jpg?w=680&amp;h=408&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=zh6LwYjrNt35xQftOg2fBw 2x">
<!--[if IE 9]></video><![endif]-->
<img itemprop="contentUrl" style="transform: translateX(-50%); left: 50%;" loading="lazy" intrinsicsize="680x408" alt="Loạt nước phương Tây bác khả năng đưa quân đến Ukraine" class="lazy lazied" src="https://i1-vnexpress.vnecdn.net/2024/02/28/afp-20180122-xh73m-v3-highres-2042-7731-1709085057.jpg?w=680&amp;h=408&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=nHuPwkqzzavxG31y5hfgXg" data-ll-status="loaded">
</picture> </a>
</div>
<h3 class="title-news"><a href="https://vnexpress.net/loat-nuoc-phuong-tay-bac-kha-nang-dua-quan-den-ukraine-4716112.html" title="Loạt nước phương Tây bác khả năng đưa quân đến Ukraine" data-medium="Item-1" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-1&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1"> {$title}</a>
</h3>
<p class="description"><a href="https://vnexpress.net/loat-nuoc-phuong-tay-bac-kha-nang-dua-quan-den-ukraine-4716112.html" title="Loạt nước phương Tây bác khả năng đưa quân đến Ukraine" data-medium="Item-1" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-1&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1">Mỹ và nhiều đồng minh châu Âu cho biết không có kế hoạch đưa quân đến Ukraine, sau khi Tổng thống Pháp Macron gợi ý về khả năng này.</a></p>
<p class="extend-lead description mt5 hidden"><a href="https://vnexpress.net/loat-nuoc-phuong-tay-bac-kha-nang-dua-quan-den-ukraine-4716112.html" title="Loạt nước phương Tây bác khả năng đưa quân đến Ukraine" data-medium="Item-1" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-1&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1">"Sẽ không có chuyện các nước châu Âu hoặc quốc gia thành viên NATO đưa binh sĩ đến lãnh thổ Ukraine", Thủ tướng Đức Olaf Scholz ngày 27/2 cho hay.Bộ trưởng Quốc phòng Đức Boris Pistorius cũng khẳng định đưa quân đến Ukraine "không phải lựa chọn của Berlin".Bộ trưởng Kinh tế Đức Robert Habeck bày tỏ</a></p>
<p class="meta-news">
<span class="time-public"><span datetime="2024-02-28 09:45:33" timeago-id="17">2h trước</span></span>
<span campaign="ThuongVien" class="cate_top_1001002"></span>
<a class="count_cmt" href="https://vnexpress.net/loat-nuoc-phuong-tay-bac-kha-nang-dua-quan-den-ukraine-4716112.html#box_comment_vne" style="white-space: nowrap; display: none;">
<svg class="ic ic-comment"><use xlink:href="#Comment-Reg"></use></svg>
<span class="font_icon widget-comment-4716112-1">2</span>
</a>
</p>
</article>
<div class="sub-news-top">
<div class="inner-sub-news-top">
<div class="scroll-sub-featured">
<ul class="list-sub-feature">
<li>
<h3 class="title_news">
<a data-medium="Item-2" data-thumb="1" href="https://vnexpress.net/ha-noi-du-kien-sap-nhap-25-phuong-tai-5-quan-4716016.html" title="Hà Nội dự kiến sáp nhập 25 phường tại 5 quận" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-2&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1">
Hà Nội dự kiến sáp nhập 25 phường tại 5 quận </a>
<span class="meta-news">
<a class="count_cmt" href="https://vnexpress.net/ha-noi-du-kien-sap-nhap-25-phuong-tai-5-quan-4716016.html#box_comment_vne" style="white-space: nowrap; display: inline-block;">
<svg class="ic ic-comment"><use xlink:href="#Comment-Reg"></use></svg>
<span class="font_icon widget-comment-4716016-1">41</span>
</a>
</span>
</h3>
<div class="thumb-art">
<a href="https://vnexpress.net/ha-noi-du-kien-sap-nhap-25-phuong-tai-5-quan-4716016.html" class="thumb thumb-5x3" title="Hà Nội dự kiến sáp nhập 25 phường tại 5 quận" data-medium="Item-2" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-2&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1">
<picture>
<!--[if IE 9]><video style="display: none;"><![endif]-->
<source srcset="https://i1-vnexpress.vnecdn.net/2024/02/27/khutrunghoa-1709047973-9892-1709048374.jpg?w=300&amp;h=180&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=hYd0wrn1OkdFzzUZcdPCGA 1x, https://i1-vnexpress.vnecdn.net/2024/02/27/khutrunghoa-1709047973-9892-1709048374.jpg?w=300&amp;h=180&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=ktL2cF7fNN8YMyHraIJ3pg 2x">
<!--[if IE 9]></video><![endif]-->
<img itemprop="contentUrl" style="transform: translateX(-50%); left: 50%;" loading="lazy" intrinsicsize="300x180" alt="Hà Nội dự kiến sáp nhập 25 phường tại 5 quận" class="lazy lazied" src="https://i1-vnexpress.vnecdn.net/2024/02/27/khutrunghoa-1709047973-9892-1709048374.jpg?w=300&amp;h=180&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=hYd0wrn1OkdFzzUZcdPCGA" data-ll-status="loaded">
</picture> </a>
</div>
</li>
<li>
<h3 class="title_news">
<a data-medium="Item-3" data-thumb="1" href="https://vnexpress.net/ong-trump-ong-biden-thang-bau-cu-so-bo-o-michigan-4716145.html" title="Ông Trump, ông Biden thắng bầu cử sơ bộ ở Michigan" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-3&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1">
Ông Trump, ông Biden thắng bầu cử sơ bộ ở Michigan </a>
<span class="meta-news">
<a class="count_cmt" href="https://vnexpress.net/ong-trump-ong-biden-thang-bau-cu-so-bo-o-michigan-4716145.html#box_comment_vne" style="white-space: nowrap; display: none;">
<svg class="ic ic-comment"><use xlink:href="#Comment-Reg"></use></svg>
<span class="font_icon widget-comment-4716145-1">2</span>
</a>
</span>
</h3>
<div class="thumb-art">
<a href="https://vnexpress.net/ong-trump-ong-biden-thang-bau-cu-so-bo-o-michigan-4716145.html" class="thumb thumb-5x3" title="Ông Trump, ông Biden thắng bầu cử sơ bộ ở Michigan" data-medium="Item-3" data-thumb="1" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-3&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1">
<picture>
<!--[if IE 9]><video style="display: none;"><![endif]-->
<source srcset="https://i1-vnexpress.vnecdn.net/2024/02/28/afp-20240113-34et6ax-v1-highre-6271-1365-1709088359.jpg?w=300&amp;h=180&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=1DsBVL0nv3E_hpRzyxx2WQ 1x, https://i1-vnexpress.vnecdn.net/2024/02/28/afp-20240113-34et6ax-v1-highre-6271-1365-1709088359.jpg?w=300&amp;h=180&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=iNuCMsFRx4c8TZGYFQBtNg 2x">
<!--[if IE 9]></video><![endif]-->
<img itemprop="contentUrl" style="transform: translateX(-50%); left: 50%;" loading="lazy" intrinsicsize="300x180" alt="Ông Trump, ông Biden thắng bầu cử sơ bộ ở Michigan" class="lazy lazied" src="https://i1-vnexpress.vnecdn.net/2024/02/28/afp-20240113-34et6ax-v1-highre-6271-1365-1709088359.jpg?w=300&amp;h=180&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=1DsBVL0nv3E_hpRzyxx2WQ" data-ll-status="loaded">
</picture> </a>
</div>
</li>
<!--box góc nhìn-->
<li class="item-gocnhin">
<a href="/goc-nhin" class="title-link-gn" title="Góc nhìn" data-medium="Title-GocNhin" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Title-GocNhin&amp;vn_term=Desktop" data-itm-added="1">Góc nhìn</a>
<article class="item-news art-top-gn">
<h3 class="title-news"><a href="https://vnexpress.net/lai-oto-bang-thoi-quen-xe-may-4715990.html" data-medium="Item-GocNhin" data-thumb="1" title="Lái ôtô bằng thói quen xe máy" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-GocNhin&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1">Lái ôtô bằng thói quen xe máy</a></h3>
<p class="description"><a data-medium="Item-GocNhin" data-thumb="1" href="https://vnexpress.net/lai-oto-bang-thoi-quen-xe-may-4715990.html" title="Lái ôtô bằng thói quen xe máy" data-itm-source="#vn_source=Home&amp;vn_campaign=ThuongVien&amp;vn_medium=Item-GocNhin&amp;vn_term=Desktop&amp;vn_thumb=1" data-itm-added="1">Nhiều lái xe đi ôtô trên cao tốc nhưng hành xử như đang điều khiển xe máy trong nội đô.</a></p>
<div class="width_common info-author flexbox">
<p class="meta-news">
<a href="https://vnexpress.net/tac-gia/to-thuc-1053.html" class="cat" title="Tô Thức">Tô Thức</a>
<a class="count_cmt" href="https://vnexpress.net/lai-oto-bang-thoi-quen-xe-may-4715990.html#box_comment_vne" style="white-space: nowrap; display: block !important;">
<svg class="ic ic-comment"><use xlink:href="#Comment-Reg"></use></svg>
<span class="font_icon widget-comment-4715990-1">55</span>
</a>
</p>
<div class="thumb-art thumb-author-gn">
<a href="https://vnexpress.net/tac-gia/to-thuc-1053.html" class="thumb thumb-1x1" title="Tô Thức">
<picture>
<!--[if IE 9]><video style="display: none;"><![endif]-->
<source srcset="https://i1-vnexpress.vnecdn.net/2017/11/23/aToHuuDucpng-1511420352.png?w=100&amp;h=100&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=wRcEEYlonOrJsFEiMZde1Q 1x, https://i1-vnexpress.vnecdn.net/2017/11/23/aToHuuDucpng-1511420352.png?w=100&amp;h=100&amp;q=100&amp;dpr=2&amp;fit=crop&amp;s=DEE6kUg16C0gnriChg2EHQ 2x">
<!--[if IE 9]></video><![endif]-->
<img itemprop="contentUrl" style="transform: translateX(-50%); left: 50%;" loading="lazy" intrinsicsize="100x100" alt="" class="lazy lazied" src="https://i1-vnexpress.vnecdn.net/2017/11/23/aToHuuDucpng-1511420352.png?w=100&amp;h=100&amp;q=100&amp;dpr=1&amp;fit=crop&amp;s=wRcEEYlonOrJsFEiMZde1Q" data-ll-status="loaded">
</picture>	</a>
</div>
</div>
</article>
</li>
</ul>
</div>
</div>
</div>
</div>
EOT;

echo $html;
