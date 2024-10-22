import { useProducts } from "../contexts/ProductContext";

const ResetButton = () => {
  const { products, setFilteredProducts } = useProducts();
  return (
    <button
      onClick={() => setFilteredProducts(products)}
      className="ml-4 bg-blue-300 hover:bg-blue-400 p-2 rounded-2xl text-white px-3 font-semibold text-sm "
    >
      Reset filter
    </button>
  );
};

export default ResetButton;
