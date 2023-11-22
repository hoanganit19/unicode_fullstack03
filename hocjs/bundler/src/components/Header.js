import style from "../assets/header.module.scss";
const Header = () => {
  return `<header>
    <h1>HEADER</h1>
    <button class="${style.btn}">Đăng ký khóa học</button>
    <a href="/">Trang chủ</a>
    <a href="/gioi-thieu">Giới thiệu</a>
    <a href="/san-pham">Sản phẩm</a>
    <a href="/lien-he">Liên hệ</a>
    </header>`;
};
export default Header;
