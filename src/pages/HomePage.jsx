import ImageSlider from "../components/ImageSlider";
import NavBar from "../components/NavBar";
import Products from "../components/Products";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import { useProducts } from "../contexts/ProductContext";
import Loader from "../components/Loader";

const HomePage = () => {
  const { isLoading } = useProducts();
  return (
    <div>
      <NavBar />
      <Categories />
      <ImageSlider />
      {isLoading ? <Loader /> : <Products />}
      <Footer />
    </div>
  );
};

export default HomePage;
