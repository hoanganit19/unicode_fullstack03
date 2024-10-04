import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Login() {
    const [form, setForm] = useState({ email: "", password: "" });
    const [isLoading, setLoading] = useState(true);
    const [isSubmit, setSubmit] = useState(false);
    const handleChangeValue = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmit(true);
        const response = await fetch("/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        });
        setSubmit(false);
        if (!response.ok) {
            return toast.error("Thông tin đăng nhập không chính xác");
        }
        const {
            data: { token },
        } = await response.json();

        localStorage.setItem("token", token);
        window.location.href = "/";
    };
    useEffect(() => {
        const getProfile = async () => {
            const token = localStorage.getItem("token") ?? null;

            const response = await fetch("/api/auth/profile", {
                headers: {
                    Accept: "application/json",
                    Authorization: "Bearer " + token,
                },
            });
            setLoading(false);
            if (!response.ok) {
                return;
            }
            window.location.href = "/";
        };
        getProfile();
    }, []);
    return isLoading ? (
        <h2>Loading...</h2>
    ) : (
        <div className="w-50 mx-auto">
            <h2 className="text-center">Đăng nhập</h2>
            <form action="" onSubmit={handleSubmit}>
                <fieldset disabled={isSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="Email..."
                            onChange={handleChangeValue}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Mật khẩu
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            placeholder="Mật khẩu"
                            onChange={handleChangeValue}
                            required
                        />
                    </div>
                    <div className="d-grid">
                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={isSubmit}
                        >
                            {isSubmit ? "Đang xử lý" : "Đăng nhập"}
                        </button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
}
