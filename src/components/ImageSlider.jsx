import image1 from "../assets/sliders/WhatsApp Image 2024-10-21 at 11.29.37 PM.jpeg";
import image2 from "../assets/sliders/WhatsApp Image 2024-10-21 at 11.18.14 PM.jpeg";
import image3 from "../assets/sliders/ecommerce-product-photography-Guide-2024.jpg";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { useState } from "react";
const images = [image1, image2, image3];
const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleLeft = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const handleRight = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };
  return (
    <div className="max-w-[1435px] h-[600px] w-full mx-10 mt-[-12px] py-16 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
        className=" w-full h-full rounded-2xl bg-center bg-cover duration-500 object-contain "
      ></div>
      {/*left arrow*/}
      <div>
        <BsChevronLeft
          size={30}
          className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer "
          onClick={handleLeft}
        />
      </div>
      {/*arrow arrow*/}

      <div>
        <BsChevronRight
          size={30}
          className=" hidden group-hover:block  absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer "
          onClick={handleRight}
        />
      </div>
    </div>
  );
};

export default ImageSlider;