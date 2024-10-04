import { createRoot } from "react-dom/client";
import Users from "../components/Users/Users";
import UserAdd from "../components/Users/UserAdd";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
export default function App() {
    const [user, setUser] = useState({});
    const handleLogout = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token") ?? null;
        if (!token) return;
        const response = await fetch("/api/auth/logout", {
            method: "POST",
            headers: {
                Accept: "application/json",
                Authorization: "Bearer " + token,
            },
        });
        if (response.ok) {
            localStorage.removeItem("token");
            window.location.href = "/dang-nhap";
            return;
        }
        toast.error("Đã có lỗi xảy ra. Vui lòng thử lại sau");
    };
    useEffect(() => {
        const getProfile = async () => {
            const token = localStorage.getItem("token") ?? null;
            if (!token) return;
            const response = await fetch("/api/auth/profile", {
                headers: {
                    Accept: "application/json",
                    Authorization: "Bearer " + token,
                },
            });

            if (response.ok) {
                const { data } = await response.json();
                setUser(data);
            }
        };
        getProfile();
    }, []);
    return (
        <div className="container py-3">
            <header>
                <div className="d-flex justify-content-between align-items-center">
                    <h1>Unicode Academy</h1>
                    <ul className="d-flex gap-2 list-unstyled">
                        <li>Chào bạn: {user?.name}</li>
                        <li>Tài khoản</li>
                        <li>
                            <a href="#" onClick={handleLogout}>
                                Đăng xuất
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
            <hr />
            <Users />
            <ToastContainer />
        </div>
    );
}
if (document.getElementById("root")) {
    createRoot(document.getElementById("root")).render(<App />);
}
