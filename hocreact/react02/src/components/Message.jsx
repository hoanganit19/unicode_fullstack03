import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import PropTypes from "prop-types";
import "react-toastify/dist/ReactToastify.css";
const Message = ({ message, type = "success" }) => {
  useEffect(() => {
    if (message) {
      if (type === "success") {
        toast.success(message);
      } else {
        toast.error(message);
      }
    }
  }, [message, type]);
  return (
    <>
      <ToastContainer />
    </>
  );
};

Message.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Message;
