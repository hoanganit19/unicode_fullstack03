import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/style.scss";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import ProductDetail from "./pages/ProductDetail";
import Order from "./pages/Order";
import Profile from "./pages/Profile/Profile";
import MyCourse from "./pages/Profile/MyCourse";
import Login from "./pages/Login";
import ProfileLayout from "./layouts/ProfileLayout";
import AuthMiddleware from "./middlewares/AuthMiddleware";

const App = () => {
  const handleClassName = ({ isActive }) => {
    return isActive ? `current nav-link` : `nav-link`;
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <ul className="nav flex-column">
            <li>
              <NavLink to="/" className={handleClassName}>
                Trang chủ
              </NavLink>
            </li>
            <li>
              <NavLink to="/gioi-thieu" className={handleClassName}>
                Giới thiệu
              </NavLink>
            </li>
            <li>
              <NavLink to="/san-pham" className={handleClassName}>
                Sản phẩm
              </NavLink>
            </li>
            <li>
              <NavLink to="/lien-he" className={handleClassName}>
                Liên hệ
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="col-9">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gioi-thieu" element={<About />} />
            <Route path="/san-pham" element={<Products />} />
            <Route path="/san-pham/:path" element={<ProductDetail />} />
            <Route path="/lien-he" element={<Contact />} />
            <Route path="/dat-hang" element={<Order />} />
            <Route path="/dang-nhap" element={<Login />} />
            <Route path="/tai-khoan" element={<AuthMiddleware />}>
              <Route path="" element={<ProfileLayout />}>
                <Route path="" element={<Profile />} />
                <Route path="khoa-hoc-cua-toi" element={<MyCourse />} />
              </Route>
            </Route>

            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;

//Nested Route
