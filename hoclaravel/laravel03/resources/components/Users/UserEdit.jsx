import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
export default function UserEdit({
    modalEditStatus,
    setEditModalStatus,
    getUsers,
    id,
}) {
    const [form, setForm] = useState({});

    const handleClose = () => {
        setForm({});
        setEditModalStatus(false);
    };

    useEffect(() => {
        const getUser = async () => {
            if (!id) return;
            const response = await fetch(`/api/users/${id}`);
            const user = await response.json();
            if (user.success) {
                setForm(user.data);
            }
        };

        getUser();
    }, [modalEditStatus]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("/api/users/" + id, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        });
        if (response.ok) {
            setEditModalStatus(false);
            setForm({});
            getUsers();
            toast.success("Cập nhật người dùng thành công");
        }
    };
    return (
        <Modal size="lg" show={modalEditStatus} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Cập nhật người dùng</Modal.Title>
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
