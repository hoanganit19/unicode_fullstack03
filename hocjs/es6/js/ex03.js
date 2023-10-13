//Classes
class User {
  constructor(name, email) {
    //Hàm tạo -> Chạy ngay sau khi object được khởi tạo
    //Thường được dùng để khởi tạo thuộc tính hoặc thiết lập các giá trị mặc định
    console.log("Hello Unicode");
    this.name = name;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }
}

// const user = new User("Hoàng An", "contact@unicode.vn");
// console.log(user);
// console.log(user.getName());

/*
Xây dựng ứng dụng Counter sử dụng class
 */

class Counter {
  constructor() {
    this.root = document.querySelector("#root");
    this.count = 0;
  }

  handleIncrement = () => {
    //Xử lý tăng
    this.count++;
    root.querySelector("h1").innerText = this.count;
  };

  render() {
    root.innerHTML = `
    <h1>0</h1>
    <button class="btn">+</buttom>
    `;
    root.querySelector(".btn").addEventListener("click", this.handleIncrement);
  }
}

new Counter().render();
