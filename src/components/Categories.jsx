import React from "react";
import { useProducts } from "../contexts/ProductContext";

const Categories = () => {
  const { products } = useProducts();

  // Get unique categories
  const uniqueCategories = Array.from(
    new Set(products.map((product) => product.category))
  );
  return (
    <div className="flex justify-center">
      {uniqueCategories.length > 0 ? (
        uniqueCategories.map((category, index) => (
          <div
            key={index}
            className="mx-4 mt-5 bg-slate-100 p-2 rounded-full cursor-pointer hover:bg-slate-300 "
          >
            <p className="font-semibold text-sm">{category}</p>
          </div>
        ))
      ) : (
        <p>No categories available.</p>
      )}
    </div>
  );
};

export default Categories;
