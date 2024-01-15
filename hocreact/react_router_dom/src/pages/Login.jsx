import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  /*
  Giả sử tài khoản fake: admin@gmail.com - password: 123456
  */
  const [form, setForm] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = form;
    if (email === "admin@gmail.com" && password === "123456") {
      localStorage.setItem("isLogin", true);
      const currentUrl = localStorage.getItem("currentUrl") ?? "/";
      navigate(currentUrl);
    }
  };
  return (
    <div>
      <h1>Đăng nhập</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email..."
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Password..."
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary">Đăng nhập</button>
      </form>
    </div>
  );
};

export default Login;
