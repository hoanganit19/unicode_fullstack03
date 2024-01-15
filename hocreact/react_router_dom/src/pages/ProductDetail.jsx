import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { path } = useParams();
  const [, slug, id] = path.match(/(.+?)-(\d+)$/);

  return (
    <div>
      <h1>Product ID: {slug}</h1>
      <h2>Slug: {id}</h2>
    </div>
  );
};

export default ProductDetail;
