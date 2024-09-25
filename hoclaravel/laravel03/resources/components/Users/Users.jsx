import { useState, useEffect } from "react";
import UserAdd from "./UserAdd";
import UserEdit from "./UserEdit";
import { toast } from "react-toastify";

export default function Users() {
    const [users, setUsers] = useState([]);
    const [modalStatus, setModalStatus] = useState(false);
    const [modalEditStatus, setEditModalStatus] = useState(false);
    const [idEdit, setIdEdit] = useState(0);

    const getUsers = async (keyword = "") => {
        const response = await fetch("/api/users?_q=" + keyword + "&_limit=3");
        const users = await response.json();
        if (users.success) {
            setUsers(users.data);
        }
    };
    useEffect(() => {
        getUsers();
    }, []);

    const handlDelete = async (id) => {
        if (!confirm("Bạn chắc chưa?")) {
            return;
        }
        const response = await fetch("/api/users/" + id, {
            method: "DELETE",
        });
        if (response.ok) {
            getUsers();
            toast.success("Đã xóa người dùng");
        }
    };

    const debounce = (callback, timeout = 1000) => {
        let id;
        return (...args) => {
            clearTimeout(id);
            id = setTimeout(() => {
                callback.apply(this, args);
            }, timeout);
        };
    };

    const handleSearch = debounce((e) => {
        const keyword = e.target.value;
        getUsers(keyword);
    });

    return (
        <div>
            <h1>Danh sách người dùng</h1>
            <button
                className="btn btn-primary mb-3"
                onClick={() => setModalStatus(true)}
            >
                Thêm mới
            </button>
            <input
                type="search"
                className="form-control mb-3"
                placeholder="Từ khóa tìm kiếm..."
                onChange={handleSearch}
            />
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Tên</th>
                        <th>Email</th>
                        <th width="5%">Sửa</th>
                        <th width="5%">Xóa</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(({ id, name, email }) => (
                        <tr key={id}>
                            <td>{name}</td>
                            <td>{email}</td>
                            <td>
                                <a
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setIdEdit(id);
                                        setEditModalStatus(true);
                                    }}
                                    className="btn btn-warning"
                                >
                                    Sửa
                                </a>
                            </td>
                            <td>
                                <a
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handlDelete(id);
                                    }}
                                    className="btn btn-danger"
                                >
                                    Xóa
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <UserAdd
                modalStatus={modalStatus}
                setModalStatus={setModalStatus}
                getUsers={getUsers}
            />
            <UserEdit
                modalEditStatus={modalEditStatus}
                setEditModalStatus={setEditModalStatus}
                getUsers={getUsers}
                id={idEdit}
            />
        </div>
    );
}
