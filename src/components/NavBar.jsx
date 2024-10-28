import Logo from "../assets/images/logo_transparent.png";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { CiGlobe, CiDark } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { useProducts } from "../contexts/ProductContext";
import { useLocation, useNavigate } from "react-router-dom";
import CartIconNumber from "./CartIconNumber";
import { useCart } from "../contexts/CartContext";
import { useTheme } from "../contexts/ThemeContext";

const NavBar = () => {
  const { searchQuery, setSearchQuery } = useProducts();
  const { setIsVisible } = useCart();
  const location = useLocation();
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();

  return (
    <div
      className={` flex justify-between items-center mt-6 p-4  ${
        isDark ? "bg-black text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Logo and Title */}
      <div
        className="flex items-center cursor-pointer"
        onClick={() => navigate("/home")}
      >
        <img src={Logo} alt="logo" className="h-12" />
        <p className="text-sm font-bold font-serif mt-3 ml-2">E-Mart</p>
      </div>

      {/* Search Bar */}
      <div className="border-2 rounded-full px-4 py-1 w-80 max-w-md mx-auto bg-gray-200 dark:bg-gray-700 flex items-center gap-2">
        <IoSearch className="text-xl" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="What are you searching for?"
          className="w-full border-none focus:outline-none placeholder-gray-500 dark:placeholder-gray-300 bg-transparent"
        />
      </div>

      {/* Icons and Controls */}
      <div className="flex items-center gap-5">
        {/* Theme Toggle */}
        <div className="cursor-pointer text-2xl" onClick={toggleTheme}>
          {isDark ? <MdDarkMode /> : <CiDark />}
        </div>

        {/* Language Selector */}
        <div className="flex items-center gap-1">
          <CiGlobe className="text-2xl" />
          <p>AR</p>
        </div>

        {/* Wishlist Icon */}
        <FaRegHeart className="text-xl" />

        {/* Cart Icon with Number */}
        <div
          onClick={() => {
            if (location.pathname !== "/cart") setIsVisible(true);
          }}
          className="cursor-pointer"
        >
          <CartIconNumber />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
