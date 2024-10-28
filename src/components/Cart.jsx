import { useCart } from "../contexts/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart } = useCart();

  return (
    <div className=" ml-11 mb-7 w-full">
      <div className="flex justify-between w-[59%] items-baseline">
        <h1 className="text-xl font-semibold  mb-1">Your Cart</h1>
        <p className="text-sm text-slate-500 font-semibold">
          {cart.length} items
        </p>
      </div>
      {cart.length > 0 ? (
        cart.map((item) => <CartItem key={item.id} item={item} />)
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
