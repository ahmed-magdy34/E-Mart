import { useCart } from "../contexts/CartContext";

const OrderSummary = () => {
  const { cart } = useCart();
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <div className="flex flex-col ">
      <div className="mb-5">
        <p className="text-xl font-bold">Order Summary</p>
      </div>
      <div className="flex justify-between text-lg">
        <p className="font-mono">SubTotal</p>
        <p className="font-mono">{totalPrice} EGP</p>
      </div>
      <div className="flex justify-between items-center text-lg font-mono mt-5">
        <span>Shipping</span>
        <p>calculated during checkout</p>
      </div>
      <div className="mt-4">
        <p className="text-lg font-semibold font-mono">Coupon Code</p>
        <div className="flex mt-3">
          <input
            type="text"
            placeholder="Enter your code"
            className="border p-2 rounded-md px-2 w-72 border-gray-300"
          />
          <button className="bg-[#F89839] p-2 rounded-md text-white w-[100px]">
            Apply
          </button>
        </div>
      </div>
      <div className="w-full border border-slate-300 mt-12 mb-10"></div>
      <div className="flex justify-between text-lg font-bold">
        <p>Total</p>
        <p>{totalPrice}</p>
      </div>
      <div className="mt-6">
        <button className="bg-[#3DA495] w-full p-4 rounded-full text-white font-bold">
          Go to checkout
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
