import { useNavigate } from "react-router-dom";
const Order = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/san-pham");
  };
  return (
    <div>
      <h1>Đặt hàng</h1>
      <button onClick={handleClick}>Mua ngay</button>
    </div>
  );
};

export default Order;
