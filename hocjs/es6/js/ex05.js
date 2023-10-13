//Static
class User {
  static self = null; //Lưu object hiện tại vào thuộc tính static
  constructor() {
    this.constructor.self = this;
    //Thuộc tính non-static
    this.name = "Hoàng An";
    this.email = "hoangan.web@gmail.com";
    console.log("Constructor");
  }

  //Phương thức non-static
  getName() {
    // console.log(this);
    return this.name;
  }

  getMessage2() {
    //Gọi đến phương thức getMessage
    return this.constructor.getMessage();
  }

  //Thuộc tính static
  static isLogin = false;

  //Phương thức static
  static getMessage() {
    // console.log(this);
    return "Hello Unicode";
  }

  static getName2() {
    //Gọi đến phương thức getName()
    if (!this.self) {
      this.self = new this();
    }
    return this.self.getName();
  }
}

// const user = new User();

// console.log(user.getMessage2());

// console.log(User.isLogin);
// console.log(User.getMessage());
// console.log(User.getName2());

const user = new User();
// user.email = "contact@unicode.vn";

console.log(User.getName2());

// console.log(user);

//getter, setter
//ES6 Module
//Xử lý bất đồng bộ
