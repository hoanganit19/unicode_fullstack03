import { useEffect } from "react";
import { useState } from "react";

const ImagePreview = () => {
  const [image, setImage] = useState("");
  const handleChange = (e) => {
    setImage(window.URL.createObjectURL(e.target.files[0]));
  };
  useEffect(() => {
    return () => {
      //Dọn dẹp của lần render trước
      window.URL.revokeObjectURL(image);
    };
  }, [image]);

  return (
    <div>
      <input type="file" name="image" onChange={handleChange} />
      <hr />
      {image && <img src={image} style={{ width: "200px" }} />}
    </div>
  );
};

export default ImagePreview;

/*
Cleanup
- Blob, storage
- timer: setTimeout, setInterval
- event
*/
