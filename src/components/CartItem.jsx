import { FaTrash } from "react-icons/fa";
import StaticStarRating from "./StaticStarRating";
import { useCart } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { incrementQuantity, decrementQuantity, deleteItem } = useCart();
  return (
    <div className="flex   flex-col border-none   w-[60%] mb-3 p-3 justify-center">
      <div className="border mb-3 "></div>
      <div className="flex items-center gap-14 justify-between">
        <img src={item.image} className="h-12 w-12" />
        <p className="text-sm font-bold font-mono">{item.title}</p>
        <p className="text-sm font-bold">{item.price} EGP</p>
      </div>
      <div className="flex justify-between mt-3">
        <StaticStarRating rating={item.rating} />
        <div className="flex gap-2">
          <button
            className="w-7 h-7 bg-slate-300  rounded-xl hover:bg-slate-400 font-bold transition duration-200"
            onClick={() => decrementQuantity(item.id)}
          >
            -
          </button>
          <p className="text-lg font-semibold">{item.quantity}</p>
          <button
            className="w-7 h-7 bg-slate-300  font-bold rounded-xl hover:bg-slate-400 transition duration-200"
            onClick={() => incrementQuantity(item.id)}
          >
            +
          </button>
        </div>
        <FaTrash
          className="text-red-500 cursor-pointer"
          onClick={() => deleteItem(item.id)}
        />
      </div>
    </div>
  );
};

export default CartItem;
