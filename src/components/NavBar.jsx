import Logo from "../assets/images/logo_transparent.png";
import { IoSearch } from "react-icons/io5";
import { BiCart } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
import { useProducts } from "../contexts/ProductContext";
const NavBar = () => {
  const { searchQuery, setSearchQuery } = useProducts();
  return (
    <div className="mx-4 flex justify-between items-center mt-6">
      <div className="flex">
        <img src={Logo} alt="logo" className="h-12" />
        <p className="text-sm font-bold text-blue-950 font-serif mt-3">
          E-Mart
        </p>
      </div>
      <div className="border-2 rounded-full px-4 py-1 w-80 max-w-md mx-auto bg-gray-200 flex items-center gap-2 ">
        <IoSearch height={30} width={120} />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="What are you searching for?"
          className="w-full border-none focus:outline-none placeholder-gray-500 bg-transparent "
        />
      </div>

      <div className="flex justify-between items-center w-32  mr-5">
        <div className="flex mr-5">
          <CiGlobe size={24} />
          <p>AR</p>
        </div>
        <FaRegHeart size={20} className="mr-3 " />
        <BiCart size={28} />
      </div>
    </div>
  );
};

export default NavBar;
