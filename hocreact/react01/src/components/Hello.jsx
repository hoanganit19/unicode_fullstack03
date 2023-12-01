import { useState } from "react";
const Hello = () => {
  //   props.title = "Hello 123";
  const [title, setTitle] = useState("Hello Unicode");
  const [items, setItem] = useState([]);
  const handleChange = () => {
    setTitle("Học React không khó");
  };
  const handleAdd = () => {
    setItem([...items, `Item ${items.length + 1}`]);
  };
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={handleChange}>Change Title</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default Hello;
