//Cắt chuỗi
// const content = `Lorem ipsum dolor, sit amet consectetur adipisicing 0388875179 elit. Neque, excepturi a nisi quis consequatur officia? Cumque quo voluptatum aut, cum 0123456789 possimus adipisci delectus, voluptas culpa alias non necessitatibus nemo qui!`;

// const pattern = /(0|\+84)\d{9}/g;

// const phone = content.match(pattern);
// console.log(phone);

//Capturing Group
// --> Dùng cặp ngoặc tròn để chụp 1 thành phần trong biểu thức cần lấy
// const email = "hoangan.web@gmail.com";
// const pattern = /[a-z0-9-_\.]{3,}@([a-z0-0-_\.]+\.[a-z]{2,})/;
// const result = email.match(pattern);
// console.log(result);

//Non-Capturing --> Loại bỏ kết quả trong cặp ngoặc tròn
//Dùng ký hiệu: ?:

//Greedy, Lazy
// --> Biểu thức nó sẽ bị hiểu nhầm chạy quá chuỗi mà mình mong muốn --> Greedy
// --> Khắc phục thêm dấu ? phía sau độ dài của biểu thức gây hiểu nhầm --> Lazy

// const url = `https://www.youtube.com/watch?v=5hwgV_g2LoI&t=123`;
// // const url = `https://youtu.be/5hwgV_g2LoI?t=300s&feature=logo`;
// const pattern =
//   /^(?:http|https):\/\/(?:www\.)*(?:youtube\.com\/watch\?v=|youtu\.be\/)(.+?)(?:(?:&|\?).+|)$/;
// const result = url.match(pattern);
// console.log(result);

//Thay thế
let content = `Lorem ipsum dolor, sit amet consectetur adipisicing 0388875179 elit. Neque, excepturi a nisi quis consequatur officia? Cumque quo voluptatum aut, cum +84123456789 possimus adipisci delectus, voluptas culpa alias non necessitatibus nemo qui!`;

const pattern = /((0|\+84)\d{9})/g;

content = content.replace(
  pattern,
  `<a href="tel:$1" title="Đầu số: $2">$1</a>`,
);

document.write(content);
