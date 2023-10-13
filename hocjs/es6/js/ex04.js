//Kế thừa
// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }

//   getName() {
//     return this.name;
//   }

//   getEmail() {
//     return this.email;
//   }
// }

// //Authentication kế thừa từ User
// // -> Được phép sử dụng các phương thức và thuộc tính của class cha
// class Authenticate extends User {
//   constructor(name, email) {
//     super(name, email);
//     this.isLogin = false;
//   }
//   getInfo() {
//     return `
//     Name: ${this.name}
//     Email: ${this.email}
//     `;
//   }

//   getLoginStatus() {
//     return this.isLogin;
//   }
// }

// const auth = new Authenticate("Hoàng An", "hoangan.web@gmail.com");
// console.log(auth);
// console.log(auth.getInfo());
// console.log(auth.getLoginStatus());

/*
Bài tập:
Xây dựng class User có các thuộc tính sau
- name: Tên người dùng
- email: Email người dùng
- password: Mật khẩu người dùng
- data: Lưu danh sách người dùng (Mỗi người dùng là 1 object bao gồm: id, name, email, password)

- Viết thêm phương thức: add(name, email, password) => Thêm mới người dùng vào thuộc tính data (Không bị trùng lặp email)
- Viết thêm phương thức: getUser(id) => Trả về thông tin user theo id
*/

class User {
  constructor() {
    this.name = null;
    this.email = null;
    this.password = null;
    this.data = [];
  }

  add(name, email, password) {
    const id = this.data.length + 1;
    const user = { id, name, email, password };
    const index = this.data.findIndex(({ email: _email }) => email === _email);
    if (index === -1) {
      this.data.push(user);
      return true;
    }
    return false;
  }

  getUser(id) {
    return this.data.find(({ id: _id }) => id === _id);
  }
}

// const user = new User();
// user.add("Hoàng An", "hoangan.web@gmail.com", "123456");
// user.add("Hoàng An 1", "hoangan.web1@gmail.com", "123456");
// console.log(user.data);

// const user1 = user.getUser(1);
// console.log(user1);

//Yêu cầu: Tạo thêm class Auth kế thừa từ class User và viết thêm các phương thức
/*
1. login(email, pass) => Trả về user nếu thông tin chính xác

2. register(name, email, password) => Kế thừa từ phương thức add, trả về thông tin user vừa thêm (Nếu thành công)

3. profile() => Dựa vào thông tin đã đăng nhập (Tự thêm các thuộc tính)
*/

/*
const auth = new Auth();
auth.register('An', 'an@gmail.com', '123456');
const status = auth.login('an@gmail.com', '123456')
if (status) {
    const user = auth.profile()
}
*/

class Auth extends User {
  constructor() {
    super();
    this.user = null;
  }

  register(name, email, password) {
    const status = this.add(name, email, password);
    if (status) {
      return { name, email, password };
    }
  }

  login(email, password) {
    const user = this.data.find(
      ({ email: _email, password: _password }) =>
        email === _email && password === _password,
    );
    if (user) {
      this.user = user;
      return this.user;
    }
    return false;
  }

  profile() {
    return this.user;
  }
}

const auth = new Auth();
auth.register("Hoàng An", "hoangan.web@gmail.com", "123456");
auth.register("Hoàng An", "hoanganit19@gmail.com", "0123456");

const loginStatus = auth.login("hoangan.web@gmail.com", "123455");
if (loginStatus) {
  console.log("Đăng nhập thành công");
  const user = auth.profile();
  console.log(user);
} else {
  console.log("Email hoặc mật khẩu không chính xác");
}
