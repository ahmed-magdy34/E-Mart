import React from "react";
import { useCart } from "../contexts/CartContext";
import CartItemSide from "./CartItemSide";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const CartSideBar = () => {
  const { cart, setIsVisible } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <aside className="w-[400px]  flex flex-col shadow-lg h-screen">
      <div className="relative flex justify-center mb-7 mt-3">
        <h1 className="font-bold text-xl">Your Cart</h1>
        <button
          className="absolute right-0 mr-6 font-semibold"
          onClick={() => setIsVisible(false)}
        >
          X
        </button>
      </div>
      <div className="border "></div>
      <div className="flex justify-center mt-4">
        <button
          className="bg-[#3DA495] w-[352px] p-2 rounded-3xl text-white font-semibold "
          onClick={() => {
            if (location.pathname === "/cart") return;
            navigate("/cart");
            document.body.classList.remove("overflow-hidden");
          }}
        >
          Go to cart
        </button>
      </div>
      <div className="flex justify-between ml-5 mt-6 w-[352px]">
        <p className="font-semibold">Items {cart.length}</p>
        <p className="font-bold">{totalPrice} EGP</p>
      </div>
      <div>
        {cart.map((item) => (
          <CartItemSide key={item.id} item={item} />
        ))}
      </div>
    </aside>
  );
};

export default CartSideBar;
