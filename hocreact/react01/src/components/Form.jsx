import { useState } from "react";
const messages = { name: "Vui lòng nhập tên", email: "Vui lòng nhập email" };
const Form = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });
  const [error, setError] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    const errorObj = {};
    Object.keys(form).forEach((key) => {
      if (!form[key]) {
        errorObj[key] = messages[key];
      }
    });

    setError(errorObj); //setstate 1 lần
    if (!Object.keys(errorObj).length) {
      //Thành công
      setForm({ name: "", email: "" });
    }
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  //   console.log(error);
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Tên</label>
        <input
          type="text"
          name="name"
          placeholder="Tên..."
          value={form.name}
          onChange={handleChange}
        />
        <br />
        {error.name && <span>Vui lòng nhập tên</span>}
      </div>
      <div>
        <label htmlFor="">Email</label>
        <input
          type="text"
          name="email"
          placeholder="Email..."
          value={form.email}
          onChange={handleChange}
        />
        <br />
        {error.email && <span>Vui lòng nhập email</span>}
      </div>
      <button>Submit</button>
    </form>
  );
};

export default Form;
