import React from "react";
import { useProducts } from "../contexts/ProductContext";
import ProductItem from "./ProductItem";

const Products = () => {
  const { filteredProducts } = useProducts();
  if (filteredProducts.length === 0)
    return <p className="text-5xl font-bold text-center">no products found</p>;
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {filteredProducts.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
