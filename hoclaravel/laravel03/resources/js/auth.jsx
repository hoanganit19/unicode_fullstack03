import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "../components/Auth/Login";
export default function Auth() {
    return (
        <div className="container py-3">
            <Login />
            <ToastContainer />
        </div>
    );
}
if (document.getElementById("root")) {
    createRoot(document.getElementById("root")).render(<Auth />);
}
