import { memo } from "react";
import PropTypes from "prop-types";
const TodoCount = memo(function TodoCount({
  total,
  totalCompleted,
  totalUncompleted,
  onClear,
}) {
  console.log("re-render");
  return (
    <>
      <p>
        <span>Tổng: {total}</span>
        <span>Hoàn thành: {totalCompleted}</span>
        <span>Chưa hoàn thành: {totalUncompleted}</span>
      </p>
      <button onClick={onClear}>Clear</button>
    </>
  );
});

TodoCount.propTypes = {
  total: PropTypes.number.isRequired,
  totalCompleted: PropTypes.number.isRequired,
  totalUncompleted: PropTypes.number.isRequired,
  onClear: PropTypes.func,
};
export default TodoCount;
