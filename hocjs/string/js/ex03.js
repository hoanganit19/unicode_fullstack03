var keyword = "hoàng an";

var content =
  "vdvd Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure repellat adipisci, in alias quo deleniti beatae nobis porro officiis voluptate maiores HOÀNG AN aspernatur Lorem inventore rem. Expedita exercitationem modi id qui dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure hoàng an repellat adipisci, in alias quo deleniti beatae nobis porro officiis voluptate hoàng An maiores aspernatur inventore rem. Expedita exercitationem modi id qui dolore.";

var position = content.toLowerCase().indexOf(keyword.toLowerCase());

var result = "";
var count = 0;

while (position !== -1) {
  result +=
    content.slice(0, position) +
    `<span>${content.slice(position, position + keyword.length)}</span>`;
  content = content.slice(position + keyword.length);
  position = content.toLowerCase().indexOf(keyword.toLowerCase());
  count++;
}

result += content;

if (count > 0) {
  var showCount = `<p>Đã tìm thấy: <b>${count}</b> lần với từ <b>${keyword}</b></p>`;
} else {
  var showCount = `<p>Không tìm thấy kết quả với từ <b>${keyword}</b></p>`;
}

var title = `<p>Từ khóa tìm kiếm: <b>${keyword}</b></p>`;

document.body.innerHTML = title + result + showCount;
