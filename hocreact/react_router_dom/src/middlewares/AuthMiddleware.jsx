import { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const AuthMiddleware = () => {
  const isLogin = localStorage.getItem("isLogin") ?? false;
  const { pathname } = useLocation();
  useEffect(() => {
    localStorage.setItem("currentUrl", pathname);
  }, [pathname]);
  return isLogin ? <Outlet /> : <Navigate to="/dang-nhap" />;
};

export default AuthMiddleware;
