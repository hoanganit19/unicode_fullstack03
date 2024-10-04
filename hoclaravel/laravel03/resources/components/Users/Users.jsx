import { useState, useEffect, useRef } from "react";
import UserAdd from "./UserAdd";
import UserEdit from "./UserEdit";
import { toast } from "react-toastify";
import { PaginationControl } from "react-bootstrap-pagination-control";
const limit = 3;
export default function Users() {
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [modalStatus, setModalStatus] = useState(false);
    const [modalEditStatus, setEditModalStatus] = useState(false);
    const [idEdit, setIdEdit] = useState(0);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const keywordRef = useRef("");

    const getUsers = async (page = 1) => {
        const keyword = keywordRef.current;
        const token = localStorage.getItem("token") ?? "";
        const response = await fetch(
            "/api/users?_q=" +
                keyword +
                "&_limit=" +
                limit +
                "&_page=" +
                page +
                "&_sort=id&_order=desc",
            {
                headers: {
                    Accept: "application/json",
                    Authorization: "Bearer " + token,
                },
            }
        );
        if (response.status === 401) {
            return (window.location.href = "/dang-nhap");
        }
        const users = await response.json();

        if (users.success) {
            setUsers(users.data);
            setLoading(false);
            setTotal(users.total);
        }
    };
    useEffect(() => {
        getUsers();
    }, []);

    const handlDelete = async (id) => {
        if (!confirm("Bạn chắc chưa?")) {
            return;
        }
        const token = localStorage.getItem("token") ?? "";
        const response = await fetch("/api/users/" + id, {
            method: "DELETE",
            headers: {
                Authorization: "Bearer " + token,
                Accept: "application/json",
            },
        });
        if (response.status === 401) {
            return (window.location.href = "/dang-nhap");
        }
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
        keywordRef.current = keyword;
        getUsers();
    });

    useEffect(() => {
        getUsers(page);
    }, [page]);

    return isLoading ? (
        <h2>Loading...</h2>
    ) : (
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
            <PaginationControl
                page={page}
                between={4}
                total={total}
                limit={limit}
                changePage={(page) => {
                    setPage(page);
                }}
                ellipsis={1}
            />
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
