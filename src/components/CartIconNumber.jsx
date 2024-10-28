import { useCart } from "../contexts/CartContext";
import { BiCart } from "react-icons/bi";

const CartIconNumber = () => {
  const { cart } = useCart();
  return (
    <div className="relative">
      {/* Cart Icon */}
      <BiCart size={28} className="cursor-pointer" />
      {/* Cart Items Counter */}
      {cart.length > 0 && (
        <span
          className="absolute top-0 right-0 bg-[#F89839] text-white text-xs 
          font-semibold rounded-full w-4 h-4 flex items-center justify-center"
        >
          {cart.length}
        </span>
      )}
    </div>
  );
};

export default CartIconNumber;
