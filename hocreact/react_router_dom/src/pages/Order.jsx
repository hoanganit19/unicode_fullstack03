import provinces from "../data/tinh_tp.json";
import districts from "../data/quan_huyen.json";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Order = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/san-pham");
  };
  const getProvinces = () => {
    return Object.values(provinces).sort((a, b) => a.code - b.code);
  };
  const getDistrict = (provinceId) => {
    return Object.values(districts)
      .sort((a, b) => a.code - b.code)
      .filter(({ parent_code }) => parent_code === provinceId);
  };

  const [districtFilter, setDistrict] = useState([]);

  const handleChangeProvince = (e) => {
    const provinceId = e.target.value;
    setDistrict(getDistrict(provinceId));
  };

  return (
    <div>
      <h1>Đặt hàng</h1>
      <button onClick={handleClick}>Mua ngay</button>
      <div>
        <select name="provinces" onChange={handleChangeProvince}>
          <option value="">Chọn Tỉnh/Thành phố</option>
          {getProvinces().map(({ code, name }) => (
            <option key={code} value={code}>
              {name}
            </option>
          ))}
        </select>
        <select name="district">
          <option value="">Chọn Quận/Huyện</option>

          {districtFilter.map(({ code, name }) => (
            <option key={code} value={code}>
              {name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Order;
