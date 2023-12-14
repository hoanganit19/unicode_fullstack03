import { useContext } from "react";
import { AppContext } from "../App01";

const Vnd = () => {
  const { vnd, setVnd, setUsd } = useContext(AppContext);
  const handleChange = (e) => {
    setVnd(+e.target.value);
    const usd = +e.target.value / 24000;
    setUsd(usd);
  };
  return (
    <div>
      <label>VND:</label>
      <input type="number" value={vnd} onChange={handleChange} />
    </div>
  );
};

export default Vnd;
