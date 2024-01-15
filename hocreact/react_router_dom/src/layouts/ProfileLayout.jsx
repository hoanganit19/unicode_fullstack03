import { Outlet, useLocation, useNavigate } from "react-router-dom";
import clsx from "clsx";
const ProfileLayout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div>
      <div className="btn-group">
        <button
          className={clsx(
            "btn btn-primary btn-sm",
            pathname === "/tai-khoan" && "active",
          )}
          onClick={() => navigate("/tai-khoan")}
        >
          Tài khoản
        </button>
        <button
          className={clsx(
            "btn btn-primary btn-sm",
            pathname === "/tai-khoan/khoa-hoc-cua-toi" && "active",
          )}
          onClick={() => navigate("/tai-khoan/khoa-hoc-cua-toi")}
        >
          Khóa học
        </button>
      </div>
      <Outlet />
    </div>
  );
};

export default ProfileLayout;
