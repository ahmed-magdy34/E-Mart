import ImageSlider from "../components/ImageSlider";
import NavBar from "../components/NavBar";
import Products from "../components/Products";
import Categories from "../components/Categories";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Categories />
      <ImageSlider />
      <Products />
      <Footer />
    </div>
  );
};

export default HomePage;
