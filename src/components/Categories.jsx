import React from "react";
import { useProducts } from "../contexts/ProductContext";
import ResetButton from "./ResetButton";

const Categories = () => {
  const { products, filterCategories } = useProducts();

  // Extract unique categories from products
  const uniqueCategories = Array.from(
    new Set(products.map((product) => product.category))
  );

  return (
    <div className="flex justify-center flex-wrap items-baseline">
      {uniqueCategories.map((category) => (
        <div
          key={category}
          className="mx-4 mt-5 bg-slate-100 p-2 rounded-full cursor-pointer hover:bg-slate-300"
          onClick={() => filterCategories?.(category)}
        >
          <p className="font-semibold text-sm">{category}</p>
        </div>
      ))}
      <ResetButton />

      {/* {uniqueCategories.length === 0 && (
        <p className="mt-5">No categories available.</p>
      )} */}
    </div>
  );
};

export default Categories;
