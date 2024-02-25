import { useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  console.log("from single page", id);
  return (
    <div>
      <h1>This is EditProduct component{id}</h1>
    </div>
  );
};

export default EditProduct;
