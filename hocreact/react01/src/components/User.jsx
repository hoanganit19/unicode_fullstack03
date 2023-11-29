import PropTypes from "prop-types";
import Image from "./Image";
import Info from "./Info";
const User = ({ name, email }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h2>{email}</h2>
      <Image
        src="https://fastly.picsum.photos/id/564/536/354.jpg?hmac=T8uHjL2sq0dQoEggbySskXJmDoAlraqZY4yfr63KqJw"
        alt="Ảnh 01"
      />
      <Info>
        <h2>Hello Unicode</h2>
      </Info>
    </div>
  );
};

User.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
};

export default User;
