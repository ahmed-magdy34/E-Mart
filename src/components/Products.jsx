import React from "react";
import { useProducts } from "../contexts/ProductContext";
import ProductItem from "./ProductItem";
import { useTheme } from "../contexts/ThemeContext";

const Products = () => {
  const { filteredProducts } = useProducts();
  const { isDark } = useTheme();

  if (filteredProducts.length === 0)
    return (
      <p
        className={`text-5xl font-bold text-center ${
          isDark ? "text-white" : "text-black"
        }`}
      >
        No products found
      </p>
    );

  return (
    <div
      className={`grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ${
        isDark ? "bg-gray-900" : "bg-white"
      }`}
    >
      {filteredProducts.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
