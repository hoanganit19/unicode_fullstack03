import { forwardRef, useImperativeHandle, useRef } from "react";
const Input = forwardRef(function Input(props, ref) {
  //Tạo 1 ref nội bộ
  const inputRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      value: (value) => {
        inputRef.current.value = value;
      },
      focus: () => {
        inputRef.current.focus();
      },
      readOnly: (status) => {
        inputRef.current.readOnly = status;
      },
    };
  });
  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
});

export default Input;

//Higher Order Component: forwardRef
