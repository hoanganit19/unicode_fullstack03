const color = (ParentComponent) => {
  //Tạo ra 1 component mới
  const Component = (props) => {
    //Trả về component ban đầu
    const randomColor =
      "#" + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, "0");

    return (
      <div style={{ color: randomColor }}>
        <ParentComponent {...props} />
      </div>
    );
  };

  //Trả về Component mới
  return Component;
};

export default color;
