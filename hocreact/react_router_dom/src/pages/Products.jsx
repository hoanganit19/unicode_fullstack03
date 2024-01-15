import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Products = () => {
  const [search, setSearch] = useSearchParams();
  const [form, setForm] = useState({});
  const handleChangeValue = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(form);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-3">
            <select
              name="status"
              className="form-select"
              onChange={handleChangeValue}
            >
              <option value="all">Tất cả trạng thái</option>
              <option value="active">Kích hoạt</option>
              <option value="inactive">Chưa kích hoạt</option>
            </select>
          </div>
          <div className="col-7">
            <input
              type="search"
              name="s"
              className="form-control"
              placeholder="Từ khóa..."
              onChange={handleChangeValue}
            />
          </div>
          <div className="col-2">
            <button className="btn btn-primary">Tìm kiếm</button>
          </div>
        </div>
      </form>
      <h1>Products</h1>
      <h2>Query: {search.get("s")}</h2>
      <h2>Status: {search.get("status")}</h2>
      {/* <button
        onClick={() => {
          setSearch({
            status: "inactive",
            s: "Unicode",
          });
        }}
      >
        Update Search
      </button> */}
    </div>
  );
};

export default Products;
