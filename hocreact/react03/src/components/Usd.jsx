import { useContext } from "react";
import { AppContext } from "../App01";

const Usd = () => {
  const { usd, setUsd, setVnd } = useContext(AppContext);
  const handleChange = (e) => {
    setUsd(+e.target.value);
    const vnd = +e.target.value * 24000;
    setVnd(vnd);
  };
  return (
    <div>
      <label>USD:</label>
      <input type="number" value={usd} onChange={handleChange} />
    </div>
  );
};

export default Usd;
