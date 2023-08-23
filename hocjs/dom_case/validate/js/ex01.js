var loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  //   console.log("Submit");

  //Tạo element các field
  var emailEl = this.querySelector(".email");
  var passwordEl = this.querySelector(".password");

  //Tạo element hiển thị thông báo lỗi
  var errorEl = this.querySelectorAll(".error");

  //Lấy value của input
  var email = emailEl.value;
  var password = passwordEl.value;

  var errors = {};

  if (email.trim() === "") {
    errors.email = "Vui lòng nhập email";
  }

  if (password.trim() === "") {
    errors.password = "Vui lòng nhập password";
  }

  //Kiểm tra: Nếu object errors có dữ liệu => lỗi
  //Nếu object errors không có dữ liệu => Không lỗi

  //Xử lý reset thông báo lỗi
  errorEl.forEach(function (el) {
    el.innerText = "";
  });

  if (Object.keys(errors).length) {
    // console.log(errors);
    errorEl.forEach(function (el) {
      var key = el.classList[1].replace("error-", "").trim();
      //   console.log(errors[key]);

      if (errors[key]) {
        el.innerText = errors[key];
      }
    });
  } else {
    console.log("Không có lỗi");
  }
});
