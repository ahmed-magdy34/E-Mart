import { FaHeart, FaRegHeart } from "react-icons/fa";
import StaticStarRating from "./StaticStarRating";
import { LiaCartPlusSolid } from "react-icons/lia";
import { useState } from "react";

const ProductItem = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);
  ////////////////////////
  const toggleLike = () => {
    setIsLiked((prevState) => !prevState);
  };

  return (
    <div className="my-6 ml-11 mr-11">
      <div className="border-2 p-4 h-80 w-64 rounded-md flex flex-col justify-between shadow-md  ">
        <div className="flex justify-center flex-col mt-2 mb-1">
          <div className="flex justify-end">
            {isLiked && (
              <FaHeart
                onClick={toggleLike}
                className="text-lg cursor-pointer text-red-500"
              />
            )}
            {!isLiked && (
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
        {
          /////////////////////////////////////////////
        }
        <div>
          <h1 className="font-bold text-sm">{product.title}</h1>
          <p className="text-sm text-gray-400 mt-2 line-clamp-2">
            {product.description}
          </p>
        </div>
        {
          ////////////////////////////////////
        }
        <div className="flex ">
          <StaticStarRating rating={product.rating.rate} />
          <p className="text-[13px] text-gray-400 mt-[-1px]">
            ({product.rating.count}reviews)
          </p>
        </div>
        {
          ////////////////////////////////////////////////
        }
        <div className="mt-3 flex justify-between">
          <div>
            <p className="font-bold">{product.price}$</p>
          </div>
          <div className="">
            <LiaCartPlusSolid className="bg-[#3DA495] text-white w-6 h-6 rounded-full " />
          </div>
        </div>
        {
          /////////////////////////////////////////////////
        }
      </div>
    </div>
  );
};

export default ProductItem;
