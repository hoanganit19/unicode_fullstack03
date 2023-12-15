import { useContext } from "react";
import { AppContext } from "./Provider";
//Custom Hook --> Tạo hàm bắt đầu bằng use
export const useSelector = (callback) => {
  //Trả về state từ context
  if (typeof callback !== "function") {
    throw new Error("callback is not a function");
  }
  const { state } = useContext(AppContext);
  return callback(state);
};

export const useDispatch = () => {
  const { dispatch } = useContext(AppContext);
  return dispatch;
};
