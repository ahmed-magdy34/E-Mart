import { FaHeart, FaRegHeart } from "react-icons/fa";
import StaticStarRating from "./StaticStarRating";
import { LiaCartPlusSolid } from "react-icons/lia";
import { useState } from "react";
import { useCart } from "../contexts/CartContext";
import { useTheme } from "../contexts/ThemeContext";

const ProductItem = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);
  const { addToCart } = useCart();
  const { isDark } = useTheme(); // Access dark mode state

  const toggleLike = () => {
    setIsLiked((prevState) => !prevState);
  };

  return (
    <div className={` mx-11`}>
      <div
        className={`border-2 p-4 h-80 w-64 rounded-md flex flex-col justify-between shadow-md ${
          isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"
        }`}
      >
        <div className="flex justify-center flex-col mt-2 mb-1">
          <div className="flex justify-end">
            {isLiked ? (
              <FaHeart
                onClick={toggleLike}
                className="text-lg cursor-pointer text-red-500"
              />
            ) : (
              <FaRegHeart
                className="text-lg cursor-pointer"
                onClick={toggleLike}
              />
            )}
          </div>
          <div className="flex justify-center">
            <img src={product.image} alt="product" className="w-20 h-20" />
          </div>
        </div>

        <div>
          <h1
            className={`font-bold text-sm ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            {product.title}
          </h1>
          <p
            className={`text-sm mt-2 line-clamp-2 ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {product.description}
          </p>
        </div>

        <div className="flex">
          <StaticStarRating rating={product.rating.rate} />
          <p
            className={`text-[13px] mt-[-1px] ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            ({product.rating.count} reviews)
          </p>
        </div>

        <div className="mt-3 flex justify-between">
          <div>
            <p className={`font-bold ${isDark ? "text-white" : "text-black"}`}>
              {product.price}$
            </p>
          </div>
          <div>
            <LiaCartPlusSolid
              className="bg-[#3DA495] text-white w-6 h-6 rounded-full cursor-pointer hover:bg-blue-200"
              onClick={() => addToCart(product)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
