//Storage: Bộ nhớ trình duyệt
/*
1. localStorage
- Lưu trữ không giới hạn thời gian
- Dung lượng lưu trữ lớn hơn Cookie: 4-5mb
- Chỉ lưu trữ được text
- Không share được giữa các subdomain (Tên miền con)
2. sessionStorage
- Lưu trữ theo phiên của trình duyệt (Tắt trình duyệt sẽ bị xóa)
- Tất cả những đặc điểm còn lại giống localStorage

3. cookie
- Lưu trữ theo thời gian chỉ định
- Dung lượng lưu trữ thấp
- Có thể share giữa các subdomain với nhau
- Khi thiết lập cookie --> Phân biệt theo path
- An toàn hơn nhờ sự hỗ trợ của HttpOnly, Secure
- Tự động đính kèm vào Http Request nếu dùng trình duyệt
- Chỉ lưu trữ được text
*/

// localStorage.setItem("username", "hoangan.web");
// localStorage.setItem("email", "hoangan.web@gmail.com");
// localStorage.setItem(
//   "products",
//   JSON.stringify(["Sản phẩm 1", "Sản phẩm 2", "Sản phẩm 3"]),
// );

// const username = localStorage.getItem("username");
// console.log(username);

// localStorage.removeItem("username");

// localStorage.clear();

// sessionStorage.setItem("open_popup", 1);
