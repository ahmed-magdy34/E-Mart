import { useNavigate } from "react-router-dom";
import CartImage from "../assets/images/empty-cart.png";

const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center ">
      <img src={CartImage} alt="cart" className="w-80 h-80" />
      <h1 className="text-4xl font-semibold text-center">Your cart is empty</h1>
      <div className="flex justify-center">
        <button
          className="bg-[#3DA495] p-3 mt-8 w-52 rounded-3xl text-white font-semibold"
          onClick={() => navigate("/home")}
        >
          Start Shopping
        </button>
      </div>
    </div>
  );
};

export default EmptyCart;
