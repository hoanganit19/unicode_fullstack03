import { createRoot } from "react-dom/client";
import Users from "../components/Users/Users";
import UserAdd from "../components/Users/UserAdd";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function App() {
    return (
        <div className="container py-3">
            <Users />
            <ToastContainer />
        </div>
    );
}
if (document.getElementById("root")) {
    createRoot(document.getElementById("root")).render(<App />);
}
