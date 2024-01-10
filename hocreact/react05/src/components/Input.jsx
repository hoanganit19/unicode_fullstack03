import PropTypes from "prop-types";
import { useId } from "react";

const Input = ({ name, label, type = "text" }) => {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type={type} name={name} placeholder={label} id={id} />
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Input;
