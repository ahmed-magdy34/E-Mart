import React from "react";
import { useProducts } from "../contexts/ProductContext";
import ResetButton from "./ResetButton";
import { useTheme } from "../contexts/ThemeContext";

const Categories = () => {
  const { products, filterCategories } = useProducts();
  const { isDark } = useTheme();

  // Extract unique categories from products
  const uniqueCategories = Array.from(
    new Set(products.map((product) => product.category))
  );

  return (
    <div
      className={`flex justify-center flex-wrap items-baseline ${
        isDark ? "bg-gray-800" : "bg-white"
      } p-4`}
    >
      {uniqueCategories.length > 0 ? (
        uniqueCategories.map((category) => (
          <div
            key={category}
            className={`mx-4 mt-5 p-2 rounded-full cursor-pointer 
              ${
                isDark
                  ? "bg-slate-700 hover:bg-slate-600 text-gray-200"
                  : "bg-slate-100 hover:bg-slate-300 text-gray-800"
              }`}
            onClick={() => filterCategories?.(category)}
          >
            <p className="font-semibold text-sm">{category}</p>
          </div>
        ))
      ) : (
        <p className={`mt-5 ${isDark ? "text-gray-200" : "text-gray-800"}`}>
          No categories available.
        </p>
      )}
      <ResetButton />
    </div>
  );
};

export default Categories;
