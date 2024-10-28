import { FaRegTrashAlt } from "react-icons/fa";
import { useCart } from "../contexts/CartContext";
const CartItemSide = ({ item }) => {
  const { deleteItem } = useCart();
  return (
    <div>
      <div className="w-[352px] flex justify-between mt-7 p-3 ml-9 ">
        <div>
          <img src={item.image} alt="product" className="w-11 h-11" />
        </div>
        <div className="flex gap-3 items-center justify-between">
          <p className="mr-3 font-bold">{item.price} EGP</p>
          <FaRegTrashAlt
            size={16}
            color="#666666"
            className="cursor-pointer"
            onClick={() => deleteItem(item.id)}
          />
        </div>
      </div>
      <div className="border"></div>
    </div>
  );
};

export default CartItemSide;
