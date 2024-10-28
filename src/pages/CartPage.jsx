import NavBar from "../components/NavBar";
import Cart from "../components/Cart";
import Footer from "../components/Footer";
import OrderSummary from "../components/OrderSummary";
import { useCart } from "../contexts/CartContext";
import EmptyCart from "../components/EmptyCart";
import { useEffect } from "react";

const CartPage = () => {
  const { cart } = useCart();
  const isEmpty = cart.length === 0;
  useEffect(() => {
    if (isEmpty) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isEmpty]);

  return (
    <>
      <div className="mb-32 mt-[-20px]">
        <NavBar />
      </div>

      <div className="flex  items-center justify-center">
        {cart.length === 0 && <EmptyCart />}
      </div>
      <div className="mb-72 flex justify-around items-center">
        <div className="w-[70%]">{cart.length > 0 && <Cart />} </div>
        <div className=" w-96 h-96 mr-12">
          {cart.length > 0 && <OrderSummary />}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default CartPage;
