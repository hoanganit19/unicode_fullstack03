import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
export default function UserAdd({ modalStatus, setModalStatus, getUsers }) {
    const [show, setShow] = useState(false);
    const [form, setForm] = useState({});

    const handleClose = () => {
        setModalStatus(false);
    };

    useEffect(() => {
        setShow(modalStatus);
    }, [modalStatus]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token") ?? "";
        const response = await fetch("/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
                Accept: "application/json",
            },
            body: JSON.stringify(form),
        });
        if (response.status === 401) {
            return (window.location.href = "/dang-nhap");
        }
        if (response.ok) {
            setModalStatus(false);
            setForm({});
            getUsers();
            toast.success("Đã thêm người dùng");
        }
    };
    return (
        <Modal size="lg" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Thêm người dùng</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="">Tên</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            placeholder="Tên..."
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    [e.target.name]: e.target.value,
                                })
                            }
                            value={form.name ?? ""}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Email..."
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    [e.target.name]: e.target.value,
                                })
                            }
                            value={form.email ?? ""}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="">Mật khẩu</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            placeholder="Mật khẩu..."
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    [e.target.name]: e.target.value,
                                })
                            }
                        />
                    </div>
                    <button className="btn btn-primary me-2">
                        Lưu thay đổi
                    </button>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={handleClose}
                    >
                        Đóng
                    </button>
                </form>
            </Modal.Body>
        </Modal>
    );
}
