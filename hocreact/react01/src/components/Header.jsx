// import { Fragment } from "react";
import PropTypes from "prop-types";
const Header = ({ onGetData }) => {
  const isLogin = false;
  return (
    <>
      <h2>Header</h2>
      <h2>Inner Header</h2>
      {isLogin ? (
        <>
          <span>Chào bạn: Hoàng An</span>{" "}
          <span>
            <a href="#">Đăng xuất</a>
          </span>
        </>
      ) : (
        <>
          <button onClick={() => onGetData("Hello Hoàng An")}>Đăng nhập</button>
          <button>Đăng ký</button>
        </>
      )}
    </>
  );
};

Header.propTypes = {
  onGetData: PropTypes.func,
};

export default Header;
