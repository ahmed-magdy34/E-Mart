import ImageSlider from "../components/ImageSlider";
import NavBar from "../components/NavBar";
import Products from "../components/Products";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import { useProducts } from "../contexts/ProductContext";
import Loader from "../components/Loader";
import CartSideBar from "../components/CartSideBar";
import { useEffect, useState } from "react";
import { useCart } from "../contexts/CartContext";
const HomePage = () => {
  const { isLoading } = useProducts();
  const { isVisible } = useCart();
  useEffect(() => {
    if (isVisible) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isVisible]);
  return (
    <>
      <div className={`${isVisible ? "opacity-50" : "opacity-100"}`}>
        <NavBar />
        <Categories />
        <ImageSlider />
        {isLoading ? <Loader /> : <Products />}
        <Footer />
      </div>
      <div
        className={`fixed right-0 top-0 h-screen bg-white shadow-lg transform 
            ${isVisible ? "translate-x-0" : "translate-x-full"}
            transition-transform duration-300 ease-in-out z-50 overflow-y-auto`}
      >
        <CartSideBar />
      </div>
    </>
  );
};

export default HomePage;
